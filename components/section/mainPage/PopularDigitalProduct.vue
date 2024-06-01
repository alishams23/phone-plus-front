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
     <div class="container mx-auto">
      <div class="md:rounded-3xl isolate overflow-hidden relative border border-b" v-if="loading == false">
          <img :src="digital_products[index].image[0].photo ? digital_products[index].image[0].photo : digital_products[index].image" data-aos="fade-left" data-aos-duration="1000" class="absolute  inset-0 -z-10 h-full w-full object-cover" />
          <div class="absolute inset-0 -z-10 bg-gradient-to-l from-white from-0% via-white/90 " />
          <div class="absolute inset-0 -z-10 bg-indigo-100/80 "  />
          <div class="relative">
              <div class="flex pt-3 justify-between items-center">
                  <div class="rtl px-3 pt-3">
                      <button @click="$router.push('/p/search/?sort_digital_product=-rate&tab=1');" class="text-black text-sm mg:text-lg rtl cursor-pointer">
                          بیشتر
                          <span aria-hidden="true" class="px-3 pt-3">&larr;</span>
                      </button>
                  </div>
                  <div class="text-black font-bold text-md lg:text-xl text-right px-4 pt-4 flex items-center justify-end">
                      محصولات دیجیتال محبوب
                      <div class="ml-2 lg:mx-5 h-12 w-12 bg-white flex justify-center items-center rounded-xl">
                          <CloudArrowDownIcon class="h-5 text-indigo-600"/>
                      </div>
                  </div>
              </div>
          </div>
          <nuxt-link :to="'/p/digitalProduct/'+ digital_products[index].id" class="flex flex-col md:flex-row justify-center md:justify-between container mx-auto">
              <img :src="digital_products[index].image[0].photo" alt="" class="md:mb-10 me-4 md:mx-20 mt-10 md:mt-0 mx-4  md:w-[200px] h-[140px] md:h-[200px] border shadow-2 object-cover  rounded-3xl md:w-auto" />
              <div class="mx-4 md:mx-20 my-10">
                  <div class="text-black font-black text-center md:text-right text-lg md:text-2xl">
                      {{ digital_products[index].title }}
                  </div>
                  <div class="flex items-center justify-center  md:justify-end pt-2">
                    
                      <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating"
                                :class="[digital_products[index].rate / 20 > rating ? 'text-yellow-500' : 'text-gray-300', 'h-3 w-3 flex-shrink-0']"
                                aria-hidden="true" />
                  </div>
                  <div class="text-gray-500 text-center md:text-right mt-5 max-h-[50px]  overflow-hidden pb-4" v-html="digital_products[index].description"></div>
                  <div class="mt-5">
                      <div :class="digital_products[index].discount != 0 ? 'line-through ' : '' " class="lg:pe-4 text-xs text-red-500 font-semibold text-center md:text-right">
                          {{ digital_products[index].discount != 0 ? digital_products[index].price : '&nbsp; ' }}
                      </div>
                      <div class="lg:pe-4 pb-4 text-center md:text-right">
                          {{ parseInt(digital_products[index].discount != 0 ? digital_products[index].price*(100-digital_products[index].discount)/100 : digital_products[index].price) }}
                      </div>
                  </div>
              </div>
          </nuxt-link>
      </div>
  </div>

      <!-- <div class="   isolate overflow-hidden relative" v-if="loading == false">
        <div class=" absolute inset-0 -z-1000 bg-gradient-to-l bg-black from-black from-10% via-indigo-800/80 via-black/100" />
        <div class=" absolute inset-0 -z-1000  bg-blue-circle-best-product" />
        <div class="relative">
          <div class="flex pt-3 justify-between items-center">
            <div class="rtl px-3 pt-3">
              <button @click="$router.push('/p/search/?sort_digital_product=-rate&tab=1');" class="text-gray-200 text-sm mg:text-lg rtl cursor-pointer ">
                بیشتر
                <span aria-hidden="true" class="px-3 pt-3"> &larr;</span>
              </button>
            </div>
            <div class="text-gray-200 font-bold text-md lg:text-xl text-right px-4 pt-4 flex items-center justify-end">
              محصولات دیجیتال محبوب

              <div class="ml-2 lg:mx-5  h-12 w-12 bg-white   flex justify-center  items-center rounded-xl">
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
      </div> -->
    </div>
  </template>
    
  <script>
  import { apiStore } from '~/store/api';
  import axios from 'axios'
  import DigitalProduct from "@/components/shared/DigitalProduct.vue"
  import { CloudArrowDownIcon } from '@heroicons/vue/20/solid'
  import PinDigitalProduct from "@/components/shared/PinDigitalProduct.vue"
  import { StarIcon } from '@heroicons/vue/20/solid'

  export default {
    components: { DigitalProduct ,CloudArrowDownIcon, PinDigitalProduct, StarIcon}, 
    data: () => ({
      digital_products: [],
      loading: true,
      index:0,
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
              setInterval(() => {
                if (this.digital_products.length > this.index + 1) {
                  this.index += 1
                }
                else if (this.digital_products.length == this.index + 1){
                  this.index = 0
                }
              }, 3000);
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
  