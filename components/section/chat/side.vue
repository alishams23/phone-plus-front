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


  <div class=" flex align-center justify-around mb-5 mt-3">   
    <label for="simple-search" class="sr-only">Search</label>
  
    <div class="relative w-full px-5">
      <div class="absolute inset-y-0 start-0 flex items-center ps-8 pointer-events-none">
        <svg class="w-4 h-4 text-indigo-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>
      </div>
      <input v-model="searchInput" @input="ListUserMessageApi" type="text" id="simple-search" class="bg-gray-50 bg-white text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5 px-5" placeholder="Search ..." required />
  </div>
 
  </div>


    
    <ul role="list" class="flex-1 divide-y divide-gray-200 overflow-y-auto">
      <li v-for="person in contacts " class="rounded-2xl mx-3 mt-2 " :class=" selected_user == person.contact.username ? 'bg-indigo-600 text-white' : ''" :key="person.handle">
        {{ selected_user == person.contact.username ?  $emit('get-selected-user', person) : '' }}
        <div class="group relative flex  items-center px-5 py-4" @click="$emit('get-selected-user', person);selected_user = person.contact.username">
          <nuxt-link  :to="'/chat/' +  person.contact.username + '/'+person.room_name " class="-m-1  block flex-1 p-1">
            <div class="relative flex min-w-0 flex-1 items-center">
              <span class="relative inline-block flex-shrink-0">
                <img class="h-10 w-10 rounded-full object-cover" :src="address + person.contact.shop.image" alt="" />
              </span>
              <div class="mr-4 truncate"> <!-- Adjusted from ml-4 to mr-4 -->
                <p class="truncate px-4 text-sm font-medium " v-if="person.contact.shop">{{ person.contact.shop.name }}</p>
                <p class="truncate px-4 text-sm font-medium " v-else>{{ person.contact.full_name }}</p>
                <p class="truncate px-4 text-xs text-gray-400 pt-2" v-if="person.contact.shop">{{ '@' + person.contact.shop.username }}</p>
                <p class="truncate px-4 text-xs text-gray-400 pt-2" v-else>{{ '@' + person.contact.username }}</p>
              </div>
            </div>
          </nuxt-link>
          
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
  props:["class",],
  
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
   
      setIntervalVar: null,
      loadingListUserMessage: false,
      contacts: [],
      selected_user:this.$route.params.username,
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
      await fetch(`${apiStore().address}/api/chat/ChatList/?search=${this.searchInput == null ? '' :this.searchInput}`, {
        headers: this.headers
      })
        .then(response => response.json())
        .then((data) => {
          this.contacts = data
          this.loadingListUserMessage = false
       
          
        })
    }, async searchUser() {
      this.loadingListUserMessage = true

      await fetch(`${apiStore().address}/api/chat/Search/?search=${this.searchInput}`, {
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
  beforeDestroy(){
    clearInterval(this.setIntervalVar)
  }
}
</script>