<template>
    <div v-if="loading">
    <div  class="p-16 py-[400px] flex items-center justify-center" >
      <div role="status">
          <svg aria-hidden="false" class="w-8 h-8 text-gray-100 animate-spin fill-indigo-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
    <div v-else-if="blog != null"  class="w-full h-full " data-aos="zoom-out-right">
        <div class="mt-[-40px]">
            <div class="  relative  ">
                <div class="">
                    <!-- <div class="bg rounded-b-[50px] "></div>
                    <div class="bg bg2 rounded-b-[50px]"></div>
                    <div class="bg bg3 rounded-b-[50px]"></div> -->
                </div>
                <img :src="blog.imageBlog.photo" alt=""
                    class="absolute overflow-hidden inset-0 -z-10 h-full w-full object-cover " />
                <img class="absolute backdrop-blur-md overflow-hidden inset-0 -z-10  h-full w-full  " />
                <div class="absolute inset-x-0 -top-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true">
                    <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
                </div>
                <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:pt-[1rem] lg:pb-[12rem]">

                    <div class="hidden sm:mb-8 sm:flex sm:justify-center">

                    </div>


                </div>


            </div>
            <div class="mt-[-30px]">

                <svg id="Layer_2" class="w-full" fill="white" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 695.06 35.8">

                    <g id="Layer_2-2" data-name="Layer 2">
                        <g id="Layer_1-2" data-name="Layer 1-2">
                            <path class="cls-1" d="M695.06,0V35.8H0V0S194.27,12.75,356.77,12.75,695.06,0,695.06,0Z" />
                        </g>
                    </g>
                </svg>


            </div>
        </div>
        <div class=" shadow-lg -mt-40 pb-10 flex justify-center">
            <div class="max-w-[75rem] flex flex-col shadow-lg rounded-[25px] overflow-hidden">
                <div class="relative isolate overflow-hidden ">

                    <div class="grid grid-cols-4 gap-4 bg-white p-4 pb-10">
                        <div class="col-span-4 lg:col-span-3  ">
                            <div class="relative isolate shadow-xl rounded-[25px] pb-10  h-[10rem] lg:h-[30rem]">

                                <img :src="blog.imageBlog.photo" :alt="blog.imageBlog.title_for_photo"
                                    class="absolute inset-0 -z-1000  h-[10rem] lg:h-[30rem] w-full rounded-[25px] object-cover" />
                                <div
                                    class="absolute inset-0 -z-9999 bg-gradient-to-tr from-gray-700 to-gray-900 opacity-80 rounded-[25px] h-[10rem] lg:h-[30rem] w-full" />

                                <div class="absolute inset-0 -z-1000   h-[10rem] lg:h-[30rem] w-full ">
                                    <h1 class="font-bold rtl px-8 lg:px-16 pt-8 lg:pt-16 text-white text-xl lg:text-4xl">
                                        {{ blog.title }}
                                    </h1>

                                </div>


                            </div>
                        </div>
                        <div class="bg-gray-200 col-span-4 lg:col-span-1 shadow-xl rounded-[30px]">
                            <div class="flex flex-col justify-between h-full">
                                <div>
                                    <div class="flex justify-end items-center pt-10 px-5 ">
                                        <p class="text-black text-5sm font-bold pe-4">
                                            {{ blog.author.get_full_name }}
                                        </p>
                                        <img src="/images/6.jpg" class="h-10 w-10 rounded-full bg-gray-200" alt="" />
                                    </div>
                                    <div class="pe-5 pt-5 text-gray-400 flex justify-end">
                                        <p>:دسته بندی ها</p>
                                    </div>
                                    <div class="flex justify-end px-2">
                                        <div class="flex flex-wrap rtl">
                                            <div class="text-sm flex flex-row items-center bg-gray-100 my-2 text-gray-500 py-1 px-2 mx-1 rounded-full hover:bg-gray-300 hover:text-gray-600"
                                                v-for="category in blog.category" :key="category.id">
                                                <p class="px-2">{{ category.title }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="pb-8 px-5 flex mt-4 items-center justify-between">
                                    <div>
                                        <p class=" text-black  text-sm">
                                            {{ blog.created_at }}
                                        </p>
                                    </div>
                                    <button @click="isLogin == false ? $router.push('/auth/signIn') : like()"
                                        class="text-sm mx-3  flex items-center py-2 px-3 rounded-full hover:bg-red-600 hover:text-white focus:outline-none focus:shadow-outline"
                                        :class="blog.likeAuthor == true ? 'text-white bg-red-600' : ' bg-gray-100  text-gray-500 '">
                                        <div class="pr-2 ">
                                            {{ blog.like_count }}
                                        </div>
                                        <HeartIcon class="h-4  " />
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
                <div class="p-16 rtl">
                    <p v-html="blog.body"></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { apiStore } from '~/store/api';
import { HeartIcon } from '@heroicons/vue/24/outline'
import axios from 'axios'
import { useUserStore } from '~/store/user';
import { NavigationStore } from '~/store/navigation'; 

export default {
    components: {
        HeartIcon,
    },
    computed: {

        isLogin() {
            return useUserStore().userToken != null
        }
    },
    data: () => ({
        blog: null,
        loading:true,
    }),
    methods: {
        getData() {
            this.loading = true
            axios.get(`${apiStore().address}/api/blog/blog-retrieve-main-page/${this.$route.params.id}/`, {
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json",
                    Authorization: this.isLogin == true ? `Token ${useUserStore().userToken}` : '',
                },
            }).then((response) => {
                this.blog = response.data
                this.loading = false

            })
        }, async like() {
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
    mounted() {
        this.getData()
        NavigationStore().setButtons([

        ])
    }
}
</script>

<style></style>