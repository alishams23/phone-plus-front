<template>
  <div v-if="data != null">
      <div class="flex pt-20 pb-10 justify-between items-center">
      <div class="rtl px-3">
       
      </div>
      <div class="text-black font-bold text-xl text-right px-4">
        دسته بند‌ی‌ها
      </div>
    </div>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-4 pb-20 rtl "
      :style="{ backgroundImage: 'url(/your-background-image.jpg)', backgroundSize: 'cover' }">
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
</template>
  
<script >
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

    }
  },
  methods: {
    getData() {
      this.loading = true
      axios.get(`http://192.168.1.109:8000/api/product/list-categories-main-page/`, {
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