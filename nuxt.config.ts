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

    seo: {
        redirectToCanonicalSiteUrl: true,
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
        url: '',
        name: 'Ofon',
        description: `Need to maximize productivity and minimize cost business telecommunications?`,
        defaultLocale: 'en',
        trailingSlash: false,
    },

    runtimeConfig: {
        BACKEND_URL: process.env.NUXT_BACKEND_URL,
    },

    compatibilityDate: '2024-08-13',

    i18n: {
        langDir: 'locales',
        strategy: 'prefix',
        locales: [
            {
                code: 'en',
                iso: 'en-ID',
                name: 'English (ID)',
                file: 'en-ID.json',
            },
            {
                code: 'id',
                iso: 'id-ID',
                name: 'Indonesia (ID)',
                file: 'id-ID.json',
            },
        ],
        defaultLocale: 'id',
    },
    sitemap: {
        sources: ['/api/urls'],
    },
    plugins: ['~/plugins/preline.client.ts'],
    routeRules: {
        '/enterprise/voiceapi': {
            redirect: {
                to: '/en/service/cloud-pbx-installation',
                statusCode: 301,
            },
        },
        '/enterprise/conference': {
            redirect: {
                to: '/en/product/meeting-setup',
                statusCode: 301,
            },
        },
        '/blog/page/2/ ': {
            redirect: {
                to: '/blog',
                statusCode: 301,
            },
        },
        '/blog/2020/09/15/cloud-pbx-vs-on-premise-pbx/ ': {
            redirect: {
                to: '/blog',
                statusCode: 301,
            },
        },
        '/blog/2023/06/01/pemanfaatan-ofon-webcall-sebagai-channel-komunikasi-dalam-sebuah-proses-transaksi-online/ ': {
            redirect: {
                to: '/blog',
                statusCode: 301,
            },
        },
        '/blog/category/cloud-direct-routing/ ': {
            redirect: {
                to: '/blog',
                statusCode: 301,
            },
        },
        '/blog/category/proxy/ ': {
            redirect: {
                to: '/blog',
                statusCode: 301,
            },
        },
        '/blog/2020/09/15/membangun-solusi-dengan-trust/ ': {
            redirect: {
                to: '/blog',
                statusCode: 301,
            },
        },
        '/blog/2020/09/15/tetap-produktif-bisnis-meeting-dari-rumah/ ': {
            redirect: {
                to: '/blog',
                statusCode: 301,
            },
        },
        '/blog/category/web-call/ ': {
            redirect: {
                to: '/en/product/telephone',
                statusCode: 301,
            },
        },
        '/blog/2020/09/15/phone-number-proxy/ ': {
            redirect: {
                to: '/blog',
                statusCode: 301,
            },
        },
        '/blog/2023/05/24/pemanfaatan-ofon-webcall-menghubungkan-pelanggan-ke-customer-serivce/ ': {
            redirect: {
                to: '/blog',
                statusCode: 301,
            },
        },
        '/blog/2023/05/24/pemanfaatan-ofon-webcall-menghubungkan-pelanggan-ke-customer-serivce': {
            redirect: {
                to: '/id/service/cloud-pbx-installation',
                statusCode: 301,
            },
        },
        '/blog/2020/09/15/alternatif-rapat-atau-konferensi-daring/': {
            redirect: {
                to: '/blog',
                statusCode: 301,
            },
        },
        '/blog/author/admin/ ': {
            redirect: {
                to: '/blog/author',
                statusCode: 301,
            },
        },
        '/blog/2020/09/15/integrasi-ofon-smartpbx-dengan-microsoft-teams-phone-system/ ': {
            redirect: {
                to: '/blog',
                statusCode: 301,
            },
        },
        '/blog/2020/09/15/integrasi-ofon-smartpbx-dengan-cloud-storage/': {
            redirect: {
                to: '/blog',
                statusCode: 301,
            },
        },
        '/blog/2020/09/ ': {
            redirect: {
                to: '/blog',
                statusCode: 301,
            },
        },
        '/enterprise/clouddirectrouting ': {
            redirect: {
                to: 'en/service/phone-system-integration',
                statusCode: 301,
            },
        },
        '/blog/author/irfanrifai/ ': {
            redirect: {
                to: '/blog/author',
                statusCode: 301,
            },
        },
        '/blog/category/whitepaper/ ': {
            redirect: {
                to: '/blog',
                statusCode: 301,
            },
        },
        '/internet ': {
            redirect: {
                to: 'en/product/internet',
                statusCode: 301,
            },
        },
        '/blog/2023/05/29/pemanfaatan-ofon-webcall-menghubungkan-pelanggan-dengan-waiter-dalam-bisnis-hospitality-dan-fb/ ': {
            redirect: {
                to: '/blg',
                statusCode: 301,
            },
        },
        '/whitepaper': {
            redirect: {
                to: '/blog',
                statusCode: 301,
            },
        },
        '/blog/2020/09/15/alternatif-rapat-atau-konferensi-daring-android/': {
            redirect: {
                to: '/blog',
                statusCode: 301,
            },
        },
        '/enterprise/cloudsbc': {
            redirect: {
                to: 'en/product/cloud-pbx',
                statusCode: 301,
            },
        },
        '/assets/dist/enterprise_berkas/Ofon-2020_Catalogue_EnterpriseSolution_A4-Preview(1)(1)(1).pdf': {
            redirect: {
                to: '/blog',
                statusCode: 301,
            },
        },
        '/blog/2020/09/15/ofon-cloud-direct-routing-microsoft-teams/ ': {
            redirect: {
                to: '/blog',
                statusCode: 301,
            },
        },
        '/blog/2023/06/ ': {
            redirect: {
                to: '/blog',
                statusCode: 301,
            },
        },
        '/enterprise/cloudpbx': {
            redirect: {
                to: 'id/service/cloud-pbx-installation',
                statusCode: 301,
            },
        },
        '/pbx ': {
            redirect: {
                to: 'id/service/cloud-pbx-installation',
                statusCode: 301,
            },
        },
        '/product/litebiz ': {
            redirect: {
                to: 'id/product/sip-trunk',
                statusCode: 301,
            },
        },
        '/blog/category/smartpbx/ ': {
            redirect: {
                to: '/blog',
                statusCode: 301,
            },
        },
        '/product/siptrunk ': {
            redirect: {
                to: 'id/product/sip-trunk',
                statusCode: 301,
            },
        },
        '/en/privacy-policy-igo': {
            redirect: {
                to: 'privacy-policy-igo',
                statusCode: 301,
            },
        },
        '/blog/category/tak-berkategori/ ': {
            redirect: {
                to: '/blog',
                statusCode: 301,
            },
        },
        '/blog/category/cloud-pbx/ ': {
            redirect: {
                to: '/blog',
                statusCode: 301,
            },
        },
        '/blog/2020/09/15/fitur-dial-in-dalam-aplikasi-conference/ ': {
            redirect: {
                to: '/blog',
                statusCode: 301,
            },
        },
        '/enterprise/manajemensystem ': {
            redirect: {
                to: 'id/product/meeting-setup',
                statusCode: 301,
            },
        },
        '/blog/category/conference/ ': {
            redirect: {
                to: '/blog',
                statusCode: 301,
            },
        },
    },
});
