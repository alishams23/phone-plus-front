<template>
  <div class="   isolate overflow-hidden relative" v-if="loading == false">
    <div class=" absolute inset-0 -z-1000 bg-gradient-to-l bg-black from-black from-10% via-indigo-800/80 via-black/100" />
    <div class=" absolute inset-0 -z-1000  bg-blue-circle-best-product" />
    <div class="absolute inset-0 -z-1000">
      <div class="flex pt-3 justify-between items-center">
        <div class="rtl px-3">
          <a href="#" class="text-gray-200 rtl  ">
            بیشتر
            <span aria-hidden="true" class="px-3 pt-3"> &larr;</span>
          </a>
        </div>
        <div class="text-gray-200 font-bold text-xl text-right px-4 pt-4">
          محبوب ترین محصولات دیجیتال
        </div>
      </div>
    </div>
    <Carousel  :itemsToShow="5.5" :wrapAround="true" :transition="500" class="pt-10">
      <Slide v-for="digital_product in digital_products" :key="digital_product.id">
        <DigitalProduct class="my-10" :data="digital_product" />
      </Slide>
      <template #addons>
        <Navigation />
      </template>
    </Carousel>
  </div>
</template>
  
<script>
import axios from 'axios'
import DigitalProduct from "@/components/shared/DigitalProduct.vue"
export default {
  components: { DigitalProduct }, 
  data: () => ({
    digital_products: [],
    loading: true,

    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
  
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: 'start',
      },
    },
  }),
    methods: {
      getData() {
        this.loading = true
        axios.get(`http://192.168.119.128:8000/api/product/best-digital-product-list-main-page/`, {
            headers: {
                "Content-type": "application/json",
                Accept: "application/json",
            },
        }).then((response) => {
            this.digital_products = response.data
            this.loading = false

        })
      },
     
    },
    mounted() {
        this.getData()
      },
}


</script>


<style scoped>

.bg-blue-circle-33{
   
  
  background: rgb(0,0,0);
  background: linear-gradient(90deg, rgba(0,0,0,1) 0%, rgba(76,9,121,1) 33%, rgba(76,9,121,1) 64%, rgba(0,0,0,1) 100%);
}

.inner-shadow-custom{
  box-shadow: inset 100px 0px 100px -30px rgba(0, 0, 0, 0.787),inset -100px 0px 100px -30px rgba(0, 0, 0, 0.787);
}

.bg-blue-circle-best-product{
   

  background-image:radial-gradient(ellipse 100% 90% at 50% -30%, #5e09d591 20.9%, #00000000 90%);
}
</style>
