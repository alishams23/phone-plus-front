<template>
    <div class="grid grid-cols-1 gap-4 sm:grid-cols-3 py-20 rtl">
      <div v-for="person in people" :key="person.email" class="relative flex items-center space-x-3 rounded-lg border border-gray-100 shadow-3 bg-white px-6 py-5 shadow-sm focus-within:ring-2 focus-within:ring-indigo-500 focus-within:ring-offset-2 hover:border-indigo-400">
        <div class="flex-shrink-0">
            <span :class="[person.iconBackground, person.iconForeground, 'inline-flex rounded-lg p-3 ring-4 ring-white']">
                <component :is="person.icon" class="h-6 w-6" aria-hidden="true" />
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
      email: 'leslie.alexander@example.com',
      role: 'Co-Founder / CEO',
      icon: ClockIcon,
    iconForeground: 'text-teal-700',
    iconBackground: 'bg-teal-50',
    },
    {
      name: 'گوشی هوشمند',
      email: 'leslie.alexander@example.com',
      role: 'Co-Founder / CEO',
      icon: CheckBadgeIcon,
    iconForeground: 'text-purple-700',
    iconBackground: 'bg-purple-50',
    },
    {
      name: 'ساعت هوشمند',
      email: 'leslie.alexander@example.com',
      role: 'Co-Founder / CEO',
      icon: UsersIcon,
    iconForeground: 'text-sky-700',
    iconBackground: 'bg-sky-50',
    },
    {
      name: 'لپ‌تاپ و الترابوک',
      email: 'leslie.alexander@example.com',
      role: 'Co-Founder / CEO',
    icon: BanknotesIcon,

      iconForeground: 'text-yellow-700',
    iconBackground: 'bg-yellow-50',
    },
    {
      name: 'کیف و کاور گوشی',
      email: 'leslie.alexander@example.com',
      role: 'Co-Founder / CEO',
      icon: ReceiptRefundIcon,
    iconForeground: 'text-rose-700',
    iconBackground: 'bg-rose-50',
    },
    {
      name: 'هدفون و هدست',
      email: 'leslie.alexander@example.com',
      role: 'Co-Founder / CEO',
      icon: AcademicCapIcon,
    iconForeground: 'text-indigo-700',
    iconBackground: 'bg-indigo-50',
    },
    // More people...
  ]
  </script>