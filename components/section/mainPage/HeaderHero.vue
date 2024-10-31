<template>
  <div class=" ">
    <div class="relative isolate flex items-center gap-x-6 overflow-hidden bg-gray-900  py-2.5 ">
    
    <NuxtMarquee :speed="15" class="w-full" direction="right" pauseOnHover >
      <NuxtLink
      to="/p/start_selling">
        <div class="flex items-center gap-x-4 gap-y-2 px-5">
          <p class="flex-grow  rtl text-xs md:text-sm leading-6 text-gray-100">
            <strong class="font-semibold">
              فرصت فروش در سایت ما
            </strong>
            
            به ما بپیوندید و محصولات خود را به هزاران مشتری عرضه کنید.
          </p>
          <a href="#" class="flex-none rounded-full bg-indigo-800 px-3.5 py-1 text-xs md:text-sm font-semibold text-white shadow-sm hover:bg-gray-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-900">همین حالا ثبت‌نام کنید</a>
        </div>
      </NuxtLink>
    </NuxtMarquee>
  </div>


    <div class="  relative ">
      <div class="bg rounded-b-[50px]"></div>
      <div class="bg bg2 rounded-b-[50px]"></div>
      <div class="bg bg3 rounded-b-[50px]"></div>
      <img src="/images/header.avif" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover " />
      <div class="absolute  rounded-2xl overflow-hidden inset-0 -z-10  h-full w-full  " />

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
      <div class="mx-5 lg:mx-auto max-w-2xl pt-32 pb-2  lg:pb-[1rem] lg:pt-16">
        <div data-aos="flip-up" class="text-center">
          <h1 class="text-2xl md:text-4xl mb-5 md:mb-0 font-bold  tracking-tight text-white ">بهترین فروشگاه‌ها رو اینجا
            پیدا کن</h1>
        </div>
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">

        </div>

        <div v-if="searchQuery != null && searchQuery != ''" @click="searchQuery = ''" class=" fixed backdrop-blur-xl z-10  w-full h-full top-0 left-0"></div>
        <div>
          <div class="flex ">
            <div class="relative  z-[10]  w-full">
              <input data-aos="flip-up" type="search" id="search-dropdown"
                v-on:keyup.enter="$router.push('/p/search/?search=' + searchQuery);" v-model="searchQuery"
                class=" block p-4 w-full z-[10] text-sm text-indigo-900 bg-white/70 backdrop-blur-sm focus:bg-white placeholder-gray-600 text-right rtl pr-20  rounded-[20px] "
                placeholder="جستجو بین محصولات ..." required>

              <div class="absolute mt-2 w-full" v-show="searchQuery != null && searchQuery != ''"
                style="z-index:9999999999999999">
                <transition name="fade">
                  <div class="mt-2 w-full">
                    <ul class="bg-glass-2 rtl rounded-xl shadow-xl h-96 w-full">
                      <div class="flex">
                        <div v-if="products.results.length > 0" class="flex-1">
                          <li class="p-4 font-body-2 text-gray-700 font-bold">محصولات فیزیکی</li>
                          <div class="rtl overflow-y-auto h-96">
                            <div v-for="item in products.results" :key="item.id" class="mb-3 px-2">
                              <nuxt-link :to="'/p/product/' + item.slug" @click="searchQuery = null">
                                <div class="flex items-start bg-white/60 rounded-xl text-sm overflow-hidden">
                                  <div class="px-2 py-2 flex-grow">
                                    <div class="pb-2 font-weight-black text-xs line-clamp-1 h-4">{{item.title}}</div>
                                    <div  class="mt-2">
                                      <span class="font-bold text-black text-xs rtl  text-right rounded-full">{{ item.price * (100 - item.discount) / 100 }}</span>
                                    </div>
                                    <!-- <div class="absolute bottom-0 flex left-0 items-end justify-end overflow-hidden rounded-lg px-3 py-1">
                                      <div
                                        class="relative text-red-700 text-xs font-semibold rtl text-right rounded-[10px] px-2 py-1"
                                        v-if="item.discount != 0"
                                      >
                                        {{ item.discount }} %
                                      </div>
                                    </div> -->
                                  </div>
                                  <img
                                    :src="item.image[0].photo"
                                    alt="Option image"
                                    class="w-[4rem] h-[4rem]  shadow-2xl object-cover rounded-e-lg"
                                  />
                                </div>
                              </nuxt-link>
                            </div>
                          </div>
                        </div>
                        <div v-if="digital_products.results.length > 0" class="flex-1">
                          <li class="p-4 font-body-1 text-gray-700 font-bold">محصولات دیجیتال</li>
                          <div class="rtl overflow-y-auto h-96">
                            <div v-for="item in digital_products.results" :key="item.id" class="mb-3 px-2" @click="searchQuery = null">
                              <nuxt-link :to="'/p/digitalProduct/' + item.slug">
                                <div class="flex items-start bg-white/60  rounded-xl text-sm ">
                                  <div class="px-2 py-2 flex-grow">
                                    <div class="pb-2 font-weight-black text-xs line-clamp-1 h-4">{{ item.title }}</div>
                                    <div class="mt-2">
                                      <span class="font-bold text-black text-xs  rtl text-right rounded-full">{{ item.price * (100 - item.discount) / 100 }}</span> 
                                    </div>
                                    <!-- <div class="absolute bottom-0 flex left-0 items-end justify-end overflow-hidden rounded-lg px-3 py-1">
                                      <div
                                        class="relative text-red-700 text-xs font-semibold rtl text-right rounded-[10px] px-2 py-1"
                                        v-if="item.discount != 0"
                                      >
                                        {{ item.discount }} %
                                      </div>
                                    </div> -->
                                  </div>
                                  <img
                                    :src="item.image[0].photo"
                                    alt="Option image"
                                    class="w-[4rem] h-[4rem] shadow-2xl object-cover rounded-e-lg"
                                  />
                                </div>
                              </nuxt-link>
                            </div>
                          </div>
                        </div>
                      </div>
                    </ul>
                  </div>
                </transition>
              </div>
              <button data-aos="flip-up" type="submit"
                class="absolute  top-0 end-0 p-4 text-sm font-medium h-full text-white bg-gradient-to-b from-sky-600 to-sky-800  rounded-e-[20px]">
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
    <div class="pb-[60px] pt-5 ">
      <Swiper @swiper="onSwiper" :modules="modules" :centerInsufficientSlides="true"  :slides-per-view="'auto'"  :autoplay="{
          delay: 2000,
          disableOnInteraction: false,
      }" :pagination="{
          clickable: true,
  
      }" :space-between="20" class="px-3 ">
              <SwiperSlide v-for="post in banners" :loop="true" :key="post.id" class="mb-10   opacity-75 hover:opacity-100">
  
                  <div class=" w-[170px]  md:w-[210px] pb-10 aspect-[16/9] sm:aspect-[2/1] lg:aspect-[16/9] ">
  
                      <a :href="post.link">
                          <div class="">
                              <img :src="post.photo" alt=""
                                  class="absolute  w-full rounded-[20px] bg-gray-100 object-cover inset-0 -z-10 h-full w-full object-cover" />
                              <div class=" absolute inset-0 -z-10 gradient-banner" />
                              <div class="absolute inset-0  ring-1 ring-inset ring-gray-900/10" />
                          </div>
                      </a>
                  </div>
              </SwiperSlide>
  
          </Swiper>
    </div>
  
   
    </div>
    <div class="mt-[-40px] mb-[-22px]">

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
      banners: '',
      loading: true,
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
    getData() {
            this.loading = true
            axios.get(`${apiStore().address}/api/product/banner/`, {
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json",
                },
            }).then((response) => {
                this.banners = response.data
                this.loading = false

            })
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
    this.getData()
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