<script setup lang="ts">
const updateMainArtworks = useUpdateMainArtworks();
const mainArtworks = useMainArtworks();

await updateMainArtworks();
</script>

<template>
  <section>
    <div v-if="mainArtworks?.length" class="flex flex-col gap-y-8 mt-12">
      <organisms-group-images :portfolio="mainArtworks" />
    </div>

    <molecules-offer
      :title="$t('pages.about.sections.portfolio.offer.title')"
      :subtitle="$t('pages.about.sections.portfolio.offer.subtitle')"
    >
      <div class="flex flex-col items-center gap-y-6 sm:flex-row sm:gap-x-8">
        <NuxtLink class="btn text-zinc-950" :to="$localePath('portfolio')">
          {{ $t('buttons.view_all_artworks') }}
        </NuxtLink>
        <NuxtLink
          class="link text-zinc-50 hover:text-zinc-300"
          :to="$localePath({ name: 'index', query: { menu: 'resume' } })"
        >
          {{ $t('buttons.resume') }}
        </NuxtLink>
      </div>
    </molecules-offer>
  </section>
</template>
