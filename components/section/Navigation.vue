<template>
  <div class="flex justify-center ">
    
    <div class="fixed mx-auto mb-3 bottom-0 left-0 z-50 flex flex-row w-full  px-8  ">
      <div @click="isLogin ? open_support = true : changeStateLogin(true)"
        class="flex-1/8 px-5  items-center bg-indigo-600 rounded-[23px] px-3 justify-center hidden  text-white md:flex">
        <div class=" block px-1 text-xs  ">
         
          پشتیبانی
        </div>
        <ChatBubbleLeftRightIcon class="w-6" />
      </div>
      <transition name="fade">
        <div v-if="(currentRouteCheck('') && showButton && heightPage != null ) || (currentRouteCheck('') != true)   " :data-aos="currentRouteCheck('') == true ? 'fade-left' : ''" data-aos-duration="500"
          data-aos-delay="500"
          class="flex-1/8 ml-3 items-center bg-glass-2 hidden md:block  rounded-[23px]  justify-center   text-indigo-800 md:flex">
          <form class=" rounded-full h-full px-4">
            <div class="relative  ">
              <div class="absolute  inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg class="w-4 h-4 text-indigo-800 " aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                  viewBox="0 0 20 20">
                  <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                </svg>
              </div>
              <input type="search" v-model="inputValue" id="default-search"
                class="w-full p-4 pl-10 text-sm rtl text-indigo-800 rounded-full bg-transparent focus:border-transparent placeholder-indigo-800   border-transparent"
                placeholder="جستجو..." required>
            </div>
          </form>
        </div>
      </transition>
      <div class=" grow bg-glass-3 ml-0 md:ml-3  px-8 py-2 flex flex-row items-center justify-between rounded-[23px]  ">
        <div class="flex items-center  px-1 rounded-full ">
          <nuxt-link tag="button" to="/" data-tooltip-target="tooltip-microphone" type="button"
            :class="currentRouteCheck('') ? 'bg-white' : 'bg-indigo-200'"
            class="p-2.5 transform hover:-translate-y-1  duration-500  group rounded-[16px]  mr-4 focus:outline-none focus:ring-4 focus:ring-indigo-200 ">
            <HomeIcon class=" w-5 text-indigo-900" />
            <span class="sr-only">Mute microphone</span>
          </nuxt-link>
          <button @click="isLogin ? $router.push('/dashboard/userPanel/') : changeStateLogin(true)"
            :class="currentRouteCheck('userPanel') ? 'bg-white' : 'bg-indigo-200'"
            class="p-2.5   transform hover:-translate-y-1  duration-500  group rounded-[16px]  mr-4 focus:outline-none focus:ring-4 focus:ring-indigo-200 ">
            <UserIcon class=" w-5 text-indigo-600" />
          </button>
          <button @click="isLogin ? $router.push('/dashboard/productOrders/') : changeStateLogin(true)"
            data-tooltip-target="tooltip-feedback" type="button"
            :class="currentRouteCheck('productOrders') ? 'bg-white' : 'bg-indigo-200'"
            class="p-2.5 transform hover:-translate-y-1  duration-500  group rounded-[16px]  mr-4 focus:outline-none focus:ring-4 focus:ring-indigo-200 ">
            <ShoppingCartIcon class=" w-5 text-indigo-600" />
          </button>
        </div>
        <!-- <nuxt-link tag="button" to="" data-tooltip-target="tooltip-settings" type="button"
            :class="currentRouteCheck('x')?'bg-white':'bg-indigo-200' "
            class="p-2.5 animate-pulse transform hover:-translate-y-3  duration-500  group rounded-full mr-4 md:mr-0  focus:outline-none focus:ring-4 focus:ring-indigo-200 ">
            <BellAlertIcon class=" w-5 text-indigo-600" />
          </nuxt-link> -->
        <div id="tooltip-settings" role="tooltip"
          class="absolute z-10 invisible inline-block px-3 py-2 text-sm font-medium text-white transition-opacity duration-300 bg-indigo-800 rounded-lg shadow-sm opacity-0 tooltip ">
          Video settings
          <div class="tooltip-arrow" data-popper-arrow>
          </div>
        </div>
        <div class="w-full flex justify-end ">
          <!-- <button id="moreOptionsDropdownButton" data-dropdown-toggle="moreOptionsDropdown" type="button"
              class="pe-2 md:hidden group rounded-full  ">
              <svg class="w-4 h-4 text-gray-500 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white"
                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                <path
                  d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
              </svg>
              <span class="sr-only">Show options</span>
            </button> -->
          <Menu as="div" class="relative md:hidden inline-block text-left">
            <div>
              <MenuButton
                class="inline-flex w-full justify-center gap-x-1.5 rounded-md  px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-300 group-hover:text-gray-900 dark:group-hover:text-white"
                  aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 4 15">
                  <path
                    d="M3.5 1.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 6.041a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Zm0 5.959a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0Z" />
                </svg>
                <span class="sr-only">Show options</span>
              </MenuButton>
            </div>
            <transition enter-active-class="transition ease-out duration-500"
              enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
              leave-active-class="transition ease-in duration-100" leave-from-class="transform opacity-100 scale-100"
              leave-to-class="transform opacity-0 scale-95">
              <MenuItems
                class="absolute right-0 z-10 bottom-full mb-2 w-56 origin-bottom-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                <MenuItem v-slot="{ active }">
                <div @click="isLogin ? open_support = true : changeStateLogin(true)"
                  :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block flex justify-end items-center px-6 py-2 text-sm text-right']">
                  پشتیبانی
                  <!-- <ChatBubbleLeftRightIcon class="w-5 mx-2 text-indigo-600" /> -->
                </div>
                </MenuItem>
                <MenuItem v-slot="{ active }" v-if="buttons.length > 0" v-for="button in buttons">
                <div
                  :class="[active ? 'bg-gray-100 text-gray-900' : 'text-gray-700', 'block px-4 py-2 text-sm text-right']">
                  <div v-if="button.func != null" @click="button.func">{{ button.name }}</div>
                  <nuxt-link tag="div" v-if="button.href" :to="button.href">
                    {{ button.name }}
                  </nuxt-link>
                </div>
                </MenuItem>
              </MenuItems>
            </transition>
          </Menu>
        </div>
        <div class="lg:flex hidden lg:block my-2">
          <div data-aos="fade-left"
     data-aos-anchor-placement="bottom-bottom" v-for="button in buttons" :key="button.name">
            <button v-if="button.func != null" @click="button.func" :class="button.color ? button.color : ''"
              class="-m-2 text-indigo-100  mx-2 py-2 rounded-full block px-4 text-sm font-medium   text-[9px] whitespace-nowrap">{{
        button.name }} </button>
            <nuxt-link v-if="button.href" :to="button.href" :class="button.color ? button.color : ''"
              class="-m-2 text-indigo-100  mx-2 py-2 rounded-full block px-4 text-sm font-medium   text-[9px] whitespace-nowrap">{{
        button.name }}</nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>


  <TransitionRoot :show="open_support">
    <Dialog as="div" class="relative z-10" @close="open_support = false">
      <div class="fixed inset-0" />

      <div class="fixed inset-0 overflow-hidden">
        <div class="absolute inset-0 overflow-hidden">
          <div class="pointer-events-none fixed inset-y-0 flex pl-5 py-5 pb-20 left-0 max-w-full pr-10 sm:pr-16">
            <TransitionChild as="template" enter="transform transition  ease-in-out duration-500 sm:duration-700"
              enter-from="translate-y-full" enter-to="translate-y-0"
              leave="transform transition ease-in-out duration-100 sm:duration-700" leave-from="translate-y-0"
              leave-to="translate-y-full">
              <DialogPanel class="pointer-events-auto w-screen max-w-md">
                <side class="bg-white rounded-2xl  overflow-y-scroll" />
              </DialogPanel>
            </TransitionChild>
          </div>
        </div>
      </div>
    </Dialog>
  </TransitionRoot>
  <TransitionRoot as="template" :show="open">
    <Dialog as="div" class="relative z-10" @close="changeStateLogin(false)">
      <LoginPopup @close="() => { changeStateLogin(false) }" />
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
import { useUserStore } from '~/store/user';
import { EllipsisVerticalIcon } from '@heroicons/vue/20/solid'
import side from '@/components/section/chat/side.vue'
import { Bars3Icon, HomeIcon, ShoppingCartIcon, UserIcon, BellAlertIcon, ChatBubbleLeftRightIcon } from '@heroicons/vue/24/solid'
import LoginPopup from "@/components/section/LoginPopup.vue"
import { NavigationStore } from '~/store/navigation';

