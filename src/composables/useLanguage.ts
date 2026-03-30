import { ref } from 'vue'

// Module-level state — shared across all components
const lang = ref<'en' | 'es'>('en')

export function useLanguage() {
  const toggleLanguage = () => {
    lang.value = lang.value === 'en' ? 'es' : 'en'
  }
  return { lang, toggleLanguage }
}
