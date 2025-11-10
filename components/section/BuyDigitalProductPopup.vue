<template>
    <div>
        <TransitionRoot as="template" :show="show">
            <Dialog :initialFocus="{}" as="div" class="relative z-10" @close="$emit('update:show', false)">
                <TransitionChild as="template" enter="ease-out duration-300" enter-from="opacity-0"
                    enter-to="opacity-100" leave="ease-in duration-200" leave-from="opacity-100" leave-to="opacity-0">
                    <div class="fixed inset-0 bg-gray-800 bg-opacity-75 transition-opacity" />
                </TransitionChild>
                <div v-if="snackbarDiscount" class="bg-green-700 shadow-2 rtl text-white p-4 py-2 mx-10 rounded-full fixed top-4  flex justify-between items-center">
                    کد تخفیف اعمال شد {{ price(calculate_discount_amount(discount_amount,qty)) }}تومان از سفارش شما کسر شد
                    <button @click="snackbarDiscount = false" class="text-white mr-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                    </button>
                </div>
                <div v-if="snackbarVisible" class="bg-indigo-700 shadow-2 rtl text-white p-4 py-2 mx-10 rounded-full fixed top-4  flex justify-between items-center">
                    اطلاعات با موفقیت ذخیره شد
                    <button @click="snackbarVisible = false" class="text-white mr-10">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" class="w-4 h-4">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                    </svg>
                    </button>
                </div>
                <div class="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div class="flex min-h-full items-end justify-center p-4 text-center items-center p-0">
                        <TransitionChild as="template" enter="ease-out duration-300"
                            enter-from="opacity-0 translate-y-4 translate-y-0 scale-95"
                            enter-to="opacity-100 translate-y-0 scale-100" leave="ease-in duration-200"
                            leave-from="opacity-100 translate-y-0 scale-100"
                            leave-to="opacity-0 translate-y-4 translate-y-0 scale-95">
                            <DialogPanel
                                class="relative text-right rtl transform overflow-hidden rounded-[25px] bg-white text-left shadow-xl transition-all my-8 w-full max-w-3xl">
                                <div >
                                    <div >
                                        <div class="flex min-h-full flex-1 flex-col justify-center px-6 py-5 lg:px-8">
                                            
                                            <div class="mt-6 ">
                                                <dl class="">
                                                    <div class="text-gray-500 text-sm flex justify-center rounded-lg pb-4">
                                                        شما درحال خرید از فروشگاه  <span class="font-bold px-2"> {{ product.shop.name }} </span>  هستید
                                                    </div>
                                                    <div class="bg-gray-100 text-gray-500 text-sm flex justify-center rounded-lg py-1">
                                                        پرداخت:
                                                    </div>
                                                    <form @submit.prevent="checkDiscountCode" v-if="show == true">
                                                    <div class="px-4 py-3 md:py-3 grid grid-cols-6 gap-4 px-0 mt-4">
                                                        <dd
                                                        class="mt-1 grid grid-cols-2 flex text-sm leading-6 justify-between md:justify-center  text-gray-700 col-span-6 md:col-span-6  mt-0">
                                                            <div class="py-2 col-span-1 w-full  px-3  ">
                                                                <div>
                                                                   
                                                                    <input required
                                                                        :autofocus="false"
                                                                        placeholder="کد تخفیف"
                                                                    class="appearance-none block w-full bg-gray-50 text-gray-700 border border-gray-200 rounded-full py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                                    id="grid-city" type="text" v-model="discount_code" >
                                                                    <p class="text-xs md:text-sm text-red-600" >
                                                                        {{error}}
                                                                    </p>
                                                                </div>
                                                            </div>
                                                            <div class="py-2  col-span-1 w-full flex justify-end flex justify-center">
                                                                <button type="submit"
                                                                    class="bg-indigo-600 hover:bg-indigo-700 text-white  py-2 mb-8 px-5 rounded-full">
                                                                    <p v-if="btn_discount_loading">درحال بررسی...</p>
                                                                    <p v-else>اعمال کد تخفیف</p>
                                                                </button>
                                                            </div>
                                                        </dd>
                                                    </div>
                                                </form>
                                                    <form @submit.prevent="sendData" class="border-t">
                                                        <div class="px-4 py-3 md:py-6 grid grid-cols-2 gap-4 px-0 gap-y-5 border-b  mb-5" >
                                                            <dt v-if="product.type == 'license'" class="text-xs md:text-sm font-medium leading-6 flex justify-start md:justify-center items-center text-gray-900">تعداد</dt>
                                                            <dd v-if="product.type == 'license'" class="mt-1 flex text-sm leading-6 justify-end md:justify-center text-gray-700 col-span-1 mt-0">
                                                                <div class="">
                                                                    <div class="flex">
                                                                        <input type="number" id="first_name" min="1" :max="product.inventory_count" v-model="qty"
                                                                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm w-20 rounded-full p-2.5"
                                                                            required>
                                                                    </div>
                                                                </div>
                                                            </dd>
                                                            <dt class="text-xs md:text-sm font-medium flex justify-start md:justify-center items-center leading-6 text-gray-900">مبلغ قابل پرداخت
                                                            </dt>
                                                            <dd class="mt-1 flex text-sm text-right justify-end md:justify-center leading-6 text-gray-700 col-span-1 mt-0">
                                                                <div class="text-md md:text-xl tracking-tight text-gray-900">
                                                                    <span v-if="discount_amount" class="text-[7px] md:text-[10px]  text-center text-red-600 px-1">- {{price(calculate_discount_amount(discount_amount,qty))}} تومان</span>
                                                                   
                                                                    <div >
                                                                        {{ price(parseInt((((product.price ) * ((100 - product.discount) / 100)) * qty)- calculate_discount_amount(discount_amount,qty))) }}
                                                                        <span class="text-[10px] md:text-sm text-gray-600">تومان</span>
                                                                    </div>

                                                                </div>
                                                            </dd>
                                                        </div>
                                                        <div class="flex flex-wrap items-center justify-between gap-4 w-full">
                                                            <!-- Gateways -->
                                                            <div class="flex flex-wrap sm:flex-nowrap gap-4 justify-center sm:justify-start flex-1">
                                                                <label 
                                                                v-for="(key, index) in available_gateways"
                                                                :key="key"
                                                                @click="selected_gateway = key"
                                                                class="custom-option text-center flex flex-col items-center gap-2 cursor-pointer transition-all hover:scale-105 hover:shadow-md p-3 rounded-xl border-2"
                                                                :class="selected_gateway === key ? 'border-indigo-500 bg-indigo-50 shadow-md' : 'border-gray-50 bg-white'"
                                                                >
                                                                <img 
                                                                    :src="gateways[key].img" 
                                                                    :alt="gateways[key].name" 
                                                                    class="w-12 h-12 object-contain" 
                                                                />
                                                                <span class="text-xs font-medium text-gray-700">
                                                                    {{ gateways[key].name }}
                                                                </span>

                                                                <!-- Hidden radio -->
                                                                <input 
                                                                    type="radio" 
                                                                    name="gateway" 
                                                                    class="hidden" 
                                                                    :value="key"
                                                                    v-model="selected_gateway"
                                                                />
                                                                </label>
                                                            </div>

                                                            <!-- Button -->
                                                            <div class="flex items-center justify-center sm:justify-end w-full sm:w-auto">
                                                                <!-- <button 
                                                                    v-if="btn_buy_loading" 
                                                                    type="submit" 
                                                                    disabled
                                                                    class="flex items-center justify-center rounded-full bg-gray-400 px-8 py-2 text-white font-medium cursor-not-allowed"
                                                                    >
                                                                    <svg aria-hidden="false" class="w-6 h-6 text-gray-200 animate-spin fill-gray-600" viewBox="0 0 100 101" fill="none">
                                                                        <path d="M100 50.5908C100 78.2051..." fill="currentColor" />
                                                                        <path d="M93.9676 39.0409..." fill="currentFill" />
                                                                    </svg>
                                                                </button> -->
                                                                <button
                                                                    :disabled="selected_gateway == null  || btn_buy_loading ? true : false" 
                                                                    type="submit"
                                                                    :class="selected_gateway == null || btn_buy_loading? 'bg-gray-400 text-white' : 'bg-indigo-600 text-white hover:bg-indigo-700 hover:shadow-lg'"
                                                                    class="flex items-center justify-center gap-3 rounded-full px-8 py-2 font-medium transition-all"
                                                                    >
                                                                    <p>پرداخت</p>
                                                                    <ShoppingBagIcon class="h-5 w-5 text-white" />
                                                                </button>
                                                            </div>
                                                            </div>

                                                    </form>
                                                </dl>

                                            </div>
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
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import axios from 'axios'
import { ShoppingBagIcon } from '@heroicons/vue/20/solid'

