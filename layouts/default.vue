<template>
  <main class="darker">
    <organisms-header />
    <nuxt />
    <organisms-footer />
  </main>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DefaultPage',
});
</script>
