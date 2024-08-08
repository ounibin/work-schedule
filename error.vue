<template>
  <div>
    <button @click="handleError">Clear errors</button>
  </div>
</template>

<script setup lang="ts">
const handleError = () => clearError({ redirect: '/' })
</script>
