
<template>
  <div class="min-h-full">
      <Popover as="header" class="bg-indigo-600 pb-24" v-slot="{ open }">
        <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div class="relative flex items-center justify-center py-5 lg:justify-between">
            <!-- Logo -->
            <!-- <div class="absolute left-0 flex-shrink-0 lg:static">
              <a href="#">
                <span class="sr-only">Your Company</span>
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300" alt="Your Company" />
              </a>
            </div> -->
  
            <!-- Right section on desktop -->
            <div class="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
              <!-- <button type="button" class="flex-shrink-0 rounded-full p-1 text-indigo-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                <span class="sr-only">View notifications</span>
                <BellIcon class="h-6 w-6" aria-hidden="true" />
              </button> -->
  
              <!-- Profile dropdown -->
         
            </div>
  
            <!-- Search -->
            <!-- <div class="min-w-0 flex-1 px-12 lg:hidden">
              <div class="mx-auto w-full max-w-xs">
                <label for="desktop-search" class="sr-only">Search</label>
                <div class="relative text-white focus-within:text-gray-600">
                  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MagnifyingGlassIcon class="h-5 w-5" aria-hidden="true" />
                  </div>
                  <input id="desktop-search" class="block w-full rounded-md border-0 bg-white/20 py-1.5 pl-10 pr-3 text-white placeholder:text-white focus:bg-white focus:text-gray-900 focus:ring-0 focus:placeholder:text-gray-500 sm:text-sm sm:leading-6" placeholder="Search" type="search" name="search" />
                </div>
              </div>
            </div>-->
            <!-- Menu button -->
            <div class="absolute right-0 flex-shrink-0 lg:hidden">
              <!-- Mobile menu button -->
             
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
            <div class="grid grid-cols-1 gap-4 lg:col-span-12">
              <section aria-labelledby="section-1-title">
                <div class="bg-white rounded-[25px] shadow-xl">
                  <div class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                    <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                      <!-- Image gallery -->
                      <TabGroup as="div" class="flex flex-col-reverse">
                        <!-- Image selector -->
                        <div class="mx-auto mt-6  w-full max-w-2xl lg:max-w-none">
                          <TabList class="grid grid-cols-4 gap-6">
                            <Tab v-for="image in product.images" :key="image.id"
                              class="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:bg-gray-100 "
                              v-slot="{ selected }">
                              <span class="sr-only">{{ image.name }}</span>
                              <span
                                :class="[selected ? 'ring-indigo-500 bg-gray-100' : 'ring-transparent', 'pointer-events-none absolute inset-0 rounded-xl']"
                                aria-hidden="true" />
                              <span class="absolute inset-0 overflow-hidden rounded-md flex justify-center">
                                <img :src="image.src" alt="" class="h-full w-full rounded-xl  object-cover" />
                              </span>
                            </Tab>
                          </TabList>
                        </div>

                        <TabPanels class="aspect-h-1 aspect-w-1 w-full">
                          <TabPanel v-for="image in product.images" :key="image.id" class="h-[500px]">
                            <img :src="image.src" :alt="image.alt" class=" h-full rounded-[25px] object-cover " />
                          </TabPanel>

                        </TabPanels>
                      </TabGroup>

                      <!-- Product info -->
                      <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0 rtl">
                        <h1 class="text-3xl font-bold tracking-tight text-gray-900">{{ product.name }}</h1>

                        <div class="mt-3">
                          <h2 class="sr-only">Product information</h2>
                          <p class="text-3xl tracking-tight text-gray-900">{{ product.price }}</p>
                        </div>

                        <!-- Reviews -->
                        <div class="mt-3">
                          <h3 class="sr-only">Reviews</h3>
                          <div class="flex items-center">
                            <div class="flex items-center">
                              <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating"
                                :class="[product.rating > rating ? 'text-indigo-500' : 'text-gray-300', 'h-5 w-5 flex-shrink-0']"
                                aria-hidden="true" />
                            </div>
                            <p class="sr-only">{{ product.rating }} out of 5 stars</p>
                          </div>
                        </div>

                        <div class="mt-6">
                          <h3 class="sr-only">Description</h3>

                          <div class="space-y-6 text-base text-gray-700" v-html="product.description" />
                        </div>

                        <form class="mt-6">
                          <!-- Colors -->
                          <div class="ltr flex items-end flex-col">
                            <h3 class="text-sm text-gray-600 rtl">رنگ‌ها </h3>

                            <RadioGroup v-model="selectedColor" class="mt-2">
                              <RadioGroupLabel class="sr-only">Choose a color</RadioGroupLabel>
                              <span class="flex items-center space-x-3">
                                <RadioGroupOption as="template" v-for="color in product.colors" :key="color.name" :value="color"
                                  v-slot="{ active, checked }">
                                  <div
                                    :class="[color.selectedColor, active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', 'relative -m-0.5 flex cursor-pointer items-center justify-center rounded-full p-0.5 focus:outline-none']">
                                    <RadioGroupLabel as="span" class="sr-only">{{ color.name }}</RadioGroupLabel>
                                    <span aria-hidden="true"
                                      :class="[color.bgColor, 'h-8 w-8 rounded-full border border-black border-opacity-10']" />
                                  </div>
                                </RadioGroupOption>
                              </span>
                            </RadioGroup>
                          </div>

                          <div class="sm:flex-col1 mt-10 flex">
                            <button type="submit"
                              class="flex max-w-xs flex-1 items-center justify-center rounded-full border border-transparent bg-indigo-600 px-8 py-3 text-base font-medium text-white hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2 focus:ring-offset-gray-50 sm:w-full">اضافه
                              کردن به سبد خرید</button>

                            <button type="button"
                              class="ml-4 flex items-center justify-center rounded-md px-3 py-3 text-gray-400 hover:bg-gray-100 hover:text-gray-500">
                              <HeartIcon class="h-6 w-6 flex-shrink-0" aria-hidden="true" />
                              <span class="sr-only">اضافه کردن به علاقه کندی‌ها</span>
                            </button>
                          </div>
                        </form>

                        <section aria-labelledby="details-heading" class="mt-12">
                          <h2 id="details-heading" class="sr-only">Additional details</h2>

                          <div class="divide-y divide-gray-200 border-t">
                            <Disclosure as="div" v-for="detail in product.details" :key="detail.name" v-slot="{ open }">
                              <h3>
                                <DisclosureButton class="group relative flex w-full items-center justify-between py-6 text-left">
                                  <span :class="[open ? 'text-indigo-600' : 'text-gray-900', 'text-sm font-medium']">{{ detail.name
                                  }}</span>
                                  <span class="ml-6 flex items-center">
                                    <PlusIcon v-if="!open" class="block h-6 w-6 text-gray-400 group-hover:text-gray-500"
                                      aria-hidden="true" />
                                    <MinusIcon v-else class="block h-6 w-6 text-indigo-400 group-hover:text-indigo-500"
                                      aria-hidden="true" />
                                  </span>
                                </DisclosureButton>
                              </h3>
                              <DisclosurePanel as="div" class="prose prose-sm pb-6">
                              
                                <div>
                                  <div class="px-4 sm:px-0">
                                
                                  </div>
                                  <div class="mt-6 border-t border-gray-100">
                                    <dl class="divide-y divide-gray-100">
                                      <div v-for="item in detail.items" :key="item" class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt class="text-sm font-medium leading-6 text-gray-900">{{ item[0] }}</dt>
                                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{item[1]}}</dd>
                                      </div>
                                  
                                    </dl>
                                  </div>
                                </div>
                              </DisclosurePanel>
                            </Disclosure>
                          </div>
                        </section>
                      </div>
                    </div>
                  


                    <section class="bg-white px-6 py-24 sm:py-32 lg:px-8" >
                      <div class=" font-bold text-right text-3xl pb-10">
                        نظرات
                      </div>
                      <figure class="mx-auto rtl  border-t pb-10" v-for="item in 3">
                        <p class="sr-only">پنچ ستاره</p>
                        <div class="flex gap-x-1 text-indigo-600">
                        
                        </div>
                        <figcaption class="mt-10 flex items-center gap-x-6">
                          <img src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" class="h-12 w-12 rounded-full bg-gray-200" alt="" />
                          <div class="text-sm leading-6">
                            <div class="font-semibold text-gray-600">علی شمس</div>
                            <div class="mt-3">
                              <h3 class="sr-only">Reviews</h3>
                              <div class="flex items-center">
                                <div class="flex items-center">
                                  <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating"
                                    :class="[product.rating > rating ? 'text-indigo-600' : 'text-gray-300', 'h-3 w-3 flex-shrink-0']"
                                    aria-hidden="true" />
                                </div>
                                <p class="sr-only">{{ product.rating }} out of 5 stars</p>
                              </div>
                            </div>
                          </div>
                        </figcaption>

                        <blockquote class="mt-10 text-lg leading-8 tracking-tight text-gray-700 text-sm  sm:leading-9">
                          <p>“این ایفون ۱۳ پرو واقعاً عالیه! کیفیت ساختش بی‌نظیره و دوربینش به شدت توانمند. واقعاً خوشحالم که این محصول رو انتخاب کردم. ممنون از شما برای ارائه این محصول فوق‌العاده.”</p>
                        </blockquote>
                      </figure>
                      <div class="flex items-start space-x-4 mt-10">
                        <div class="min-w-0 flex-1">
                          <form action="#" class="relative">
                            <div
                              class="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-indigo-600">
                              <label for="comment" class="sr-only ">نظر خود را بنویسید</label>
                              <textarea rows="3" name="comment" id="comment"
                                class="block w-full p-3 text-right resize-none border-0 bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm sm:leading-6"
                                placeholder="... نظر خود را بنویسید " />
                
                              <!-- Spacer element to match the height of the toolbar -->
                              <div class="py-2" aria-hidden="true">
                                <!-- Matches height of button in toolbar (1px border + 36px content height) -->
                                <div class="py-px">
                                  <div class="h-9" />
                                </div>
                              </div>
                            </div>
                
                            <div class="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
                              <div class="flex items-center space-x-5">
                
                              </div>
                              <div class="flex-shrink-0">
                                <button type="submit"
                                  class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">ارسال</button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </section>
                  </div>

                </div>
              </section>
            </div>
  
          </div>
        </div>
      </main>
    </div>
  
