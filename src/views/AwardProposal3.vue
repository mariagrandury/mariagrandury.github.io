<script setup lang="ts">
import { useHead } from '@vueuse/head'
import { ref, computed, onMounted, onUnmounted } from 'vue'

useHead({
  title: 'María Grandury — Award One-Pager (C)',
  meta: [
    { name: 'description', content: 'María Grandury: NLP Researcher at EPFL, Founder of SomosNLP, AI Speaker — Spotlight & Grid' },
    { property: 'og:title', content: 'María Grandury — Award One-Pager' },
    { property: 'og:image', content: 'https://pbs.twimg.com/profile_images/1584913293470273537/6u-Q8SJP_400x400.jpg' },
  ],
})

// ── DATA ────────────────────────────────────────────────────────────────────

interface SpotlightMetric { num: string; label: string }
interface Spotlight { venue: string; title: string; subtitle: string; link: string; metrics: SpotlightMetric[] }
interface MetricItem { num: string; label: string; details: string[] }
interface CardItem { num: string; text: string }
interface Card { title: string; logo?: string; items: CardItem[] }
interface ParsedData { spotlight: Spotlight; venues: string; metrics: MetricItem[]; cards: Card[] }

function parseMarkdown(md: string): ParsedData {
  const lines = md.split('\n')
  const data: ParsedData = {
    spotlight: { venue: '', title: '', subtitle: '', link: '', metrics: [] },
    venues: '',
    metrics: [],
    cards: [],
  }
  type Mode = 'spotlight' | 'venues' | 'metrics' | 'card' | null
  let mode: Mode = null
  let currentCard: Card | null = null

  for (const line of lines) {
    if (line.startsWith('## SPOTLIGHT')) { mode = 'spotlight'; continue }
    if (line.startsWith('## VENUES'))   { mode = 'venues';    continue }
    if (line.startsWith('## METRICS'))  { mode = 'metrics';   continue }
    if (line.startsWith('## ')) {
      if (currentCard) data.cards.push(currentCard)
      currentCard = { title: line.slice(3).trim(), items: [] }
      mode = 'card'
      continue
    }
    if (mode === 'spotlight') {
      if (line.startsWith('venue:'))    { data.spotlight.venue    = line.slice(6).trim();  continue }
      if (line.startsWith('title:'))    { data.spotlight.title    = line.slice(6).trim();  continue }
      if (line.startsWith('subtitle:')) { data.spotlight.subtitle = line.slice(9).trim();  continue }
      if (line.startsWith('link:'))     { data.spotlight.link     = line.slice(5).trim();  continue }
      if (line.startsWith('metrics:')) {
        data.spotlight.metrics = line.slice(8).split(',').map(s => {
          const t = s.trim(); const i = t.indexOf(' ')
          return i === -1 ? { num: t, label: '' } : { num: t.slice(0, i), label: t.slice(i + 1).trim() }
        })
      }
    } else if (mode === 'venues') {
      if (line.trim()) data.venues = line.trim()
    } else if (mode === 'metrics') {
      if (/^  - /.test(line)) {
        const last = data.metrics[data.metrics.length - 1]
        if (last) last.details.push(line.replace(/^  - /, '').trim())
      } else if (line.startsWith('- ')) {
        const content = line.slice(2).trim(); const i = content.indexOf(' ')
        data.metrics.push({ num: i === -1 ? content : content.slice(0, i), label: i === -1 ? '' : content.slice(i + 1).trim(), details: [] })
      }
    } else if (mode === 'card' && currentCard) {
      if (line.startsWith('logo:')) { currentCard.logo = line.slice(5).trim(); continue }
      if (line.startsWith('- ')) {
        const content = line.slice(2).trim(); const i = content.indexOf(' ')
        currentCard.items.push({ num: i === -1 ? content : content.slice(0, i), text: i === -1 ? '' : content.slice(i + 1).trim() })
      }
    }
  }
  if (currentCard) data.cards.push(currentCard)
  return data
}

const SPOTLIGHT = ref<Spotlight>({ venue: '', title: '', subtitle: '', link: '', metrics: [] })
const VENUES    = ref('')
const METRICS   = ref<MetricItem[]>([])
const CARDS     = ref<Card[]>([])

