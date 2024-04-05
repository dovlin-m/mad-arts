<script setup lang="ts">
import type { PortfolioItem } from '~/types/portfolio';

interface Props {
  portfolio: PortfolioItem[];
}

defineProps<Props>();

const isLessThanSm = computed(() => {
  return windowHeight.value <= 768;
});

const windowHeight = ref(0);

onBeforeMount(() => {
  windowHeight.value = window?.innerWidth || 0;

  window.addEventListener('resize', onResize);
  document.addEventListener('resize', onResize);
});

onBeforeUnmount(() => {
  document.removeEventListener('resize', onResize);
});

const onResize = () => {
  windowHeight.value = window?.innerWidth || 0;
};
</script>

<template>
  <section
    v-for="({ title, date, _path, images, id }) in portfolio"
    :id
    :key="title"
    class="container bg-zinc-800 sm:rounded-xl p-3 sm:p-4"
  >
    <AtomsGridRow v-show="!isLessThanSm" class="gap-4">
      <MoleculesCardImage
        v-for="{ name, size } in images" :key="name"
        :src="`/assets/images/portfolio/${_path?.split('/')[_path?.split('/').length - 1]}/${name}.jpg`"
        :size
        :name
      />
    </AtomsGridRow>

    <lazy-molecules-card-carousel-image v-show="isLessThanSm" :images :path="_path || ''" />

    <div class="flex flex-col mt-4">
      <h2 class="text-yellow-50" v-text="title" />

      <template v-for="(text, index) in $tm(`portfolio.${id}`)" :key="index">
        <p v-show="$rt(text)" class="text-yellow-50 text-sm mt-2" v-text="$rt(text)" />
      </template>

      <p class="text-sm text-right text-zinc-400" v-text="date" />
    </div>
  </section>
</template>
