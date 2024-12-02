<script setup lang="ts">
import { useTheme } from "@/componsables/useTheme.ts";

const { theme, toggleDarkMode } = useTheme();
</script>

<template>
  <div>
    <button
      @click="toggleDarkMode"
      class="px-4 py-2 rounded bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200"
    >
      {{ theme ? "Light Mode" : "Dark Mode" }}
    </button>
    <p class="mt-4 text-gray-800 dark:text-gray-200">
      El modo oscuro está {{ theme ? "activado" : "desactivado" }}.
    </p>
  </div>
</template>
