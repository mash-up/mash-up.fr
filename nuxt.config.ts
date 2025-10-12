// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    modules: [
        '@nuxt/ui',
        '@nuxt/content',
        '@nuxt/scripts',
    ],
    css: ['~/assets/css/main.css'],
    fonts: {
        families: [
            { name: 'Silka', src: '/silka.woff2' },
        ]
    },
    ui: {
        colorMode: false
    },
    content: {
        preview: {
            api: 'https://api.nuxt.studio',
        },
    },
    icon: {
        clientBundle: {
            icons: [
                'simple-icons:x',
                'simple-icons:linkedin',
                'simple-icons:facebook',
                'simple-icons:instagram',
                'simple-icons:youtube',
            ],
            scan: true,
            sizeLimitKb: 256,
        },
    }
})