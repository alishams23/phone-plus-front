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
    <div v-else>
      <div class="   isolate overflow-hidden relative" v-if="loading == false">
        <div class=" absolute inset-0 -z-1000 bg-gradient-to-l bg-black from-black from-10% via-indigo-800/80 via-black/100" />
        <div class=" absolute inset-0 -z-1000  bg-blue-circle-best-product" />
        <div class="relative">
          <div class="flex pt-3 justify-between items-center">
            <div class="rtl px-3 pt-3">
              <button @click="$router.push('/search/?sort_digital_product=-rate&tab=1');" class="text-gray-200 text-sm mg:text-lg rtl cursor-pointer ">
                بیشتر
                <span aria-hidden="true" class="px-3 pt-3"> &larr;</span>
              </button>
            </div>
            <div class="text-gray-200 font-bold text-md lg:text-xl text-right px-4 pt-4 flex items-center justify-end">
              محصولات دیجیتال محبوب

              <div class="ml-2 lg:mx-5  h-12 w-12 bg-gradient-to-b from-gray-400 to-white   flex justify-center  items-center rounded-xl">
        <CloudArrowDownIcon class="h-5 text-indigo-600"/>
      </div>
            </div>
          </div>
        </div>
     <div data-aos="fade-up" data-aos-duration="1000">
         <Carousel   :breakpoints="breakpoints"  :wrapAround="true" :transition="500" class="">
           <Slide  v-for="digital_product ,index in digital_products" :key="digital_product.id">
             <DigitalProduct class="" :data="digital_product" />
           </Slide>
           <template #addons>
             <Navigation />
           </template>
         </Carousel>
     </div>
      </div>
    </div>
  </template>
    
  <script>
  import { apiStore } from '~/store/api';
  import axios from 'axios'
  import DigitalProduct from "@/components/shared/DigitalProduct.vue"
  import { CloudArrowDownIcon } from '@heroicons/vue/20/solid'

  export default {
    components: { DigitalProduct ,CloudArrowDownIcon}, 
    data: () => ({
      digital_products: [],
      loading: true,
  
      settings: {
        itemsToShow: 1,
        snapAlign: 'center',
      },
    
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
          axios.get(`${apiStore().address}/api/product/best-digital-product-list-main-page/`, {
              headers: {
                  "Content-type": "application/json",
                  Accept: "application/json",
              },
          }).then((response) => {
              this.digital_products = response.data
              this.loading = false
  
          })
        },
       
      },
      mounted() {
          this.getData()
        },
  }
  
  
  </script>
  
  
  <style scoped>
  
  .bg-blue-circle-33{
     
    
    background: rgb(0,0,0);
    background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(76,9,121,1) 33%, rgba(76,9,121,1) 64%, rgba(0,0,0,1) 100%);
  }
  
  .inner-shadow-custom{
    box-shadow: inset 100px 0px 100px -30px rgba(0, 0, 0, 0.787),inset -100px 0px 100px -30px rgba(0, 0, 0, 0.787);
  }
  
  .bg-blue-circle-best-product{
     
  
    background-image:radial-gradient(ellipse 100% 90% at 50% -30%, #5e09d591 20.9%, #00000000 90%);
  }
  </style>
  