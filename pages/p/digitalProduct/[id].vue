<template>
  <div v-if="loading">
    <div class="p-16 py-[400px] flex items-center justify-center">
      <div role="status">
        <svg aria-hidden="false" class="w-14 h-14 text-gray-100 animate-spin fill-indigo-600" viewBox="0 0 100 101"
          fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z"
            fill="currentColor" />
          <path
            d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z"
            fill="currentFill" />
        </svg>
        <span class="sr-only">Loading...</span>
      </div>
    </div>
  </div>
  <div v-else v-if="product != null" data-aos="fade-down">

    <div class="min-h-full">

      <!-- Top Animation -->
      <div class="relative ">
        <div class="">
          <div class="bg rounded-b-[50px] "></div>
          <div class="bg bg2 rounded-b-[50px]"></div>
          <div class="bg bg3 rounded-b-[50px]"></div>
        </div>
        <img :src="product.image[0].photo"
          class="absolute overflow-hidden inset-0 -z-10 h-[50%] md:h-full w-full object-cover " />
        <img class="absolute backdrop-blur-md overflow-hidden inset-0 -z-10  h-full w-full  " />
        <img class="absolute bg-gray-800/60 overflow-hidden inset-0 -z-10  h-full w-full  " />

        <div class="absolute inset-x-0 -top-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true">
          <div
            class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
        </div>
        <!-- Shop Name and Picture -->
        <div class="flex flex-row rtl pt-4 container justify-center md:justify-start items-center ">
          <div class=" me-5">
            <a :href="'/' + product.shop.username" target="blank" >
              <ArrowTopRightOnSquareIcon class="h-4 w-4 mt-3 text-sm text-gray-50 drop-shadow-[0_10.2px_10.2px_rgba(0,0,0,0.9)]" click="" />
              <img :src="product.shop.image" class="h-24 w-24 object-cover rounded-full" />
            </a>
          </div>
          <a :href="'/' + product.shop.username" target="blank" >
            <div class="text-sm text-gray-50 drop-shadow-[0_10.2px_10.2px_rgba(0,0,0,0.9)]">
              فروشگاه:
            </div>
            <div class="flex font-semibold text-3xl text-white drop-shadow-[0_10.2px_10.2px_rgba(125,125,125,0.9)]">
              {{ product.shop.name }}
            </div>
          </a>
        </div>
        <div class="mx-auto max-w-2xl py-32 sm:py-48 lg:pt-[1rem] lg:pb-[5rem]">
          <div class="hidden sm:mb-8 sm:flex sm:justify-center">
          </div>
        </div>
      </div>
      <div class="mt-[-40px] hidden md:block">

        <svg id="Layer_2" class="w-full" fill="white" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 695.06 35.8">

          <g id="Layer_2-2" data-name="Layer 2">
            <g id="Layer_1-2" data-name="Layer 1-2">
              <path class="cls-1" d="M695.06,0V35.8H0V0S194.27,12.75,356.77,12.75,695.06,0,695.06,0Z" />
            </g>
          </g>
        </svg>
      </div>
      <main class="-mt-56 md:-mt-36 pb-8">
        <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 class="sr-only">Page title</h1>
          <!-- Main 3 column grid -->
          <div class="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
            <!-- Left column -->
            <div class="grid grid-cols-1 gap-4 lg:col-span-12">
              <section aria-labelledby="section-1-title">
                <div class="bg-white rounded-[25px] shadow-1">
                  <div class="mx-auto max-w-2xl px-4 py-10 sm:px-6 sm:py-16 lg:max-w-7xl lg:px-8">
                    <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
                      <!-- Image gallery -->
                      <TabGroup as="div" class="flex flex-col-reverse">
                        <!-- Image selector -->
                        <div class="mx-auto mt-6 w-full max-w-2xl lg:max-w-none">
                          <TabList class="grid grid-cols-4 md:grid-cols-6  ">
                            <!-- Video Tab -->
                            <Tab v-if="product.video"
                              class="relative flex h-10 w-10 md:h-20 md:w-20 cursor-pointer items-center justify-center rounded-xl bg-gray-50 text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:bg-gray-100"
                              v-slot="{ selected }">
                              <span
                                :class="[selected ? 'ring-indigo-500' : 'ring-transparent', 'pointer-events-none absolute rounded-xl']"
                                aria-hidden="true"></span>
                              <span class="flex items-center justify-center">
                                <VideoCameraIcon class="h-9 w-9"
                                  :class="{ 'text-gray-800': !selected, 'text-indigo-500': selected }" />
                              </span>
                            </Tab>
                            <!-- Image Tabs -->
                            <Tab v-for="image in product.image" :key="image.id"
                              class="relative flex h-14 w-14 md:h-20 md:w-20 cursor-pointer items-center justify-center rounded-xl bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:bg-gray-100 "
                              v-slot="{ selected }">
                              <span class="sr-only">{{ image.photo }}</span>
                              <span
                                :class="[selected ? 'ring-indigo-500 bg-gray-100' : 'ring-transparent', 'pointer-events-none absolute inset-0 rounded-xl']"
                                aria-hidden="true" />
                              <span class="absolute inset-0 overflow-hidden rounded-md flex justify-center">
                                <img :src="image.photo" alt="image.title_for_photo"
                                  class="h-full w-full rounded-xl object-cover" />
                              </span>
                            </Tab>
                          </TabList>
                        </div>

                        <TabPanels class="aspect-h-1 aspect-w-1 w-full">
                          <!-- Video Panel -->
                          <TabPanel v-if="product.video" class="h-full flex justify-center rounded-xl  items-center">
                            <div class="overflow-hidden rounded-[25px]"
                              style="width: 90%; height: 100%; max-height: 500px; position: relative;">
                              <div v-html="product.video">
                              </div>
                            </div>
                          </TabPanel>
                          <!-- Image Panels -->
                          <TabPanel v-for="image in product.image" :key="image.id" class="aspect-square flex justify-center rounded-xl  items-center ">
                            <img :src="image.photo" :alt="image.title_for_photo"
                              class=" aspect-square rounded-[25px] object-cover " />
                          </TabPanel>
                        </TabPanels>
                      </TabGroup>

                      <!-- Product info -->
                      <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0 rtl">
                        <h1 class="text-3xl font-bold tracking-tight text-gray-900">{{ product.title }}</h1>

                        <div class="mt-3">
                          <h2 class="sr-only">Product information</h2>
                          <div v-if="product.discount != 0" class="flex items-center ">
                            <div class="text-xl line-through text-gray-300  tracking-tight">{{ product.price }} </div>
                            <div class=" overflow-hidden rounded-lg p-4">
                              <div
                                class=" text-white shadow-xl text-sm font-semibold bg-red-600 rtl text-right rounded-full px-3 py-1"
                                v-if="product.discount != 0"> {{ product.discount }} % </div>
                            </div>
                          </div>
                          <p class="text-3xl tracking-tight text-gray-900">{{
    parseInt((product.price) * ((100 - product.discount) / 100)) }}
                            <span class="text-sm text-gray-600">تومان</span>
                          </p>
                        </div>

                        <!-- Reviews -->
                        <div class="mt-3">
                          <h3 class="sr-only">Reviews</h3>
                          <div class="flex items-center">
                            <div class="flex items-center">
                              <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating"
                                :class="[product.rate / 20 > rating ? 'text-indigo-500' : 'text-gray-300', 'h-5 w-5 flex-shrink-0']"
                                aria-hidden="true" />
                              <div v-if="product.rate_number > 0">
                                <p class="text-sm text-gray-500 px-3">({{ product.rate_number }})</p>
                              </div>
                              <div v-else>
                                <p class="text-sm text-gray-500 px-3">(0)</p>
                              </div>
                            </div>
                            <p class="sr-only">{{ product.rating }} out of 5 stars</p>
                          </div>
                        </div>

                        <div class="mt-6">
                          <h3 class="sr-only">Description</h3>

                          <div class="space-y-6 text-base text-gray-700" v-html="product.description" />
                        </div>

                        <div class="mt-6">

                          <div class="sm:flex-col1 mt-10 flex">
                            <button v-if="btn_buy_loading" type=""
                                class="bg-gray-400 text-white font-bold py-2 mb-8 px-4 w-full max-w-xs rounded-full px-10">
                                <div class=" flex w-full items-center justify-center" >
                                    <div role="status">
                                        <svg aria-hidden="false" class="w-8 h-8 text-gray-200 animate-spin fill-gray-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
                                            <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
                                        </svg>
                                        <span class="sr-only">Loading...</span>
                                    </div>
                                </div>
                            </button>
                            <button v-else @click="isLogin==true?is_sellable?show = true:'':openLogin()"
                              :class="is_sellable?'bg-indigo-600 hover:bg-indigo-700':'cursor-default bg-gray-400'"
                              class="flex max-w-xs flex-1 items-center justify-center rounded-full border border-transparent px-8 py-3 text-base font-medium text-white focus:outline-none sm:w-full">
                              <p v-if="is_sellable">خرید / دانلود</p>
                              <p v-else>ناموجود</p>
                            </button>
                            <BuyDigitalProductPopup   @show-change="(data) => {show = data}" :show="show" :product="product" />
                          </div>
                        </div>

                        <section aria-labelledby="details-heading" class="mt-12">
                          <h2 id="details-heading" class="sr-only">Additional details</h2>

                          <div class="divide-y divide-gray-200 border-t">
                            <!-- <Disclosure as="div" v-for="detail in product.Specification" :key="detail.id" v-slot="{ open }"></Disclosure> -->
                            <Disclosure as="div" v-slot="{ open }">

                              <DisclosurePanel as="div" class="prose prose-sm pb-6">

                                <div>
                                  <div class="px-4 sm:px-0">

                                  </div>
                                  <div class="mt-6 border-t border-gray-100">
                                    <dl class="divide-y divide-gray-100">
                                      <div v-for="item in product.Specification" :key="item.id"
                                        class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                                        <dt class="text-sm font-medium leading-6 text-gray-900">{{ item.title }}</dt>
                                        <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">{{
    item.body }}
                                        </dd>
                                      </div>

                                    </dl>
                                  </div>
                                </div>
                              </DisclosurePanel>
                            </Disclosure>
                          </div>
                        </section>
                      </div>
                    </div>



                    <section class="bg-white px-6 py-24 sm:py-32 lg:px-8">
                      <div class=" font-bold text-right text-3xl pb-10">
                        نظرات
                      </div>
                      <figure class="mx-auto rtl  border-t pb-10" v-for="comment in product.comment" :key="comment.id">
                        <p class="sr-only">پنچ ستاره</p>
                        <div class="flex gap-x-1 text-indigo-600">

                        </div>
                        <figcaption class="mt-10 flex items-center gap-x-6">
                          <div class="flex items-center">
                            <div class="h-10 w-10 flex justify-center items-center p-1 me-2 rounded-full bg-gray-100">
                              <UserIcon class="h-6 w-6  text-gray-400" />
                            </div>
                            <div class="text-sm leading-6">
                              <div class="font-semibold text-gray-600">{{ comment.author.first_name }} {{
    comment.author.last_name }}</div>
                              <div class="">
                                <h3 class="sr-only">Reviews</h3>
                                <div class="flex items-center">
                                  <div class="flex items-center">
                                    <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating"
                                      :class="[comment.rate / 20 > rating ? 'text-indigo-600' : 'text-gray-300', 'h-3 w-3 flex-shrink-0']"
                                      aria-hidden="true" />
                                  </div>
                                  <p class="sr-only">{{ product.rate }} out of 5 stars</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        </figcaption>

                        <blockquote class="mt-5 text-lg leading-8 tracking-tight text-gray-700 text-sm  sm:leading-9">
                          <p><span class="text-2xl">”</span>{{ comment.title }}<span class="text-2xl">“</span></p>
                        </blockquote>
                      </figure>
                      <div class="flex items-start space-x-4 mt-10">
                        <div class="min-w-0 flex-1">
                          <form @submit.prevent="sendComment" class="relative">
                            <div
                              class="overflow-hidden rounded-lg shadow-sm ring-1 ring-inset ring-gray-300 focus-within:ring-2 focus-within:ring-gray-400">
                              <div class="flex rtl items-center  pt-3">
                                <StarIcon v-for="rate in [0, 1, 2, 3, 4]" :key="rate"
                                  :class="[(comment_rate / 20 > rate || comment_hover_rate / 20 > rate) ? 'text-indigo-600' : 'text-gray-300', 'h-7 w-7 m-1 flex-shrink-0']"
                                  @click="comment_rate = (rate + 1) * 20" @mouseover="comment_hover_rate = (rate + 1) * 20"
                                  @mouseleave="comment_hover_rate = comment_rate" aria-hidden="true" />

                              </div>
                              <label for="comment" class="sr-only ">نظر خود را بنویسید</label>
                              <textarea rows="3" required v-model="comment_title" name="comment" id="comment"
                                class="block w-full p-3 text-right resize-none bg-transparent py-1.5 text-gray-900 placeholder:text-gray-400 sm:text-sm sm:leading-6 outline-none"
                                placeholder="... نظر خود را بنویسید "></textarea>

                              <!-- Spacer element to match the height of the toolbar -->
                              <div class="py-2" aria-hidden="true">
                                <!-- Matches height of button in toolbar (1px border + 36px content height) -->
                                <div class="py-px">
                                  <div class="h-9" />
                                </div>
                              </div>
                            </div>

                            <div class="absolute inset-x-0 bottom-0 flex justify-between py-2 pl-3 pr-2">
                              <div class="flex items-center space-x-5">

                              </div>
                              <div class="flex-shrink-0">
                                <button type="submit"
                                  class="inline-flex items-center rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">ارسال</button>
                              </div>
                            </div>
                          </form>
                        </div>
                      </div>
                    </section>
                  </div>

                </div>
              </section>
            </div>

          </div>
        </div>
      </main>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue'
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
  Tab,
  Popover,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from '@headlessui/vue'
