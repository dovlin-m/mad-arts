<script setup lang="ts">
defineProps({
  active: Boolean,
});
</script>

<template>
  <div class="relative">
    <slot name="button" />

    <div class="absolute bg-primary mt-4 lg:mt-6 -z-10 -right-6 w-52 sm:-right-8 lg:right-0">
      <div
        class="absolute w-52 top-0 left-[calc(80% - 12px / 2 + 6px)] overflow-scroll bg-primary transition-all duration-300 -z-10"
        :class="active ? 'opacity-100 h-64' : 'opacity-0 h-0'"
      >
        <slot name="dropdown-menu" />
      </div>
    </div>
  </div>
</template>
