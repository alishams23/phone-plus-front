<template>

<div class="pb-16 py-[60px] pb-[60px]  flex items-center justify-center" v-if="loading">
        <div role="status">
            <span class="relative flex h-8 w-8">
                <span
                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-8 w-8 bg-indigo-500"></span>
            </span>
            <span class="sr-only">Loading...</span>
        </div>
    </div>
  <div  v-else >
    <div class="   isolate overflow-hidden relative">
      <div class=" absolute inset-0 -z-1000 bg-gradient-to-l bg-black from-black from-10% via-red-800/80 via-black/100" />
      <div class=" absolute inset-0 -z-1000  bg-blue-circle-best-product" />
    <div class="relative" >
      <div class="flex mt-4 justify-between items-center">
        <div class="rtl px-3 pt-3">
          <a @click="$router.push('/search/?is_discount=' + 'true');" class="text-gray-200  text-sm mg:text-lg cursor-pointer rtl  ">
            بیشتر
            <span aria-hidden="true" class="px-3 "> &larr;</span>
          </a>
        </div>
        <div class="text-gray-200 font-bold text-md lg:text-xl text-right px-4 pt-4 flex items-center justify-end">
          محصولات شگفت انگیز
          <div class="ml-2 lg:mx-5  h-12 w-12 bg-gradient-to-b from-gray-400 to-white   flex justify-center  items-center rounded-xl">
        <ShoppingBagIcon class="h-5 text-indigo-600"/>
      </div>
        </div>
       </div>
    </div>
   <div data-aos="fade-down" data-aos-duration="1000" data-aos-anchor-placement="top-bottom">
       <Carousel  :breakpoints="breakpoints"  :wrapAround="true" :transition="500" class="pt-0">
         <Slide  v-for="product ,index in products" :key="product">
           <Product  class="my-10" :data="product" />
         </Slide>
         <template #addons>
           <Navigation />
         </template>
       </Carousel>
   </div>
      <div class="h-50">
        <svg viewBox="0 0 1024 1024" class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2" >
          <circle cx="512" cy="512" r="512" fill="url(#759c1415-0410-454c-8f7c-9a820de03641)" fill-opacity="0.7" />
          <defs>
            <radialGradient id="759c1415-0410-454c-8f7c-9a820de03641" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(512 512) rotate(90) scale(512)">
              <stop stop-color="blue" />
              <stop offset="1" stop-color="blue" stop-opacity="0" />
            </radialGradient>
          </defs>
        </svg>
       </div>
      
    </div>
  </div>
</template>
  
<script>
import axios from "axios";
import Product from "@/components/shared/Product.vue"
import { apiStore } from '~/store/api'; 
import { ShoppingBagIcon } from '@heroicons/vue/20/solid'


export default {
  components: { Product,ShoppingBagIcon }, 
  data: () => ({
    products: '',
    loading: true,
    data: [
      {
        image: '/images/2.jpeg',
        title: 'samsung'
        , price: 1000000
        , percent: 10
      },
      {
        image: '/images/3.jpg',
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
        title: 'هدفون'
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
      200: {
        itemsToShow: 1.5,
        snapAlign: 'center',
      },
      700: {
        itemsToShow: 2.5,
        snapAlign: 'center',
      },
      1150: {
        itemsToShow: 4.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1340: {
        itemsToShow: 5.5,
        snapAlign: 'center',
      },
      1490: {
        itemsToShow: 6,
        snapAlign: 'center',
      },
    },
  }),
  methods: {
      getData() {
          this.loading = true
          axios.get(`${apiStore().address}/api/product/discount-product-list-main-page/`, {
              headers: {
                  "Content-type": "application/json",
                  Accept: "application/json",
              },
          }).then((response) => {
              this.products = response.data
              this.loading = false

          })
      }
  }, mounted() {
      this.getData()
  }
}


</script>


<style scoped>

.bg-blue-circle-best-product{
   
  
  background-image:radial-gradient(ellipse 100% 90% at 50% -30%, #5109d591 20.9%, #00000000 90%);

}



</style>
