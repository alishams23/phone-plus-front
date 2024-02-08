
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
                        <div class="p-6">
                            <!-- Your content -->
                            
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
} from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import Product from "@/components/shared/Product.vue"
import DigitalProduct from "@/components/shared/DigitalProduct.vue"
import Blog_test from "@/components/shared/Blog_test.vue"

export default {
    components: { 
    Product, 
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
    selectedTab: 'products',
    user : {
        name: 'Tom Cook',
        email: 'tom@example.com',
        imageUrl:'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
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
    data: [
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