import BuyDigitalProductPopup from "@/components/section/BuyDigitalProductPopup.vue"
import { StarIcon } from '@heroicons/vue/20/solid'
import { ArrowTopRightOnSquareIcon, HeartIcon, MinusIcon, PlusIcon, UserIcon, VideoCameraIcon } from '@heroicons/vue/24/outline'
import axios from 'axios'
import { useUserStore } from '~/store/user';
import { apiStore } from '~/store/api';
import { NavigationStore } from '~/store/navigation'; 
export default {
  components: {
    BuyDigitalProductPopup,
    ArrowTopRightOnSquareIcon,
    HeartIcon,
    VideoCameraIcon,
    UserIcon,
    StarIcon,
    HeartIcon,
    MinusIcon,
    PlusIcon,
    Disclosure,
    DisclosureButton,
    DisclosurePanel,
    RadioGroup,
    RadioGroupLabel,
    RadioGroupOption,
    Tab,
    Popover,
    TabGroup,
    TabList,
    TabPanel,
    TabPanels,
  },
  props: {

  },
  computed: {
    isLogin() {
      return useUserStore().userToken != null;
    },
  },
  data: () => ({
    loading: true,
    show:false,
    product: null,
    is_sellable: true,
    btn_buy_loading: false,
    // selectedColor: ref(product.colors[0]),
    comment_title: '',
    comment_rate: 0,
    comment_hover_rate: 0,
  }),
  methods: {
    setButtons(){
      if (this.is_sellable){
          NavigationStore().setButtons([
            {
              'name':'خرید / دانلود',
              'func': this.isLogin==true? ()=>{this.show = true} : this.openLogin,
              'href': null,
            }
          ])
        }else{
          NavigationStore().setButtons([
        ])
        }
    },
    getData() {
      this.loading = true
      axios.get(`${apiStore().address}/api/product/digital-product-retrieve-main-page/${this.$route.params.id}/`, {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      }).then((response) => {
        console.log('data', response.data);
        this.product = response.data
        this.loading = false
        if (this.product.type == 'license'){
          if(this.product.inventory_status==false){
            this.is_sellable = false
          }
        }
        this.setButtons()

      })
    },
    sendData() {
      this.btn_buy_loading = true
      this.setButtons()
      const apiUrl = `${apiStore().address}/api/order/create-order-digital-product/`;
      const data = {
          digital_product: this.product.id,
      };
      // this.loading = true
      axios.post(apiUrl, data, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: "application/json",
          Authorization: `Token ${useUserStore().userToken}`
        },
      }).then(response => {
        axios.post(`${apiStore().address}/api/wallet/pay-order-digital-product/`, { order_id: response.data.id }, {
          headers: {
            'Content-Type': 'multipart/form-data',
            Accept: "application/json",
            Authorization: `Token ${useUserStore().userToken}`
          },
        }).then(response => {
          if (response.status == 200) {
            window.location.href = response.data["result"]
          }
          console.log(response.data);
          this.btn_buy_loading = false;
          this.setButtons();
        }),
          this.loading = false;
          // You can change the dialog page or show a success message here
      })
    },
    async sendComment() {

      let Comment = new FormData();
      Comment.append('title', this.comment_title);
      Comment.append('rate', this.comment_rate);
      try {
        axios.post(`${apiStore().address}/api/product/add-digital-comment/${this.$route.params.id}/`, Comment, {
          headers: {
            "Content-type": "application/json",
            Accept: "application/json",
            Authorization: `Token ${useUserStore().userToken}`
          },
        }).then((data) => {
          this.getData()

        })
      } catch (error) {
        console.error('Error uploading images:', error); s

      }


    },
    openLogin() {
      NavigationStore().changeLoginState(true)
    },
  },

   mounted() {
    this.getData()
  },
}

</script>