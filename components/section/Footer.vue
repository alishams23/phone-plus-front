<template>
  <footer
    class="relative isolate overflow-hidden bg-gradient-to-b from-gray-950 via-gray-900 to-black text-gray-300 pb-24"
    aria-labelledby="footer-heading"
    role="contentinfo"
    dir="rtl"
  >
    <h2 id="footer-heading" class="sr-only">فوتر</h2>

    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pt-14 sm:pt-20 lg:pt-28">
      <div class="grid grid-cols-1 gap-y-12 gap-x-10 md:grid-cols-2 lg:grid-cols-4">
        <!-- Brand / About -->
        <div class="lg:col-span-2">
          <NuxtLink to="/" class="inline-flex items-center gap-3 group">
            <!-- <svg class="h-9 w-9 text-white" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
              <path d="M12 2l9 5v10l-9 5-9-5V7l9-5zm0 2.3L5 7.3v9.4l7 4 7-4V7.3l-7-3z"/>
            </svg> -->
            <span class="text-white text-lg font-semibold group-hover:opacity-90">فون پلاس</span>
          </NuxtLink>

          <p class="mt-4 text-sm leading-7">
            فون پلاس ـ بستری برای خرید و فروش آنلاین محصولات فیزیکی و دیجیتال. فروشگاه خود را بسازید
            و محصولات‌تان را به هزاران مشتری عرضه کنید.
          </p>

          <!-- Contact (row layout) -->
          <div class="mt-6 flex flex-wrap items-center gap-x-6 gap-y-4 text-sm">
            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2a7 7 0 00-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 00-7-7zm0 9.5A2.5 2.5 0 119.5 9 2.5 2.5 0 0112 11.5z"/></svg>
              <span>قزوین، برج خلیج فارس، طبقه ۳</span>
            </div>

            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M6.62 10.79a15.05 15.05 0 006.59 6.59l2.2-2.2a1 1 0 011.02-.24 11.36 11.36 0 003.56.57 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h2.5a1 1 0 011 1 11.36 11.36 0 00.57 3.56 1 1 0 01-.24 1.02l-2.2 2.21z"/></svg>
              <a href="tel:02833578138" class="hover:text-white">028-33578138</a>
            </div>

            <div class="flex items-center gap-2">
              <svg class="w-5 h-5 text-gray-400" fill="currentColor" viewBox="0 0 24 24"><path d="M2 6a2 2 0 012-2h16a2 2 0 012 2v.35l-10 6.25L2 6.35V6zm0 2.74V18a2 2 0 002 2h16a2 2 0 002-2V8.74l-9.4 5.87a2 2 0 01-2.2 0L2 8.74z"/></svg>
              <a href="mailto:customer@phoneplus.ir" class="hover:text-white">customer@phoneplus.ir</a>
            </div>

            <!-- Social (inline row) -->
            <ul class="flex items-center gap-3 mt-1" aria-label="شبکه‌های اجتماعی">
              <li v-for="s in socials" :key="s.label">
                <a :href="s.href" target="_blank" rel="noopener noreferrer" class="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 hover:bg-white/10 transition">
                  <component :is="s.icon" class="h-4.5 w-4.5 text-white" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <!-- Quick links (single column) -->
        <div>
          <h3 class="text-sm font-semibold text-white">دسترسی سریع</h3>
          <ul class="mt-4 flex flex-col gap-2 text-sm">
            <li v-for="item in quickLinks" :key="item.name">
              <NuxtLink :to="item.href" class="hover:text-white">{{ item.name }}</NuxtLink>
            </li>
          </ul>
        </div>

        <!-- Trust badges -->
        <div class="flex flex-col items-start justify-end gap-4 lg:items-end">
          <a
            referrerpolicy="origin"
            target="_blank"
            rel="noopener noreferrer"
            href="https://trustseal.enamad.ir/?id=261983&Code=VwgWQmFg1VHBWyU0iuiF"
            aria-label="نماد اعتماد الکترونیکی"
            class="rounded-2xl bg-white/5 p-2 ring-1 ring-white/10 transition hover:bg-white/10 hover:ring-white/20"
          >
            <img
              referrerpolicy="origin"
              src="https://trustseal.enamad.ir/logo.aspx?id=261983&Code=VwgWQmFg1VHBWyU0iuiF"
              alt="نماد اعتماد الکترونیکی"
              class="h-14 w-auto"
              loading="lazy"
              decoding="async"
            />
          </a>

          <button
            type="button"
            @click="openSamandehi"
            class="rounded-2xl bg-white/5 p-2 ring-1 ring-white/10 transition hover:bg-white/10 hover:ring-white/20 outline-none"
            aria-label="نشان ساماندهی"
          >
            <img
              referrerpolicy="origin"
              class="h-14 w-auto"
              alt="نشان ساماندهی"
              loading="lazy"
              decoding="async"
              src="https://logo.samandehi.ir/logo.aspx?id=288821&p=odrfaqgwaqgwaqgwodrfnbpd"
            />
          </button>
        </div>
      </div>

      <!-- Bottom -->
      <div class="mt-10 border-t border-white/10 pt-5 sm:mt-14 lg:mt-16">
        <p class="text-xs leading-5 text-gray-400 text-center sm:text-right">&copy; فون پلاس {{ persianYear }}</p>
      </div>
    </div>
  </footer>
