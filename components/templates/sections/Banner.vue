<script setup lang="ts">
const defaultBannerHeight = ref<number | null>(null);
const bannerImageHeight= ref<number | null>(null);
const banner = ref();

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
  window.removeEventListener('scroll', handleScroll);
});

const handleScroll = () => {
  const scrollPosition = window.scrollY;
  const initialBannerHeight = banner.value?.$el.clientHeight || 0;

  defaultBannerHeight.value = defaultBannerHeight.value ? defaultBannerHeight.value : initialBannerHeight;
  bannerImageHeight.value = Math.max(0, (defaultBannerHeight.value as number) - scrollPosition);
};
</script>

<template>
  <section
    class="overflow-hidden transition-[height] duration-300 ease-out"
    :style="{ height: `${bannerImageHeight}px`}"
  >
    <NuxtImg
      ref="banner"
      src="/assets/images/banner.webp"
      class="w-full h-full max-h-[425px] object-cover"
      alt="banner monk and old woman"
      sizes="640 md:1024 lg:1280"
      placeholder
      preload
    />
  </section>
</template>
