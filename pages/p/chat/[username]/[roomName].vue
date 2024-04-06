<template>
  <div class="h-full ">
    <!--  message-->
    <div class="w-full  h-full">

      <div class="pt-5 hidden sm:block"></div>
      <div v-if="loadingGetMessage == true" class="flex flex-col items-center pt-10 mt-5">
        <span class="relative flex h-8 w-8">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
          <span class="relative inline-flex rounded-full h-8 w-8 bg-indigo-500"></span>
        </span>
      </div>
      <div v-if="username == null" class="pt-5 mt-5 px-5">
        <div class="flex items-center justify-center">
          <div>گفت و گوی جدیدی را آغاز کنید</div>
        </div>
      </div>
      <!-- my message-->
      <div class="flex flex-col  pt-5 justify-between ">

        <div>


          <div v-for="data, index in messages" :key="data.id + 'message-chat-'"
            :class="data.username == userSelf ? 'flex-row-reverse' : ''" class="flex m-3 lg:items-center">
            <div class="w-8 h-8 hidden sm:block"></div>
            <div class="py-2 px-3 rounded-2xl relative h-full" :class="data.username == userSelf
                ? 'text-white bg-indigo-600 shadow-lg text-right'
                : 'text-gray-700 shadow-lg border-t text-right relative'
              ">
              <div v-if="data.content">{{ data.content }}</div>
              <div>
                <div v-if="data.read == 'True'">
                  <svg v-if="data.username == userSelf" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="currentColor" class="bi bi-check2-all" viewBox="0 0 16 16">
                    <path
                      d="M12.354 4.354a.5.5 0 0 0-.708-.708L5 10.293 1.854 7.146a.5.5 0 1 0-.708.708l3.5 3.5a.5.5 0 0 0 .708 0l7-7zm-4.208 7-.896-.897.707-.707.543.543 6.646-6.647a.5.5 0 0 1 .708.708l-7 7a.5.5 0 0 1-.708 0z" />
                    <path d="m5.354 7.146.896.897-.707.707-.897-.896a.5.5 0 1 1 .708-.708z" />
                  </svg>
                </div>
                <div v-else>
                  <svg v-if="data.username == userSelf" xmlns="http://www.w3.org/2000/svg" width="16" height="16"
                    fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                    <path
                      d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z" />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="pb-20"></div>
    <div class="fixed bottom-0 right-0 w-full  ">
      <div v-if="username != null && loadingGetMessage == false" class=" flex items-center flex-row px-10 pb-3 ">
        <div class="lg:w-72 "></div>
        <input v-model="inputData" placeholder="پیام شما" type="text"  style="
            word-break: break-all;"
          class="shadow-xl grow rtl bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-full focus:ring-blue-500 focus:border-blue-500 block h-15 p-3  "
          @keyup.enter="sendMessage()" />
        <div class="flex items-center px-2">
          <button id="text-submit" type="submit"
            class="bg-indigo-800 flex items-center justify-center rounded-full shadow-2 w-12 h-12 text-white"
            @click="sendMessage()">
            <PaperAirplaneIcon class="text-white h-5" />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { apiStore } from '~/store/api';

import {
  PaperAirplaneIcon
} from '@heroicons/vue/24/outline'
import { useUserStore } from '~/store/user';

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
 
      if (this.$route.params.username != null) {
        fetch(
          `${apiStore().address}/api/chat/ChatRetrieve/${this.$route.params.username}/`,
          {
            headers: this.headers
          }
        )
          .then(response => response.json())
          .then((data) => {
            console.log(data)
            this.username = data.contact.username
         
            this.user = data.contact
            this.$route.params.user = this.user
            this.roomName = data.room_name
            this.$route.params.roomName = this.roomName
            this.$forceUpdate();
          })
      } else {
        this.slideBarActivator()
      }
    
      this.connectToWebsocket(this.$route.params.roomName)
    
  },
  beforeDestroy() {
    if (this.chatSocket != null) {
      this.chatSocket.close()
    }
  },
  methods: {
    sendMessage() {
      if (this.inputData != null && this.inputData != '') {
        this.chatSocket.send(
          JSON.stringify({
            command: 'new_message',
            room_name: this.$route.params.roomName,
            message: this.inputData
          })
        )
        this.inputData = ''
      }
    },
    scrollMessage() {
      if (this.loadingGetMessage == false) {
        window.scrollTo(0, document.body.scrollHeight);
      }
    },
    addMessage(data) {
      this.messages.push(data)
    },
    async connectToWebsocket(roomName) {
    
      this.loadingGetMessage = true
      this.chatSocket = new WebSocket(
        `${apiStore().ws}` + '/ws/chat/' + roomName + '/' + useUserStore().userToken + '/'
      )
      this.chatSocket.onopen = (e) => {
        this.chatSocket.send(
          JSON.stringify({ command: 'fetch_message', room_name: roomName })
        )
      }
      this.chatSocket.onmessage = (e) => {
        const data = JSON.parse(e.data)
        if (data.command === 'fetch_message') {
          this.messages = data.message
          this.loadingGetMessage = false
          this.$nextTick(() => {
            this.scrollMessage()
          })
        } else if (data.command === 'new_message') {
          this.addMessage(data)
          this.$nextTick(() => {
            this.scrollMessage()
          })
          this.chatSocket.send(
            JSON.stringify({ command: 'read_message', room_name: roomName, message: data.id })
          )
        } else if (data.command === 'img') {
          this.addMessage(data)
          this.$nextTick(() => {
            this.scrollMessage()
          })
        } else if (data.command === 'read_message') {
          for (var i in this.messages) {
            if (this.messages[i].id == data.id) {
              this.messages[i].read = 'True';
              this.$forceUpdate();
            }
          }
        }
      }
      this.chatSocket.onclose = (e) => {
        console.error('Chat socket closed unexpectedly')
      }
    },

  },

}
</script>

<style scoped></style>
