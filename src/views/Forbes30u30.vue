<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { ref, computed, onMounted, onUnmounted } from 'vue'

useHead({ title: 'María Grandury' })

// ── TYPES ────────────────────────────────────────────────────────────────────
interface Item    { num: string; text: string; tooltip?: string[] }
interface Section { title: string; logo?: string; logos?: string[]; items: Item[] }
interface Bio     { name: string; roles: string; mission: string; sections: Section[] }

// ── MARKDOWN PARSER ──────────────────────────────────────────────────────────
function parseMarkdown(md: string): Bio {
  const lines = md.split('\n')

  // Header meta
  const name    = 'María Grandury'
  const mission = (lines.find(l => l.startsWith('mission:')) ?? '').replace('mission:', '').trim()
  const roles   = (lines.find(l => l.startsWith('roles:'))   ?? '').replace('roles:',   '').trim()

  const sections: Section[] = []
  let current: Section | null = null

  for (const raw of lines) {
    const line = raw  // keep original for indent detection

    // New section heading
    if (line.startsWith('## ')) {
      if (current) sections.push(current)
      current = { title: line.slice(3).trim(), items: [] }
      continue
    }
    if (!current) continue

    // Section-level meta
    if (line.startsWith('logo:')) {
      current.logo = line.slice(5).trim()
      continue
    }
    if (line.startsWith('logos:')) {
      current.logos = line.slice(6).split(',').map(s => s.trim()).filter(Boolean)
      continue
    }

    // Indented bullet → tooltip line for last item
    if (/^  - /.test(line)) {
      const last = current.items[current.items.length - 1]
      if (last) {
        if (!last.tooltip) last.tooltip = []
        last.tooltip.push(line.replace(/^  - /, '').trim())
      }
      continue
    }

    // Top-level bullet → new item
    if (line.startsWith('- ')) {
      const content = line.slice(2).trim()
      // First token (up to first space) = num, rest = text
      const spaceIdx = content.indexOf(' ')
      const num  = spaceIdx === -1 ? content : content.slice(0, spaceIdx)
      const text = spaceIdx === -1 ? '' : content.slice(spaceIdx + 1).trim()
      current.items.push({ num, text })
    }
  }
  if (current) sections.push(current)

  return { name, roles, mission, sections }
}

// ── DATA ─────────────────────────────────────────────────────────────────────
const BIO = ref<Bio>({ name: 'María Grandury', roles: '', mission: '', sections: [] })

onMounted(async () => {
  try {
    const res = await fetch('/data/bio.md')
    BIO.value = parseMarkdown(await res.text())
  } catch (e) {
    console.error('Error loading content', e)
  }
})

// ── SCALE ────────────────────────────────────────────────────────────────────
const CANVAS_W = 1587
const CANVAS_H = 1123
const scale = ref(1)
const updateScale = () => { scale.value = window.innerWidth / CANVAS_W }
onMounted(() => { updateScale(); window.addEventListener('resize', updateScale) })
onUnmounted(() => window.removeEventListener('resize', updateScale))
const wrapperStyle = computed(() => ({ height: `${CANVAS_H * scale.value}px`, overflow: 'hidden' }))
const canvasStyle  = computed(() => ({ transform: `scale(${scale.value})`, transformOrigin: 'top left', width: `${CANVAS_W}px`, height: `${CANVAS_H}px` }))
</script>

<template>
  <div :style="wrapperStyle">
    <div id="award-print-target" :style="canvasStyle">

      <!-- HEADER -->
      <div class="aw-header">
        <div class="aw-header-deco" />
        <div class="aw-mission">{{ BIO.mission }}</div>
        <div class="aw-name-block">
          <div class="aw-name">{{ BIO.name }}</div>
          <div class="aw-roles">{{ BIO.roles }}</div>
        </div>
      </div>

      <!-- GRID -->
      <div class="aw-grid">
        <div v-for="section in BIO.sections" :key="section.title" class="aw-card">
          <img v-if="section.logo" class="aw-logo-corner" :src="section.logo" alt="">
          <div class="aw-card-title" :style="section.logo ? 'padding-right:84px' : ''">{{ section.title }}</div>
          <ul class="aw-items">
            <li v-for="(item, i) in section.items" :key="i" class="aw-item">
              <span class="aw-num">{{ item.num }}</span>
              <span :class="['aw-txt', item.tooltip ? 'aw-has-tooltip' : '']">
                <!-- eslint-disable-next-line vue/no-v-html -->
                <span v-html="item.text" />
                <span v-if="item.tooltip" class="aw-tip-icon" aria-hidden="true">ⓘ</span>
                <span v-if="item.tooltip" class="aw-tooltip">
                  <span v-for="line in item.tooltip" :key="line" class="aw-tooltip-line">{{ line }}</span>
                </span>
              </span>
            </li>
          </ul>
          <div v-if="section.logos?.length" class="aw-logo-row">
            <img v-for="src in section.logos" :key="src" :src="src" alt="">
          </div>
        </div>
      </div>

      <!-- BOTTOM BAR -->
      <div class="aw-bottom-bar">
        <div class="aw-bottom-stripe" />
        <a href="https://mariagrandury.ai" class="aw-home-btn">mariagrandury.ai</a>
      </div>

    </div>
  </div>
</template>

