<template>
  <div class="     isolate overflow-hidden relative">
   
    <div class=" absolute inset-0 -z-1000 bg-gradient-to-l bg-black from-black from-10% via-blue-800/80 via-black/100" />
    <div class=" absolute inset-0 -z-1000  bg-blue-circle-best-product" />
 
    
  <div class="absolute inset-0 -z-1000">
    <div class="flex pt-2 justify-between items-center">
      <div class="rtl px-3">
        <a href="#" class="text-gray-100 rtl  ">
          بیشتر
          <span aria-hidden="true" class="px-3 pt-3"> &larr;</span>
        </a>
      </div>
      <div class="text-gray-100 font-bold text-xl text-right px-4 pt-4">
        پر فروش ترین محصولات
  
  
      </div>
      
     </div>
  </div>
    <Carousel  :itemsToShow="5.5" :wrapAround="true" :transition="500" class="pt-10">
      <Slide v-for="item in data" :key="item" >
        <Product :data="item" class="my-10" />
      </Slide>

      <template #addons>
        <Navigation />
      </template>

    </Carousel>
 
     

  </div>
</template>
  
<script>
import Product from "@/components/shared/Product.vue"
export default {
  components: { Product }, data: () => ({
    data: [
      {
        image: '/images/2.jpeg',
        title: 'samsung'
        , price: 1000000
        , percent: 10
      },
      {
        image: '/images/3.jpg',
        title: 'ایفون ۱۴'
        , price: 1000000
        , percent: 10

      },
      {
        image: '/images/6.jpg',
        title: 'ایرپاد'
        , price: 1000000
        , percent: 0
    

      },
      {
        image: '/images/4.jpg',
        title: 'مک بوک'
        , price: 1000000
        , percent: 10

      },
      {
        image: '/images/5.jpg',
        title: 'هدفون'
        , price: 1000000
        , percent: 10

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
  filter: blur(1px);

  transform: rotateY(-10deg) scale(0.99);
}



.carousel__slide--prev {
  opacity: 1;
  filter: blur(0px);

  transform: rotateY(-10deg) scale(0.99);
}

.carousel__slide--next {
  opacity: 1;
  filter: blur(0px);
  


  transform: rotateY(10deg) scale(1);
}

.carousel__slide--active {
  opacity: 1;
  filter: blur(0px);

  transform: rotateY(0) scale(1);
}
.bg-blue-circle-best-product{
   

  background-image:radial-gradient(ellipse 100% 90% at 50% -30%, #5109d591 20.9%, #00000000 90%);
}
</style>
