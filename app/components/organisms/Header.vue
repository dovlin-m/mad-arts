<script setup lang="ts">
const route = useRoute();
const { locales } = useI18n();
const getRouteBaseName = useRouteBaseName();

const isIndex = computed(() => {
  return ['index'].includes(getRouteBaseName(route) as string);
});
</script>

<template>
  <div class="fixed inset-x-0 top-0 z-50 bg-primary">
    <div class="container">
      <header class="flex items-center justify-between py-4 lg:py-6">
        <atoms-logo />

        <molecules-navigation v-show="!isIndex" class="hidden sm:flex" />

        <div class="flex items-center gap-4">
          <div class="flex justify-center gap-2">
            <NuxtLink
              v-for="{ code } in locales"
              :key="code"
              :to="$switchLocalePath(code)"
              class="text-base uppercase text-yellow-50"
              active-class="font-semibold"
            >
              {{ code }}
            </NuxtLink>
          </div>

          <molecules-card-menu-dropdown v-show="!isIndex" />
        </div>
      </header>
    </div>
  </div>
</template>
