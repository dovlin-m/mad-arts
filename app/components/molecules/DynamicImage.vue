<script setup lang="ts">
interface Props {
  src: string,
  height?: string | number,
  name: string,
}

const props = withDefaults(defineProps<Props>(), {
  height: 'auto',
});

const img = useImage();

const _srcset = computed(() => {
  return img.getSizes(props.src, {
    sizes: '100vw sm:50vw md:640px',
  });
});
</script>

<template>
  <img
    :src="img(src)"
    :srcset="_srcset.srcset"
    :sizes="_srcset.sizes"
    :height="height"
    loading="lazy"
    :alt="name"
    placeholder="/assets/images/placeholder.png"
  >
</template>
