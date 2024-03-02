<template>
  <div :class="class" class=" h-full px-0 mx-0 ">
{{ user }}
    <div class="pt-6 px-5">
      <div class="rtl flex items-start justify-between">
        <div class="text-base font-semibold leading-6  text-gray-900">فروشندگان</div>
        <div class="mr-3 flex h-7 items-center"> <!-- Adjusted from ml-3 to mr-3 -->
          <!-- <button type="button" class="rounded-md bg-white text-gray-400 hover:text-gray-500 ">

            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button> -->
        </div>
      </div>
    </div>


  <form class=" flex align-center justify-around mb-5 mt-3">   
    <label for="simple-search" class="sr-only">Search</label>
  
    <div class="relative w-full px-5">
      <div class="absolute inset-y-0 start-0 flex items-center ps-8 pointer-events-none">
        <svg class="w-4 h-4 text-indigo-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>
      </div>
      <input type="text" id="simple-search" class="bg-gray-50 bg-white text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 px-5" placeholder="Search ..." required />
  </div>
 
  </form>


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
      <li v-for="person in contacts " class="rounded-2xl mx-3 mt-2 " :class="user && user.contact.username == person.contact.username ? 'bg-indigo-600 text-white' : ''" :key="person.handle">
        <div class="group relative flex  items-center px-5 py-6" @click="$emit('get-selected-user', person);selected_user = person">
          <nuxt-link  :to="'/chat/' +  person.contact.username + '/'+person.room_name " class="-m-1  block flex-1 p-1">
        
            <div class="relative flex min-w-0 flex-1 items-center">
              <span class="relative inline-block flex-shrink-0">
                <img class="h-10 w-10 rounded-full" :src="address + person.contact.shop.image" alt="" />

              </span>
              <div class="mr-4 truncate"> <!-- Adjusted from ml-4 to mr-4 -->
                <p class="truncate px-4 text-sm font-medium text-gray-900" v-if="person.contact.shop">{{ person.contact.shop.name }}</p>
                <p class="truncate px-4 text-sm font-medium text-gray-900" v-else>{{ person.contact.full_name }}</p>
                <p class="truncate px-4 text-sm text-gray-500" v-if="person.contact.shop">{{ '@' + person.contact.shop.username }}</p>
                <p class="truncate px-4 text-sm text-gray-500" v-else>{{ '@' + person.contact.username }}</p>
              </div>
            </div>
          </nuxt-link>
          <Menu as="div" class="relative mr-2 inline-block flex-shrink-0 text-left">
            <!-- Adjusted from ml-2 to mr-2 -->
            <MenuButton
              class="group relative inline-flex h-8 w-8 items-center justify-center rounded-full bg-white focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
              <span class="sr-only">Open options menu</span>
              <span class="flex h-full w-full items-center justify-center rounded-full">
                <EllipsisVerticalIcon class="h-5 w-5 text-gray-400 group-hover:text-gray-500" aria-hidden="true" />
              </span>
            </MenuButton>
            <transition enter-active-class="transition ease-out duration-100"
              enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100"
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
</template>
<script>
import { useUserStore } from '~/store/user';

import {
  DialogTitle,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/vue'
import { EllipsisVerticalIcon } from '@heroicons/vue/20/solid'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { apiStore } from '~/store/api'; 

export default {
  props:["class",'user'],
  computed: {
      address() {
        return apiStore().address
      },
    },
  components: {
    DialogTitle,
    Menu,
    EllipsisVerticalIcon,
    XMarkIcon,
    MenuButton,
    MenuItem,
    MenuItems,
  },
  
  
  data() {
    return {
      tabs: [
        { name: 'همه', href: '#', current: true },
        { name: 'خوانده نشده ها', href: '#', current: false },
      ],
      team: [
        {
          name: 'phone plus',
          handle: 'phoneplus',
          href: '#',
          imageUrl:
            '/images/2.jpeg',
          status: 'online',
        },
      ], setIntervalVar: null,
      loadingListUserMessage: false,
      contacts: [],
      searchContact: [],
      searchInput: '',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
        Authorization: `Token ${useUserStore().userToken}`
      }
    }
  },
  methods: {
    async ListUserMessageApi() {
      await fetch('http://127.0.0.1:8000/api/chat/ChatList/', {
        headers: this.headers
      })
        .then(response => response.json())
        .then((data) => {
          this.contacts = data
          this.loadingListUserMessage = false
        })
    }, async searchUser() {
      this.loadingListUserMessage = true

      await fetch(`http://127.0.0.1:8000/api/chat/Search/?search=${this.searchInput}`, {
        headers: this.headers
      })
        .then(response => response.json())
        .then((data) => {
          this.searchContact = data
          this.loadingListUserMessage = false
        })
    },
  },
  mounted() {
    this.loadingListUserMessage = true
    this.ListUserMessageApi()
    this.setIntervalVar = setInterval(() => {
      this.ListUserMessageApi()
    }, 4000)
  },
}
</script>