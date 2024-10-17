<template>
  <TransitionRoot as="template" :show="true">
    <Dialog :initialFocus="{}" as="div" class="relative z-50">
      <LoginPopup
        @close="
          () => {
            $router.push('/');
          }
        "
      />
    </Dialog>
  </TransitionRoot>
</template>

<script>
import LoginPopup from "@/components/section/LoginPopup.vue";
import { Dialog, TransitionRoot } from "@headlessui/vue";
export default {
  setup() {
    definePageMeta({
      layout: "empty",
    });
  },
  components: { LoginPopup, TransitionRoot, Dialog },
};
</script>
