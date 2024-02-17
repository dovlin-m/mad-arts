import { availableLocales } from './utils/locales';

// const dev: boolean = process.env.NODE_ENV !== 'production';
const baseUrl: string = '/mad-arts/';
const title = 'Mad-arts';
const languages = ['en', 'ru'];

export default defineNuxtConfig({
  ssr: false,

  runtimeConfig: {
    public: {
      title,
      baseUrl,
    },
  },

  devServer: {
    port: 3000,
    host: '0.0.0.0',
  },

  devtools: {
    enabled: true,
  },

  app: {
    baseURL: baseUrl,
    head: {
      title,
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { name: 'description', hid: 'description', content: 'Portfolio' },
        { name: 'format-detection', hid: 'format-detection', content: 'telephone=no' },
        { name: 'format-detection', hid: 'format-detection', content: 'date=no' },
      ],
      link: [
        { rel: 'icon', type: 'Image/x-icon', href: '/mad-arts/favicon.ico' },
      ],
    },
  },

  modules: [
    '@pinia/nuxt',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxt/content',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
  ],

  content: {
    markdown: {
      anchorLinks: false,
    },
    experimental: {
      clientDB: true,
    },
  },

  googleFonts: {
    download: false,
    useStylesheet: true,
    preload: true,
    display: 'swap',
    families: {
      Exo: [400, 600],
    },
  },

  stylelint: {
    include: '**/*.{css,scss,sass,less,styl}',
  },

  tailwindcss: {
    cssPath:  ['~/assets/scss/tailwind.scss', { injectPosition: 'last' }],
  },

  image: {
    quality: 80,
    format: ['webp'],
  },

  nitro: {
    prerender: {
      routes: [
        '/_ipx/q_80&fit_cover&s_64x64/assets/images/logo/russian-girl.jpg',
        '/_ipx/q_80&fit_cover&s_128x128/assets/images/logo/russian-girl.jpg',
        '/_ipx/w_640&q_80/assets/images/banner.webp',
        '/_ipx/w_1280&q_80/assets/images/banner.webp',
        '/_ipx/w_1024&q_80/assets/images/banner.webp',
        '/_ipx/w_2048&q_80/assets/images/banner.webp',
        '/_ipx/w_2560&q_80/assets/images/banner.webp',
        '/_ipx/q_50&blur_3&s_10x10/assets/images/banner.webp',
      ],
    },
  },

  i18n: {
    compilation: {
      strictMessage: false,
    },
    lazy: true,
    langDir: './i18n',
    locales: availableLocales(languages),
    baseUrl,
    defaultLocale: languages[0],
    vueI18n: './i18n.config.ts',
  },
});
