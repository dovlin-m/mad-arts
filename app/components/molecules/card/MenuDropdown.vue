<script setup lang="ts">
import type { AtomsDropdownBox } from '~/.nuxt/components';

const menu = ref<InstanceType<typeof AtomsDropdownBox> | null>(null);
const portfolio = usePortfolio();
const active = ref(false);

const onClickOutside = (e: Event) => {
  active.value = menu.value?.$el.contains(e.target) && active.value;
};

const handleScroll = () => {
  active.value = false;
};

const turnActive = () => {
  active.value = !active.value;
};

const scrollToBottom = (id: string) => {
  const item = document.getElementById(id);

  if (item) {
    item.scrollIntoView({ behavior: 'smooth' });
    active.value = false;
  }
};

onBeforeMount(() => {
  active.value = false;

  window.addEventListener('scroll', handleScroll);
  document.addEventListener('click', onClickOutside);
});

onBeforeUnmount(() => {
  document.removeEventListener('click', onClickOutside);
});
</script>

<template>
  <atoms-dropdown-box ref="menu" :active="active">
    <template #button>
      <div class="flex items-center">
        <atoms-btn-toggle :active="active" aria-label="portfolio menu" @click="turnActive()" />
      </div>
    </template>

    <template #dropdown-menu>
      <button
        v-for="{ id, title } of portfolio" :key="title"
        class="block w-full bg-transparent text-yellow-50 text-left text-sm font-normal cursor-pointer border-0 hover:bg-white/15 py-2 px-2"
        :aria-label="title"
        @click="scrollToBottom(id)"
        v-text="title"
      />
    </template>
  </atoms-dropdown-box>
</template>
