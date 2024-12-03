// src/composables/useTheme.ts
import { ref, onMounted, watch } from 'vue'

/**
 * Hook personalizado para manejar el tema (claro/oscuro) en una aplicación Vue.
 * Permite alternar entre los modos claro y oscuro, guardar la preferencia en localStorage
 * y aplicarla automáticamente al cargar la página.
 */
export function useTheme() {
  // Define un estado reactivo para el tema: `false` es claro, `true` es oscuro.
  const theme = ref(false)

  /**
   * Alterna entre los modos claro y oscuro.
   * Actualiza el estado del tema y aplica los estilos correspondientes al DOM.
   */
  const toggleDarkMode = () => {
    theme.value = !theme.value // Invierte el valor actual del tema.
    applyTheme() // Aplica la clase de tema al elemento raíz.
  }

  /**
   * Aplica el tema actual al elemento raíz (`document.documentElement`) del DOM.
   * Agrega o elimina la clase `dark` dependiendo del estado del tema.
   */
  const applyTheme = () => {
    const root = document.documentElement // Selecciona el elemento raíz (HTML).
    if (theme.value) {
      root.classList.add('dark') // Modo oscuro: agrega la clase `dark`.
    } else {
      root.classList.remove('dark') // Modo claro: elimina la clase `dark`.
    }
  }

  /**
   * Al montar el componente, recupera el tema guardado en `localStorage`.
   * Si hay un tema guardado, lo aplica al estado; si no, usa `false` (modo claro).
   */
  onMounted(() => {
    const storedTheme = localStorage.getItem('theme') // Obtiene el tema de localStorage.
    theme.value = storedTheme ? JSON.parse(storedTheme) : false // Si existe, lo parsea; si no, usa `false`.
    applyTheme() // Aplica el tema al DOM.
  })

  /**
   * Observa el valor de `theme` y guarda los cambios en `localStorage`.
   * Cada vez que el tema cambie, se actualiza la preferencia guardada.
   */
  watch(theme, (newValue) => {
    localStorage.setItem('theme', JSON.stringify(newValue)) // Guarda el tema como string en localStorage.
  })

  // Retorna las funciones y el estado para usarlos en los componentes.
  return { theme, toggleDarkMode }
}
