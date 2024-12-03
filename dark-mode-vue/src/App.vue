<script setup lang="ts">
import Article from './components/Article.vue'
import Button from './components/Button.vue'
import { useTheme } from './componsables/useTheme'
const { theme, toggleDarkMode } = useTheme()
</script>

<template>
  <div
    :class="{
      'bg-gray-200 text-gray-800': !theme,
      'bg-gray-800 text-gray-200': theme,
    }"
    class="h-screen flex flex-col"
  >
    <nav class="w-full px-8 py-6">
      <div class="max-w-7xl mx-auto flex justify-between items-center">
        <h1 class="text-4xl capitalize tracking-wide text-red-400">Override</h1>
        <Button @click="toggleDarkMode" />
      </div>
    </nav>
    <section class="flex-1 p-6">
      <Article />
    </section>
  </div>
</template>
