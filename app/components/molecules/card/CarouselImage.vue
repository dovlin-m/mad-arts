<script setup lang="ts">
import 'vue3-carousel/dist/carousel.css';
import { Carousel, Slide } from 'vue3-carousel';
import type { Image } from '~/types/portfolio';

interface Props {
  images: Image[],
  path: string,
}

defineProps<Props>();

const currentSlide = ref(0);

const slideTo = (val: number) => {
  currentSlide.value = val;
};
</script>

<template>
  <div class="flex flex-col gap-2 bg-zinc-950 p-2 rounded overflow-hidden">
    <Carousel v-model="currentSlide" :items-to-show="1" :transition="500" :wrap-around="true">
      <Slide v-for="{ name } in images" :key="name">
        <NuxtImg
          :src="`/assets/images/portfolio/${`${path.split('/')[path.split('/').length - 1]}/${name}`}.jpg`"
          format="webp"
          loading="lazy"
          height="auto"
          width="auto"
          sizes="400px"
          class="h-auto w-full object-cover"
          :alt="name"
        />
      </Slide>
    </Carousel>

    <Carousel v-model="currentSlide" :items-to-show="3.8" :transition="500" :wrap-around="true">
      <Slide v-for="({ name }, index) in images" :key="name">
        <NuxtImg
          :src="`/assets/images/portfolio/${`${path.split('/')[path.split('/').length - 1]}/${name}`}.jpg`"
          format="webp"
          loading="lazy"
          class="h-20 w-full max-w-24 object-cover px-1"
          height="auto"
          width="auto"
          sizes="400px"
          :alt="name"
          @click.prevent="slideTo(index)"
        />
      </Slide>
    </Carousel>
  </div>
</template>
