
<template>
  <div>

  </div>
  <div class="min-h-full ">

    <Popover as="header" class=" pb-24" v-slot="{ open }">
      <div class="  relative  ">
        <!-- <div class="bg rounded-b-[50px] "></div>
        <div class="bg bg2 rounded-b-[50px]"></div>
        <div class="bg bg3 rounded-b-[50px]"></div> -->
        <img src="/images/header.avif" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover " />
        <img class="absolute backdrop-blur-md overflow-hidden inset-0 -z-10  h-full w-full  " />
        <div class="absolute inset-x-0 -top-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
          <div
            class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div>
        <div class="mx-5 lg:mx-auto mb-14  max-w-2xl pb-32 pt-28 sm:py-48 lg:pt-[1rem] lg:pb-[12rem]">
          <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          </div>
          <form>
            <div class="flex">
              <div class="relative w-full">
                <input type="search" id="search-dropdown" v-model="text"
                  class=" block p-4 w-full z-20 text-sm text-indigo-900 bg-white text-right rtl pr-20  rounded-[20px] "
                  placeholder="جستجو بین محصولات  هزاران فروشگاه ..." required>

                <button type="submit"
                  class="absolute  top-0 end-0 p-4 text-sm font-medium h-full text-white bg-blue-700  rounded-e-[20px]">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                    viewBox="0 0 20 20">
                    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
                  </svg>
                  <span class="sr-only">Search</span>
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
      <div class="mt-[2px] lg:mt-[-30px]">
        <svg id="Layer_2" class="w-full" fill="white" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 695.06 35.8">

          <g id="Layer_2-2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1-2">
              <path class="cls-1" d="M695.06,0V35.8H0V0S194.27,12.75,356.77,12.75,695.06,0,695.06,0Z" />
            </g>
          </g>
        </svg>
      </div>
      
    </Popover>
    <div class="mt-[-270px] bg-white">
    </div>



    <main class="-mt-20 lg:-mt-24 pb-8">
      <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">

        <!-- Main 3 column grid -->
        <div class="grid grid-cols-1 items-start justify-center gap-4 lg:grid-cols-3 lg:gap-8">
          <!-- Left column -->
          <div class="grid grid-cols-1 gap-4 " :class="selected_tab == 3 ? 'lg:col-span-3' : 'lg:col-span-2'">
            <div>
              <div class="">
                <nav class="cursor-pointer backdrop-blur-sm isolate flex flex-col items-end rounded-lg shadow"
                  aria-label="Tabs">
                  <div class="flex items-center w-full">
                    <a v-for="(tab, tabIdx) in tabs" :key="tab.name" @click="selected_tab = tab.id"
                      :class="[tab.id == selected_tab ? 'text-gray-900 bg-gray-100' : 'bg-white text-gray-500 hover:text-gray-700', tabIdx === 0 ? 'rounded-l-lg' : '', tabIdx === tabs.length - 1 ? 'rounded-r-lg' : '', 'group relative min-w-0 flex-1 overflow-hidden  py-4 px-5 text-center text-xs lg:text-sm h-16 flex items-center justify-center font-medium hover:bg-gray-50 focus:z-10']"
                      :aria-current="tab.current ? 'page' : undefined">
                      <span>{{ tab.name }}</span>
                      <span aria-hidden="true"
                        :class="[tab.current ? 'bg-indigo-800' : 'bg-transparent', 'absolute inset-x-0 bottom-0 h-0.5']" />
                    </a>
                  </div>
                  <div :class="selected_tab==3? 'hidden':''" class="absolute mt-24 lg:hidden my-3 me-5 p-2 shadow-lg bg-white rounded-full">
                    <AdjustmentsHorizontalIcon @click="selected_tab == 0 ? open_filter_product = true :selected_tab == 1 ? open_filter_digitalProduct = true :selected_tab == 2 ? open_filter_blog = true :''" class="w-5 h-5 text-gray-900" />
                  </div>
                </nav>
              </div>
              
            </div>
            <section aria-labelledby="section-1-title">
              <h2 class="sr-only" id="section-1-title">Section title</h2>
              <div class="overflow-hidden rounded-lg bg-white shadow">
                <!-- Your content -->
                <div class="p-6">
                  <!-- Your content -->

                  <div v-if="selected_tab == 0">
                    <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 relative isolate ">
                      <div v-for="item in products" :key="item" class="group my-2  relative">
                        <Product :data="item" width=" " class=" text-center " />
                      </div>
                    </div>

                    <div class="flex m-4 justify-center mt-10" v-if="false">
                      <!-- Previous Button -->
                      <a href="#"
                        class="flex items-center justify-center  px-5 h-9 me-3 text-sm font-medium text-gray-300 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 ">
                        <svg class="w-3.5 h-3.5 me-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                          fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M13 5H1m0 0 4 4M1 5l4-4" />
                        </svg>
                        قبلی
                      </a>
                      <a href="#"
                        class="flex items-center justify-center  px-5 h-9 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 ">
                        بعدی
                        <svg class="w-3.5 h-3.5 ms-2 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
                          fill="none" viewBox="0 0 14 10">
                          <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                            d="M1 5h12m0 0L9 1m4 4L9 9" />
                        </svg>
                      </a>
                    </div>



                  </div>
                  <!-- <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 relative isolate ">
                      <div v-for="item in products" :key="item" class="group relative">
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
                  </div> -->



                  <div v-if="selected_tab == 1">
                    <div v-if="digitalProducts.length > 0">
                      <div class="mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 relative isolate ">
                        <div v-for="item in digitalProducts" :key="item" class="group my-2  relative">
                          <DigitalProduct :data="item" width=" " class=" text-center " />
                        </div>
                      </div>
                    </div>
                    <div v-else class="container rtl px-10 mt-6">
                      <div class="bg-indigo-100 border-r-4 border-indigo-500 rounded-lg text-indigo-700 p-4" role="alert">
                        <p class="font-bold">محصولی یافت نشد</p>
                      </div>
                    </div>
                  </div>

                  <div v-if="selected_tab == 2">

                    <div v-if="blogs.length > 0">
                      <div class="mt-6  ">
                        <div v-for="item in blogs" :key="item" class="group my-6  ">
                          <Blog :blog="item" width=" " class=" text-center " />
                        </div>
                      </div>

                    </div>
                    <div v-else class="container rtl px-10 mt-6">
                      <div class="bg-indigo-100 border-r-4 border-indigo-500 rounded-lg text-indigo-700 p-4" role="alert">
                        <p class="font-bold">مقاله‌ای یافت نشد</p>
                      </div>
                    </div>
