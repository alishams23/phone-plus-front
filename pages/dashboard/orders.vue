<template>
<div class="grid rtl grid-cols-1 gap-4 lg:col-span-2">
    {{ orders }}
    fgss
      <section aria-labelledby="section-1-title">
        <h2 class="sr-only" id="section-1-title">Section title</h2>
        <div class="overflow-hidden rounded-lg bg-white shadow">
          <div class="p-6">
            <div class="px-4 sm:px-0">
              <h3 class="text-base font-semibold leading-7 text-gray-900">اطلاعات شخصی</h3>
            </div>
            <div class="mt-6 border-t border-gray-100">
              <dl class="divide-y divide-gray-100">
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-sm font-medium leading-6 text-gray-900">نام </dt>
                  <dd class="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">

                    <div class=" flex-grow">
                      <div class="flex">
                        <input type="text" id="first_name"
                          class="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  p-2.5" value="Ali"
                          required>
                      </div>
                    </div>

                  </dd>
                </div>
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-sm font-medium leading-6 text-gray-900">نام خانوادگی</dt>
                  <dd class="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">

                    <div class=" flex-grow">
                      <div class="flex">
                        <input type="text" id="first_name"
                          class="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  p-2.5"
                          value="Ahmadi" required>
                      </div>
                    </div>

                  </dd>
                </div>
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-sm font-medium leading-6 text-gray-900">شماره همراه</dt>
                  <dd class="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <div class=" flex-grow">
                      <div class="flex">
                        <div class="relative">
                          <input type="text" id="floating-phone-number"
                            class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  p-2.5"
                            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" value="09122345678" />
                          <label for="floating-phone-number"
                            class="absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-placeholder-shown:start-6 peer-focus:start-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto">Phone
                            number</label>
                        </div>
                      </div>
                    </div>
                  </dd>
                </div>
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-sm font-medium leading-6 text-gray-900">ایمیل</dt>
                  <dd class="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <div class=" flex-grow">
                      <div class="flex">
                        <input type="email" id="first_name"
                          class="  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg  p-2.5"
                          value="test@example.com" required>
                      </div>
                    </div>
                  </dd>
                </div>
                <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                  <dt class="text-sm font-medium leading-6 text-gray-900">آدرس</dt>
                  <dd class="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                    <div class="flex flex-wrap -mx-3 mb-2">
                      <div class="py-2 w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                          for="grid-state">
                          استان
                        </label>
                        <div class="relative">
                          <select
                            class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                            id="grid-state">
                            <option v-for="province in provinces" :key="province">{{ province }}</option>
                          </select>
                          <div
                            class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                            <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                            </svg>
                          </div>
                        </div>
                      </div>

                      <div class="py-2 w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                          شهر
                        </label>
                        <input
                          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-city" type="text" value="تهران">
                      </div>
                      <div class="py-2 w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                          خیابان اصلی
                        </label>
                        <input
                          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-city" type="text" value="ولیعصر">
                      </div>
                      <div class="py-2 w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">
                          خیابان فرعی
                        </label>
                        <input
                          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-city" type="text" value="آسمان">
                      </div>

                      <div class="py-2 w-full md:w-1/3 px-3 mb-6 md:mb-0">
                        <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-zip">
                          کدپستی
                        </label>
                        <input
                          class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                          id="grid-zip" type="text" value="1439889342">
                      </div>
                    </div>
                  </dd>
                </div>
                <button class="bg-indigo-600 hover:bg-indigo-800 text-white font-bold py-2 px-4 rounded-full px-10">
                  ثبت تغییرات
                </button>
              </dl>
            </div>
          </div>
        </div>
      </section>
    </div>
</template>

<script >
export default {

    setup() {
        definePageMeta({
            layout: "user-dashboard",
        })
    },
    components: {

    },
    data() {
        return {
            orders:null,
            loading:true
        }
    },
    methods: {
        getData() {
            this.loading = true
            axios.get(`http://192.168.1.109:8000/api/order/order-user-list/`, {
                headers: {
                "Content-type": "application/json",
                Accept: "application/json",
                },
            }).then((response) => {
                this.orders = response.data
                this.loading = false

            })
        },
        currentRouteCheck(url) {
            return this.$route.name.split("-").includes(url.split('/')[1]);
        },
    },
    mounted() {
        this.getData()
    }
    
}
</script>