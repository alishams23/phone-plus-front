// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true }
  ,
  css:['~/assets/css/main.scss','~/assets/css/WebFonts/css/fontiran.css',],
  modules: [
    '@pinia/nuxt',
    '@nuxtjs/tailwindcss',
    'vue3-carousel-nuxt',
    'nuxt-swiper'
    // 'nuxt-swiper'
  ],
  
  devServer: {
    port: 3001,
  },


})
