const isProd: boolean = process.env.NUXT_PUBLIC_NODE_ENV === 'production';

const prefix: string = isProd ? process.env.NUXT_PUBLIC_PREFIX || '/' : '/';
const title: string = process.env.NUXT_PUBLIC_TITLE || '';

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
        { name: 'description', content: 'Portfolio' },
        { name: 'format-detection', content: 'telephone=no' },
        { name: 'format-detection', content: 'date=no' },
        {
          property: 'og:image',
          content: `${prefix || '/'}assets/images/banner.webp`,
        },
      ],
      link: [
        {
          rel: 'icon',
          type: 'Image/x-icon',
          href: `${prefix || '/'}favicon.ico`,
        },
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
    '@nuxtjs/stylelint-module',
    '@nuxt/eslint',
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
    cssPath: ['~/assets/scss/tailwind.scss', { injectPosition: 'last' }],
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
    locales: [
      {
        name: 'English',
        code: 'en',
        language: 'en-GB',
        file: 'en.ts',
      },
      {
        name: 'Русский',
        code: 'ru',
        language: 'ru-MD',
        file: 'ru.ts',
      },
    ],
    detectBrowserLanguage: false,
    defaultLocale: 'en',
  },

  compatibilityDate: '2025-10-23',
});
