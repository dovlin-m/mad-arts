<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MoleculesCardImage',

  props: {
    img: {
      type: String,
      required: true,
    },
    customClass: {
      type: String,
      default: '',
    },
  },

  data: () => ({
    active: false,
  }),

  computed: {
    isLessThanSm (): Boolean {
      return this.$viewport.isLessThan('sm');
    },
  },

  methods: {
    turnActive () {
      this.active = this.isLessThanSm ? false : !this.active;
    },
  },
});
</script>

<template src="./Image.html" />
<style src="./Image.scss" lang="scss" scoped />
