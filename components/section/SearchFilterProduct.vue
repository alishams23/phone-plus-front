<template>
  <div class="bg-white">
    <div>
      {{ data }}
      <!-- Mobile filter dialog -->
      <TransitionRoot as="template" :show="mobileFiltersOpen">
        <Dialog as="div" class="relative z-40 lg:hidden" @close="mobileFiltersOpen = false">
          <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0"
            enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100"
            leave-to="opacity-0">
            <div class="fixed inset-0 bg-black bg-opacity-25" />
          </TransitionChild>
          <div class="fixed inset-0 z-40 flex">
            <TransitionChild as="template" enter="transition ease-in-out duration-300 transform"
              enter-from="translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform"
              leave-from="translate-x-0" leave-to="translate-x-full">
              <DialogPanel
                class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                <div class="flex items-center justify-between px-4">
                  <h2 class="text-lg font-medium text-gray-900">Filters</h2>
                  <button type="button"
                    class="-mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500"
                    @click="mobileFiltersOpen = false">
                    <span class="sr-only">Close menu</span>
                    <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                  </button>
                </div>

                <!-- Filters -->
                <form class="mt-1">
                  <Disclosure as="div" v-for="section in filters" :key="section.name"
                    class="border-t border-gray-200 pb-4 pt-4" v-slot="{ open }">
                    <fieldset>
                      <legend class="w-full px-2">
                        <DisclosureButton
                          class="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
                          <span class="text-sm font-medium text-gray-900">{{ section.name }}</span>
                          <span class="ml-6 flex h-7 items-center">
                            <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-5 w-5 transform']"
                              aria-hidden="true" />
                          </span>
                        </DisclosureButton>
                      </legend>
                      <DisclosurePanel class="px-4 pb-2 pt-4">
                        <div class="space-y-6">
                          <div v-for="(option, optionIdx) in section.options" :key="option.value"
                            class="flex items-center">
                            <button>{{ option }}</button>
                            sss
                          </div>
                        </div>
                      </DisclosurePanel>
                    </fieldset>
                  </Disclosure>
                </form>
              </DialogPanel>
            </TransitionChild>
          </div>
        </Dialog>
      </TransitionRoot>
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
              <PlusIcon class="ml-1 h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
            </button>
            <div class="hidden lg:block">
              <div class="space-y-10 py-10 divide-y divide-gray-200">
            <div class="flex flex-wrap align-center">
                  <button v-for="item in product_sort" :key="sort" @click="selected_sort = item.value" :class="[selected_sort == item.value ? 'bg-indigo-600 text-white' :'bg-gray-200' , 'px-4 text-xs py-2 rounded-xl m-1 border']">
                    {{ item.label }}
                </button>
            </div>
                <div class="pt-2 relative mx-auto text-gray-600">
                  <label for="">دسته بندی ها</label>
                  <div class="flex items-center">
                    <input @input="getCategories()" v-model="text_search_categories" id="search_category" class="border-2 border-gray-300 bg-white w-full h-10 px-5 pr-16 rounded-full text-sm focus:outline-none"
                      type="search" name="search" placeholder="Search">
                    <button type="submit" class="absolute right-0 top-6 mt-5 mr-4">
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
                      <button v-for="item in categories" :key="sort" @click=" selected_categories.includes(item.id)? selected_categories.splice(selected_categories.indexOf(item.id), 1) :selected_categories.push(item.id) " :class="[selected_categories.includes(item.id) ? 'bg-indigo-600 text-white' :'bg-gray-200' , 'px-4 text-xs py-2 rounded-xl m-1 border']">
                        {{ item.title }}
                      </button>
                    </div>
                  </div>
                </div>
                <div v-for="(section, sectionIdx) in filters" :key="section.name"
                  :class="sectionIdx === 0 ? null : 'pt-10'">
                  <fieldset>
                    <legend class="block text-sm font-med ium text-gray-900">{{ section.name }}</legend>
                    <div class="space-y-3 pt-6">

                      <div v-for="(option, optionIdx) in section.options" :key="option.value" class="flex items-center">

                      
                        <input :id="`${section.id}-${optionIdx}`" :name="`${section.id}[]`" :value="option.value"
                          type="checkbox"
                          class="h-4 w-4 rounded border-gray-300 m-2 text-indigo-600 focus:ring-indigo-500" />
                        <label :for="`${section.id}-${optionIdx}`" class="ml-3 text-sm text-gray-600">{{
                          option.label }}</label>
                      </div>
                    </div>
                  </fieldset>
                </div>
                <div class=" ltr mb-6 ">
                  <label for="labels-range-input" class="sr-only">Labels range</label>
                  <client-only>
                    <Slider v-model="value" class="mb-10" />
                  </client-only>
                  <span class="text-xs  text-gray-500 mb-10 mt-10">ارزانترین (150,000 تومان)</span>
                  <span class="text-xs text-gray-500 mb-10 mt-10">گرانترین (1,150,000 تومان)</span>
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
import { ChevronDownIcon } from '@heroicons/vue/20/solid'
import axios from 'axios'
export default {
props:['text','page'],
  components: {
    Slider,
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
  },
  data: () => ({
    loading: true,
    text_search_categories : '',
    data : {},
    value: [10, 30],
    selected_categories : [],
    categories : null,
    mobileFiltersOpen: ref(false),
    product_sort: [
          { value: '-pk', label: 'جدید ترین' },
          { value: 'pk', label: 'قدیمی ترین' },
          { value: '-price', label: 'گران ترین' },
          { value: 'price', label: 'ارزان ترین' },
          { value: '-rate', label: 'محبوب ترین' },
        ],
    category_sort: [
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
    getData() {
      this.loading = true
       axios.get(`http://192.168.1.109:8000/api/product/products-search-for-buyer/?search=${this.text}&category=${this.text_search_categories.length > 0 ? this.text_search_categories.join('&category='): '' }`, {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      }).then((response) => {
        this.data = response.data
        this.loading = false

      })
    },
    getCategories() {
      this.loading = true
      axios.get(`http://192.168.1.109:8000/api/product/ListCategories/?search=${this.text_search_categories}&is_main_page=${this.text_search_categories == null ?'':this.selected_categories}`, {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      }).then((response) => {
        this.categories = response.data
        this.loading = false

      })
    }
  },
  mounted() {
    this.getCategories  ()
  },
watch: {
  text: {
    // the callback will be called immediately after the start of the observation
    immediate: true, 
    handler (val, oldVal) {
      this.getData()
    }
  }
}
}

</script>