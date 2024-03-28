<template>
  <div class="bg-white">
    <div>
      <!-- Mobile filter dialog -->
      <TransitionRoot as="template" :show="open">
        <Dialog as="div" class="relative z-40 lg:hidden" @close="open = false">
          <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
            enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
            leave-to="opacity-0">
            <div class="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>
          <div class="fixed inset-0 z-40 flex">
            <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
              enter-from="translate-x-full" enter-to="translate-x-0"
              leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0"
              leave-to="translate-x-full">
              <DialogPanel
                class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                <div class="flex items-center justify-between px-4">
                  <h2 class="text-lg font-medium w-full text-right mx-4 text-gray-900">فیلترها</h2>
                  <button type="button"
                    class="-mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"
                    @click="open = false">
                    <span class="sr-only">Close menu</span>
                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <!-- Filters -->

                <div class="space-y-10 py-10 divide-y px-10 divide-gray-200">
                  <div class="flex flex-wrap justify-end ">
                    <button v-for="item in product_sort" :key="item" @click="selected_sort = item.value;getData()"
                      :class="[selected_sort == item.value ? 'bg-indigo-600 text-white' : 'bg-gray-200', 'px-4 text-xs py-2 rounded-xl m-1 border']">
                      {{ item.label }}
                    </button>
                  </div>
                  <div class="pt-3 relative text-right mx-auto text-gray-600">
                    <label class="font-bold" for="">دسته بندی ها</label>
                    <div class="flex items-center">
                      <input @input="getCategories()" v-model="text_search_categories" id="search_category"
                        class="border-2 border-gray-300 bg-white w-full mt-2 h-10 px-5 pr-16 rounded-full text-sm focus:outline-none"
                        type="search" name="search" placeholder="جستجو دسته بندی">
                      <button type="submit" class="absolute right-0 top-6 mt-8 mr-4">
                        <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                          viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;"
                          xml:space="preserve" width="512px" height="512px">
                          <path
                            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                        </svg>
                      </button>
                    </div>
                    <div class="flex flex-wrap mt-3 align-center">
                      <div v-if="categories != null">
                        <button v-for="item in categories" :key="item"
                          @click=" selected_categories.includes(item.id) ? selected_categories.splice(selected_categories.indexOf(item.id), 1) : selected_categories.push(item.id);getData()"
                          :class="[selected_categories.includes(item.id) ? 'bg-indigo-600 text-white' : 'bg-gray-200', 'px-4 text-xs py-2 rounded-xl m-1 border']">
                          {{ item.title }}
                        </button>
                      </div>
                    </div>
                  </div>
                  <div class="pt-3 relative text-right  mx-auto text-gray-600">
                    <label class="font-bold" for="">فروشگاه‌ها</label>
                    <div class="flex items-center">
                      <input @input="getShops()" v-model="text_search_shop" id="search_shop"
                        class="border-2 border-gray-300 bg-white w-full mt-2 h-10 px-5 pr-16 rounded-full text-sm focus:outline-none"
                        type="search" name="search" placeholder="جستجو فروشگاه‌">
                      <button type="submit" class="absolute right-0 top-6 mt-8 mr-4">
                        <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                          xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                          viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;"
                          xml:space="preserve" width="512px" height="512px">
                          <path
                            d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                        </svg>
                      </button>
                    </div>
                    <div class="flex flex-wrap mt-3 align-center">
                      <div v-if="shops != null">
                        <button v-for="item in shops" :key="item.id"
                          @click=" selected_shop == item.id ? selected_shop = null : selected_shop = item.id ; getData()"
                          :class="[selected_shop == item.id ? 'bg-indigo-600 text-white' : 'bg-gray-200', 'px-4 text-xs py-2 rounded-xl m-1 border']">
                          {{ item.name }}
                        </button>
                      </div>
                    </div>
                  </div>

                  <!-- <div class=" ltr mb-6x">
                  <label for="labels-range-input" class="sr-only">Labels range</label>
                  <label class="font-bold flex justify-end mt-3" for="">محدوده قیمت</label>
                  <client-only>
                    <Slider :min="0" :step="1000000" :max="100000000" v-model="price_range" class="mt-12 me-3" />
                  </client-only>
                  <div class="flex justify-between">
                    <span class="text-xs  text-gray-500 mb-10 mt-14">ارزانترین ({{ price_range[0] }} تومان)</span>
                    <span class="text-xs text-gray-500 mb-10 mt-14">گرانترین ({{ price_range[1] }} تومان)</span>
                  </div>
                </div> -->
                </div>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </TransitionRoot>
      <main class="mx-auto max-w-2xl px-4 py-5 lg:max-w-7xl lg:px-3 hidden lg:block">
        <div class="border-b border-gray-200 pb-10">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900">فیلترها</h1>
          <!-- <p class="mt-4 text-base text-gray-500">Checkout out the latest release of Basic Tees, new and improved with four openings!</p> -->
        </div>
        <div class="">
          <aside>

            <div class="hidden lg:block">
              <div class="space-y-10 py-10 divide-y divide-gray-200">
                <div class="flex flex-wrap align-center">
                  <button v-for="item in product_sort" :key="item" @click="selected_sort = item.value;getData()"
                    :class="[selected_sort == item.value ? 'bg-indigo-600 text-white' : 'bg-gray-200', 'px-4 text-xs py-2 rounded-xl m-1 border']">
                    {{ item.label }}
                  </button>
                </div>
                <div class="pt-3 relative mx-auto text-gray-600">
                  <label class="font-bold" for="">دسته بندی ها</label>
                  <div class="flex items-center">
                    <input @input="getCategories()" v-model="text_search_categories" id="search_category"
                      class="border-2 border-gray-300 bg-white w-full mt-2 h-10 px-5 pr-16 rounded-full text-sm focus:outline-none"
                      type="search" name="search" placeholder="جستجو دسته بندی">
                    <button type="submit" class="absolute right-0 top-6 mt-8 mr-4">
                      <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                        viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;"
                        xml:space="preserve" width="512px" height="512px">
                        <path
                          d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                      </svg>
                    </button>
                  </div>
                  <div class="flex flex-wrap mt-3 align-center">
                    <div v-if="categories != null">
                      <button v-for="item in categories" :key="item"
                        @click=" selected_categories.includes(item.id) ? selected_categories.splice(selected_categories.indexOf(item.id), 1) : selected_categories.push(item.id);getData()"
                        :class="[selected_categories.includes(item.id) ? 'bg-indigo-600 text-white' : 'bg-gray-200', 'px-4 text-xs py-2 rounded-xl m-1 border']">
                        {{ item.title }}
                      </button>
                    </div>
                  </div>
                </div>
                <div class="pt-3 relative mx-auto text-gray-600">
                  <label class="font-bold" for="">فروشگاه‌ها</label>
                  <div class="flex items-center">
                    <input @input="getShops()" v-model="text_search_shop" id="search_shop"
                      class="border-2 border-gray-300 bg-white w-full mt-2 h-10 px-5 pr-16 rounded-full text-sm focus:outline-none"
                      type="search" name="search" placeholder="جستجو فروشگاه‌">
                    <button type="submit" class="absolute right-0 top-6 mt-8 mr-4">
                      <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                        viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;"
                        xml:space="preserve" width="512px" height="512px">
                        <path
                          d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                      </svg>
                    </button>
                  </div>
                  <div class="flex flex-wrap mt-3 align-center">
                    <div v-if="shops != null">
                      <button v-for="item in shops" :key="item.id"
                        @click=" selected_shop == item.id ? selected_shop = null : selected_shop = item.id;getData()"
                        :class="[selected_shop == item.id ? 'bg-indigo-600 text-white' : 'bg-gray-200', 'px-4 text-xs py-2 rounded-xl m-1 border']">
                        {{ item.name }}
                      </button>
                    </div>
                  </div>
                </div>

                <!-- <div class=" ltr mb-6x">
                  <label for="labels-range-input" class="sr-only">Labels range</label>
                  <label class="font-bold flex justify-end mt-3" for="">محدوده قیمت</label>
                  <client-only>
                    <Slider :min="0" :step="1000000" :max="100000000" v-model="price_range" class="mt-12 me-3" />
                  </client-only>
                  <div class="flex justify-between">
                    <span class="text-xs  text-gray-500 mb-10 mt-14">ارزانترین ({{ price_range[0] }} تومان)</span>
                    <span class="text-xs text-gray-500 mb-10 mt-14">گرانترین ({{ price_range[1] }} تومان)</span>
                  </div>
                </div> -->
              </div>
            </div>
          </aside>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { apiStore } from '~/store/api';
