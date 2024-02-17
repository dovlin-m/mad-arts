<script setup lang="ts">
defineProps({
  img: {
    type: String,
    required: true,
  },
  customClass: String,
});

const active = ref(false);
const vw = ref(Math.max(document?.documentElement?.clientWidth || 0, window?.innerWidth || 0));

const turnActive = () => {
  active.value = vw.value < 768 ? false : !active.value;
};
</script>

<template>
  <div
    class="cursor-pointer"
    :class="[customClass || 'sm:col-span-4']"
    @click="turnActive()"
  >
    <div
      class="flex flex-col items-center justify-center transition-all duration-300"
      :class="{
        'bg-transparent': !active,
        'fixed inset-0 overflow-auto m-0 bg-black/50': active,
      }"
    >
      <img
        :src="`/assets/images/portfolio/${img}.jpg`"
        loading="lazy"
        :class="{
          'sm:h-56 lg:h-96 w-full object-cover': !active,
          'h-auto w-auto max-h-[70vh] max-w-[70vh] object-contain': active,
        }"
        :alt="img"
      >
    </div>
  </div>
</template>
