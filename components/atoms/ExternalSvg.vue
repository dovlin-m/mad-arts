<script setup lang="ts">
import 'external-svg-loader';

interface Props {
  local?: boolean,
  src: string,
  loading?: string,
}

const props = withDefaults(defineProps<Props>(), {
  loading: 'lazy',
});

const config = useRuntimeConfig();

const dataSrc = computed(() => {
  return props.src;
});

const dataCache = computed(() => {
  if (config.public.isProduction) {
    return 30 * 24 * 60 * 60; // 30 days
  }

  return 'disabled';
});
</script>

<template>
  <svg
    :data-src="dataSrc"
    :data-cache="dataCache"
    :data-loading="loading"
  />
</template>
