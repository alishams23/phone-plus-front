<template>
    
    <div>
        <TransitionRoot as="template" :show="show">
            <Dialog as="div" class="relative z-10" @close="show = false;">
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0"
                    enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" />
                </TransitionChild>
                <div v-if="snackbarVisible" class="bg-indigo-700 shadow-2 rtl text-white p-4 py-2 mx-10 rounded-full fixed top-4  flex justify-between items-center">
                    اطلاعات با موفقیت ذخیره شد
                    <button @click="snackbarVisible = false" class="text-white mr-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                    </button>
                </div>
                <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center items-center p-0">
                        <TransitionChild as="template" enter="ease-out duration-300"
                            enter-from="opacity-0 translate-y-4 translate-y-0 scale-95"
                            enter-to="opacity-100 translate-y-0 scale-100" leave="ease-in duration-200"
                            leave-from="opacity-100 translate-y-0 scale-100"
                            leave-to="opacity-0 translate-y-4 translate-y-0 scale-95">
                            <DialogPanel
                                class="relative text-right rtl transform overflow-hidden rounded-[25px] bg-white text-left shadow-xl transition-all my-8 w-full max-w-3xl">
                                <!-- Your content -->
                                <form @submit.prevent="sendData">
                                    <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-5 lg:px-8">

                                        <div class="mt-6 border-t border-gray-100">
                                            <dl class="divide-y divide-gray-100">
                                                <div class="bg-gray-100 text-gray-500 text-sm flex justify-center rounded-full py-1">
                                                    محصول:
                                                </div>
                                                <div class="px-4 py-3 md:py-6 grid grid-cols-2 gap-4 px-0">
                                                    <dt class="text-xs md:text-sm font-medium flex justify-start md:justify-center items-center leading-6 text-gray-900">نام محصول
                                                    </dt>
                                                    <dd class="mt-1 flex text-sm text-right justify-end md:justify-center leading-6 text-gray-700 col-span-1 mt-0">
                                                        <p class="md:text-xl  tracking-tight text-gray-900">
                                                            {{ product.title }}
                                                        </p>

                                                    </dd>
                                                </div>
                                                <div class="px-4 py-3 md:py-6 grid grid-cols-2 gap-4 px-0">
                                                    <dt class="text-sm font-medium leading-6 flex justify-start md:justify-center items-center text-gray-900">قیمت </dt>
                                                    <dd
                                                        class="mt-1 flex text-xs md:text-sm leading-6 justify-end md:justify-center  text-gray-700 col-span-1  mt-0">
                                                        <p class="text-md md:text-xl tracking-tight text-gray-900">
                                                            <div v-if="color">
                                                                {{ ((product.price + color.price) * ((100 - product.discount) / 100)) * qty }}
                                                                <span class="text-[10px] md:text-sm text-gray-600">تومان</span>
                                                            </div>
                                                            <div v-else>
                                                                {{ ((product.price ) * ((100 - product.discount) / 100)) * qty }}
                                                                <span class="text-[10px] md:text-sm text-gray-600">تومان</span>
                                                            </div>
                                                        </p>

                                                    </dd>
                                                </div>
                                                <div class="px-4 py-3 md:py-6 grid grid-cols-2 gap-4 px-0">
                                                    <dt class="text-xs md:text-sm font-medium leading-6 flex justify-start md:justify-center items-center text-gray-900">تعداد </dt>
                                                    <dd
                                                        class="mt-1 flex text-sm leading-6 justify-end md:justify-center  text-gray-700 col-span-1  mt-0">

                                                        <div class="  ">
                                                            <div v-if="color" class="flex">
                                                                <input type="number" id="first_name" min="1" :max="color.count"
                                                                    v-model="qty"
                                                                    class="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  p-2.5"
                                                                    required>
                                                            </div>
                                                            <div v-else class="flex">
                                                                <input type="number" id="first_name" min="1" :max="product.amount"
                                                                    v-model="qty"
                                                                    class="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  p-2.5"
                                                                    required>
                                                            </div>
                                                        </div>

                                                    </dd>
                                                </div>
                                                <div v-if="color" class="px-4 py-3 md:py-6 grid grid-cols-2 gap-4 px-0">
                                                    <dt class="text-xs md:text-sm font-medium leading-6 flex justify-start md:justify-center items-center text-gray-900">رنگ‌ </dt>
                                                    <dd
                                                        class="mt-1 flex text-sm leading-6 justify-end md:justify-center  text-gray-700 col-span-1  mt-0">

                                                        <div class="flex justify-end md:justify-center  items-center flex-row">
                                                        <span class="flex justify-end md:justify-center  items-center space-x-3">
                                                            <div
                                                                :class="[color.selectedColor, active && checked ? 'ring ring-offset-1' : '', !active && checked ? 'ring-2' : '', 'relative -m-0.5 flex items-center justify-center rounded-full p-0.5 focus:outline-none']">
                                                                <span aria-hidden="true"
                                                                    :class="` h-8 w-8 rounded-full border border-2 border-opacity-10 `"
                                                                    :style="`background-color:${color.hexcolor}`" />
                                                            </div>
                                                        </span>
                                                        <p class="text-xs ms-3 text-gray-500">{{ color.title }}</p>
                                                    </div>

                                                    </dd>
                                                </div>
                                                
                                                <div
                                                    class="bg-gray-100 text-gray-500 text-sm flex justify-center rounded-full py-1">
                                                    دریافت کننده:
                                                </div>
                                                <div class="px-4 py-3 md:py-6 grid grid-cols-2 gap-4 px-0">
                                                    <dt class="text-xs md:text-sm font-medium flex justify-start md:justify-center items-center leading-6 text-gray-900">نام </dt>
                                                    <dd
                                                        class="mt-1 flex text-sm leading-6 justify-end md:justify-center  text-gray-700 col-span-1  mt-0">

                                                        <div class=" flex-grow">
                                                            <div class="flex">
                                                                <input type="text" id="first_name" v-model="first_name"
                                                                    class="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  p-2.5"
                                                                    required>
                                                            </div>
                                                        </div>

                                                    </dd>
                                                </div>
                                                <div class="px-4 py-3 md:py-6 grid grid-cols-2 gap-4 px-0">
                                                    <dt class="text-xs md:text-sm font-medium flex justify-start md:justify-center items-center leading-6 text-gray-900">نام خانوادگی
                                                    </dt>
                                                    <dd
                                                        class="mt-1 flex text-sm leading-6 justify-end md:justify-center  text-gray-700 col-span-1  mt-0">

                                                        <div class=" flex-grow">
                                                            <div class="flex">
                                                                <input type="text" id="first_name"
                                                                    class="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  p-2.5"
                                                                    v-model="last_name" required>
                                                            </div>
                                                        </div>

                                                    </dd>
                                                </div>

                                                <div class="px-4 py-3 md:py-6 grid grid-cols-3 gap-4 px-0">
                                                    <dt class="text-xs md:text-sm font-medium flex justify-start md:justify-end md:px-8 items-top leading-6 text-gray-900">آدرس</dt>
                                                    <dd
                                                        class="mt-1 flex text-sm leading-6 text-gray-700 col-span-2  mt-0">
                                                        <div class="flex flex-wrap -mx-3 mb-2">
                                                            <div class="py-2 w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                                <label
                                                                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                                    for="grid-state">
                                                                    استان
                                                                </label>
                                                                <div class="relative">
                                                                    <select v-model="state"
                                                                        class="block appearance-none w-full bg-gray-50 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                        id="grid-state">
                                                                        <option v-for="province in provinces"
                                                                            :key="province" :value="province">{{
                                                                            province }}
                                                                        </option>
                                                                    </select>
                                                                    <div
                                                                        class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                                                        <svg class="fill-current h-4 w-4"
                                                                            xmlns="http://www.w3.org/2000/svg"
                                                                            viewBox="0 0 20 20">
                                                                            <path
                                                                                d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                                                                        </svg>
                                                                    </div>
                                                                </div>
                                                            </div>

                                                            <div class="py-2 w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                                <label
                                                                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                                    for="grid-city">
                                                                    شهر
                                                                </label>
                                                                <input required
                                                                    class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                    id="grid-city" type="text" v-model="city">
                                                            </div>
                                                            <div class="py-2 w-full px-3 mb-6 md:mb-0">
                                                                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                                for="grid-city">
                                                                    محل سکونت
                                                                </label>
                                                                <textarea
                                                                class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                id="grid-city"
                                                                v-model="street"
                                                                rows="3" 
                                                                >
                                                                </textarea>
                                                            </div>

                                                            <div class="py-2 w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                                <label
                                                                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                                    for="grid-zip">
                                                                    کدپستی
                                                                </label>
                                                                <input required
                                                                    class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                    id="grid-zip" type="text" v-model="zipCode">
                                                            </div>
                                                            <div class="py-2 flex items-center w-full pt-10 px-3 mb-6 md:mb-0">
                                                                <input
                                                                    type="checkbox"
                                                                    id="save-address"
                                                                    v-model="save_address"
                                                                    class="w-4 h-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                                                                >
                                                                <label for="save-address" class="ml-2 block px-2 text-sm text-gray-900">
                                                                    ذخیره اطلاعت من
                                                                </label>
                                                            </div>
                                                        </div>
                                                    </dd>
                                                    <button v-if="btn_buy_loading" type=""
                                                        class="bg-gray-400 text-white font-bold py-2 mb-8 px-4 rounded-full px-10">
                                                        <div class=" flex items-center w-full  justify-center" >
                                                            <div role="status">
                                                                <svg aria-hidden="false" class="w-8 h-8 text-gray-200 animate-spin fill-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                                                </svg>
                                                                <span class="sr-only">Loading...</span>
                                                            </div>
                                                        </div>
                                                    </button>
                                                    <button  v-else type="submit"
                                                        class="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 mb-8 px-4 rounded-full px-10">
                                                        <p >خرید</p>
                                                    </button>
                                                </div>
                                            </dl>
                                        </div>
                                    </div>
                                </form>
                            </DialogPanel>
                        </TransitionChild>
                    </div>
                </div>
            </Dialog>
        </TransitionRoot>
    </div>
