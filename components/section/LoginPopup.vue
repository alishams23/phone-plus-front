<template>
    <!-- login popup -->

    <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0"
        enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" />
    </TransitionChild>
    <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div class="flex min-h-full items-center justify-center p-4 text-center sm:items-center sm:p-0">
            <TransitionChild as="template" enter="ease-out duration-300"
                enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
                enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200"
                leave-from="opacity-100 translate-y-0 sm:scale-100"
                leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                <DialogPanel
                    class="relative text-right rtl transform overflow-hidden rounded-[25px] bg-white text-left shadow-xl transition-all w-full lg:my-8 lg:w-full lg:max-w-lg">
                    <!-- Your content -->
                    <div v-if="dialog_page == 'get_number'"
                        class="flex min-h-full flex-1 flex-col justify-center px-6 py-5 lg:px-8">
                        <div class="sm:mx-auto lg:w-full lg:max-w-sm">
                            <h2
                                class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                وارد اکانت خود شوید</h2>
                        </div>
                        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form  @submit.prevent="sendLoginSms" @keydown.enter="sendLoginSms" class="space-y-6">
                                <div class="ltr">
                                    <label for="phone-number"
                                        class="block text-sm  font-medium leading-6 text-gray-900">شماره
                                        موبایل</label>
                                    <div class="relative mt-2 rounded-full shadow-sm">
                                        <input type="text" name="phone-number" id="phone-number"
                                            v-model="phoneNumber"
                                            class="block w-full rounded-full border-0 py-1.5 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "
                                            placeholder="09 -- -- -- -- -- -- -- " />

                                    </div>
                                    <div v-if="error">
                                        <p class="text-red-600 text-xs pe-3 pt-3">{{ error }}</p>
                                    </div>
                                </div>
                                <div>
                                    <div
                                        class="flex w-full justify-center rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        <button type="submit" class="w-full"
                                            v-if="loading == false">
                                            دریافت کد
                                        </button>

                                        <div v-if="loading">
                                            <svg aria-hidden="true" role="status"
                                                class="inline w-5 h-5 me-3 text-white animate-spin"
                                                viewBox="0 0 100 101" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                    fill="#E5E7EB" />
                                                <path
                                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                    fill="currentColor" />
                                            </svg>

                                        </div>

                                    </div>
                                </div>
                            </form>
                            <div class="mt-10 pb-6 flex rtl flex-items-center">
                                <p class=" text-sm text-center leading-6 ps-2 text-gray-500 ">
                                    اکانت ندارید؟
                                </p>
                                <p @click="dialog_page = 'register'"
                                    class="font-semibold text-sm text-center cursor-pointer leading-6 ps-2 text-indigo-600 hover:text-indigo-500">
                                    ثبت نام کنید</p>
                            </div>
                        </div>
                    </div>
                    <div v-if="dialog_page == 'get_code'"
                        class="flex min-h-full flex-1 flex-col justify-center px-6 py-5 lg:px-8">
                        {{ token }}
                        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h2
                                class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                کد را وارد کنید</h2>
                        </div>
                        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form  @submit.prevent="check_code" @keydown.enter="check_code" class="space-y-6">
                                <div class="ltr">
                                    <div class="relative mt-2 rounded-full shadow-sm">
                                        <input type="text" placeholder="code" v-model="code"
                                            name="phone-number" id="phone-number"
                                            class="block w-full rounded-full border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 " />
                                    </div>
                                    <div v-if="error">
                                        <p class="text-red-600 text-xs pe-3 pt-3">{{ error }}</p>
                                    </div>
                                </div>
                                <div>

                                    <div
                                        class="flex w-full justify-center rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        <button type="submit" class="w-full" v-if="loading == false">
                                            تایید
                                        </button>
                                        <div v-if="loading">
                                            <svg aria-hidden="true" role="status"
                                                class="inline w-5 h-5 me-3 text-white animate-spin"
                                                viewBox="0 0 100 101" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                    fill="#E5E7EB" />
                                                <path
                                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                    fill="currentColor" />
                                            </svg>

                                        </div>

                                    </div>
                                    <div v-if="isCooldownActive"
                                        class="text-indigo-500 flex  justify-center pt-5">
                                        {{ Math.floor(cooldownTime / 60) }}:{{ ('0' + cooldownTime %
60).slice(-2) }} تا ارسال مجدد
                                    </div>
                                    <div v-else
                                        class="text-indigo-600 flex cursor-pointer justify-center pt-5">
                                        <p @click="sendLoginSms">
                                            ارسال مجدد
                                        </p>
                                    </div>
                                </div>
                            </form>
                            <div class="mt-10 pb-6 flex ">
                                <p @click="dialog_page = 'get_number'"
                                    class="font-semibold text-center leading-6 cursor-pointer ps-2 text-indigo-600 hover:text-indigo-500">
                                    برگشت</p>
                            </div>
                        </div>
                    </div>

                    <div v-if="dialog_page == 'register'"
                        class="flex min-h-full flex-1 flex-col justify-center px-6 py-5 lg:px-8">
                        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h2
                                class="mt-10 text-center  cursor-pointer text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                ثبت نام کنید</h2>
                        </div>
                        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form  @submit.prevent="sendSingUpSms" @keydown.enter="sendSingUpSms" class="space-y-6">
                                <div class="sm:col-span-3">
                                    <label for="first-name"
                                        class="block text-sm font-medium leading-6 text-gray-900">نام</label>
                                    <div class="mt-2">
                                        <input type="text" name="first-name" id="first-name"
                                            v-model="first_name" autocomplete="given-name"
                                            class="block w-full rounded-full border-0 py-1.5 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 " />
                                    </div>
                                </div>

                                <div class="sm:col-span-3">
                                    <label for="last-name"
                                        class="block text-sm font-medium leading-6 text-gray-900">نام
                                        خانوادگی</label>
                                    <div class="mt-2">
                                        <input type="text" name="last-name" id="last-name"
                                            v-model="last_name" autocomplete="family-name"
                                            class="block w-full rounded-full border-0 py-1.5 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 " />
                                    </div>
                                </div>

                                <div class="ltr">
                                    <label for="phone-number"
                                        class="block text-sm font-medium leading-6 text-gray-900">شماره
                                        موبایل</label>
                                    <div class="relative mt-2 rounded-full shadow-sm">
                                        <input type="text" name="phone-number" id="phone-number"
                                            v-model="phoneNumber"
                                            class="block w-full rounded-full border-0 py-1.5 pl-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "
                                            placeholder="09 -- -- -- -- -- -- --" />
                                    </div>
                                </div>
                                <div>
                                    <!-- <div @click="sendSingUpSms" class="flex w-full justify-center rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">دریافت کد</div> -->
                                    <div
                                        class="flex w-full justify-center rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">

                                        <button type="submit" class="w-full"
                                            v-if="loading == false">
                                            دریافت کد
                                        </button>

                                        <div v-if="loading">
                                            <svg aria-hidden="true" role="status"
                                                class="inline w-5 h-5 me-3 text-white animate-spin"
                                                viewBox="0 0 100 101" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                    fill="#E5E7EB" />
                                                <path
                                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                    fill="currentColor" />
                                            </svg>

                                        </div>
                                    </div>

                                </div>
                            </form>
                            <div class="mt-10 pb-6 flex  flex-items-center">
                                <p class=" text-sm text-center leading-6 ps-2 text-gray-500 ">
                                    اکانت دارید؟
                                </p>
                                <p @click="dialog_page = 'get_number'"
                                    class="font-semibold leading-6 ps-2  cursor-pointer text-indigo-600 hover:text-indigo-500">
                                    وارد شوید</p>
                            </div>
                        </div>
                    </div>
                    <div v-if="dialog_page == 'get_code_signup'"
                        class="flex min-h-full flex-1 flex-col justify-center px-6 py-5 lg:px-8">
                        {{ token }}
                        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h2
                                class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                                کد را وارد کنید</h2>
                        </div>
                        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form  @submit.prevent="check_code_signup" @keydown.enter="check_code_signup" class="space-y-6">
                                <div class="ltr">
                                    <div class="relative mt-2 rounded-full shadow-sm">
                                        <input type="text" placeholder="code" v-model="code"
                                            name="phone-number" id="phone-number"
                                            class="block w-full rounded-full border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 " />
                                    </div>
                                    <div v-if="error">
                                        <p class="text-red-600 text-xs pe-3 pt-3">{{ error }}</p>
                                    </div>
                                </div>
                                <div>

                                    <div
                                        class="flex w-full justify-center rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                        <button @click="check_code_signup" class="w-full"
                                            v-if="loading == false">
                                            تایید
                                        </button>
                                        <div v-if="loading">
                                            <svg aria-hidden="true" role="status"
                                                class="inline w-5 h-5 me-3 text-white animate-spin"
                                                viewBox="0 0 100 101" fill="none"
                                                xmlns="http://www.w3.org/2000/svg">
                                                <path
                                                    d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
                                                    fill="#E5E7EB" />
                                                <path
                                                    d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
                                                    fill="currentColor" />
                                            </svg>

                                        </div>

                                    </div>
                                    <div v-if="isCooldownActive"
                                        class="text-indigo-500 flex  justify-center pt-5">
                                        {{ Math.floor(cooldownTime / 60) }}:{{ ('0' + cooldownTime %
60).slice(-2) }} تا ارسال مجدد
                                    </div>
                                    <div v-else
                                        class="text-indigo-600 flex cursor-pointer justify-center pt-5">
                                        <p @click="sendSingUpSms">
                                            ارسال مجدد
                                        </p>
                                    </div>
                                </div>
                            </form>
                            <div class="mt-10 pb-6 flex ">
                                <p @click="dialog_page = 'register'"
                                    class="font-semibold cursor-pointer text-center leading-6 ps-2 text-indigo-600 hover:text-indigo-500">
                                    برگشت</p>
                            </div>
                        </div>
                    </div>
                </DialogPanel>
            </TransitionChild>
        </div>
    </div>
