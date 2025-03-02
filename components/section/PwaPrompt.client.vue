<template>
  <Dialog :open="showPopup" @close="closePopup">
    <DialogOverlay class="fixed inset-0 bg-black opacity-30" />
    <DialogPanel class="fixed z-[99999] bottom-10 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg max-w-xs w-full">
      <div class="bg-white p-5 rounded-2xl max-w-md w-full text-center">
        <div class="flex justify-center">
          <div class="bg-white text-white rounded-full p-2">
            <img src="/images/logo/phone_plus_logo.png" width="100" alt="phoneplus logo" />
          </div>
        </div>
        <h2 class="text-lg rtl font-semibold mt-4">وب‌اپلیکیشن فون‌پلاس را به صفحه اصلی موبایل خود اضافه کنید.</h2>
        <ul class="text-gray-600 text-sm mt-4 space-y-2 rtl text-right">
          <li>۱ - در نوار پایین روی دکمه <span class="font-bold text-gray-800">Share</span> بزنید.</li>
          <li>۲ - در منوی بازشده، در قسمت پایین، گزینه <span class="font-bold text-gray-800">Add to Home Screen</span> را انتخاب کنید.</li>
          <li>۳ - در مرحله بعد در قسمت بالا روی <span class="font-bold text-indigo-600">Add</span> بزنید.</li>
        </ul>
        <button class="bg-indigo-600 text-white w-full py-2 rounded-lg mt-6 hover:bg-indigo-700" @click="handleDismiss">
          متوجه شدم
        </button>
      </div>
    </DialogPanel>
  </Dialog>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import { Dialog, DialogOverlay, DialogPanel } from '@headlessui/vue';
import { useUserStore } from '~/store/user'; 

const userStore = useUserStore();
const showPopup = ref(false);

onMounted(() => {
  // Load token/username/status/hasDismissedPopup from cookies
  userStore.loadTokenAndUsernameFromCookie();

  const isIos = /iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase());
  const isStandalone = window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;

  // Show popup only if it's iOS, not standalone, and user hasn't dismissed it yet
  if (isIos && !isStandalone && !userStore.hasDismissedPopup) {
    showPopup.value = true;
  }
});

const handleDismiss = () => {
  showPopup.value = false;
  userStore.dismissPopup(); // Mark the popup as dismissed in the store
  
};

const closePopup = () => {
  showPopup.value = false;
};
</script>

<style scoped>
/* No custom CSS needed for the popup styles anymore */
</style>