onMounted(async () => {
  try {
    const res = await fetch('/data/award_proposal_3.md')
    const d = parseMarkdown(await res.text())
    SPOTLIGHT.value = d.spotlight
    VENUES.value    = d.venues
    METRICS.value   = d.metrics
    CARDS.value     = d.cards
  } catch (e) { console.error('Error loading award_proposal_3.md', e) }
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

      <!-- SPOTLIGHT -->
      <div class="aw-spotlight">
        <div class="aw-spot-left">
          <a :href="SPOTLIGHT.link" target="_blank" class="aw-spot-badge">{{ SPOTLIGHT.venue }}</a>
          <div class="aw-spot-title">{{ SPOTLIGHT.title }}</div>
          <div class="aw-spot-sub">{{ SPOTLIGHT.subtitle }}</div>
        </div>
        <div class="aw-spot-metrics">
          <div v-for="m in SPOTLIGHT.metrics" :key="m.label" class="aw-spot-item">
            <div class="aw-spot-num">{{ m.num }}</div>
            <div class="aw-spot-label">{{ m.label }}</div>
          </div>
        </div>
      </div>

      <!-- VENUES STRIP -->
      <div class="aw-venues">{{ VENUES }}</div>

      <!-- METRICS BAR -->
      <div class="aw-metrics-bar">
        <div v-for="m in METRICS" :key="m.label" class="aw-metric-badge aw-tip">
          <span class="aw-badge-num">{{ m.num }}</span>
          <span class="aw-badge-label">{{ m.label }}</span>
          <div v-if="m.details" class="aw-tip-box">
            <div v-for="d in m.details" :key="d" class="aw-tip-line">{{ d }}</div>
          </div>
        </div>
      </div>

      <!-- 2×3 GRID -->
      <div class="aw-grid">
        <div v-for="c in CARDS" :key="c.title" class="aw-card">
          <img v-if="c.logo" :src="c.logo" class="aw-logo-corner" alt="" />
          <div class="aw-card-title" :style="c.logo ? 'padding-right: 72px' : ''">{{ c.title }}</div>
          <ul class="aw-items">
            <li v-for="(item, i) in c.items" :key="i" class="aw-item">
              <span class="aw-num-sm">{{ item.num }}</span>
              <!-- eslint-disable-next-line vue/no-v-html -->
              <span class="aw-txt" v-html="item.text" />
            </li>
          </ul>
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

/* ── SPOTLIGHT ── */
.aw-spotlight {
  height: 115px;
  background: linear-gradient(100deg, #004D4A, #003A3A);
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 40px;
  flex-shrink: 0;
}
.aw-spot-left { max-width: 55%; }
.aw-spot-badge {
  display: inline-block;
  font-size: 10px;
  font-weight: 700;
  color: #1A2A3A;
  background: #F5A623;
  padding: 2px 10px;
  border-radius: 3px;
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 6px;
  text-decoration: none;
}
.aw-spot-badge:hover { background: #e09510; }
.aw-spot-title {
  font-size: 28px;
  font-weight: 800;
  color: #fff;
  line-height: 1.1;
}
.aw-spot-sub {
  font-size: 13px;
  color: rgba(255,255,255,0.7);
  margin-top: 4px;
}
.aw-spot-metrics {
  display: flex;
  gap: 28px;
}
.aw-spot-item { text-align: center; }
.aw-spot-num {
  font-size: 28px;
  font-weight: 800;
  color: #F5A623;
  line-height: 1;
  letter-spacing: -0.03em;
  font-variant-numeric: tabular-nums;
}
.aw-spot-label {
  font-size: 9px;
  font-weight: 600;
  color: rgba(255,255,255,0.55);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  margin-top: 3px;
}

/* ── VENUES STRIP ── */
.aw-venues {
  height: 30px;
  background: #F5A623;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 13px;
  font-weight: 700;
  color: #1A2A3A;
  letter-spacing: 0.06em;
  flex-shrink: 0;
}

/* ── METRICS BAR ── */
.aw-metrics-bar {
  height: 52px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 0 60px;
  flex-shrink: 0;
  border-bottom: 1px solid #E8F0F0;
}
.aw-metric-badge {
  display: flex;
  align-items: baseline;
  gap: 6px;
}
.aw-badge-num {
  font-size: 22px;
  font-weight: 800;
  color: #F5A623;
  letter-spacing: -0.02em;
  font-variant-numeric: tabular-nums;
}
.aw-badge-label {
  font-size: 10px;
  font-weight: 600;
  color: #7A8E9E;
  text-transform: uppercase;
  letter-spacing: 0.06em;
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

/* ── 2×3 GRID ── */
.aw-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(2, 1fr);
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
  padding: 14px 16px 12px;
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
  margin-bottom: 8px;
  padding-bottom: 6px;
  border-bottom: 1px solid #E8F0F0;
}

/* ── ITEMS ── */
.aw-items {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 4px;
  flex: 1;
  margin: 0; padding: 0;
}
.aw-item {
  display: flex;
  align-items: baseline;
  gap: 8px;
}
.aw-num-lg {
  font-size: 24px;
  font-weight: 800;
  color: #F5A623;
  min-width: 46px;
  line-height: 1;
  letter-spacing: -0.03em;
  flex-shrink: 0;
  font-variant-numeric: tabular-nums;
}
.aw-num-sm {
  font-size: 16px;
  font-weight: 700;
  color: #E59010;
  min-width: 32px;
  line-height: 1;
  flex-shrink: 0;
}
.aw-txt {
  font-size: 15px;
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
  top: 12px; right: 14px;
  height: 26px;
  width: auto; max-width: 68px;
  object-fit: contain;
  opacity: 0.8;
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
