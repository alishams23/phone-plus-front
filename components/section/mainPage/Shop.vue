<template>
<div class="mb-16">

<NuxtMarquee :autoFill="true">
    
  
    <div v-for="item in shops"  v-show="item.image" >
       <div  class="flex rtl">
         <img class="h-20 w-20 mr-10 ml-5 rounded-xl" :src="item.image"  alt="" />
         <div>
             <div class="font-bold">
                 {{ item.username }}
             </div>
             <div>
                 {{ item.name }}
        
             </div>
         </div>
       </div>
    </div>
 
  </NuxtMarquee>

</div>
</template>

<script>
import axios from 'axios'
import { useUserStore } from '~/store/user';
import { apiStore } from '~/store/api';
export default{
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
      axios.get(`${apiStore().address}/api/account/shop-search/`, {
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