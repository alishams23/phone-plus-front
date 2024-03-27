<template>
  <div
    class="flex w-full items-center pl-10 lg:pl-0 flex-row-reverse transition ease-in-out   hover:-translate-y-1 hover:scale-105  duration-300  ">
    <div class="bg-white border-t p-10 text-right pl-[100px] lg:pl-[200px] w-full rounded-2xl shadow-xl  ">
      <div class="w-full">
        <div class="font-bold text-xs text-indigo-500 text-md">{{ blog.created_at }}</div>
        <div class="text-gray-900 font-semibold text-md lg:text-lg mt-2 line-clamp-1  rtl">{{ blog.title }}</div>
        <div class="flex justify-end w-full">
          <div class=" text-gray-900 font-semibold text-md lg:text-lg mt-2 line-clamp-2  rtl relative  isolate  text-ellipsis ">
            <p class="text-gray-600 test-n w-100  text-[14px] py-2 max-w-[90%] lg:max-w-[90%] font-light text-xs mt-2 " v-html="truncatedBody"></p>
          
          </div>
        </div>
        <div class="flex rtl">
          <nuxt-link :to="'/blog/' + blog.id"
            class="text-sm  mt-4 bg-indigo-600 px-10 text-white font-bold py-2 px-4 rounded-full hover:bg-indigo-800 focus:outline-none focus:shadow-outline">
            ادامه
          </nuxt-link>
          <button
          
          @click="isLogin == false ? $router.push('/auth/signIn') : like()"
            class="text-sm mx-3 mt-4 flex items-center py-2 px-3 rounded-full  hover:text-white focus:outline-none focus:shadow-outline"
            :class="blog.likeAuthor == true ? 'text-white bg-red-600' : ' bg-gray-100 hover:bg-red-200 text-gray-500 '"
            >
            <div class="pl-2">
              {{ blog.like_count }}
            </div>
            <HeartIcon class="h-4  " />
          </button>
        </div>
      </div>
    </div>
    <img :src="blog.imageBlog.photo" class="z-[9] h-[8rem] w-[8rem] md:h-[12rem] md:w-[12rem]  object-cover w-100 rounded-[30px] mr-[-80px] md:mr-[-160px]  shadow-xl" />

  </div>
</template>

<script>
import { HeartIcon } from '@heroicons/vue/20/solid'
import { apiStore } from '~/store/api';
import { useUserStore } from '~/store/user'; 


export default {
  props: {
    blog: {},
  },
  components: {
    HeartIcon
  },
  computed: {
    truncatedBody() {
      if (!this.blog.body) return '';
      // Adjust the character limit based on your text size and container width to approximate two lines
      const charLimit = 130; // Example character limit for two lines
      const ending = this.blog.body.length > charLimit ? '...' : '';
      return this.blog.body.substring(0, charLimit) + '...';
    },
    isLogin() {
      return useUserStore().userToken != null
    }
  },
  methods:{
      async like() {
      await fetch(
        `${apiStore().address}/api/blog/add-like-view/?id=${this.blog.id}`,
        {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            Authorization: `Token ${useUserStore().userToken}`
          },
        }
      );
      if (this.blog.likeAuthor == true) {
        this.blog.likeAuthor = false;
        this.blog.like_count--;
      } else {
        this.blog.likeAuthor = true;
        this.blog.like_count++;
      }
    },
  },
  

  
}
</script>
<style scoped></style>