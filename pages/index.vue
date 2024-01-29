<template>
  <!-- <Blog /> -->
  <div class="rounded-b-[50px] ">
    <HeaderHero2 />
  </div>
  <div class=" w-full isolate relative isolate overflow-hidden py-10 rounded-t-[50px] -mt-10 bg-white"></div>
  <div class="container mx-auto">
 
    <div>
      <Banner />

    </div>
    <div class="mx-2 mt-10">
      <BestProduct />

    </div>
    <Categories class="mx-2" />
    <div class="mx-2">
      <Discount />

    </div>
    <MainBlog />

    <!-- <Advertisement /> -->
  </div>
</template>

<script>
import axios from "axios";
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
  components: { Categories,BestProduct,Discount, HeaderHero, Banner, PromoSection, MainBlog, Advertisement, Advertisement2,HeaderHero2 },
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