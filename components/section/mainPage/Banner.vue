<template>
    <div class="pb-16 py-[200px] pb-[800px]  flex items-center justify-center" v-if="loading">
        <div role="status">
            <span class="relative flex h-8 w-8">
                <span
                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-8 w-8 bg-indigo-500"></span>
            </span>
            <span class="sr-only">Loading...</span>
        </div>
    </div>

    <div data-aos="fade-left" data-aos-duration="1000" class=" bg-white pb-16 pt-10 lg:pt-0  " v-else>

        <Swiper @swiper="onSwiper" :modules="modules" :slides-per-view="'auto'" :loop="false" :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
    }" :pagination="{
        clickable: true,

    }" :space-between="20" class="px-3 ">
            <SwiperSlide v-for="post in banners" :key="post.id" class="mb-10 mx-2 ">

                <div class="  w-80 pb-10 aspect-[16/9] sm:aspect-[2/1] lg:aspect-[16/9]">

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
    </div>
</template>

<script>


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';


import axios from 'axios'
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ArrowRightIcon } from '@heroicons/vue/24/solid'
import { apiStore } from '~/store/api';
export default {
    components: { ArrowRightIcon },
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

    background: linear-gradient(160deg, rgba(255, 255, 255, 0.191) 0%, rgba(255, 255, 255, 0.292) 50%, rgba(255, 255, 255, 0.1) 51%, rgba(255, 255, 255, 0.01) 52%, rgba(0, 213, 255, 0) 50%);
}

.swiper-slide {
    width: auto;
}
</style>