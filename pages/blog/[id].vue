<template>
    {{ blog }}
    <div v-if="blog != null" class="w-full h-full">
        <div class="w-full h-56 bg-indigo-600 flex py-10 flex-col shadow-xl justify-center items-center space-y-4" />
        <div class=" shadow-lg -mt-32 pb-10 flex justify-center">
            <div class="max-w-[65rem] flex flex-col shadow-lg rounded-[25px] overflow-hidden">
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
                         <div >
                            
                            <p class="flex justify-end pt-10 px-24 text-black text-5sm">
                                نویسنده: {{ blog.author.get_full_name }}
                            </p>
                            <p class="flex justify-end pt-10 px-24 text-black text-sm">
                                {{ blog.created_at }}
                            </p>
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
import axios from 'axios'
export default {
    components: {

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