</template>

<script>
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import axios from 'axios'
import { useUserStore } from '~/store/user';
import { apiStore } from '~/store/api';

export default {
    props: ["show", "product", "color"],
    components: { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot },
    data() {
        return {
            btn_buy_loading: false,
            provinces: [
                "انتخاب کنید",
                "آذربایجان شرقی",
                "آذربایجان غربی",
                "اردبیل",
                "اصفهان",
                "البرز",
                "ایلام",
                "بوشهر",
                "تهران",
                "چهارمحال و بختیاری",
                "خراسان جنوبی",
                "خراسان رضوی",
                "خراسان شمالی",
                "خوزستان",
                "زنجان",
                "سمنان",
                "سیستان و بلوچستان",
                "فارس",
                "قزوین",
                "قم",
                "کردستان",
                "کرمان",
                "کرمانشاه",
                "کهگیلویه و بویراحمد",
                "گلستان",
                "گیلان",
                "لرستان",
                "مازندران",
                "مرکزی",
                "هرمزگان",
                "همدان",
                "یزد"
            ],
            snackbarVisible:false,
            save_address: false,
            qty: 1,
            user: null,
            first_name: null,
            last_name: null,
            zipCode: null,
            street: null,
            city: null,
            state: null,
        }
    },
    methods: {
        getData() {

            this.loading = true
            axios.get(`${apiStore().address}/api/account/user-settings-retrieve/${useUserStore().username}/`, {
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json",
                    Authorization: `Token ${useUserStore().userToken}`
                },
            }).then((response) => {
                this.user = response.data
                this.first_name = this.user["first_name"]
                this.last_name = this.user["last_name"]
                this.zipCode = this.user["zipCode"]
                this.street = this.user["street"]
                this.city = this.user["city"]
                this.state = this.user["state"]
                this.loading = false
            })
        },
        saveAddress() {
            const apiUrl = `${apiStore().address}/api/account/user-settings-update/${useUserStore().username}/`;
            const data = {
                first_name: this.first_name,
                last_name: this.last_name,
                zipCode: this.zipCode,
                street: this.street,
                city: this.city,
                state: this.state,
            };
            this.loading = true
            axios.put(apiUrl, data, {
                headers: {
                'Content-Type': 'multipart/form-data',
                Accept: "application/json",
                Authorization: `Token ${useUserStore().userToken}`
                },
            }).then(response => {
                this.snackbarVisible = true
                setTimeout(() => {
                    this.snackbarVisible = false
                }, 5000);
                // You can change the dialog page or show a success message here
            })
        },
        sendData() {
            if(this.save_address){
                this.saveAddress()
            }
            this.btn_buy_loading = true
            const apiUrl = `${apiStore().address}/api/order/create-order/`;
            const data = {
                count: this.qty,
                product: this.product.id,
                product_color: this.color ? this.color.id : null,
                first_name: this.first_name,
                last_name: this.last_name,
                zipCode: this.zipCode,
                street: this.street,
                city: this.city,
                state: this.state,
            };
            this.loading = true
            axios.post(apiUrl, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Accept: "application/json",
                    Authorization: `Token ${useUserStore().userToken}`
                },
            }).then(response => {
                axios.post(`${apiStore().address}/api/wallet/pay-order/`, { order_id: response.data.id }, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                        Accept: "application/json",
                        Authorization: `Token ${useUserStore().userToken}`
                    },
                }).then(response => {
                    if (response.status == 200) {
                        window.location.href = response.data["result"]
                    }
                    console.log(response.data);
                }),
                    this.loading = false
                // You can change the dialog page or show a success message here
            })
        },
    },
    mounted() {
        this.getData()
    },
    watch: {
        show: {

            handler(val, oldVal) {
                console.log(this.show)
                this.$emit('show-change', this.show)
            }
        },
    }

}
</script>
