// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxt/ui', '@vueuse/motion/nuxt', '@zadigetvoltaire/nuxt-gtm', '@nuxt/image', '@nuxtjs/seo', '@nuxtjs/i18n'],
    devtools: { enabled: true },

    gtm: {
        id: 'GTM-MJHXGQ5L',
    },

    app: {
        pageTransition: { name: 'page', mode: 'out-in' },
    },

    postcss: {
        plugins: {
            tailwindcss: {},
            autoprefixer: {},
        },
    },

    css: ['~/assets/css/tailwind.css'],

    colorMode: {
        preference: 'light',
    },

    site: {
        url: 'https://ofon-website.vercel.app/',
        name: 'Ofon',
        description: `Need to maximize productivity and minimize cost business telecommunications?`,
        defaultLocale: 'en',
    },

    runtimeConfig: {
        BACKEND_URL: process.env.NUXT_BACKEND_URL,
    },

    compatibilityDate: '2024-08-13',

    i18n: {
        lazy: true,
        langDir: 'locales',
        strategy: 'prefix_and_default',
        locales: [
            {
                code: 'en',
                iso: 'en-US',
                name: 'English (US)',
                file: 'en-US.json',
            },
            {
                code: 'id',
                iso: 'id-ID',
                name: 'Indoneis (ID)',
                file: 'id-ID.json',
            },
        ],
        defaultLocale: 'en-US',
    },
    sitemap: {
        sources: ['/api/urls'],
    },
});
