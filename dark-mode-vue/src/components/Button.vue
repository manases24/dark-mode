<script setup lang="ts">
import 'primeicons/primeicons.css'

import { useTheme } from '@/componsables/useTheme.ts'

const { theme, toggleDarkMode } = useTheme()
</script>

<template>
  <button
    class="px-4 py-2 rounded"
    @click="toggleDarkMode"
  >
    <i :class="[
        theme ? 'pi pi-sun' : 'pi pi-moon',
        'p-2 rounded-full',  
        theme ? 'bg-white text-black' : 'bg-gray-300'
      ]"></i>
  </button>
</template>
