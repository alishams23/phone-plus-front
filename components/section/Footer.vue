<template>
  <footer class="bg-gray-900" aria-labelledby="footer-heading">
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
      <div class="xl:grid xl:grid-cols-3 xl:gap-8">
        <div class="space-y-8">
          <p class="text-sm leading-6 text-gray-300 rtl">
            فون پلاس - بستری برای خرید و فروش آنلاین محصولات فیزیکی و دیجیتال. فروشگاه خود را ایجاد کنید و به راحتی محصولات خود را به هزاران مشتری عرضه کنید.
          </p>
          <div class="flex space-x-6">
            <a
              v-for="item in navigation.social"
              :key="item.name"
              :href="item.href"
              class="text-gray-500 hover:text-gray-400"
            >
              <span class="sr-only">{{ item.name }}</span>
            </a>
          </div>
        </div>

        <div class="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0 flex rtl">
          <div>
            <ul role="list" class="mt-6 space-y-4">
              <li v-for="item in navigation.support" :key="item.name">
                <a :href="item.href" class="text-sm leading-6 text-gray-300 hover:text-white">{{ item.name }}</a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <!-- Trust Badges Section -->
      <div class="mt-16 flex justify-start items-center space-x-10">
        <!-- eNamad Badge -->
        <a
          referrerpolicy="origin"
          target="_blank"
          rel="noopener noreferrer"
          href="https://trustseal.enamad.ir/?id=261983&amp;Code=VwgWQmFg1VHBWyU0iuiF"
        >
          <img
            referrerpolicy="origin"
            src="https://Trustseal.eNamad.ir/logo.aspx?id=261983&amp;Code=VwgWQmFg1VHBWyU0iuiF"
            alt="eNamad Logo"
            class="cursor-pointer w-28"
            id="VwgWQmFg1VHBWyU0iuiF"
          />
        </a>

        <!-- Samandehi Badge -->
        <img
          referrerpolicy="origin"
          id="nbqeoeukoeukoeuknbqejxlz"
          class="cursor-pointer  w-28"
          @click="openSamandehi"
          alt="logo-samandehi"
          src="https://logo.samandehi.ir/logo.aspx?id=288821&p=odrfaqgwaqgwaqgwodrfnbpd"
        />
      </div>

      <div class="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24 mb-12">
        <p class="text-xs leading-5 text-gray-400">&copy; فون پلاس ۱۴۰۳</p>
      </div>
    </div>
  </footer>
</template>

<script setup>
import { useHead } from 'nuxt/app';
import { defineComponent, h } from 'vue';

const navigation = {
  support: [
    { name: 'فروشنده شوید', href: '/p/start_selling' },
    { name: 'محصولات دیجیتال', href: '/p/search/?tab=1' },
    { name: ' محصولات فیزیکی', href: '/p/search/?tab=0' },
  ],
  social: [
    {
      name: 'Instagram',
      href: '#',
      icon: defineComponent({
        render: () =>
          h('svg', { fill: 'currentColor', viewBox: '0 0 24 24' }, [
            h('path', {
              'fill-rule': 'evenodd',
              d: 'M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058z',
              'clip-rule': 'evenodd',
            }),
          ]),
      }),
    },
  ],
};

// Samandehi Popup Function
const openSamandehi = () => {
  window.open("https://logo.samandehi.ir/Verify.aspx?id=288821&p=uiwkmcsimcsimcsiuiwkrfth", "Popup", "width=450,height=630");
};

// Load ZarinPal Trust Script
useHead({
  script: [{ src: "https://www.zarinpal.com/webservice/TrustCode", type: "text/javascript", async: true }]
});
</script>
