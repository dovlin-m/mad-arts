<script setup lang="ts">
const links = ref({
  telegram: { href: 'https://t.me/madzzzilla', src: '/assets/icons/social/tg.svg' },
  artstation: { href: 'https://www.artstation.com/madzzzilla', src: '/assets/icons/social/artstation.svg' },
  linkedin: { href: 'https://www.linkedin.com/in/mad-art/', src: '/assets/icons/social/linkedin.svg' },
  instagram: { href: 'https://instagram.com/madzzzzilla?igshid=MjEwN2IyYWYwYw==', src: '/assets/icons/social/instagram.svg' },
});
</script>

<template>
  <div class="bg-zinc-950">
    <div class="container">
      <div class="flex flex-col-reverse sm:flex-row gap-y-4 justify-between items-center py-4 sm:py-6 lg:py-8">
        <p class="text-xs text-zinc-400">
          © Copyright Dovlin {{ new Date().getFullYear() }}. All rights reserved.
        </p>

        <div class="flex items-center justify-center gap-x-4">
          <a
            v-for="({ href, src }, key) in links" :key
            target="_blank"
            :href
            class="h-4 w-4"
            :aria-label="key"
          >
            <atoms-external-svg :src local class="h-4 w-4 text-zinc-400 hover:text-zinc-300" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>
