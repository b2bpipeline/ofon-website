// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    modules: ['@nuxt/ui', '@vueuse/motion/nuxt', '@zadigetvoltaire/nuxt-gtm', '@nuxt/image', '@nuxtjs/robots', '@nuxtjs/sitemap'],
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
});
