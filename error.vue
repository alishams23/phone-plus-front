<template>
  <NuxtLayout name="default">
    <main class="min-h-[70vh] bg-slate-50 px-4 py-12 sm:py-20" dir="rtl">
      <section class="mx-auto flex min-h-[55vh] max-w-2xl flex-col items-center justify-center text-center">
      <div class="relative mb-8 flex h-28 w-28 items-center justify-center rounded-full bg-indigo-100 text-indigo-600 shadow-sm">
        <div class="absolute inset-2 rounded-full border-2 border-dashed border-indigo-300" />
        <span v-if="!isShopNotFound" class="text-3xl font-black">{{ error?.statusCode || 500 }}</span>
        <span v-else class="text-4xl" aria-hidden="true">🏪</span>
      </div>

      <p class="mb-3 text-sm font-bold text-indigo-600">فون پلاس</p>
      <h1 class="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
        {{ title }}
      </h1>
      <p class="mt-4 max-w-lg leading-8 text-slate-600">
        {{ message }}
      </p>

      <div class="mt-9 flex flex-col-reverse gap-3 sm:flex-row">
        <NuxtLink
          to="/"
          class="rounded-xl bg-indigo-600 px-6 py-3 font-bold text-white transition hover:bg-indigo-700"
        >
          بازگشت به صفحه اصلی
        </NuxtLink>
        <button
          v-if="!isNotFound"
          type="button"
          class="rounded-xl border border-slate-200 bg-white px-6 py-3 font-bold text-slate-700 transition hover:bg-slate-100"
          @click="handleError"
        >
          تلاش دوباره
        </button>
      </div>
      </section>
    </main>
  </NuxtLayout>
</template>

<script setup>
const props = defineProps({
  error: {
    type: Object,
    required: true,
  },
})

const isNotFound = computed(() => props.error?.statusCode === 404)
const isShopNotFound = computed(() => props.error?.statusMessage === 'Shop not found')
const title = computed(() => isShopNotFound.value
  ? 'فروشگاه در دسترس نیست'
  : isNotFound.value ? 'این صفحه پیدا نشد' : 'مشکلی پیش آمده است')
const message = computed(() => isShopNotFound.value
  ? 'این فروشگاه در حال حاضر غیرفعال است یا نشانی آن وجود ندارد.'
  : isNotFound.value ? 'نشانی واردشده درست نیست یا این صفحه دیگر وجود ندارد.'
  : 'در دریافت اطلاعات مشکلی رخ داد. لطفاً دوباره تلاش کنید.')

const handleError = () => clearError({ redirect: useRoute().fullPath })
</script>
