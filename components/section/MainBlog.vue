<template>
  <div class="flex pt-2 justify-between items-center">
    <div  class="rtl mx-10 ">
      <a href="#" class=" rtl  ">
        بیشتر
        <span aria-hidden="true" class="px-3 pt-3"> &larr;</span>
      </a>
    </div>
    <div class=" font-bold text-xl text-right px-10 pt-4">
      مقاله ها
    </div>
  </div>
  <div class="bg-white  py-24 sm:py-32">
    <div class="mx-auto max-w-7xl px-6 lg:px-8">
      <div class="mx-auto max-w-2xl text-center">
        <h2 class="text-3xl font-bold tracking-tight text-gray-900 pb-10 sm:text-4xl">{{title}}</h2>
       
      </div>
      <div class="mx-auto  grid w-2xl grid-cols-1 gap-x-10 gap-y-10 lg:mx-0 lg:max-w-none lg:grid-cols-2">
        <div v-for="blog in blogs" :key="blog.id">
            <Blog  :blog="blog"/>
        </div>

      </div>
    </div>
  </div>
</template>

<script >
import axios from 'axios'
import Blog from '~/components/shared/Blog.vue' 
export default {
  components: { 
    Blog
  },
  props :{
    title : 'مقالات برتر'
  },
  data: () => ({
    blogs : [],
    loading : true
  }),
  methods: {
    getData() {
      this.loading = true
      axios.get(`http://192.168.45.128:8000/api/blog/blog-list-main-page/`, {
          headers: {
              "Content-type": "application/json",
              Accept: "application/json",
          },
      }).then((response) => {
          this.blogs = response.data
          this.loading = false

      })
  }},
  mounted() {
    this.getData()
  } 
}
</script>