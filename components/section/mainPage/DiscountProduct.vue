<template>

  <div v-if="loading">
    <!-- <div  class="pb-16 flex items-center justify-center" >
      <div role="status">
          <svg aria-hidden="false" class="w-8 h-8 text-gray-100 animate-spin fill-indigo-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span class="sr-only">Loading...</span>
      </div>
    </div> -->
  </div>
  <div  v-else >
    <div class="   isolate overflow-hidden relative">
      <div class=" absolute inset-0 -z-1000 bg-gradient-to-l bg-black from-black from-10% via-red-800/80 via-black/100" />
      <div class=" absolute inset-0 -z-1000  bg-blue-circle-best-product" />
    <div class="relative" >
      <div class="flex mt-4 justify-between items-center">
        <div class="rtl px-3 ">
          <a @click="$router.push('/search/?is_discount=' + 'true');" class="text-gray-200 cursor-pointer rtl  ">
            بیشتر
            <span aria-hidden="true" class="px-3 "> &larr;</span>
          </a>
        </div>
        <div class="text-gray-200 font-bold text-xl text-right px-4 pt-4 flex items-center justify-end">
          محصولات شگفت انگیز
          <div class="ml-2 lg:mx-5  h-12 w-12 bg-gradient-to-b from-gray-300 to-white   flex justify-center  items-center rounded-xl">
        <ShoppingBagIcon class="h-5 text-indigo-600"/>
      </div>
        </div>
       </div>
    </div>
   <div data-aos="fade-right" data-aos-duration="1000">
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
