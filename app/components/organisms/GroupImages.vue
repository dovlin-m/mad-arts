<script setup lang="ts">
import type { PortfolioItem } from '~/types/portfolio';

interface Props {
  portfolio: PortfolioItem[];
}

defineProps<Props>();

const windowHeight = ref(1240);
const isLessThanSm = computed(() => windowHeight.value <= 768);

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
    v-for="{ title, date, _path, images, id } in portfolio"
    :id
    :key="title"
    class="container bg-zinc-800 p-3 sm:rounded-xl sm:p-4"
  >
    <div class="mb-4 flex flex-col">
      <h2 class="text-yellow-50" v-text="title" />

      <template v-for="(text, index) in $tm(`portfolio.${id}`)" :key="index">
        <p
          v-show="$rt(text)"
          class="mt-1 text-sm text-yellow-50"
          v-text="$rt(text)"
        />
      </template>
    </div>

    <AtomsGridRow v-show="!isLessThanSm" class="gap-4">
      <MoleculesCardImage
        v-for="{ name, size } in images" :key="name"
        :src="`/assets/images/portfolio/${_path?.split('/')[_path?.split('/').length - 1]}/${name}.jpg`"
        :size
        :name
      />
    </AtomsGridRow>

    <client-only v-if="isLessThanSm">
      <lazy-molecules-card-carousel-image
        :images
        :path="_path || ''"
      />
    </client-only>

    <p class="text-right text-sm text-zinc-400 mt-4" v-text="date" />
  </section>
</template>
