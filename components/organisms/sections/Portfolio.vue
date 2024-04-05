<script setup lang="ts">
const portfolio = usePortfolio();
</script>

<template>
  <div class="container my-8">
    <h1 class="text-yellow-100 mb-4" v-text="$t('pages.portfolio.title')" />

    <div class="flex flex-col gap-y-3">
      <template v-for="(text, index) in $tm('pages.portfolio.content')">
        <p v-if="text" :key="index" class="text-base sm:text-lg text-yellow-50" v-text="$rt(text)" />
      </template>
    </div>
  </div>

  <div v-if="portfolio?.length" class="flex flex-col gap-y-8 mb-8">
    <organisms-group-images :portfolio="portfolio" />
  </div>
</template>
