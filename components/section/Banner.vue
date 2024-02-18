<template>
    <div class="bg-white pb-16 flex items-center ">
 
        <Swiper @swiper="onSwiper" :modules="modules" :slides-per-view="'auto'" :loop="false"  :autoplay="{
            delay: 2000,
            disableOnInteraction: false,
          }" :pagination="{
            clickable: true,
           
          }"
          :space-between="20" class="px-3 ">
            <SwiperSlide v-for="post in posts" :key="post.id" class="mb-10 mx-2 ">
                <div class="  w-80 pb-10 aspect-[16/9] sm:aspect-[2/1] lg:aspect-[16/9]">
        
                 <div class="">
                    <img :src="post.imageUrl" alt=""
                    class="absolute  w-full rounded-[30px] bg-gray-100 object-cover inset-0 -z-10 h-full w-full object-cover" />
                <div class=" absolute inset-0 -z-10 gradient-banner" />
                <div class="absolute inset-0 rounded-[30px] ring-1 ring-inset ring-gray-900/10" />
                 </div>
                </div>
            </SwiperSlide>
        
        </Swiper>  
        <!-- <div @click="swiper.slideNext()" class="rounded-full bg-indigo-900 p-3 m-4 mb-[3.3rem]">
           <ArrowRightIcon class="h-5 text-white " />
        </div> -->
    </div>
</template>

<script >


// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { useUserStore } from '~/store/user'; 

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ArrowRightIcon } from '@heroicons/vue/24/solid'

export default {
    components:{ArrowRightIcon},
    computed: {
    userToken() {
        console.log(useUserStore().userToken)
      return useUserStore().userToken;
    },
  },
  setup() { 
    const swiper = ref(null);
    const onSwiper = (swiperInstance) => {
        swiper.value =  swiperInstance
      };
    return {
        onSwiper,
        swiper,
      modules: [Autoplay, Pagination, Navigation],
    };
  },
  data(){
    return{
         posts : [
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
            '/images/banner/1.webp',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 2,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
            '/images/banner/2.webp',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 3,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
            '/images/banner/3.webp',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 3,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
            '/images/banner/3.webp',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 1,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
            '/images/banner/1.webp',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
    {
        id: 3,
        title: 'Boost your conversion rate',
        href: '#',
        description:
            'Illo sint voluptas. Error voluptates culpa eligendi. Hic vel totam vitae illo. Non aliquid explicabo necessitatibus unde. Sed exercitationem placeat consectetur nulla deserunt vel. Iusto corrupti dicta.',
        imageUrl:
            '/images/banner/3.webp',
        date: 'Mar 16, 2020',
        datetime: '2020-03-16',
        category: { title: 'Marketing', href: '#' },
        author: {
            name: 'Michael Foster',
            role: 'Co-Founder / CTO',
            href: '#',
            imageUrl:
                'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
    },
]
    }
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