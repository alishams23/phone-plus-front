<template>
    <div v-if="loading">
    </div>
    <div v-else>
        <div class="flex pt-2 justify-between items-center">
            <div class="rtl mx-10 ">
                <a href="#" class=" rtl  ">
                    بیشتر
                    <span aria-hidden="true" class="px-3 pt-10"> &larr;</span>
                </a>
            </div>
            <div class=" font-bold text-xl text-right px-10 pt-10">
                {{title}} 
            </div>
        </div>
        <div class="bg-white  py-4 sm:py-3">
            <div class="mx-auto max-w-7xl px-6 lg:px-8">
                <div class="mx-auto max-w-2xl text-center">

                </div>
                <div class="mx-auto grid  w-2xl grid-cols-1 gap-x-10 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div v-for="blog, index in blogs.results" :key="blog.id" class="col-start-2">
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
export default {
    components: {
        Blog
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