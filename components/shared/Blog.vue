<template>
  <nuxt-link :to="'/p/blog/' + blog.id"
    class=" flex w-full items-center lg:pl-0 flex-row-reverse transition ease-in-out   hover:-translate-y-1 hover:scale-105  duration-300  ">
    
    <div class=" shadow-1 border isolate relative p-7 text-right lg:pl-[0px] w-full rounded-2xl  ">
      <img :src="blog.imageBlog.photo"  class="absolute  rounded-2xl inset-0 -z-10 h-full w-full " />
        <div class="absolute inset-0 -z-10 md:bg-gradient-to-l bg-gradient-to-t  rounded-2xl from-white/80 from-0% via-white/80 "  />
        <div class="absolute inset-0 -z-10 bg-gray-50/60 rounded-2xl"  />
        <div class="absolute backdrop-blur-md rounded-2xl overflow-hidden inset-0 -z-10  h-full w-full  " />
      <div class="w-full ">
        <div class="grid grid-cols-8 justify-center lg:justify-end">
          <div class="col-span-8  lg:col-span-2 mt-[-60px]  md:mx-0  lg:mt-0  lg:ml-[-50px]">
           <div class="lg:p-4">
             <img :src="blog.imageBlog.photo" class=" object-cover aspect-[6/3] shadow-xl lg:aspect-square rounded-[25px] " />
           </div>
          </div>
          <div class="col-span-8 lg:col-span-6 flex flex-col justify-between ">
            <div>
              <div class="text-gray-900 font-semibold lg:px-5 mt-4 lg:mt-0 text-md lg:flex lg:items-start lg:h-full min-h-[20px] rtl">{{ blog.title }}</div>
               <div class=" text-gray-900 font-semibold lg:px-5 text-md lg:text-lg lg:mt-2 rtl ">
                  <p class="text-gray-600 test-n w-100  text-[14px] py-1 max-w-[90%] lg:max-w-[90%] font-light text-xs mt-2 " v-html="truncatedBody"></p>
                </div>
                <div class="text-xs text-indigo-500 lg:px-5 mt-2 text-md">{{ blog.created_at }}</div>
            </div>
            <!-- <div class="flex rtl ">
              <nuxt-link :to="'/p/blog/' + blog.id"
                class="text-sm  mt-4 bg-indigo-600 px-10 text-white font-bold py-2 px-4 rounded-full hover:bg-indigo-800 focus:outline-none focus:shadow-outline">
                ادامه
              </nuxt-link>
              <button
              
              @click="isLogin == false ? changeStateLogin(true) : like()"
                class="text-sm mx-3 mt-4 flex items-center py-2 px-3 rounded-full  hover:text-white focus:outline-none focus:shadow-outline"
                :class="blog.likeAuthor == true ? 'text-white bg-red-600' : ' bg-gray-100 hover:bg-red-200 text-gray-500 '"
                >
                <div class="pl-2">
                  {{ blog.like_count }}
                </div>
                <HeartIcon class="h-4  " />
                

              </button>
            </div> -->
          </div>
         
          <!-- <div class="col-span-6 lg:col-span-6 ">
            
          </div> -->
        </div>
        <!-- <div class="font-bold text-xs text-indigo-500 text-md">{{ blog.created_at }}</div>
        <div class="text-gray-900 font-semibold text-md lg:text-lg mt-2 line-clamp-1  rtl">{{ blog.title }}</div>
        <div class="flex justify-end w-full">
          <div class=" text-gray-900 font-semibold text-md lg:text-lg lg:mt-2 rtl ">
            <p class="text-gray-600 test-n w-100  text-[14px] py-2 max-w-[90%] lg:max-w-[90%] font-light text-xs mt-2 " v-html="truncatedBody"></p>
          
          </div>
        </div>
        <div class="flex rtl">
          <nuxt-link :to="'/p/blog/' + blog.id"
            class="text-sm  mt-4 bg-indigo-600 px-10 text-white font-bold py-2 px-4 rounded-full hover:bg-indigo-800 focus:outline-none focus:shadow-outline">
            ادامه
          </nuxt-link>
          <button
          
          @click="isLogin == false ? changeStateLogin(true) : like()"
            class="text-sm mx-3 mt-4 flex items-center py-2 px-3 rounded-full  hover:text-white focus:outline-none focus:shadow-outline"
            :class="blog.likeAuthor == true ? 'text-white bg-red-600' : ' bg-gray-100 hover:bg-red-200 text-gray-500 '"
            >
            <div class="pl-2">
              {{ blog.like_count }}
            </div>
            <HeartIcon class="h-4  " />
          </button>
        </div> -->
      </div>
    </div>
    
  </nuxt-link>
</template>

<script>
import { HeartIcon } from '@heroicons/vue/20/solid'
import { apiStore } from '~/store/api';
import { useUserStore } from '~/store/user'; 
import { NavigationStore } from '~/store/navigation';


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
    changeStateLogin(state) {
      NavigationStore().changeLoginState(state)
    },
  },
  

  
}
</script>
<style scoped></style>