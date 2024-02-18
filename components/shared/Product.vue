<template>

    <div :class="width ? `${width}` : 'w-[15rem]'" class="relative isolate  mx-2 justify-end overflow-hidden rounded-[25px]  bg-gray-900 px-8 pb-8 pt-60 sm:pt-60 lg:pt-60">
        <img :src="data.image[0].photo" :alt="data.image[0].title_for_photo" class="absolute inset-0 -z-10 h-full w-full object-cover" />
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
        <h3 class="mt-3 text-lg pb-5 font-semibold leading-6 text-black">
          <a >
            <span class="absolute inset-0" />
            {{ data.title }}
          </a>
        </h3>
        <div class=" text-sm font-bold  rtl text-center rounded-full ">   {{ data.price}}  </div>
        <div :class="data.percent != 0 ? 'line-through ' : '' " class=" text-xs text-gray-300 font-semibold   rtl text-center rounded-full ">   {{ data.percent != 0 ? data.price : '&nbsp; ' }}  </div>
        <div class="absolute bottom-0 flex left-0  items-end justify-end overflow-hidden rounded-lg p-4">
            <div class="relative text-red-700 shadow-xl text-sm font-semibold bg-glass-red rtl text-right rounded-full px-3 py-1" v-if="data.percent != 0">   {{ data.percent}} % </div>
        </div> 
      </div>

    <!-- <nuxt-link to="/product/1/" class=" my-10 mx-2  rounded-xl bg-white  px-5 w-64">
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
export default {
    props: ["data","width"],

}



</script>
<style>
.bg-blue-circle{
   
  
    background-image:radial-gradient(ellipse 100% 30% at 50% 10%, #fcfcfc3f 86.9%, #00000000 90%)!important;

}
</style>


