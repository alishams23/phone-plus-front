<template>
  <!-- <div class="py-[60px] bg-white flex items-center justify-center" v-if="loading">
    <div role="status">
      <span class="relative flex h-8 w-8">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-8 w-8 bg-indigo-500"></span>
      </span>
      <span class="sr-only">Loading...</span>
    </div>
  </div> -->
  <div class="py-[60px] bg-white flex items-center justify-center  mx-3" v-if="loading">
    <div class="grid grid-cols-2 md:grid-cols-5  gap-4 container mx-auto  h-[220px] md:h-[280px] overflow-hidden">
      <!-- Placeholder cards to show while loading -->
      <div v-for="n in 5" :key="n" class="my-5 bg-gray-300  h-[200px] md:h-[260px] w-full animate-pulse rounded-[25px]">
        <!-- Empty box that represents loading card -->
      </div>
    </div>
  </div>
  <div v-else>

    <div class="">
      <div class="flex pt-3 justify-between items-center mt-[-30px]">
        <div class="rtl px-3">
          <a @click="$router.push('/p/search/?sort_product=' + '-rate');"
            class="text-gray-900 text-sm mg:text-lg rtl pt-3 cursor-pointer flex items-center  ">
            بیشتر
            <span aria-hidden="true" class="px-3 pt-1"> &larr;</span>
          </a>
        </div>
        <div class="text-black font-bold text-md lg:text-xl text-right px-4 pt-4 flex items-center justify-end">
          محبوب ترین محصولات فیزیکی

          <div
            class="ml-2 lg:mx-5  h-12 w-12 bg-gradient-to-b from-indigo-500 to-indigo-700  flex justify-center  items-center rounded-xl">
            <ShoppingBagIcon class="h-5 text-white" />
          </div>
        </div>
      </div>
      <div class=" bg-gradient-to-b bg-gray-200 pb-8  from-white from-40% via-white mb-8">
        <div class="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5  md:gap-4 container mx-auto">
          <div v-for="product in best_products.slice(0, 5)" class="my-5">
            <Product class="py-10 " :width="' '" :data="product" />
          </div>

        </div>
        <div class="border-t-2 mt-8  ">
        </div>
        <div class="flex items-center justify-center " style="margin-top:-35px">
          <!-- <div class="border-2 text-sm  bg-white rounded-full px-10 py-2 mb-[-14px]">
                          بیشتر
                        </div> -->
        </div>
      </div>
    </div>
   

    <div class=" w-full h-[130px] md:h-[300px] mt-[-30px] flex md:inline-block">
      <a href="https://phoneplus.ir/p/start_selling">
      <img src="/images/banner/1.png" class="w-full h-full object-cover object-center  " alt="">
    </a>
    </div>
  </div>
</template>

<script>
import axios from "axios";
import { apiStore } from '~/store/api';
import Product from "@/components/shared/Product.vue"
import { ShoppingBagIcon } from '@heroicons/vue/20/solid'

export default {
  components: { Product, ShoppingBagIcon },
  data: () => ({
    best_products: '',
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
      axios.get(`${apiStore().address}/api/product/best-product-list-main-page/`, {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      }).then((response) => {
        this.best_products = response.data
        this.loading = false

      })
    }
  }, mounted() {
    this.getData()
  }
}


</script>


<style scoped>
.bg-blue-circle-best-product {


  background-image: radial-gradient(ellipse 100% 90% at 50% -30%, #5109d591 20.9%, #00000000 90%);
}
</style>