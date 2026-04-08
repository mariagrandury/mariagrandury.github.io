<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { ref, computed, onMounted, onUnmounted } from 'vue'

useHead({
  title: 'María Grandury',
  meta: [
    { name: 'description', content: 'María Grandury: NLP Researcher at EPFL, Founder of SomosNLP, AI Speaker — Three Pillars' },
    { property: 'og:title', content: 'María Grandury' },
    { property: 'og:image', content: 'https://pbs.twimg.com/profile_images/1584913293470273537/6u-Q8SJP_400x400.jpg' },
  ],
})

// ── DATA ────────────────────────────────────────────────────────────────────

interface SectionItem { text: string; tooltip?: string[] }
interface SubSection { subtitle: string; items: SectionItem[]; logos?: string[]; logosSize?: 'sm' | 'lg' }
interface Pillar { title: string; accent: string; metric: { num: string; label: string }; subMetrics: string; sections: SubSection[] }

function parseMarkdown(md: string): Pillar[] {
  const lines = md.split('\n')
  const pillars: Pillar[] = []
  let current: Pillar | null = null
  let currentSection: SubSection | null = null

  const pushSection = () => { if (current && currentSection) { current.sections.push(currentSection); currentSection = null } }
  const pushPillar  = () => { pushSection(); if (current) pillars.push(current) }

  for (const line of lines) {
    if (line.startsWith('## ')) {
      pushPillar()
      current = { title: line.slice(3).trim(), accent: '', metric: { num: '', label: '' }, subMetrics: '', sections: [] }
      continue
    }
    if (!current) continue
    if (line.startsWith('accent:'))     { current.accent = line.slice(7).trim(); continue }
    if (line.startsWith('metric:')) {
      const m = line.slice(7).trim(); const i = m.indexOf(' ')
      current.metric = i === -1 ? { num: m, label: '' } : { num: m.slice(0, i), label: m.slice(i + 1).trim() }
      continue
    }
    if (line.startsWith('subMetrics:')) { current.subMetrics = line.slice(11).trim(); continue }
    if (line.startsWith('logos-sm:')) {
      if (currentSection) { currentSection.logos = line.slice(9).split(',').map(s => s.trim()).filter(Boolean); currentSection.logosSize = 'sm' }
      continue
    }
    if (line.startsWith('logos-lg:')) {
      if (currentSection) { currentSection.logos = line.slice(9).split(',').map(s => s.trim()).filter(Boolean); currentSection.logosSize = 'lg' }
      continue
    }
    if (line.startsWith('logos:')) {
      if (currentSection) { currentSection.logos = line.slice(6).split(',').map(s => s.trim()).filter(Boolean); currentSection.logosSize = 'sm' }
      continue
    }
    if (line.startsWith('### ')) {
      pushSection()
      currentSection = { subtitle: line.slice(4).trim(), items: [] }
      continue
    }
    if (currentSection && /^\s+- /.test(line)) {
      const last = currentSection.items[currentSection.items.length - 1]
      if (last) { if (!last.tooltip) last.tooltip = []; last.tooltip.push(line.replace(/^\s+- /, '').trim()) }
      continue
    }
    if (currentSection && line.startsWith('- ')) {
      currentSection.items.push({ text: line.slice(2).trim() })
    }
  }
  pushPillar()
  return pillars
}

const PILLARS = ref<Pillar[]>([])

onMounted(async () => {
  try {
    const res = await fetch('/data/bio.md')
    PILLARS.value = parseMarkdown(await res.text())
  } catch (e) { console.error('Error loading content', e) }
})

// ── RESPONSIVE SCALE ────────────────────────────────────────────────────────
const CANVAS_W = 1587
const CANVAS_H = 1123
const scale = ref(1)

const updateScale = () => {
  scale.value = Math.min(
    window.innerWidth  / CANVAS_W,
    window.innerHeight / CANVAS_H,
  )
}
onMounted(() => { updateScale(); window.addEventListener('resize', updateScale) })
onUnmounted(() => { window.removeEventListener('resize', updateScale) })

const wrapperStyle = computed(() => ({
  width: '100vw',
  height: '100dvh',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  overflow: 'hidden',
}))
const canvasStyle = computed(() => ({
  transform: `scale(${scale.value})`,
  transformOrigin: 'center center',
  width: `${CANVAS_W}px`,
  height: `${CANVAS_H}px`,
  flexShrink: '0',
}))
</script>

