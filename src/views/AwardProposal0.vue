<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { ref, computed, onMounted, onUnmounted } from 'vue'

useHead({
  title: 'María Grandury — One-Pager',
  meta: [
    { name: 'description', content: 'One-pager de María Grandury: Investigadora en EPFL, Fundadora de SomosNLP, y Divulgadora de IA responsable, abierta y multicultural.' },
    { property: 'og:title', content: 'María Grandury — One-Pager' },
    { property: 'og:image', content: 'https://pbs.twimg.com/profile_images/1584913293470273537/6u-Q8SJP_400x400.jpg' },
    { name: 'twitter:card', content: 'summary' },
    { name: 'twitter:site', content: '@mariagrandury' },
    { name: 'twitter:creator', content: '@mariagrandury' },
  ],
})

// ── DATA ────────────────────────────────────────────────────────────────────

interface Item    { num: string; text: string; tooltip?: string[] }
interface Section { title: string; logo?: string; logos?: string[]; items: Item[] }
interface Bio     { name: string; roles: string; mission: string; sections: Section[] }

function parseMarkdown(md: string): Bio {
  const lines = md.split('\n')
  const name    = 'María Grandury'
  const mission = (lines.find(l => l.startsWith('mission:')) ?? '').replace('mission:', '').trim()
  const roles   = (lines.find(l => l.startsWith('roles:'))   ?? '').replace('roles:',   '').trim()
  const sections: Section[] = []
  let current: Section | null = null
  for (const line of lines) {
    if (line.startsWith('## ')) {
      if (current) sections.push(current)
      current = { title: line.slice(3).trim(), items: [] }
      continue
    }
    if (!current) continue
    if (line.startsWith('logo:'))  { current.logo  = line.slice(5).trim(); continue }
    if (line.startsWith('logos:')) { current.logos = line.slice(6).split(',').map(s => s.trim()).filter(Boolean); continue }
    if (/^  - /.test(line)) {
      const last = current.items[current.items.length - 1]
      if (last) { if (!last.tooltip) last.tooltip = []; last.tooltip.push(line.replace(/^  - /, '').trim()) }
      continue
    }
    if (line.startsWith('- ')) {
      const content = line.slice(2).trim()
      const spaceIdx = content.indexOf(' ')
      const num  = spaceIdx === -1 ? content : content.slice(0, spaceIdx)
      const text = spaceIdx === -1 ? '' : content.slice(spaceIdx + 1).trim()
      current.items.push({ num, text })
    }
  }
  if (current) sections.push(current)
  return { name, roles, mission, sections }
}

const BIO = ref<Bio>({ name: 'María Grandury', roles: '', mission: '', sections: [] })

onMounted(async () => {
  try {
    const res = await fetch('/data/award_proposal_0.md')
    BIO.value = parseMarkdown(await res.text())
  } catch (e) { console.error('Error loading award_proposal_0.md', e) }
})

// ── RESPONSIVE SCALE ────────────────────────────────────────────────────────
// A3 landscape at 96 dpi: 420mm × 297mm → 1587 × 1123 px
const CANVAS_W = 1587
const CANVAS_H = 1123

const scale = ref(1)

const updateScale = () => {
  scale.value = window.innerWidth / CANVAS_W
}

onMounted(() => {
  updateScale()
  window.addEventListener('resize', updateScale)
})

onUnmounted(() => {
  window.removeEventListener('resize', updateScale)
})

const wrapperStyle = computed(() => ({
  height: `${CANVAS_H * scale.value}px`,
  overflow: 'hidden',
}))

const canvasStyle = computed(() => ({
  transform: `scale(${scale.value})`,
  transformOrigin: 'top left',
  width: `${CANVAS_W}px`,
  height: `${CANVAS_H}px`,
}))

</script>

<template>
  <!-- ── SCALED WRAPPER (sets document height to match scaled canvas) ── -->
  <div :style="wrapperStyle">

    <!-- ── PRINTABLE CANVAS ── -->
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
          <div class="aw-card-title" :style="section.logo ? 'padding-right: 84px' : ''">
            {{ section.title }}
          </div>
          <ul class="aw-items">
            <li v-for="(item, i) in section.items" :key="i" class="aw-item">
              <span class="aw-num-sm">{{ item.num }}</span>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <span class="aw-txt" v-html="item.text" />
            </li>
          </ul>
          <div v-if="section.logos && section.logos.length" class="aw-logo-row">
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

