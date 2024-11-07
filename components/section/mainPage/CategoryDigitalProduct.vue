<template>
  <div class=" bg-white flex items-center justify-center my-20 mx-3" v-if="loading" >
    <div class="grid grid-cols-1 md:grid-cols-4  gap-4 container mx-auto  h-[110px] md:h-[110px] overflow-hidden">
      <!-- Placeholder cards to show while loading -->
      <div v-for="n in 5" :key="n" class="my-5 bg-gray-300  h-[80px] md:h-[90px] w-full animate-pulse rounded-[17px]">
        <!-- Empty box that represents loading card -->
      </div>
    </div>
  </div>

  <!-- <div class="pb-16 py-[60px] pb-[60px]  flex items-center justify-center" >
    <div role="status">
      <span class="relative flex h-8 w-8">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-8 w-8 bg-indigo-500"></span>
      </span>
      <span class="sr-only">Loading...</span>
    </div>
  </div>
   -->
  <div v-else>
    <div class="bg-white rounded-[30px] mt-[-50px] isolate overflow-hidden relative">
      <div class="flex pt-2  pb-12 justify-between items-center">
        <div class="rtl lg:px-3 pt-3">
          <a @click="$router.push('/p/search/?tab=1&category_digital_product=1');"
            class="text-gray-900 rtl text-sm mg:text-lg flex items-center">
            بیشتر
            <span aria-hidden="true" class="px-3 pt-1"> &larr;</span>
          </a>
        </div>
        <div class="text-gray-900 font-bold text-md lg:text-xl text-right px-4 pt-4 flex items-center justify-end">
          فروشندگان برتر اپل آیدی
          <div
            class="ml-2 lg:mx-5  h-12 w-12 bg-gradient-to-b from-indigo-500 to-indigo-700  flex justify-center  items-center rounded-xl">
            <CloudArrowDownIcon class="h-5 text-white" />
          </div>
        </div>

      </div>
      <div data-aos="fade-down" data-aos-duration="1000">
        <div class="container mx-auto grid grid-cols-1 px-2 gap-4 sm:grid-cols-1 md:grid-cols-3 lg:grid-cols-4 pb-10 rtl "
          :style="{ backgroundImage: '', backgroundSize: 'cover' }">

          <div v-for="category in digital_products.results" :key="category.id"
            class="relative isolate rounded-2xl cursor-pointer border border-gray-100 shadow-3 bg-white px-3 pt-2 shadow-sm "
            :style="{ backgroundImage: 'url(' + category.image[0].photo + ')', backgroundSize: 'cover' }">
            <div
              class="rounded-2xl  absolute inset-0  -z-10 bg-gradient-to-t  from-gray-900/70 to-gray-800/40" />
            <div class=" bg-blue-circle-categories-black  -z-10 rounded-2xl absolute inset-0  " />

            <div class="grid grid-cols-8 gap-4">
              <div class="col-span-6">
                <div class="min-w-0 shadow-1g ">
                  <nuxt-link :to="'/p/digitalProduct/' + category.slug" class="focus:outline-none">
                    <span class="absolute inset-0" aria-hidden="true" />
                    <p class="text-sm font-bold text-gray-50 px-3">{{ category.title }}</p>
                    <p class="text-xs font-bold text-gray-50 px-3 pb-1 pt-1"><span
                        class="text-xs font-light ps-1">فروشنده : </span>{{ category.shop.name }} </p>
                  </nuxt-link>
                </div>
                <p class=" ml-auto text-md text-[35px] text-gray-200 ps-4">{{ parseInt(category.discount != 0 ? category.price*(100-category.discount)/100 : category.price) }}<span
                    class="text-xs font-light ps-1">تومان</span></p>
                <div class=" w-full mt-2">
                </div>
              </div>
                <div class="flex items-center justify-end col-span-2">
                  <div class="flex flex-col items-center justify-end">
                    <div v-if="category.rate > 0">
                      <p class="text-xs text-gray-200 pe-1">({{ category.rate_number }})</p>
                    </div>
                    <div v-else>
                      <p class="text-xs text-gray-200 pe-1">(0)</p>
                    </div>
                    <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating"
                      :class="[category.rate / 20 > rating ? 'text-yellow-500' : 'text-gray-300', 'h-3 w-3 flex-shrink-0']"
                      aria-hidden="true" />
                  </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
import { StarIcon } from '@heroicons/vue/20/solid'
import axios from "axios";
import { apiStore } from '~/store/api';
import DigitalProduct from "@/components/shared/DigitalProduct.vue"
import PinDigitalProduct from "@/components/shared/PinDigitalProduct.vue"
import { CloudArrowDownIcon } from '@heroicons/vue/20/solid'

export default {
  components: { DigitalProduct, PinDigitalProduct, CloudArrowDownIcon, StarIcon },
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
      axios.get(`${apiStore().address}/api/product/digital-products-search-for-buyer/?category=1`, {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      }).then((response) => {
        this.digital_products = response.data
        this.loading = false

      })
    }
  },
  mounted() {
    this.getData()
  }
}


</script>


<style scoped>
.bg-blue-circle-best-product {


  background-image: radial-gradient(ellipse 100% 90% at 50% -30%, #0000007d 88.9%, #00000000 90%) !important;

}
</style>
