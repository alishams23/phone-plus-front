<template>
  <div v-if="data.length == 0">
    <div class="container rtl mx-auto px-10 mt-6">
      <div class="bg-indigo-100 border-r-[9px] border-indigo-500 rounded-lg text-indigo-700 p-4"
        role="alert">
        <p class="font-bold">محصولی با دسته بندی {{ title }} یافت نشد</p>
      </div>
    </div>
  </div>
  <div v-else>
    <div class="flex pt-2 justify-between items-center">
      <div class="rtl  mx-10 ">
        <a href="#" class=" rtl  ">
          بیشتر
          <span aria-hidden="true" class="px-3 pt-3"> &larr;</span>
        </a>
      </div>
      <div class=" font-bold text-xl text-right px-10 pt-4">
        {{ title }}
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

export default {
  props: ["title", "idObject", "idShop"],
  components: {
    Product
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

.swiper-slide {
  width: auto;
}
</style>