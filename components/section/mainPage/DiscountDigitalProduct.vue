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
    <div class="bg-white rounded-[30px] mt-[-50px] isolate overflow-hidden relative">
     <div class="flex pt-2 justify-between items-center">
      <div class="rtl lg:px-3 pt-3">
        <a @click="$router.push('/p/search/?is_discount_digital_product=true&tab=1');" class="text-gray-900 rtl text-sm mg:text-lg flex items-center">
          بیشتر
          <span aria-hidden="true" class="px-3 pt-1"> &larr;</span>
        </a>
      </div>
      <div class="text-gray-900 font-bold text-md lg:text-xl text-right px-4 pt-4 flex items-center justify-end">
        محصولات دیجیتال شگفت‌انگیز
        <div class="ml-2 lg:mx-5  h-12 w-12 bg-gradient-to-b from-indigo-500 to-indigo-700  flex justify-center  items-center rounded-xl">
        <CloudArrowDownIcon class="h-5 text-white"/>
      </div>
      </div>
      
     </div>
  <div data-aos="fade-down" data-aos-duration="1000">
        <Carousel  :breakpoints="breakpoints" :wrapAround="true" :transition="500">
          <Slide  v-for="digital_product,index in digital_products"  :key="digital_product.id">
            <PinDigitalProduct  :data="digital_product" />
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
import axios from "axios";
import { apiStore } from '~/store/api';
import DigitalProduct from "@/components/shared/DigitalProduct.vue"
import PinDigitalProduct from "@/components/shared/PinDigitalProduct.vue"
import { CloudArrowDownIcon } from '@heroicons/vue/20/solid'

export default {
  components: { DigitalProduct,PinDigitalProduct,CloudArrowDownIcon }, 
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
        200: {
          itemsToShow: 1.5,
          snapAlign: 'center',
        },
        700: {
          itemsToShow: 2,
          snapAlign: 'center',
        },
        1150: {
          itemsToShow: 4,
          snapAlign: 'center',
        },
        // 1024 and up
        1340: {
          itemsToShow: 5,
          snapAlign: 'center',
        },
        1490: {
          itemsToShow: 5.5,
          snapAlign: 'center',
        },
      },
  }),
  methods: {
    getData() {
      this.loading = true
      axios.get(`${apiStore().address}/api/product/discount-digital-product-list-main-page/`, {
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