</template>
  
<script setup>
import { ref } from 'vue'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
  Tab,
  Popover,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/vue'
import { StarIcon } from '@heroicons/vue/20/solid'
import { HeartIcon, MinusIcon, PlusIcon } from '@heroicons/vue/24/outline'

const product = {
  name: 'ایفون ۱۴',
  price: '۱۴۰۰۰۰۰۰ تومان',
  rating: 4,
  images: [
    
    {
      id: 1,
      name: 'Angled view',
      src: '/images/5.jpg',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
    {
      id: 1,
      name: 'Angled view',
      src: '/images/3.jpg',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
    {
      id: 1,
      name: 'Angled view',
      src: '/images/2.jpeg',
      alt: 'Angled front view with bag zipped and handles upright.',
    },
    // More images...
  ],
  colors: [
    { name: 'Washed Black', bgColor: 'bg-gray-700', selectedColor: 'ring-gray-700' },
    { name: 'White', bgColor: 'bg-white', selectedColor: 'ring-gray-400' },
    { name: 'Washed Gray', bgColor: 'bg-gray-500', selectedColor: 'ring-gray-500' },
  ],
  description: `
      <p>امکان برگشت کالا در گروه موبایل با دلیل "انصراف از خرید" تنها در صورتی مورد قبول است که پلمب کالا باز نشده باشد.
 تمام گوشی‌های دیجی‌کالا ضمانت رجیستری دارند. در صورت وجود مشکل رجیستری، می‌توانید بعد از مهلت قانونی ۳۰ روزه، گوشی خریداری‌شده را مرجوع کنید.</p>
    `,
  details: [
    {
      name: 'امکانات',
      items: [
        ['فناوری صفحه‌نمایش ','Super Retina XDR OLED'],
        ['اندازه' ,' 6.1'],
        ['رزولوشن عکس' ,'12 مگاپیکسل'],
        ['نسخه سیستم عامل ','iOS 15'],
        ['اقلام همراه' ,'دفترچه‌ راهنما، کابل Lightning'],

      ],
    },
    // More sections...
  ],
}

const selectedColor = ref(product.colors[0])
</script>