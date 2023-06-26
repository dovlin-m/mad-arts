<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AtomsButtonToggle',

  props: {
    active: {
      type: Boolean,
    },
  },
});
</script>

<template src="./ButtonToggle.html" />
<style src="./ButtonToggle.scss" lang="scss" scoped />