<template>
  <div :style="wrapperStyle">
    <div id="award-print-target" :style="canvasStyle">

      <!-- HEADER -->
      <div class="aw-header">
        <div class="aw-header-left">
          <img src="https://mariagrandury.ai/images/profile/maria_grandury.png" class="aw-photo" alt="María Grandury" />
          <div>
            <div class="aw-name">María Grandury</div>
            <div class="aw-roles">Fundadora · Investigadora · Divulgadora</div>
          </div>
        </div>
        <div class="aw-mission">Democratizar el acceso a una IA responsable, abierta y multicultural</div>
      </div>

      <!-- THREE PILLARS -->
      <div class="aw-pillars">
        <div v-for="p in PILLARS" :key="p.title" class="aw-pillar">
          <div class="aw-pillar-head" :style="{ background: p.accent }">
            <div class="aw-pillar-title">{{ p.title }}</div>
          </div>
          <div class="aw-pillar-body">
            <div class="aw-pillar-metric">
              <span class="aw-big-num">{{ p.metric.num }}</span>
              <span class="aw-big-label">{{ p.metric.label }}</span>
            </div>
            <div class="aw-pillar-sub">{{ p.subMetrics }}</div>
            <div v-for="s in p.sections" :key="s.subtitle" class="aw-section">
              <div class="aw-section-title">{{ s.subtitle }}</div>
              <ul class="aw-section-list">
                <li v-for="(item, i) in s.items" :key="i" :class="item.tooltip ? 'aw-has-tooltip' : ''">
                  <!-- eslint-disable-next-line vue/no-v-html -->
                  <span v-html="item.text" />
                  <span v-if="item.tooltip" class="aw-tip-wrapper">
                    <span class="aw-tip-icon" aria-hidden="true">ⓘ</span>
                    <span class="aw-tooltip">
                      <!-- eslint-disable-next-line vue/no-v-html -->
                      <span v-for="line in item.tooltip" :key="line" class="aw-tooltip-line" v-html="line" />
                    </span>
                  </span>
                </li>
              </ul>
              <div v-if="s.logos?.length" :class="['aw-section-logos', s.logosSize === 'lg' ? 'aw-section-logos-lg' : 'aw-section-logos-sm']">
                <img v-for="l in s.logos" :key="l" :src="l" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- BOTTOM BAR -->
      <div class="aw-bottom-bar">
        <div class="aw-bottom-stripe" />
        <a href="https://mariagrandury.ai/forbes30under30" class="aw-link">Versión interactiva: mariagrandury.ai/forbes30under30</a>
        <span class="aw-sep"> </span>
        <span class="aw-sep"> </span>
        <span class="aw-sep"> </span>
        <span class="aw-sep"> </span>
        <span class="aw-sep"> </span>
        <a href="https://linkedin.com/in/mariagrandury" class="aw-link">LinkedIn</a>
        <span class="aw-sep">·</span>
        <a href="https://x.com/mariagrandury" class="aw-link">X</a>
        <span class="aw-sep">·</span>
        <a href="https://huggingface.co/mariagrandury" class="aw-link">Hugging Face</a>
        <span class="aw-sep">·</span>
        <a href="https://scholar.google.es/citations?user=3mc_-QsAAAAJ" class="aw-link">Scholar</a>
        <span class="aw-sep">·</span>
        <a href="https://wa.me/0034681188591" class="aw-link aw-whatsapp-link">
          <svg class="aw-phone-icon" viewBox="0 0 24 24" fill="currentColor"><path d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2a1 1 0 0 1 1.01-.24 11.36 11.36 0 0 0 3.58.57 1 1 0 0 1 1 1V20a1 1 0 0 1-1 1A17 17 0 0 1 3 4a1 1 0 0 1 1-1h3.5a1 1 0 0 1 1 1c0 1.25.2 2.45.57 3.57a1 1 0 0 1-.25 1.02l-2.2 2.2z"/></svg>
          +34 681 188 591 (Contactar por WhatsApp, estoy en Suiza)
        </a>
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
  .aw-tip-icon, .aw-tooltip { display: none !important; }
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
  max-width: 800px;
  line-height: 1.2;
  letter-spacing: -0.02em;
}

