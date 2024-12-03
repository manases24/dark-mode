<script setup lang="ts">
import { articles } from '@/api'
</script>

<template>
  <div class="text-left">
    <ul>
      <li v-for="item in articles" :key="item.id">
        <h2 class="text-xl font-bold mb-2">{{ item.title }}</h2>
        <p class="mb-1 text-gray-600">{{ item.snippet }}</p>
        <span class="text-sm text-gray-500">{{ item.date.toDateString() }}</span>
      </li>
    </ul>
  </div>
</template>
