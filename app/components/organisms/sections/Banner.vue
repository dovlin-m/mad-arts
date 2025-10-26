<script setup lang="ts">
const banner = ref<HTMLElement | null>(null);
const bannerHeight = ref<number | null>(null);
const defaultBannerHeight = ref<number>(0);

onMounted(() => {
  banner.value = document.getElementById('banner');
  defaultBannerHeight.value = banner.value?.clientHeight || 0;

  if (!banner.value) return;

  const handleScroll = () => {
    const scrollPosition = Math.round(window.scrollY);

    if (scrollPosition < defaultBannerHeight.value / 2) {
      bannerHeight.value = Math.round(defaultBannerHeight.value - scrollPosition);
    }
  };

  window.addEventListener('scroll', handleScroll);

  onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
  });
});
</script>

<template>
  <section
    id="banner"
    class="overflow-hidden transition-[height] duration-300 ease-out"
    :style="{ height: `${bannerHeight}px`}"
  >
    <NuxtImg
      src="/assets/images/banner.webp"
      class="w-full h-full min-h-40 max-h-40 sm:min-h-[485px] sm:max-h-[485px] object-cover"
      alt="banner monk and old woman"
      sizes="768 md:1280"
      preload
    />
  </section>
</template>
