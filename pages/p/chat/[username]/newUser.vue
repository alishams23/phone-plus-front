<template>
    <div class="h-full ">
        <div class="pb-16 py-[200px] pb-[800px] bg-white   flex items-center justify-center " >
        <div role="status">
            <span class="relative flex h-8 w-8">
                <span
                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-8 w-8 bg-indigo-500"></span>
            </span>
            <span class="sr-only">Loading...</span>
        </div>
    </div>
    </div>
  </template>
  
  <script>
    
  import moment from 'moment-jalaali';
  
  import {
    PaperAirplaneIcon
  } from '@heroicons/vue/24/outline'
   
  
  export default {
    components: { PaperAirplaneIcon, },
    setup() {
      definePageMeta({
        layout: "chat-layout",
      })
    },
    data() {
      return {
        test: [],
        message: [],
        messages: [],
        inputData: '',
        username: this.$route.params.username,
        userSelf: useUserStore().username,
        scrollStatus: true,
        counter: 0,
        headers: {
          'Content-type': 'application/json',
          Accept: 'application/json',
          Authorization: `Token ${useUserStore().userToken}`
        },
        setInterval2: null,
        setInterval3: null,
        loadingGetMessage: false,
        chatSocket: null
      }
    },
    mounted() {
   
        fetch(
            `${apiStore().address}/api/chat/ChatRetrieve/${this.$route.params.username}/`,
            {
              headers: this.headers
            }
          )
            .then(response => response.json())
            .then((data) => {
              this.username = data.contact.username
              this.$router.push('/p/chat/' + data.contact.username + '/' + data.room_name);
            })
    },

    methods: {

  
    },
  
  }
  </script>
  
  <style >
  

  </style>
  