<template>
  <nuxt-link :to="'/p/product/'+ data.id">
    <div :class="width ? `${width}` : 'w-[14rem]'" class="shadow-2 relative isolate  mx-2 justify-end overflow-hidden rounded-[25px]  bg-gray-900 px-8 pb-8 pt-20 sm:pt-20 lg:pt-40">
        <img :src="data.image[0].photo ? data.image[0].photo : data.image" :alt="data.image[0].title_for_photo" class="absolute  inset-0 -z-10 h-full w-full object-cover" />
        <div class="absolute inset-0 -z-10 bg-gradient-to-t  from-black from-0% via-black/30 " />
        <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
        <div class="absolute inset-0 -z-10 rounded-2xl bg-blue-circle" />
        <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
      
          <div class="-ml-4 flex items-center gap-x-4">
            <svg viewBox="0 0 2 2" class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
              <circle cx="1" cy="1" r="1" />
            </svg>
        
          </div>
        </div>
        <h3 class="mt-3 rtl text-sm md:text-md pb-3 font-semibold  text-white text-center overflow-hidden whitespace-nowrap text-ellipsis">
          <a v-if="data.title">
            <span class="absolute inset-0" />
            {{ data.title }}
          </a>
        </h3>
        <div class=" text-xs md:text-sm  font-bold text-white  rtl text-center rounded-full ">   {{ data.discount != 0 ? parseInt((data.price + data.colors[0].price)*((100-data.discount)/100)) : '&nbsp; ' }}  </div>
        <div :class="data.discount != 0 ? 'line-through ' : '' " class=" text-xs text-gray-500 font-semibold   rtl text-center rounded-full ">  {{ data.price + data.colors[0].price}}   </div>
        <div class="absolute bottom-0 flex left-0  items-end justify-end overflow-hidden rounded-lg ps-4 pe-4 pb-2 pt-6">
            <div class="relative text-white shadow-xl text-xs md:text-sm font-semibold bg-indigo-600 rtl text-right rounded-full px-3 py-1 " v-if="data.discount != 0">   {{ data.discount}} % </div>
        </div> 
        <div class="absolute bottom-0 flex right-0  items-end justify-end overflow-hidden rounded-lg pe-4 pb-3">
          <div class="flex items-center justify-end mt-2">
              
              <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating"
                :class="[data.rate / 20 > rating ? 'text-yellow-500' : 'text-gray-300', 'h-3 w-3 flex-shrink-0']"
                aria-hidden="true" />
          </div>
        </div>
    </div>
  </nuxt-link>

    <!-- <nuxt-link to="/p/product/1/" class=" my-10 mx-2  rounded-xl bg-white  px-5 w-64">
        <div class="relative pb-5">
            <div class="relative shadow-3  h-72 w-full overflow-hidden rounded-lg">

                <img :src="data.image" :alt="data.title" class="h-full w-full object-cover object-center" />
         
            </div>
          
            <div class="relative mt-2 pb-1">
                <h3 class="text-md font-bold text-gray-900">{{ data.title }}</h3>
            </div>
            <div class=" text-sm font-bold  rtl text-center rounded-full ">   {{ data.price}}  </div>
            <div :class="data.percent != 0 ? 'line-through ' : '' " class=" text-xs text-gray-300 font-semibold   rtl text-center rounded-full ">   {{ data.percent != 0 ? data.price : '&nbsp; ' }}  </div>

     
            <div>
               
                <div class="absolute inset-y-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div class="relative text-red-700 shadow-xl text-sm font-semibold bg-glass-red rtl text-right rounded-full px-3 py-1" v-if="data.percent != 0">   {{ data.percent}} % </div>
                </div> 
            
            </div>
        </div>

    </nuxt-link> -->
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
   
  
    background-image:radial-gradient(ellipse 100% 30% at 50% 10%, #ffffff3e 86.9%, #00000000 90%)!important;

}
</style>


