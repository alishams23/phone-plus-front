<template>
  <div :class="class" class=" h-full px-0 mx-0 ">

   


  <div class=" flex align-center justify-around mb-5 mt-4">   
    <label for="simple-search" class="sr-only">Search</label>
  
    <div class="relative w-full px-5">
      <input 
        v-model="searchInput" 
        @input="ListUserMessageApi" 
        type="text" 
        id="simple-search" 
        class="bg-gray-50 bg-white text-gray-900 text-sm rounded-full block w-full ps-10 p-2.5 px-5 rtl focus:outline-none focus:ring-0 border-none" 
        placeholder="جستجو ..." 
        required 
      />
      <div class="absolute inset-y-0 end-9 flex items-center ps-8 pointer-events-none">
        <svg class="w-4 h-4 text-indigo-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
      </svg>
      </div>
  </div>
 
  </div>
    <ul role="list" class="flex-1  overflow-y-auto">
      <li v-if="$route.name == 'username'" class="rounded-2xl mx-3 mt-2  bg-gray-200"  >
        <div class="group relative flex  items-center px-5 py-4" >
            <a :href="sectionSupport == true ?'/p/chat/' +  $route.params.username + '/'+username : '#'" class="relative flex min-w-0 flex-1 items-center">
              <span class="relative inline-block flex-shrink-0">
                <img class="h-10 w-10 rounded-full object-cover"  :src="address + '/api/account/shop-profile/' + $route.params.username" alt="" />
               
              </span>
              <div class="mr-4 truncate"> 
                <p class="truncate px-4 text-sm font-medium rtl" > فروشگاه : {{ $route.params.username }}</p>
              </div>
            </a>
            <PaperClipIcon class="h-6 w-6" aria-hidden="true" />

        </div>
      </li>
      <li v-else v-if="currentRouteCheck('chat') == false" class="rounded-2xl mx-3 mt-2 bg-glass-2 shadow-3" >
        <div class="group relative flex  items-center px-5 py-4" >
       
            <a :href="sectionSupport == true ?'/p/chat/'+'pourya'  + '/'+ 'pourya_'+ username +  '/': '#'" class="relative flex min-w-0 flex-1 items-center">
              <span class="relative inline-block flex-shrink-0">
                <img class="h-10 w-10 rounded-full object-cover bg-white" src="https://logodix.com/logo/1707094.png"  alt="" />
               
              </span>
              <div class="mr-4 truncate"> 
                <p class="truncate px-4 text-sm font-medium " >ادمین اصلی سایت</p>
              </div>
            </a>
            <PaperClipIcon class="h-6 w-6" aria-hidden="true" />

        </div>
      </li>
      
      <li v-for="person in contacts " class="rounded-2xl mx-1 mt-2 border-0" :class=" person.contact&&  selected_user == person.contact.username ? 'bg-indigo-500 text-white' :  $route.params.username != null ? 'text-white' : ''" >
       <template v-if="person.contact">
         
         {{ selected_user == person.contact.username ?  $emit('get-selected-user', person) : '' }}
         <div class="group  justify-end items-center ps-5 py-1 " @click="$emit('get-selected-user', person);selected_user = person.contact.username">
           <nuxt-link :to="sectionSupport != true ?'/p/chat/' +  person.contact.username + '/'+person.room_name  : '' "  class="-m-1  block flex-1 p-1 border-0">
             <a :href="sectionSupport == true ? '/p/chat/' +  person.contact.username + '/'+person.room_name: '#'" class="relative flex min-w-0 flex-1 items-start justify-start border-0">
               <span class="relative inline-block flex-shrink-0">
                 <img class="h-10 w-10 rounded-full object-cover" v-if="person.contact.shop && person.contact.shop.image" :src="address + person.contact.shop.image" alt="" />
                 <img class="h-10 w-10 bg-gray-100 rounded-full object-cover" v-else src="/images/default_profile_2.svg" alt="" />
               </span>
               <div class="w-full"> 
                 <p class="truncate ps-4 text-sm font-medium  text-left" v-if="person.contact.shop">{{ person.contact.shop.name }}</p>
                 <p class="truncate ps-4 text-sm font-medium  text-left" v-else>{{ person.contact.full_name }}</p>
                 <p class="truncate ps-4 text-xs text-gray-900 pt-2 text-left" v-if="person.contact.shop">{{ '@' + person.contact.shop.username }}</p>
                 <p class="truncate ps-4 text-xs text-gray-900 pt-2 text-left" v-else>{{ '@' + person.contact.username }}</p>
               </div>
             </a>
           </nuxt-link>
           
         </div>
       </template>
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
import { XMarkIcon , PaperClipIcon} from '@heroicons/vue/24/outline'
import { apiStore } from '~/store/api'; 

export default {
  props:["class","sectionSupport"],
  
  computed: {
      address() {
        return apiStore().address
      },
      username() {
        return useUserStore().username
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
    PaperClipIcon
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
    currentRouteCheck(page_name) {
      if (page_name != '') {
        return this.$route.name.split("-").includes(page_name);
      } else if (this.$route.name== 'index') {
        return true
      }
    },
    routeName(){
      return this.$route.name
    },
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