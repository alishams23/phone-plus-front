<template>
  <div class="   bg-white rounded-[30px]  isolate overflow-hidden relative">
   <div class="flex pt-2 justify-between items-center">
    <div class="rtl px-3">
      <a href="#" class="text-gray-900 rtl  ">
        بیشتر
        <span aria-hidden="true" class="px-3 pt-3"> &larr;</span>
      </a>
    </div>
    <div class="text-gray-900 font-bold text-xl text-right px-4 pt-4">
      محصولات دیجیتال شگفت‌انگیز

    </div>
    
   </div>
    <Carousel  :itemsToShow="5.5" :wrapAround="true" :transition="500">
      <Slide v-for="digital_product in digital_products" :key="digital_product.id">
        <DigitalProduct :data="digital_product" />
      </Slide>

      <template #addons>
        <Navigation />
      </template>

    </Carousel>

     

  </div>
</template>
  
<script>
import axios from "axios";

import DigitalProduct from "@/components/shared/DigitalProduct.vue"
export default {
  components: { DigitalProduct }, 
  data: () => ({
    digital_products: [],
    loading: true,
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: 'start',
      },
    },
  }),
  methods: {
    getData() {
      this.loading = true
      axios.get(`http://192.168.119.128:8000/api/product/discount-digital-product-list-main-page/`, {
          headers: {
              "Content-type": "application/json",
              Accept: "application/json",
          },
      }).then((response) => {
          this.digital_products = response.data
          this.loading = false

      })
  }},
  mounted() {
    this.getData()
  }
}


</script>


<style scoped>

.bg-blue-circle-best-product{
   
  
  background-image:radial-gradient(ellipse 100% 90% at 50% -30%, #0000007d 88.9%, #00000000 90%)!important;

}
</style>
