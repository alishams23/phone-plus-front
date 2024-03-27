<template>
  <div v-if="data.length != 0" class=" ">
    <div class="text-gray-800   font-bold text-xl text-right pe-6 pt-3 flex items-center justify-end">
      محصولات پین شده

      <div class="ml-2 lg:mx-5  h-12 w-12 bg-gradient-to-b from-indigo-500 to-indigo-700  flex justify-center  items-center rounded-xl">
        <StarIcon class="h-5 text-white"/>
      </div>

    </div>
    <div class="container mx-auto isolate overflow-hidden relative">
      <div
          class="mx-auto grid w-2xl grid-cols-1  gap-x-10 lg:gap-y-5 lg:mx-0  lg:max-w-none lg:grid-cols-2"
        >
      <div v-for="item in data" :key="item">
        <PinProduct class=" mb-10 lg:mb-20" :data="item" />
      </div>
     
      <div>
      </div>
     
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
import PinProduct from "@/components/shared/PinProduct.vue"
import axios from 'axios'
import { apiStore } from '~/store/api';
import { useUserStore } from '~/store/user';
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
    selectedTab: 'products',
    data: [],
    
    // carousel settings
   
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
 
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
/* .carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.5;
  filter: blur(3px);

  transform: rotateY(-10deg) scale(0.99);
}

.carousel__slide--prev {
  opacity: 0.8;
  filter: blur(1px);

  transform: rotateY(-10deg) scale(0.99);
}

.carousel__slide--next {
  opacity: 0.8;
  filter: blur(1px);



  transform: rotateY(10deg) scale(0.99);
}

.carousel__slide--active {
  opacity: 1;
  filter: blur(0px);

  transform: rotateY(0) scale(1.15);
} */
</style>