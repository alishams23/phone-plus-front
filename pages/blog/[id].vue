<template>
    <div v-if="blog != null" class="w-full h-full ">
        <div class="mt-[-40px]">
            <div class="  relative  ">


       <div class="">
        <div class="bg rounded-b-[50px] "></div>
        <div class="bg bg2 rounded-b-[50px]"></div>
        <div class="bg bg3 rounded-b-[50px]"></div>
       </div>
          
          
          
       <img :src="blog.imageBlog.photo" alt="" class="absolute overflow-hidden inset-0 -z-10 h-full w-full object-cover " />
       <img class="absolute backdrop-blur-md overflow-hidden inset-0 -z-10  h-full w-full  " />
                <div class="absolute inset-x-0 -top-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
                  <div
                    class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
                    style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
                </div>
                <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:pt-[1rem] lg:pb-[12rem]">
          
                  <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          
                  </div>
             
               
                </div>
          
               
              </div>
              <div class="mt-[-30px]">
             
                <svg id="Layer_2" class="w-full" fill="white" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 695.06 35.8">
               
                  <g id="Layer_2-2" data-name="Layer 2">
                    <g id="Layer_1-2" data-name="Layer 1-2">
                      <path class="cls-1" d="M695.06,0V35.8H0V0S194.27,12.75,356.77,12.75,695.06,0,695.06,0Z"/>
                    </g>
                  </g>
                </svg>
            
              
              </div>
    </div>
        <div class=" shadow-lg -mt-40 pb-10 flex justify-center">
            <div class="max-w-[75rem] flex flex-col shadow-lg rounded-[25px] overflow-hidden">
               <div class="relative isolate overflow-hidden ">
                
               <div class="grid grid-cols-4 gap-4 bg-white p-4 pb-10">
                     <div class="col-span-3  ">
                         <div class="relative isolate shadow-xl rounded-[25px] pb-10 h-[30rem]">
                             
                             <img :src="blog.imageBlog.photo" :alt="blog.imageBlog.title_for_photo"
                                 class="absolute inset-0 -z-1000  h-[30rem] w-full rounded-[25px] object-cover" />
                                 <div
                                 class="absolute inset-0 -z-9999 bg-gradient-to-tr from-gray-700 to-gray-900 opacity-80 rounded-[25px] h-[30rem] w-full" />
                           
                             <div class="absolute inset-0 -z-1000  h-[30rem] w-full ">
                                 <h1 class="font-bold rtl px-16 pt-16 text-white text-5xl">
                                     {{ blog.title }}
                                 </h1>
                
                             </div>
                           
                             
                         </div>
                     </div>
                     <div class="bg-gray-200 shadow-xl rounded-[30px]">
                        <div class="flex flex-col justify-between h-full">
                            <div>
                                <div class="flex justify-end items-center pt-10 px-5 ">
                                    <p class="text-black text-5sm font-bold pe-4">
                                        {{ blog.author.get_full_name }}
                                    </p>
                                    <img src="/images/6.jpg" class="h-10 w-10 rounded-full bg-gray-200" alt="" />
                                </div>
                                <div class="pe-5 pt-5 text-gray-600 flex justify-end">
                                    <p>:دسته بندی ها</p>
                                </div>
                                <div class="flex justify-end px-2">
                                    <div class="flex flex-wrap rtl">
                                        <div class="text-sm flex flex-row items-center bg-gray-100 my-2 text-gray-500 py-1 px-2 mx-1 rounded-full hover:bg-gray-300 hover:text-gray-600" v-for="category in blog.category" :key="category.id">
                                            <p class="px-2">{{category.title}}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="pb-8 px-5 flex items-center justify-between">
                                <div>
                                    <p class=" text-black  text-sm">
                                        {{ blog.created_at }}
                                    </p>
                                </div>
                                <button
                                    class="text-sm flex items-center bg-gray-100  text-gray-500 py-2 px-3 rounded-full hover:bg-red-600 hover:text-white focus:outline-none focus:shadow-outline"
                                    @click="readMore">
                                    <div class="pr-1">
                                    {{blog.like_count}}
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
import { HeartIcon } from '@heroicons/vue/24/outline'
import axios from 'axios'
export default {
    components: {
        HeartIcon,
    },
    props: {

    },
    data: () => ({
        blog: null,
    }),
    methods: {
        getData() {
            this.loading = true
            axios.get(`http://192.168.1.109:8000/api/blog/blog-retrieve-main-page/${this.$route.params.id}/`, {
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json",
                },
            }).then((response) => {
                this.blog = response.data
                this.loading = false

            })
        }
    },
    mounted() {
        this.getData()
    }
}
</script>

<style ></style>