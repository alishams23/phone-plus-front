<template>
    <div :class="width ? `${width}` : 'w-[35rem]'" class="h-[300px] bg-gray-200 isolate my-10 mx-24 justify-end rounded-2xl">
        <img :src="data.image" alt="" class="absolute w-56 h-56 -ms-10 -mb-10 mt-10 shadow-lg rounded-3xl" />
        <h3 class="mt-3 text-right text-lg pe-4 py-7 font-semibold leading-6 text-black">
          <a>
            {{ data.title }}
          </a>
        </h3>
        <div :class="data.percent != 0 ? 'line-through ' : '' " class="pe-4 text-right text-xs text-gray-300 font-semibold">
          {{ data.percent != 0 ? data.price : '&nbsp; ' }}
        </div>
        <div class="text-right pe-4 pb-4">
          {{ data.price }}
        </div>
        <div class="text-right text-xs pe-4 pb-4">
          {{ data.description }}
        </div>
        <div class="flex flex-wrap justify-end pe-4 pb-4">
          <div v-for="color in data.colors" :key="color" class="w-4 h-4 rounded-full shadow-lg m-1" :style="{ backgroundColor: color }"></div>
        </div>
        <div class="flex items-end justify-end overflow-hidden rounded-lg pe-4 pb-10 pt-4">
          <div class="relative text-red-700 shadow-md text-sm font-semibold bg-glass-red rtl text-right rounded-full px-3 py-1" v-if="data.percent != 0">
            {{ data.percent}} % 
          </div>
        </div> 
    </div>
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


