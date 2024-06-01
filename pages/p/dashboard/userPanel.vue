<template>
  <div v-if="snackbarVisible" class="bg-indigo-700 shadow-2 rtl text-white p-4 py-2 mx-10 rounded-full fixed top-4  flex justify-between items-center">
    با موفقیت ثبت شد
    <button @click="snackbarVisible = false" class="text-white mr-10">
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
      </svg>
    </button>
  </div>
  <div v-if="loading" >
      <div class="grid rtl grid-cols-1 gap-4 lg:col-span-2 lg:mx-[3rem] mt-12 lg:mt-0">
          <section aria-labelledby="section-1-title">
              <h2 class="sr-only" id="section-1-title">Section title</h2>
              <div class="overflow-hidden rounded-lg bg-white shadow">
                  <div  class="p-16 flex items-center justify-center " >
                      <div role="status">
                          <svg aria-hidden="false" class="w-14 h-14 text-gray-100 animate-spin fill-indigo-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                          </svg>
                          <span class="sr-only">Loading...</span>
                      </div>
                  </div>  
              </div>
          </section>
      </div>
  </div>
  <div v-else>
    <div v-if="user != null" data-aos="zoom-out" data-aos-duration="500">
      <div class="grid rtl mt-12 lg:mt-0 grid-cols-1 gap-4 lg:col-span-2 lg:mx-[3rem] ">
        <section aria-labelledby="section-1-title">
          <h2 class="sr-only" id="section-1-title">Section title</h2>
          <div class="overflow-hidden rounded-lg bg-white shadow">
            <div class="p-6">
              <div class="px-4 sm:px-0">
                <h3 class="text-base font-semibold leading-7 text-gray-900">اطلاعات شخصی</h3>
              </div>
               <form @submit.prevent="sendData" class="">
                <div class="mt-6 border-t border-gray-100">
                  <dl class="divide-y divide-gray-100">
                    <div class=" py-3 md:py-6 grid grid-cols-3 gap-4 px-0">
                        <dt class="hidden md:block text-xs md:text-sm font-medium flex justify-start md:justify-center items-top pt-4 leading-6 text-gray-900">
                              نام و نام خانوادگی
                            </dt>
                        <dd
                            class="mt-1 flex text-sm leading-6 justify-between md:justify-center  text-gray-700 col-span-3 md:col-span-2  mt-0">
                            <div class="py-2 w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label
                                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-city">
                                    نام
                                </label>
                                <input required
                                    class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-city" type="text" v-model="first_name">
                            </div>
                            <div class="py-2 w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label
                                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-city">
                                      نام خانوادگی
                                </label>
                                <input required
                                    class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-city" type="text" v-model="last_name">
                            </div>
                        </dd>
                    </div>
                    <div class=" py-3 md:py-6 grid grid-cols-3 gap-4 px-0">
                        <dt class="hidden md:block text-xs md:text-sm font-medium flex justify-start md:justify-center items-top pt-4 leading-6 text-gray-900">
                              شماره موبایل
                            </dt>
                        <dd
                            class="mt-1 flex text-sm leading-6 justify-between md:justify-start  text-gray-700 col-span-3 md:col-span-2  mt-0">
                            <div class="py-2 w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                <label
                                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                    for="grid-city">
                                    شماره موبایل
                                </label>
                                <p 
                                    class=" block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-city" type="text" >
                                    {{phone_number}}
                                    </p>
                            </div>
                        </dd>
                    </div>
                    <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                      <dt class="text-xs hidden md:block md:text-sm font-medium flex justify-start md:justify-center items-top pt-4 leading-6 text-gray-900">آدرس</dt>
                      <dd class="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                        <div class="flex flex-wrap -mx-3 mb-2">
                          <div class="py-2 w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-state">
                              استان
                            </label>
                            <div class="relative">
                              <select v-model="state"
                                class="block appearance-none w-full bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                id="grid-state">
                                <option v-for="province in provinces" :key="province" :value="province">{{ province }}
                                </option>
                              </select>
                              <div
                                class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                </svg>
                              </div>
                            </div>
                          </div>
                
                          <div class="py-2 w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-city">
                              شهر
                            </label>
                            <input
                              class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-city" type="text" v-model="city">
                          </div>
                          <div class="py-2 w-full  px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-city">
                              محل سکونت
                            </label>
                            <textarea
                              class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-city"
                              v-model="street"
                              rows="3" 
                            >
                            </textarea>

                          </div>
                
                          <div class="py-2 w-full md:w-1/2 px-3 mb-6 md:mb-0">
                            <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                              for="grid-zip">
                              کدپستی
                            </label>
                            <input
                              class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                              id="grid-zip" type="text" v-model="zipCode">
                          </div>
                        </div>
                      </dd>
                    </div>
                  </dl>
                  <div class="flex justify-end" >
                    <button
                      type="submit"
                      class="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 mb-4 px-4 rounded-full px-10">
                      ثبت تغییرات
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div >

