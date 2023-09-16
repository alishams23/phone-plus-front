<template>
    <nuxt-link to="/product/1/" class=" my-10 mx-2  rounded-xl bg-white  px-5 w-64">
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

    </nuxt-link>
</template>
  
<script >
export default {
    props: ["data"],

}



</script>

