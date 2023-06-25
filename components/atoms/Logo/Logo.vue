<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({

  name: 'AtomsLogo',

  props: {
    logoMin: {
      type: Boolean,
    },
    large: {
      type: Boolean,
    },
  },
});
</script>

<template src="./Logo.html" />
<style src="./Logo.scss" lang="scss" scoped />
