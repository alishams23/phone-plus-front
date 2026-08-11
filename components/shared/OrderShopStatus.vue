<template>
  <div v-if="order.shop_name || order.shop_status" class="rtl mx-4 mb-3 rounded-lg bg-white px-3 py-2 text-right text-sm">
    <span class="font-semibold">فروشگاه: {{ order.shop_name || 'نامشخص' }}</span>
    <span v-if="order.shop_status && order.shop_status !== 'active'" class="mr-2 text-amber-700">(در دسترس نیست)</span>
    <p v-if="order.product_available === false" class="mt-1 text-amber-700">این محصول دیگر قابل خرید نیست.</p>
  </div>
</template>

<script setup>
defineProps({ order: { type: Object, required: true } })
</script>
