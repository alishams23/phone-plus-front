<template>
  
  <div class="relative " v-if="results && results.image">
      <img v-if="results.background_image" :src="results.background_image" alt=""
        class="absolute  inset-0 -z-10  h-full w-full object-cover " />
      <img v-else :src="results.image" alt=""
        class="absolute  inset-0 -z-10  h-full w-full object-cover " />
        <div class="absolute backdrop-blur- sm overflow-hidden inset-0 -z-10  h-full w-full  " />
  
      <div class="bg rounded-b-[50px] "></div>
      <div class="bg bg2 rounded-b-[50px]"></div>
      <div class="bg bg3 rounded-b-[50px]"></div>
    <div class="absolute bg-gray-800/70 overflow-hidden inset-0 -z-10  h-full w-full  " />
    <!-- <div class="absolute inset-x-0 -top-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div
        class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div> -->
   
    <div class="flex flex-col justify-center items-center " v-if="results">
      <div>
        <ul class="absolute left-10 flex justify-start mt-5 space-x-2">
            <li class="bg-gradient-to-b from-indigo-600 to-indigo-900  rounded-full  w-8 h-8 flex justify-center items-center" >
                <a href="https://t.me/yourprofile" target="_blank" class="text-white  ">
                    <svg class="w-4 h-4" fill="currentColor" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="comp_x5F_335-telegram"><g><g><g><path d="M477.805,102.981l-67.327,317.515c-5.08,22.41-18.326,27.984-37.15,17.431l-102.585-75.596      l-49.497,47.607c-5.477,5.478-10.06,10.061-20.617,10.061l7.37-104.479l190.129-171.804c8.268-7.37-1.792-11.454-12.848-4.083      L150.233,287.633l-101.19-31.671c-22.011-6.873-22.408-22.012,4.581-32.568L449.419,70.911      C467.744,64.04,483.779,74.994,477.805,102.981z" style=""/><path d="M389.819,453.082c-6.575,0-13.769-2.164-21.383-6.433c-0.36-0.202-0.709-0.427-1.042-0.672      l-95.797-70.595l-43.353,41.698c-5.775,5.774-12.978,12.918-27.617,12.918c-2.774,0-5.424-1.152-7.315-3.183      c-1.892-2.029-2.855-4.754-2.66-7.521l7.37-104.479c0.182-2.578,1.354-4.984,3.271-6.717l148.935-134.58L155.562,296.095      c-2.48,1.562-5.521,1.956-8.315,1.082l-101.19-31.672c-19.627-6.128-22.91-17.06-23.12-23.03      c-0.282-8.018,4.182-19.452,27.045-28.395l395.843-152.5c4.736-1.776,9.363-2.661,13.836-2.661      c9.022,0,16.929,3.631,22.264,10.225c4.812,5.947,9.699,17.007,5.66,35.926L420.26,422.57c-0.01,0.046-0.02,0.091-0.029,0.137      C414.239,449.135,398.605,453.081,389.819,453.082z M378.737,429.491c5.425,2.959,9.01,3.591,11.081,3.591      c1.865,0,7.536,0,10.892-14.731l67.313-317.444c1.842-8.628,1.24-15.615-1.647-19.184c-1.505-1.86-3.765-2.804-6.715-2.804      c-2.066,0-4.331,0.457-6.73,1.356L57.219,232.725c-9.771,3.822-13.369,7.515-14.161,8.964c0.74,0.919,3.25,2.943,8.965,4.728      l96.79,30.294l231.036-145.476c5.356-3.543,11.187-5.493,16.433-5.493c6.65,0,12.04,3.301,14.064,8.616      c1.015,2.663,2.503,9.632-5.564,16.823L217.69,320.239l-6.001,85.075c0.761-0.723,1.574-1.536,2.484-2.446      c0.046-0.046,0.093-0.092,0.14-0.137l49.497-47.607c3.509-3.376,8.941-3.734,12.865-0.844L378.737,429.491z" style=""/></g></g></g></g><g id="Layer_1"/></svg>
                </a>
            </li>
            
            <!-- <li class="">
                <a href="https://wa.me/yourphonenumber" target="_blank" class="bg-gradient-to-b from-indigo-600 to-indigo-900  ">
                    <svg class="w-6 h-6" style="fill-rule:evenodd;clip-rule:evenodd;stroke-linejoin:round;stroke-miterlimit:2;" version="1.1" viewBox="0 0 512 512" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="WhatsApp-Logo-Icon"><path d="M116.225,-0.001c-11.264,0.512 -26.112,1.536 -32.768,3.072c-10.24,2.048 -19.968,5.12 -27.648,9.216c-9.728,4.608 -17.92,10.752 -25.088,17.92c-7.68,7.68 -13.824,15.872 -18.432,25.6c-4.096,7.68 -7.168,17.408 -9.216,27.648c-1.536,6.656 -2.56,21.504 -2.56,32.768c-0.512,4.608 -0.512,10.752 -0.512,13.824l0,251.905l0,13.824c0.512,11.264 1.536,26.112 3.072,32.768c2.048,10.24 5.12,19.968 9.216,27.648c4.608,9.728 10.752,17.92 17.92,25.088c7.68,7.68 15.872,13.824 25.6,18.432c7.68,4.096 17.408,7.168 27.648,9.216c6.656,1.536 21.504,2.56 32.768,2.56c4.608,0.512 10.752,0.512 13.824,0.512l251.904,0l13.824,0c11.264,-0.512 26.112,-1.536 32.768,-3.072c10.24,-2.048 19.968,-5.12 27.648,-9.216c9.728,-4.608 17.92,-10.752 25.088,-17.92c7.68,-7.68 13.824,-15.872 18.432,-25.6c4.096,-7.68 7.168,-17.408 9.216,-27.648c1.536,-6.656 2.56,-21.504 2.56,-32.768c0.512,-4.608 0.512,-10.752 0.512,-13.824l0,-265.729c-0.512,-11.264 -1.536,-26.112 -3.072,-32.768c-2.048,-10.24 -5.12,-19.968 -9.216,-27.648c-4.608,-9.728 -10.752,-17.92 -17.92,-25.088c-7.68,-7.68 -15.872,-13.824 -25.6,-18.432c-7.68,-4.096 -17.408,-7.168 -27.648,-9.216c-6.656,-1.536 -21.504,-2.56 -32.768,-2.56c-4.608,-0.512 -10.752,-0.512 -13.824,-0.512l-265.728,0Z" style="fill:url(#_Linear1);fill-rule:nonzero;"/><path d="M344.754,289.698c-4.56,-2.282 -26.98,-13.311 -31.161,-14.832c-4.18,-1.521 -7.219,-2.282 -10.259,2.282c-3.041,4.564 -11.78,14.832 -14.44,17.875c-2.66,3.042 -5.32,3.423 -9.88,1.14c-4.561,-2.281 -19.254,-7.095 -36.672,-22.627c-13.556,-12.087 -22.709,-27.017 -25.369,-31.581c-2.66,-4.564 -0.283,-7.031 2,-9.304c2.051,-2.041 4.56,-5.324 6.84,-7.986c2.28,-2.662 3.04,-4.564 4.56,-7.606c1.52,-3.042 0.76,-5.705 -0.38,-7.987c-1.14,-2.282 -10.26,-24.72 -14.06,-33.848c-3.701,-8.889 -7.461,-7.686 -10.26,-7.826c-2.657,-0.132 -5.7,-0.16 -8.74,-0.16c-3.041,0 -7.98,1.141 -12.161,5.704c-4.18,4.564 -15.96,15.594 -15.96,38.032c0,22.438 16.34,44.116 18.62,47.159c2.281,3.043 32.157,49.089 77.902,68.836c10.88,4.697 19.374,7.501 25.997,9.603c10.924,3.469 20.866,2.98 28.723,1.806c8.761,-1.309 26.98,-11.029 30.781,-21.677c3.799,-10.649 3.799,-19.777 2.659,-21.678c-1.139,-1.902 -4.179,-3.043 -8.74,-5.325m-83.207,113.573l-0.061,0c-27.22,-0.011 -53.917,-7.32 -77.207,-21.137l-5.539,-3.287l-57.413,15.056l15.325,-55.959l-3.608,-5.736c-15.184,-24.145 -23.203,-52.051 -23.192,-80.704c0.033,-83.611 68.083,-151.635 151.756,-151.635c40.517,0.016 78.603,15.811 107.243,44.474c28.64,28.663 44.404,66.764 44.389,107.283c-0.035,83.617 -68.083,151.645 -151.693,151.645m129.102,-280.709c-34.457,-34.486 -80.281,-53.487 -129.103,-53.507c-100.595,0 -182.468,81.841 -182.508,182.437c-0.013,32.156 8.39,63.546 24.361,91.212l-25.892,94.545l96.75,-25.37c26.657,14.535 56.67,22.194 87.216,22.207l0.075,0c100.586,0 182.465,-81.852 182.506,-182.448c0.019,-48.751 -18.946,-94.59 -53.405,-129.076" style="fill:#fff;"/></g><defs><linearGradient gradientTransform="matrix(0,-512,-512,0,256.001,512)" gradientUnits="userSpaceOnUse" id="_Linear1" x1="0" x2="1" y1="0" y2="0"><stop offset="0" style="stop-color:#25cf43;stop-opacity:1"/><stop offset="1" style="stop-color:#61fd7d;stop-opacity:1"/></linearGradient></defs></svg>
                </a>
            </li> -->
            <li class="bg-gradient-to-b from-indigo-600 to-indigo-900  rounded-full  w-8 h-8 flex justify-center items-center">
                <a href="https://www.instagram.com/yourprofile" target="_blank" class="text-white ">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill-rule="evenodd" d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM8.01 3.5h7.98a4.26 4.26 0 014.26 4.26v8.48a4.26 4.26 0 01-4.26 4.26H8.01a4.26 4.26 0 01-4.26-4.26V7.76A4.26 4.26 0 018.01 3.5zM12 7.28a4.72 4.72 0 100 9.44 4.72 4.72 0 000-9.44zm0 7.79a3.07 3.07 0 110-6.14 3.07 3.07 0 010 6.14zM16.97 6.2a1.11 1.11 0 110 2.22 1.11 1.11 0 010-2.22z" clip-rule="evenodd"></path>
                    </svg>
                </a>
            </li>
            <li class="bg-gradient-to-b from-indigo-600 to-indigo-900  rounded-full  w-8 h-8 flex justify-center items-center">
                <a href="https://x.com/yourprofile" target="_blank" class="text-white ">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M23.32 4.27h-4.88l-4.9 6.76-4.62-6.76H4.14l6.24 8.75-6.24 8.74h4.89l4.89-6.74 4.6 6.74h4.8l-6.23-8.74 6.23-8.75z"></path>
                    </svg>
                </a>
            </li>
        </ul>
      </div>
      <img class="h-24 w-24 mt-10 object-cover rounded-full" :src="results.image" alt="" />
      <div class="flex items-center mt-4 space-x-reverse space-x-2">
        
        <!-- Using the ExclamationCircleIcon component -->
        <Menu as="div" class="relative inline-block text-left">
          <div>
            <!-- Using a div or span as a clickable element for opening the dropdown -->
            <div @click="toggleMenu" class="inline-flex w-full justify-center gap-x-1.5 cursor-pointer rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm">
              <MenuButton
                class="inline-flex w-full justify-center gap-x-1.5 rounded-md  text-sm font-semibold text-gray-900 shadow-sm ">
                
                <ExclamationCircleIcon @click="" class="h-5 w-5 my-2 text-white " />
                <h1 class="text-white font-bold text-xl ">{{ results.name }}</h1>
              </MenuButton>
              <span class="sr-only">Show options</span>
            </div>
          </div>
          <transition enter-active-class="transition ease-out duration-500"
            enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-100" leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95">
            <MenuItems
              class="absolute rtl left-1/2 z-10 mt-2 w-96 -translate-x-1/2 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <!-- Menu items here -->
              <p class="text-right p-5 px-10 font-serif text-lg font-semibold">درباره فروشگاه:</p>
              <p class="text-right pb-5 px-10 text-gray-700 font-normal text-base leading-relaxed">{{results.bio}}</p>
            </MenuItems>
          </transition>
        </Menu>
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
                
              </div>                                                    <!-- bg-gradient-to-tl bg-indigo-600 from-gray-900 from-0%  text-white  -->
              <div v-if="results" v-for="(item, index) in order" :class="index % 2 != 0 ? '' : ''" >
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

  <div >
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
    loading : true,
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
        'name':'پشتیبانی فروشگاه',
        'func': this.isLogin == true ?null :this.openLogin ,
        'href': this.isLogin == true ? `/p/chat/${this.results.admin[0].username}/${this.results.admin[0].username}_${useUserStore().username}` : null,
      }])
  
  },
  
}
</script>

<style scoped>
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
}

.swiper-slide {
  width: auto;
} */



.bg-blue-circle-best-product{
   

  background-image:radial-gradient(ellipse 100% 90% at 50% -30%, #5109d591 20.9%, #00000000 90%);
}
</style>