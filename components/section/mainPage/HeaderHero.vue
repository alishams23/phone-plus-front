<template>
  <div class=" ">
    <div class="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-50  py-2.5 sm:px-0 sm:before:flex-1">
    
    <NuxtMarquee :speed="15" class="w-full" direction="right" pauseOnHover >
      <div class="flex items-center gap-x-4 gap-y-2">
        <p class="flex-grow text-xs md:text-sm leading-6 text-gray-900">
          <strong class="font-semibold">
            فرصت فروش در سایت ما
          </strong>
          
          به ما بپیوندید و محصولات خود را به هزاران مشتری عرضه کنید.
        </p>
        <a href="#" class="flex-none rounded-full bg-gray-900 px-3.5 py-1 text-xs md:text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">همین حالا ثبت‌نام کنید</a>
      </div>
    </NuxtMarquee>

  </div>
    <div class="  relative ">
      <div class="bg rounded-b-[50px]"></div>
      <div class="bg bg2 rounded-b-[50px]"></div>
      <div class="bg bg3 rounded-b-[50px]"></div>
      <img src="/images/header.avif" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover " />
      <div class="absolute backdrop-blur-md rounded-2xl overflow-hidden inset-0 -z-10  h-full w-full  " />

      <div class="absolute inset-x-0 -top-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <!-- <div
          class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" /> -->
      </div>
      <div class="absolute w-full flex justify-end px-16 " >
        <div class="w-20 h-20 flex justify-center items-center">
          <p class="text-white"> فون‌پلاس </p>
          <img src="/images/logo/phone_plus_logo.png" alt="">
        </div>
      </div>
      <div class="mx-5 lg:mx-auto max-w-2xl py-32 sm:py-48 lg:pb-[7rem] lg:pt-16">
        <div data-aos="flip-up" class="text-center">
          <h1 class="text-2xl md:text-4xl mb-5 md:mb-0 font-bold  tracking-tight text-white ">بهترین فروشگاه‌ها رو اینجا
            پیدا کن</h1>
        </div>
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">

        </div>

        <div>
          <div class="flex ">
            <div class="relative w-full">
              <input data-aos="flip-up" type="search" id="search-dropdown"
                v-on:keyup.enter="$router.push('/p/search/?search=' + searchQuery);" v-model="searchQuery"
                class=" block p-4 w-full z-20 text-sm text-indigo-900 bg-white text-right rtl pr-20  rounded-[20px] "
                placeholder="جستجو بین محصولات ..." required>

              <div class="absolute  mt-2 w-full" v-show="searchQuery != null && searchQuery != ''"
                style="z-index:9999999999999999">
                <ul class="bg-glass-2 rtl rounded-xl  shadow-xl w-full">
                  <div v-if="products.results.length>0">
                    <li class=" p-4 font-body-2 text-gray-500 font-bold"> محصولات</li>
                    <div class="rtl">
                      <Swiper :modules="modules" :slides-per-view="'auto'" :loop="false" :space-between="34">
                        <SwiperSlide v-for="item in products.results" :key="item.id" class="mb-10 px-2">
                          <nuxt-link :to="'/p/product/' + item.id">
                            <div class="flex items-start border bg-glass-2 rounded-xl text-sm overflow-hidden">
                              <div class="px-5 py-3 flex-grow">
                              <div class="pb-3">
                                {{ truncateTitle(item.title) }}
                              </div>
                              <div :class="item.discount != 0 ? 'line-through ' : ''"
                                class=" text-xs text-gray-300 font-semibold   rtl text-right  rounded-full "> 
                                {{item.discount != 0 ? item.price : '&nbsp; ' }}
                                 </div>
                              <div class=" text-sm font-bold text-black  rtl text-right w-[150px] rounded-full "> {{ item.price*(100 - item.discount )/100 }}
                              </div>
                              <div
                                class="absolute bottom-0 flex left-0  items-end justify-end overflow-hidden rounded-lg px-3 py-1">
                                <div
                                  class="relative text-red-700  text-xs font-semibold bg-glass-red rtl text-right rounded-[10px] px-3 py-1"
                                  v-if="item.discount != 0"> {{ item.discount }} % 
                                </div>
                              </div>
                            </div>
                              <img :src="item.image[0].photo" alt="Option image"
                                class="w-32 h-24 object-cover rounded-e-lg" />
                            </div>
                          </nuxt-link>
                        </SwiperSlide>
                      </Swiper>
                    </div>
                  </div>
                  <div v-if="digital_products.results.length>0" >
                    <li class=" p-4 font-body-1 text-gray-500 border-t font-bold">محصولات دیجیتال </li>
                    <Swiper :modules="modules" :slides-per-view="'auto'" :loop="false" :space-between="34">
                      <SwiperSlide v-for="item in digital_products.results" :key="item" class="mb-10 px-2">
                        <nuxt-link :to="'/p/digitalProduct/' + item.id">
                          <div class="flex items-start border bg-glass-2 rounded-xl text-sm overflow-hidden">
                            <div class="px-5 py-3 flex-grow">
                              <div class="pb-3">
                                {{ truncateTitle(item.title) }}
                              </div>
                              <div :class="item.discount != 0 ? 'line-through ' : ''"
                                class=" text-xs text-gray-300 font-semibold   rtl text-right  rounded-full "> 
                                {{item.discount != 0 ? item.price : '&nbsp; ' }}
                                 </div>
                              <div class=" text-sm font-bold text-black  rtl text-right w-[150px] rounded-full "> {{ item.price*(100 - item.discount )/100 }}
                              </div>
                              <div
                                class="absolute bottom-0 flex left-0  items-end justify-end overflow-hidden rounded-lg px-3 py-1">
                                <div
                                  class="relative text-red-700  text-xs font-semibold bg-glass-red rtl text-right rounded-[10px] px-3 py-1"
                                  v-if="item.discount != 0"> {{ item.discount }} % 
                                </div>
                              </div>
                            </div>
                            <img :src="item.image[0].photo" alt="Option image"
                              class="w-32 h-24 object-cover rounded-e-lg" />
                          </div>
                        </nuxt-link>
                      </SwiperSlide>
                    </Swiper>
                  </div>
                </ul>
              </div>
              <button data-aos="flip-up" type="submit"
                class="absolute  top-0 end-0 p-4 text-sm font-medium h-full text-white bg-gradient-to-b from-blue-500 to-blue-800  rounded-e-[20px]">
                <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
                <span class="sr-only">Search</span>
              </button>
            </div>
          </div>
        </div>
        <!-- <div class="mt-3 flex items-center ">
            <span
              class="inline-flex items-center rounded-md bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-400/30 mx-1">موبایل</span>
            <span
              class="inline-flex items-center rounded-md bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-400/30 mx-1">هدفون</span>
            <span
              class="inline-flex items-center rounded-md bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-400/30 mx-1">لپ
              تاپ</span>
            <span
              class="inline-flex items-center rounded-md bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-400/30 mx-1">تبلت</span>
          </div> -->
        <div class="flex justify-center  mt-6">
        <!-- <div class="w-[300px] transition   py-2 rounded-full bg-gradient-to-b from-indigo-500 to-indigo-700 flex justify-between items-center">
         
           
            <button class="mx-3  bg-gradient-to-b from-indigo-500 to-indigo-800  rounded-2xl  text-xs  shadow-xl text-indigo-200 px-5 py-2">
             بیشتر بخوانید
            </button>
            <div class="text-indigo-100 text-sm font-bold">
              با ما فروشنده شوید
            </div>
            <div></div>
        </div> -->
        </div>
        
      </div>

      <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true">
        <div
          class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
    </div>
    <div class="mt-[-80px]">
      <!-- <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path fill="white" fill-opacity="1" d="M0,160L120,170.7C240,181,480,203,720,202.7C960,203,1200,181,1320,170.7L1440,160L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"></path>
        </svg> -->
      <svg id="Layer_2" fill="white" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 695.06 35.8">

        <g id="Layer_2-2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1-2">
            <path class="cls-1" d="M695.06,0V35.8H0V0S194.27,12.75,356.77,12.75,695.06,0,695.06,0Z" />
          </g>
        </g>
      </svg>
    </div>
    
  </div>
