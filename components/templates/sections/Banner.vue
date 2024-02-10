<template>
  <section class="wrapper-banner" :style="{ height: `${bannerImageHeight}px`}">
    <img ref="banner" :src="require('~/assets/images/banner.webp')" alt="banner monk and old woman" class="banner">
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TemplatesSectionsBanner',

  data: () => ({
    defaultBannerHeight: null,
    bannerImageHeight: null,
  }),

  mounted () {
    window.addEventListener('scroll', this.handleScroll);
  },

  beforeUnmount () {
    window.removeEventListener('scroll', this.handleScroll);
  },

  methods: {
    handleScroll () {
      const scrollPosition = window.scrollY;
      const bannerHeight = this.$refs?.banner?.clientHeight || 0;
      this.defaultBannerHeight = this.defaultBannerHeight ? this.defaultBannerHeight : bannerHeight;

      this.bannerImageHeight = Math.max(0, this.defaultBannerHeight - scrollPosition);
    },
  },
});
</script>

<style lang="scss">
.wrapper-banner {
  overflow: hidden;
  transition: height 0.3s ease-out;

  .banner {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: height 0.3s ease-out;
  }
}
</style>
