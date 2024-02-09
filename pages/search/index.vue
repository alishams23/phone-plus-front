
<template>
    <div class="min-h-full">
    <Popover as="header" class="bg-indigo-600 pb-24" v-slot="{ open }">
        <div class="mx-auto max-w-3xl px-4 py-8 sm:px-6 lg:max-w-7xl lg:px-8">
            <!-- Search -->
            
            <div class="relative w-full flex justify-center">
                <div class="relative w-1/2  ">
                    <div class="flex p-2 bg-indigo-700 rounded-[28px] ">
                        <div class=" flex-auto">
                            <input type="search" id="search-dropdown" v-model="searchQuery" @input="filterOptions"
                                class="text-white block p-4 w-full z-20 text-sm text-indigo-900 text-right rtl pr-5
                                 rounded-sm rounded-e-[20px]  "
                                placeholder="جستجو بین محصولات  هزاران فروشگاه ..." required>
                        </div>
                        <div class=" pl-1">
                            <button type="submit"
                                class=" pl-9 pr-14 top-0 end-0 h-full p-4 text-sm w-10 font-medium  text-white bg-yellow-600 rounded-sm rounded-e-[20px]">
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
                    <section aria-labelledby="section-1-title">
                        <h2 class="sr-only" id="section-1-title">Section title</h2>
                        <div class="overflow-hidden rounded-lg bg-white shadow">
                        <!-- Your content -->
                            <div>
                                <div class="flex pt-20 pb-10 justify-between items-center">
                                    <div class="rtl px-3">
                                        <!-- <a href="#" class="text-black rtl  ">
                                            بیشتر
                                            <span aria-hidden="true" class="px-3 "> &larr;</span>
                                        </a> -->
                                    </div>
                                    <div class="text-black font-bold text-xl text-right px-4 ">
                                        محصولات
                                    </div>
                                </div>
                                <div class="p-6 grid grid-cols-3 gap-4 ">
                                    <div v-for="product in show_products_list" :key="product" class="group relative">
                                        <Product :data="product" width=" " class=" text-center  "/>
                                    </div>
                                </div>
                                <div v-if="!show_products" class="flex items-center justify-center " style="margin-top:-35px">
                                    <div @click="show_products_list = products.slice(0,9), show_products = !show_products" class="border-2 bg-white rounded-full px-10 py-3 mb-5">
                                        بیشتر
                                    </div>
                                </div>
                                <div v-else class="flex items-center justify-center  " style="margin-top:-35px">
                                    <div @click="show_products_list = products.slice(0,3), show_products = !show_products" class="border-2 bg-white rounded-full px-10 py-3 mb-5">
                                        بستن
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="flex pt-20 pb-10 justify-between items-center">
                                    <div class="rtl px-3">
                                        <!-- <a href="#" class="text-black rtl  ">
                                            بیشتر
                                            <span aria-hidden="true" class="px-3 "> &larr;</span>
                                        </a> -->
                                    </div>
                                    <div class="text-black font-bold text-xl text-right px-4 ">
                                        محصولات دیجیتال
                                    </div>
                                </div>
                                <div class="p-6 grid grid-cols-3 gap-4 ">
                                    <div v-for="digital_product in show_digital_products_list" :key="digital_product" class="group relative">
                                        <Product :data="digital_product" width=" " class=" text-center  "/>
                                    </div>
                                </div>
                                <div v-if="!show_digital_products" class="flex items-center justify-center " style="margin-top:-35px">
                                    <div @click="show_digital_products_list = products.slice(0,9), show_digital_products = !show_digital_products" class="border-2 bg-white rounded-full px-10 py-3 mb-5">
                                        بیشتر
                                    </div>
                                </div>
                                <div v-else class="flex items-center justify-center  " style="margin-top:-35px">
                                    <div @click="show_digital_products_list = products.slice(0,3), show_digital_products = !show_digital_products" class="border-2 bg-white rounded-full px-10 py-3 mb-5">
                                        بستن
                                    </div>
                                </div>
                            </div>
                            <div>
                                <div class="flex pt-20 pb-10 justify-between items-center">
                                    <div class="rtl px-3">
                                        <!-- <a href="#" class="text-black rtl  ">
                                            بیشتر
                                            <span aria-hidden="true" class="px-3 "> &larr;</span>
                                        </a> -->
                                    </div>
                                    <div class="text-black font-bold text-xl text-right px-4 ">
                                        مقاله‌ها
                                    </div>
                                </div>
                                <div class="p-6 grid grid-cols-1 gap-4 ">
                                    <div v-for="blog in show_blogs_list" :key="blog" class="group relative">
                                        <Blog />
                                    </div>
                                </div>
                                <div v-if="!show_blogs" class="flex pt-8 items-center justify-center " style="margin-top:-35px">
                                    <div @click="show_blogs_list = blogs.slice(0,9), show_blogs = !show_blogs" class="border-2 bg-white rounded-full px-10 py-3 mb-5">
                                        بیشتر
                                    </div>
                                </div>
                                <div v-else class="flex pt-8 items-center justify-center  " style="margin-top:-35px">
                                    <div @click="show_blogs_list = blogs.slice(0,3), show_blogs = !show_blogs" class="border-2 bg-white rounded-full px-10 py-3 mb-5">
                                        بستن
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
                            <div class="bg-white">
                                <div>
                                  <!-- Mobile filter dialog -->
                                  <TransitionRoot as="template" :show="mobileFiltersOpen">
                                    <Dialog as="div" class="relative z-40 lg:hidden" @close="mobileFiltersOpen = false">
                                      <TransitionChild as="template" enter="transition-opacity ease-linear duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="transition-opacity ease-linear duration-300" leave-from="opacity-100" leave-to="opacity-0">
                                        <div class="fixed inset-0 bg-black bg-opacity-25" />
                                      </TransitionChild>
                            
                                      <div class="fixed inset-0 z-40 flex">
                                        <TransitionChild as="template" enter="transition ease-in-out duration-300 transform" enter-from="translate-x-full" enter-to="translate-x-0" leave="transition ease-in-out duration-300 transform" leave-from="translate-x-0" leave-to="translate-x-full">
                                          <DialogPanel class="relative ml-auto flex h-full w-full max-w-xs flex-col overflow-y-auto bg-white py-4 pb-6 shadow-xl">
                                            <div class="flex items-center justify-between px-4">
                                              <h2 class="text-lg font-medium text-gray-900">Filters</h2>
                                              <button type="button" class="-mr-2 flex h-10 w-10 items-center justify-center p-2 text-gray-400 hover:text-gray-500" @click="mobileFiltersOpen = false">
                                                <span class="sr-only">Close menu</span>
                                                <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                                              </button>
                                            </div>
                            
                                            <!-- Filters -->
                                            <form class="mt-1">
                                              <Disclosure as="div" v-for="section in filters" :key="section.name" class="border-t border-gray-200 pb-4 pt-4" v-slot="{ open }">
                                                <fieldset>
                                                  <legend class="w-full px-2">
                                                    <DisclosureButton class="flex w-full items-center justify-between p-2 text-gray-400 hover:text-gray-500">
                                                      <span class="text-sm font-medium text-gray-900">{{ section.name }}</span>
                                                      <span class="ml-6 flex h-7 items-center">
                                                        <ChevronDownIcon :class="[open ? '-rotate-180' : 'rotate-0', 'h-5 w-5 transform']" aria-hidden="true" />
                                                      </span>
                                                    </DisclosureButton>
                                                  </legend>
                                                  <DisclosurePanel class="px-4 pb-2 pt-4">
                                                    <div class="space-y-6">
                                                      <div v-for="(option, optionIdx) in section.options" :key="option.value" class="flex items-center">
                                                        <input :id="`${section.id}-${optionIdx}-mobile`" :name="`${section.id}[]`" :value="option.value" type="checkbox" class="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" />
                                                        <label :for="`${section.id}-${optionIdx}-mobile`" class="ml-3 text-sm text-gray-500">{{ option.label }}</label>
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
                            
                                  <main class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
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
                                          <form class="space-y-10 divide-y divide-gray-200">
                                            <div v-for="(section, sectionIdx) in filters" :key="section.name" :class="sectionIdx === 0 ? null : 'pt-10'">
                                              <fieldset>
                                                <legend class="block text-sm font-medium text-gray-900">{{ section.name }}</legend>
                                                <div class="space-y-3 pt-6">
                                                  <div v-for="(option, optionIdx) in section.options" :key="option.value" class="flex items-center">
                                                    <input :id="`${section.id}-${optionIdx}`" :name="`${section.id}[]`" :value="option.value" type="checkbox" class="h-4 w-4 rounded border-gray-300 m-2 text-indigo-600 focus:ring-indigo-500" />
                                                    <label :for="`${section.id}-${optionIdx}`" class="ml-3 text-sm text-gray-600">{{ option.label }}</label>
                                                  </div>
                                                </div>
                                              </fieldset>
                                            </div>
                                                  <div class="relative ltr mb-6">
                                                    <label for="labels-range-input" class="sr-only">Labels range</label>
                                                    <input id="labels-range-input" type="range" value="1000" min="100" max="1500" class="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer ">
                                                    <span class="text-xs  text-gray-500 absolute start-0 -bottom-6">ارزانترین (150,000 تومان)</span>
                                                    <span class="text-xs text-gray-500 absolute end-0 -bottom-6">گرانترین (1,150,000 تومان)</span>
                                                </div>
                                          </form>
                                        </div>
                                      </aside>
                            
                                     
                                    </div>
                                  </main>
                                </div>
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
import Blog_test from "@/components/shared/Blog_test.vue"
import Blog from '~/components/shared/Blog.vue' 
import { ChevronDownIcon } from '@heroicons/vue/20/solid'

