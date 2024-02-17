<script setup lang="ts">
defineProps({
  logoMin: Boolean,
  large: Boolean,
});

const localePath = useLocalePath();
const runtimeConfig = useRuntimeConfig();
</script>

<template>
  <nuxt-link class="flex items-center" :to="localePath({ name: 'index' })">
    <NuxtImg
      src="/assets/images/logo/russian-girl.jpg"
      class="rounded-full"
      :class="{
        'mr-2': !logoMin,
        'large': large,
      }"
      sizes="64px"
      :height="large ? 32 : 24"
      :width="large ? 32 : 24"
      fit="cover"
    />

    <p v-if="!logoMin" class="text-base text-yellow-50 mb-0" v-text="runtimeConfig.public.title.toUpperCase()" />
  </nuxt-link>
</template>
