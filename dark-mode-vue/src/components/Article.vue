<script setup lang="ts">
import { articles } from '@/api'
</script>

<template>
  <div class="text-left">
    <ul>
      <li v-for="item in articles" :key="item.id">
        <h2 class="text-xl font-bold">{{ item.title }}</h2>
        <p>{{ item.snippet }}</p>
        <span>{{ item.date.toDateString() }}</span>
      </li>
    </ul>
  </div>
</template>
