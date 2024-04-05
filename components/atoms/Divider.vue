<script setup lang="ts">
interface Props {
  color?: string
  vertical?: boolean,
  opacity?: boolean,
}

withDefaults(defineProps<Props>(), {
  color: 'bg-zinc-600',
});
</script>

<template>
  <div
    :class="[color, {
      'h-px w-auto': !vertical,
      'h-auto w-full max-w-[1px]': vertical,
      'opacity-10': opacity,
    }]"
  />
</template>
