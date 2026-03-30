<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { ref, computed, onMounted, onUnmounted } from 'vue'

useHead({
  title: 'María Grandury — Award One-Pager (A)',
  meta: [
    { name: 'description', content: 'María Grandury: NLP Researcher at EPFL, Founder of SomosNLP, AI Speaker — Impact Dashboard' },
    { property: 'og:title', content: 'María Grandury — Award One-Pager' },
    { property: 'og:image', content: 'https://pbs.twimg.com/profile_images/1584913293470273537/6u-Q8SJP_400x400.jpg' },
  ],
})

// ── DATA ────────────────────────────────────────────────────────────────────

interface HeroItem    { num: string; label: string; details: string[] }
interface SectionItem { num: string; text: string }
interface Section     { title: string; logo?: string; logos?: string[]; items: SectionItem[] }

function parseMarkdown(md: string): { hero: HeroItem[]; sections: Section[] } {
  const lines = md.split('\n')
  const hero: HeroItem[] = []
  const sections: Section[] = []
  let mode: 'hero' | 'section' | null = null
  let currentSection: Section | null = null

  for (const line of lines) {
    if (line.startsWith('## HERO')) { mode = 'hero'; continue }
    if (line.startsWith('## ')) {
      if (currentSection) sections.push(currentSection)
      currentSection = { title: line.slice(3).trim(), items: [] }
      mode = 'section'
      continue
    }
    if (mode === 'hero') {
      if (/^  - /.test(line)) {
        if (hero.length) hero[hero.length - 1].details.push(line.replace(/^  - /, '').trim())
      } else if (line.startsWith('- ')) {
        const content = line.slice(2).trim()
        const spaceIdx = content.indexOf(' ')
        hero.push({ num: content.slice(0, spaceIdx), label: content.slice(spaceIdx + 1).trim(), details: [] })
      }
    } else if (mode === 'section' && currentSection) {
      if (line.startsWith('logo:'))  { currentSection.logo  = line.slice(5).trim(); continue }
      if (line.startsWith('logos:')) { currentSection.logos = line.slice(6).split(',').map(s => s.trim()).filter(Boolean); continue }
      if (line.startsWith('- ')) {
        const content = line.slice(2).trim()
        const spaceIdx = content.indexOf(' ')
        const num  = spaceIdx === -1 ? content : content.slice(0, spaceIdx)
        const text = spaceIdx === -1 ? '' : content.slice(spaceIdx + 1).trim()
        currentSection.items.push({ num, text })
      }
    }
  }
  if (currentSection) sections.push(currentSection)
  return { hero, sections }
}

const HERO     = ref<HeroItem[]>([])
const SECTIONS = ref<Section[]>([])

onMounted(async () => {
  try {
    const res = await fetch('/data/award_proposal_1.md')
    const parsed = parseMarkdown(await res.text())
    HERO.value     = parsed.hero
    SECTIONS.value = parsed.sections
  } catch (e) { console.error('Error loading award_proposal_1.md', e) }
})

// ── RESPONSIVE SCALE ────────────────────────────────────────────────────────
const CANVAS_W = 1587
const CANVAS_H = 1123
const scale = ref(1)

