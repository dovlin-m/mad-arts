<script setup lang="ts">
const portfolio = usePortfolio();
</script>

<template>
  <section class="container py-8 sm:py-12 lg:py-16">
    <h1 class="text-4xl text-yellow-50" v-text="$t('pages.portfolio.title')" />

    <div>
      <div
        v-for="({ title, date, _path, images, id }) in portfolio"
        :id
        :key="title"
        class="bg-zinc-700 rounded-xl p-2 sm:p-4 mt-8"
      >
        <div class="flex items-center mb-6">
          <atoms-logo logo-min large class="mr-3 sm:mr-4" />

          <h2 class="text-yellow-50" v-text="title" />
        </div>

        <atoms-grid-row class="gap-y-4 gap-x-4">
          <molecules-card-image
            v-for="img in images" :key="img"
            :img="`${_path?.split('/')[_path?.split('/').length - 1]}/${img.split(' ')[0]}`"
            :custom-class="img.split(' ')[1]"
          />
        </atoms-grid-row>

        <div class="flex flex-col gap-y-2 mt-4">
          <template v-for="(text, index) in $tm(`portfolio.${id}`)">
            <p v-if="text" :key="index" class="text-yellow-50 text-sm" v-text="$rt(text)" />
          </template>

          <p class="text-sm text-right text-zinc-400" v-text="date" />
        </div>
      </div>
    </div>
  </section>
</template>
