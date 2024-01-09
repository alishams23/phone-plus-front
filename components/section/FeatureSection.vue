<template>
    <div class="bg-white py-24 sm:pb-20 sm:pt-10  rtl">
        <div class="mx-auto max-w-7xl px-6 lg:px-8">

            <div class="mx-auto max-w-2xl   lg:max-w-none">
                <dl class="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">

                    <div v-for="feature in features" :key="feature.name" class="flex ">
                       <div class="pe-7 ">
                        <div class="mb-6 flex h-16 w-16 items-center justify-center rounded-xl bg-indigo-100">
                            <component :is="feature.icon" class="h-8 w-8 text-indigo-600" aria-hidden="true" />

                        </div>
                       </div>
                        <div>
                            <dt class="text-base font-semibold leading-7 text-gray-900">

                                {{ feature.name }}
                            </dt>
                            <dd class="mt-1 flex flex-auto flex-col text-base text-xs text-gray-600">

                                <p class="flex-auto">{{ feature.description }}</p>
                                
                            </dd>
                        </div>
                    </div>
                    
                </dl>
            </div>
        </div>
        
    </div>
</template>
  
<script setup>
import { InboxIcon, TrashIcon, UsersIcon } from '@heroicons/vue/24/solid'

const features = [
    {
        name: 'ضمانت بازگشت کالا',
        description:
            ' با اطمینان از کیفیت محصولاتمان، به شما تضمین می‌دهیم که اگر از خرید خود راضی نبودید، می‌توانید کالای خریداری شده را به ما بازگردانید و پول خود را دریافت کنید',
        href: '#',
        icon: InboxIcon,
    },
    {
        name: 'خدمات ارسال سریع',
        description:
            'ما ارسال سریع را به عنوان یک اولویت اساسی معرفی می‌کنیم. سفارشات شما با سرعت به مقصد می‌رسند تا تجربه خرید را برای شما بهبود بخشیم.',
        href: '#',
        icon: UsersIcon,
    },
    {
        name: 'ضمانت کیفیت محصولات',
        description:
            ' محصولات ما با دقت و کیفیت بالا تولید می‌شوند. ما اطمینان داریم که مشتریان ما از کیفیت مطلق محصولاتمان لذت خواهند برد',
        href: '#',
        icon: TrashIcon,
    },
]
</script>