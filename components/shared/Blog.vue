<template>
  <div
    class="flex items-center flex-row-reverse transition ease-in-out   hover:-translate-y-1 hover:scale-105  duration-300  ">
    <div class="bg-white border-t p-10 text-right pl-[200px] w-full rounded-2xl shadow-xl  ">
      <div calss="w-full">
        <div class="font-bold text-xs text-indigo-500 text-md">{{ blog.created_at }}</div>

        <div class="text-gray-900 font-semibold text-lg mt-2">{{ blog.title }}</div>
        <div class=" relative w-50 overflow-hidden isolate">
          <p class="text-gray-600 test-n w-100 text-[14px] py-2  font-light text-xs mt-2 " v-html="truncatedBody"></p>

        </div>
        <div class="flex rtl">
          <nuxt-link :to="'/blog/' + blog.id"
            class="text-sm  mt-4 bg-indigo-600 px-10 text-white font-bold py-2 px-4 rounded-full hover:bg-indigo-800 focus:outline-none focus:shadow-outline">
            ادامه
          </nuxt-link>
          <button
            class="text-sm mx-3 mt-4 flex items-center bg-gray-100  text-gray-500 py-2 px-3 rounded-full hover:bg-red-600 hover:text-white focus:outline-none focus:shadow-outline"
            @click="readMore">
            <div class="pl-2">
              {{ blog.like_count }}
            </div>
            <HeartIcon class="h-4  " />
          </button>
        </div>
      </div>
    </div>
    <img :src="blog.imageBlog.photo" class="z-[9] h-[12rem] w-[12rem]  w-100 rounded-[30px] mr-[-160px] shadow-xl"
      style="" />

  </div>
</template>

<script>
import { HeartIcon } from '@heroicons/vue/20/solid'
export default {
  name: 'CardComponent',
  components: {
    HeartIcon
  },
  computed: {
    truncatedBody() {
      if (!this.blog.body) return '';
      // Adjust the character limit based on your text size and container width to approximate two lines
      const charLimit = 130; // Example character limit for two lines
      const ending = this.blog.body.length > charLimit ? '...' : '';
      return this.blog.body.substring(0, charLimit) + ending;
    },
  },
  props: {
    blog: {},
  },
  data() {
    return {

    }
  },
  methods: {
    readMore() {
      // Define what happens when the "READ MORE" button is clicked.
    },
  },
}
</script>
<style scoped></style>