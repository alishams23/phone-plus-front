<template>
  <!-- Loading State -->
  <div v-if="loading">
    <div class="grid rtl grid-cols-1 gap-4 lg:col-span-2 lg:mx-[3rem] mt-12 lg:mt-0">
      <section aria-labelledby="section-1-title">
        <h2 class="sr-only" id="section-1-title">Section title</h2>
        <div class="overflow-hidden rounded-lg bg-white shadow">
          <div class="p-16 flex items-center justify-center">
            <div role="status">
              <svg aria-hidden="false" class="w-14 h-14 text-gray-100 animate-spin fill-indigo-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
              </svg>
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>

  <!-- Loaded State -->
  <div v-else>

    <!-- Empty Orders -->
    <div v-if="orders.length == 0" data-aos="zoom-out" data-aos-duration="500">
      <div class="grid rtl grid-cols-1 gap-4 lg:col-span-2 lg:mx-[3rem] mt-12 lg:mt-0">
        <section aria-labelledby="section-1-title">
          <h2 class="sr-only" id="section-1-title">Section title</h2>
          <div class="overflow-hidden rounded-lg bg-white shadow">
            <div class="bg-indigo-100 border-r-[9px] border-indigo-500 mt-10 mb-[12rem] mx-10 rounded-lg text-indigo-700 p-4" role="alert">
              <p class="font-bold">سفارشی یافت نشد</p>
            </div>
          </div>
        </section>
      </div>
    </div>

    <!-- Orders List -->
    <div v-else>
      <div class="grid grid-cols-1 pb-10 mt-12 lg:mt-0">
        <div v-for="data in orders" :key="data.id">
          <div v-if="data.digital_product != null" class="min-h-[300px] mt-12 lg:mt-0 bg-gray-100 border shadow-xl lg:mx-[3rem] flex flex-wrap my-2 items-center justify-end rounded-2xl">
            <div class="grid flex items-center justify-start w-full grid-cols-6">
              <div class="col-span-1 lg:hidden" />
              <div class="col-span-4 lg:col-span-2">
                <img :src="data.digital_product.image[0].photo" alt=""
                     class="w-56 lg:w-56 h-56 lg:h-56 -mt-10 lg:mt-0 lg:-ms-10 flex items-center object-cover shadow-lg rounded-3xl" />
              </div>
              <div class="col-span-6 lg:col-span-4">
                <h3 class="mt-3 text-right text-lg pe-4 py-3 font-semibold leading-6 text-black">
                  <a>{{ data.digital_product.title }}</a>
                </h3>
                <div class="text-right pe-4 pb-4">
                  <div class="flex justify-end items-center">
                    <p class="pe-1 text-[10px] text-gray-400">تومان</p>
                    <p>{{ price(parseInt(data.price/10)) }}</p>
                  </div>
                </div>
                <p class="text-right text-xs pe-4 test-n pb-4" v-html="truncatedBody(data.digital_product.description)"></p>

                <!-- Subsets -->
                <div v-if="data.subset_Digital" class="flex items-center justify-center flex-wrap py-3">
                  <div v-for="cell in data.subset_Digital.data" :key="cell.id" class="px-5 flex flex-col items-center">
                    <p class="font-bold">{{ cell.title }}</p>
                    <p>{{ cell.body }}</p>
                  </div>
                </div>
                <div v-if="data.subsets_Digital">
                  <div v-for="(subset, index) in data.subsets_Digital" :key="index">
                    <div class="flex items-center justify-center flex-wrap py-3">
                      <div v-for="cell in subset.data" :key="cell.id" class="px-5 flex flex-col items-center">
                        <p class="font-bold">{{ cell.title }}</p>
                        <p>{{ cell.body }}</p>
                      </div>
                    </div>
                    <div v-if="index !== data.subsets_Digital.length - 1" class="border-t border-gray-300"></div>
                  </div>
                </div>

                <!-- Download Buttons -->
                <div class="flex justify-center pe-4">
                  <a v-if="data.digital_product.file" :href="data.digital_product.file"
                     class="inline-flex items-center justify-center px-5 mx-5 py-3 mb-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    دانلود فایل
                  </a>
                  <a v-if="data.digital_product.link_file" :href="data.digital_product.link_file"
                     class="inline-flex items-center justify-center px-5 py-3 mb-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                    <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                    </svg>
                    دانلود فایل
                  </a>
                </div>

                <!-- Order Info -->
                <div class="text-right pe-4 pt-2">
                  <div class="flex justify-end items-center">
                    <p class="pe-1 text-[10px] text-gray-700 font-bold rtl">{{ data.order_id }}</p>
                    <p class="pe-1 text-[10px] text-gray-400 rtl">شماره سفارش :</p>
                  </div>
                  <div class="flex justify-end items-center">
                    <p class="pe-1 text-[10px] text-gray-700 font-bold rtl">{{ data.tracking_code }}</p>
                    <p class="pe-1 text-[10px] text-gray-400 rtl">کد پیگیری :</p>
                  </div>
                </div>
                <div class="mt-3 text-right text-[10px] ps-4 pb-3 text-gray-400 rtl">
                  <p>{{ data.jalali_time }}</p>
                </div>

                <!-- Instructions Toggle -->
                <div v-if="hasValidInstructions(data)" class="flex justify-end pe-4 mt-4">
                  <div @click="toggleInstructions(data.id)"
                       class="inline-flex items-center justify-center px-5 pb-3 mb-3 border border-transparent text-base font-medium rounded-md text-indigo-600 cursor-pointer hover:text-indigo-700">
                    نکات ضروری برای استفاده
                  </div>
                </div>
              </div>
            </div>

            <!-- Instructions Content -->
            <transition name="fade">
              <div v-if="!showInstructionsId.includes(data.id) && hasValidInstructions(data)"
                   class="my-4 w-full mx-2 lg:mx-4 px-4 py-2 rtl bg-gray-200 rounded-lg">
                <div v-html="data.digital_product.instructions"></div>
              </div>
            </transition>
          </div>
        </div>
      </div>

      <!-- Pagination Controls -->
      <div class="w-full flex justify-center mt-6 mb-12 space-x-2 rtl">
        <button
          @click="page -= 1"
          :disabled="!previous"
          class="px-4 py-2 rounded-full border hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          صفحه قبل
        </button>

        <span class="px-4 py-2">
          صفحه {{ page }}
        </span>

        <button
          @click="page += 1"
          :disabled="!next"
          class="px-4 py-2 rounded-full border hover:bg-gray-100 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          صفحه بعد
        </button>
      </div>
    </div>
  </div>
