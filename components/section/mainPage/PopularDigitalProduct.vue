<template>
  <!-- <div class="pb-16 py-[60px] pb-[60px] flex items-center justify-center" v-if="loading">
    <div role="status">
      <span class="relative flex h-8 w-8">
        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
        <span class="relative inline-flex rounded-full h-8 w-8 bg-indigo-500"></span>
      </span>
      <span class="sr-only">Loading...</span>
    </div>
  </div> -->
  <div class=" bg-white flex items-center justify-center mt-20 mx-3" v-if="loading">
    <div class="grid grid-cols-1 md:grid-cols-1  gap-4 container mx-auto  h-[320px] md:h-[320px] overflow-hidden">
      <!-- Placeholder cards to show while loading -->
      <div v-for="n in 5" :key="n" class="my-5 bg-gray-300  h-[300px] md:h-[300px] w-full animate-pulse rounded-[17px]">
        <!-- Empty box that represents loading card -->
      </div>
    </div>
  </div>

  <div v-else>
    <div class="container mx-auto">
      <transition name="slide-u p" mode="out-in">
        <div class="md:rounded-3xl  isolate overflow-hidden relative md:border " :key="digital_products[index]"
          v-if="loading == false">
          <img
            :src="digital_products[index].image[0].photo ? digital_products[index].image[0].photo : digital_products[index].image"
            :data-aos="swap_direction == 'left' ? 'fade-left' : 'fade-right'" data-aos-duration="1000"
            class="absolute inset-0 -z-10 h-full w-full object-cover" />
          <div class="absolute inset-0 -z-10 bg-black/50 " />
          <div class="absolute inset-0 -z-10 bg-black/60   " />
          <div class="relative">
            <div class="flex pt-3 justify-between items-center">
              <div class="rtl px-3 pt-3">
                <button @click="$router.push('/p/search/?sort_digital_product=-rate&tab=1');"
                  class="text-white text-sm mg:text-lg rtl cursor-pointer">
                  بیشتر
                  <span aria-hidden="true" class="px-3 pt-3">&larr;</span>
                </button>
              </div>
              <div class="text-white font-bold text-md lg:text-xl text-right px-4 pt-4 flex items-center justify-end">
                محصولات دیجیتال محبوب
                <div class="ml-2 lg:mx-5 h-12 w-12 bg-white flex justify-center items-center shadow-2 rounded-xl">
                  <CloudArrowDownIcon class="h-5 text-indigo-600" />
                </div>
              </div>
            </div>
          </div>
          <nuxt-link :to="'/p/digitalProduct/' + digital_products[index].slug"
            class=" flex flex-col text-white md:flex-row justify-center md:justify-between container mx-auto">
            <div class="md:w-4/12  flex  justify-center md:justify-start  ">
              <img :src="digital_products[index].image[0].photo" alt=""
                :data-aos="swap_direction == 'left' ? 'fade-left' : 'fade-right'" data-aos-duration="1500"
                class="md:mb-10 me-4 md:mx-20 mt-10 md:mt-0 mx-4 w-[140px] md:w-[200px] h-[140px] md:h-[200px] border shadow-1 object-cover rounded-3xl " />
            </div>
            <div class=" md:w-8/12 mx-4 md:mx-20 my-10">
              <div :data-aos="swap_direction == 'left' ? 'fade-left' : 'fade-right'" data-aos-duration="1000"
                class="text-white font-black text-center md:text-right text-lg md:text-2xl truncate">
                {{ digital_products[index].title }}
                <p class=" text-white rtl font-black text-center md:text-right text-lg md:text-lg truncate ">
                  <span class="text-xs font-light text-gray-100"> فروشگاه: </span> {{ digital_products[index].shop.name }} 
                </p>
              </div>
              <div :data-aos="swap_direction == 'left' ? 'fade-left' : 'fade-right'" data-aos-duration="1100"
                class="flex items-center justify-center md:justify-end pt-2">
                <StarIcon v-for="rating in [0, 1, 2, 3, 4]" :key="rating"
                  :class="[digital_products[index].rate / 20 > rating ? 'text-yellow-500' : 'text-gray-100', 'h-3 w-3 flex-shrink-0']"
                  aria-hidden="true" />
              </div>
              <div :data-aos="swap_direction == 'left' ? 'fade-left' : 'fade-right'" data-aos-duration="1200"
                class="text-gray-200 text-center md:text-right mt-5 h-[50px] overflow-hidden pb-4"
                v-html="digital_products[index].plain_description" style="color: white !important;"></div>
              <div class="mt-5">
                <div :data-aos="swap_direction == 'left' ? 'fade-left' : 'fade-right'" data-aos-duration="1300"
                  :class="digital_products[index].discount != 0 ? 'line-through ' : ''"
                  class="lg:pe-4 text-xs text-red-500 font-semibold text-center md:text-right">
                  {{ digital_products[index].discount != 0 ? price(parseInt(digital_products[index].price)) : '&nbsp; ' }}
                </div>
                <div :data-aos="swap_direction == 'left' ? 'fade-left' : 'fade-right'" data-aos-duration="1300"
                  class="lg:pe-4 pb-4 text-center md:text-right">
                  <div class="flex flex-row justify-end">
                    <span class="text-xs text-gray-400 py-1 px-1">تومان</span>
                    {{ parseInt(digital_products[index].discount) != 0 ?
                      price(parseInt(digital_products[index].price * (100 - digital_products[index].discount) / 100)) :
                      price(parseInt(digital_products[index].price)) }}
                  </div>
                </div>
              </div>
            </div>
          </nuxt-link>
          <div class="flex justify-center -mt-8 mb-4 me-4">
            <button @click="prevItem"
              class="text-black text-sm cursor-pointer me-2 h-10 w-10 flex justify-center items-center bg-white/60  rounded-2xl ">
              <ChevronLeftIcon class="w-8 h-8" />
            </button>
            <button @click="nextItem"
              class="text-black text-sm cursor-pointer ms-2 h-10 w-10 flex justify-center items-center bg-white/60  rounded-2xl ">
              <ChevronRightIcon class="w-8 h-8" />
            </button>
          </div>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
