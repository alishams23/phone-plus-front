<template>
  <!-- <div v-if="data.length == 0">
    <div class="container py-20 rtl mx-auto px-6 mt-6">
      <div class=" bg-indigo-100 border-r-[9px] border-indigo-500 rounded-lg text-indigo-700 p-4"
        role="alert">
        <p class="font-bold">محصولی با دسته بندی {{ title }} یافت نشد</p>
      </div>
    </div>
  </div>
  <div v-else> -->
    
  <div v-if="data.length != 0" >
    <div class="flex pt-2 justify-between items-center">
      <div class="rtl   lg:mx-10 ">
        <a @click="$router.push('/p/search/?shop_product=' + this.idShop + `${this.idObject == null ? '' : ('&category_product=' + this.idObject)}`);" class=" rtl cursor-pointer flex items-center">
          بیشتر
          <span aria-hidden="true" class="px-3 pt-1"> &larr;</span>
        </a>
      </div>
      <div class=" font-bold text-xl text-right px-6 pt-4 flex items-center justify-end">
        {{ title }}
        <div class="ml-2 lg:mx-5  h-12 w-12 bg-gradient-to-b from-indigo-500 to-indigo-700  flex justify-center  items-center rounded-xl">
        <ShoppingBagIcon class="h-5 text-white"/>
      </div>
      </div>
    </div>
    
    <div class="   isolate overflow-hidden relative mb-2">
      <div class=" rtl  pt-10   ">
        <Swiper @swiper="onSwiper" :modules="modules" :slides-per-view="'auto'" :loop="false" :autoplay="{
          delay: 2000,
          disableOnInteraction: false,
        }" :pagination="{
          clickable: true,
        }" :space-between="10" class="px-3 ">
           <SwiperSlide v-for="item in data" :key="item + 'product xxx'" class="mb-10 mx-2 ">
             <Product class="my-10 " :data="item" />
           </SwiperSlide>
        </Swiper>
      </div>
    </div>
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
import Product from "@/components/shared/Product.vue"
import axios from 'axios'
import { apiStore } from '~/store/api';
import { useUserStore } from '~/store/user';
import { ShoppingBagIcon } from '@heroicons/vue/20/solid'


export default {
  props: ["title", "idObject", "idShop"],
  components: {
    Product,ShoppingBagIcon
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
    selectedTab: 'products',
    data: [],

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
  computed: {
    filteredData() {
      // This computed property filters the data based on the selected country.
      // Adjust the logic according to your needs.
      if (this.selectedCountry === 'Canada') {
        return this.data.filter((item) => item.country === 'Canada');
      } else {
        return this.data; // Return all data if no specific filter is applied
      }
    },
  },
  methods: {
    async getData() {
      this.loading = true
      await axios.get(`${apiStore().address}/api/product/products-search-for-buyer/?${this.idObject == null ? '' : ('category=' + this.idObject)}&shop=${this.idShop}`, {
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