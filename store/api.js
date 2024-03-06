import { defineStore } from 'pinia';



export const apiStore = defineStore('api', {
  state: () => ({
    address: 'http://127.0.0.1:8000',
    ws: 'ws://192.168.109.1:8000',
  }),
  actions: {

  },
});