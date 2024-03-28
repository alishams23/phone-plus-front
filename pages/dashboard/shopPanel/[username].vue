<template>
  <div class="relative " v-if="results && results.image">
      <img :src="results.image" alt=""
        class="absolute  inset-0 -z-10  h-full w-full object-cover " />
        <img class="absolute backdrop-blur-md overflow-hidden inset-0 -z-10  h-full w-full  " />
  
      <div class="bg rounded-b-[50px] "></div>
      <div class="bg bg2 rounded-b-[50px]"></div>
      <div class="bg bg3 rounded-b-[50px]"></div>
    <div class="absolute overflow-hidden inset-0 -z-10  h-full w-full  " />
    <div class="absolute inset-x-0 -top-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div
        class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div>
    <div class="flex flex-col justify-center items-center " v-if="results">
      <img class="h-24 w-24 mt-10 object-cover rounded-full" :src="results.image" alt="" />
      <div class="flex items-center mt-4 space-x-reverse space-x-2">
        <h1 class="text-white font-bold text-xl">{{ results.name }}</h1>
        <!-- Using the ExclamationCircleIcon component -->
        <ExclamationCircleIcon class="h-5 w-5 text-white" />
      </div>

    </div>
    <div class="mx-auto max-w-2xl  py-10 md:pt-[1rem] md:pb-[1rem]">
      <div class="hidden sm:mb-8 sm:flex sm:justify-center">
      </div>
    </div>
  </div>
  <div class="w-full h-56 bg-indigo-600 flex py-10 flex-col justify-center items-center space-y-4" v-else
    v-if="results">
    <div class="h-24 w-24 rounded-full bg-white" alt="" />
    <div class="flex items-center space-x-reverse space-x-2">
      <h1 class="text-white font-bold text-xl">{{ results.name }}</h1>
      <!-- Using the ExclamationCircleIcon component -->
      <ExclamationCircleIcon class="h-5 w-5 text-white" />
    </div>

  </div>
  <div class="mt-[-40px]">

    <svg id="Layer_2" class="w-full" fill="white" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 695.06 35.8">

      <g id="Layer_2-2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1-2">
          <path class="cls-1" d="M695.06,0V35.8H0V0S194.27,12.75,356.77,12.75,695.06,0,695.06,0Z" />
        </g>
      </g>
    </svg>
  </div>


  <div class="min-h-full">
    <main class="">
      <div class="mx-auto max-w-full  lg:max-w-full ">
        <h1 class="sr-only">Page title</h1>
        <section aria-labelledby="section-1-title">
          <h2 class="sr-only" id="section-1-title">Section title</h2>
          <div class="overflow-hidden -mt-2 bg-white shadow">
            <div class="">
              <!-- Your content -->
              <div v-if="results">
                <PinProductCarousel :idShop="results.id" />
                <PinDigitalProductCarousel :idShop="results.id" />
                
              </div>
              <div v-if="results" v-for="(item, index) in order" :class="index % 2 != 0 ? 'bg-gradient-to-tl bg-indigo-600 from-gray-900 from-0%  text-white ' : ''" >
                <component :is="BlogCarousel" :idObject="item.id_object" :idShop="results.id" :title="item.title"
                  v-if="item.type == 'blog'" />
                <component :is="ProductCarousel" :idObject="null" :idShop="results.id" :title="item.title"
                  v-if="item.type == 'product'" />
                <component :is="ProductCarousel" :idObject="item.id_object" :idShop="results.id" :title="item.title"
                  v-if="item.type == 'productCategory'" />
                <component :is="DigitalProductCarousel" :idObject="null" :idShop="results.id" :title="item.title"
                  v-if="item.type == 'digital'" />
                <component :is="DigitalProductCarousel" :idObject="item.id_object" :idShop="results.id"
                  :title="item.title" v-if="item.type == 'productDigitalCategory'" />
                  <!-- <div class="container border-b py-2 mx-auto" ></div> -->

              </div>
            </div>
          </div>
        </section>
        <!-- Main 3 column grid -->
      </div>
    </main>
  </div>

  <div v-if="loading == true">

  </div>
</template>

<script>
import { PaperClipIcon } from '@heroicons/vue/20/solid'
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon, ExclamationCircleIcon } from '@heroicons/vue/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import Product from "@/components/shared/Product.vue"
import PinProductCarousel from "@/components/section/profile/PinProductCarousel.vue"
import PinDigitalProductCarousel from "@/components/section/profile/PinDigitalProductCarousel.vue"
import DigitalProductCarousel from "@/components/section/profile/DigitalProductCarousel.vue"
import ProductCarousel from "@/components/section/profile/ProductCarousel.vue"
import BlogCarousel from "@/components/section/profile/BlogCarousel.vue"
import Blog from "@/components/shared/Blog.vue"
import axios from 'axios'
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ArrowRightIcon } from '@heroicons/vue/24/solid'
import { apiStore } from '~/store/api';
import { useUserStore } from '~/store/user';
import { NavigationStore } from '~/store/navigation'; 
export default {
  components: {
    Product,
    Blog,
    PinProductCarousel,
    PinDigitalProductCarousel,
    DigitalProductCarousel,
    ProductCarousel,
    BlogCarousel,
    PaperClipIcon,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Popover,
    PopoverButton,
    PopoverOverlay,
    PopoverPanel,
    TransitionChild,
    TransitionRoot,
    Bars3Icon,
    BellIcon,
    XMarkIcon,
    MagnifyingGlassIcon,
    ExclamationCircleIcon,
    ArrowRightIcon
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
    DigitalProductCarousel: DigitalProductCarousel,
    ProductCarousel: ProductCarousel,
    BlogCarousel: BlogCarousel,

    order: [
        { id_object: 1, title: "محصولات فیزیکی", type: 'product' },
        { id_object: 2, title: "محصولات دیجیتال", type: 'digital' },
        { id_object: 3, title: "بلاگ", type: 'blog' },
      ],
    selectedTab: 'products',
    results: null,
    data: [
    ],
  }),
  computed: {
    isLogin() {
      return useUserStore().userToken != null;
    },
  },
  methods: {

    async getData() {
      this.loading = true
      await axios.get(`${apiStore().address}/api/account/shop-profile-info/${this.$route.params.username}/`, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: "application/json",
          Authorization:
              this.isLogin == true ? `Token ${useUserStore().userToken}` : "",
        },
      }).then((response) => {
        console.log('getData', response.data);
        this.results = response.data
        response.data.order.length > 0 ?  this.order = response.data.order : ''
        this.loading = false

      })
    },
    openLogin() {
      NavigationStore().changeLoginState(true)
    },
  },
  async mounted() {
    await this.getData()
    NavigationStore().setButtons([{
        'name':'چت کردن',
        'func':this.isLogin == true ?null :this.openLogin ,
        'href': this.isLogin == true ? `/chat/${this.results.username}/${this.results.username}_${useUserStore().username}` : '',
      }])
  
  },
  
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



.bg-blue-circle-best-product{
   

  background-image:radial-gradient(ellipse 100% 90% at 50% -30%, #5109d591 20.9%, #00000000 90%);
}
</style>