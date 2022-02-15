import { resolve } from 'path';

const BASE_API_URL = process.env.BASE_API_URL;

export default {
  target: 'static',

  head: {
      titleTemplate: '%s - Mineralogy.Rocks',
      title: 'Home',
      htmlAttrs: {
        lang: 'en',
      },
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: '' },
      ],
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
  },

  server: {
      port: 8080,
      host: '0.0.0.0',
  },

  css: [],

  plugins: [
      '~/plugins/axios.js',
  ],

  components: false,

  alias: {
      'Components': resolve(__dirname, './components'),
  },


  buildModules: [
      '@nuxtjs/tailwindcss',
  ],

  modules: [
      '@nuxtjs/axios',
  ],

  publicRuntimeConfig: {
      BASE_API_URL,
},

  build: {},
}
