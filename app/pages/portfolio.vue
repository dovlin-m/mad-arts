<script setup lang="ts">
const updatePortfolio = useUpdatePortfolio();

await useAsyncData('portfolio', () => updatePortfolio());
</script>

<template>
  <templates-portfolio />
</template>
