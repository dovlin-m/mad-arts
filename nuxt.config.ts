import 'dotenv-defaults/config';

const dev: boolean = process.env.NODE_ENV !== 'production';
const baseUrl: string | undefined = dev ? process.env.BASE_URL : `http://${process.env.HOST}:${process.env.PORT}/`;

const publicRuntimeConfig = {
  PORT: process.env.PORT,
  BASE_URL: baseUrl,
  META_NAME: process.env.META_NAME,
  SOCIALS_EMAIL: process.env.SOCIALS_EMAIL,
  SOCIALS_PHONE: process.env.SOCIALS_PHONE,
};

const head = {
  title: process.env.META_TITLE,
  meta: [
    { charset: 'utf-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
    { name: 'description', hid: 'description', content: process.env.META_DESCRIPTION },
    { name: 'format-detection', hid: 'format-detection', content: 'telephone=no' },
    { name: 'format-detection', hid: 'format-detection', content: 'date=no' },
  ],
  link: [
    { rel: 'icon', type: 'Image/x-icon', href: '/portfolio/favicon.ico' },
    { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
  ],
};

const webfontloader = {
  custom: {
    urls: [
      'https://fonts.googleapis.com/css2?family=Inter:wght@400;600;700&display=swap',
    ],
  },
};

const typescript = {
  typeCheck: {
    eslint: {
      files: './**/*.{ts,js,vue}',
    },
  },
};

const components = true;

const buildModules = [
  '@nuxt/typescript-build',
  '@aceforth/nuxt-optimized-images',
];

const styleResources = {
  scss: [
    '~assets/scss/helpers/variables.scss',
    '~assets/scss/helpers/mixins.scss',
  ],
};

const i18n = {
  locales: [
    {
      name: 'English',
      code: 'en',
      iso: 'en-GB',
      file: 'en.ts',
    },
    {
      name: 'Русский',
      code: 'ru',
      iso: 'ru-MD',
      file: 'ru.ts',
    },
  ],
  detectBrowserLanguage: {
    useCookie: true,
    cookieKey: 'cp__locale',
    redirectOn: 'root',
  },
  baseUrl,
  lazy: true,
  seo: false,
  langDir: 'utils/locales/',
  defaultLocale: process.env.LOCALE,
  vueI18nLoader: true,
  vueI18n: {
    silentTranslationWarn: true,
    fallbackLocale: process.env.LOCALE,
  },
};

const compilerOptions = {
  types: ['@nuxtjs/i18n', '@nuxt/content'],
};

const plugins = [
  { src: '@/plugins/lazyload.ts', mode: 'client' },
];

const modules = [
  '@nuxtjs/i18n',
  'nuxt-webfontloader',
  '@nuxtjs/style-resources',
  '@nuxt/content',
  'nuxt-viewport',
];

const build = {
  extractCSS: true,

  babel: {
    compact: true,
    presets (_: any) {
      return [
        [
          '@nuxt/babel-preset-app',
          { corejs: { version: 3 } },
        ],
      ];
    },
  },
};

const optimizedImages = {
  handleImages: ['jpeg', 'jpg', 'png', 'svg', 'webp'],
  optimizeImages: true,
  optimizeImagesInDev: false,
  defaultImageLoader: 'img-loader',
  mozjpeg: {
    quality: 70,
  },
  optipng: {
    optimizationLevel: 3,
  },
  webp: {
    preset: 'default',
    quality: 75,
  },
  pngquant: {
    speed: 7,
    strip: true,
  },
  svgo: {},
};

const viewport = {
  breakpoints: {
    xs: 0,
    sm: 768,
    lg: 1220,
  },

  cookieName: 'viewport',

  defaultBreakpoints: {
    sm: 'sm',
    lg: 'lg',
  },

  fallbackBreakpoint: 'lg',
};

export default {
  ssr: false,

  target: 'static',
  router: {
    base: '/mad-arts/',
  },
  publicRuntimeConfig,

  components,

  head,
  webfontloader,

  plugins,

  buildModules,

  modules,
  compilerOptions,

  build,

  styleResources,
  css: ['~assets/scss/styles.scss'],

  typescript,
  i18n,
  optimizedImages,
  viewport,
};
