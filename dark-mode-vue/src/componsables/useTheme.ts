// src/composables/useTheme.ts
import { ref, onMounted, watch } from 'vue'

export function useTheme() {
  const theme = ref(false) // `false` para claro, `true` para oscuro

  const toggleDarkMode = () => {
    theme.value = !theme.value
    applyTheme()
  }

  const applyTheme = () => {
    const root = document.documentElement
    if (theme.value) {
      root.classList.add('dark')
    } else {
      root.classList.remove('dark')
    }
  }

  onMounted(() => {
    const storedTheme = localStorage.getItem('theme')
    theme.value = storedTheme ? JSON.parse(storedTheme) : false
    applyTheme()
  })

  watch(theme, (newValue) => {
    localStorage.setItem('theme', JSON.stringify(newValue))
  })

  return { theme, toggleDarkMode }
}
