export default {
  head: {
    title: 'Dylan Blog',
    htmlAttrs: {
      lang: 'en'
    },
    meta: [
      {charset: 'utf-8'},
      {name: 'viewport', content: 'width=device-width, initial-scale=1'},
      {hid: 'description', name: 'description', content: ''},
      {name: 'format-detection', content: 'telephone=no'}
    ],
    link: [
      {rel: 'icon', type: 'image/x-icon', href: '/favicon.ico'}
    ],
    script:[
      { src: 'http://at.alicdn.com/t/font_1829549_6tqonplg1pi.js' },
    ]
  },

  css: [
    'element-ui/lib/theme-chalk/index.css',
    '~/assets/css/index.less'
  ],

  plugins: [
    {
      src: '~/plugins/axios',
      ssr: true
    },
    {
      src: "~/plugins/element-ui",
      ssr: true
    },
    {
      src: '~/plugins/libs',
      ssr: true
    },
  ],

  components: true,

  buildModules: [],

  modules: [
    '@nuxtjs/axios',
    '@nuxtjs/style-resources'
  ],
  styleResources: {
    less: [
      "./assets/css/variable.less"
    ]
  },

  axios: {
    proxy: true,
    prefix: "/api",
    credentials: true
  },
  proxy: {
    "/api/": {
      target: "http://localhost:8000",
      pathRewrite: {
        '^/api': '/', // 把 /api 替换成 /
        changeOrigin: true // 表示是否跨域
      }
    }
  },

  build: {
    transpile: [/^element-ui/],
  }
}
