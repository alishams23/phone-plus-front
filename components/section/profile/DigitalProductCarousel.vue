<template>
  <!-- <div v-if="data.length == 0">
    <div class="container py-20 rtl mx-auto px-10 mt-6">
      <div class="bg-indigo-100 border-r-[9px] border-indigo-500 rounded-lg text-indigo-700 p-4"
        role="alert">
        <p class="font-bold">محصولی با دسته بندی {{ title }} یافت نشد</p>
      </div>
    </div>
  </div>
  <div v-else class="flex pt-2 justify-between items-center pt-4 "> -->
  <div v-if="data.length != 0" class="flex pt-2 justify-between items-center pt-4 ">
    <div class="rtl lg:mx-10 ">
      <a @click="$router.push('/p/search/?tab=1&shop_digital_product=' + this.idShop + `${this.idObject == null ? '' : ('&category_digital_product=' + this.idObject)}`);" class=" rtl cursor-pointer flex items-center">
        بیشتر
        <span aria-hidden="true" class="px-3 pt-1"> &larr;</span>
      </a>
    </div>
    <div class=" font-bold text-xl text-right px-6  flex items-center justify-end">
      {{ title }}

      <div class="ml-2 lg:mx-5  h-12 w-12 bg-gradient-to-b from-indigo-500 to-indigo-700  flex justify-center  items-center rounded-xl">
        <DocumentIcon class="h-5 text-white"/>
      </div>
    </div>
  </div>
  <div class=" rtl  isolate overflow-hidden relative mb-2 ">
    <div class="  ">
      <Swiper @swiper="onSwiper" :modules="modules" :slides-per-view="'auto'" :loop="false" :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
      }" :pagination="{
        clickable: true,
      }" :space-between="10" class="px-3 ">
        <SwiperSlide  v-for="item in data" :key="item"
          class="mb-10 mx-2 ">
          <DigitalProduct class="my-10 ltr" :data="item" />
        </SwiperSlide>
      </Swiper>
    </div>
  </div>

</template>

<script>
import { DocumentIcon } from '@heroicons/vue/20/solid'


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import DigitalProduct from "@/components/shared/DigitalProduct.vue"
import axios from 'axios'
import { apiStore } from '~/store/api';
import { useUserStore } from '~/store/user';

export default {
  props: ["title", "idObject", "idShop"],
  components: {
    DigitalProduct,DocumentIcon
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
        200: {
          itemsToShow: 1.5,
          snapAlign: 'center',
        },
        700: {
          itemsToShow: 2.3,
          snapAlign: 'center',
        },
        1150: {
          itemsToShow: 2.3,
          snapAlign: 'center',
        },
        // 1024 and up
        1340: {
          itemsToShow: 3,
          snapAlign: 'center',
        },
        1490: {
          itemsToShow: 4,
          snapAlign: 'center',
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
      await axios.get(`${apiStore().address}/api/product/digital-products-search-for-buyer/?${this.idObject == null ? '' : ('category=' + this.idObject)}&shop=${this.idShop}`, {
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