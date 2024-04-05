<script setup lang="ts"></script>

<template>
  <div class="absolute -translate-y-1/2 rounded-full flex items-center justify-center w-28 h-28 sm:w-52 sm:h-52 p-1.5 sm:p-2 bg-zinc-900">
    <NuxtImg
      src="/assets/images/avatar.jpg"
      class="logo h-full object-cover object-top rounded-full"
      height="auto"
      :width="192"
      format="webp"
      alt="my avatar"
    />
  </div>
</template>
