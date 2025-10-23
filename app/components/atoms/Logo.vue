<script setup lang="ts">
const localePath = useLocalePath();
const runtimeConfig = useRuntimeConfig();
</script>

<template>
  <nuxt-link class="flex items-center" :to="localePath({ name: 'index' })">
    <NuxtImg
      src="/assets/images/logo/russian-girl.jpg"
      class="rounded-full mr-2"
      sizes="64px"
      height="24"
      width="24"
      fit="cover"
      alt="logo russian-girl"
    />

    <p class="text-base text-yellow-50 mb-0" v-text="runtimeConfig.public.title.toUpperCase()" />
  </nuxt-link>
</template>
