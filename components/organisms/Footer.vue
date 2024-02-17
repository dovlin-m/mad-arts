<script setup lang="ts">
const links = ref({
  'E-mail': 'mailto:mariia@antipov.me',
  'Instagram': 'https://instagram.com/madzzzzilla?igshid=MjEwN2IyYWYwYw==',
  'Telegram': 'https://t.me/madzzzilla',
});
</script>

<template>
  <div class="bg-zinc-950">
    <div class="container">
      <div class="flex flex-col items-center sm:flex-row justify-center gap-x-6 p-6 sm:p-8 lg:p-12">
        <div v-for="(link, key) of links" :key="key">
          <a class="link text-base text-zinc-400" target="_blank" :href="link" v-text="key" />
        </div>
      </div>
    </div>
  </div>
</template>
