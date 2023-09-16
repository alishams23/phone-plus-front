<template>
  <!-- <Blog /> -->
  <div class="container mx-auto">
    <div class="pt-20 ">
      <HeaderHero />
    </div>
    <div>
      <FeatureSection />

    </div>
    <div class="mx-2">
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
import HeaderHero from "@/components/section/HeaderHero.vue"
import FeatureSection from "@/components/section/FeatureSection.vue"
import PromoSection from "@/components/section/PromoSection.vue"
import MainBlog from "@/components/section/MainBlog.vue"
import Advertisement from "@/components/section/Advertisement.vue"
import Advertisement2 from "@/components/section/Advertisement2.vue"
import Categories from "@/components/section/Categories.vue"
export default {
  components: { Categories,BestProduct,Discount, HeaderHero, FeatureSection, PromoSection, MainBlog, Advertisement, Advertisement2 },
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