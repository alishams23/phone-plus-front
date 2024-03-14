<template>
    <div v-if="loading">
        <div class="grid rtl grid-cols-1 gap-4 lg:col-span-2">
            <section aria-labelledby="section-1-title">
                <h2 class="sr-only" id="section-1-title">Section title</h2>
                <div class="overflow-hidden rounded-lg bg-white shadow">
                    <div  class="p-16 flex items-center justify-center " >
                        <div role="status">
                            <svg aria-hidden="false" class="w-8 h-8 text-gray-100 animate-spin fill-indigo-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                            </svg>
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>  
                </div>
            </section>
        </div>
    </div>
    <div v-else>
        <div v-if="orders==null">
            <div class="grid rtl grid-cols-1 gap-4 lg:col-span-2">
                <section aria-labelledby="section-1-title">
                    <h2 class="sr-only" id="section-1-title">Section title</h2>
                    <div class="overflow-hidden rounded-lg bg-white shadow">
                        <div class="bg-indigo-100 border-r-4 border-indigo-500 mt-10 mb-[12rem] mx-10 rounded-lg text-indigo-700 p-4"
                            role="alert">
                            <p class="font-bold">سفارشی یافت نشد</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <div v-else>
            <div class="grid grid-cols-1 pb-10">
                <div v-for="data in orders" :key="data.id">
                    <div
                    class="min-h-[300px] bg-gray-100 border shadow-xl mx-[3rem] flex flex-wrap my-2 items-center justify-end rounded-2xl">
                        <div class="grid flex items-center grid-cols-6">
                            <div class="col-span-2 ">
                                <img :src="data.digital_product.image[0].photo" alt=""
                                    class=" w-56 h-56 -ms-10 flex items-center object-cover shadow-lg rounded-3xl" />
                            </div>
                            <div class="col-span-4">
                                
                                <h3 class="mt-3 text-right text-lg pe-4 py-3 font-semibold leading-6 text-black">
                                    <a>
                                        {{ data.digital_product.title }}
                                    </a>
                                </h3>
                                <div class="text-right pe-4 pb-4">
                                    <div class="flex justify-end items-center">
                                        <p class="pe-1 text-[10px] text-gray-400">تومان</p>
                                        <p> {{ data.price }}</p>
                                    </div>
                                </div>
                                <p class=" text-right text-xs pe-4 test-n pb-4" v-html="truncatedBody(data.digital_product.description)">
                                </p>
                                <div v-if="data.subset_Digital">
                                    <div class="flex items-center justify-center flex-wrap py-3 ">
                                        <div v-for="cell in data.subset_Digital.data" class="px-5 flex flex-col items-center" :key="cell.id" >
                                          
                                                <p class="font-bold">
                                                    {{ cell.title }}
                                                </p>
                                                <p>
                                                    {{ cell.body }}
                                                </p>
                                         
                                        </div>
                                    </div>
                                </div>
                                <div v-if="data.digital_product.file" class="flex justify-center  pe-4">
                                    <a
                                        :href="data.digital_product.file"
                                        class="inline-flex items-center justify-center px-5 py-3 mb-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700"
                                    >
                                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                                        </svg>
                                        دانلود فایل
                                    </a>                                                                                                                                                                                                                             
                                </div>                                      
                            </div>
                        </div>
            
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script >
import axios from 'axios'
import { useUserStore } from '~/store/user';
import { apiStore } from '~/store/api';
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
            console.log(useUserStore().userToken)
            axios.get(`${apiStore().address}/api/order/order-digital-product-user-list/`, {
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json",
                    Authorization: `Token ${useUserStore().userToken}`,
                },
            }).then((response) => {
                this.orders = response.data
                console.log('order', this.orders);
                this.loading = false

            })
        },
        currentRouteCheck(url) {
            return this.$route.name.split("-").includes(url.split('/')[1]);
        },
        truncatedBody(description) {
            const charLimit = 130; // Adjust the limit as needed
            const ending = description.length > charLimit ? '...' : '';
            return description.substring(0, charLimit) + ending;
        },
    },
    mounted() {
        this.getData()
    }

}
</script>