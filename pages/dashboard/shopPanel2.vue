
<template>
    <div  class="w-full h-56 bg-indigo-600 flex py-10 flex-col justify-center items-center space-y-4">
        <img class="h-24 w-24 rounded-full" :src="user.imageUrl" alt="" />
        <div class="flex items-center space-x-reverse space-x-2">
            <h1 class="text-white">نام فروشگاه</h1>
            <!-- Using the ExclamationCircleIcon component -->
            <ExclamationCircleIcon class="h-5 w-5 text-white"/>
        </div>
      
    </div>
    <div class="mt-[-40px]">
         
      <svg id="Layer_2" class="w-full" fill="white" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 695.06 35.8">
       
        <g id="Layer_2-2" data-name="Layer 2">
          <g id="Layer_1-2" data-name="Layer 1-2">
            <path class="cls-1" d="M695.06,0V35.8H0V0S194.27,12.75,356.77,12.75,695.06,0,695.06,0Z"/>
          </g>
        </g>
      </svg>
    </div>


  <div class="min-h-full">
    <main class="">
      <div class="mx-auto max-w-full  lg:max-w-full ">
        <h1 class="sr-only">Page title</h1>
        <section aria-labelledby="section-1-title">
          <h2 class="sr-only" id="section-1-title">Section title</h2>
          <div class="overflow-hidden rounded-lg bg-white shadow">
            <div class="">
              <!-- Your content -->

              <PinProductCarousel  />
<div class=" shadow-xl py-2 mx-[30rem]"></div>
              <PinDigitalProductCarousel  />
<div class=" shadow-xl py-2 mx-[30rem]"></div>
              <MainBlog title="مقالات" />
<div class=" shadow-xl py-2 mx-[30rem]"></div>
              <ProductCarousel  title="آیفون ها"/>
<div class=" shadow-xl py-2 mx-[30rem]"></div>
              <DigitalProductCarousel  />
              <div class=" shadow-xl py-3 mx-[30rem]"></div>
              <ProductCarousel  title="محصولات "/>
              
              
            </div>
          </div>
        </section>
        <!-- Main 3 column grid -->
      </div>
    </main>
  </div>
</template>
  
<script>
import { PaperClipIcon } from '@heroicons/vue/20/solid'
import {
  Menu,
  MenuButton,
  MenuItem,
  MenuItems,
  Popover,
  PopoverButton,
  PopoverOverlay,
  PopoverPanel,
  TransitionChild,
  TransitionRoot,
} from '@headlessui/vue'
import { Bars3Icon, BellIcon, XMarkIcon, ExclamationCircleIcon } from '@heroicons/vue/24/outline'
import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
import Product from "@/components/shared/Product.vue"
import PinProductCarousel from "@/components/section/PinProductCarousel.vue"
import PinDigitalProductCarousel from "@/components/section/PinDigitalProductCarousel.vue"
import DigitalProductCarousel from "@/components/section/DigitalProductCarousel.vue"
import ProductCarousel from "@/components/section/ProductCarousel.vue"
import MainBlog from "@/components/section/MainBlog.vue"
import Blog from "@/components/shared/Blog.vue"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { ArrowRightIcon } from '@heroicons/vue/24/solid'

