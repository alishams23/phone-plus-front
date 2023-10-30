<template>

    <Swiper 
    
    :effect="swiper.effect"
    :grabCursor="swiper.grabCursor"
    :centeredSlides="swiper.centeredSlides"
    :slidesPerView="swiper.slidesPerView"
    :coverflowEffect="swiper.coverflowEffect"
    :keyboard="swiper.keyboard"
    :mousewheel="swiper.mousewheel"
    :spaceBetween="swiper.spaceBetween"
    :loop="swiper.loop"
    :pagination="swiper.pagination"


     >
        <SwiperSlide v-for="item in 10"  :key="item">
            dcdc
    
          </SwiperSlide>
    </Swiper>
    <!-- <div class="swiper-container">
      <div class="swiper-wrapper">
        <div class="swiper-slide swiper-slide--one">
          <span>domestic</span>
          <div>
            <h2>Enjoy the exotic of sunny Hawaii</h2>
            <p>
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
             
              </svg>
              Maui, Hawaii
            </p>
          </div>
        </div>
       
      </div>
    </div> -->
  </template>
  
  <script>
  import Swiper from 'swiper';
  import 'swiper/swiper-bundle.css';
  
  export default {
    data() {
      return {
        swiper:  {
          effect: 'coverflow',
          grabCursor: true,
          centeredSlides: true,
          slidesPerView: 'auto',
          coverflowEffect: {
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2,
            slideShadows: true,
          },
          keyboard: {
            enabled: true,
          },
          mousewheel: {
            thresholdDelta: 70,
          },
          spaceBetween: 60,
          loop: true,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
          },
        },
        
      };
    },
    mounted() {

    },
    methods: {
  
    },
  };
  </script>
  
  <style scoped>
  /* Your CSS styles for the component */
  /* Ensure that you have already imported your external CSS styles here */
  </style>
  