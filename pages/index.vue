<template>
  <!-- <Blog /> -->
  
  <div class=" rounded-b-[50px]">
    <HeaderHero />
  </div>

  <div class="bg-white">
    <div>
      <Banner class="mt-[-1px]" />
    </div>
   
 
      <div class=" mt-5">
        <PopularProduct />
  
      </div>
      <div class="container mx-auto">
        <CategoriesProduct class="mx-2" />
      </div>
      <div class="">
        <DiscountProduct />
  
      </div>
      <div class="container mx-auto"><MainBlog  /></div>

      <div class=" mt-5 pb-10 ">
        <PopularDigitalProduct />
      </div>
    
      <div class=" mt-5 pb-10 ">
        <DiscountDigitalProduct />
      </div>

      <div class="container mx-auto">
        <CategoriesDigitalProduct class="mx-2" />
      </div>
    </div>

</template>

<script>
import axios from "axios";
import { useUserStore } from '~/store/user';
import LoginPopup from "@/components/section/LoginPopup.vue"
import DiscountDigitalProduct from "@/components/section/mainPage/DiscountDigitalProduct.vue"
import PopularDigitalProduct from "@/components/section/mainPage/PopularDigitalProduct.vue"
import PopularProduct from "@/components/section/mainPage/PopularProduct.vue"
import DiscountProduct from "@/components/section/mainPage/DiscountProduct.vue"
import HeaderHero from "@/components/section/mainPage/HeaderHero.vue"
import Banner from "@/components/section/mainPage/Banner.vue"
import PromoSection from "@/components/section/PromoSection.vue"
import MainBlog from "@/components/section/MainBlog.vue"
import CategoriesProduct from "@/components/section/mainPage/CategoriesProduct.vue"
import CategoriesDigitalProduct from "@/components/section/mainPage/CategoriesDigitalProduct.vue"
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
export default {
  components: { 
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionRoot,
    TransitionChild,
    CategoriesDigitalProduct,
    CategoriesProduct,
    LoginPopup,
    DiscountDigitalProduct,
    PopularProduct,
    PopularDigitalProduct,
    DiscountProduct,
    Banner,
    PromoSection,
    MainBlog,
    HeaderHero },
  head() {
    return {
      // title: "ثبت نام"
    };
  },
  layout: "landing",
  data() {
    return {
     
    };
  },

  methods: {

  },
};
</script>