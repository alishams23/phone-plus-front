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
          <li class="flex items-center">
           
            

              <svg fill="#6C3497" width="23px" height="23px"  class="ml-3 "  viewBox="0 0 50 50" xmlns="http://www.w3.org/2000/svg"><path d="M30.3 13.7L25 8.4l-5.3 5.3-1.4-1.4L25 5.6l6.7 6.7z"/><path d="M24 7h2v21h-2z"/><path d="M35 40H15c-1.7 0-3-1.3-3-3V19c0-1.7 1.3-3 3-3h7v2h-7c-.6 0-1 .4-1 1v18c0 .6.4 1 1 1h20c.6 0 1-.4 1-1V19c0-.6-.4-1-1-1h-7v-2h7c1.7 0 3 1.3 3 3v18c0 1.7-1.3 3-3 3z"/></svg>
          
            ۱ - در نوار پایین روی دکمه <span class="font-bold text-gray-800">Share</span> بزنید.</li>
          <li class="flex items-center">
          
                <svg width="33px" height="33px" class="ml-3 mr-[4px]  text-indigo-500" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M2 12C2 7.28595 2 4.92893 3.46447 3.46447C4.92893 2 7.28595 2 12 2C16.714 2 19.0711 2 20.5355 3.46447C22 4.92893 22 7.28595 22 12C22 16.714 22 19.0711 20.5355 20.5355C19.0711 22 16.714 22 12 22C7.28595 22 4.92893 22 3.46447 20.5355C2 19.0711 2 16.714 2 12Z" stroke="#6C3497" stroke-width="1.5"/>
<path d="M15 12L12 12M12 12L9 12M12 12L12 9M12 12L12 15" stroke="#6C3497" stroke-width="1.5" stroke-linecap="round"/>
</svg>
            
            <div>
              ۲ - در منوی بازشده، در قسمت پایین، گزینه <span class="font-bold text-gray-800">Add to Home Screen</span> را انتخاب کنید.
            </div>
            </li>
          <li class="flex items-center">
            
           <div>
          
            ۳ - در مرحله بعد در قسمت بالا روی <span class="font-bold text-indigo-600">Add</span> بزنید.
           </div> 
           </li>
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