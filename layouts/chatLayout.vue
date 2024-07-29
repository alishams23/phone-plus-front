<template>
  <!-- <div class="main-container height-full-treaget p-0"  style="      min-height: 100% ;">
    <div class="h-100 w-100 pt-5 mt-5 css-loading-off" >
      <div class="d-flex flex-column align-items-center" >
      <span class="loader"></span>
    </div>
    </div>
    <div id="wrapper" style="visibility: hidden;" class="css-loaded height-full-treaget" v-if="
        alow == true
      ">
      <ChatUsers />
      <div class="main_content height-full-treaget p-0" >
        <NavbarChat />
       
        <div class="height-full-treaget" >
          <nuxt style="height: 100%" />
        </div>
      </div>
    </div>
  </div> -->
  <div class="lg:hidden">
    <div as="template" :show="sidebarOpen">
      <Dialog as="div" :open="sidebarOpen" class="relative z-50 lg:hidden" @close="sidebarOpen = false">
        <div as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
          enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
          leave-to="opacity-0">
          <div class="fixed inset-0 bg-gray-900/80" />
        </div>

        <div class="fixed inset-0 flex h-full">
          <div class="h-full" as="template" enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full" enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
            leave-to="-translate-x-full">
            <DialogPanel class="relative mr-16 flex w-full max-w-xs h-full flex-1">
              <template as="template" enter="ease-in-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
                leave="ease-in-out duration-300" leave-from="opacity-100" leave-to="opacity-0">
                <div class="absolute left-full top-0 flex w-16 justify-center pt-5">
                  <button type="button" class="-m-2.5 p-2.5" @click="sidebarOpen = false">
                    <span class="sr-only">Close sidebar</span>
                    <XMarkIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </template>
              <!-- Sidebar component, swap this element with another sidebar if you like -->
              <side class="bg-indigo-700" @get-selected-user="(data) => { user = !null ? user = data : '' }" />

            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </div>
  </div>

  <!-- Static sidebar for desktop -->

  <div class="hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:w-72 lg:flex-col ">
    <!-- Sidebar component, swap this element with another sidebar if you like -->

    <div class="flex grow flex-col curved px-0 mx-0 overflow-y-auto ">

      <side class=" mr-[30px]" @get-selected-user="(data) => { user = !null ? user = data : '' }" />

    </div>
  </div>

  <div class="lg:pl-1">
    <div
      class="fixed w-full top-0 z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white px-4  sm:gap-x-6 sm:px-6 lg:px-8">
      <button type="button" class="-m-2.5 p-2.5 text-gray-700 lg:hidden" @click="sidebarOpen = true">
        <span class="sr-only">Open sidebar</span>
        <Bars3Icon class="h-6 w-6" aria-hidden="true" />
      </button>

      <!-- Separator -->
      <div class="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true" />
      <div class="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <form class="relative flex items-center  flex-1" action="#" method="GET">
          <a :href="`/${user.contact.shop ? user.contact.shop.username : ''}`" class="relative" v-if="user">
            <div class="-m-1.5 flex items-center p-1.5">
              <img class="h-8 w-8 rounded-full bg-gray-100 object-cover"
                v-if="user.contact.shop && user.contact.shop.image" :src="address + user.contact.shop.image" alt="" />
              <img class="h-8 w-8 rounded-full bg-gray-100 object-cover bg-gray-200" v-else alt="" />
              <span class="hidden lg:flex lg:items-center">
                <span v-if="user.contact.shop" class="ml-4 text-sm font-semibold leading-6 text-gray-900"
                  aria-hidden="true">{{ user.contact.shop.name }}</span>
                <span v-else class="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">{{user.contact.full_name }}</span>
              </span>
            </div>
          </a>
        </form>
        <div class="flex items-center gap-x-4 lg:gap-x-6">
          <a href="/" class="-m-2.5 p-2.5 bg-indigo-600 rounded-full text-white hover:text-indigo-200">
            <span class="sr-only">View notifications</span>
            <HomeIcon class="h-5 w-5" aria-hidden="true" />
          </a>
          <!-- Separator -->
          <!-- <div class="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" aria-hidden="true" /> -->
          <!-- Profile dropdown -->
        </div>
      </div>
    </div>


    <slot class="absolute" />


  </div>
</template>

<script>
import ChatUsers from '~/components/section/chat/ChatUsers.vue';
import NavbarChat from '~/components/section/chat/NavbarChat.vue';
import Side from '~/components/section/chat/side.vue';
import { apiStore } from '~/store/api';

import {
  Dialog,
  DialogPanel,
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import {
  Bars3Icon,
  BellIcon,

  CalendarIcon,
  ChartPieIcon,
  Cog6ToothIcon,
  DocumentDuplicateIcon,
  FolderIcon,
  HomeIcon,
  UsersIcon,
  XMarkIcon,
} from '@heroicons/vue/24/outline'
import { ChevronDownIcon, MagnifyingGlassIcon } from '@heroicons/vue/20/solid'

import { useUserStore } from '~/store/user';
export default {
  computed: {
    address() {
      return apiStore().address
    },
  },
  components: {
    Bars3Icon,
    HomeIcon,
    BellIcon,
    CalendarIcon,
    ChartPieIcon,
    Cog6ToothIcon,
    DocumentDuplicateIcon,
    FolderIcon,
    UsersIcon,
    XMarkIcon,
    ChevronDownIcon, MagnifyingGlassIcon,
    Dialog,
    DialogPanel,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    TransitionChild,
    TransitionRoot,
    ChatUsers,
    Side,
    NavbarChat
  },
  data() {
    return {
      alow: true,

      sidebarOpen: true,
      loading: true,
      user: null,
      navigation: [
        { name: 'Dashboard', href: '#', icon: HomeIcon, current: true },
        { name: 'Team', href: '#', icon: UsersIcon, current: false },
        { name: 'Projects', href: '#', icon: FolderIcon, current: false },
        { name: 'Calendar', href: '#', icon: CalendarIcon, current: false },
        { name: 'Documents', href: '#', icon: DocumentDuplicateIcon, current: false },
        { name: 'Reports', href: '#', icon: ChartPieIcon, current: false },
      ]
    };
  },
  head() {
    return {
      link: [

        {
          rel: "stylesheet",
          type: "text/css",
          href: "/css/tailwind.css"
        },
        {
          rel: "stylesheet",
          type: "text/css",
          href: "/css/style.css"
        }
      ]
    };
  },

  methods: {
    getInfo() {
      try {
        fetch(
          `${this.address}/api/UserRetrieveApi/alishams/`,
          {
            headers: {
              "Content-type": "application/json",
              Accept: "application/json",
              Authorization: `Token ${useUserStore().userToken}`
            }
          }
        )
          .then(response => response.json())
          .then(data => {
            // this.$store.commit("getUser", data);
          });
        this.loading = false;
      } catch (error) { }
    },

  },
  mounted() {
    // this.loginPage();
  },


};
</script>

<style>
.height-full-treaget {
  min-height: 100%;
  max-height: 100%;
  height: 100%;
  overflow-y: hidden
}
</style>