<template>
  <Dialog  :open="showPopup" @close="closePopup">
    <DialogOverlay class="fixed inset-0 bg-black opacity-30" />
    <DialogPanel class="fixed z-[99999] bottom-10 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg max-w-xs w-full">
        <div className="bg-white p-5 rounded-2xl max-w-md w-full text-center">
          <div className="flex justify-center">
            <div className="bg-white text-white rounded-full p-2">
              <img src="/images/logo/phone_plus_logo.png" width="100" alt="phoneplus logo">
            </div>
          </div>
          <h2 className="text-lg rtl font-semibold mt-4">وب‌اپلیکیشن فون‌پلاس را به صفحه اصلی موبایل خود اضافه کنید.</h2>
          <ul className="text-gray-600 text-sm mt-4 space-y-2 rtl text-right">
            <li>۱ - در نوار پایین روی دکمه <span className="font-bold text-gray-800">Share</span> بزنید.</li>
            <li>۲ - در منوی بازشده، در قسمت پایین، گزینه <span className="font-bold text-gray-800">Add to Home Screen</span> را انتخاب کنید.</li>
            <li>۳ - در مرحله بعد در قسمت بالا روی <span className="font-bold text-indigo-600">Add</span> بزنید.</li>
          </ul>
          <button className="bg-indigo-600 text-white w-full py-2 rounded-lg mt-6 hover:bg-indigo-700 " @click="showPopup = false">
            متوجه شدم
          </button>
        </div>
    </DialogPanel>
  </Dialog>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Dialog, DialogOverlay, DialogPanel } from '@headlessui/vue'

const showPopup = ref(false)

onMounted(() => {
  const isIos = /iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase())
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone
  
  if (isIos && !isStandalone) {
    showPopup.value = true
  }
})

const closePopup = () => {
  showPopup.value = false
}
</script>

<style scoped>
/* No custom CSS needed for the popup styles anymore */
</style>
