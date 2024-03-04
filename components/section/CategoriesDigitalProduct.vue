<template>
  <div v-if="loading">
    <!-- <div  class="pb-16 flex items-center justify-center" >
      <div role="status">
          <svg aria-hidden="false" class="w-8 h-8 text-gray-100 animate-spin fill-indigo-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span class="sr-only">Loading...</span>
      </div>
    </div> -->
  </div>
  <div v-else>
    <div v-if="data != null">
        <div class="flex pt-20 pb-10 justify-between items-center">
        <div class="rtl px-3">
         
        </div>
        <div class="text-black font-bold text-xl text-right px-4">
          دسته بند‌ی‌ محصولات دیجیتال
        </div>
      </div>
      <div class="grid grid-cols-1 gap-4 sm:grid-cols-4 pb-20 rtl "
        :style="{ backgroundImage: '', backgroundSize: 'cover' }">
        <div v-for="category in data" :key="category.id"
          class=" relative isolate  flex items-center  rounded-[19px] border border-gray-100 shadow-3 bg-white px-6 py-5 shadow-sm "
          :style="{ backgroundImage: 'url(' + category.image + ')', backgroundSize: 'cover' }">
          <div class="rounded-lg absolute inset-0 -z-10 bg-gradient-to-l  from-white from-20% via-white/40" />
          <div class=" bg-blue-circle-categories  absolute inset-0  " />
          <div class="flex-shrink-0">
      
          </div>
          <div class="min-w-0 flex-1 ">
            <a @click="$router.push('/search/?category_product='+category.id);" class="focus:outline-none">
              <span class="absolute inset-0" aria-hidden="true" />
              <p class="text-sm font-medium text-gray-900 px-3">{{ category.title }}</p>
            </a>
          </div>
        </div>
      </div>
    </div>
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
</template>
  
<script >
import { apiStore } from '~/store/api';
import axios from 'axios'
import {
  AcademicCapIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from '@heroicons/vue/24/outline'

export default {
  components: {
    AcademicCapIcon,
    BanknotesIcon,
    CheckBadgeIcon,
    ClockIcon,
    ReceiptRefundIcon,
    UsersIcon,
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