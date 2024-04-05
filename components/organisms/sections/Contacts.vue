<script setup lang="ts">
const links = ref({
  telegram: { href: 'https://t.me/madzzzilla', icon: '/assets/icons/social/tg.svg' },
  artstation: { href: 'https://www.artstation.com/madzzzilla', icon: '/assets/icons/social/artstation.svg' },
  linkedin: { href: 'https://www.linkedin.com/in/mad-art/', icon: '/assets/icons/social/linkedin.svg' },
  instagram: { href: 'https://instagram.com/madzzzzilla?igshid=MjEwN2IyYWYwYw==', icon: '/assets/icons/social/instagram.svg' },
});

const info = ref({
  phone: '+7 (991) 675-14-82',
  email: 'mariia@antipov.me',
});
</script>

<template>
  <section>
    <div class="container mt-12">
      <h1 class="text-yellow-100 mb-4" v-text="$t('pages.about.sections.contacts.title')" />

      <div class="flex flex-col gap-y-3">
        <template v-for="(text, index) in $tm('pages.about.sections.contacts.content')">
          <p v-if="text" :key="index" class="text-base sm:text-lg text-yellow-50" v-text="$rt(text)" />
        </template>
      </div>
    </div>

    <div class="container mt-8">
      <atoms-grid-row class="gap-y-8">
        <div v-for="(block, index) in $tm('pages.about.sections.contacts.info')" :key="index" class="flex flex-col sm:col-span-6 gap-8">
          <div v-for="{ name, value, href, social } in block" :key="name">
            <template v-if="social">
              <p class="text-base text-zinc-400 mb-2" v-text="$rt(name)" />

              <div class="flex gap-x-4">
                <a
                  v-for="(link, key) in links" :key="key"
                  target="_blank"
                  :href="link.href"
                  class="h-6"
                  :aria-label="key"
                >
                  <atoms-external-svg :src="link.icon" local class="h-6 w-6 text-zinc-50 hover:text-zinc-300" />
                </a>
              </div>
            </template>

            <template v-else>
              <p v-if="name" class="text-base text-zinc-400 mb-1" v-text="$rt(name)" />
              <p v-if="value && !href" class="text-lg text-zinc-50" v-text="$rt(value)" />
              <a
                v-if="href"
                class="link text-lg text-zinc-50 hover:text-zinc-300"
                :href="$rt(href, info)"
                :aria-label="$rt(name)"
                v-text="$rt(value, info)"
              />
            </template>
          </div>
        </div>
      </atoms-grid-row>

      <atoms-divider class="my-8" />

      <h2 class="text-zinc-300 mb-4" v-text="$t('pages.about.sections.contacts.additional_info.title')" />

      <div class="mb-8">
        <p class="text-base text-zinc-400 mb-1" v-text="$t('pages.about.sections.contacts.additional_info.developers_website.name')" />

        <a
          href="https://github.com/dovlin-m" target="_blank"
          class="text-lg flex gap-x-2 text-zinc-50 hover:text-zinc-300"
          aria-label="Github"
        >
          <atoms-external-svg
            src="/assets/icons/social/github.svg"
            class="h-6 w-6 text-zinc-50"
          />
          {{ $t('pages.about.sections.contacts.additional_info.developers_website.value') }}
        </a>
      </div>
    </div>
  </section>
</template>