</template>

<script>
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline'
import axios from 'axios'
import { useUserStore } from '~/store/user';
import { apiStore } from '~/store/api';

export default {

    components: { ref, Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot, ExclamationTriangleIcon },
    data() {
        return {
            error: null,
            isCooldownActive: false,
            cooldownInterval: null,
            cooldownTime: 120, // 2 minutes in seconds
            dialog_page: 'get_number',
            first_name: '',
            last_name: '',
            phoneNumber: '',
            code: null,
            loading: false,
            token: '',
            
        }
    },
    methods: {
        startCooldown() {
            this.cooldownInterval = setInterval(() => {
                if (this.cooldownTime > 0) {
                    // Decrease the cooldown time
                    this.cooldownTime -= 1;
                } else {
                    // Reset cooldown state and time, then clear interval
                    this.isCooldownActive = false;
                    this.cooldownTime = 120; // Reset to 2 minutes
                    clearInterval(this.cooldownInterval);
                }
            }, 1000); // Update every second
        },
        sendSingUpSms() {
            // Ensure the phone number is not empty
            if (this.phoneNumber) {
                const apiUrl = `${apiStore().address}/api/account/sign-up-sms/`;
                const data = {
                    first_name: this.first_name, // Assuming the API expects the full number with country code
                    last_name: this.last_name, // Assuming the API expects the full number with country code
                    number: this.phoneNumber // Assuming the API expects the full number with country code
                };
                this.loading = true
                axios.post(apiUrl, data, {
                    headers: {
                        'Content-Type': 'multipart/form-data',

                    },
                })
                    .then(response => {
                        // Handle success response
                        console.log('SMS sent successfully:', response);
                        this.dialog_page = 'get_code_signup'
                        this.loading = false
                        this.cooldownTime = 120; // Reset to 2 minutes
                        clearInterval(this.cooldownInterval);
                        this.isCooldownActive = true;
                        this.startCooldown();
                        // You can change the dialog page or show a success message here
                    })
                    .catch(error => {
                        // Handle error response
                        console.error('Error sending SMS:', error);
                        // You can show an error message to the user here
                    });
            } else {
                // Phone number is empty, handle accordingly
                console.error('Phone number is empty');
                // You can show an error message to the user here
            }
        },
        check_code_signup() {
            // Ensure the phone number is not empty
            this.loading = true
            if (this.code) {
                const apiUrl = `${apiStore().address}/api/account/code-check-sign-up/`;
                const data = {
                    number: this.phoneNumber, // Assuming the API expects the full number with country code
                    code: this.code
                };
                axios.post(apiUrl, data, {
                    headers: {
                        'Content-Type': 'multipart/form-data',

                    },
                })
                    .then(response => {
                        // Handle success response
                        const userStore = useUserStore();
                        userStore.setToken(response.data.token, response.data.username);
                        // this.$emit("close")
                        this.$router.go(this.$router.currentRoute)
                       
                        // You can change the dialog page or show a success message here
                    })
                    .catch(error => {
                        // Handle error response
                        this.error = 'کد معتبر نیست'
                        this.loading = false
                        console.error('Error sending SMS:', error);
                        // You can show an error message to the user here
                    });
            } else {
                // Phone number is empty, handle accordingly
                console.error('Phone number is empty');
                // You can show an error message to the user here
            }
        },
        sendLoginSms() {
            // Ensure the phone number is not empty
            if (this.phoneNumber) {
                const apiUrl = `${apiStore().address}/api/account/login-sms/`;
                const data = {
                    number: this.phoneNumber // Assuming the API expects the full number with country code
                };
                this.loading = true
                axios.post(apiUrl, data, {
                    headers: {
                        'Content-Type': 'multipart/form-data',

                    },
                })
                    .then(response => {
                        // Handle success response
                        console.log('SMS sent successfully:', response);
                        this.dialog_page = 'get_code'
                        this.loading = false
                        this.cooldownTime = 120; // Reset to 2 minutes
                        clearInterval(this.cooldownInterval);
                        this.isCooldownActive = true;
                        this.startCooldown();
                        // You can change the dialog page or show a success message here
                    })
                    .catch(error => {
                        // Handle error response
                        this.error = 'کاربری با این شماره وجود ندارد'
                        this.loading = false
                        console.error('Error sending SMS:', error);
                        // You can show an error message to the user here
                    });
            } else {
                // Phone number is empty, handle accordingly
                console.error('Phone number is empty');
                // You can show an error message to the user here
            }
        },
        check_code() {
            // Ensure the phone number is not empty
            this.loading = true
            if (this.code) {
                const apiUrl = `${apiStore().address}/api/account/code_check/`;
                const data = {
                    number: this.phoneNumber, // Assuming the API expects the full number with country code
                    code: this.code
                };
                axios.post(apiUrl, data, {
                    headers: {
                        'Content-Type': 'multipart/form-data',

                    },
                })
                    .then(response => {
                        // Handle success response
                        const userStore = useUserStore();
                        userStore.setToken(response.data.token, response.data.username);
                        // this.$emit("close")
                        this.$router.go(this.$router.currentRoute)
                        // You can change the dialog page or show a success message here
                    })
                    .catch(error => {
                        // Handle error response
                        this.error = 'کد معتبر نیست'
                        this.loading = false
                        console.error('Error sending SMS:', error);
                        // You can show an error message to the user here
                    });
            } else {
                // Phone number is empty, handle accordingly
                console.error('Phone number is empty');
                // You can show an error message to the user here
            }
        }
    },
 
    watch: {
        // Watcher to update phoneNumber based on the input field value
        'phoneNumber'(newVal) {
            this.phoneNumber = newVal;
        }
    }

}
</script>
