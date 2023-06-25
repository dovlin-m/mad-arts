<script lang="ts">
import { defineComponent } from 'vue';
import { NavMenu } from './Header.utils';
import { NavOption } from '@/utils/types/nav';

export default defineComponent({
  name: 'OrganismsHeader',

  data: () => ({
    menu: NavMenu as NavOption,
  }),

  computed: {
    menuLocale (): any {
      return this.$i18n.locales.map(item => item.code).reduce((prev, locale) => {
        const { query, params } = this.$route;
        const opts = { name: this.getRouteBaseName(), params, query };

        prev[locale] = this.localePath(opts, locale);
        return prev;
      }, {});
    },
  },
});
</script>

<template src="./Header.html" />
<style src="./Header.scss" lang="scss" scoped />
