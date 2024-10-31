<template>
  
    <div  class=" h-[300px]  bg-gray-100   mx-3 ml-7 lg:mx-[3rem] isolate mt-5  justify-end rounded-2xl">
        <nuxt-link :to="'/p/product/'+ data.slug">
          <img :src="data.image[0].photo" alt="" class="absolute h-[7rem] w-[7rem] md:h-[12rem] md:w-[12rem] -ms-5 lg:-ms-10 -mb-10 mt-10 shadow-1 rounded-3xl" />
          <div class="flex justify-end w-full">
            <h3 class="mt-3 rtl text-right text-xs max-w-[65%] ps-4 pt-7 font-semibold leading-6 text-black overflow-hidden whitespace-nowrap text-ellipsis">
              <a>
                {{ data.title }}
              </a>
            </h3>
          </div>
          <div class=" bottom-0 flex right-0  items-end justify-end overflow-hidden rounded-lg pe-4 pt-2">
          <div class="flex items-center justify-end">
              <div v-if="data.rate > 0">
                  <p class="text-sm text-gray-500 px-3 pt-1">({{ data.rate_number }})</p>
              </div>
              <div v-else>
                  <p class="text-sm text-gray-500 px-3">(0)</p>
              </div>
              <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating"
                :class="[data.rate / 20 > rating ? 'text-yellow-500' : 'text-gray-300', 'h-3 w-3 flex-shrink-0']"
                aria-hidden="true" />
          </div>
        </div>
          <div :class="data.discount != 0 ? 'line-through ' : '' " class="pe-4 text-right text-xs text-gray-300 font-semibold">
            {{ data.discount != 0 ? data.price : '&nbsp; ' }}
          </div>
          <div class="text-right pe-4 pb-4">
            {{ parseInt(data.discount != 0 ? data.price*(100-data.discount)/100 : data.price) }}
          </div>
          <div class="flex justify-end w-full">
            <p class="text-right max-h-[50px] max-w-[65%] overflow-hidden text-xs pe-4 pb-4" v-html="data.plain_description">
            </p>
          </div>
          <div class="flex flex-wrap justify-end pe-4 pb-4">
            <div v-for="color in data.colors" :key="color" class="w-4 h-4 rounded-full shadow-lg m-1" :style="{ backgroundColor: color.hexcolor }"></div>
          </div>
            <div class="flex items-end justify-end overflow-hidden rounded-lg pe-4 pb-10 pt-4">
              <div class="relative text-white shadow-md text-sm font-semibold bg-indigo-600 rtl text-right rounded-full px-3 py-1" v-if="data.discount != 0">
                {{ data.discount}} % 
              </div>
            </div> 
        </nuxt-link>
        
    </div>
</template>

<script >
import { StarIcon } from '@heroicons/vue/20/solid'
export default {
  components: {StarIcon},

    props: ["data","width"],

}



</script>
<style>
.bg-blue-circle{
   
  
    background-image:radial-gradient(ellipse 100% 30% at 50% 10%, #fcfcfc3f 86.9%, #00000000 90%)!important;

}
</style>


