<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <div class="bg-glass py-2 fixed   w-full top-0" style="z-index: 9999999;">
    <!-- Mobile menu -->
    <TransitionRoot as="template" :show="open">
      <Dialog as="div" class="relative z-40 lg:hidden" @close="open = false">
        <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
          <div class="fixed inset-0 bg-black bg-opacity-25" />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="-translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="-translate-x-full">
            <DialogPanel class="relative flex w-full max-w-xs flex-col overflow-y-auto bg-glass pb-12 shadow-xl">
              <div class="flex px-4 pb-2 pt-5">
                <button type="button" class="-m-2 inline-flex items-center justify-center rounded-md p-2 text-gray-400" @click="open = false">
                  <span class="sr-only">Close menu</span>
                  <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                </button>
              </div>

              <!-- Links -->
              <TabGroup as="div" class="mt-2">
                <div class="border-b border-gray-200">
                  <TabList class="-mb-px flex space-x-8 px-4">
                    <Tab as="template" v-for="category in navigation.categories" :key="category.name" v-slot="{ selected }">
                      <button :class="[selected ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-900', 'flex-1 whitespace-nowrap border-b-2 px-1 py-4 text-base font-medium']">{{ category.name }}</button>
                    </Tab>
                  </TabList>
                </div>
                <TabPanels as="template">
                  <TabPanel v-for="(category, categoryIdx) in navigation.categories" :key="category.name" class="space-y-12 px-4 pb-6 pt-10">
                    <div class="grid grid-cols-1 items-start gap-x-6 gap-y-10">
                      <div class="grid grid-cols-1 gap-x-6 gap-y-10">
                        <div>
                          <p :id="`mobile-featured-heading-${categoryIdx}`" class="font-medium text-gray-900">کالای دیجیتال</p>
                          <ul role="list" :aria-labelledby="`mobile-featured-heading-${categoryIdx}`" class="mt-6 space-y-6">
                            <li v-for="item in category.featured" :key="item.name" class="flex">
                              <a :href="item.href" class="text-gray-500">{{ item.name }}</a>
                            </li>
                          </ul>
                        </div>
                        <div>
                          <p id="mobile-categories-heading" class="font-medium text-gray-900">خدمات</p>
                          <ul role="list" aria-labelledby="mobile-categories-heading" class="mt-6 space-y-6">
                            <li v-for="item in category.categories" :key="item.name" class="flex">
                              <a :href="item.href" class="text-gray-500">{{ item.name }}</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div class="grid grid-cols-1 gap-x-6 gap-y-10">
                        <div>
                          <p id="mobile-collection-heading" class="font-medium text-gray-900">موبایل</p>
                          <ul role="list" aria-labelledby="mobile-collection-heading" class="mt-6 space-y-6">
                            <li v-for="item in category.collection" :key="item.name" class="flex">
                              <a :href="item.href" class="text-gray-500">{{ item.name }}</a>
                            </li>
                          </ul>
                        </div>

                        <div>
                          <p id="mobile-brand-heading" class="font-medium text-gray-900">تبلت</p>
                          <ul role="list" aria-labelledby="mobile-brand-heading" class="mt-6 space-y-6">
                            <li v-for="item in category.brands" :key="item.name" class="flex">
                              <a :href="item.href" class="text-gray-500">{{ item.name }}</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </TabPanel>
                </TabPanels>
              </TabGroup>

              <div class="space-y-6 border-t border-gray-200 px-4 py-6">
                <div v-for="page in navigation.pages" :key="page.name" class="flow-root">
                  <a :href="page.href" class="-m-2 block p-2 font-medium text-gray-900">{{ page.name }}</a>
                </div>
              </div>

              <div class="space-y-6 border-t border-gray-200 px-4 py-6">
                <div class="flow-root">
                  <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Create an account</a>
                </div>
                <div class="flow-root">
                  <a href="#" class="-m-2 block p-2 font-medium text-gray-900">Sign in</a>
                </div>
              </div>

              <div class="space-y-6 border-t border-gray-200 px-4 py-6">
                <!-- Currency selector -->
                <form>
               
                </form>
              </div>
            </DialogPanel>
          </TransitionChild>
        </div>
      </Dialog>
    </TransitionRoot>

    <header class="relative">
      <nav aria-label="Top">
        <!-- Top navigation -->
      
        <!-- Secondary navigation -->
        <div class="  ">
          <div class="  px-4 sm:px-6 lg:px-8">
            <div class="">
              <div class="flex h-16 items-center px-3 justify-between md:flex-row-reverse flex-row">
                <!-- Logo (lg+) -->
                <div class="hidden lg:flex lg:items-center">
                  <a href="#" class="ml-5">
                    <span class="sr-only">phone plus</span>
                    <img class="h-8 w-auto" src="/images/logo1.jpeg" alt="" />
                  </a>
                </div>

                <div class="hidden h-full lg:flex">
                  <!-- Mega menus -->
                  <PopoverGroup class="ml-8">
                    <div class="flex h-full justify-center space-x-8">
                      <Popover v-for="(category, categoryIdx) in navigation.categories" :key="category.name" class="flex" v-slot="{ open }">
                        <div class="relative flex">
                          <PopoverButton :class="[open ? 'border-indigo-600 text-indigo-600' : 'border-transparent text-gray-700 hover:text-gray-800', 'relative z-10 -mb-px flex items-center border-b-2 pt-px text-sm font-medium transition-colors duration-200 ease-out']">{{ category.name }}</PopoverButton>
                        </div>

                        <transition enter-active-class="transition ease-out duration-200" enter-from-class="opacity-0" enter-to-class="opacity-100" leave-active-class="transition ease-in duration-150" leave-from-class="opacity-100" leave-to-class="opacity-0">
                          <PopoverPanel class="absolute inset-x-0 top-full text-gray-500 sm:text-sm">
                            <!-- Presentational element used to render the bottom shadow, if we put the shadow on the actual panel it pokes out the top, so we use this shorter element to hide the top of the shadow -->
                            <div class="absolute inset-0 top-1/2 bg-glass shadow" aria-hidden="true" />

                            <div class="relative bg-white">
                              <div class="mx-auto max-w-7xl px-8">
                                <div class="grid grid-cols-2 items-start gap-x-8 gap-y-10 pb-12 pt-10">
                                  <div class="grid grid-cols-2 gap-x-8 gap-y-10">
                                    <div>
                                      <p :id="`desktop-featured-heading-${categoryIdx}`" class="font-medium text-gray-900">کالای دیجیتال</p>
                                      <ul role="list" :aria-labelledby="`desktop-featured-heading-${categoryIdx}`" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                        <li v-for="item in category.featured" :key="item.name" class="flex">
                                          <a :href="item.href" class="hover:text-gray-800">{{ item.name }}</a>
                                        </li>
                                      </ul>
                                    </div>
                                    <div>
                                      <p id="desktop-categories-heading" class="font-medium text-gray-900">خدمات</p>
                                      <ul role="list" aria-labelledby="desktop-categories-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                        <li v-for="item in category.categories" :key="item.name" class="flex">
                                          <a :href="item.href" class="hover:text-gray-800">{{ item.name }}</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                  <div class="grid grid-cols-2 gap-x-8 gap-y-10">
                                    <div>
                                      <p id="desktop-collection-heading" class="font-medium text-gray-900">موبایل</p>
                                      <ul role="list" aria-labelledby="desktop-collection-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                        <li v-for="item in category.collection" :key="item.name" class="flex">
                                          <a :href="item.href" class="hover:text-gray-800">{{ item.name }}</a>
                                        </li>
                                      </ul>
                                    </div>

                                    <div>
                                      <p id="desktop-brand-heading" class="font-medium text-gray-900">تبلت</p>
                                      <ul role="list" aria-labelledby="desktop-brand-heading" class="mt-6 space-y-6 sm:mt-4 sm:space-y-4">
                                        <li v-for="item in category.brands" :key="item.name" class="flex">
                                          <a :href="item.href" class="hover:text-gray-800">{{ item.name }}</a>
                                        </li>
                                      </ul>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </PopoverPanel>
                        </transition>
                      </Popover>

                      <a v-for="page in navigation.pages" :key="page.name" :href="page.href" class="flex items-center text-sm font-medium text-gray-700 hover:text-gray-800">{{ page.name }}</a>
                    </div>
                  </PopoverGroup>
                </div>

                <!-- Mobile menu and search (lg-) -->
                <div class="flex flex-1 items-center lg:hidden">
                  <button type="button" class="-ml-2 rounded-md bg-glass p-2 text-gray-400" @click="open = true">
                    <span class="sr-only">Open menu</span>
                    <Bars3Icon class="h-6 w-6" aria-hidden="true" />
                  </button>

                  <!-- Search -->
                  <a href="#" class="ml-2 p-2 text-gray-400 hover:text-gray-500">
                    <span class="sr-only">Search</span>
                    <MagnifyingGlassIcon class="h-6 w-6" aria-hidden="true" />
                  </a>
                </div>

                <!-- Logo (lg-) -->
                <a href="#" class="lg:hidden">
                  <span class="sr-only">phone plus</span>
                  <!-- <img src="/images/logo1.jpeg" alt="" class="h-8 w-auto" /> -->
                </a>

                <div class="flex flex-1 items-center justify-start">
                  <div class="flex items-center lg:ml-8">
                    <div class="flex space-x-8">
                      <div class="hidden lg:flex">
                        <a href="#" class="-m-2 p-2 text-gray-400 hover:text-gray-500">
                          <span class="sr-only">Search</span>
                          <MagnifyingGlassIcon class="h-6 w-6" aria-hidden="true" />
                        </a>
                      </div>

                      <div class="flex">
                        <a href="#" class="-m-2 p-2 text-gray-400 hover:text-gray-500">
                          <span class="sr-only">Account</span>
                          <UserIcon class="h-6 w-6" aria-hidden="true" />
                        </a>
                      </div>
                    </div>

                    <span class="mx-4 h-6 w-px bg-gray-200 lg:mx-6" aria-hidden="true" />

                    <div class="flow-root">
                      <a href="#" class="group -m-2 flex items-center p-2">
                        <ShoppingCartIcon class="h-6 w-6 flex-shrink-0 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
                        <span class="ml-2 text-sm font-medium text-gray-700 group-hover:text-gray-800">0</span>
                        <span class="sr-only">items in cart, view bag</span>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </header>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import {
  Dialog,
  DialogPanel,
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { Bars3Icon, MagnifyingGlassIcon, ShoppingCartIcon, UserIcon, XMarkIcon } from '@heroicons/vue/24/outline'



const navigation = {
  categories: [

    {
      name: 'دسته بندی',
      featured: [
        { name: 'هدفون و هدست', href: '#' },
        { name: 'ساعت هوشمند', href: '#' },
        { name: 'SSD هارد و فلش و', href: '#' },
      ],
      collection: [
        { name: 'گوشی اپل', href: '#' },
        { name: ' گوشی سامسونگ', href: '#' },
        { name: 'گوشی شیاومی', href: '#' },
        { name: 'گوشی هواوی', href: '#' },
      ],
      categories: [
        { name: 'اپل آیدی', href: '#' },
        { name: 'لایسنس آنتی‌ویروس', href: '#' },
        { name: 'کانفیگ وی‌پی‌ان', href: '#' },
        { name: 'لایسنس ویندوز', href: '#' },
      ],
      brands: [
        { name: 'تبلت سامسونگ', href: '#' },
        { name: 'تبلت اپل', href: '#' },
        { name: 'تبلت هواوی', href: '#' },

      ],
    },
  ],
  pages: [
    { name: 'پر فروش ترین ها', href: '#' },
    { name: 'شگفت انگیز ها', href: '#' },
    { name: 'خانه', href: '#' },
  ],
}

const open = ref(false)
</script>