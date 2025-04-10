// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  aos: {
   
    once: true, // whether animation should happen only once - while scrolling down
   
    },

  devtools: {
    enabled: true,

    timeline: {
      enabled: true,
    },
  },

  css:['~/assets/css/main.scss','~/assets/css/WebFonts/css/fontiran.css',],

  modules: [
    '@vite-pwa/nuxt',
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    'vue3-carousel-nuxt',
    'nuxt-swiper',
    'nuxt-aos',
    // 'nuxt-swiper'
    "nuxt-marquee",
    '@nuxtjs/sitemap',
  ],

  devServer: {
    port: 3001,
    // host:"0"
  },
  site: { 
    url: 'https://phoneplus.ir', 
    name: 'phone plus - فون پلاس' 
  }, 

  sitemap: {
    sources:[
      // Using the custom Django REST API endpoint for URLs
      'https://phoneplus.ir/api/product/digital-product-ID-list-view/',
      'https://phoneplus.ir/api/product/product-ID-list-view/',
      'https://phoneplus.ir/api/account/shop-username-list-view/',
      'https://phoneplus.ir/api/blog/blog-slug-list-view/',
    ]
  },


  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      lang: 'fa',
      name: 'phone plus',
      orientation: 'portrait',
      background_color: '#FFFFFF',
      theme_color: '#A020F0',
      short_name: 'فون پلاس',
      description: '  پنل خریداران فون پلاس',
      start_url: '/',
      icons: [
        {
          src: '/pwa-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: '/pwa-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
        {
          src: '/pwa-144x144.png',
          sizes: '144x144',
          type: 'image/png',
          purpose: 'any',
        },
      ],
    },
     
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    client: {
      installPrompt: true,
     
    },
 

  /* your pwa options */
},

  compatibilityDate: '2024-12-10',
})