const updateScale = () => { scale.value = window.innerWidth / CANVAS_W }
onMounted(() => { updateScale(); window.addEventListener('resize', updateScale) })
onUnmounted(() => { window.removeEventListener('resize', updateScale) })

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
  <div :style="wrapperStyle">
    <div id="award-print-target" :style="canvasStyle">

      <!-- HEADER -->
      <div class="aw-header">
        <div class="aw-header-left">
          <img src="/images/profile/maria_grandury.png" class="aw-photo" alt="María Grandury" />
          <div>
            <div class="aw-name">María Grandury</div>
            <div class="aw-roles">Researcher · Founder · Speaker</div>
          </div>
        </div>
        <div class="aw-mission">Democratizing responsible, open, and multicultural AI</div>
      </div>

      <!-- HERO METRICS -->
      <div class="aw-hero">
        <div v-for="m in HERO" :key="m.label" class="aw-hero-item aw-tip">
          <div class="aw-hero-num">{{ m.num }}</div>
          <div class="aw-hero-label">{{ m.label }}</div>
          <div class="aw-tip-box">
            <div v-for="d in m.details" :key="d" class="aw-tip-line">{{ d }}</div>
          </div>
        </div>
      </div>

      <!-- GRID -->
      <div class="aw-grid">
        <div v-for="s in SECTIONS" :key="s.title" class="aw-card">
          <img v-if="s.logo" :src="s.logo" class="aw-logo-corner" alt="" />
          <div class="aw-card-title" :style="s.logo ? 'padding-right: 72px' : ''">{{ s.title }}</div>
          <ul class="aw-items">
            <li v-for="(item, i) in s.items" :key="i" class="aw-item">
              <span class="aw-num-sm">{{ item.num }}</span>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <span class="aw-txt" v-html="item.text" />
            </li>
          </ul>
          <div v-if="s.logos?.length" class="aw-logo-row">
            <img v-for="src in s.logos" :key="src" :src="src" alt="" />
          </div>
        </div>
      </div>

      <!-- BOTTOM BAR -->
      <div class="aw-bottom-bar">
        <div class="aw-bottom-stripe" />
        <a href="https://mariagrandury.ai" class="aw-link">mariagrandury.ai</a>
        <span class="aw-sep">·</span>
        <a href="https://linkedin.com/in/mariagrandury" class="aw-link">LinkedIn</a>
        <span class="aw-sep">·</span>
        <a href="https://scholar.google.es/citations?user=3mc_-QsAAAAJ" class="aw-link">Scholar</a>
        <span class="aw-sep">·</span>
        <a href="https://github.com/mariagrandury" class="aw-link">GitHub</a>
        <span class="aw-sep">·</span>
        <a href="https://huggingface.co/mariagrandury" class="aw-link">Hugging Face</a>
      </div>

    </div>
  </div>
</template>

<!-- ── PRINT STYLES ──────────────────────────────────────────────────────── -->
<style>
@media print {
  @page { size: A3 landscape; margin: 0; }
  body * { visibility: hidden !important; }
  #award-print-target,
  #award-print-target * { visibility: visible !important; }
  #award-print-target {
    position: fixed !important;
    top: 0 !important; left: 0 !important;
    width: 420mm !important; height: 297mm !important;
    transform: none !important;
    overflow: hidden !important;
  }
  .aw-tip-box { display: none !important; }
}
</style>