</template>


<script >
import axios from 'axios'
 
  
  

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
            orders: [],
            loading: true,
            page: 1,
            next: null,
            previous: null,
            showInstructionsId: []  // Initialize as an empty array
        }
    },
    methods: {
        price(value){
            let text
            let chars = Array.from(`${value}`)
            for (let index = 1; index <= chars.length; index++) {
                
                if(index % 3==0){
                    if (chars.length != index) {
                    chars[chars.length-index] = `,${chars[chars.length-index]}`;
                        
                    }
                }

            }
            return chars.join("");;
        },
        hasValidInstructions(data) {

            if(data.digital_product.instructions.trim() !== '<p class="ql-align-right ql-direction-rtl">null</p>' &&
                data.digital_product.instructions.trim() !== '<p class="ql-align-right ql-direction-rtl"><br></p>' &&
                data.digital_product.instructions.trim() !== 'null' && data.digital_product.instructions.trim() !== null ){
                    return true
                }


        },
        toggleInstructions(id) {
            const index = this.showInstructionsId.indexOf(id);
            if (index > -1) {
                // If id is already in the list, remove it
                this.showInstructionsId.splice(index, 1);
            } else {
                // If id is not in the list, add it
                this.showInstructionsId.push(id);
            }
        },
        getData() {
            this.loading = true
            console.log(useUserStore().userToken)
            axios.get(`${apiStore().address}/api/order/order-digital-product-user-list/`, 
                {
                headers: {
                    "Content-type": "application/json",
                    Accept: "application/json",
                    Authorization: `Token ${useUserStore().userToken}`,
                },
                params: {
                    page: this.page
                }
            }).then((response) => {
                this.orders   = response.data.results;
                this.next     = response.data.next;
                this.previous = response.data.previous;
                this.loading  = false;

            })
        },
        currentRouteCheck(url) {
            return this.$route.name.split("-").includes(url.split('/')[1]);
        },
        truncatedBody(description) {
            const charLimit = 130; // Adjust the limit as needed
            const ending = description.length > charLimit ? '...' : '';
            return description.substring(0, charLimit) + ending;
        },

    },
    mounted() {
        if (useUserStore().userToken == null){
            this.$router.push('/')
        }
        this.getData()
        NavigationStore().setButtons([
            {
                'name':'خروج',
                'func':null,
                'href':'/p/auth/logOut'
            }
        ])
    },
    watch: {
        page(newPage, oldPage) {
            this.getData();
        }
    }

}
</script>
