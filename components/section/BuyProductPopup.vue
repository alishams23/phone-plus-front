<template>
    <div>
        <TransitionRoot as="template" :show="show">
            <Dialog as="div" class="relative z-50" @close="$emit('update:show', false)">
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0"
                    enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" />
                </TransitionChild>
                <div v-if="snackbarDiscount" class="bg-green-700 shadow-2 rtl text-white p-4 py-2 mx-10 rounded-full fixed top-4  flex justify-between items-center">
                    کد تخفیف اعمال شد {{ discount_amount }}تومان از سفارش شما کسر شد
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
                                <div v-if="tab==1">
                                    <form @submit.prevent="tab=2">
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
                                                                    {{ parseInt(((product.price + color.price) * ((100 - product.discount) / 100)) * qty) }}
                                                                    <span class="text-[10px] md:text-sm text-gray-600">تومان</span>
                                                                </div>
                                                                <div v-else>
                                                                    {{ parseInt(((product.price ) * ((100 - product.discount) / 100)) * qty) }}
                                                                    <span class="text-[10px] md:text-sm text-gray-600">تومان</span>
                                                                </div>
                                                            </p>
                                    
                                                        </dd>
                                                    </div>
                                                    <div class="px-4 py-3 md:py-6 grid grid-cols-2 gap-4 px-0">
                                                        <dt class="text-xs md:text-sm font-medium leading-6 flex justify-start md:justify-center items-center text-gray-900">تعداد</dt>
                                                        <dd class="mt-1 flex text-sm leading-6 justify-end md:justify-center text-gray-700 col-span-1 mt-0">
                                                            <div class="">
                                                                <div v-if="color" class="flex">
                                                                    <input type="number" id="first_name" min="1" :max="color.count" v-model="qty"
                                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm w-20 rounded-lg p-2.5"
                                                                        required>
                                                                </div>
                                                                <div v-else class="flex">
                                                                    <input type="number" id="first_name" min="1" :max="product.amount" v-model="qty"
                                                                        class="bg-gray-50 border border-gray-300 text-gray-900 text-sm w-20 rounded-lg p-2.5"
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
                                                </dl>
                                                <div class="w-full flex justify-end" >
                                                    <button type="submit"
                                                        class="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 mb-8 px-4 rounded-full px-10 w-[10rem] md:w-[15rem]">
                                                        <p >مرحله بعد</p>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div v-if="tab==2">
                                    <form @submit.prevent="tab=3">
                                        <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-5 lg:px-8">
                                            <div class="mt-6 border-t border-gray-100">
                                                <dl class="divide-y divide-gray-100">
                                                    <div
                                                        class="bg-gray-100 text-gray-500 text-sm flex justify-center rounded-full py-1">
                                                        دریافت کننده:
                                                    </div>
                                                    <div class="px-4 py-3 md:py-6 grid grid-cols-3 gap-4 px-0">
                                                        <dt class="text-xs md:text-sm hidden md:block font-medium flex justify-start md:justify-center items-top leading-6 text-gray-900 pt-3">
                                                             نام و نام خانوادگی
                                                            </dt>
                                                        <dd
                                                            class="mt-1 flex text-sm leading-6 justify-between md:justify-center  text-gray-700 col-span-3 md:col-span-2  mt-0">
                                                            <div class="py-2 w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                                <label
                                                                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                                    for="grid-city">
                                                                    نام
                                                                </label>
                                                                <input required
                                                                    class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                    id="grid-city" type="text" v-model="first_name">
                                                            </div>
                                                            <div class="py-2 w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                                <label
                                                                    class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                                    for="grid-city">
                                                                     نام خانوادگی
                                                                </label>
                                                                <input required
                                                                    class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                    id="grid-city" type="text" v-model="last_name">
                                                            </div>
                                                        </dd>
                                                    </div>
                                                    
                                                    <div class="px-4 py-3 md:py-6 grid grid-cols-3 gap-4 px-0">
                                                        <dt class="text-xs md:text-sm font-medium hidden md:block flex justify-start md:justify-center items-top leading-6 text-gray-900 pt-3">
                                                             شماره موبایل
                                                            </dt>
                                                        <dd
                                                            class="mt-1 flex text-sm leading-6 justify-between md:justify-start  text-gray-700 col-span-3 md:col-span-2  mt-0">
                                                            <div class="py-2 w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                                <p>
                                                                    <label
                                                                        class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                                                        for="grid-city">
                                                                        شماره موبایل
                                                                    </label>
                                                                    <input required
                                                                    class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                    id="grid-city" type="text" v-model="phone_number">
                                                                </p>
                                                            </div>
                                                            <div class="py-2 w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                                                <p class="text-xs pt-5 text-gray-400" >
                                                                    نکته: شماره موبایل فقط برای گیرنده می‌باشد و  پس از دخیره اطلاعات ذخیره نمی‌شود
                                                                </p>
                                                            </div>
                                                        </dd>
                                                    </div>

                                    
                                                    <div class="px-4 py-3 md:py-6 grid grid-cols-3 gap-4 px-0">
                                                        <dt class="text-xs hidden md:block md:text-sm font-medium flex justify-start md:justify-start md:px-8 items-top leading-6 text-gray-900">آدرس</dt>
                                                        <dd
                                                            class="mt-1 flex text-sm leading-6 text-gray-700 col-span-3 md:col-span-2  mt-0">
                                                            <div class="flex flex-wrap -mx-3 mb-2">
                                                                <div class="py-2 w-1/2 px-3 mb-6 md:mb-0">
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
                                    
                                                                <div class="py-2 w-1/2 px-3 mb-6 md:mb-0">
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
                                                    </div>
                                                </dl>
                                                <div class="w-full flex justify-end" >
                                                    <button @click="tab=1"
                                                        class="bg-white hover:bg-indigo-50 text-indigo-600 font-bold py-2 mb-8 px-5 rounded-full px-10 w-[10rem] md:w-[15rem]">
                                                        <p >برگشت</p>
                                                    </button>
                                                    
                                                    <button type="submit"
                                                        class="bg-indigo-600 mx-4 hover:bg-indigo-800 text-white font-bold py-2 mb-8 px-5 rounded-full px-10 w-[10rem] md:w-[15rem]">
                                                        <p >مرحله بعد</p>
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div v-if="tab==3">
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
                                                                <div v-if="color">
                                                                
                                                                    <span v-if="discount_amount" class="text-[7px] md:text-[10px] text-red-600 px-1 ">- {{discount_amount}} تومان</span>
                                                                    {{parseInt((((product.price + color.price) * ((100 - product.discount) / 100)) * qty)-discount_amount) }}
                                                                    <span class="text-[10px] md:text-sm text-gray-600">تومان</span>
                                                                </div>
                                                                <div v-else>
                                                                    <span v-if="discount_amount" class="text-[7px] md:text-[10px] text-red-600 px-1 ">- {{discount_amount}} تومان</span>
                                                                    {{ parseInt((((product.price ) * ((100 - product.discount) / 100)) * qty)-discount_amount) }}
                                                                    <span class="text-[10px] md:text-sm text-gray-600">تومان</span>
                                                                </div>
                                                            </p>
                                    
                                                        </dd>
                                                    </div>
                                                    <form @submit.prevent="checkDiscountCode">
                                                        <div class="px-4 py-3 md:py-3 grid grid-cols-6 gap-4 px-0">
                                                            <dd
                                                                class="mt-1 grid grid-cols-2 flex text-sm leading-6 justify-between md:justify-center  text-gray-700 col-span-6 md:col-span-6  mt-0">
                                                                    <div class="py-2 col-span-1 w-full  px-3 mb-6 md:mb-0">
                                                                        <p>
                                                                            <label
                                                                                class="block uppercase w-full tracking-wide text-gray-700 text-xs font-bold "
                                                                                for="grid-city">
                                                                                کد تخفیف
                                                                            </label>
                                                                            <input required
                                                                            class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                            id="grid-city" type="text" v-model="discount_code">
                                                                            <p class="text-xs md:text-sm text-red-600" >
                                                                                {{error}}
                                                                            </p>
                                                                        </p>
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
                                                    <button @click="tab=2"
                                                        class="bg-white hover:bg-indigo-50 text-indigo-600 font-bold py-2 mb-8 px-5 rounded-full px-10 w-[10rem] md:w-[15rem]">
                                                        <p >برگشت</p>
                                                    </button>
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
    props: ["show", "product", "color"],
    components: { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot },
    data() {
        return {
            error: null,
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
            save_address: true,
            qty: 1,
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
                this.phone_number = this.user["phone_number"]
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
                discount_code: this.discount_code,
                phone_number: this.phone_number,
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
                    window.location.href = `${apiStore().address}/api/wallet/go_to_gateway_view/${response.data.id}`
                    this.loading = false
                // You can change the dialog page or show a success message here
            })
        },
        checkDiscountCode() {
            if(this.save_address){
                this.saveAddress()
            }
            this.btn_discount_loading = true
            const apiUrl = `${apiStore().address}/api/product/check-valid-product-discount/${this.discount_code}/${this.$route.params.id}/`;
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
                        this.discount_amount = (((this.product.price + this.color.price) * ((100 - this.product.discount) / 100))  * this.qty) * (response.data.amount/100)  
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
<style>
/* Hide the spinners in number input fields */
input[type='number']::-webkit-outer-spin-button,
input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
}

input[type='number'] {
    appearance: textfield;
}
</style>