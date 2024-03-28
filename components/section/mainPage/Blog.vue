<template>
  <div v-if="loading"></div>
  <div v-else>
    <div class="flex pt-2  justify-between items-center">
      <div class="rtl mx-10">
        <a href="#" class="rtl">
          بیشتر
          <span aria-hidden="true" class="px-3 pt-10"> &larr;</span>
        </a>
      </div>

      <div class="font-bold text-md lg:text-xl text-right px-10 pt-10 flex items-center justify-end">مقاله ها

        <div
                    class="ml-2 lg:mx-5  h-12 w-12 bg-gradient-to-b from-indigo-500 to-indigo-700  flex justify-center  items-center rounded-xl">
                    <DocumentTextIcon class="h-5 text-white" />
                </div>
      </div>
    </div>
    <div class="bg-white py-4 sm:py-3 mb-20">
      <div class="mx-auto max-w-7xl px-6 lg:px-8">
        <div class="mx-auto max-w-2xl text-center">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 pb-10 sm:text-4xl"
          >
            {{ title }}
          </h2>
        </div>
        <div
          class="mx-auto grid w-2xl grid-cols-1 gap-x-10 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2"
        >
          <div v-for="(blog, index) in blogs" :key="blog.id">
            <Blog
              class="lg:px-7"
              :blog="blog"
              data-aos="fade-up"
     data-aos-anchor-placement="bottom-bottom"
              :data-aos-delay="index * 200"
            />
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
    Blog,DocumentTextIcon
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