export default {
  components: {
    Product,
    Blog,
    PinProductCarousel,
    PinDigitalProductCarousel,
    DigitalProductCarousel,
    ProductCarousel,
    MainBlog,
    PaperClipIcon,
    Menu,
    MenuButton,
    MenuItem,
    MenuItems,
    Popover,
    PopoverButton,
    PopoverOverlay,
    PopoverPanel,
    TransitionChild,
    TransitionRoot,
    Bars3Icon,
    BellIcon,
    XMarkIcon,
    MagnifyingGlassIcon,
    ExclamationCircleIcon,
    ArrowRightIcon
  },
  setup() {
    const swiper = ref(null);
    const onSwiper = (swiperInstance) => {
      swiper.value = swiperInstance
    };
    return {
      onSwiper,
      swiper,
      modules: [Autoplay, Pagination, Navigation],
    };
  },
  data: () => ({
    selectedTab: 'products',
    user: {
      name: 'Tom Cook',
      email: 'tom@example.com',
      imageUrl: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
    },
    navigation: [
      { name: 'Home', href: '#', current: true },
      { name: 'Profile', href: '#', current: false },
      { name: 'Resources', href: '#', current: false },
      { name: 'Company Directory', href: '#', current: false },
      { name: 'Openings', href: '#', current: false },
    ],
    userNavigation: [
      { name: 'Your Profile', href: '#' },
      { name: 'Settings', href: '#' },
      { name: 'Sign out', href: '#' },
    ],
    data: [
      {
        image: '/images/2.jpeg',
        title: 'samsung',
        price: 1000000,
        percent: 10,
        colors: [
          'red',
          'black',
          'yellow',
        ],
        description: 'این یک متن ساختگی برای توضیحات محصول است'
      },
      {
        image: '/images/3.jpg',
        title: 'ایفون ۱۴',
        price: 1000000,
        percent: 10,
        colors: [
          'red',
          'blue',
          'orange',
        ],
        description: 'این یک متن ساختگی برای توضیحات محصول است'

      },
      {
        image: '/images/6.jpg',
        title: 'ایرپاد',
        price: 1000000,
        percent: 0,
        colors: [
          'cyan',
          'purple',
          'white',
        ],
        description: 'این یک متن ساختگی برای توضیحات محصول است'


      },
      {
        image: '/images/2.jpeg',
        title: 'samsung',
        price: 1000000,
        percent: 10,
        colors: [
          'red',
          'black',
          'yellow',
        ],
        description: 'این یک متن ساختگی برای توضیحات محصول است'
      },
      {
        image: '/images/3.jpg',
        title: 'ایفون ۱۴',
        price: 1000000,
        percent: 10,
        colors: [
          'red',
          'blue',
          'orange',
        ],
        description: 'این یک متن ساختگی برای توضیحات محصول است'

      },
      {
        image: '/images/6.jpg',
        title: 'ایرپاد',
        price: 1000000,
        percent: 0,
        colors: [
          'cyan',
          'purple',
          'white',
        ],
        description: 'این یک متن ساختگی برای توضیحات محصول است'


      },
      {
        image: '/images/4.jpg',
        title: 'مک بوک',
        price: 1000000,
        percent: 10,
        colors: [
          'red',
          'black',
          'yellow',
        ],
        description: 'این یک متن ساختگی برای توضیحات محصول است'

      },
      {
        image: '/images/5.jpg',
        title: 'هدفون',
        price: 1000000,
        percent: 10,
        colors: [
          'red',
          'yellow',
          'cyan',
          'purple',
        ],
        description: 'این یک متن ساختگی برای توضیحات محصول است'

      },
    ],
    posts: [
      {
        id: 1,
        title: 'تکنولوژی‌های نوین در گوشی‌های هوشمند: چهارچوب آینده',
        href: '#',
        description:
          'این مقاله به بررسی تکنولوژی‌های نوینی می‌پردازد که در آینده گوشی‌های هوشمند ممکن است مورد استفاده قرار گیرند. از تازه‌ترین پیشرفت‌های صفحه نمایش و دوربین‌ها تا چگونگی اتصال گوشی به اینترنت اشیاء، این متن شما را با آینده گوشی‌های هوشمند آشنا می‌کند',
        imageUrl:
          '/images/blog/1.jpg',
        date: '1402/06/04',
        datetime: '2020-03-16',
        category: { title: 'تکنولوژی', href: '#' },
        author: {
          name: 'علی صالحی',
          role: 'نویسنده',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 1,
        title: 'تاریخچه و تکامل گوشی‌های هوشمند: از نوکیا تا آیفون ',
        href: '#',
        description:
          'این متن تاریخچه تکامل گوشی‌های هوشمند از دهه ۱۹۹۰ تا به امروز را بررسی می‌کند. از ابتدای این صنعت با نوکیا و سایر شرکت‌های پیشرو تا محبوبیت بی‌پایان آیفون و سامسونگ، شما با تغییرات اساسی در دنیای گوشی‌های هوشمند آشنا خواهید شد',
        imageUrl:
          '/images/blog/2.jpg',

        date: '1402/05/23',
        datetime: '2020-03-16',
        category: { title: 'تکنولوژی', href: '#' },
        author: {
          name: 'علی شمس',
          role: 'نویسنده',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      {
        id: 1,
        title: 'نکات مهم در انتخاب گوشی هوشمند: راهنمایی برای خرید کامل',
        href: '#',
        description:
          'خرید یک گوشی هوشمند ممکن است تصمیم مهمی باشد، و این مقاله به شما راهنمایی‌هایی در انتخاب گوشی مناسب بر اساس نیازها و بودجه‌تان ارائه می‌دهد. از مشخص کردن نیازهای خود تا بررسی مشخصات فنی و تفاوت‌های میانبرندی، این متن به شما کمک می‌کند تا بهترین تصمیم را بگیرید',
        imageUrl:
          '/images/blog/3.jpg',

        date: '1402/05/05',
        datetime: '2020-03-16',
        category: { title: 'تکنولوژی', href: '#' },
        author: {
          name: 'سینا آزادفر',
          role: 'نویسنده',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      }, {
        id: 1,
        title: 'نکات مهم در انتخاب گوشی هوشمند: راهنمایی برای خرید کامل',
        href: '#',
        description:
          'خرید یک گوشی هوشمند ممکن است تصمیم مهمی باشد، و این مقاله به شما راهنمایی‌هایی در انتخاب گوشی مناسب بر اساس نیازها و بودجه‌تان ارائه می‌دهد. از مشخص کردن نیازهای خود تا بررسی مشخصات فنی و تفاوت‌های میانبرندی، این متن به شما کمک می‌کند تا بهترین تصمیم را بگیرید',
        imageUrl:
          '/images/blog/3.jpg',

        date: '1402/05/05',
        datetime: '2020-03-16',
        category: { title: 'تکنولوژی', href: '#' },
        author: {
          name: 'سینا آزادفر',
          role: 'نویسنده',
          href: '#',
          imageUrl:
            'https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
      },
      // More posts...
    ],
    // carousel settings
    settings: {
      itemsToShow: 1,
      snapAlign: 'center',
    },
    // breakpoints are mobile first
    // any settings not specified will fallback to the carousel settings
    breakpoints: {
      // 700px and up
      700: {
        itemsToShow: 3.5,
        snapAlign: 'center',
      },
      // 1024 and up
      1024: {
        itemsToShow: 5,
        snapAlign: 'start',
      },
    },
  }),
  computed: {
    filteredData() {
      // This computed property filters the data based on the selected country.
      // Adjust the logic according to your needs.
      if (this.selectedCountry === 'Canada') {
        return this.data.filter((item) => item.country === 'Canada');
      } else {
        return this.data; // Return all data if no specific filter is applied
      }
    },
  },
}
</script>
  
<style scoped>
.carousel__slide {
  padding: 5px;
}

.carousel__viewport {
  perspective: 2000px;
}

.carousel__track {
  transform-style: preserve-3d;
}

.carousel__slide--sliding {
  transition: 0.5s;
}

.carousel__slide {
  opacity: 0.5;
  filter: blur(3px);

  transform: rotateY(-10deg) scale(0.99);
}

.carousel__slide--prev {
  opacity: 0.8;
  filter: blur(1px);

  transform: rotateY(-10deg) scale(0.99);
}

.carousel__slide--next {
  opacity: 0.8;
  filter: blur(1px);



  transform: rotateY(10deg) scale(0.99);
}

.carousel__slide--active {
  opacity: 1;
  filter: blur(0px);

  transform: rotateY(0) scale(1.15);
}

.swiper-slide {
  width: auto;
}
</style>