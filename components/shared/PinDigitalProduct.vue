<template>
  <div :class="width ? `${width}` : 'w-[15rem]'" class=" bg-gray-100 border relative isolate my-20  mx-5  rounded-2xl">
    <img :src="data.image[0].photo ? data.image[0].photo : data.image" :alt="data.image[0].title_for_photo" class="absolute  rounded-2xl inset-0 -z-10 h-full w-full object-cover" />
        <div class="absolute inset-0 -z-10 bg-gradient-to-t  rounded-2xl from-white from-10% via-white/40" />
        <div class="absolute inset-0 -z-10 bg-gradient-to-t  rounded-2xl bg-white/90" />

    <nuxt-link :to="'/p/digitalProduct/'+ data.slug">
      <div class="flex justify-center text-center">
        <div>
          <img :src="data.image[0].photo" alt="" class="-mt-10 w-[150px] h-[150px] border shadow-2  object-cover rounded-3xl" />
        </div>
      </div>
      <div>
        <h3 class="mt-3 px-3 rtl text-center text-sm md:text-lg lg:pe-4 py-2 font-semibold leading-6 text-black overflow-hidden h-[60px]  md:h-[65px] whitespace- nowrap line-clamp-2">
          <a>
            {{ data.title }}
          </a>
        </h3>
        <p v-if="isCompanyNameExist" class=" rtl text-center text-xs md:text-sm lg:pe-4 py-1 font-semibold leading-6 text-black overflow-hidden ">
         <span class="text-xs font-light text-gray-700"> فروشگاه: </span> {{ data.shop.name }} 
        </p>
        <div class="flex flex-col justify-center text-center" >
          <div :class="data.discount != 0 ? 'line-through ' : '' " class="lg:pe-4 text-xs text-gray-300 font-semibold">
            {{ data.discount != 0 ? price(data.price) : '&nbsp; ' }}
          </div>
          <div class="lg:pe-4 pb-10">
            {{ price(parseInt(data.discount != 0 ? data.price*(100-data.discount)/100 : data.price)) }}
          </div>
        </div>
      
        <div class="absolute bottom-0 flex left-0 items-end justify-end overflow-hidden rounded-lg pe-4 ps-4 pb-2">
          <div class="relative text-white  text-sm font-semibold bg-indigo-600 rounded-full px-3 py-1" v-if="data.discount != 0">
            {{ data.discount}} % 
          </div>
        </div> 
      </div>
      <div class="absolute bottom-0 flex right-0  items-end justify-end overflow-hidden rounded-lg px-4 pb-3">
        <div class="flex items-center justify-end mt-2">
            
            <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating"
              :class="[data.rate / 20 > rating ? 'text-yellow-500' : 'text-gray-300', 'h-3 w-3 flex-shrink-0']"
              aria-hidden="true" />
        </div>
      </div>
    </nuxt-link>
  </div>
</template>

<script >
import { StarIcon } from '@heroicons/vue/20/solid'

export default {
  components: {StarIcon},
  props: {
    data: Object,
    width: String,
    isCompanyNameExist: {
      type: Boolean,
      default: true
    }
  },
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