export default {
  props: ["show", "product", "available_gateways"],
  emits: ["update:show", "selected_gateway"],
  components: { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot, ShoppingBagIcon },
  data() {
    return {
      btn_buy_loading: false,
      btn_discount_loading: false,
      discount_amount: 0,
      discount_is_percentage: false,
      snackbarVisible: false,
      snackbarDiscount: false,
      qty: 1,
      error: null,
      discount_code: null,
      selected_gateway: this.available_gateways?.[0] ?? null,
      gateways: {
        sep:        { name: 'سپ',        img: '/images/gateways/sep.png' },
        custom:     { name: 'زرینپال',   img: '/images/gateways/zarinpal.png' },
        zarinpal:   { name: 'زرین پال',  img: '/images/gateways/zarinpal.png' },
        behpardakht:{ name: 'به پرداخت', img: '/images/gateways/behpardakht.png' },
        sadad:      { name: 'سداد',      img: '/images/gateways/sadad.png' },
      }
    }
  },
  watch: {
    // Emit whenever user changes gateway
    selected_gateway(newVal) {
      this.$emit('selected_gateway', newVal)
    },
    // Initialize default and emit once when gateways list shows up/changes
    available_gateways: {
      immediate: true,
      handler(list) {
        if (!this.selected_gateway && Array.isArray(list) && list.length) {
          this.selected_gateway = list[0]
          this.$emit('selected_gateway', this.selected_gateway)
        }
      }
    }
  },
  methods: {
    // If you toggle the dialog inside, make sure to use v-model contract:
    close() {
      this.$emit('update:show', false)
    },
    price(value) {
      let chars = Array.from(`${value}`)
      for (let index = 1; index <= chars.length; index++) {
        if (index % 3 == 0 && chars.length != index) {
          chars[chars.length - index] = `,${chars[chars.length - index]}`
        }
      }
      return chars.join("")
    },
    chooseGateway(key) {
      // Call this from your template (e.g., click/radio change)
      this.selected_gateway = key
    },
    sendData() {
      this.btn_buy_loading = true
      const apiUrl = `${apiStore().address}/api/order/create-group-order-digital-product/${this.selected_gateway}/`
      const data = {
        discount_code: this.discount_code,
        digital_product: this.product.id,
        count: this.qty,
      }
      axios.post(apiUrl, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: "application/json",
          Authorization: `Token ${useUserStore().userToken}`
        },
      }).then(response => {
        window.location.href = `${apiStore().address}/api/wallet/go_to_gateway_digital_product_view/${response.data.id}`
        this.btn_buy_loading = false
      })
    },
    calculate_discount_amount(discount_amount, qty) {
      if (this.discount_is_percentage) {
        return (((this.product.price) * ((100 - this.product.discount) / 100)) * qty) * (discount_amount / 100)
      } else {
        return discount_amount
      }
    },
    checkDiscountCode() {
      this.btn_discount_loading = true
      const apiUrl = `${apiStore().address}/api/product/check-valid-digital-product-discount/${this.discount_code}/${this.product.id}/`
      axios.get(apiUrl, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: "application/json",
          Authorization: `Token ${useUserStore().userToken}`
        },
      }).then(response => {
        if (response.data.valid) {
          this.discount_amount = response.data.amount
          this.discount_is_percentage = response.data.is_percentage
          this.snackbarDiscount = true
          setTimeout(() => { this.snackbarDiscount = false }, 5000)
        } else {
          this.error = 'کد تخفیف معتبر نیست'
        }
        this.btn_discount_loading = false
      }).catch(() => {
        this.error = 'مشکلی پیش‌آمده'
      })
    },
  },
}
</script>
