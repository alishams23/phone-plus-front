<template>
  <div class="flex pt-2 justify-between items-center">
      <div class="rtl px-3 ">
        <a href="#" class=" rtl  ">
          بیشتر
          <span aria-hidden="true" class="px-3 pt-3"> &larr;</span>
        </a>
      </div>
      <div class=" font-bold text-xl text-right px-4 pt-4">
          محصولات دیجیتال
      </div>
     </div>

  <div class="   isolate overflow-hidden relative mb-2">
    <div class="bg-white pb-16 flex items-center ">
      <Swiper @swiper="onSwiper" :modules="modules" :slides-per-view="'auto'" :loop="false" :autoplay="{
        delay: 2000,
        disableOnInteraction: false,
      }" :pagination="{
        clickable: true,
      }" :space-between="10" class="px-3 ">
        <SwiperSlide v-for="item in data" :key="item.title" class="mb-10 mx-2 ">
          <DigitalProduct class="my-10  " :data="item" />
        </SwiperSlide>

      </Swiper>
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
    import DigitalProduct from "@/components/shared/DigitalProduct.vue"

  export default {
    components: { 
        DigitalProduct
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
    data: () => ({
      selectedTab: 'products',
      data: [
        {
          image: '/images/2.jpeg',
          title: 'samsung', 
          price: 1000000, 
          percent: 10,
          colors: [
            'red',
            'black',
            'yellow',
          ],
          description: 'این یک متن ساختگی برای توضیحات محصول است'
        },
        {
          image: '/images/3.jpg',
          title: 'ایفون ۱۴', 
          price: 1000000, 
          percent: 10,
          colors: [
            'red',
            'blue',
            'orange',
          ],
          description: 'این یک متن ساختگی برای توضیحات محصول است'
  
        },
        {
          image: '/images/6.jpg',
          title: 'ایرپاد', 
          price: 1000000, 
          percent: 0,
          colors: [
            'cyan',
            'purple',
            'white',
          ],
          description: 'این یک متن ساختگی برای توضیحات محصول است'
      
  
        },
        {
          image: '/images/2.jpeg',
          title: 'samsung', 
          price: 1000000, 
          percent: 10,
          colors: [
            'red',
            'black',
            'yellow',
          ],
          description: 'این یک متن ساختگی برای توضیحات محصول است'
        },
        {
          image: '/images/3.jpg',
          title: 'ایفون ۱۴', 
          price: 1000000, 
          percent: 10,
          colors: [
            'red',
            'blue',
            'orange',
          ],
          description: 'این یک متن ساختگی برای توضیحات محصول است'
  
        },
        {
          image: '/images/6.jpg',
          title: 'ایرپاد', 
          price: 1000000, 
          percent: 0,
          colors: [
            'cyan',
            'purple',
            'white',
          ],
          description: 'این یک متن ساختگی برای توضیحات محصول است'
      
  
        },
        {
          image: '/images/4.jpg',
          title: 'مک بوک', 
          price: 1000000, 
          percent: 10,
          colors: [
            'red',
            'black',
            'yellow',
          ],
          description: 'این یک متن ساختگی برای توضیحات محصول است'
  
        },
        {
          image: '/images/5.jpg',
          title: 'هدفون', 
          price: 1000000, 
          percent: 10,
          colors: [
            'red',
            'yellow',
            'cyan',
            'purple',
          ],
          description: 'این یک متن ساختگی برای توضیحات محصول است'
  
        },
        ],
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