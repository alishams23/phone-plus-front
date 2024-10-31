<template>
<div class="mb-5 " v-if="loading == false">

<div class="relative mx-2" >
  <div class="flex  justify-end pb-8 items-end">
    <div class="text-black font-bold text-md lg:text-xl text-right px-4 pt-4 flex items-center justify-end">
      فروشگاه های برتر
      <div class="ml-2 lg:mx-5  h-12 w-12 bg-gradient-to-b from-indigo-500 to-indigo-700  flex justify-center  items-center rounded-xl">
    <ShoppingBagIcon class="h-5 text-white"/>
  </div>
    </div>
    </div>
</div>

<NuxtMarquee :autoFill="true">
    <div v-for="item in shops"  v-show="item.image" class=" py-10 pb-14 " >
      <a :href="'/' + item.username" target="blank" >
        <div class="w-full max-w-xl px-5  ">
          
          <div class="  flex flex-col items-center pb-5">
            
            <img class=" w-14 h-14 md:w-24 md:h-24 backdrop-grayscale -mt-10   mb-3 rounded-3xl p-3 object-cover shadow-3" :src="item.image" alt=""/>

            <h5 class="mb-1 text-md font-medium text-gray-900 ">{{ item.name }}</h5>
            <span class="text-xs text-gray-500">{{ item.username }}</span>
            <!-- <div class="flex mt-4 md:mt-6">
              <a :href="'/' + item.username" target="blank" class="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
                مشاهده فروشگاه
              </a>
            </div> -->
          </div>
        </div>
      </a>
    </div>
 
  </NuxtMarquee>

</div>
</template>

<script>
import axios from 'axios'
import { useUserStore } from '~/store/user';
import { apiStore } from '~/store/api';
import { ShoppingBagIcon } from '@heroicons/vue/20/solid'

export default{
    components: { ShoppingBagIcon }, 
    data(){
        return{
            shops:[],
            loading:true,
        }
    },
    mounted(){
        this.getShops()
    },
    methods:{
        getShops() {
      this.loading = true
      axios.get(`${apiStore().address}/api/account/shop-search/?in_first_page=true`, {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      }).then((response) => {
        this.shops = response.data
        this.loading = false

      })
    }
    }
}
</script>