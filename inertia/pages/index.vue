<script setup lang="ts">
import { Head } from '@inertiajs/vue3'
defineProps<{
  page: {
    slug: string
    title: string
    content: string
  }
}>()
</script>

<template>
  <Head :title="page.title" />
  <h1>{{ page.title }}</h1>
  <div v-html="page.content"></div>
</template>
