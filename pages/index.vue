<template>
  <div class="container pt-header">
    <div class="my-8 my-sm-12 my-lg-16">
      <h1 class="text-gray" v-text="$t('pages.portfolio.title')" />

      <div>
        <div
          v-for="({ title, date, slug, images, id }) in portfolio"
          :id="id"
          :key="title"
          class="dark pa-2 py-sm-4 px-sm-4 py-lg-6 mt-8"
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
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'IndexPage',

  data: () => ({
    portfolio: [] as any,
  }),

  async fetch () {
    this.portfolio =
        await this.$content(`${this.$i18n.locale}/portfolio`, { deep: true }).fetch();

    this.portfolio.sort((a, b) => Number(a.group) - Number(b.group));
    console.log('portfolio', this.portfolio);
  },
});
</script>

<style lang="scss"></style>