export default {

  components: {
    side,
    UserIcon, HomeIcon, ShoppingCartIcon, BellAlertIcon, ChatBubbleLeftRightIcon, LoginPopup,

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

      open_support: false,

      showButton: true,
      inputValue: '',
 heightPage:null
    };
  },
  computed: {
    isLogin() {
      return useUserStore().userToken != null
    },
    buttons() {
      return NavigationStore().buttons
    },
    open() {
      return NavigationStore().loginState

    },routeName(){
      return this.$route.name
    },
  },
  mounted() {

   
    window.addEventListener('scroll', this.checkScroll);
  },
  beforeDestroy() {
    window.removeEventListener('scroll', this.checkScroll);
  },
  methods: {

    currentRouteCheck(page_name) {
      if (page_name != '') {
        return this.routeName.split("-").includes(page_name);
      } else if (this.routeName== 'index') {
        return true
      }
    },
    changeStateLogin(state) {
      NavigationStore().changeLoginState(state)
    },
    checkScroll() {
      // Check if the scroll position is greater than 100px
      this.heightPage = window.scrollY
      this.showButton = window.scrollY > 400;
    },
    
  },

};
</script>

<style scoped>
/* Add any other custom styles here */
input {
  border: none;
  /* Remove the border */
  outline: none;
  /* Remove the outline (focus ring) */
  /* Add other styling as needed */


}

.fade-enter-active,
.fade-leave-active {
  transition: opacity .5s
}

.fade-enter,
.fade-leave-to {
  opacity: 0
}


.show-enter-active,
.show-leave-active {
  transition: opacity .5s
}

.show-enter,
.show-leave-to {
  opacity: 1
}

.slide-fade-enter-active {
  transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}
</style>
