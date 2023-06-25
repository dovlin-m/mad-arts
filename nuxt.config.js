export default {
  ssr: false,

  target: 'static',
  router: {
    base: '/mad-arts/'
  },

  head: {
    title: 'mad-arts',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: '' },
      { name: 'format-detection', content: 'telephone=no' }
    ],
    link: [
      { href: "https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap", rel: "stylesheet" }
    ]
  },

  css: [
  ],

  plugins: [
  ],

  components: true,

  buildModules: [
  ],

  modules: [
  ],

  build: {
  }
}
