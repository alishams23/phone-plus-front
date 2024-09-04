<template>

  <img :src="image" @click="setIsOpen(true)" style="width: 90%; height: 100%; position: relative;"
    class=" aspect-[2/1] rounded-[25px] object-cover " />
  <TransitionRoot as="template" :show="isOpen">
    <Dialog as="div" class="relative z-50" @close="setIsOpen">
      <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0" enter-to="opacity-100"
        leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
        <div class="fixed inset-0 bg-black bg-opacity-75 transition-opacity" />
      </TransitionChild>
      <div class="fixed inset-0 z-50 w-screen h-screen" >
     
        <div
          class="flex flex-wrap flex-column h-full items-center h-screen justify-center p-4 text-center sm:items-center sm:p-0">
         <div class="w-full h-[80%] flex justify-center items-center"  @click="setIsOpen(false)" >
          <img :src="insideImage" class=" h-[80%] rounded-[25px]  " />
         </div>
          <div class="flex overflow-x-scroll flex-nowrap ">

            <div v-for=" item in images">
              <img :src="item.photo" @click="insideImage = item.photo" class=" p-2 h-[80px] w-[80px] rounded-[18px]  " />
            </div>
          


          </div>
        </div>


      </div>
    </Dialog>
  </TransitionRoot>
</template>

<script setup>
import { ref, defineProps } from 'vue'
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'

const { image, images } = defineProps(['image', "images"])
const insideImage = ref(image)
const isOpen = ref(false)

function setIsOpen(value) {
  isOpen.value = value
}
</script>