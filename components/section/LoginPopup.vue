<template>
    <!-- login popup -->
    <div >
        <TransitionRoot as="template" :show="open">
            <Dialog as="div" class="relative z-10" @close="open = false">
            <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                <div class="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" />
            </TransitionChild>

            <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                <div class="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95" enter-to="opacity-100 translate-y-0 sm:scale-100" leave="ease-in duration-200" leave-from="opacity-100 translate-y-0 sm:scale-100" leave-to="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95">
                    <DialogPanel class="relative text-right rtl transform overflow-hidden rounded-[25px] bg-white text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
                    <!-- Your content -->
                        <div v-if="dialog_page == 'get_number'" class="flex min-h-full flex-1 flex-col justify-center px-6 py-5 lg:px-8">
                            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                                <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">وارد اکانت خود شوید</h2>
                            </div>
                            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                <div class="space-y-6" >
                                    <div class="ltr">
                                        <label for="phone-number" class="block text-sm  font-medium leading-6 text-gray-900">شماره موبایل</label>
                                        <div class="relative mt-2 rounded-full shadow-sm">
                                            <div class="absolute text-gray-500  inset-y-0 ps-6 flex items-center">
                                                0
                                            </div>
                                            <input type="text" name="phone-number" id="phone-number" v-model="phoneNumber" class="block w-full rounded-full border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 " placeholder="9123456789" />

                                        </div>
                                    </div>
                                    <div>
                                        <div  class="flex w-full justify-center rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                          <button @click="sendLoginSms" class="w-full"  v-if="loading == false">
                                            دریافت کد
                                          </button>

                                            <div v-if="loading ">
                                                <svg aria-hidden="true" role="status" class="inline w-5 h-5 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                                    <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                                                    </svg>
                                                  
                                            </div>

                                        </div>
                                    </div>
                                </div>
                                <div class="mt-10 pb-6 flex rtl flex-items-center">
                                    <p class=" text-sm text-center leading-6 ps-2 text-gray-500 ">
                                        اکانت ندارید؟
                                    </p>
                                    <p @click="dialog_page = 'register'" class="font-semibold text-sm text-center leading-6 ps-2 text-indigo-600 hover:text-indigo-500">ثبت نام کنید</p>
                                </div>
                            </div>
                        </div>
                        <div v-if="dialog_page == 'get_code'" class="flex min-h-full flex-1 flex-col justify-center px-6 py-5 lg:px-8">
                           {{ token }}
                            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                                <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">کد را وارد کنید</h2>
                            </div>

                            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                <form class="space-y-6" action="#" method="POST">
                                    <div class="ltr">
                                        <div class="relative mt-2 rounded-full shadow-sm">
                                            <input type="text" placeholder="code" v-model="code" name="phone-number" id="phone-number" class="block w-full rounded-full border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "  />
                                        </div>
                                    </div>
                                    <div>
                                    
                                        <div  class="flex w-full justify-center rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
                                            <button @click="check_code" class="w-full"  v-if="loading == false">
                                             تایید
                                            </button>
  
                                              <div v-if="loading ">
                                                  <svg aria-hidden="true" role="status" class="inline w-5 h-5 me-3 text-white animate-spin" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="#E5E7EB"/>
                                                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentColor"/>
                                                      </svg>
                                                    
                                              </div>
  
                                          </div>
                                    </div>
                                </form>
                                <div class="mt-10 pb-6 flex ">
                                    <p @click="dialog_page = 'get_number'" class="font-semibold text-center leading-6 ps-2 text-indigo-600 hover:text-indigo-500">برگشت</p>
                                </div>
                            </div>
                        </div>
                        <div v-if="dialog_page == 'register'" class="flex min-h-full flex-1 flex-col justify-center px-6 py-5 lg:px-8">
                            <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                                <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">ثبت نام کنید</h2>
                            </div>
                            <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                                <form class="space-y-6" action="#" method="POST">
                                    <div class="sm:col-span-3">
                                        <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">نام</label>
                                        <div class="mt-2">
                                        <input type="text" name="first-name" id="first-name" autocomplete="given-name" class="block w-full rounded-full border-0 py-1.5 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 " />
                                        </div>
                                    </div>

                                    <div class="sm:col-span-3">
                                        <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">نام خانوادگی</label>
                                        <div class="mt-2">
                                        <input type="text" name="last-name" id="last-name" autocomplete="family-name" class="block w-full rounded-full border-0 py-1.5 pr-3 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 " />
                                        </div>
                                    </div>

                                    <div class="ltr">
                                        <label for="phone-number" class="block text-sm font-medium leading-6 text-gray-900">شماره موبایل</label>
                                        <div class="relative mt-2 rounded-full shadow-sm">
                                            <div class="absolute text-gray-500  inset-y-0 ps-6 flex items-center">
                                                0
                                            </div>
                                            <input type="text" name="phone-number" id="phone-number" v-model="phoneNumber" class="block w-full rounded-full border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 " placeholder="9123456789" />
                                            {{  phoneNumber }}
                                        </div>
                                    </div>
                                    <div>
                                        <div @click="sendLoginSms()" class="flex w-full justify-center rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">دریافت کد</div>
                                    </div>
                                </form>
                                <div class="mt-10 pb-6 flex  flex-items-center">
                                    <p class=" text-sm text-center leading-6 ps-2 text-gray-500 ">
                                        اکانت دارید؟
                                    </p>
                                    <p @click="dialog_page = 'get_number'" class="font-semibold leading-6 ps-2 text-indigo-600 hover:text-indigo-500">وارد شوید</p>
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
import { ref } from 'vue'
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { ExclamationTriangleIcon } from '@heroicons/vue/24/outline'
import axios from 'axios'
import { useUserStore } from '~/store/user'; 

export default {
    components: { ref, Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot, ExclamationTriangleIcon},
  data() {
    return {
        open : false,
        dialog_page : 'get_number',
        phoneNumber: '',
        code: null,
        loading:false,
        token :''
    }},
    methods: {
        sendLoginSms() {
            // Ensure the phone number is not empty
            if (this.phoneNumber) {
                const apiUrl = 'http://192.168.1.109:8000/api/account/login-sms/';
                const data = {
                    number: '0' + this.phoneNumber // Assuming the API expects the full number with country code
                };
                this.loading = true
                axios.post(apiUrl, data,{
                            headers: {
                                'Content-Type': 'multipart/form-data',
                              
                            },
                        })
                    .then(response => {
                        // Handle success response
                        console.log('SMS sent successfully:', response);
                        this.dialog_page = 'get_code'
                        this.loading = false
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
        check_code() {
            // Ensure the phone number is not empty
            this.loading = true
            if (this.code ) {
                const apiUrl = 'http://192.168.1.109:8000/api/account/code_check/';
                const data = {
                    number: '0' + this.phoneNumber, // Assuming the API expects the full number with country code
                    code  : this.code
                };
                axios.post(apiUrl, data,{
                            headers: {
                                'Content-Type': 'multipart/form-data',
                              
                            },
                        })
                    .then(response => {
                        // Handle success response
                        const userStore = useUserStore();
                        userStore.setToken(response.data.token);
                        this.token = response.data.token
                        console.log('SMS sent successfully:', response);
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
        }
    },
    mounted(){
        if (useUserStore().userToken == null) this.open = true
       
    },
    watch: {
        // Watcher to update phoneNumber based on the input field value
        'phoneNumber'(newVal) {
            this.phoneNumber = newVal;
        }
    }
    
}
</script>
