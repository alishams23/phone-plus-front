<template>
  <div class="bg-white">
    <div>
      <!-- Mobile filter dialog -->
       
      <main class="mx-auto max-w-2xl px-4 py-5 lg:max-w-7xl lg:px-3">
        <div class="border-b border-gray-200 pb-10">
          <h1 class="text-4xl font-bold tracking-tight text-gray-900">فیلترها</h1>
          <!-- <p class="mt-4 text-base text-gray-500">Checkout out the latest release of Basic Tees, new and improved with four openings!</p> -->
        </div>
        <div class="">
          <aside>
            <h2 class="sr-only">Filters</h2>
            <button type="button" class="inline-flex items-center lg:hidden" @click="mobileFiltersOpen = true">
              <span class="text-sm font-medium text-gray-700">Filters</span>
           
            </button>
            <div class="hidden lg:block">
              <div class="space-y-10 py-10 divide-y divide-gray-200">
            <div class="flex flex-wrap align-center">
                  <button v-for="item in product_sort" :key="item" @click="selected_sort = item.value;getData()" :class="[selected_sort == item.value ? 'bg-indigo-600 text-white' :'bg-gray-200' , 'px-4 text-xs py-2 rounded-xl m-1 border']">
                    {{ item.label }}
                </button>
            </div>
                <div class="pt-3 relative mx-auto text-gray-600">
                  <label class="font-bold" for="">دسته بندی ها</label>
                  <div class="flex items-center">
                    <input @input="getCategories()" v-model="text_search_categories" id="search_category" class="border-2 border-gray-300 bg-white w-full mt-2 h-10 px-5 pr-16 rounded-full text-sm focus:outline-none"
                      type="search" name="search" placeholder="جستجو دسته بندی">
                    <button type="submit" class="absolute right-0 top-6 mt-8 mr-4">
                      <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                        viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
                        width="512px" height="512px">
                        <path
                          d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                      </svg>
                    </button>
                  </div>
                  <div class="flex flex-wrap mt-3 align-center">
                    <div v-if="categories != null">
                      <button v-for="item in categories" :key="item" @click=" selected_categories.includes(item.id)? selected_categories.splice(selected_categories.indexOf(item.id), 1) :selected_categories.push(item.id) ;getData()" :class="[selected_categories.includes(item.id) ? 'bg-indigo-600 text-white' :'bg-gray-200' , 'px-4 text-xs py-2 rounded-xl m-1 border']">
                        {{ item.title }}
                      </button>
                    </div>
                  </div>
                </div>
                <div class="pt-3 relative mx-auto text-gray-600">
                  <label class="font-bold" for="">فروشگاه‌ها</label>
                  <div class="flex items-center">
                    <input @input="getShops()" v-model="text_search_shop" id="search_shop" class="border-2 border-gray-300 bg-white w-full mt-2 h-10 px-5 pr-16 rounded-full text-sm focus:outline-none"
                      type="search" name="search" placeholder="جستجو فروشگاه‌">
                    <button type="submit" class="absolute right-0 top-6 mt-8 mr-4">
                      <svg class="text-gray-600 h-4 w-4 fill-current" xmlns="http://www.w3.org/2000/svg"
                        xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" id="Capa_1" x="0px" y="0px"
                        viewBox="0 0 56.966 56.966" style="enable-background:new 0 0 56.966 56.966;" xml:space="preserve"
                        width="512px" height="512px">
                        <path
                          d="M55.146,51.887L41.588,37.786c3.486-4.144,5.396-9.358,5.396-14.786c0-12.682-10.318-23-23-23s-23,10.318-23,23  s10.318,23,23,23c4.761,0,9.298-1.436,13.177-4.162l13.661,14.208c0.571,0.593,1.339,0.92,2.162,0.92  c0.779,0,1.518-0.297,2.079-0.837C56.255,54.982,56.293,53.08,55.146,51.887z M23.984,6c9.374,0,17,7.626,17,17s-7.626,17-17,17  s-17-7.626-17-17S14.61,6,23.984,6z" />
                      </svg>
                    </button>
                  </div>
                  <div class="flex flex-wrap mt-3 align-center">
                    <div v-if="shops != null">
                      <button v-for="item in shops" :key="item.id" @click=" selected_shop == item.id ? selected_shop = null : selected_shop =  item.id ; getData()" :class="[selected_shop == item.id ? 'bg-indigo-600 text-white' :'bg-gray-200' , 'px-4 text-xs py-2 rounded-xl m-1 border']">
                        {{ item.name }}
                      </button>
                    </div>
                  </div>
                </div>
                <div class="flex items-center pt-10">
                  <input  v-model="is_discount" @click="is_discount = !is_discount ;getData()" id="checked-checkbox" type="checkbox" value="" class="w-4 h-4 text-black bg-gray-100 border-gray-300 rounded ">
                  <label for="checked-checkbox" class="ms-2 text-sm font-bold text-gray-900 ">دارای تخفیف</label>
              </div>
                <div class=" ltr mb-6x">
                  <label for="labels-range-input" class="sr-only">Labels range</label>
                  <label class="font-bold flex justify-end mt-3" for="">محدوده قیمت</label>
                  <client-only>
                    <Slider :min="0" :step="100000" :max="15000000" v-model="price_range" class="mt-12 me-3" />
                  </client-only>
                  <div class="flex justify-between">
                    <span class="text-xs text-gray-500 mb-10 mt-14">ارزانترین ({{ formatPrice(price_range[0]) }} تومان)</span>
                    <span class="text-xs text-gray-500 mb-10 mt-14">گرانترین ({{ formatPrice(price_range[1]) }} تومان)</span>

                  </div>
                </div>
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
import {  XMarkIcon } from '@heroicons/vue/24/outline'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import axios from 'axios'
export default {
props:['text','page'],
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
    data : {},
    
    text_search_categories : '',
    categories : null,
    selected_categories : [],

    text_search_shop : '',
    shops : null,
    selected_shop : null,
    is_discount: false,
    price_range: [0, 15000000],
    mobileFiltersOpen: ref(false),
    product_sort: [
          { value: '-pk', label: 'جدید ترین' },
          { value: 'pk', label: 'قدیمی ترین' },
          { value: '-price', label: 'گران ترین' },
          { value: 'price', label: 'ارزان ترین' },
          { value: '-rate', label: 'محبوب ترین' },
        ],
    selected_sort:null,
    filters: [
  
     
      {
        id: 'sizes',
        name: 'محدوده قیمت',
        options: [

        ],
      },
    ],
    navigation: [
      { name: 'Home', href: '#', current: true },
      { name: 'Profile', href: '#', current: false },
      { name: 'Resources', href: '#', current: false },
      { name: 'Company Directory', href: '#', current: false },
      { name: 'Openings', href: '#', current: false },
    ],
    userNavigation: [
      { name: 'Your Profile', href: '#' },
      { name: 'Settings', href: '#' },
      { name: 'Sign out', href: '#' },
    ],
  }),
  methods: {
    formatPrice(value) {
      // Assuming `value` is a number
      return new Intl.NumberFormat('fa-IR').format(value);
    },
    getData() {
      this.loading = true
       axios.get(`${apiStore().address}/api/product/digital-products-search-for-buyer/?search=${this.text}${this.selected_categories.length > 0 ? '&category=' + this.selected_categories.join('&category='): '' }&ordering=${this.selected_sort}&min_price=${this.price_range[0]}&max_price=${this.price_range[1]}&shop=${this.selected_shop? this.selected_shop : ''}&is_discount=${this.is_discount} `, {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      }).then((response) => {
        this.data = response.data
        this.loading = false
        this.$emit('get-data-product', this.data);

      })
    },
    getCategories() {
      this.loading = true
      axios.get(`${apiStore().address}/api/product/list-digital-categories/?search=${this.text_search_categories}&is_main_page=${this.text_search_categories == null ?true:''}`, {
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
      axios.get(`${apiStore().address}/api/account/shop-search/?search=${this.text_search_shop }`, {
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
  async mounted() {
    if (this.$route.query.category_digital_product != null) this.selected_categories.push(parseInt(this.$route.query.category_digital_product))
    if (this.$route.query.sort_digital_product != null) this.selected_sort = this.$route.query.sort_digital_product
    if (this.$route.query.is_discount_digital_product != null) this.is_discount = this.$route.query.is_discount_digital_product
     await this.getData()
    await this.getCategories  ()
  },
watch: {
  text: {
    // the callback will be called immediately after the start of the observation
    immediate: true, 
    handler (val, oldVal) {
      this.getData()
    }
  },
 'price_range': {
        handler: function (val, oldVal) {
           this.getData()
        },
        deep: true
    }
}
}

</script>