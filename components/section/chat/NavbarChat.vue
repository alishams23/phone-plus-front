<template>
{{ user }}
  <nuxt-link type="div" :to="'/' + user.username" class=" lg:pr-4  d-flex align-items-center space-x-3 "
  v-if="user != null">
  <div class="
          h-10
        
          rounded-2xl
          overflow-hidden
          shadow-lg
          w-10
        ">
    <img v-bind:src="
     user.image != null
        ? '' + user.image
        : '/images/2.jpeg'
    " alt="" class="rounded-2xl " />
  </div>
  <div class="flex-1 min-w-0 relative text-gray-500">
    <h4 class=" irsa text-sm text-black">
      {{ user.get_full_name }}
    </h4>
  </div>
</nuxt-link>

<nuxt-link to="/" class=" h-10 w-10 rounded-full bg-treaget treaget-shadow d-flex align-items-center justify-content-center ">
  <i class="fa fa-home text-white p-2"></i>
</nuxt-link>

</template>
  
<script>
  

export default {
  props:['user'],
  data() {
    return {
    
      par:null
    }
  },
  methods: {
  

  }

};
</script>
  
<style ></style>