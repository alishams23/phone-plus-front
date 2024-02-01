<template>
    <div class="flex items-center justify-center h-screen bg-gradient-to-r from-red-500 to-red-300">
      <div class="bg-white p-6 rounded-lg shadow-md w-96">
        <div class="font-bold text-red-500 text-lg">{{ date }}</div>
        <div class="text-gray-900 font-semibold text-xl mt-2">{{ title }}</div>
        <p class="text-gray-600 mt-2">{{ description }}</p>
        <button class="mt-4 bg-red-500 text-white font-bold py-2 px-4 rounded hover:bg-red-600 focus:outline-none focus:shadow-outline" @click="readMore">
          READ MORE
        </button>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    name: 'CardComponent',
    data() {
      return {
        date: 'December 2020',
        title: 'Lorem Ipsum Dolor?',
        description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ullamcorper pretium orci.'
      }
    },
    methods: {
      readMore() {
        // Define what happens when the "READ MORE" button is clicked.
      }
    }
  }
  </script>
  