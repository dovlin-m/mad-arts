import { availableLocales } from './utils/locales';

const isProd: boolean = process.env.NUXT_PUBLIC_NODE_ENV === 'production';

const prefix: string = isProd ? process.env.NUXT_PUBLIC_PREFIX || '/' : '/';
const title: string = process.env.NUXT_PUBLIC_TITLE || '';
const locales: string[] = ['en', 'ru'];

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      title: '',
      prefix: '',
      baseUrl: '',
      isProduction: isProd,
    },
  },

  devtools: {
    enabled: true,
  },

  app: {
    baseURL: prefix,
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
        { rel: 'icon', type: 'Image/x-icon', href: `${prefix || '/'}favicon.ico` },
      ],
    },
  },

  modules: [
    '@pinia/nuxt',
    '@nuxt/content',
    '@nuxt/image',
    '@nuxtjs/i18n',
    '@nuxtjs/tailwindcss',
    '@nuxtjs/google-fonts',
    '@nuxtjs/eslint-module',
    '@nuxtjs/stylelint-module',
  ],

  content: {
    markdown: {
      mdc: false,
      anchorLinks: false,
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
    static: isProd,
  },

  i18n: {
    compilation: {
      strictMessage: false,
    },
    lazy: true,
    langDir: './i18n',
    locales: availableLocales(locales),
    detectBrowserLanguage: false,
    defaultLocale: locales[0],
    vueI18n: './i18n.config.ts',
  },
});
