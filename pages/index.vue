<script setup lang="ts">
const updatePortfolio = useUpdatePortfolio();

await useAsyncData('hello', () => updatePortfolio());
</script>

<template>
  <div class="mt-14 lg:mt-[72px]">
    <templates-sections-banner />
    <templates-sections-portfolio />
  </div>
</template>
