
<template>
  <div class="min-h-full">
  
       <!-- Top Animation -->
      <div class="relative">
        <!-- <div class="">
            <div class="bg rounded-b-[50px] "></div>
            <div class="bg bg2 rounded-b-[50px]"></div>
            <div class="bg bg3 rounded-b-[50px]"></div>
        </div> -->
        <img src="/images/header.avif" alt=""
            class="absolute overflow-hidden inset-0 -z-10 h-full w-full object-cover " />
        <div class="absolute backdrop-blur-md overflow-hidden inset-0 -z-10  h-full w-full  " />
     
        <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:pt-20 lg:pb-[8rem]">
            <div class="hidden sm:mb-8 sm:flex sm:justify-center">
            </div>
        </div>
      </div>
    <div class="mt-[-20px] lg:pt-[-40px]">
         
      <svg id="Layer_2" class="w-full" fill="white" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 695.06 35.8">
       
        <g id="Layer_2-2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1-2">
            <path class="cls-1" d="M695.06,0V35.8H0V0S194.27,12.75,356.77,12.75,695.06,0,695.06,0Z"/>
          </g>
        </g>
      </svg>
    </div>
    <main class="absolute w-full -mt-32 pb-8">
      <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 class="sr-only">Page title</h1>
        <!-- Main 3 column grid -->
        <div class=" items-start flex flex-row flex-wrap flex-row-reverse ">
           <!-- Right column -->
          <div class="w-full lg:w-1/3  ">
           <div class="grid grid-cols-1 gap-4">
             <section aria-labelledby="section-2-title">
               <h2 class="sr-only" id="section-2-title">Section title</h2>
               <div class="overflow-hidden rounded-lg bg-white shadow">
                 <div class="">
                   <div class=" ">
                     <div v-for="item in items" :key="item.name" class=" flex hover:bg-gray-50"
                       :class="currentRouteCheck(item.page_name)?'font-bold bg-indigo-50':''" >
                       <nuxt-link :to="item.href"
                       :class="currentRouteCheck(item.page_name)?' ':'', item.name=='خروج'?'text-red-600' : 'border-b'"
                         class=" flex-auto rtl    block  px-4 py-8 text-sm text-gray-700 ">
                         {{ item.name }}
                       </nuxt-link>
                       <div  class="" :class="currentRouteCheck(item.page_name)?'border-l-[5px]  border-indigo-500 ':''"></div>
                     </div>
                   </div>
                 </div>
               </div>
             </section>
           </div>
          </div>
          
          <!-- Left column -->
           <div class="w-full lg:w-2/3 ">
              <div>
                <slot />
              </div>
           </div>

         
        </div>
      </div>
    </main>
  </div>
  <Navbar :buttons="buttons"/>
</template>
  
<script >
import Navbar from "@/components/section/Navigation.vue"
import { PaperClipIcon } from '@heroicons/vue/20/solid'
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'

export default {
  components: {
    PaperClipIcon, Bars3Icon, BellIcon, XMarkIcon, MagnifyingGlassIcon,
    Menu,
    Navbar,
    MenuButton,
    MenuItem,
    MenuItems,
    Popover,
    PopoverButton,
    PopoverOverlay,
    PopoverPanel,
    TransitionChild,
    TransitionRoot,
  },
  methods: {
    currentRouteCheck(page_name) {
      return this.$route.name.split("-").includes(page_name);
    },
  },
  data() {
    return {
      
      items: [
        { name: 'اطلاعات کاربری', href: '/p/dashboard/userPanel/', page_name: 'userPanel' },
        { name: 'محصولات فیزیکی دریافت شده', href: '/p/dashboard/productOrdersReceived/', page_name: 'productOrdersReceived' },
        { name: 'محصولات فیزیکی درحال آماده سازی و ارسال', href: '/p/dashboard/productOrders/', page_name: 'productOrders' },
        { name: 'محصولات دیجیتال خریداری شده', href: '/p/dashboard/allDigitalProductOrders/', page_name: 'allDigitalProductOrders' },
        { name: 'خروج', href: '/p/auth/logOut/', page_name: 'logOut' },
      ], 
    }
  }

}





</script>