import Slider from '@vueform/slider'
import {
  Popover,

  TransitionChild,
  TransitionRoot,
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,

} from '@headlessui/vue'
import { XMarkIcon } from '@heroicons/vue/24/outline'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import axios from 'axios'
export default {
  props: ['text', 'page', 'open'],
  emits:["close","get-data-product","loading"],
  components: {
    Slider,

    Popover,
    Dialog,
    DialogPanel,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,


    TransitionChild,
    TransitionRoot,

    XMarkIcon,
  },
  data: () => ({
    loading: true,
    data: {},

    text_search_categories: '',
    categories: null,
    selected_categories: [],

    text_search_shop: '',
    shops: null,
    selected_shop: null,

    mobileFiltersOpen: ref(false),
    product_sort: [
      { value: '-pk', label: 'جدید ترین' },
      { value: 'pk', label: 'قدیمی ترین' },
      // { value: '-like', label: 'محبوب ترین' },
    ],
    selected_sort: '',
  }),
  methods: {
    getData() {
      this.loading = true
      this.$emit("loading",true)
      axios.get(`${apiStore().address}/api/blog/search-blog-for-buyers/?search=${this.text}${this.selected_categories.length > 0 ? '&category=' + this.selected_categories.join('&category=') : ''}&ordering=${this.selected_sort}&shop=${this.selected_shop ? this.selected_shop : ''} `, {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      }).then((response) => {
        this.data = response.data
        this.loading = false
      this.$emit("loading",false)

        this.$emit('get-data-blog', this.data);

      })
    },
    getCategories() {
      this.loading = true
      axios.get(`${apiStore().address}/api/blog/list-category/?search=${this.text_search_categories}`, {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      }).then((response) => {
        this.categories = response.data
        this.loading = false

      })
    },
    getShops() {
      this.loading = true
      axios.get(`${apiStore().address}/api/account/shop-search/?search=${this.text_search_shop}`, {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      }).then((response) => {
        this.shops = response.data
        this.loading = false

      })
    }
  },
  mounted() {
    if (this.$route.query.shop_blog != null) this.selected_shop = this.$route.query.shop_blog

    this.getCategories()
    this.getData()
  },
  watch: {
    text: {
      // the callback will be called immediately after the start of the observation
      immediate: true,
      handler(val, oldVal) {
        if (oldVal != undefined) {
          this.getData()
        }
      }
    },

   
    'open': {
      handler: function (val, oldVal) {
        val == false ? this.$emit('close') : ''
      },
      deep: true
    }
  }
}

</script>