<style>
@media print {
  @page { size: A3 landscape; margin: 0; }
  body * { visibility: hidden !important; }
  #award-print-target, #award-print-target * { visibility: visible !important; }
  #award-print-target {
    position: fixed !important; top: 0 !important; left: 0 !important;
    width: 420mm !important; height: 297mm !important;
    transform: none !important; overflow: hidden !important;
  }
  .aw-tooltip, .aw-tip-icon { display: none !important; }
}
</style>

<style scoped>
#award-print-target {
  font-family: 'Inter', system-ui, sans-serif;
  background: #F0F4F5; color: #1A2A3A;
  display: flex; flex-direction: column;
  width: 1587px; height: 1123px;
}
.aw-header {
  height: 108px; flex-shrink: 0;
  background: linear-gradient(100deg, #007E75 0%, #005E70 55%, #003D55 100%);
  display: flex; align-items: center; justify-content: space-between;
  padding: 0 52px; position: relative; overflow: hidden;
}
.aw-header-deco {
  position: absolute; right: 280px; top: -80px;
  width: 260px; height: 260px; border-radius: 50%;
  border: 1px solid rgba(255,255,255,0.08); pointer-events: none;
}
.aw-mission { font-size: 26px; font-weight: 800; color: #fff; line-height: 1.2; letter-spacing: -0.025em; max-width: 1080px; }
.aw-name-block { text-align: right; }
.aw-name { font-size: 19px; font-weight: 700; color: #fff; letter-spacing: -0.01em; }
.aw-roles { font-size: 10px; font-weight: 500; color: rgba(255,255,255,0.6); letter-spacing: 0.08em; text-transform: uppercase; margin-top: 4px; }

.aw-grid {
  display: grid; grid-template-columns: repeat(3, 1fr); grid-template-rows: repeat(3, 1fr);
  gap: 10px; padding: 12px 16px 10px; flex: 1; box-sizing: border-box; min-height: 0;
}
.aw-card {
  background: #fff; border-radius: 10px; border-top: 3px solid #00C9B1;
  box-shadow: 0 1px 2px rgba(0,0,0,0.05), 0 3px 10px rgba(0,0,0,0.04);
  padding: 13px 16px 11px; display: flex; flex-direction: column;
  position: relative; box-sizing: border-box;
}
@media screen { .aw-card { overflow: visible; } }
@media print  { .aw-card { overflow: hidden;  } }

.aw-card-title {
  font-size: 12px; font-weight: 700; color: #00918A;
  text-transform: uppercase; letter-spacing: 0.13em;
  margin-bottom: 8px; padding-bottom: 7px; border-bottom: 1px solid #E8F0F0;
}
.aw-items { list-style: none; display: flex; flex-direction: column; gap: 4px; flex: 1; margin: 0; padding: 0; }
.aw-item  { display: flex; align-items: baseline; gap: 8px; }
.aw-num { font-size: 27px; font-weight: 800; color: #F5A623; min-width: 50px; line-height: 1; letter-spacing: -0.03em; flex-shrink: 0; font-variant-numeric: tabular-nums; }
.aw-txt    { font-size: 17px; color: #4A6070; line-height: 1.35; flex: 1; position: relative; }
:deep(.aw-txt b) { color: #1A2A3A; font-weight: 600; }

/* ── Tooltip ── */
.aw-has-tooltip { cursor: help; }
.aw-tip-icon {
  font-size: 11px; color: #00918A; margin-left: 3px;
  vertical-align: super; line-height: 1;
}
.aw-tooltip {
  display: none;
  position: absolute; bottom: calc(100% + 6px); left: 0;
  background: #fff; border: 1.5px solid #00C9B1; border-radius: 8px;
  padding: 10px 14px; min-width: 260px; max-width: 380px;
  z-index: 200; box-shadow: 0 6px 24px rgba(0,0,0,0.14);
}
.aw-has-tooltip:hover .aw-tooltip { display: flex; flex-direction: column; gap: 3px; }
.aw-tooltip-line { font-size: 13px; color: #1A2A3A; line-height: 1.4; }
.aw-tooltip-line::before { content: '›  '; color: #00C9B1; font-weight: 700; }

.aw-logo-corner { position: absolute; top: 10px; right: 12px; height: 26px; width: auto; max-width: 68px; object-fit: contain; opacity: 0.85; }
.aw-logo-row { display: flex; align-items: center; gap: 8px; margin-top: 7px; padding-top: 6px; border-top: 1px solid #E8F0F0; flex-wrap: wrap; }
.aw-logo-row img { height: 20px; width: auto; max-width: 76px; object-fit: contain; opacity: 0.75; }

.aw-bottom-bar {
  height: 40px; flex-shrink: 0;
  background: linear-gradient(100deg, #007E75 0%, #005E70 55%, #003D55 100%);
  display: flex; align-items: center; justify-content: center; position: relative;
}
.aw-bottom-stripe {
  position: absolute; top: 0; left: 0; width: 100%; height: 3px;
  background: repeating-linear-gradient(90deg, #F5A623 0px, #F5A623 28px, transparent 28px, transparent 56px);
  opacity: 0.5;
}
.aw-home-btn {
  font-size: 13px; font-weight: 600; color: rgba(255,255,255,0.9);
  text-decoration: none; letter-spacing: 0.06em;
  padding: 4px 16px; border: 1px solid rgba(255,255,255,0.3); border-radius: 20px;
}
.aw-home-btn:hover { background: rgba(255,255,255,0.12); color: #fff; }
</style>
