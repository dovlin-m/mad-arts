<script setup lang="ts">
const updatePortfolio = useUpdatePortfolio();

await useAsyncData('portfolio', () => updatePortfolio());
</script>

<template>
  <div class="mt-14 lg:mt-[72px]">
    <templates-sections-banner />
    <templates-sections-portfolio />
  </div>
</template>
