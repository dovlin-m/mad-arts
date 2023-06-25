<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'MoleculesCardImage',

  props: {
    img: {
      type: String,
      required: true,
    },
  },

  data: () => ({
    active: false,
  }),

  computed: {
  },

  watch: {
    open () {
      console.log('active', this.active);
    },
  },

  methods: {
    turnActive () {
      this.active = !this.active;
      console.log('this.active', this.active);
    },
  },
});
</script>

<template src="./Image.html" />
<style src="./Image.scss" lang="scss" scoped />
