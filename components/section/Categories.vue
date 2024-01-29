<template>
  <div class="grid grid-cols-1 gap-4 sm:grid-cols-4 py-20 rtl" :style="{ backgroundImage: 'url(/your-background-image.jpg)', backgroundSize: 'cover' }">
    <div v-for="person in people" :key="person.email" 
         class=" relative isolate  flex items-center shadow-lg rounded-lg border border-gray-100 shadow-3 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-indigo-400"
         :style="{ backgroundImage: 'url(' + person.imageUrl + ')', backgroundSize: 'cover' }">
         <div class=" absolute inset-0 -z-10 bg-gradient-to-l  from-white from-20% via-white/40" />
         <div class=" bg-blue-circle-categories  absolute inset-0  " />
      <div class="flex-shrink-0">
        <span :class="[person.iconBackground, person.iconForeground, 'inline-flex rounded-lg p-3 ring-4 ring-white']">
          <!-- Existing icon component -->
        </span>
      </div>
      <div class="min-w-0 flex-1">
        <a href="#" class="focus:outline-none">
          <span class="absolute inset-0" aria-hidden="true" />
          <p class="text-sm font-medium text-gray-900 px-3">{{ person.name }}</p>
        </a>
      </div>
    </div>
  </div>
</template>
  
  <script setup>
import {
  AcademicCapIcon,
  BanknotesIcon,
  CheckBadgeIcon,
  ClockIcon,
  ReceiptRefundIcon,
  UsersIcon,
} from '@heroicons/vue/24/outline'
  const people = [
    {
      name: 'اپل آیدی',
      imageUrl: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
      email: 'leslie.alexander@example.com',
      role: 'Co-Founder / CEO',
      icon: ClockIcon,
    iconForeground: 'text-teal-700',
    iconBackground: 'bg-teal-50',
    },
    {
      name: 'گوشی هوشمند',
      imageUrl: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
      email: 'leslie.alexander@example.com',
      role: 'Co-Founder / CEO',
      icon: CheckBadgeIcon,
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
    },
    {
      name: 'ساعت هوشمند',
      imageUrl: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
      email: 'leslie.alexander@example.com',
      role: 'Co-Founder / CEO',
      icon: UsersIcon,
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
    },
    {
      name: 'لپ‌تاپ و الترابوک',
      imageUrl: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
      email: 'leslie.alexander@example.com',
      role: 'Co-Founder / CEO',
    icon: BanknotesIcon,

      iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
    },
    {
      name: 'کیف و کاور گوشی',
      imageUrl: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
      email: 'leslie.alexander@example.com',
      role: 'Co-Founder / CEO',
      icon: ReceiptRefundIcon,
    iconForeground: 'text-rose-700',
    iconBackground: 'bg-rose-50',
    },
    {
      name: 'هدفون و هدست',
      imageUrl: 'https://images.unsplash.com/photo-1496128858413-b36217c2ce36?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3603&q=80',
      email: 'leslie.alexander@example.com',
      role: 'Co-Founder / CEO',
      icon: AcademicCapIcon,
    iconForeground: 'text-indigo-700',
    iconBackground: 'bg-indigo-50',
    },
    // More people...
  ]
  </script>
  <style>
  .bg-blue-circle-categories{
     
    background-image:radial-gradient(ellipse 100% 80% at 80% 0%, #fcfcfc6c 89.9%, #00000000 90%)!important;

  }
  </style>