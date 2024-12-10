<template>
    <div>
        <TransitionRoot as="template" :show="show">
            <Dialog :initialFocus="{}" as="div" class="relative z-10" @close="$emit('update:show', false)">
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0"
                    enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" />
                </TransitionChild>
                <div v-if="snackbarDiscount" class="bg-green-700 shadow-2 rtl text-white p-4 py-2 mx-10 rounded-full fixed top-4  flex justify-between items-center">
                    کد تخفیف اعمال شد {{ price(discount_amount) }}تومان از سفارش شما کسر شد
                    <button @click="snackbarDiscount = false" class="text-white mr-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                    </button>
                </div>
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
                                <div >
                                    <div >
                                        <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-5 lg:px-8">
                                            <div class="mt-6 border-t border-gray-100">
                                                <dl class="divide-y divide-gray-100">
                                                    <div class="bg-gray-100 text-gray-500 text-sm flex justify-center rounded-full py-1">
                                                        پرداخت:
                                                    </div>
                                                    <div class="px-4 py-3 md:py-6 grid grid-cols-2 gap-4 px-0">
                                                        <dt class="text-xs md:text-sm font-medium flex justify-start md:justify-center items-center leading-6 text-gray-900">مبلغ قابل پرداخت
                                                        </dt>
                                                        <dd class="mt-1 flex text-sm text-right justify-end md:justify-center leading-6 text-gray-700 col-span-1 mt-0">
                                                            <p class="text-md md:text-xl tracking-tight text-gray-900">
                                        
                                                                <div >
                                                                    <span v-if="discount_amount" class="text-[7px] md:text-[10px] text-red-600 px-1 ">- {{prices(discount_amount)}} تومان</span>
                                                                    {{ price(parseInt((((product.price ) * ((100 - product.discount) / 100)) * qty)-discount_amount)) }}
                                                                    <span class="text-[10px] md:text-sm text-gray-600">تومان</span>
                                                                </div>
                                                            </p>
                                    
                                                        </dd>
                                                        <dt v-if="product.type == 'license'" class="text-xs md:text-sm font-medium leading-6 flex justify-start md:justify-center items-center text-gray-900">تعداد</dt>
                                                        <dd v-if="product.type == 'license'" class="mt-1 flex text-sm leading-6 justify-end md:justify-center text-gray-700 col-span-1 mt-0">
                                                            <div class="">
                                                                <div class="flex">
                                                                    <input type="number" id="first_name" min="1" :max="product.inventory_count" v-model="qty"
                                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm w-20 rounded-lg p-2.5"
                                                                        required>
                                                                </div>
                                                            </div>
                                                        </dd>
                                                    </div>
                                                    <form @submit.prevent="checkDiscountCode" v-if="show == true">
                                                        <div class="px-4 py-3 md:py-3 grid grid-cols-6 gap-4 px-0">
                                                            <dd
                                                            class="mt-1 grid grid-cols-2 flex text-sm leading-6 justify-between md:justify-center  text-gray-700 col-span-6 md:col-span-6  mt-0">
                                                                <div class="py-2 col-span-1 w-full  px-3 mb-6 md:mb-0">
                                                                    <div>
                                                                        <label
                                                                            class="block uppercase w-full tracking-wide text-gray-700 text-xs font-bold "
                                                                            for="grid-city">
                                                                            کد تخفیف
                                                                        </label>
                                                                        <input required
                                                                            :autofocus="false"
                                                                        class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                        id="grid-city" type="text" v-model="discount_code" >
                                                                        <p class="text-xs md:text-sm text-red-600" >
                                                                            {{error}}
                                                                        </p>
                                                                    </div>
                                                                </div>
                                                                <div class="py-2  col-span-1 w-full flex justify-end flex justify-center mt-4 mb-6 md:mb-0">
                                                                    <button type="submit"
                                                                        class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 mb-8 px-5 rounded-full">
                                                                        <p v-if="btn_discount_loading">درحال بررسی...</p>
                                                                        <p v-else>اعمال کد تخفیف</p>
                                                                    </button>
                                                                </div>
                                                            </dd>
                                                        </div>
                                                    </form>
                                                </dl>
                                                <div class="w-full flex justify-end" >
                                                    <!-- <button @click="tab=2"
                                                        class="bg-white hover:bg-indigo-50 text-indigo-600 font-bold py-2 mb-8 px-5 rounded-full px-10 w-[10rem] md:w-[15rem]">
                                                        <p >برگشت</p>
                                                    </button> -->
                                                    <button v-if="btn_buy_loading" type="" disabled
                                                        class="bg-gray-400 text-white font-bold py-2 mb-8 px-5 rounded-full px-10 w-[10rem] md:w-[15rem]">
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
                                                    <button v-else @click="sendData"
                                                        class="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 mb-8 px-4 rounded-full px-10 w-[10rem] md:w-[15rem]">
                                                        <p >پرداخت</p>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                            
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
    props: ["show", "product"],
    components: { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot },
    data() {
        return {
            btn_buy_loading: false,
            btn_discount_loading: false,
            discount_amount: 0,
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
            snackbarDiscount:false,
            save_address: false,
            qty: 1,
            error:null,
            user: null,
            discount_code: null,
            phone_number: null,
            first_name: null,
            last_name: null,
            zipCode: null,
            street: null,
            city: null,
            state: null,
            tab:1,
        }
    },
    methods: {
        price(value){
            let text
            let chars = Array.from(`${value}`)
            for (let index = 1; index <= chars.length; index++) {
                
                if(index % 3==0){
                    if (chars.length != index) {
                    chars[chars.length-index] = `,${chars[chars.length-index]}`;
                        
                    }
                }

            }
            return chars.join("");;
        },
        getData() {

            this.loading = true
            axios.get(`${apiStore().address}/api/account/user-settings-retrieve/${useUserStore().username}/`, {
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json",
                    Authorization: `Token ${useUserStore().userToken}`
                },
            }).then((response) => {
                this.loading = false
            })
        },
        sendData() {
            this.btn_buy_loading = true
            const apiUrl = `${apiStore().address}/api/order/create-group-order-digital-product/`;
            const data = {
                discount_code: this.discount_code,
                digital_product: this.product.id,
                count: this.qty,
            };
            this.loading = true
            axios.post(apiUrl, data, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Accept: "application/json",
                    Authorization: `Token ${useUserStore().userToken}`
                },
            }).then(response => {
                    window.location.href = `${apiStore().address}/api/wallet/go_to_gateway_digital_product_view/${response.data.id}`
                    this.loading = false
                // You can change the dialog page or show a success message here
            })
        },
        checkDiscountCode() {
            if(this.save_address){
                this.saveAddress()
            }
            this.btn_discount_loading = true
            const apiUrl = `${apiStore().address}/api/product/check-valid-digital-product-discount/${this.discount_code}/${this.$route.params.id}/`;
            axios.get(apiUrl,{
                headers: {
                    'Content-Type': 'multipart/form-data',
                    Accept: "application/json",
                    Authorization: `Token ${useUserStore().userToken}`
                },
            }).then(response => {
                console.log('discount', response.data);
                if (response.data.valid){
                    if(response.data.is_percentage){
                        this.discount_amount = (((this.product.price) * ((100 - this.product.discount) / 100))  * this.qty) * (response.data.amount/100)  
                    }else{
                        this.discount_amount = response.data.amount 
                    }
                    this.snackbarDiscount = true
                    setTimeout(() => {
                        this.snackbarDiscount = false
                    }, 5000);
                }else{
                    this.error = 'کد تخفیف معتبر نیست'
                }
                console.log('amount', this.discount_amount, this.product);
                this.btn_discount_loading = false
            }).catch(error => {
                // Handle error response
                this.error = 'مشکلی پیش‌آمده'
            });
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
