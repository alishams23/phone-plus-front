<template>
    <div v-if="loading" data-aos="fade-down">
        <div class="grid rtl grid-cols-1 gap-4 lg:col-span-2 lg:mx-[3rem] ">
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
        <div v-if="orders.length==0 " data-aos="fade-up">
            <div class="grid rtl grid-cols-1 gap-4 lg:col-span-2 lg:mx-[3rem] ">
                <section aria-labelledby="section-1-title">
                    <h2 class="sr-only" id="section-1-title">Section title</h2>
                    <div class="overflow-hidden rounded-lg bg-white shadow">
                        <div class="bg-indigo-100 border-r-[9px] border-indigo-500 mt-10 mb-[12rem] mx-10 rounded-lg text-indigo-700 p-4"
                            role="alert">
                            <p class="font-bold">سفارشی یافت نشد</p>
                        </div>
                    </div>
                </section>
            </div>
        </div>
        <div v-else>
            <div class="grid grid-cols-1 px-3 pb-10">
                <div v-for="data in orders" :key="data.id">
                    <div
                    class="min-h-[300px] mt-12 lg:mt-0 bg-gray-100 border shadow-xl lg:mx-[3rem]  flex flex-wrap my-2 items-center justify-end rounded-2xl">
                        <div class="grid flex items-center justify-start w-full grid-cols-6">
                            <div class="col-span-1 lg:hidden"/>
                            
                            <div class="col-span-4 lg:col-span-2">
                                <img :src="data.product.image[0].photo" alt=""
                                    class=" w-56 lg:w-56 h-56 lg:h-56 -mt-10 lg:mt-0 lg:-ms-10 flex items-center object-cover shadow-lg rounded-3xl" />
                            </div>
                            <div class="col-span-6 lg:col-span-4">
                                <div class="w-full flex justify-end ">
                                    <div class=" w-[95%] pe-4">
                                        <div class="flex flex-wrap pt-7 ">
                                            <div class="flex w-full">
                                                <div
                                                    class="flex w-full items-center text-indigo-600 after:content-[''] after:w-full after:h-1 after:border-b after:border-indigo-100 after:border-4 after:inline-block   0">
                                                    <span
                                                        class="flex items-center justify-center w-10 h-10 bg-indigo-100 rounded-full lg:h-12 lg:w-12 shrink-0">
                                                        <svg class="w-3.5 h-3.5 text-indigo-600 lg:w-4 lg:h-4 " aria-hidden="true"
                                                            xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                                                            <path stroke="currentColor" stroke-linecap="round"
                                                                stroke-linejoin="round" stroke-width="2"
                                                                d="M1 5.917 5.724 10.5 15 1.5" />
                                                        </svg>
                                                    </span>
                                                </div>
                                                <div :class="data.status == 'none' ? 'after:border-gray-200' : 'after:border-indigo-100' , data.status != 'sended' &&  data.status != 'received'? ' animate-pulse' : ''"
                                                    class="flex w-full items-center after:content-[''] after:w-full after:h-1 after:border-b after:border-4 after:inline-block ">
                                                    <span :class="data.status == 'none' ? 'bg-gray-200' : 'bg-indigo-100'"
                                                        class="flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12 shrink-0">
                                                        <div v-if="data.status == 'none'">
                                                            <svg class="w-3 h-3 text-gray-400 lg:w-4 lg:h-4 " aria-hidden="true"
                                                                xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                                viewBox="0 0 20 16">
                                                                <path
                                                                    d="M18 0H2a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2ZM6.5 3a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3.014 13.021l.157-.625A3.427 3.427 0 0 1 6.5 9.571a3.426 3.426 0 0 1 3.322 2.805l.159.622-6.967.023ZM16 12h-3a1 1 0 0 1 0-2h3a1 1 0 0 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Zm0-3h-3a1 1 0 1 1 0-2h3a1 1 0 1 1 0 2Z" />
                                                            </svg>
                                                        </div>
                                                        <div v-else>
                                                            <svg class="w-3.5 h-3.5 text-indigo-600 lg:w-4 lg:h-4 "
                                                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 16 12">
                                                                <path stroke="currentColor" stroke-linecap="round"
                                                                    stroke-linejoin="round" stroke-width="2"
                                                                    d="M1 5.917 5.724 10.5 15 1.5" />
                                                            </svg>
                                                        </div>
                                                    </span>
                                                </div>
                                                <div class="flex items-center ">
                                                    <span :class="data.status != 'received' ? 'bg-gray-200' : 'bg-indigo-100' , data.status != 'received' &&  data.status != 'none'? ' animate-pulse' : '' "
                                                        class="flex items-center justify-center w-10 h-10 rounded-full lg:h-12 lg:w-12  shrink-0">
                                                        <div v-if="data.status == 'received'">
                                                            <svg class="w-3.5 h-3.5 text-indigo-600 lg:w-4 lg:h-4 "
                                                                aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none"
                                                                viewBox="0 0 16 12">
                                                                <path stroke="currentColor" stroke-linecap="round"
                                                                    stroke-linejoin="round" stroke-width="2"
                                                                    d="M1 5.917 5.724 10.5 15 1.5" />
                                                            </svg>
                                                        </div>
                                                        <div v-else>
                                                            <svg class="w-3 h-3 text-gray-400 lg:w-4 lg:h-4 " aria-hidden="true"
                                                                xmlns="http://www.w3.org/2000/svg" fill="currentColor"
                                                                viewBox="0 0 18 20">
                                                                <path
                                                                    d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2ZM7 2h4v3H7V2Zm5.7 8.289-3.975 3.857a1 1 0 0 1-1.393 0L5.3 12.182a1.002 1.002 0 1 1 1.4-1.436l1.328 1.289 3.28-3.181a1 1 0 1 1 1.392 1.435Z" />
                                                            </svg>
                                                        </div>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <h3 class="mt-3 text-right text-lg pe-4 py-3 font-semibold leading-6 text-black">
                                    <a>
                                        {{ data.product.title }}
                                    </a>
                                </h3>
                                <div class="text-right pe-4 pb-4">
                                    <div class="flex justify-end items-center">
                                        <p class="pe-1 text-[10px] text-gray-400">تومان</p>
                                        <p> {{ data.price }}</p>
                                    </div>
                                </div>
                                <p class=" text-right text-xs pe-4 test-n pb-4" v-html="truncatedBody(data.product.description)">
                                </p>
                                <div v-if="data.product_color" class="flex flex-wrap items-center justify-end pe-4 pb-4">
                                    <p class="text-xs text-gray-500">{{ data.product_color.title }}</p>
                                    <div class="w-4 h-4 border shadow-sm rounded-full shadow-lg m-1"
                                        :style="{ backgroundColor: data.product_color.hexcolor }"></div>
                                </div>
                                <div class="flex pe-4 pb-4 justify-end w-full items-center">
                                    <p v-if="data.status == 'none'" class="p-2 text-[12px]">
                                        ...درحال آماده سازی برای ارسال
                                    </p>
                                    <p v-else-if="data.status == 'sended'" class="p-2 text-[12px]">
                                        ارسال شده
                                    </p>
                                    <p v-else class="p-2 text-[12px]">
                                        تحویل داده شده
                                    </p>
                                    <p class="text-[9px] text-gray-400">
                                        :وضعیت
                                    </p>
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
import { NavigationStore } from '~/store/navigation'; 

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
            orders: [],
            loading: true
        }
    },
    methods: {
        getData() {
            this.loading = true
            console.log(useUserStore().userToken)
            axios.get(`${apiStore().address}/api/order/order-user-list/`, {
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json",
                    Authorization: `Token ${useUserStore().userToken}`,
                },
            }).then((response) => {
                this.orders = response.data
                console.log(this.orders);
                console.log('ad');
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
        NavigationStore().setButtons([

        ])
    }

}
</script>