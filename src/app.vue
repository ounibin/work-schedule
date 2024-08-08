<template>
  <!-- 缓存10级页面 -->
  <NuxtPage :keepalive="{ max: 10 }" transition />
</template>

<script setup lang="ts">
// SEO示例
// useSeoMeta({
//   title: 'My Amazing Site',
//   ogTitle: 'My Amazing Site',
//   description: 'This is my amazing site, let me tell you all about it.',
//   ogDescription: 'This is my amazing site, let me tell you all about it.',
//   ogImage: 'https://example.com/image.png',
//   twitterCard: 'summary_large_image',
// })
</script>

<style></style>
