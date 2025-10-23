<script setup lang="ts">
interface Props {
  title: string;
  subtitle?: string;
}

defineProps<Props>();
</script>

<template>
  <section class="flex items-center justify-center flex-col sm:max-w-xl gap-y-6 container px-3 my-16 sm:my-24">
    <div>
      <h2 class="text-4xl text-zinc-50 text-center mb-2" v-text="title" />
      <p
        v-if="subtitle"
        class="text-base sm:text-lg text-zinc-400 text-center"
        v-text="subtitle"
      />
    </div>

    <slot />
  </section>
</template>
