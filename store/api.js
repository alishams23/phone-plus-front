import { defineStore } from 'pinia';



export const apiStore = defineStore('api', {
  state: () => ({
    address: 'http://192.168.119.128:8000',
    ws: 'ws://192.168.119.128:8000',
  }),
  actions: {

  },
});