<template>
  <div class=" ">
    <div class="  relative ">


      <div class="bg rounded-b-[50px]"></div>
<div class="bg bg2 rounded-b-[50px]"></div>
<div class="bg bg3 rounded-b-[50px]"></div>



      <img src="/images/header.avif" alt="" class="absolute inset-0 -z-10 h-full w-full object-cover " />
      <div class="absolute inset-x-0 -top-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div
          class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-[8rem]">
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-white sm:text-4xl">بهترین فروشگاه‌ها رو اینجا پیدا کن</h1>
        </div>
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">

        </div>
        <form>
          <div class="flex">
            <div class="relative w-full">
              <input type="search" id="search-dropdown" v-model="searchQuery" @input="filterOptions"
                class="text-white block p-4 w-full z-20 text-sm text-indigo-900 bg-white text-right rtl pr-20  rounded-[20px] "
                placeholder="جستجو بین محصولات  هزاران فروشگاه ..." required>
              <div v-if="filteredOptions.length > 0 && searchQuery" class="absolute  mt-2 w-full"
                style="z-index:9999999999999999">
                <ul class="bg-gray-100 rtl rounded-xl  shadow-xl w-full">
                  <li class=" p-4 font-body-2 text-gray-500 font-bold"> محصولات</li>
                  <Swiper  
                    :modules="modules" 
                    :slides-per-view="'auto'" 
                    :loop="false" 
                   
                    :space-between="20" >
                    <SwiperSlide v-for="option in filteredOptions" :key="option.id" class="mb-10 px-2"> 
                      <div class="rtl"> 
                        <div class="flex items-start border  rounded-xl text-sm overflow-hidden"> 
                          <div class="px-5 py-3 flex-grow "> 
                            <div class=""> 
                              {{ option.label }}
                            </div>
                            <div class="text-gray-500 text-xs mt-3" >
                              {{ option.price }}
                            </div>
                          </div>
                          <img :src="option.imageUrl" alt="Option image" class="w-32 h-20 object-cover rounded-e-lg" />
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <li class=" p-4 font-body-1 text-gray-500 border-t font-bold">محصولات دیجیتال </li>
                  <Swiper  
                    :modules="modules" 
                    :slides-per-view="'auto'" 
                    :loop="false" 
                  
                    :space-between="20" >
                    <SwiperSlide v-for="option in filteredOptions" :key="option.id" class="mb-10 px-2"> 
                      <div class="rtl"> 
                        <div class="flex items-start border  rounded-xl text-sm overflow-hidden"> 
                          <div class="px-5 py-3 flex-grow "> 
                            <div class=""> 
                              {{ option.label }}
                            </div>
                            <div class="text-gray-500 text-xs mt-3" >
                              {{ option.price }}
                            </div>
                          </div>
                          <img :src="option.imageUrl" alt="Option image" class="w-32 h-20 object-cover rounded-e-lg" />
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                  <li class=" p-4 font-body-1 text-gray-500 border-t font-bold"> مقاله‌ها</li>
                  <Swiper  
                    :modules="modules" 
                    :slides-per-view="'auto'" 
                    :loop="false" 
                  
                    :space-between="20" >
                    <SwiperSlide v-for="option in filteredOptions" :key="option.id" class="mb-10 px-2"> 
                      <div class="rtl"> 
                        <div class="flex items-start border  rounded-xl text-sm overflow-hidden"> 
                          <div class="px-5 py-3 flex-grow "> 
                            <div class="font-bold"> 
                              {{ option.label }}
                            </div>
                            <div class="text-gray-500 text-xs mt-3" >
                              {{ option.price }}
                            </div>
                          </div>
                          <img :src="option.imageUrl" alt="Option image" class="w-32 h-20 object-cover rounded-e-lg" />
                        </div>
                      </div>
                    </SwiperSlide>
                  </Swiper>
                </ul>
              </div>
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
        <div class="mt-3 flex items-center ">
          <span
            class="inline-flex items-center rounded-md bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-400/30 mx-1">موبایل</span>
          <span
            class="inline-flex items-center rounded-md bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-400/30 mx-1">هدفون</span>
          <span
            class="inline-flex items-center rounded-md bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-400/30 mx-1">لپ
            تاپ</span>
          <span
            class="inline-flex items-center rounded-md bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-400/30 mx-1">تبلت</span>
        </div>
      </div>

      <div
        class="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
        aria-hidden="true">
        <div
          class="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
    </div>
  </div>



  
</template>
  
<script >


import { Autoplay, Pagination, Navigation } from 'swiper/modules';

export default {
  setup() {
    return {
      modules: [Autoplay, Pagination, Navigation],
    };
  },
  data() {
    return {
      searchQuery: '',
      options: [
        { id: 1, label: 'Option 1', price: 10000, imageUrl: '/images/3.jpg' },
        { id: 2, label: 'Option 2', price: 10000, imageUrl: '/images/3.jpg' },
        { id: 2, label: 'Option 2', price: 10000, imageUrl: '/images/3.jpg' },
        { id: 2, label: 'Option 2', price: 10000, imageUrl: '/images/3.jpg' },
        { id: 2, label: 'Option 2', price: 10000, imageUrl: '/images/3.jpg' },
        { id: 2, label: 'Option 2', price: 10000, imageUrl: '/images/3.jpg' },
        { id: 2, label: 'Option 2', price: 10000, imageUrl: '/images/3.jpg' },
        // Add more options as needed
      ],
    };
  },
  computed: {
    filteredOptions() {
      return this.options.filter(option =>
        option.label.toLowerCase().includes(this.searchQuery.toLowerCase())
      );
    },
  },
  methods: {
    filterOptions() {
      // You can add additional logic here if needed
    },
  },
};
</script>

<style scoped>
/* Add your Tailwind CSS classes here */

.bg {
  animation:slide 3s ease-in-out infinite alternate;
  background-image: linear-gradient(-60deg, rgba(66, 51, 204, 0.609) 50%, rgba(0, 17, 255, 0.202) 50%);
  bottom:0;
  left:-50%;
  opacity:.3;
  position:fixed;
  right:-50%;
  top:0;
  z-index:-1;
}

.bg2 {
  animation-direction:alternate-reverse;
  animation-duration:4s;
}

.bg3 {
  animation-duration:5s;
}

.content {
  background-color:rgba(255,255,255,.8);
  border-radius:.25em;
  box-shadow:0 0 .25em rgba(0,0,0,.25);
  box-sizing:border-box;
  left:50%;
  padding:10vmin;
  position:fixed;
  text-align:center;
  top:50%;
  transform:translate(-50%, -50%);
}

@keyframes slide {
  0% {
    transform:translateX(-25%);
  }
  100% {
    transform:translateX(25%);
  }
}

.swiper-slide {
  width: auto;
}
</style>
