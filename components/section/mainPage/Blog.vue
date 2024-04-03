<template>
  <div class="pb-16 py-[60px] pb-[60px]  flex items-center justify-center" v-if="loading">
        <div role="status">
            <span class="relative flex h-8 w-8">
                <span
                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-8 w-8 bg-indigo-500"></span>
            </span>
            <span class="sr-only">Loading...</span>
        </div>
    </div>
  <div v-else>
    <div class="flex pt-2  justify-between items-center">
      <div class="rtl mx-10">
        <a href="#" class="rtl text-sm mg:text-lg pt-10 flex items-center">
          بیشتر
          <span aria-hidden="true" class="px-3 pt-1 "> &larr;</span>
        </a>
      </div>

      <div class="font-bold text-md md:text-xl text-right px-10 pt-10 flex items-center justify-end">مقاله ها

        <div
          class="ml-2 md:mx-5  h-12 w-12 bg-gradient-to-b from-indigo-500 to-indigo-700  flex justify-center  items-center rounded-xl">
          <DocumentTextIcon class="h-5 text-white" />
        </div>
      </div>
    </div>
    <div class="bg-white py-4 sm:py-3 mb-20">
      <div class="mx-auto max-w-7xl px-6 md:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2 class="text-3xl font-bold tracking-tight text-gray-900 pb-10 sm:text-4xl">
            {{ title }}
          </h2>
        </div>
        <div class="mx-auto grid w-2xl grid-cols-1 gap-x-10 gap-y-10 md:mx-0 md:max-w-none md:grid-cols-2">
          <div v-for="(blog, index) in blogs" :key="blog.id">
            <Blog class="md:px-7" :blog="blog" data-aos="fade-up" data-aos-anchor-placement="top-bottom"
              data-aos-duration="1000"  :data-aos-delay="index * 200" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { apiStore } from "~/store/api";
import axios from "axios";
import { useUserStore } from "~/store/user";
import Blog from "~/components/shared/Blog.vue";
import { DocumentTextIcon } from '@heroicons/vue/20/solid'

export default {
  components: {
    Blog, DocumentTextIcon
  },
  props: {
    title: "مقالات برتر",
  },
  data: () => ({
    blogs: [],
    loading: true,
  }),
  computed: {
    isLogin() {
      return useUserStore().userToken != null;
    },
  },
  methods: {
    getData() {
      this.loading = true;
      axios
        .get(`${apiStore().address}/api/blog/blog-list-main-page/`, {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            Authorization:
              this.isLogin == true ? `Token ${useUserStore().userToken}` : "",
          },
        })
        .then((response) => {
          this.blogs = response.data.slice(0, 4);
          this.loading = false;
        });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>