<!-- ── COMPONENT STYLES ──────────────────────────────────────────────────── -->
<style scoped>
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
  height: 82px;
  background: linear-gradient(100deg, #007E75 0%, #005E70 55%, #003D55 100%);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  flex-shrink: 0;
}
.aw-header-left {
  display: flex;
  align-items: center;
  gap: 16px;
}
.aw-photo {
  width: 52px; height: 52px;
  border-radius: 50%;
  border: 2px solid rgba(255,255,255,0.4);
  object-fit: cover;
}
.aw-name {
  font-size: 20px;
  font-weight: 700;
  color: #fff;
}
.aw-roles {
  font-size: 10px;
  font-weight: 500;
  color: rgba(255,255,255,0.6);
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-top: 2px;
}
.aw-mission {
  font-size: 22px;
  font-weight: 800;
  color: #fff;
  text-align: right;
  max-width: 620px;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

/* ── HERO METRICS ── */
.aw-hero {
  height: 72px;
  background: #003A3A;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 80px;
  flex-shrink: 0;
}
.aw-hero-item { text-align: center; }
.aw-hero-num {
  font-size: 30px;
  font-weight: 800;
  color: #F5A623;
  line-height: 1;
  letter-spacing: -0.03em;
  font-variant-numeric: tabular-nums;
}
.aw-hero-label {
  font-size: 10px;
  font-weight: 600;
  color: rgba(255,255,255,0.6);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-top: 4px;
}

/* ── TOOLTIP ── */
.aw-tip { position: relative; cursor: help; }
.aw-tip-box {
  display: none;
  position: absolute;
  top: 100%;
  left: 50%;
  transform: translateX(-50%);
  background: #1A2A3A;
  color: #e0e8ee;
  border-radius: 8px;
  padding: 10px 14px;
  font-size: 11px;
  line-height: 1.7;
  z-index: 999;
  width: max-content;
  max-width: 300px;
  max-height: 320px;
  overflow-y: auto;
  box-shadow: 0 8px 24px rgba(0,0,0,0.25);
  margin-top: 6px;
}
.aw-tip:hover .aw-tip-box { display: block; }
.aw-tip-line {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

/* ── GRID ── */
.aw-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  gap: 9px;
  padding: 10px 16px 8px;
  flex: 1;
  box-sizing: border-box;
  min-height: 0;
}

/* ── CARD ── */
.aw-card {
  background: #fff;
  border-radius: 8px;
  border-top: 3px solid #00C9B1;
  box-shadow: 0 1px 2px rgba(0,0,0,0.04), 0 3px 8px rgba(0,0,0,0.03);
  padding: 12px 14px 10px;
  overflow: visible;
  display: flex;
  flex-direction: column;
  position: relative;
  box-sizing: border-box;
}
.aw-card-title {
  font-size: 16px;
  font-weight: 700;
  color: #00918A;
  text-transform: uppercase;
  letter-spacing: 0.12em;
  margin-bottom: 7px;
  padding-bottom: 6px;
  border-bottom: 1px solid #E8F0F0;
}

/* ── ITEMS ── */
.aw-items {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 3px;
  flex: 1;
  margin: 0; padding: 0;
}
.aw-item {
  display: flex;
  align-items: baseline;
  gap: 8px;
}
.aw-num-lg {
  font-size: 22px;
  font-weight: 800;
  color: #F5A623;
  min-width: 44px;
  line-height: 1;
  letter-spacing: -0.03em;
  flex-shrink: 0;
  font-variant-numeric: tabular-nums;
}
.aw-num-sm {
  font-size: 15px;
  font-weight: 700;
  color: #E59010;
  min-width: 30px;
  line-height: 1;
  flex-shrink: 0;
}
.aw-txt {
  font-size: 14px;
  color: #4A6070;
  line-height: 1.35;
  flex: 1;
}
:deep(.aw-txt b) { color: #1A2A3A; font-weight: 600; }
:deep(.aw-txt a) { color: #00918A; text-decoration: none; }
:deep(.aw-txt a:hover) { text-decoration: underline; }

/* ── LOGOS ── */
.aw-logo-corner {
  position: absolute;
  top: 10px; right: 12px;
  height: 24px;
  width: auto; max-width: 64px;
  object-fit: contain;
  opacity: 0.8;
}
.aw-logo-row {
  display: flex;
  align-items: center;
  gap: 8px;
  margin-top: auto;
  padding-top: 6px;
  border-top: 1px solid #E8F0F0;
}
.aw-logo-row img {
  height: 18px;
  width: auto; max-width: 68px;
  object-fit: contain;
  opacity: 0.7;
}

/* ── BOTTOM BAR ── */
.aw-bottom-bar {
  height: 38px;
  flex-shrink: 0;
  background: linear-gradient(100deg, #007E75 0%, #005E70 55%, #003D55 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6px;
  position: relative;
}
.aw-bottom-stripe {
  position: absolute;
  top: 0; left: 0;
  width: 100%; height: 3px;
  background: repeating-linear-gradient(90deg, #F5A623 0px, #F5A623 28px, transparent 28px, transparent 56px);
  opacity: 0.5;
}
.aw-link {
  font-size: 12px;
  font-weight: 600;
  color: rgba(255,255,255,0.85);
  text-decoration: none;
  letter-spacing: 0.04em;
}
.aw-link:hover { color: #fff; text-decoration: underline; }
.aw-sep { color: rgba(255,255,255,0.3); font-size: 12px; }
</style>
