<script setup lang="ts">
const { locale } = useI18n();
</script>

<template>
  <section class="container my-12">
    <h1 class="text-yellow-100 mb-4" v-text="$t('pages.about.sections.resume.title')" />

    <div class="flex flex-col gap-y-3 mb-8">
      <template v-for="(text, index) in $tm('pages.about.sections.resume.content')">
        <p v-if="text" :key="index" class="text-base sm:text-lg text-yellow-50" v-text="$rt(text)" />
      </template>
    </div>

    <atoms-grid-row class="gap-y-2">
      <div class="sm:col-span-4">
        <NuxtLink :to="`/pdf/resume/${locale}/Mariia_Dmitrieva_Concept_Artist.pdf`" class="btn" target="_blank">
          {{ $t('buttons.download') }}
        </NuxtLink>
      </div>

      <div class="sm:col-span-8 ">
        <NuxtImg
          :src="`/assets/images/resume/page-1-${locale}.webp`"
          class="w-full rounded-md"
          :alt="`resume Mariia_Dmitrieva_Concept_Artist_${locale}`"
          placeholder
        />

        <NuxtImg
          :src="`/assets/images/resume/page-2-${locale}.webp`"
          class="w-full rounded-md"
          :alt="`resume Mariia_Dmitrieva_Concept_Artist_${locale}`"
          placeholder
        />
      </div>
    </atoms-grid-row>
  </section>
</template>