</div>
                    <div v-if="selected_tab == 3">
                      <div class="rtl font-bold text-2xl px-10 ">محصولات</div>
                      <div v-if="products.length > 0">
                        <div class="pb-7 mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 relative isolate ">
                          <div v-for="item in products" :key="item" class="group py-3 relative">
                            <Product :data="item" width=" " class=" text-center my-2  " />
                          </div>
                        </div>
                        <div class="border-t-2 mt-8  py-1">
                        </div>
                        <div class=" flex items-center justify-center " style="margin-top:-35px">
                          <div @click="selected_tab = 0"
                            class=" cursor-pointer border-2 text-sm  bg-white rounded-full px-10 py-2 mb-5">
                            بیشتر
                          </div>
                        </div>
                      </div>
                      <div v-else class="container rtl px-10 mt-6">
                        <div class="bg-indigo-100 border-r-4 border-indigo-500 rounded-lg text-indigo-700 p-4"
                          role="alert">
                          <p class="font-bold">محصولی یافت نشد</p>
                        </div>
                      </div>
                      <div class="rtl font-bold text-2xl px-10 mt-20">محصولات دیجیتال</div>
                      <div v-if="digitalProducts.length > 0">
                        <div class="pb-7 mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 relative isolate ">
                          <div v-for="item in digitalProducts" :key="item" class="group py-3 relative">
                            <DigitalProduct :data="item" width=" " class=" text-center my-2  " />
                          </div>
                        </div>
                        <div class="border-t-2 mt-8  py-1">
                        </div>
                        <div class=" flex items-center justify-center " style="margin-top:-35px">
                          <div @click="selected_tab = 1"
                            class=" cursor-pointer border-2 text-sm  bg-white rounded-full px-10 py-2 mb-5">
                            بیشتر
                          </div>
                        </div>
                      </div>
                      <div v-else class="container rtl px-10 mt-6">
                        <div class="bg-indigo-100 border-r-4 border-indigo-500 rounded-lg text-indigo-700 p-4"
                          role="alert">
                          <p class="font-bold">محصول دیجیتالی یافت نشد</p>
                        </div>
                      </div>
                      <div class="rtl font-bold text-2xl px-10 mt-20">مقاله‌ها</div>
                      <div v-if="blogs.length > 0">
                        <div class="pb-7 mt-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-10 relative isolate ">
                          <div v-for="item in blogs" :key="item" class="group py-3 relative">
                            <Blog :blog="item" width=" " class=" text-center my-2  " />
                          </div>
                        </div>
                        <div class="border-t-2 mt-8  py-1">
                        </div>
                        <div class=" flex items-center justify-center " style="margin-top:-35px">
                          <div @click="selected_tab = 2"
                            class=" cursor-pointer border-2 text-sm  bg-white rounded-full px-10 py-2 mb-5">
                            بیشتر
                          </div>
                        </div>
                      </div>

                      <div v-else class="container rtl px-10 mt-6">
                        <div class="bg-indigo-100 border-r-4 border-indigo-500 rounded-lg text-indigo-700 p-4"
                          role="alert">
                          <p class="font-bold">مقاله‌ای یافت نشد</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
           
            </section>
          </div>
          <!-- Right column -->
          <div class="grid grid-cols-1 gap-4" v-show="selected_tab != 3">
            <section aria-labelledby="section-2-title">
              <h2 class="sr-only" id="section-2-title">Section title</h2>
              <div class="overflow-hidden rounded-lg bg-white shadow rtl">
                <div class="p-6">
                  <!-- Your content -->

                  <div v-show="selected_tab == 0">
                    <SearchFilterProduct :open="open_filter_product" @close="() => {open_filter_product = false}" :text="text" @get-data-product="(data) => { this.products = data.results }"
                      :page="1" />
                  </div>
                  <div v-show="selected_tab == 1">
                    <SearchFilterDigitalProduct :open="open_filter_digitalProduct" @close="() => {open_filter_digitalProduct = false}" :text="text"
                      @get-data-product="(data) => { this.digitalProducts = data.results }" :page="1" />
                  </div>
                  <div v-show="selected_tab == 2">
                    <SearchFilterBlog :open="open_filter_blog" @close="() => {open_filter_blog = false}" :text="text" @get-data-blog="(data) => { this.blogs = data.results }" :page="1" />
                  </div>
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
import SearchFilterProduct from "@/components/section/filters/SearchFilterProduct.vue"
import SearchFilterDigitalProduct from "@/components/section/filters/SearchFilterDigitalProduct.vue"
import SearchFilterBlog from "@/components/section/filters/SearchFilterBlog.vue"
import Blog from '~/components/shared/Blog.vue'
import { ChevronDownIcon, AdjustmentsHorizontalIcon } from '@heroicons/vue/20/solid'

export default {
  components: {
    Slider,
    SearchFilterProduct,
    SearchFilterDigitalProduct,
    SearchFilterBlog,
    Product,
    Blog,
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
    AdjustmentsHorizontalIcon
  },
  data: () => ({
    text: '',
    selected_tab: 0,
    products: [],
    digitalProducts: [],
    blogs: [],
    data: [],
    open_filter_product:false , 
    open_filter_digitalProduct:false , 
    open_filter_blog:false , 
    tabs: [
      { name: 'محصولات', href: '#', id: 0 },
      { name: 'محصولات دیجیتال', href: '#', id: 1 },
      { name: 'مقاله ها', href: '#', id: 2 },
      { name: 'همه', href: '#', id: 3 },
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
    if (this.$route.query.search != null) this.text = this.$route.query.search
    if (this.$route.query.tab != null) this.selected_tab = parseInt(this.$route.query.tab)

  },

}

</script>

<style src="@vueform/slider/themes/default.css" lang="scss">:root {
  --slider-connect-bg: #573bf6;
  --slider-tooltip-bg: #7d3bf6;
  --slider-handle-ring-color: #3B82F630;
}</style>