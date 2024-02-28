<template>
  <div class="flex justify-center ">
    <div class="fixed mx-auto mb-3 bottom-0 left-0 z-50 grid w-full  grid-cols-1 px-8 md:grid-cols-9  ">
      <div @click="open = true"
        class="col-span-1 px-5  items-center bg-indigo-600 rounded-full px-3 justify-center hidden  text-white md:flex">
        <div class=" block px-1 text-sm font-bold ">
          پشتیبانی
        </div>
        <ChatBubbleLeftRightIcon class="w-6" />
      </div>
      <div
        class="col-span-2 mx-auto items-center bg-glass-2   rounded-full  justify-center shadow-lg  text-indigo-800 md:flex">
        <form class="shadow-lg rounded-full h-full px-4">
          <div class="relative pt-1 ">
            <div class="absolute  inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg class="w-4 h-4 text-indigo-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
            </div>
            <input type="search" v-model="inputValue" @focus="onFocus" @blur="onBlur" id="default-search"
              class="w-full p-4 pl-10 text-sm text-indigo-800 rounded-full bg-transparent focus:border-transparent placeholder-indigo-800   border-transparent"
              placeholder="Search..." required>
          </div>
        </form>
      </div>

      <div class="col-span-6 bg-glass-3 px-8 rounded-full   flex  justify-between">
        <div class="flex items-center  px-8 rounded-full ">
          <nuxt-link tag="button" to="/"  data-tooltip-target="tooltip-microphone" type="button"
            class="p-2.5 transform hover:-translate-y-3  duration-500  group bg-white rounded-full hover:bg-indigo-800 mr-4 focus:outline-none focus:ring-4 focus:ring-indigo-200 ">
            <HomeIcon class=" w-5 text-indigo-900" />
            <span class="sr-only">Mute microphone</span>
          </nuxt-link>

          <nuxt-link tag="button" to="/dashboard/userPanel/" data-tooltip-target="tooltip-camera" type="button"
            class="p-2.5 transform hover:-translate-y-3  duration-500 bg-indigo-200  group rounded-full hover:bg-indigo-800 mr-4 focus:outline-none focus:ring-4 focus:ring-indigo-200 ">
            <UserIcon class=" w-5 text-indigo-600" />
          </nuxt-link>

          <nuxt-link tag="button" to="/" data-tooltip-target="tooltip-feedback" type="button"
            class="p-2.5 transform hover:-translate-y-3  duration-500 bg-indigo-200  group rounded-full hover:bg-indigo-800 mr-4 focus:outline-none focus:ring-4 focus:ring-indigo-200 ">
            <ShoppingCartIcon class=" w-5 text-indigo-600" />
          </nuxt-link>

          <nuxt-link tag="button" to="" data-tooltip-target="tooltip-settings" type="button"
            class="p-2.5 animate-pulse transform hover:-translate-y-3  duration-500 bg-indigo-200  group rounded-full mr-4 md:mr-0 hover:bg-indigo-800 focus:outline-none focus:ring-4 focus:ring-indigo-200 ">
            <BellAlertIcon class=" w-5 text-indigo-600" />
          </nuxt-link>
          <div id="tooltip-settings" role="tooltip"
            class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-indigo-800 rounded-lg shadow-sm opacity-0 tooltip ">
            Video settings
            <div class="tooltip-arrow" data-popper-arrow></div>
          </div>
          <button id="moreOptionsDropdownButton" data-dropdown-toggle="moreOptionsDropdown" type="button"
            class="p-2.5 bg-gray-100 md:hidden group rounded-full hover:bg-gray-200 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-800 dark:bg-gray-600 dark:hover:bg-gray-800">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white"
              aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
              <path
                d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
            </svg>
            <span class="sr-only">Show options</span>
          </button>

        </div>
        <div class="flex  my-4">
          <div v-for="page in pages" :key="page.name"
            class=" text-white rounded-full mx-1 duration-500 hover:bg-indigo-800 text-indigo-900 hover:text-white hover:border-indigo-600    py-3">
            <a :href="page.href" class="-m-2 block px-6 text-sm font-medium ">{{ page.name }}</a>
          </div>
        </div>
      </div>

      <!-- <button data-tooltip-target="tooltip-volume" type="button" class="p-2.5 group  text-indigo-600 hover:text-white rounded-full hover:bg-indigo-700 mr-1 focus:outline-none focus:ring-4 focus:ring-indigo-200">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 18">
                      <path d="M10.836.357a1.978 1.978 0 0 0-2.138.3L3.63 5H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h1.63l5.07 4.344a1.985 1.985 0 0 0 2.142.299A1.98 1.98 0 0 0 12 15.826V2.174A1.98 1.98 0 0 0 10.836.357Zm2.728 4.695a1.001 1.001 0 0 0-.29 1.385 4.887 4.887 0 0 1 0 5.126 1 1 0 0 0 1.674 1.095A6.645 6.645 0 0 0 16 9a6.65 6.65 0 0 0-1.052-3.658 1 1 0 0 0-1.384-.29Zm4.441-2.904a1 1 0 0 0-1.664 1.11A10.429 10.429 0 0 1 18 9a10.465 10.465 0 0 1-1.614 5.675 1 1 0 1 0 1.674 1.095A12.325 12.325 0 0 0 20 9a12.457 12.457 0 0 0-1.995-6.852Z"/>
                  </svg>
                  <span class="sr-only">Adjust volume</span>
              </button>
           
              <button data-tooltip-target="tooltip-information" type="button" class="p-2.5 group  text-indigo-600 hover:text-white rounded-full hover:bg-indigo-700 focus:outline-none focus:ring-4 focus:ring-indigo-200">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z"/>
                  </svg>
                  <span class="sr-only">Show information</span>
              </button>
           -->

    </div>
  </div>


  <TransitionRoot :show="open">
    <Dialog as="div" class="relative z-10" @close="open = false">
      <div class="fixed inset-0" />

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 flex pl-5 py-5 pb-20 left-0 max-w-full pr-10 sm:pr-16">
            <TransitionChild as="template" enter="transform transition  ease-in-out duration-500 sm:duration-700"
              enter-from="translate-y-full" enter-to="translate-y-0"
              leave="transform transition ease-in-out duration-100 sm:duration-700" leave-from="translate-y-0"
              leave-to="translate-y-full">
              <DialogPanel class="pointer-events-auto w-screen max-w-md">
                <div class="flex h-full flex-col overflow-y-scroll bg-white rounded-2xl  shadow-xl">
                  <div class="p-6">
                    <div class="rtl flex items-start justify-between">
                      <DialogTitle class="text-base font-semibold leading-6  text-gray-900">فروشندگان</DialogTitle>
                      <div class="mr-3 flex h-7 items-center"> <!-- Adjusted from ml-3 to mr-3 -->
                        <button type="button" class="rounded-md bg-white text-gray-400 hover:text-gray-500 "
                          @click="open = false">

                          <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="border-b border-gray-200">
                    <div class="px-6">
                      <nav class="-mb-px rtl flex space-x-6" x-descriptions="Tab component">
                        <a v-for="tab in tabs" :key="tab.name" :href="tab.href"
                          :class="[tab.current ? 'border-indigo-500 text-indigo-600' : 'border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700', 'whitespace-nowrap border-b-2 px-4 pb-3 text-sm font-medium']">{{
                            tab.name }}</a>
                      </nav>
                    </div>
                  </div>
                  <ul role="list" class="flex-1 divide-y divide-gray-200 overflow-y-auto">
                    <li v-for="person in team" :key="person.handle">
                      <div class="group relative flex items-center px-5 py-6">
                        <a :href="person.href" class="-m-1 block flex-1 p-1">
                          <div class="absolute inset-0 group-hover:bg-gray-50" aria-hidden="true" />
                          <div class="relative flex min-w-0 flex-1 items-center">
                            <span class="relative inline-block flex-shrink-0">
                              <img class="h-10 w-10 rounded-full" :src="person.imageUrl" alt="" />

                            </span>
                            <div class="mr-4 truncate"> <!-- Adjusted from ml-4 to mr-4 -->
                              <p class="truncate px-4 text-sm font-medium text-gray-900">{{ person.name }}</p>
                              <p class="truncate px-4 text-sm text-gray-500">{{ '@' + person.handle }}</p>
                            </div>
                          </div>
                        </a>
                        <Menu as="div" class="relative mr-2 inline-block flex-shrink-0 text-left">
                          <!-- Adjusted from ml-2 to mr-2 -->
                          <MenuButton
                            class="group relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                            <span class="sr-only">Open options menu</span>
                            <span class="flex h-full w-full items-center justify-center rounded-full">
                              <EllipsisVerticalIcon class="h-5 w-5 text-gray-400 group-hover:text-gray-500"
                                aria-hidden="true" />
                            </span>
                          </MenuButton>
                          <transition enter-active-class="transition ease-out duration-100"
                            enter-from-class="transform opacity-0 scale-95"
                            enter-to-class="transform opacity-100 scale-100"
                            leave-active-class="transition ease-in duration-75"
                            leave-from-class="transform opacity-100 scale-100"
                            leave-to-class="transform opacity-0 scale-95">
                            <MenuItems
                              class="absolute right-9 top-0 z-10 w-48 origin-top-left rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                              <!-- Adjusted from right-9 to left-9 -->
                              <div class="py-1">
                                <MenuItem v-slot="{ active }">
                                <a href="#"
                                  :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm text-center']">
                                  دیدن پروفایل</a>
                                </MenuItem>

                              </div>
                            </MenuItems>
                          </transition>
                        </Menu>
                      </div>
                    </li>
                  </ul>
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
</template>
<script>
import {
  Dialog,
  DialogPanel,
  DialogTitle,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { EllipsisVerticalIcon } from '@heroicons/vue/20/solid'

import { Bars3Icon, HomeIcon, ShoppingCartIcon, UserIcon, BellAlertIcon, ChatBubbleLeftRightIcon } from '@heroicons/vue/24/solid'

export default {
  components: {
    UserIcon, HomeIcon, ShoppingCartIcon, BellAlertIcon, ChatBubbleLeftRightIcon,

    Dialog,
    DialogPanel,
    DialogTitle,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
    EllipsisVerticalIcon,
    XMarkIcon
  },
  data() {
    return {
      open: false,
      team: [
        {
          name: 'phone plus',
          handle: 'phoneplus',
          href: '#',
          imageUrl:
            '/images/2.jpeg',
          status: 'online',
        },
      ],
      inputValue: '',
      pages: [
        { name: 'پر فروش  ها', href: '#' },
        { name: 'شگفت انگیز ', href: '#' },
        { name: 'دسته بندی', href: '#' },
      ],
      tabs: [
        { name: 'همه', href: '#', current: true },
        { name: 'خوانده نشده ها', href: '#', current: false },
      ],
    };
  },
  methods: {
    onFocus() {
      // You can add any custom logic when the input is focused
    },
    onBlur() {
      // You can add any custom logic when the input loses focus
    }
  }
};
</script>

<style scoped>/* Add any other custom styles here */
input {
  border: none;
  /* Remove the border */
  outline: none;
  /* Remove the outline (focus ring) */
  /* Add other styling as needed */
}</style>
