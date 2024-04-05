<script setup lang="ts">
interface Props {
  active?: boolean
}

defineProps<Props>();
</script>

<template>
  <button
    :class="['relative w-6 h-6 cursor-pointer transition-all border-0 bg-transparent', {
      active,
    }]"
  >
    <span
      v-for="index in 4" :key="index"
      :class="['absolute right-0.5 h-0.5 bg-yellow-50 rotate-0 transition-all', {
        'top-[5px] w-5': index < 3,
        'w-4': index === 3,
        'top-[17px] w-3': index === 4,
      }]"
    />
  </button>
</template>

<style scoped lang="scss">
span:nth-child(3) {
  top: calc(50% - 1px);
}

.active span {
  &:nth-child(1),
  &:nth-child(2) {
    top: calc(50% - 1px);

    @apply w-5;
  }

  &:nth-child(1) {
    @apply rotate-45;
  }

  &:nth-child(2) {
    @apply -rotate-45;
  }

  &:nth-child(3),
  &:nth-child(4) {
    @apply top-3 w-0 right-1/2;
  }
}
</style>
