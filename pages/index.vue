<template>
  <!-- <Blog /> -->
  
  <div class=" rounded-b-[50px]">
    <HeaderHero2 />
  </div>

  <div class="bg-white">
    <div>
      <Banner class="pt-10" />
    </div>
   
 
      <div class=" mt-5">
        <BestProduct />
  
      </div>
      <div class="container mx-auto">
        <Categories class="mx-2" />
      </div>
      <div class="">
        <Discount />
  
      </div>
      <div class="container mx-auto"><MainBlog  /></div>

      <div class=" mt-5 pb-10 ">
        <BestDigitalProduct />
      </div>
  
      <div class=" rounded-b-[50px]">
        <LoginPopup />
      </div>
          
      <div class=" mt-5 pb-10 ">
        <DiscountDigitalProduct />
      </div>

      <!-- <Advertisement /> -->
    </div>

</template>

<script>
import axios from "axios";
import LoginPopup from "@/components/section/LoginPopup.vue"
import DiscountDigitalProduct from "@/components/section/DiscountDigitalProduct.vue"
import BestDigitalProduct from "@/components/section/BestDigitalProduct.vue"
import BestProduct from "@/components/section/BestProduct.vue"
import Discount from "@/components/section/Discount.vue"
import HeaderHero2 from "@/components/section/HeaderHero2.vue"
import HeaderHero from "@/components/section/HeaderHero.vue"
import Banner from "@/components/section/Banner.vue"
import PromoSection from "@/components/section/PromoSection.vue"
import MainBlog from "@/components/section/MainBlog.vue"
import Advertisement from "@/components/section/Advertisement.vue"
import Advertisement2 from "@/components/section/Advertisement2.vue"
import Categories from "@/components/section/Categories.vue"

export default {
  components: { Categories, LoginPopup, DiscountDigitalProduct, BestProduct, BestDigitalProduct, Discount, HeaderHero, Banner, PromoSection, MainBlog, Advertisement, Advertisement2,HeaderHero2 },
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
  mounted() {

  },
  methods: {

  },
};
</script>