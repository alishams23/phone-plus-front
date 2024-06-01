<template>
    <div v-if="loading">
    <div  class="p-16 py-[400px] flex items-center justify-center" >
      <div role="status">
          <svg aria-hidden="false" class="w-14 h-14 text-gray-100 animate-spin fill-indigo-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
    <div v-else-if="blog != null"  class="w-full h-full " data-aos="fade-down">
        <div class="mt-[-40px]">
            <div class="  relative  ">
                <div class="">
                    <div class="bg rounded-b-[50px] "></div>
                    <div class="bg bg2 rounded-b-[50px]"></div>
                    <div class="bg bg3 rounded-b-[50px]"></div>
                </div>
                <img :src="blog.imageBlog.photo" alt=""
                    class="absolute overflow-hidden  inset-0 -z-10 h-full w-full object-cover " />
                <img class="absolute backdrop-blur-md overflow-hidden inset-0 -z-10  h-full w-full  " />
        <img class="absolute bg-gray-800/60 overflow-hidden inset-0 -z-10  h-full w-full  " />

                <div class="absolute inset-x-0 -top-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
                    aria-hidden="true">
                    <div class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
                </div>
             
                <div class="pb-[11rem] pt-[5rem] lg:pb-[9rem] ">
                    <div class="flex flex-row rtl  container justify-center md:justify-start items-center ">
          <div class=" me-5">
            <a :href="'/' + blog.shop.username" target="blank" >
              <ArrowTopRightOnSquareIcon class="h-4 w-4 mt-3 text-sm text-gray-50 drop-shadow-[0_10.2px_10.2px_rgba(0,0,0,0.9)]" click="" />
              <img :src="blog.shop.image" class="h-24 w-24 object-cover rounded-full" />
            </a>
          </div>
          <a :href="'/' + blog.shop.username" target="blank" >
            <div class="text-sm text-gray-50 drop-shadow-[0_10.2px_10.2px_rgba(0,0,0,0.9)]">
              فروشگاه:
            </div>
            <div class="flex font-semibold text-3xl text-white drop-shadow-[0_10.2px_10.2px_rgba(125,125,125,0.9)]">
              {{ blog.shop.name }}
            </div>
          </a>
        </div>
                    <div class="hidden sm:mb-8 sm:flex sm:justify-center">

                    </div>


                </div>


            </div>
            <div class="mt-[-30px] hidden md:block">

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
            <div class="max-w-[75rem] mx-5 lg:mx-0 flex flex-col shadow-1 rounded-[25px] overflow-hidden">
                <div class="relative isolate overflow-hidden ">

                    <div class="grid grid-cols-4 gap-4 bg-white p-4 pb-10">
                        <div class="col-span-4 lg:col-span-3  ">
                            <div class="relative  isolate rounded-[25px] pb-10  h-[10rem] lg:h-[20rem]">

                                <img :src="blog.imageBlog.photo" :alt="blog.imageBlog.title_for_photo"
                                    class="absolute inset-0 -z-1000  h-[10rem] lg:h-[20rem] w-full rounded-[25px] object-cover" />
                                <div
                                    class="absolute inset-0 -z-9999  bg-indigo-900/40   rounded-[25px] h-[10rem] lg:h-[20rem] w-full" />

                                <div class="absolute inset-0 -z-1000   h-[10rem] lg:h-[30rem] w-full ">
                                    <h1 class="font-bold rtl px-8 lg:px-16 pt-8 lg:pt-16 text-white text-xl lg:text-4xl">
                                        {{ blog.title }}
                                    </h1>

                                </div>


                            </div>
                        </div>
                        <div class="bg-gradient-to-b from-gray-100 to-gray-300 col-span-4 lg:col-span-1  rounded-[30px]">
                            <div class="flex flex-col justify-between h-full">
                                <div>
                                    <div class="flex justify-end items-center pt-5 md:pt-10 px-5 ">
                                        <p class="text-black text-5sm font-bold pe-4">
                                            {{ blog.author.get_full_name }}
                                        </p>
                                        <img src="/images/6.jpg" class="h-10 w-10 rounded-full bg-gray-200" alt="" />
                                    </div>
                                    <div class="pe-5 pt-5 text-gray-400 text-xs flex justify-end">
                                        <p>:دسته بندی ها</p>
                                    </div>
                                    <div class="flex justify-end px-2">
                                        <div class="flex flex-wrap rtl">
                                            <div class="text-sm flex flex-row items-center bg-gray-100 my-2 text-gray-500 py-1 px-2 mx-1 rounded-full hover:bg-gray-300 hover:text-gray-600"
                                                v-for="category in blog.category" :key="category.id">
                                                <p @click="$router.push(`/p/search/?category_blog=${category.id}&tab=2`)" class="px-2 cursor-pointer">{{ category.title }}</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div class="md:pb-8 pb-4 px-5 flex mt-4 items-center justify-between">
                                    <div>
                                        <p class=" text-black  text-xs">
                                            {{ blog.created_at }}
                                        </p>
                                    </div>
                                    <button @click="isLogin == false ? $router.push('/p/auth/signIn') : like()"
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
                <div class="p-10 md:p-16 rtl">
                    <p v-html="blog.body"></p>
                </div>

                <section class="bg-white px-6 py-24 sm:py-32 lg:px-8">
                    <div class=" font-bold text-right text-3xl pb-10">
                    نظرات
                    </div>
                    <figure class="mx-auto rtl  border-t pb-10" v-for="comment in blog.comment" :key="comment.id">
                        <blockquote class="mt-5 text-lg leading-8 tracking-tight text-gray-700 text-sm  sm:leading-9">
                            <p><span class="text-2xl">”</span>{{ comment.title }}<span class="text-2xl">“</span></p>
                        </blockquote>
                    </figure>
                    <div class="flex items-start space-x-4 mt-10">
                        <div class="min-w-0 flex-1">
                            <form @submit.prevent="sendComment" class="relative">
                            <div
                                class="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-gray-400">
                                <label for="comment" class="sr-only ">نظر خود را بنویسید</label>
                                <textarea rows="3" required v-model="comment_title" name="comment" id="comment"
                                class="block w-full p-3 text-right resize-none bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
                                placeholder="... نظر خود را بنویسید "></textarea>

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
        comment_title: '',
    }),
    methods: {
        async sendComment() {

            let Comment = new FormData();
            Comment.append('title', this.comment_title);
            try {
                axios.post(`${apiStore().address}/api/blog/add-comment/${this.$route.params.id}/`, Comment, {
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json",
                    Authorization: `Token ${useUserStore().userToken}`
                },
                }).then((data) => {
                this.getData()

                })
            } catch (error) {
                console.error('Error sending comment:', error);

            }


        },
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