/* ── PILLARS ── */
.aw-pillars {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 12px;
  padding: 12px 16px 8px;
  flex: 1;
  min-height: 0;
}
.aw-pillar {
  display: flex;
  flex-direction: column;
  border-radius: 8px;
  overflow: visible;
  box-shadow: 0 2px 8px rgba(0,0,0,0.05);
}
.aw-pillar-head {
  padding: 10px 18px;
  display: flex;
  align-items: center;
  flex-shrink: 0;
  border-radius: 8px 8px 0 0;
}
.aw-pillar-title {
  font-size: 16px;
  font-weight: 800;
  color: #fff;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}
.aw-pillar-body {
  background: #fff;
  flex: 1;
  padding: 14px 18px 12px;
  display: flex;
  flex-direction: column;
  overflow: visible;
  border-radius: 0 0 8px 8px;
}
.aw-pillar-metric {
  display: flex;
  align-items: baseline;
  gap: 10px;
  margin-bottom: 2px;
}
.aw-big-num {
  font-size: 40px;
  font-weight: 800;
  color: #F5A623;
  line-height: 1;
  letter-spacing: -0.03em;
  font-variant-numeric: tabular-nums;
}
.aw-big-label {
  font-size: 16px;
  font-weight: 600;
  color: #4A6070;
  text-transform: uppercase;
  letter-spacing: 0.06em;
}
.aw-pillar-sub {
  font-size: 11px;
  color: #7A8E9E;
  margin-bottom: 12px;
  padding-bottom: 8px;
  border-bottom: 1px solid #E8F0F0;
}

/* ── SECTIONS ── */
.aw-section {
  margin-bottom: 10px;
}
.aw-section:last-of-type {
  margin-bottom: 0;
}
.aw-section-title {
  font-size: 15px;
  font-weight: 700;
  color: #00918A;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 5px;
  margin-top: 10px;
}
.aw-section-list {
  list-style: none;
  margin: 0; padding: 0;
  display: flex;
  flex-direction: column;
  gap: 3px;
}
.aw-section-list li {
  font-size: 14.5px;
  color: #4A6070;
  line-height: 1.4;
  padding-left: 10px;
  border-left: 2px solid #00C9B1;
}
:deep(.aw-section-list b) { color: #1A2A3A; font-weight: 600; }
:deep(.aw-section-list a) { color: #00918A; text-decoration: none; }
:deep(.aw-section-list a:hover) { text-decoration: underline; }

.aw-has-tooltip { cursor: help; }
.aw-tip-wrapper { position: relative; display: inline; }
.aw-tip-icon { font-size: 10px; color: #00918A; margin-left: 3px; vertical-align: super; line-height: 1; cursor: help; }
.aw-tooltip {
  display: none;
  position: absolute; top: 0; left: calc(100% + 4px);
  background: #fff; border: 1.5px solid #00C9B1; border-radius: 8px;
  padding: 10px 14px; min-width: 260px; max-width: 460px;
  z-index: 200; box-shadow: 0 6px 24px rgba(0,0,0,0.14);
  flex-direction: column; gap: 3px;
}
.aw-tip-wrapper:hover .aw-tooltip { display: flex; }
/* Flip tooltip to the left for the last pillar */
.aw-pillar:last-child .aw-tooltip { left: auto; right: calc(100% + 4px); }
.aw-tooltip-line { font-size: 12px; color: #1A2A3A; line-height: 1.45; white-space: nowrap; }
.aw-tooltip-line::before { content: '›  '; color: #00C9B1; font-weight: 700; }
:deep(.aw-tooltip-line a) { color: #00918A; text-decoration: none; }
:deep(.aw-tooltip-line a:hover) { text-decoration: underline; }

/* ── LOGOS ── */
.aw-section-logos {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  margin: 8px auto 0;
}
.aw-section-logos img {
  width: auto;
  object-fit: contain;
  opacity: 0.9;
  border-radius: 8px;
  margin-top: 8px;
}
.aw-section-logos-sm img { height: 60px; }
.aw-section-logos-lg img { height: 100px; }

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
.aw-whatsapp-link { display: inline-flex; align-items: center; gap: 4px; }
.aw-phone-icon { width: 14px; height: 14px; flex-shrink: 0; }
</style>
