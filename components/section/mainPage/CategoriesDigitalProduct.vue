<template>
  <div class="pb-16 py-[60px] pb-[60px]  flex items-center justify-center" v-if="loading">
        <div role="status">
            <span class="relative flex h-8 w-8">
                <span
                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-8 w-8 bg-indigo-500"></span>
            </span>
            <span class="sr-only">Loading...</span>
        </div>
    </div>
  <div v-else>
    <div  v-if="data != null" data-aos="fade-up" data-aos-duration="1000">
        <div class="flex  pb-10 justify-between items-center">
        <div class="rtl px-3">
         
        </div>
        <div class="text-black font-bold text-md lg:text-xl text-right px-4 flex items-center justify-end">
          دسته بند‌ی‌ محصولات دیجیتال
          <div
            class="ml-2 lg:mx-5  h-12 w-12 bg-gradient-to-b from-indigo-500 to-indigo-700  flex justify-center  items-center rounded-xl">
            <TagIcon class="h-5 text-white" />
          </div>
        </div>
      </div>
      <div   class="container mx-auto grid grid-cols-2 gap-4 sm:grid-cols-4 pb-20 rtl "
        :style="{ backgroundImage: '', backgroundSize: 'cover' }">
        <div v-for="category in data" :key="category.id"
          class="shadow-2 relative isolate  flex items-center  rounded-[19px] cursor-pointer border border-gray-100 shadow-3 bg-white px-6 py-5 shadow-sm "
          :style="{ backgroundImage: 'url(' + category.image + ')', backgroundSize: 'cover' }">
          <div class="rounded-lg absolute inset-0 -z-10 bg-gradient-to-l  from-white from-20% via-white/40" />
          <div class=" bg-blue-circle-categories  absolute inset-0  " />
          <div class="flex-shrink-0">
      
          </div>
          <div class="min-w-0 flex-1 ">
            <a @click="$router.push('/p/search/?tab=1&category_digital_product=' + category.id);" class="focus:outline-none">
              <span class="absolute inset-0" aria-hidden="true" />
              <p class="text-sm font-medium text-gray-900 px-3">{{ category.title }}</p>
            </a>
            <!-- <nuxt-link :to="'/p/search/?tab=1&category_digital_product='+category.id"  class="focus:outline-none">
              <span class="absolute inset-0" aria-hidden="true" />
              <p class="text-sm font-medium text-gray-900 px-3">{{ category.title }}</p>
            </nuxt-link> -->
          </div>
        </div>
      </div>
    </div>
    <div v-if="data.length >= 4">
      <div class="border-t-2  py-2 ">
      
      </div>
      <div v-if="!show_categories" class="flex items-center justify-center mb-10" style="margin-top:-35px">
        <div @click="data = categories, show_categories = !show_categories"
          class="text-sm border-2 bg-white rounded-full px-10 py-2 mb-5">
          بیشتر
        </div>
      </div>
      <div v-else class="flex items-center justify-center  mb-10" style="margin-top:-35px">
        <div @click="data = categories.slice(0, 4), show_categories = !show_categories"
          class="text-sm border-2 bg-white rounded-full px-10 py-2 mb-5">
          بستن
        </div>
      </div>
    </div>
  </div>
</template>
  
<script >
import { apiStore } from '~/store/api';
import axios from 'axios'
import { TagIcon } from '@heroicons/vue/20/solid'

export default {
  components: {
    TagIcon
  },
  data() {
    return {
      show_categories: false,
      categories: null,
      data: null,
      loading : true 

    }
  },
  methods: {
    getData() {
      this.loading = true
      axios.get(`${apiStore().address}/api/product/list-digital-categories/?is_main_page=true`, {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      }).then((response) => {
        this.data = response.data.slice(0, 4)
        this.categories = response.data
        this.loading = false

      })
    }
  },
  mounted() {
    this.getData()
  },
}
</script>
<style>
.bg-blue-circle-categories {
  background-image: radial-gradient(ellipse 140% 130% at 80% -50%, #fcfcfc7d 80.9%, #00000000 90%) !important;
}</style>