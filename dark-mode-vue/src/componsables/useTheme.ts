import { onMounted, ref, watch } from "vue";

export function useTheme() {
  const theme = ref(false);

  const toggleDarkMode = () => {
    theme.value = !theme.value;
    applyDarkMode();
  };

  const applyDarkMode = () => {
    const root = document.documentElement;
    if (theme.value) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  };

  onMounted(() => {
    // Cargar preferencia desde localStorage
    const storedValue = localStorage.getItem("darkMode");
    theme.value = storedValue ? JSON.parse(storedValue) : false;

    applyDarkMode();
  });

  watch(theme, (newValue) => {
    // Guardar preferencia en localStorage
    localStorage.setItem("darkMode", JSON.stringify(newValue));
  });

  return { theme, toggleDarkMode };
}
