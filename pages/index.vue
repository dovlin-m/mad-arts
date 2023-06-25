<template>
  <div class="">
    <h1 class="text-gray" v-text="$t('pages.portfolio.title')" />
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',

  data: () => ({
    active: false,
  }),
});
</script>

<style lang="scss"></style>
