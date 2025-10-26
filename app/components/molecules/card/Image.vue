<script setup lang="ts">
interface Props {
  src: string,
  name?: string,
  size?: string,
}

defineProps<Props>();

const active = ref(false);
const vw = ref(Math.max(document?.documentElement?.clientWidth || 0, window?.innerWidth || 0));

const turnActive = () => {
  active.value = vw.value < 768 ? false : !active.value;
};
</script>

<template>
  <div
    class="cursor-pointer"
    :class="[size || 'sm:col-span-4']"
    @click="turnActive()"
  >
    <div
      class="flex flex-col items-center justify-center transition-all duration-300 z-10"
      :class="{
        'bg-transparent': !active,
        'fixed inset-0 overflow-auto m-0 bg-black/50': active,
      }"
    >
      <NuxtImg
        :src
        format="webp"
        loading="lazy"
        height="auto"
        width="auto"
        sizes="100vw sm:50vw md:400px lg:768px"
        class="w-full"
        :class="{
          'sm:h-56 lg:h-96 hover:scale-[1.01] hover:shadow-2xl transition-all object-cover rounded': !active,
          'max-h-[80vh] max-w-[100vh] object-contain': active,
        }"
        :alt="name"
        placeholder="/assets/images/placeholder.png"
        placeholder-class="bg-zinc-600"
      />
    </div>
  </div>
</template>
