<template>
  <!-- <Blog /> -->
  <div class=" rounded-b-[50px]">
    <HeaderHero />
  </div>

  <div class="bg-white">
  

    <div class="mt-5 ">
      <PopularProduct />
    </div>

    <div>
      <CategoriesProduct class="mx-2" />
    </div>
    
    <div>
      <Shop />
    </div>
    
    <div class="">
      <DiscountProduct />
    </div>

    <div>
      <Blog />
    </div>

    <div class=" mt-5 pb-10 ">
      <PopularDigitalProduct />
    </div>
    
    <div class=" mt-5 pb-10 ">
      <DiscountDigitalProduct />

      <CategoryDigitalProduct />
    </div>

    <div>
      <CategoriesDigitalProduct class="mx-2" />
    </div>
  </div>

</template>

<script>
import axios from "axios";
import { useUserStore } from '~/store/user';
import LoginPopup from "@/components/section/LoginPopup.vue"
import DiscountDigitalProduct from "@/components/section/mainPage/DiscountDigitalProduct.vue"
import PopularDigitalProduct from "@/components/section/mainPage/PopularDigitalProduct.vue"
import PopularProduct from "@/components/section/mainPage/PopularProduct.vue"
import DiscountProduct from "@/components/section/mainPage/DiscountProduct.vue"
import HeaderHero from "@/components/section/mainPage/HeaderHero.vue"
import Banner from "@/components/section/mainPage/Banner.vue"
import PromoSection from "@/components/section/PromoSection.vue"
import Blog from "@/components/section/mainPage/Blog.vue"
import Shop from "~/components/section/mainPage/Shop.vue"
import CategoriesProduct from "@/components/section/mainPage/CategoriesProduct.vue"
import CategoriesDigitalProduct from "@/components/section/mainPage/CategoriesDigitalProduct.vue"
import { Dialog, DialogPanel, DialogTitle, TransitionChild, TransitionRoot } from '@headlessui/vue'
import { NavigationStore } from '~/store/navigation';
import { apiStore } from '~/store/api';
import  CategoryDigitalProduct  from "@/components/section/mainPage/CategoryDigitalProduct.vue";

export default {
  components: {
    Dialog,
    DialogPanel,
    DialogTitle,
    TransitionRoot,
    TransitionChild,
    CategoriesDigitalProduct,
    CategoriesProduct,
    LoginPopup,
    Shop,
    DiscountDigitalProduct,
    PopularProduct,
    PopularDigitalProduct,
    DiscountProduct,
    Banner,
    PromoSection,
    Blog,
    HeaderHero,
    CategoryDigitalProduct
  },
  head() {
    return {
      // title: "ثبت نام"
    };
  },
  layout: "landing",
  data() {
    return {
      shop_username : null
    };
  },

  methods: {
    openInNewTab() {
        window.open('https://panel.phoneplus.ir/', '_blank');
    },
    async getShopUsername() {
      this.loading = true
      await axios.get(`${apiStore().address}/api/account/admin-shop-username/`, {
        headers: {
          "Content-type": "application/json",
          Accept: "application/json",
          Authorization: `Token ${useUserStore().userToken}`,
        },
      }).then((response) => {
        console.log(response.data.username);
        
        this.shop_username = response.data.username
      })
    },

  },
  async mounted() {
    await this.getShopUsername()
    useUserStore().status=='s'? 
      NavigationStore().setButtons([
        {
          'name': 'محصولات فیزیکی محبوب',
          'func': null,
          'href': `/p/search/?sort_product=-rate`,
        },
        {
          'name': 'محصولات دیجیتال محبوب',
          'func': null,
          'href': `/p/search/?sort_digital_product=-rate`,
        },
        {
          'name': 'مدیریت فروشگاه',
          'func': this.openInNewTab,
          'href': null,
        },
        {
          'name': 'فروشگاه',
          'func': null,
          'href': `/${this.shop_username}`,
        }])
        :
        NavigationStore().setButtons([
        {
          'name': 'محصولات فیزیکی محبوب',
          'func': null,
          'href': `/p/search/?sort_product=-rate`,
        },
        {
          'name': 'محصولات دیجیتال محبوب',
          'func': null,
          'href': `/p/search/?sort_digital_product=-rate`,
        },
    ])
  }
};
</script>