


import Carousel3d from 'vue3-carousel-3d';
import "vue3-carousel-3d/dist/index.css"

export default defineNuxtPlugin((nuxtApp) => {
    
    nuxtApp.vueApp.use(Carousel3d)

})