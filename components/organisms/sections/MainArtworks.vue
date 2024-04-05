<script setup lang="ts">
const updateMainArtworks = useUpdateMainArtworks();
const mainArtworks = useMainArtworks();

const localePath = useLocalePath();

await useAsyncData('portfolio', () => updateMainArtworks());
</script>

<template>
  <section>
    <div class="container my-12">
      <h1 class="text-yellow-100 mb-4" v-text="$t('pages.about.sections.portfolio.title')" />

      <div class="flex flex-col gap-y-3">
        <template v-for="(text, index) in $tm('pages.about.sections.portfolio.content')">
          <p v-if="text" :key="index" class="text-base sm:text-lg text-yellow-50" v-text="$rt(text)" />
        </template>
      </div>
    </div>

    <div v-if="mainArtworks?.length" class="flex flex-col gap-y-8">
      <organisms-group-images :portfolio="mainArtworks" />
    </div>

    <molecules-offer
      :title="$t('pages.about.sections.portfolio.offer.title')"
      :subtitle="$t('pages.about.sections.portfolio.offer.subtitle')"
    >
      <div class="flex items-center flex-col sm:flex-row gap-y-6 sm:gap-x-8">
        <NuxtLink class="btn text-zinc-950" :to="localePath('portfolio')">
          {{ $t('buttons.view_all_artworks') }}
        </NuxtLink>
        <NuxtLink class="link text-zinc-50 hover:text-zinc-300" :to="localePath({ name: 'index', query: { menu: 'resume' } })">
          {{ $t('buttons.resume') }}
        </NuxtLink>
      </div>
    </molecules-offer>
  </section>
</template>
