<template>

  <nuxt-link :to="'/p/digitalProduct/'+ data.slug">
    <div :class="width ? `${width}` : 'w-[15rem]'" class=" relative isolate my-10 mx-2 justify-end overflow-hidden rounded-2xl  bg-gray-900 px-8 pb-8 pt-[10rem] sm:pt-60 lg:pt-[8rem]">
        <img :src="data.image[0].photo" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover" />
        <div class="absolute inset-0 -z-10 bg-gradient-to-t  from-white from-10% via-white/30" />
        <div class="absolute inset-0 -z-10 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
        <div class="absolute inset-0 -z-10 rounded-2xl bg-blue-circle" />
    
        <div class="flex flex-wrap items-center gap-y-1 overflow-hidden text-sm leading-6 text-gray-300">
      
          <div class="-ml-4 flex items-center gap-x-4">
            <svg viewBox="0 0 2 2" class="-ml-0.5 h-0.5 w-0.5 flex-none fill-white/50">
              <circle cx="1" cy="1" r="1" />
            </svg>
        
          </div>
        </div>
        <h3 class="mt-3 text-center rtl text-sm font-semibold leading-6 text-black overflow-hidden h-[45px] md:h-[50px] whitespace- nowrap line-clamp-2 text-ellipsis">
          <a >
            <span class=" h-full flex items-start justify-center " >
            {{ data.title }}
            </span>
          </a>
        </h3>
        <div class=" text-sm font-bold   text-center rounded-full ">     {{ price(parseInt(data.discount != 0 ? data.price*(100-data.discount)/100 : data.price)) }} </div>
        <div :class="data.discount != 0 ? 'line-through ' : '' " class=" text-xs text-gray-300 font-semibold   rtl text-center rounded-full ">   {{ data.discount != 0 ? price(data.price) : '&nbsp; ' }}  </div>
        <div class="absolute bottom-0 flex left-0  items-end justify-end overflow-hidden rounded-lg ps-4 pb-3">
          <div class="relative text-white shadow-xl text-sm font-semibold bg-indigo-600 rtl text-right rounded-full px-3 py-1" v-if="data.discount != 0">   {{ data.discount}} % </div>
        </div> 
        <div class="absolute bottom-0 flex right-0  items-end justify-end overflow-hidden rounded-lg pe-4 pb-3">
        <div class="flex items-center justify-end mt-2">
            <div v-if="data.rate > 0">
                <p class="text-sm text-gray-500 px-3">({{ data.rate_number }})</p>
            </div>
            <div v-else>
                <p class="text-sm text-gray-500 px-3">(0)</p>
            </div>
            <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating"
              :class="[data.rate / 20 > rating ? 'text-yellow-500' : 'text-gray-300', 'h-3 w-3 flex-shrink-0']"
              aria-hidden="true" />
        </div>
      </div>
        <div class="absolute top-0 flex right-0  items-end justify-end overflow-hidden  ">
          <div class="relative text-white shadow-xl text-xs font-semi bg-glass-3 text-left  rounded-es-2xl px-10 pt-3 pb-4"> محصولات دیجیتال </div>
        </div> 
      </div>
  </nuxt-link>

</template>

<script >
import { StarIcon } from '@heroicons/vue/20/solid'
export default {

  components: {StarIcon},
  props: ["data","width"],
  methods: {
    price(value){
      let text
      let chars = Array.from(`${value}`)
      for (let index = 1; index <= chars.length; index++) {
          
          if(index % 3==0){
              if (chars.length != index) {
              chars[chars.length-index] = `,${chars[chars.length-index]}`;
                  
              }
          }

      }
      return chars.join("");;
    },
  },
}



</script>
<style>
.bg-blue-circle{
 

  background-image:radial-gradient(ellipse 100% 30% at 50% 10%, #fcfcfc3f 86.9%, #00000000 90%)!important;

}
</style>


