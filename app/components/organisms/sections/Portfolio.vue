<script setup lang="ts">
const portfolio = usePortfolio();
</script>

<template>
  <div v-if="portfolio?.length" class="flex flex-col gap-y-8 my-16">
    <organisms-group-images :portfolio="portfolio" />
  </div>
</template>
