<script setup lang="ts">
const OrganismsSectionsAbout = resolveComponent('organisms/sections/About');
const OrganismsSectionsMainArtworks = resolveComponent('organisms/sections/MainArtworks');
const OrganismsSectionsResume = resolveComponent('organisms/sections/Resume');
const OrganismsSectionsContacts = resolveComponent('organisms/sections/Contacts');

const router = useRouter();
const route = useRoute();

const menu = ref(['about', 'portfolio', 'resume', 'contacts']);
const newIndex = ref(0);
const oldIndex = ref(0);

watch(
  () => route.query.menu,
  (newValue, oldValue) => {
    console.log('newValue:', newValue);
    newIndex.value = menu.value.indexOf(newValue);
    oldIndex.value = menu.value.indexOf(oldValue);
  },
);

const transitionName = computed(() => {
  return newIndex.value > oldIndex.value ? 'left' : 'right';
});

const current = computed(() => {
  const components = {
    about: OrganismsSectionsAbout,
    portfolio: OrganismsSectionsMainArtworks,
    resume: OrganismsSectionsResume,
    contacts: OrganismsSectionsContacts,
  };

  return components[route.query.menu] || OrganismsSectionsAbout;
});

watch(
  () => route.query.menu,
  () => {
    router.push({ query: { ...route.query, menu: route.query.menu } });

    if (process.client) {
      window.scrollTo(0, 0);
    }
  },
);
</script>

<template>
  <main class="mt-14 lg:mt-[72px]">
    <organisms-sections-banner />
    <organisms-navigation-menu />

    <Transition :name="transitionName" :duration="300">
      <component :is="current" />
    </Transition>
  </main>
</template>

<style scoped lang="scss">
.left-enter-active,
.left-leave-active {
  transition: all 0.3s ease-in-out;
}

.left-enter-from {
  opacity: 0;
  transform: translateX(100vw);
}

.left-leave-to {
  opacity: 0;
  transform: translateX(-100vw);
}

// Right

.right-enter-active,
.right-leave-active {
  transition: all 0.3s ease-in-out;
}

.right-enter-from {
  opacity: 0;
  transform: translateX(-100vw);
}

.right-leave-to {
  opacity: 0;
  transform: translateX(100vw);
}
</style>
