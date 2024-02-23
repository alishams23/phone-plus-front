
<template>
  <div class="min-h-full">
    <Popover as="header" class="bg-indigo-600 pb-24" v-slot="{ open }">
      <div class="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:max-w-7xl lg:px-8">
        <!-- Search -->

        <div class="relative w-full flex justify-center">
          <div class="relative w-1/2  ">
            <div class="flex p-2 bg-indigo-700 rounded-[28px] ">
              <div class=" flex-auto">
                <input type="search" id="search-dropdown" v-model="searchQuery" @input="filterOptions" class="text-white block p-4 w-full z-20 text-sm text-indigo-500 text-right rtl pr-5
                                 rounded-sm rounded-e-[20px]  " placeholder="جستجو بین محصولات  هزاران فروشگاه ..."
                  required>
              </div>
              <div class=" pl-1">
                <button type="submit"
                  class=" pl-9 pr-14 top-0 end-0 h-full p-4 text-sm w-10 font-medium  text-white bg-orange-600 rounded-sm rounded-e-[20px]">
                  <svg class="w-4 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                  <span class="sr-only">Search</span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Popover>
    
    

    <main class="-mt-24 pb-8">
      <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
        <h1 class="sr-only">Page title</h1>
        <!-- Main 3 column grid -->
        <div class="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
          <!-- Left column -->
          <div class="grid grid-cols-1 gap-4 lg:col-span-2">
        <div>
          <div class="hidden sm:block">
            <nav class="isolate flex divide-x divide-gray-200 rounded-lg shadow" aria-label="Tabs">
              <a v-for="(tab, tabIdx) in tabs" :key="tab.name" :href="tab.href" :class="[tab.current ? 'text-gray-900 bg-gray-100' : 'bg-white text-gray-500 hover:text-gray-700', tabIdx === 0 ? 'rounded-l-lg' : '', tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '', 'group relative min-w-0 flex-1 overflow-hidden  py-4 px-4 text-center text-sm font-medium hover:bg-gray-50 focus:z-10']" :aria-current="tab.current ? 'page' : undefined">
                <span>{{ tab.name }}</span>
                <span aria-hidden="true" :class="[tab.current ? 'bg-indigo-800' : 'bg-transparent', 'absolute inset-x-0 bottom-0 h-0.5']" />
              </a>
            </nav>
          </div>
        </div>
            <section aria-labelledby="section-1-title">
              <h2 class="sr-only" id="section-1-title">Section title</h2>
              <div class="overflow-hidden rounded-lg bg-white shadow">
                <!-- Your content -->
                <div class="p-6">
                  <!-- Your content -->

                  <div class="text-gray-800 font-bold text-xl text-right px-4 pt-4">
                    محصولات
                  </div>

                  <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 relative isolate ">
                    <div v-for="item in data" :key="item" class="group relative">
                      <Product :data="item" width=" " class=" text-center my-2 " />
                    </div>
                    <div class="absolute inset-0  bg-gradient-to-t  from-white from-10% via-white/30" />
                  </div>
                  <div class="border-t-2 mt-8  py-1">
                  </div>
                  <div class="flex items-center justify-center " style="margin-top:-35px">
                    <div class="border-2 text-sm  bg-white rounded-full px-10 py-2 mb-5">
                      بیشتر
                    </div>
                  </div>


                  <div class="text-gray-800 font-bold text-xl text-right px-4 pt-20">
                    محصولات دیجیتال
                  </div>

                  <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3  relative isolate ">
                    <div v-for="item in data" :key="item" class="group relative">
                      <DigitalProduct :data="item" width=" " class=" text-center  " />
                    </div>
                    <div class="absolute inset-0  bg-gradient-to-t  from-white from-10% via-white/30" />

                  </div>
                  <div class="border-t-2 mt-8  py-1">
                  </div>
                  <div class="flex items-center justify-center " style="margin-top:-35px">
                    <div class="border-2 text-sm  bg-white rounded-full px-10 py-2 mb-5">
                      بیشتر
                    </div>
                  </div>


                  <div class="text-gray-800 font-bold text-xl text-right px-4 pt-20">
                    وبلاگ
                  </div>

                  <div class="mt-6 grid grid-cols-1  relative isolate">
                    <div v-for="item in data" :key="item" class="group px-5 relative">
                      <Blog :data="item" width=" " class=" text-center py-3 " />
                    </div>
                    <div class="absolute z-[80] inset-0 mb-[-20px] bg-gradient-to-t  from-white from-10% via-white/30" />

                  </div>

                  <div class="border-t-2 mt-14  py-1">
                  </div>
                  <div class="flex items-center justify-center " style="margin-top:-35px">
                    <div class="border-2 text-sm  bg-white rounded-full px-10 py-2 mb-5">
                      بیشتر
                    </div>
                  </div>


                </div>
              </div>
            </section>
          </div>
          <!-- Right column -->
          <div class="grid grid-cols-1 gap-4">
            <section aria-labelledby="section-2-title">
              <h2 class="sr-only" id="section-2-title">Section title</h2>
              <div class="overflow-hidden rounded-lg bg-white shadow rtl">
                <div class="p-6">
                  <!-- Your content -->
                  <SearchFilterProduct/>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </main>
  </div>