<!-- ── PRINT STYLES (global — only active @media print) ─────────────────── -->
<style>
@media print {
  @page { size: A3 landscape; margin: 0; }

  /* Hide the entire document… */
  body * { visibility: hidden !important; }

  /* …then reveal only the print target and its children */
  #award-print-target,
  #award-print-target * { visibility: visible !important; }

  /* Pin the canvas to the top-left corner at A3 landscape size */
  #award-print-target {
    position: fixed !important;
    top: 0 !important;
    left: 0 !important;
    width: 420mm !important;
    height: 297mm !important;
    transform: none !important;
    overflow: hidden !important;
  }
}
</style>

<!-- ── COMPONENT STYLES ──────────────────────────────────────────────────── -->
<style scoped>
/* ── CANVAS ── */
#award-print-target {
  font-family: 'Inter', system-ui, sans-serif;
  background: #F0F4F5;
  color: #1A2A3A;
  display: flex;
  flex-direction: column;
  width: 1587px;
  height: 1123px;
}

/* ── HEADER ── */
.aw-header {
  height: 112px;
  background: linear-gradient(100deg, #007E75 0%, #005E70 55%, #003D55 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 56px;
  position: relative;
  overflow: hidden;
  flex-shrink: 0;
}
.aw-header-deco {
  position: absolute;
  right: 280px;
  top: -80px;
  width: 260px;
  height: 260px;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.08);
  pointer-events: none;
}
.aw-mission {
  font-size: 27px;
  font-weight: 800;
  color: #ffffff;
  line-height: 1.2;
  letter-spacing: -0.025em;
  max-width: 1080px;
}
.aw-name-block { text-align: right; }
.aw-name {
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
  letter-spacing: -0.01em;
}
.aw-roles {
  font-size: 11px;
  font-weight: 500;
  color: rgba(255, 255, 255, 0.6);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-top: 4px;
}

/* ── GRID ── */
.aw-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 11px;
  padding: 13px 18px 11px;
  flex: 1;
  box-sizing: border-box;
  min-height: 0;
}

/* ── CARD ── */
.aw-card {
  background: #ffffff;
  border-radius: 10px;
  border-top: 3px solid #00C9B1;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.05), 0 3px 10px rgba(0, 0, 0, 0.04);
  padding: 15px 18px 13px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
}
.aw-card-title {
  font-size: 22px;
  font-weight: 700;
  color: #00918A;
  text-transform: uppercase;
  letter-spacing: 0.13em;
  margin-bottom: 9px;
  padding-bottom: 8px;
  border-bottom: 1px solid #E8F0F0;
}

/* ── ITEMS ── */
.aw-items {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 5px;
  flex: 1;
  margin: 0;
  padding: 0;
}
.aw-item {
  display: flex;
  align-items: baseline;
  gap: 9px;
}
.aw-num-lg {
  font-size: 28px;
  font-weight: 800;
  color: #F5A623;
  min-width: 52px;
  line-height: 1;
  letter-spacing: -0.03em;
  flex-shrink: 0;
  font-variant-numeric: tabular-nums;
}
.aw-num-sm {
  font-size: 18px;
  font-weight: 700;
  color: #E59010;
  min-width: 36px;
  line-height: 1;
  flex-shrink: 0;
}
.aw-txt {
  font-size: 18px;
  color: #4A6070;
  line-height: 1.35;
  flex: 1;
}
:deep(.aw-txt b) {
  color: #1A2A3A;
  font-weight: 600;
}

/* ── LOGOS ── */
.aw-logo-corner {
  position: absolute;
  top: 12px;
  right: 14px;
  height: 28px;
  width: auto;
  max-width: 72px;
  object-fit: contain;
  opacity: 0.85;
}
.aw-logo-row {
  display: flex;
  align-items: center;
  gap: 10px;
  margin-top: 8px;
  padding-top: 7px;
  border-top: 1px solid #E8F0F0;
  flex-wrap: wrap;
}
.aw-logo-row img {
  height: 22px;
  width: auto;
  max-width: 80px;
  object-fit: contain;
  opacity: 0.75;
}

/* ── BOTTOM BAR ── */
.aw-bottom-bar {
  height: 44px;
  flex-shrink: 0;
  background: linear-gradient(100deg, #007E75 0%, #005E70 55%, #003D55 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
}
.aw-bottom-stripe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: repeating-linear-gradient(
    90deg,
    #F5A623 0px, #F5A623 28px,
    transparent 28px, transparent 56px
  );
  opacity: 0.5;
}
.aw-home-btn {
  font-size: 14px;
  font-weight: 600;
  color: rgba(255, 255, 255, 0.9);
  text-decoration: none;
  letter-spacing: 0.06em;
  padding: 5px 18px;
  border: 1px solid rgba(255, 255, 255, 0.3);
  border-radius: 20px;
  transition: background 0.15s, color 0.15s;
}
.aw-home-btn:hover {
  background: rgba(255, 255, 255, 0.12);
  color: #ffffff;
}
</style>
