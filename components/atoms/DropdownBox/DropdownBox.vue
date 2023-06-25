<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'AtomsDropdownBox',

  props: {
    active: {
      type: Boolean,
      default: false,
    },
  },
});
</script>

<template src="./DropdownBox.html" />
<style src="./DropdownBox.scss" lang="scss" scoped />
