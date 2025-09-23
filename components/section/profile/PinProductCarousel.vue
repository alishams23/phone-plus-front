<template>
   <div class="pb-16 py-[200px] pb-[800px]  flex items-center justify-center" v-if="loading == true">
        <div role="status">
            <span class="relative flex h-8 w-8">
                <span
                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-8 w-8 bg-indigo-500"></span>
            </span>
            <span class="sr-only">Loading...</span>
        </div>
    </div>
  <div v-if="data.length != 0" class=" ">
    <div class="text-gray-800   font-bold text-xl text-right pe-6 pt-3 flex items-center justify-end">
      محصولات فیزیکی پین شده

      <div class="ml-2 lg:mx-5  h-12 w-12 bg-gradient-to-b from-indigo-500 to-indigo-700  flex justify-center  items-center rounded-xl">
        <StarIcon class="h-5 text-white"/>
      </div>

    </div>
    <div class="container mx-auto isolate overflow-hidden relative">
      <div
          class="mx-auto grid w-2xl grid-cols-1  gap-x-10 lg:gap-y-5 lg:mx-0  lg:max-w-none lg:grid-cols-2"
        >
      <div data-aos="flip-up" v-for="item in data" :key="item">
        <PinProduct :isCompanyNameExist="false" class=" mb-10 lg:mb-20" :data="item" />
      </div>
     
      <div>
      </div>
     
      </div>
    </div>
    <div class="container border-t py-2 mx-auto" ></div>

  </div>
</template>

<script>
import { PaperClipIcon } from '@heroicons/vue/20/solid'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import PinProduct from "@/components/shared/PinProduct.vue"
import axios from 'axios'
  
 
import {
    StarIcon
  } from '@heroicons/vue/20/solid'
  
export default {
  props: ['idShop'],
  components: {
    PinProduct,StarIcon
  },
  setup() {
    const swiper = ref(null);
    const onSwiper = (swiperInstance) => {
      swiper.value = swiperInstance
    };
    return {
      onSwiper,
      swiper,
      modules: [Autoplay, Pagination, Navigation],
    };
  },
  data: () => ({
    data: [],
    loading:true,
    // carousel settings
   
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
 
  }),
  methods: {
    async getData() {
      this.loading = true
      await axios.get(`${apiStore().address}/api/product/products-search-for-buyer/?shop=${this.idShop}&pin_profile=${true}`, {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      }).then((response) => {
        console.log('product carousel get data', response.data);
        this.data = response.data.results
        this.loading = false

      })
    },
  },
  mounted() {
    this.getData()
  }
}
</script>

<style scoped>
.swiper-slide {
  width: auto;
}
</style>