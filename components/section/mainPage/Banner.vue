<template>
    <div class="pb-16 py-[200px] pb-[800px] bg-white   flex items-center justify-center " v-if="loading">
        <div role="status">
            <span class="relative flex h-8 w-8">
                <span
                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-8 w-8 bg-indigo-500"></span>
            </span>
            <span class="sr-only">Loading...</span>
        </div>
    </div>

    <div data-aos="fade-left" data-aos-duration="1000" class=" bg-white     " v-else>

        <div class="flex  justify-between items-center pb-5 md:mt-[-40px]">
            <div class="rtl px-3">
              <!-- <a @click="$router.push('/p/search/?sort_product=' + '-rate');"
                class="text-gray-100 text-sm mg:text-lg rtl pt-3 cursor-pointer flex items-center  ">
                بیشتر
                <span aria-hidden="true" class="px-3 pt-1"> &larr;</span>
              </a> -->
            </div>
            <div class="text-black font-bold text-md lg:text-xl text-right px-4 pt-4 flex items-center justify-end">
            بنر فروشگاه ها

              <div
              class="ml-2 lg:mx-5  h-12 w-12 bg-gradient-to-b from-indigo-500 to-indigo-700  flex justify-center  items-center rounded-xl">
                <BuildingStorefrontIcon class="h-5 text-white" />
              </div>
            </div>
          </div>

        <Swiper @swiper="onSwiper" :modules="modules" :slides-per-view="'auto'" :loop="false" :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
    }" :pagination="{
        clickable: true,

    }" :space-between="20" class="px-3 ">
            <SwiperSlide v-for="post in banners" :key="post.id" class="mb-10 mx-2 ">

                <div class=" w-[230px]  md:w-[300px] pb-10 aspect-[16/9] sm:aspect-[2/1] lg:aspect-[16/9]">

                    <a :href="post.link">
                        <div class="">
                            <img :src="post.photo" alt=""
                                class="absolute  w-full rounded-[30px] bg-gray-100 object-cover inset-0 -z-10 h-full w-full object-cover" />
                            <div class=" absolute inset-0 -z-10 gradient-banner" />
                            <div class="absolute inset-0 rounded-[30px] ring-1 ring-inset ring-gray-900/10" />
                        </div>
                    </a>
                </div>
            </SwiperSlide>

        </Swiper>
        <!-- <div @click="swiper.slideNext()" class="rounded-full bg-indigo-900 p-3 m-4 mb-[3.3rem]">
           <ArrowRightIcon class="h-5 text-white " />
        </div> -->
        <div class="flex justify-center mt-5">
        <div class="w-[300px] invisible md:visible py-[2px] rounded-xl bg-gray-100"></div>

    </div>
    </div>



</template>

<script>


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { BuildingStorefrontIcon } from '@heroicons/vue/20/solid'


import axios from 'axios'
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ArrowRightIcon } from '@heroicons/vue/24/solid'
import { apiStore } from '~/store/api';
export default {
    components: { ArrowRightIcon,BuildingStorefrontIcon },
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
    data() {
        return {
            banners: '',
            loading: true
        }
    },
    methods: {

        getData() {
            this.loading = true
            axios.get(`${apiStore().address}/api/product/banner/`, {
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json",
                },
            }).then((response) => {
                this.banners = response.data
                this.loading = false

            })
        }
    }, mounted() {
        this.getData()
    }
};

</script>

<style scoped>
.gradient-banner {

    background: linear-gradient(160deg, rgba(255, 255, 255, 0.191) 0%, rgba(255, 255, 255, 0.131) 50%, rgba(255, 255, 255, 0.1) 51%, rgba(255, 255, 255, 0.01) 52%, rgba(0, 213, 255, 0) 50%);
}

.swiper-slide {
    width: auto;
}
</style>