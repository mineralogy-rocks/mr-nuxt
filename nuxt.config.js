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
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
            {
                rel: 'stylesheet',
                href: '//fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap',
            },
            {
                rel: 'stylesheet',
                href: '//cdn.jsdelivr.net/npm/@mdi/font@6.5.95/css/materialdesignicons.min.css',
            },
        ],
    },

    server: {
        port: 8080,
        host: '0.0.0.0',
    },

    css: [],

    plugins: ['~/plugins/axios.js'],

    components: false,

    alias: {
        Components: resolve(__dirname, './components'),
    },

    buildModules: ['@nuxtjs/tailwindcss'],

    modules: ['@nuxtjs/axios'],

    publicRuntimeConfig: {
        BASE_API_URL,
    },

    build: {},
};