import { apiStore } from '~/store/api';
import axios from 'axios'
import DigitalProduct from "@/components/shared/DigitalProduct.vue"
import { CloudArrowDownIcon, ChevronLeftIcon, ChevronRightIcon } from '@heroicons/vue/20/solid'
import PinDigitalProduct from "@/components/shared/PinDigitalProduct.vue"
import { StarIcon } from '@heroicons/vue/20/solid'

export default {
  components: { DigitalProduct, CloudArrowDownIcon, PinDigitalProduct, StarIcon, ChevronLeftIcon, ChevronRightIcon },
  data: () => ({
    swap_direction: 'left',
    digital_products: [],
    loading: true,
    index: 0,
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },

    breakpoints: {
      200: {
        itemsToShow: 1.5,
        snapAlign: 'center',
      },
      700: {
        itemsToShow: 2.5,
        snapAlign: 'center',
      },
      1150: {
        itemsToShow: 4.5,
        snapAlign: 'center',
      },
      1340: {
        itemsToShow: 5.5,
        snapAlign: 'center',
      },
      1490: {
        itemsToShow: 6,
        snapAlign: 'center',
      },
    },
  }),
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
    getData() {
      this.loading = true
      axios.get(`${apiStore().address}/api/product/best-digital-product-list-main-page/`, {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
        },
      }).then((response) => {
        this.digital_products = response.data
        this.loading = false
        setInterval(() => {
          this.swap_direction = 'left'
          this.nextItem();
        }, 10000);
      })
    },
    nextItem() {
      this.swap_direction = 'left'
      if (this.digital_products.length > this.index + 1) {
        this.index += 1;
      } else if (this.digital_products.length == this.index + 1) {
        this.index = 0;
      }
    },
    prevItem() {
      this.swap_direction = 'right'
      if (this.index > 0) {
        this.index -= 1;
      } else {
        this.index = this.digital_products.length - 1;
      }
    }
  },
  mounted() {
    this.getData()
  },
}
</script>

<style scoped>
.bg-blue-circle-33 {
  background: rgb(0, 0, 0);
  background: linear-gradient(90deg, rgba(0, 0, 0, 1) 0%, rgba(76, 9, 121, 1) 33%, rgba(76, 9, 121, 1) 64%, rgba(0, 0, 0, 1) 100%);
}

.inner-shadow-custom {
  box-shadow: inset 100px 0px 100px -30px rgba(0, 0, 0, 0.787), inset -100px 0px 100px -30px rgba(0, 0, 0, 0.787);
}

.bg-blue-circle-best-product {
  background-image: radial-gradient(ellipse 100% 90% at 50% -30%, #5e09d591 20.9%, #00000000 90%);
}

.slide-up-enter-active,
.slide-up-leave-active {
  transition: all 0.25s ease-out;
}

.slide-up-enter-from {
  opacity: 0;
  transform: translateY(30px);
}

.slide-up-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>