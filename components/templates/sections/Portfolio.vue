<template>
  <section class="portfolio container my-8 my-sm-12 my-lg-16">
    <h1 class="text-gray" v-text="$t('pages.portfolio.title')" />

    <div>
      <div
        v-for="({ title, date, slug, images, id }) in portfolio"
        :id="id"
        :key="title"
        class="dark rounded-2 pa-2 pa-sm-4 mt-8"
      >
        <div class="d-flex align-items-center mb-6">
          <atoms-logo logo-min large class="mr-3 mr-sm-4" />

          <h2 class="text-gray mb-0" v-text="title" />
        </div>

        <atoms-grid-row class="row-gap-4 column-gap-4">
          <molecules-card-image
            v-for="img in images"
            :key="img"
            :img="`${slug}/${img.split('/')[0]}`"
            :custom-class="img.split('/')[1]"
          />
        </atoms-grid-row>

        <div class="d-flex flex-column row-gap-2 mt-4">
          <template v-for="(text, index) of $t(`portfolio.${id}`)">
            <p v-if="text" :key="index" class="text-gray text-small" v-text="text" />
          </template>

          <p class="text-small text-right text-muted" v-text="date" />
        </div>
      </div>
    </div>
  </section>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'TemplatesSectionsPortfolio',

  data: () => ({
    portfolio: [] as any,
  }),

  async fetch () {
    this.portfolio = await this.$content(`${this.$i18n.locale}/portfolio`, { deep: true })
      .sortBy('group')
      .fetch();
  },
});
</script>

<style lang="scss">
.portfolio {
  transition: margin-top 0.3s ease-out;
}
</style>
