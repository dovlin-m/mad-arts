import 'dotenv-defaults/config';

const head = {
  head: {
    title: process.env.META_TITLE,
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { name: 'description', hid: 'description', content: process.env.META_DESCRIPTION },
      { name: 'format-detection', hid: 'format-detection', content: 'telephone=no' },
      { name: 'format-detection', hid: 'format-detection', content: 'date=no' },
    ],
    link: [
      { rel: 'icon', type: 'Image/x-icon', href: '/favicon.ico' },
      { rel: 'preconnect', href: 'https://fonts.gstatic.com' },
    ],
  },
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

const buildModules = ['@nuxt/typescript-build'];

const styleResources = {
  scss: [
    '~assets/scss/helpers/variables.scss',
    '~assets/scss/helpers/mixins.scss',
  ],
};

export default {
  ssr: false,

  target: 'static',
  router: {
    base: '/mad-arts/',
  },

  head,
  webfontloader,

  plugins: [
  ],

  components: true,

  buildModules,

  modules: [
  ],

  build: {
    extractCSS: true,
  },

  styleResources,
  css: ['~assets/scss/styles.scss'],

  typescript,
};
