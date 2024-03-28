<template>
    <div v-if="blogs == []">
        <div class="container rtl px-10 my-6">
            <div class="bg-indigo-100 border-r-[9px] border-indigo-500 rounded-lg text-indigo-700 p-4" role="alert">
                <p class="font-bold">مقاله‌ای یافت نشد </p>
            </div>
        </div>
    </div>
    <div v-else>
        <div class="flex py-5 justify-between items-center">
            <div class="rtl lg:mx-10 ">
                <a @click="$router.push('/search/?tab=2&shop_blog=' + this.idShop );" class=" rtl cursor-pointer ">
                    بیشتر
                    <span aria-hidden="true" class="px-3 pt-10"> &larr;</span>
                </a>
            </div>
            <div class=" font-bold text-xl text-right px-6  flex items-center justify-end">
                {{ title }}
                <div
                    class="ml-2 lg:mx-5  h-12 w-12 bg-gradient-to-b from-indigo-500 to-indigo-700  flex justify-center  items-center rounded-xl">
                    <DocumentTextIcon class="h-5 text-white" />
                </div>
            </div>
        </div>
        <div class="  py-4 sm:py-3 ">
            <div class="mx-auto max-w-7xl px-6 lg:px-8 pb-10">
                <div class="mx-auto max-w-2xl text-center">

                </div>
                <div class="mx-auto grid  w-2xl grid-cols-1 gap-x-10 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div v-for="blog, index in blogs.results" :key="blog.id" class="col-span-1 ">
                        <Blog :blog="blog" data-aos="fade-up" :data-aos-delay="index * 200" />
                    </div>

                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { apiStore } from '~/store/api';
import axios from 'axios'
import Blog from '~/components/shared/Blog.vue'
import { DocumentTextIcon } from '@heroicons/vue/20/solid'

export default {
    components: {
        Blog, DocumentTextIcon
    },
    props: ["title", "idObject", "idShop"],
    data: () => ({
        blogs: [],
        loading: true
    }),
    methods: {
        getData() {
            this.loading = true
            axios.get(`${apiStore().address}/api/blog/search-blog-for-buyers/?shop=${this.idShop}`, {
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json",
                },
            }).then((response) => {
                this.blogs = response.data
                this.loading = false

            })
        }
    },
    mounted() {
        this.getData()
    }
}
</script>