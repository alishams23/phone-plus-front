<template>
  <div :class="width ? `${width}` : 'w-[30rem]'" class=" bg-gray-100 shadow-xl isolate my-20 mx-24 border border-sm rounded-2xl">
    <div class="flex justify-center text-center">
      <div>
        <img :src="data.image" alt="" class="-mt-10 w-48 h-48 shadow-lg rounded-3xl" />
      </div>
    </div>
    <div>
      <h3 class="mt-3 text-lg pe-4 py-2 font-semibold leading-6 text-black">
        <a>
          {{ data.title }}
        </a>
      </h3>
      <div :class="data.percent != 0 ? 'line-through ' : '' " class="pe-4 text-xs text-gray-300 font-semibold">
        {{ data.percent != 0 ? data.price : '&nbsp; ' }}
      </div>
      <div class="pe-4 ">
        {{ data.price }}
      </div>
      <div class="text-xs p-4 ">
        {{ data.description }}
      </div>
      <div class="flex items-end justify-end overflow-hidden rounded-lg pe-4 pb-2">
        <div class="relative text-red-700 shadow-md text-sm font-semibold bg-glass-red rounded-full px-3 py-1" v-if="data.percent != 0">
          {{ data.percent}} % 
        </div>
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


