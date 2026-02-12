<script setup lang="ts">
console.log('app.vue')
</script>

<template>
  <NuxtPage />
</template>

<style scoped>
.page-enter-active,
.page-leave-active {
  transition: all 5.4s;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  filter: blur(1rem);
}
</style>
