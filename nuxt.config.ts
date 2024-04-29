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
  }
  ,
  css:['~/assets/css/main.scss','~/assets/css/WebFonts/css/fontiran.css',],
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    'vue3-carousel-nuxt',
    'nuxt-swiper',
    'nuxt-aos',
    "nuxt-marquee"

    // 'nuxt-swiper'
  ],
  
  devServer: {
    port: 3001,
  },


})