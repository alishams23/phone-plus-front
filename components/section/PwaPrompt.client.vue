<template>
  <Dialog  :open="showPopup" @close="closePopup">
    <DialogOverlay class="fixed inset-0 bg-black opacity-30" />
    <DialogPanel class="fixed bottom-10 left-1/2 transform -translate-x-1/2 bg-white p-4 rounded-lg shadow-lg max-w-xs w-full">
      <p class="text-center text-sm">To install this app, tap <strong>Share</strong> and select <strong>"Add to Home Screen"</strong>.</p>
      <button @click="closePopup" class="mt-2 w-full bg-blue-500 text-white p-2 rounded">Got it!</button>
    </DialogPanel>
  </Dialog>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { Dialog, DialogOverlay, DialogPanel } from '@headlessui/vue'

const showPopup = ref(true)

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
