<template>
  <div class="flex pt-20 pb-10 justify-between items-center">
    <div class="rtl px-3">
      <a href="#" class="text-black rtl  ">
        بیشتر
        <span aria-hidden="true" class="px-3 "> &larr;</span>
      </a>
    </div>
    <div class="text-black font-bold text-xl text-right px-4 ">
      دسته بند‌ی‌ها
    </div>
  </div>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-4 pb-20 rtl " :style="{ backgroundImage: 'url(/your-background-image.jpg)', backgroundSize: 'cover' }">
    <div v-for="person in data" :key="person.email" 
         class=" relative isolate  flex items-center  rounded-[19px] border border-gray-100 shadow-3 bg-white px-6 py-5 shadow-sm "
         :style="{ backgroundImage: 'url(' + person.imageUrl + ')', backgroundSize: 'cover' }">
         <div class="rounded-lg absolute inset-0 -z-10 bg-gradient-to-l  from-white from-20% via-white/40" />
         <div class=" bg-blue-circle-categories  absolute inset-0  " />
      <div class="flex-shrink-0">
      
      </div>
      <div class="min-w-0 flex-1 ">
        <a href="#" class="focus:outline-none">
          <span class="absolute inset-0" aria-hidden="true" />
          <p class="text-sm font-medium text-gray-900 px-3">{{ person.name }}</p>
        </a>
      </div>
    </div>
  </div>
  <div class="border-t-2 border-dashed py-1">

  </div>
  <div v-if="!show_categories" class="flex items-center justify-center " style="margin-top:-35px">
     <div @click="data = categories, show_categories = !show_categories" class="border-2 bg-white rounded-full px-10 py-3 mb-5">
    بیشتر
    </div>
  </div>
  <div v-else class="flex items-center justify-center  " style="margin-top:-35px">
     <div @click="data = categories.slice(0,4), show_categories = !show_categories" class="border-2 bg-white rounded-full px-10 py-3 mb-5">
    بستن
  </div>
  </div>
</template>
  
  <script >
import {
  AcademicCapIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from '@heroicons/vue/24/outline'

    export default{
    components:{ AcademicCapIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,},
    data(){
      return{
        show_categories : false,
        categories : [
        {
          name: 'اپل آیدی',
          imageUrl: '/images/appleid_category.png',
          email: 'leslie.alexander@example.com',
          role: 'Co-Founder / CEO',
          icon: ClockIcon,
        iconForeground: 'text-teal-700',
        iconBackground: 'bg-teal-50',
        },
        {
          name: 'گوشی هوشمند',
          imageUrl: '/images/phone_category.png',
          email: 'leslie.alexander@example.com',
          role: 'Co-Founder / CEO',
          icon: CheckBadgeIcon,
        iconForeground: 'text-purple-700',
        iconBackground: 'bg-purple-50',
        },
        {
          name: 'ساعت هوشمند',
          imageUrl: '/images/watch_category.png',
          email: 'leslie.alexander@example.com',
          role: 'Co-Founder / CEO',
          icon: UsersIcon,
        iconForeground: 'text-sky-700',
        iconBackground: 'bg-sky-50',
        },
        {
          name: 'لپ‌تاپ و الترابوک',
          imageUrl: '/images/laptop_category.png',
          email: 'leslie.alexander@example.com',
          role: 'Co-Founder / CEO',
        icon: BanknotesIcon,

          iconForeground: 'text-yellow-700',
        iconBackground: 'bg-yellow-50',
        },
        {
          name: 'ساعت هوشمند',
          imageUrl: '/images/watch_category.png',
          email: 'leslie.alexander@example.com',
          role: 'Co-Founder / CEO',
          icon: UsersIcon,
        iconForeground: 'text-sky-700',
        iconBackground: 'bg-sky-50',
        },
        {
          name: 'لپ‌تاپ و الترابوک',
          imageUrl: '/images/laptop_category.png',
          email: 'leslie.alexander@example.com',
          role: 'Co-Founder / CEO',
        icon: BanknotesIcon,

          iconForeground: 'text-yellow-700',
        iconBackground: 'bg-yellow-50',
        },
        {
          name: 'کیف و کاور گوشی',
          imageUrl: '/images/phone_category.png',
          email: 'leslie.alexander@example.com',
          role: 'Co-Founder / CEO',
          icon: ReceiptRefundIcon,
        iconForeground: 'text-rose-700',
        iconBackground: 'bg-rose-50',
        },
        {
          name: 'هدفون و هدست',
          imageUrl: '/images/headphone_category.png',
          email: 'leslie.alexander@example.com',
          role: 'Co-Founder / CEO',
          icon: AcademicCapIcon,
        iconForeground: 'text-indigo-700',
        iconBackground: 'bg-indigo-50',
        },
        // More people...
      ],
      data : [],

          }
        },mounted() {
            this.data = this.categories.slice(0,4)
          },
  }
  </script>
  <style>
  .bg-blue-circle-categories{
     
    background-image:radial-gradient(ellipse 140% 130% at 80% -50%, #fcfcfc7d 80.9%, #00000000 90%)!important;

  }

  </style>