<template>
  <div v-if="data.length != 0">
    <div class="text-gray-800 font-bold text-xl text-right pe-6 pt-2 flex items-center justify-end">
      محصولات دیجیتال پین شده

      <div class="ml-2 lg:mx-5  h-12 w-12 bg-gradient-to-b from-indigo-500 to-indigo-700  flex justify-center  items-center rounded-xl">
        <StarIcon class="h-5 text-white"/>
      </div>
    </div>
    <div class="   isolate overflow-hidden relative">
      <Carousel :breakpoints="breakpoints" :wrapAround="true" :transition="500" class="pt-5 pb-4">
        <Slide v-for="item in data" :key="item">
          <PinDigitalProduct class=" " :data="item" />
        </Slide>
        <template #addons>
          <Navigation />
        </template>
      </Carousel>
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
import PinDigitalProduct from "@/components/shared/PinDigitalProduct.vue"
import axios from 'axios'
import {
    StarIcon
  } from '@heroicons/vue/20/solid'
  
import { apiStore } from '~/store/api';
import { useUserStore } from '~/store/user';
export default {
  props: ['idShop'],
  components: {
    PinDigitalProduct,StarIcon
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
          itemsToShow: 4,
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
      await axios.get(`${apiStore().address}/api/product/digital-products-search-for-buyer/?shop=${this.idShop}&pin_profile=true`, {
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
.carousel__slide {
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
}
</style>