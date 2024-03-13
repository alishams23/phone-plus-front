<template>
  <div v-if="loading">

  </div>
  <div  v-else>
    <div class=" isolate overflow-hidden relative" >
      <div > 
        <div class=" absolute inset-0 -z-1000 bg-gradient-to-l bg-black from-black from-10% via-blue-800/80 via-black/100" />
        <div class=" absolute inset-0 -z-1000  bg-blue-circle-best-product" />
        <div class="relative">
          <div class="flex pt-3 justify-between items-center">
            <div class="rtl px-3">
              <a @click="$router.push('/search/?sort_product=' + '-rate');" class="text-gray-100 rtl pt-3 cursor-pointer flex items-center  ">
                بیشتر
                <span aria-hidden="true" class="px-3 pt-1"> &larr;</span>
              </a>
            </div>
            <div class="text-gray-100 font-bold text-xl text-right px-4 pt-4">
              محبوب ترین محصولات
            </div>
          </div>
        </div>
         <div data-aos="fade-right" data-aos-duration="1000">
           <Carousel :breakpoints="breakpoints"  :wrapAround="true" :transition="500" class="pt-0">
             <Slide v-for="product in best_products" :key="product" >
               <Product :data="product" class="my-10" />
             </Slide>
             <template #addons>
               <Navigation />
             </template>
           </Carousel>
         </div>
      </div>  
  </div>
  </div>
</template>
  
<script>
import axios from "axios";
import { apiStore } from '~/store/api';
import Product from "@/components/shared/Product.vue"
export default {
  components: { Product }, 
  data: () => ({
    best_products : '',
    loading : true,
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      200: {
        itemsToShow: 1.5,
        snapAlign: 'center',
      },
      700: {
        itemsToShow: 2.5,
        snapAlign: 'center',
      },
      1150: {
        itemsToShow: 4.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1340: {
        itemsToShow: 5.5,
        snapAlign: 'center',
      },
      1490: {
        itemsToShow: 6,
        snapAlign: 'center',
      },
    },
  }),
  methods: {

        getData() {
            this.loading = true
            axios.get(`${apiStore().address}/api/product/best-product-list-main-page/`, {
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json",
                },
            }).then((response) => {
                this.best_products = response.data
                this.loading = false

            })
        }
    }, mounted() {
        this.getData()
    }
}


</script>


<style scoped>

.bg-blue-circle-best-product{
   

  background-image:radial-gradient(ellipse 100% 90% at 50% -30%, #5109d591 20.9%, #00000000 90%);
}
</style>
