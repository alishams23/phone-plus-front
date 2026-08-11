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
  <div class="flex gap-2 px-5 pb-3 rtl">
    <button @click="chatTab = 'active'" :class="chatTab === 'active' ? 'bg-indigo-600 text-white' : 'bg-gray-100'" class="rounded-full px-4 py-2 text-sm">فعال</button>
    <button @click="chatTab = 'archived'" :class="chatTab === 'archived' ? 'bg-indigo-600 text-white' : 'bg-gray-100'" class="rounded-full px-4 py-2 text-sm">آرشیو</button>
  </div>
 
  </div>
    <ul role="list" class="flex-1  overflow-y-auto overflow-x-hidden">
      <li v-if="$route.name == 'username'" class="rounded-2xl mx-3 mt-2 bg-gray-200"  >
        <div class="group relative flex  items-center px-5 py-4" >
            <a :href="sectionSupport == true ?'/p/chat/' +  $route.params.username + '/'+ 'newUser' : '#'" class="relative flex min-w-0 flex-1 items-center">
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
      <li v-else-if="sectionSupport == true && supportLink && currentRouteCheck('chat') == false" class="rounded-2xl mx-3 mt-2 bg-gray-200" >
        <div class="group relative flex  items-center px-5 py-4" >
            <a :href="supportLink" class="relative flex min-w-0 flex-1 items-center">
              <span class="relative inline-block flex-shrink-0">
                <img class="h-10 w-10 rounded-full object-cover bg-white" src="/images/default_profile_2.svg"  alt="" />
              </span>
              <div class="mr-4 truncate"> 
                <p class="truncate px-4 text-sm font-medium rtl" >پشتیبانی فروشگاه</p>
                <p class="truncate px-4 text-xs text-gray-500" v-if="supportTargetUsername">{{ '@' + supportTargetUsername }}</p>
              </div>
            </a>
            <PaperClipIcon class="h-6 w-6" aria-hidden="true" />

        </div>
      </li>
      <li v-else-if="currentRouteCheck('chat') == false && !isStoreSupportContext" class="rounded-2xl mx-3 mt-2 bg-glass-2 shadow-3" >
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
      
      <li v-for="person in contacts " :class=" $route.params.username != null ?'mx-1 me-4 my-2  mt-[2px]':''"  >
    <div :class=" person.contact&&  selected_user == person.contact.username ? 'bg-indigo-500 rounded-2xl text-white' :  $route.params.username != null ? 'text-white' : ''">
      <template v-if="person.contact" >
         
         {{ selected_user == person.contact.username ?  $emit('get-selected-user', person) : '' }}
         <div class="group mb-2 justify-end items-center ps-5 my-1 " @click="$emit('get-selected-user', person);selected_user = person.contact.username">
           <nuxt-link :to="sectionSupport != true ?'/p/chat/' +  person.contact.username + '/'+person.room_name  : '' "  class="-m-1  block flex-1 p-1 border-0">
             <a :href="sectionSupport == true ? '/p/chat/' +  person.contact.username + '/'+person.room_name: '#'" class="relative flex  flex-1 items-center border-0">
              
                 <img class="h-10 w-10  rounded-full object-cover" v-if="person.contact.shop && person.contact.shop.image" :src="address + person.contact.shop.image" alt="" />
                 <img class="h-10 w-10  bg-gray-100 rounded-full object-cover" v-else src="/images/default_profile_2.svg" alt="" />
              
               <div class="w-full flex justify-between items-center pe-4"> 
                 <div class="max-w-10">
                   <p class="truncate ps-2 text-[14px] font-medium me-4 w-[89%] rtl text-left" v-if="person.contact.shop">{{ person.contact.shop.name }}</p>
                   <p class="truncate ps-2 text-[14px] font-medium me-4 w-[89%] rtl text-left" v-else>{{ person.contact.full_name }}</p>
                   <p class="truncate ps-4 text-[9px] pt-2 text-left" :class="$route.params.username != null ? 'text-gray-300' : 'text-gray-900'" v-if="person.contact.shop">{{ '@' + person.contact.shop.username }}</p>
                   <p class="truncate ps-4 text-[9px] pt-2 text-left" :class="$route.params.username != null ? 'text-gray-300' : 'text-gray-900'" v-else>{{ '@' + person.contact.username }}</p>
                   <p v-if="person.is_archived" class="text-[10px] text-amber-600 rtl">فروشگاه غیرفعال است</p>
                  </div>
                  <div
                  v-if="person.unread > 0"
                  class="flex items-center bg-indigo-600 pt-1 justify-center w-5 h-5 text-xs font-medium text-white bg-primary rounded-full"
                  >
                  {{ person.unread }}
                </div>
              </div>
            </a>
          </nuxt-link>
          
        </div>
      </template>
    </div>
      
    </li>
      
    </ul>
  </div>
</template>
<script>
 

import {
  DialogTitle,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
} from '@headlessui/vue'
import { EllipsisVerticalIcon } from '@heroicons/vue/20/solid'
import { XMarkIcon , PaperClipIcon} from '@heroicons/vue/24/outline'
   

export default {
  props:["class","sectionSupport"],
  
  computed: {
      address() {
        return apiStore().address
      },
      username() {
        return useUserStore().username
      },
      supportLink() {
        const buttons = NavigationStore().buttons || []
        const supportButton = buttons.find(
          (button) => button && button.name == 'پشتیبانی فروشگاه' && button.href
        )
        const href = supportButton ? supportButton.href : null
        if (!href || href.includes('undefined') || href.includes('null')) return null
        return href
      },
      supportTargetUsername() {
        if (!this.supportLink) return null
        const parts = this.supportLink.split('/').filter(Boolean)
        return parts.length > 2 ? parts[2] : null
      },
      isStoreSupportContext() {
        const routeName = this.routeName()
        return routeName == 'username' || this.currentRouteCheck('product') || this.currentRouteCheck('digitalProduct')
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
      chatTab: 'active',
      headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
        Authorization: `Token ${useUserStore().userToken}`
      }
    }
  },
  methods: {
    currentRouteCheck(page_name) {
      const routeName = this.routeName()
      if (page_name != '') {
        return routeName.split("-").includes(page_name);
      } else if (routeName == 'index') {
        return true
      }
      return false
    },
    routeName(){
      return this.$route && this.$route.name ? String(this.$route.name) : ''
    },
    async ListUserMessageApi() {
      const query = new URLSearchParams({ search: this.searchInput || '' })
      if (this.chatTab === 'archived') query.set('archived', 'true')
      await fetch(`${apiStore().address}/api/chat/ChatList/?${query.toString()}`, {
        headers: this.headers
      })
        .then(response => response.json())
        .then((data) => {
          this.contacts = data
          this.loadingListUserMessage = false
       
          
        })
    }, async searchUser() {
      this.loadingListUserMessage = true

      await fetch(`${apiStore().address}/api/chat/Search/?search=${this.searchInput}${this.chatTab === 'archived' ? '&archived=true' : ''}`, {
        headers: this.headers
      })
        .then(response => response.json())
        .then((data) => {
          this.searchContact = data
          this.loadingListUserMessage = false
        })
    },
  },
  watch: {
    chatTab() { this.ListUserMessageApi() },
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
