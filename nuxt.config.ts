// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxt/ui', '@vueuse/motion/nuxt', '@zadigetvoltaire/nuxt-gtm', '@nuxt/image', '@nuxtjs/seo'],
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
});