</template>


<script>
import { useUserStore } from '~/store/user';
import { apiStore } from '~/store/api';
import { NavigationStore } from '~/store/navigation'; 

import { PaperClipIcon } from '@heroicons/vue/20/solid'
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import axios from 'axios'
export default {
  setup() {
    definePageMeta({
      layout: "user-dashboard",
    })
  },
  components: {
    PaperClipIcon, Bars3Icon, BellIcon, XMarkIcon, MagnifyingGlassIcon,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Popover,
    PopoverButton,
    PopoverOverlay,
    PopoverPanel,
    TransitionChild,
    TransitionRoot,
  },
  methods: {
    currentRouteCheck(url) {
      return this.$route.name.split("-").includes(url.split('/')[1]);
    },
  },
  data() {
    return {
      snackbarVisible:false,
      loading:true,
      provinces: [
        "انتخاب کنید",
        "آذربایجان شرقی",
        "آذربایجان غربی",
        "اردبیل",
        "اصفهان",
        "البرز",
        "ایلام",
        "بوشهر",
        "تهران",
        "چهارمحال و بختیاری",
        "خراسان جنوبی",
        "خراسان رضوی",
        "خراسان شمالی",
        "خوزستان",
        "زنجان",
        "سمنان",
        "سیستان و بلوچستان",
        "فارس",
        "قزوین",
        "قم",
        "کردستان",
        "کرمان",
        "کرمانشاه",
        "کهگیلویه و بویراحمد",
        "گلستان",
        "گیلان",
        "لرستان",
        "مازندران",
        "مرکزی",
        "هرمزگان",
        "همدان",
        "یزد"
      ],
      items: [
        { name: 'اطلاعات کاربری', href: '/p/dashboard/userPanel/' },
        { name: 'سفارشات من', href: '#' },
        { name: 'خروج', href: '/p/auth/logOut/' },
      ],
      user: null,
      phone_number: null,
      first_name: null,
      last_name: null,
      zipCode: null,
      street: null,
      city: null,
      state: null,
    }
  },
  methods: {

  
    getData() { 
      
      this.loading = true
      axios.get(`${apiStore().address}/api/account/user-settings-retrieve/${useUserStore().username}/`, {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Token ${useUserStore().userToken}`
        },
      }).then((response) => {
        this.user = response.data
        this.first_name = this.user["first_name"]
        this.phone_number = this.user["phone_number"]
        this.last_name = this.user["last_name"]
        this.zipCode = this.user["zipCode"]
        this.street = this.user["street"]
        this.city = this.user["city"]
        this.state = this.user["state"]
        this.loading = false

      })
    },
    sendData() {
      const apiUrl = `${apiStore().address}/api/account/user-settings-update/${useUserStore().username}/`;
      const data = {
        first_name: this.first_name,
        last_name: this.last_name,
        zipCode: this.zipCode,
        street: this.street,
        city: this.city,
        state: this.state,
      };
      this.loading = true
      axios.put(apiUrl, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: "application/json",
          Authorization: `Token ${useUserStore().userToken}`
        },
      })
        .then(response => {

          this.loading = false
          this.snackbarVisible = true
          setTimeout(() => {
            this.snackbarVisible = false
          }, 5000);
          // You can change the dialog page or show a success message here
        })
    },
  },
 
  mounted() {
    this.getData()
    NavigationStore().setButtons([
      {
        'name':'خروج',
        'func':null,
        'href':'/p/auth/logOut'
      }
    ])
  }

}





</script>