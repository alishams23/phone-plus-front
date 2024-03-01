<template>
   <div class="grid grid-cols-1">
     <div v-for="data in orders" :key="data.id" > 
        <div class="h-[300px] bg-gray-100 shadow-xl mx-[3rem] isolate my-2  justify-end rounded-2xl">
            <img :src="data.product.image[0].photo" alt="" class="absolute w-56 h-56 -ms-10 -mb-10 mt-10 shadow-lg rounded-3xl" />
            <h3 class="mt-3 text-right text-lg pe-4 py-7 font-semibold leading-6 text-black">
              <a>
                {{ data.product.title }}
              </a>
            </h3>
            <div class="text-right pe-4 pb-4">
              {{ data.price }}
            </div>
            <div class="text-right text-xs pe-4 test-n pb-4" v-html="data.product.description">
            </div>
            <div v-if="data.product_color" class="flex flex-wrap items-center justify-end pe-4 pb-4">
              <p class="text-xs text-gray-500">{{ data.product_color.title }}</p>  
              <div class="w-4 h-4 border shadow-sm rounded-full shadow-lg m-1" :style="{ backgroundColor: data.product_color.hexcolor }"></div>
            </div>
            <div v-if="data.status=='none'" class="flex flex-wrap items-center justify-end pe-4 pb-4">
              <p class="text-xs text-gray-500">{{ data.product_color.title }}</p>  
              <div class="w-4 h-4 border shadow-sm rounded-full shadow-lg m-1" :style="{ backgroundColor: data.product_color.hexcolor }"></div>
            </div>
            <ol class="flex items-center w-full">
                <li class="flex w-full items-center text-blue-600 dark:text-blue-500 after:content-[''] after:w-full after:h-1 after:border-b after:border-blue-100 after:border-4 after:inline-block   0">
                    <span class="flex items-center justify-center w-10 h-10 bg-blue-100 rounded-full lg:h-12 lg:w-12 dark:bg-blue-800 shrink-0">
                        <svg class="w-3.5 h-3.5 text-blue-600 lg:w-4 lg:h-4 dark:text-blue-300" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                        </svg>
                    </span>
                </li>
                <li class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-gray-100 after:border-4 after:inline-block dark:after:border-gray-700">
                    <span class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                        <svg class="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 16">
                            <path d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z"/>
                        </svg>
                    </span>
                </li>
                <li class="flex items-center w-full">
                    <span class="flex items-center justify-center w-10 h-10 bg-gray-100 rounded-full lg:h-12 lg:w-12 dark:bg-gray-700 shrink-0">
                        <svg class="w-4 h-4 text-gray-500 lg:w-5 lg:h-5 dark:text-gray-100" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                            <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z"/>
                        </svg>
                    </span>
                </li>
            </ol>
        </div>
    </div>
   </div>
</template>

<script >
import axios from 'axios'
import { useUserStore } from '~/store/user';

export default {

    setup() {
        definePageMeta({
            layout: "user-dashboard",
        })
    },
    components: {

    },
    data() {
        return {
            orders: null,
            loading: true
        }
    },
    methods: {
        getData() {
            this.loading = true
            axios.get(`http://192.168.1.109:8000/api/order/order-user-list/`, {
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json",
                    Authorization: `Token ${useUserStore().userToken}`
                },
            }).then((response) => {
                this.orders = response.data
                this.loading = false

            })
        },
        currentRouteCheck(url) {
            return this.$route.name.split("-").includes(url.split('/')[1]);
        },
    },
    mounted() {
        this.getData()
    }

}
</script>