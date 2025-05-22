<template>
    <div v-if="loading">
        <div class="grid rtl grid-cols-1 gap-4 lg:col-span-2 lg:mx-[3rem] mt-12 lg:mt-0">
            <section aria-labelledby="section-1-title">
                <h2 class="sr-only" id="section-1-title">Section title</h2>
                <div class="overflow-hidden rounded-lg bg-white shadow">
                    <div  class="p-16 flex items-center justify-center " >
                        <div role="status">
                            <svg aria-hidden="false" class="w-14 h-14 text-gray-100 animate-spin fill-indigo-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <!-- spinner paths -->
                            </svg>
                            <span class="sr-only">Loading...</span>
                        </div>
                    </div>  
                </div>
            </section>
        </div>
    </div>
    <div v-else>
        <div v-if="orders.length==0 " data-aos="zoom-out" data-aos-duration="500">
            <div class="grid rtl grid-cols-1 gap-4 lg:col-span-2 lg:mx-[3rem] mt-12 lg:mt-0">
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
            <div v-if="filteredOrders.length != 0 " class="grid grid-cols-1 px-3 pb-10 mt-12 lg:mt-0">
                <div v-for="data in filteredOrders" :key="data.id">
                    <div 
                        class="min-h-[300px] mt-12 lg:mt-0 bg-gray-100 border shadow-xl lg:mx-[3rem]  flex flex-wrap my-2 items-center justify-end rounded-2xl">
                        <div class="grid flex items-center justify-start w-full grid-cols-6">
                            <div class="col-span-1 lg:hidden"/>
                            
                            <div class="col-span-4 lg:col-span-2">
                                <img :src="data.product.image[0].photo" alt=""
                                    class=" w-56 lg:w-56 h-56 lg:h-56 -mt-10 lg:mt-0 lg:-ms-10 flex items-center object-cover shadow-lg rounded-3xl" />
                            </div>
                            <div class="col-span-6 lg:col-span-4">
                                <!-- existing order markup -->
                                <div class="w-full flex justify-end ">
                                    <div class=" w-[95%] pe-4">
                                        <!-- ...status indicators... -->
                                    </div>
                                </div>
                                <div class="text-right pe-4 pt-2">
                                    <div class="flex justify-end items-center">
                                        <p class="pe-1 text-[10px] text-gray-400 rtl">{{ data.jalali_time }}</p>
                                    </div>
                                </div>
                                <div class="text-right pe-4 pb-4">
                                    <div class="flex justify-end items-center">
                                        <p class="pe-1 text-[10px] text-gray-400">تومان</p>
                                        <p> {{ price(parseInt(data.price/10)) }}</p>
                                    </div>
                                </div>
                                <p class=" text-right text-xs pe-4 test-n pb-4" v-html="truncatedBody(data.product.description)"></p>
                                <div v-if="data.product_color" class="flex flex-wrap items-center justify-end pe-4 pb-4">
                                    <p class="text-xs text-gray-500">{{ data.product_color.title }}</p>
                                    <div class="w-4 h-4 border shadow-sm rounded-full shadow-lg m-1"
                                        :style="{ backgroundColor: data.product_color.hexcolor }"></div>
                                </div>
                                <div class="text-right pe-4 pt-2">
                                    <div class="flex justify-end items-center">
                                        <p class="pe-1 text-[10px] text-gray-700 font-bold rtl">{{ data.order_id }}</p>
                                        <p class="pe-1 text-[10px] text-gray-400 rtl">شماره سفارش : </p>
                                    </div>
                                    <div class="flex justify-end items-center">
                                        <p class="pe-1 text-[10px] text-gray-700 font-bold rtl">{{ data.tracking_code }}</p> 
                                        <p class="pe-1 text-[10px] text-gray-400 rtl">کدپیگیری : </p>
                                    </div>
                                </div>
                                <h3 class="mt-3 text-right text-lg pe-4 py-3 font-semibold leading-6 text-black">
                                    <a>{{ data.product.title }}</a>
                                </h3>
                                <div class="flex pe-4 pb-4 justify-end w-full items-center">
                                    <p v-if="data.status == 'none'" class="p-2 text-[12px]">...درحال آماده سازی برای ارسال</p>
                                    <p v-else-if="data.status == 'sended'" class="p-2 text-[12px]">ارسال شده</p>
                                    <p v-else class="p-2 text-[12px]">تحویل داده شده</p>
                                    <p class="text-[9px] text-gray-400">:وضعیت</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div v-else >
                <div class="grid rtl grid-cols-1 gap-4 lg:col-span-2 lg:mx-[3rem] mt-12 lg:mt-0">
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

            <!-- pagination controls added -->
            <div class="w-full flex justify-center mt-6 space-x-2 rtl">
              <button
                @click="page--"
                :disabled="!previous"
                class="px-4 py-2 rounded-lg border hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >صفحه قبل</button>

              <span class="px-4 py-2">صفحه {{ page }}</span>

              <button
                @click="page++"
                :disabled="!next"
                class="px-4 py-2 rounded-lg border hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
              >صفحه بعد</button>
            </div>
        </div>
    </div>
</template>

<script>
import axios from 'axios'
import { useUserStore } from '~/store/user';
import { apiStore } from '~/store/api';
import { NavigationStore } from '~/store/navigation'; 

export default {
    setup() {
        definePageMeta({ layout: "user-dashboard" })
    },
    components: {},
    data() {
        return {
            orders: [],
            loading: true,
            // pagination state:
            page: 1,
            next: null,
            previous: null,
        }
    },
    computed: {
        filteredOrders() {
            return this.orders.filter(order => order.status == 'received');
        }
    },
    watch: {
        page() {
            this.getData();
        }
    },
    methods: {
        price(value){
            let chars = Array.from(`${value}`)
            for (let index = 1; index <= chars.length; index++) {
                if(index % 3==0 && chars.length != index) {
                  chars[chars.length-index] = `,${chars[chars.length-index]}`;
                }
            }
            return chars.join("");
        },
        getData() {
            this.loading = true
            axios.get(`${apiStore().address}/api/order/order-product-user-list/`, {
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json",
                    Authorization: `Token ${useUserStore().userToken}`,
                },
                params: { page: this.page }
            }).then((response) => {
                const data = response.data;
                // support paginated or non-paginated
                this.orders   = data.results || data;
                this.next     = data.next || null;
                this.previous = data.previous || null;
                console.log(this.orders);
                this.loading = false;
            })
        },
        currentRouteCheck(url) {
            return this.$route.name.split("-").includes(url.split('/')[1]);
        },
        truncatedBody(description) {
            const charLimit = 130;
            const ending = description.length > charLimit ? '...' : '';
            return description.substring(0, charLimit) + ending;
        },
    },
    mounted() {
        if (useUserStore().userToken == null){
            this.$router.push('/')
            return
        }
        this.getData()
        NavigationStore().setButtons([
            { name:'خروج', func:null, href:'/p/auth/logOut' }
        ])
    }
}
</script>
