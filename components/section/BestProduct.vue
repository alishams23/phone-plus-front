<template>
  <div class="bg-gray-900 rounded-xl isolate overflow-hidden relative">
    <div class="text-white text-xl text-right px-4 pt-4">
      پر فروش ترین محصولات


    </div>
    <div class="rtl px-3">
      <a href="#" class="text-gray-400 rtl  ">
        بیشتر
        <span aria-hidden="true" class="px-3"> &larr;</span>
      </a>
    </div>
    <Carousel class="mx-3" v-bind="settings" :breakpoints="breakpoints">
      <Slide v-for="item in data" :key="item">
        <Product :data="item" />
      </Slide>

      <template #addons>
        <Navigation />
      </template>

    </Carousel>
    <div class="h-50">
      <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2">
        <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
        <defs>
          <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse"
            gradientTransform="translate(512 512) rotate(90) scale(512)">
            <stop stop-color="#7775D6" />
            <stop offset="1" stop-color="#E935C1" stop-opacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
     

  </div>
</template>
  
<script>
import Product from "@/components/shared/Product.vue"
export default {
  components: { Product }, data: () => ({
    data: [
      {
        image: '/images/1.webp',
        title: 'ایفون ۱۴'
        , price: 1000000
        , percent: 10
      },
      {
        image: '/images/2.jpeg',
        title: 'ایفون ۱۴'
        , price: 1000000
        , percent: 10

      },
      {
        image: '/images/6.jpg',
        title: 'ایرپاد'
        , price: 1000000
        , percent: 0
    

      },
      {
        image: '/images/4.jpg',
        title: 'مک بوک'
        , price: 1000000
        , percent: 10

      },
      {
        image: '/images/5.jpg',
        title: 'ایفون ۱۴'
        , price: 1000000
        , percent: 10

      },
    ],
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: 'start',
      },
    },
  }),
}


</script>