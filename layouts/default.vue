<template>
  <main class="darker">
    <organisms-header />

    <nuxt />

    <organisms-footer />
  </main>
</template>

<script>

import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DefaultPage',
});
</script>

<style lang="scss"></style>
