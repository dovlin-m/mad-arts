<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MoleculesCardMenuDropdown',

  data: () => ({
    active: false,
    menu: [] as any,
  }),

  async fetch () {
    this.menu = await this.$content(`${this.$i18n.locale}/portfolio`, { deep: true })
      .only(['id', 'title', 'group'])
      .fetch();

    this.menu.sort((a, b) => Number(a.group) - Number(b.group));
  },

  beforeMount () {
    this.active = false;
    window.addEventListener('scroll', this.handleScroll);
    // eslint-disable-next-line no-return-assign
    const onClickOutside = e => this.active = this.$el.contains(e.target) && this.active;
    document.addEventListener('click', onClickOutside);
    this.$on('hook:beforeDestroy', () => document.removeEventListener('click', onClickOutside));
  },

  methods: {
    handleScroll () {
      this.active = false;
    },

    turnActive () {
      this.active = !this.active;
    },

    scrollToBottom (id) {
      const item = document.getElementById(id);

      if (item) {
        item.scrollIntoView({ behavior: 'smooth' });
        this.active = false;
      }
    },
  },
});
</script>

<template src="./MenuDropdown.html" />
<style src="./MenuDropdown.scss" lang="scss" scoped />
