<script setup lang="ts">
const images = ref(['in_the_museum', 'on_the_field', 'on_the_street']);
</script>

<template>
  <section>
    <div class="container mt-12">
      <div class="mb-8 sm:mb-8">
        <h1 class="text-yellow-100 mb-4" v-text="$t('pages.about.intro.title')" />

        <div class="flex flex-col gap-y-1">
          <template v-for="(text, index) in $tm('pages.about.intro.content')">
            <p v-if="text" :key="index" class="text-base sm:text-lg text-yellow-50" v-text="$rt(text)" />
          </template>
        </div>
      </div>

      <div class="mb-8 sm:mb-8">
        <h1 class="text-yellow-100 mb-4" v-text="$t('pages.about.title')" />

        <div class="flex flex-col gap-y-1">
          <template v-for="(text, index) in $tm('pages.about.content')">
            <p v-if="text" :key="index" class="text-base sm:text-lg text-yellow-50" v-text="$rt(text)" />
          </template>
        </div>
      </div>

      <div class="mb-8 sm:mb-8">
        <h1 class="text-yellow-100 mb-4" v-text="$t('pages.about.whyMe.title')" />

        <div class="flex flex-col gap-y-1">
          <template v-for="(text, index) in $tm('pages.about.whyMe.content')">
            <p v-if="text" :key="index" class="text-base sm:text-lg text-yellow-50" v-text="$rt(text)" />
          </template>
        </div>
      </div>

      <div class="mb-8 sm:mb-8">
        <h1 class="text-yellow-100 mb-4" v-text="$t('pages.about.myTarget.title')" />

        <div class="flex flex-col gap-y-1">
          <template v-for="(text, index) in $tm('pages.about.myTarget.content')">
            <p v-if="text" :key="index" class="text-base sm:text-lg text-yellow-50" v-text="$rt(text)" />
          </template>
        </div>
      </div>
    </div>

    <atoms-grid-row>
      <MoleculesDynamicImage
        v-for="image in images" :key="image"
        :src="`/assets/images/about/${image}.webp`"
        :name="image"
        class="sm:col-span-4 object-cover w-full h-96"
      />
    </atoms-grid-row>

    <molecules-offer :title="$t('pages.about.offer.title')">
      <NuxtLink class="btn" :to="$localePath({ name: 'index', query: { menu: 'portfolio' } })">
        {{ $t('buttons.my_artworks') }}
      </NuxtLink>
    </molecules-offer>
  </section>
</template>
