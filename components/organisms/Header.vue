<script setup lang="ts">
const { locales } = useI18n();
const switchLocalePath = useSwitchLocalePath();
</script>

<template>
  <div class="fixed inset-x-0 top-0 bg-primary">
    <div class="container">
      <header class="flex items-center justify-between py-4 lg:py-6">
        <atoms-logo class="mr-8" />

        <div class="flex items-center gap-4">
          <div class="flex justify-center gap-2">
            <NuxtLink
              v-for="{ code } in locales" :key="code"
              :to="switchLocalePath(code)"
              class="text-base uppercase text-yellow-50"
              active-class="font-semibold"
            >
              {{ code }}
            </NuxtLink>
          </div>

          <molecules-card-menu-dropdown />
        </div>
      </header>
    </div>
  </div>
</template>
