<script setup lang="ts">
const updatePortfolio = useUpdatePortfolio();

await updatePortfolio();
</script>

<template>
  <templates-portfolio />
</template>