export default {
    components: { 
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
    show_products_list : [],
    show_products : false,
    show_digital_products_list : [],
    show_digital_products : false,
    show_blogs_list : [],
    show_blogs : false,
    mobileFiltersOpen : ref(false),
    selectedTab: 'products',
    filters : [
    {
        id: 'color',
        name: 'دسته بندی‌ها',
        options: [
        { value: 'white', label: 'محصولات دیجیتال' },
        { value: 'beige', label: 'محصولات' },
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
    navigation : [
        { name: 'Home', href: '#', current: true },
        { name: 'Profile', href: '#', current: false },
        { name: 'Resources', href: '#', current: false },
        { name: 'Company Directory', href: '#', current: false },
        { name: 'Openings', href: '#', current: false },
    ],
    userNavigation : [
        { name: 'Your Profile', href: '#' },
        { name: 'Settings', href: '#' },
        { name: 'Sign out', href: '#' },
    ],
    blogs: [
      {
        id: 1,
        title:'تکنولوژی‌های نوین در گوشی‌های هوشمند: چهارچوب آینده',
        href: '#',
        description:
         'این مقاله به بررسی تکنولوژی‌های نوینی می‌پردازد که در آینده گوشی‌های هوشمند ممکن است مورد استفاده قرار گیرند. از تازه‌ترین پیشرفت‌های صفحه نمایش و دوربین‌ها تا چگونگی اتصال گوشی به اینترنت اشیاء، این متن شما را با آینده گوشی‌های هوشمند آشنا می‌کند',
        imageUrl:
          '/images/blog/1.jpg',
        date: '1402/06/04',
        datetime: '2020-03-16',
        category: { title: 'تکنولوژی', href: '#' },
        author: {
          name: 'علی صالحی',
          role: 'نویسنده',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 1,
        title: 'تاریخچه و تکامل گوشی‌های هوشمند: از نوکیا تا آیفون ',
        href: '#',
        description:
         'این متن تاریخچه تکامل گوشی‌های هوشمند از دهه ۱۹۹۰ تا به امروز را بررسی می‌کند. از ابتدای این صنعت با نوکیا و سایر شرکت‌های پیشرو تا محبوبیت بی‌پایان آیفون و سامسونگ، شما با تغییرات اساسی در دنیای گوشی‌های هوشمند آشنا خواهید شد',
        imageUrl:
        '/images/blog/2.jpg',

        date: '1402/05/23',
        datetime: '2020-03-16',
        category: { title: 'تکنولوژی', href: '#' },
        author: {
          name: 'علی شمس',
          role: 'نویسنده',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 1,
        title: 'نکات مهم در انتخاب گوشی هوشمند: راهنمایی برای خرید کامل',
        href: '#',
        description:
          'خرید یک گوشی هوشمند ممکن است تصمیم مهمی باشد، و این مقاله به شما راهنمایی‌هایی در انتخاب گوشی مناسب بر اساس نیازها و بودجه‌تان ارائه می‌دهد. از مشخص کردن نیازهای خود تا بررسی مشخصات فنی و تفاوت‌های میانبرندی، این متن به شما کمک می‌کند تا بهترین تصمیم را بگیرید',
        imageUrl:
        '/images/blog/3.jpg',

        date: '1402/05/05',
        datetime: '2020-03-16',
        category: { title: 'تکنولوژی', href: '#' },
        author: {
          name: 'سینا آزادفر',
          role: 'نویسنده',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },{
        id: 1,
        title: 'نکات مهم در انتخاب گوشی هوشمند: راهنمایی برای خرید کامل',
        href: '#',
        description:
          'خرید یک گوشی هوشمند ممکن است تصمیم مهمی باشد، و این مقاله به شما راهنمایی‌هایی در انتخاب گوشی مناسب بر اساس نیازها و بودجه‌تان ارائه می‌دهد. از مشخص کردن نیازهای خود تا بررسی مشخصات فنی و تفاوت‌های میانبرندی، این متن به شما کمک می‌کند تا بهترین تصمیم را بگیرید',
        imageUrl:
        '/images/blog/3.jpg',

        date: '1402/05/05',
        datetime: '2020-03-16',
        category: { title: 'تکنولوژی', href: '#' },
        author: {
          name: 'سینا آزادفر',
          role: 'نویسنده',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      // More posts...
    ],
    products: [
        {
        image: '/images/2.jpeg',
        title: 'samsung'
        , price: 1000000
        , percent: 10
        },
        {
        image: '/images/3.jpg',
        title: 'ایفون ۱۴'
        , price: 1000000
        , percent: 10

        },
        {
        image: '/images/6.jpg',
        title: 'ایرپاد'
        , price: 1000000
        , percent: 0
    

        },
        {
        image: '/images/4.jpg',
        title: 'مک بوک'
        , price: 1000000
        , percent: 10

        },
        {
        image: '/images/5.jpg',
        title: 'هدفون'
        , price: 1000000
        , percent: 10

        },
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

<style scoped>
.carousel__slide {
    padding: 5px;
}

.carousel__viewport {
    perspective: 2000px;
}

.carousel__track {
    transform-style: preserve-3d;
}

.carousel__slide--sliding {
    transition: 0.5s;
}

.carousel__slide {
    opacity: 0.5;
    filter: blur(3px);

    transform: rotateY(-10deg) scale(0.99);
}



.carousel__slide--prev {
    opacity: 0.8;
    filter: blur(1px);

    transform: rotateY(-10deg) scale(0.99);
}

.carousel__slide--next {
    opacity: 0.8;
    filter: blur(1px);
    


    transform: rotateY(10deg) scale(0.99);
}

.carousel__slide--active {
    opacity: 1;
    filter: blur(0px);

    transform: rotateY(0) scale(1.15);
}
</style>