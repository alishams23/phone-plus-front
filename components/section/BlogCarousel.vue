<template>
  <div v-if="loading">
    <!-- <div  class="pb-16 flex items-center justify-center" >
      <div role="status">
          <svg aria-hidden="false" class="w-8 h-8 text-gray-100 animate-spin fill-indigo-600" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor"/>
              <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill"/>
          </svg>
          <span class="sr-only">Loading...</span>
      </div>
    </div> -->
  </div>
  <div v-else>
    <div class="flex pt-2 justify-between items-center">
      <div  class="rtl mx-10 ">
        <a href="#" class=" rtl  ">
          بیشتر
          <span aria-hidden="true" class="px-3 pt-3"> &larr;</span>
        </a>
      </div>
      <div class=" font-bold text-xl text-right px-10 pt-4">
        مقاله ها
      </div>
    </div>
    
        <div class="   isolate overflow-hidden relative mb-10">
          <Carousel  :itemsToShow="1.4" :wrapAround="true" :transition="500" class="pt-5 pb-6">
              <Slide v-for="item in posts" :key="item">
                  <Blog class="my-10 pb-[15px] " :data="item" />
              </Slide>
              <template #addons>
                  <Navigation />
              </template>
          </Carousel>
      </div>
  </div>
</template>

<script>
    import { PaperClipIcon } from '@heroicons/vue/20/solid'

  
    // Import Swiper styles
    import 'swiper/css';
    import 'swiper/css/pagination';
    import 'swiper/css/navigation';
    // import required modules
    import { Autoplay, Pagination, Navigation } from 'swiper/modules';
    import PinProduct from "@/components/shared/PinProduct.vue"
    import Blog from "@/components/shared/Blog.vue"


  export default {
    components: { 
        PinProduct,
        Blog,
    },
    setup() { 
        const swiper = ref(null);
        const onSwiper = (swiperInstance) => {
            swiper.value =  swiperInstance
        };
        return {
            onSwiper,
            swiper,
        modules: [Autoplay, Pagination, Navigation],
        };
    },
    data: () => ({
      selectedTab: 'products',
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
        title:'تکنولوژی‌های نوین در گوشی‌های هوشمند: چهارچوب آینده',
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
      },{
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
  
