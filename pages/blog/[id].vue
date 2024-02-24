<template>
    <div v-if="blog != null" class="w-full h-full">
        <div class="w-full h-56 bg-indigo-600 flex py-10 flex-col shadow-xl justify-center items-center space-y-4" />
        <div class=" shadow-lg -mt-32 pb-10 flex justify-center">
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
            axios.get(`http://192.168.45.128:8000/api/blog/blog-retrieve-main-page/${this.$route.params.id}/`, {
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