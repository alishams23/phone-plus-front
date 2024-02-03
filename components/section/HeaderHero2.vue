<template>
  <div class=" rounded-b-[50px]">
    <div class=" rounded-b-[50px] relative ">
      <img
        src="/images/header.avif"
        alt="" class="absolute inset-0 -z-10 h-full w-full object-cover rounded-b-[50px]" />
      <div class="absolute inset-x-0 -top-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
        <div
          class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
          style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
      </div>
      <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:py-48">
        <div class="text-center">
          <h1 class="text-4xl font-bold tracking-tight text-white sm:text-4xl">بهترین فروشگاه ها رو اینجا پیدا کن</h1>
        </div>
        <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          
        </div>
        <form>
          <div class="flex">
             
            <div class="relative w-full">
              <input type="search" id="search-dropdown"    v-model="searchQuery"  @input="filterOptions"
                class="text-white block p-4 w-full z-20 text-sm text-indigo-900 bg-glass-3 text-right rtl pr-20  rounded-[20px] "
                placeholder="جستجو بین محصولات هزاران فروشگاه ..." required>
                <div v-if="filteredOptions.length > 0 && searchQuery" class="absolute  mt-2 w-full" style="z-index:9999999999999999">
                  <ul class="bg-gray-100 rtl  rounded-xl shadow-xl">
                    <li class=" p-4 font-bold"> محصولات</li>
                    <li v-for="option in filteredOptions" :key="option.id" class="py-2 px-4">
                      {{ option.label }}
                    </li>
                    <li class=" p-4 font-bold border-t">دیجیتال محصولات</li>
                    <li v-for="option in filteredOptions" :key="option.id" class="py-2 px-4">
                      {{ option.label }}
                    </li>
                    <li class=" p-4 font-bold border-t"> وبلاگ</li>
                    <li v-for="option in filteredOptions" :key="option.id" class="py-2 px-4">
                      {{ option.label }}
                    </li>
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
          <span class="inline-flex items-center rounded-md bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-400/30 mx-1">موبایل</span>
          <span class="inline-flex items-center rounded-md bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-400/30 mx-1">هدفون</span>
          <span class="inline-flex items-center rounded-md bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-400/30 mx-1">لپ تاپ</span>
          <span class="inline-flex items-center rounded-md bg-indigo-400/10 px-2 py-1 text-xs font-medium text-indigo-400 ring-1 ring-inset ring-indigo-400/30 mx-1">تبلت</span>
          
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
</div></template>
  
<script >



export default {
  data() {
    return {
      searchQuery: '',
      options: [
        { id: 1, label: 'Option 1' },
        { id: 2, label: 'Option 2' },
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
</style>
