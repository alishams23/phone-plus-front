<template>
  <div class="flex items-center flex-row-reverse">

  <div class="bg-white  p-10 text-right pl-[200px] rounded-lg shadow-xl  ">
    <div>
      <div class="font-bold text-xs text-indigo-500 text-lg">{{ date }}</div>

      <div class="text-gray-900 font-semibold text-xl mt-2">{{ title }}</div>
      <p class="text-gray-600 text-[14px] py-2 font-light mt-2">{{ description }}</p>

     <div class="flex rtl">
      <button
      class="text-sm  mt-4 bg-indigo-600 px-10 text-white font-bold py-2 px-4 rounded-full hover:bg-indigo-800 focus:outline-none focus:shadow-outline"
      @click="readMore"
    >
     ادامه 
    </button>
    <button
    class="text-sm mx-3 mt-4 flex items-center bg-gray-100  text-gray-500 py-2 px-3 rounded-full hover:bg-red-600 hover:text-white focus:outline-none focus:shadow-outline"
    @click="readMore"
  >
  <div class="pl-2">
    120
  </div>
  <HeartIcon class="h-4  "/> 
  </button>
     </div>
    </div>
  </div>
  <img :src="imageUrl" class=" z-[9] h-[12rem] w-[12rem]  w-100 rounded-xl mr-[-160px] shadow-xl" style="" />

  </div>
</template>

<script>
import { HeartIcon } from '@heroicons/vue/20/solid'
export default {
  name: 'CardComponent',
  components:{HeartIcon},
  data() {
    return {
      date: '1400/11/10',
      title: 'تاریخچه و تکامل گوشی‌های هوشمند: از نوکیا تا آیفون ',
      description: 'این متن تاریخچه تکامل گوشی‌های هوشمند از دهه ۱۹۹۰ تا به امروز را بررسی می‌کند.نیای گوشی‌های هوشمند آشنا خواهید شد',
      imageUrl: '/images/blog/2.jpg',
    }
  },
  methods: {
    readMore() {
      // Define what happens when the "READ MORE" button is clicked.
    },
  },
}
</script>
