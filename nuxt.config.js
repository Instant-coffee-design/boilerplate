require('dotenv').config()

export default {
    head: {
        title: 'instant-coffee',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ]
    },

    css: [
        '@/assets/scss/global.scss'
    ],

    plugins: [
        { src: '@/plugins/base.js' }
    ],

    env: {
        baseUrl: process.env.BASE_URL
    },

    components: true,

    buildModules: [
        '@nuxtjs/moment'
    ],

    modules: [
        '@nuxtjs/axios',
        'cookie-universal-nuxt',
        'nuxt-i18n',
        '@nuxtjs/auth',
        '@nuxtjs/moment',
        [ '@nuxtjs/recaptcha', {
            hideBadge: true,
            version: 3,
            siteKey: process.env.RECAPTCHA
        } ]
    ],

    moment: {
        defaultLocale: 'fr',
        locales: ['fr']
    },

    publicRuntimeConfig: {
        recaptcha: {
            siteKey: process.env.RECAPTCHA
        }
    },

    i18n: {
        locales: [
            { code: 'fr', iso: 'fr-FR', file: 'fr.js' }
        ],
        langDir: '/translations/',
        defaultLocale: 'fr',
        lazy: true
    },

    serverMiddleware: [
        { path: '/api', handler: '~/api' },
        redirectSSL.create({ enabled: process.env.NODE_ENV === 'PRODUCTION' })
    ],

    auth: {
        cookie: {
          options: {
            domain: '.' + process.env.BASE_DOMAIN
          }
        },
        redirect: {
            logout: false,
            login: '/compte/login',
            home: false,
            callback: false
        },
        strategies: {
            local: {
                endpoints: {
                    login: { url: process.env.NUXT_ENV_API_URL + '/user', method: 'post', propertyName: 'token' },
                    logout: { url: process.env.NUXT_ENV_API_URL + '/user/logout', method: 'post' },
                    user: { url: process.env.NUXT_ENV_API_URL + '/user', method: 'get', propertyName: 'user' }
                }
            }
        }
    },

    build: {
        extend (config) {
            config.module.rules.push({
                test: /\.svg.html$/,
                loader: 'raw-loader'
            })
        },
        babel: {
            presets(env, [preset, options]) {
                return [["@babel/preset-env", {}]];
            },
            plugins: [
                [
                "@babel/plugin-transform-runtime",
                {
                    regenerator: true
                }
                ]
            ]
        }      
    },
    
    axios: {
        baseURL: process.env.NUXT_ENV_API_URL
    },

    router: {
        linkActiveClass: 'is-active',
        linkExactActiveClass: 'is-active-exact'
    }
}