</template>

<script>
import { PaperClipIcon } from '@heroicons/vue/20/solid'
import Slider from '@vueform/slider'
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
  Dialog,
  DialogPanel,
  Disclosure,
  DisclosureButton,
  DisclosurePanel,

} from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import Product from "@/components/shared/Product.vue"
import DigitalProduct from "@/components/shared/DigitalProduct.vue"
import SearchFilterProduct from "@/components/section/SearchFilterProduct.vue"
import Blog_test from "@/components/shared/Blog_test.vue"
import Blog from '~/components/shared/Blog.vue'
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

export default {
  components: {
    Slider,
    SearchFilterProduct,
    Product,
    Blog,
    Blog_test,
    DigitalProduct,
    PaperClipIcon,
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
    Bars3Icon,
    BellIcon,
    XMarkIcon,
    MagnifyingGlassIcon,
  },
  data: () => ({
    value: [10, 30],
    show_products_list: [],
    show_products: false,
    show_digital_products_list: [],
    show_digital_products: false,
    show_blogs_list: [],
    show_blogs: false,
    mobileFiltersOpen: ref(false),
    selectedTab: 'products',
    data: [
    ],
    tabs : [
      { name: 'محصولات دیجیتال', href: '#', current: true },
      { name: 'محصولات', href: '#', current: false },
      { name: 'مقاله ها', href: '#', current: false },
    ],
    filters: [
      {
        id: 'color',
        name: 'دسته بندی‌ها',
        options: [
          { value: 'white', label: 'محصولات' },
          { value: 'beige', label: 'محصولات دیجیتال' },
          { value: 'blue', label: 'مقاله‌ها' },
        ],
      },
      {
        id: 'category',
        name: 'رنگ بندی',
        options: [
          { value: 'new-arrivals', label: 'قرمز' },
          { value: 'tees', label: 'آبی' },
          { value: 'crewnecks', label: 'سبز' },
          { value: 'sweatshirts', label: 'زرد' },
          { value: 'pants-shorts', label: 'بنفش' },
        ],
      },
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
    blogs: [

      // More posts...
    ],
    products: [

    ],
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: 'start',
      },
    },
  }),
  mounted() {
    this.show_products_list = this.products.slice(0, 3);
    this.show_digital_products_list = this.products.slice(0, 3);
    this.show_blogs_list = this.blogs.slice(0, 3);
  },
  computed: {
    filteredData() {
      // This computed property filters the data based on the selected country.
      // Adjust the logic according to your needs.
      if (this.selectedCountry === 'Canada') {
        return this.data.filter((item) => item.country === 'Canada');
      } else {
        return this.data; // Return all data if no specific filter is applied
      }
    },
  },
}

</script>

<style src="@vueform/slider/themes/default.css" lang="scss">:root {
  --slider-connect-bg: #573bf6;
  --slider-tooltip-bg: #7d3bf6;
  --slider-handle-ring-color: #3B82F630;
}</style>