</template>

<script setup lang="ts">
import { useRoute } from 'vue-router'
import { computed, h } from 'vue'

const route = useRoute()
const currentRouteCheck = (page_name: string) => {
  if (page_name !== '') return route.name?.toString().split('-').includes(page_name)
  return route.name === 'index'
}

const persianYear = computed(() =>
  new Intl.DateTimeFormat('fa-IR-u-ca-persian', { year: 'numeric' }).format(new Date())
)

const openSamandehi = () => {
  window.open(
    'https://logo.samandehi.ir/Verify.aspx?id=288821&p=uiwkmcsimcsimcsiuiwkrfth',
    'Popup',
    'width=450,height=630'
  )
}

const quickLinks = [
  { name: 'صفحه اصلی', href: '/' },
  { name: 'محصولات دیجیتال', href: '/p/search/?tab=1' },
  { name: 'محصولات فیزیکی', href: '/p/search/?tab=0' },
  { name: 'فروشنده شوید', href: '/p/start_selling' },
]

const TelegramIcon = (props: any) => h('svg', { ...props, viewBox: '0 0 24 24', fill: 'currentColor' }, [h('path', { d: 'M9.036 14.314l-.376 5.296c.54 0 .774-.231 1.053-.508l2.53-2.428 5.244 3.866c.962.531 1.65.252 1.91-.89l3.46-16.334h.001c.33-1.554-.56-2.162-1.645-1.785L1.43 9.33C-.18 9.92-.171 10.822 1.14 11.22l5.77 1.8L18.98 6.28c.88-.536 1.69-.24 1.026.342L9.036 14.314z' })])
const WhatsappIcon = (props: any) =>
  h(
    'svg',
    { ...props, viewBox: '0 0 24 24', fill: 'currentColor', 'aria-hidden': 'true' },
    [
      h('path', {
        d: 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.472-.149-.67.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.52.149-.173.198-.297.297-.495.099-.198.05-.372-.025-.521-.075-.149-.669-1.611-.916-2.206-.242-.58-.487-.501-.67-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.262.489 1.694.626.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.003a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.116 1.03 6.988 2.902a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.886 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L0 24l6.305-1.654a11.87 11.87 0 005.735 1.463h.005c6.553 0 11.889-5.335 11.892-11.89a11.82 11.82 0 00-3.497-8.413Z'
      })
    ]
  )
const InstagramIcon = (props: any) => h('svg', { ...props, viewBox: '0 0 24 24', fill: 'currentColor' }, [h('path', { d: 'M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zm4.25 4.78a5.22 5.22 0 110 10.44 5.22 5.22 0 010-10.44zm6.22-.98a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4zM12 9.22a3.28 3.28 0 100 6.56 3.28 3.28 0 000-6.56z' })])

const socials = [
  { label: 'تلگرام فون پلاس', href: 'https://t.me/thephoneplus', icon: TelegramIcon },
  { label: 'واتس‌اپ فون پلاس', href: 'https://wa.me/+989365068548', icon: WhatsappIcon },
  { label: 'اینستاگرام فون پلاس', href: 'https://www.instagram.com/thephoneplus', icon: InstagramIcon },
]
</script>

<style scoped>
a:focus-visible, button:focus-visible {
  outline: none;
  box-shadow: 0 0 0 2px rgb(255 255 255 / 0.4);
}
a[rel~="noopener"] { -webkit-tap-highlight-color: transparent; }
</style>
