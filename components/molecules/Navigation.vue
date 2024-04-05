<script setup lang="ts">
const localePath = useLocalePath();
const route = useRoute();

interface Props {
  large?: boolean,
}

defineProps<Props>();
</script>

<template>
  <div class="flex items-center justify-around sm:justify-center sm:gap-x-8">
    <p v-for="(link, key) in $tm('header')" :key="key">
      <ClientOnly>
        <NuxtLink
          class="link"
          :to="localePath({ name: 'index', query: { menu: key } })"
          :class="[
            route.query.menu === key ? 'text-yellow-200 after:content-none cursor-default' : 'text-yellow-50 cursor-pointer',
            large ? 'text-base sm:text-xl' : 'text-base',
          ]"
        >
          {{ $rt(link) }}
        </NuxtLink>

        <template #fallback>
          <NuxtLink
            class="link"
            :to="localePath({ name: 'index', query: { menu: key } })"
            :class="[
              'text-yellow-50 cursor-pointer',
              large ? 'text-base sm:text-xl' : 'text-base',
            ]"
          >
            {{ $rt(link) }}
          </NuxtLink>
        </template>
      </ClientOnly>
    </p>
  </div>
</template>