</template>

<script>
import { ref } from 'vue'
import axios from 'axios'
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { BuildingStorefrontIcon } from '@heroicons/vue/20/solid';

import { apiStore } from '~/store/api';
import {
  Combobox,
  ComboboxInput,
  ComboboxOptions,
  ComboboxOption,
  Dialog,
  DialogPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'

export default {
  components: [
    Combobox,
    ComboboxInput,
    ComboboxOptions,
    ComboboxOption,
    Dialog,
    DialogPanel,
    TransitionChild,
    TransitionRoot,
    BuildingStorefrontIcon,
  ],
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
  data() {
    return {
      open: ref(true),
      query: ref(''),
      searchQuery: '',
      products: {results:[]},
      digital_products: {results:[]},
      blogs: [],
      options: [
        { id: 1, label: 'Option 1', price: 10000, imageUrl: '/images/3.jpg' },
        { id: 2, label: 'Option 2', price: 10000, imageUrl: '/images/3.jpg' },
        { id: 2, label: 'Option 2', price: 10000, imageUrl: '/images/3.jpg' },
        { id: 2, label: 'Option 2', price: 10000, imageUrl: '/images/3.jpg' },
        { id: 2, label: 'Option 2', price: 10000, imageUrl: '/images/3.jpg' },
        { id: 2, label: 'Option 2', price: 10000, imageUrl: '/images/3.jpg' },
        { id: 2, label: 'Option 2', price: 10000, imageUrl: '/images/3.jpg' },
        // Add more options as needed
      ],
    };
  },
  methods: {
    truncateTitle(title) {
      return title.length > 20 ? title.substring(0, 20) + '...' : title;
    },
    getProducts() {
      this.loading = true
      axios.get(`${apiStore().address}/api/product/products-search-for-buyer/?search=${this.searchQuery}`, {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      }).then((response) => {
        this.products = response.data
        this.loading = false

      })
    },
    getDigitalProducts() {
      this.loading = true
      axios.get(`${apiStore().address}/api/product/digital-products-search-for-buyer/?search=${this.searchQuery}`, {
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
    // this.getProducts()
    // this.getDigitalProducts()
  },
  watch: {
    'searchQuery': {
      // the callback will be called immediately after the start of the observation
      immediate: true,
      handler(val, oldVal) {
        this.getProducts()
        this.getDigitalProducts()
      }
    }
  }
};
</script>

<style scoped>
/* Add your Tailwind CSS classes here */


.swiper-slide {
  width: auto;
}
</style>