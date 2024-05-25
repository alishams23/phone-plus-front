import { defineStore } from 'pinia';



export const apiStore = defineStore('api', {
  state: () => ({
    address: 'http://127.0.0.1:8000',
    ws: 'ws://127.0.0.1:8000',
  }),
  actions: {

  },
});