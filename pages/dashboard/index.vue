<template>
  <div >
    <TransitionRoot as="template" :show="open">
        <Dialog as="div" class="relative z-10" @close="open = false">
        <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
            <div class="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
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
                            <form class="space-y-6" action="#" method="POST">
                                <div class="ltr">
                                    <label for="phone-number" class="block text-sm  font-medium leading-6 text-gray-900">شماره موبایل</label>
                                    <div class="relative mt-2 rounded-full shadow-sm">
                                        <div class="absolute text-gray-500  inset-y-0 ps-3 flex items-center">
                                            +98
                                        </div>
                                        <input type="text" name="phone-number" id="phone-number" class="block w-full rounded-full border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 " placeholder="9123456789" />
                                    </div>
                                </div>
                                <div>
                                    <div @click="dialog_page = 'get_code'" class="flex w-full justify-center rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">دریافت کد</div>
                                </div>
                            </form>
                            <div class="mt-10 pb-6 flex rtl flex-items-center">
                                <p class=" text-sm text-center leading-6 ps-2 text-gray-500 ">
                                    اکانت ندارید؟
                                </p>
                                <p @click="dialog_page = 'register'" class="font-semibold text-sm text-center leading-6 ps-2 text-indigo-600 hover:text-indigo-500">ثبت نام کنید</p>
                            </div>
                        </div>
                    </div>
                    <div v-if="dialog_page == 'get_code'" class="flex min-h-full flex-1 flex-col justify-center px-6 py-5 lg:px-8">
                        <div class="sm:mx-auto sm:w-full sm:max-w-sm">
                            <h2 class="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">کد را وارد کنید</h2>
                        </div>

                        <div class="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                            <form class="space-y-6" action="#" method="POST">
                                <div class="ltr">
                                    <div class="relative mt-2 rounded-full shadow-sm">
                                        <input type="text" name="phone-number" id="phone-number" class="block w-full rounded-full border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 "  />
                                    </div>
                                </div>
                                <div>
                                    <button type="submit" @click="dialog_page = ''" class="flex w-full justify-center rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">تایید</button>
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
                                        <div class="absolute text-gray-500  inset-y-0 ps-3 flex items-center">
                                            +98
                                        </div>
                                        <input type="text" name="phone-number" id="phone-number" class="block w-full rounded-full border-0 py-1.5 pl-10 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 " placeholder="9123456789" />
                                    </div>
                                </div>
                                <div>
                                    <div @click="dialog_page = 'get_code'" class="flex w-full justify-center rounded-full bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">دریافت کد</div>
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
export default {
    components: { ref, Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot, ExclamationTriangleIcon},
  data() {
    return {
        open : false,
        dialog_page : 'get_number'
    }},
    mounted(){
        this.open = ref(true)
    }
    
}
</script>
