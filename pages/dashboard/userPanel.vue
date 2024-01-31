
<template>
    <div class="min-h-full">
      <Popover as="header" class="bg-indigo-600 pb-24" v-slot="{ open }">
        <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <div class="relative flex items-center justify-center py-5 lg:justify-between">
            <!-- Logo -->
            <!-- <div class="absolute left-0 flex-shrink-0 lg:static">
              <a href="#">
                <span class="sr-only">Your Company</span>
                <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=300" alt="Your Company" />
              </a>
            </div> -->
  
            <!-- Right section on desktop -->
            <div class="hidden lg:ml-4 lg:flex lg:items-center lg:pr-0.5">
              <!-- <button type="button" class="flex-shrink-0 rounded-full p-1 text-indigo-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                <span class="sr-only">View notifications</span>
                <BellIcon class="h-6 w-6" aria-hidden="true" />
              </button> -->
  
              <!-- Profile dropdown -->
              <Menu as="div" class="relative ml-4 flex-shrink-0">
                <div>
                  <MenuButton class="flex rounded-full bg-white text-sm ring-2 ring-white ring-opacity-20 focus:outline-none focus:ring-opacity-100">
                    <span class="sr-only">Open user menu</span>
                    <img class="h-50 w-50 rounded-full" :src="user.imageUrl" alt="" />
                  </MenuButton>
                </div>
                <transition leave-active-class="transition ease-in duration-75" leave-from-class="transform opacity-100 scale-100" leave-to-class="transform opacity-0 scale-95">
                  <MenuItems class="absolute -right-2 z-10 mt-2 w-48 origin-top-right rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                    <MenuItem v-for="item in userNavigation" :key="item.name" v-slot="{ active }">
                      <a :href="item.href" :class="[active ? 'bg-gray-100' : '', 'block px-4 py-2 text-sm text-gray-700']">{{ item.name }}</a>
                    </MenuItem>
                  </MenuItems>
                </transition>
              </Menu>
            </div>
  
            <!-- Search -->
            <!-- <div class="min-w-0 flex-1 px-12 lg:hidden">
              <div class="mx-auto w-full max-w-xs">
                <label for="desktop-search" class="sr-only">Search</label>
                <div class="relative text-white focus-within:text-gray-600">
                  <div class="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                    <MagnifyingGlassIcon class="h-5 w-5" aria-hidden="true" />
                  </div>
                  <input id="desktop-search" class="block w-full rounded-md border-0 bg-white/20 py-1.5 pl-10 pr-3 text-white placeholder:text-white focus:bg-white focus:text-gray-900 focus:ring-0 focus:placeholder:text-gray-500 sm:text-sm sm:leading-6" placeholder="Search" type="search" name="search" />
                </div>
              </div>
            </div>-->
            <!-- Menu button -->
            <div class="absolute right-0 flex-shrink-0 lg:hidden">
              <!-- Mobile menu button -->
              <PopoverButton class="inline-flex items-center justify-center rounded-md bg-transparent p-2 text-indigo-200 hover:bg-white hover:bg-opacity-10 hover:text-white focus:outline-none focus:ring-2 focus:ring-white">
                <span class="sr-only">Open main menu</span>
                <Bars3Icon v-if="!open" class="block h-6 w-6" aria-hidden="true" />
                <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
              </PopoverButton>
            </div>
          </div>
        </div>
  
        <TransitionRoot as="template" :show="open">
          <div class="lg:hidden">
            <TransitionChild as="template" enter="duration-150 ease-out" enter-from="opacity-0" enter-to="opacity-100" leave="duration-150 ease-in" leave-from="opacity-100" leave-to="opacity-0">
              <PopoverOverlay class="fixed inset-0 z-20 bg-black bg-opacity-25" />
            </TransitionChild>
  
            <TransitionChild as="template" enter="duration-150 ease-out" enter-from="opacity-0 scale-95" enter-to="opacity-100 scale-100" leave="duration-150 ease-in" leave-from="opacity-100 scale-100" leave-to="opacity-0 scale-95">
              <PopoverPanel focus class="absolute inset-x-0 top-0 z-30 mx-auto w-full max-w-3xl origin-top transform p-2 transition">
                <div class="divide-y divide-gray-200 rounded-lg bg-white shadow-lg ring-1 ring-black ring-opacity-5">
                  <div class="pb-2 pt-3">
                    <div class="flex items-center justify-between px-4">
                      <div>
                        <img class="h-8 w-auto" src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600" alt="Your Company" />
                      </div>
                      <div class="-mr-2">
                        <PopoverButton class="inline-flex items-center justify-center rounded-md bg-white p-2 text-gray-400 hover:bg-gray-100 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                          <span class="sr-only">Close menu</span>
                          <XMarkIcon class="h-6 w-6" aria-hidden="true" />
                        </PopoverButton>
                      </div>
                    </div>
                    <div class="mt-3 space-y-1 px-2">
                      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800">Home</a>
                      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800">Profile</a>
                      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800">Resources</a>
                      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800">Company Directory</a>
                      <a href="#" class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800">Openings</a>
                    </div>
                  </div>
                  <div class="pb-2 pt-4">
                    <div class="flex items-center px-5">
                      <div class="flex-shrink-0">
                        <img class="h-10 w-10 rounded-full" :src="user.imageUrl" alt="" />
                      </div>
                      <div class="ml-3 min-w-0 flex-1">
                        <div class="truncate text-base font-medium text-gray-800">{{ user.name }}</div>
                        <div class="truncate text-sm font-medium text-gray-500">{{ user.email }}</div>
                      </div>
                      <button type="button" class="ml-auto flex-shrink-0 rounded-full bg-white p-1 text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2">
                        <span class="sr-only">View notifications</span>
                        <BellIcon class="h-6 w-6" aria-hidden="true" />
                      </button>
                    </div>
                    <div class="mt-3 space-y-1 px-2">
                      <a v-for="item in userNavigation" :key="item.name" :href="item.href" class="block rounded-md px-3 py-2 text-base font-medium text-gray-900 hover:bg-gray-100 hover:text-gray-800">{{ item.name }}</a>
                    </div>
                  </div>
                </div>
              </PopoverPanel>
            </TransitionChild>
          </div>
        </TransitionRoot>
      </Popover>
      <main class="-mt-24 pb-8">
        <div class="mx-auto max-w-3xl px-4 sm:px-6 lg:max-w-7xl lg:px-8">
          <h1 class="sr-only">Page title</h1>
          <!-- Main 3 column grid -->
          <div class="grid grid-cols-1 items-start gap-4 lg:grid-cols-3 lg:gap-8">
            <!-- Left column -->
            <div class="grid grid-cols-1 gap-4 lg:col-span-2">
              <section aria-labelledby="section-1-title">
                <h2 class="sr-only" id="section-1-title">Section title</h2>
                <div class="overflow-hidden rounded-lg bg-white shadow">
                  <div class="p-6">
                    <div class="px-4 sm:px-0">
                      <h3 class="text-base font-semibold leading-7 text-gray-900">Applicant Information</h3>
                      <p class="mt-1 max-w-2xl text-sm leading-6 text-gray-500">Personal details and application.</p>
                    </div>
                    <div class="mt-6 border-t border-gray-100">
                      <dl class="divide-y divide-gray-100">
                        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                          <dt class="text-sm font-medium leading-6 text-gray-900">Full name</dt>
                          <dd class="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            <span class="flex-grow">Margot Foster</span>
                            <span class="ml-4 flex-shrink-0">
                              <button type="button" class="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500">Update</button>
                            </span>
                          </dd>
                        </div>
                        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                          <dt class="text-sm font-medium leading-6 text-gray-900">Application for</dt>
                          <dd class="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            <span class="flex-grow">Backend Developer</span>
                            <span class="ml-4 flex-shrink-0">
                              <button type="button" class="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500">Update</button>
                            </span>
                          </dd>
                        </div>
                        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                          <dt class="text-sm font-medium leading-6 text-gray-900">Email address</dt>
                          <dd class="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            <span class="flex-grow">margotfoster@example.com</span>
                            <span class="ml-4 flex-shrink-0">
                              <button type="button" class="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500">Update</button>
                            </span>
                          </dd>
                        </div>
                        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                          <dt class="text-sm font-medium leading-6 text-gray-900">Salary expectation</dt>
                          <dd class="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            <span class="flex-grow">$120,000</span>
                            <span class="ml-4 flex-shrink-0">
                              <button type="button" class="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500">Update</button>
                            </span>
                          </dd>
                        </div>
                        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                          <dt class="text-sm font-medium leading-6 text-gray-900">About</dt>
                          <dd class="mt-1 flex text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            <span class="flex-grow">Fugiat ipsum ipsum deserunt culpa aute sint do nostrud anim incididunt cillum culpa consequat. Excepteur qui ipsum aliquip consequat sint. Sit id mollit nulla mollit nostrud in ea officia proident. Irure nostrud pariatur mollit ad adipisicing reprehenderit deserunt qui eu.</span>
                            <span class="ml-4 flex-shrink-0">
                              <button type="button" class="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500">Update</button>
                            </span>
                          </dd>
                        </div>
                        <div class="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
                          <dt class="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
                          <dd class="mt-1 text-sm leading-6 text-gray-700 sm:col-span-2 sm:mt-0">
                            <ul role="list" class="divide-y divide-gray-100 rounded-md border border-gray-200">
                              <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                <div class="flex w-0 flex-1 items-center">
                                  <PaperClipIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                  <div class="ml-4 flex min-w-0 flex-1 gap-2">
                                    <span class="truncate font-medium">resume_back_end_developer.pdf</span>
                                    <span class="flex-shrink-0 text-gray-400">2.4mb</span>
                                  </div>
                                </div>
                                <div class="ml-4 flex flex-shrink-0 space-x-4">
                                  <button type="button" class="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500">Update</button>
                                  <span class="text-gray-200" aria-hidden="true">|</span>
                                  <button type="button" class="rounded-md bg-white font-medium text-gray-900 hover:text-gray-800">Remove</button>
                                </div>
                              </li>
                              <li class="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                                <div class="flex w-0 flex-1 items-center">
                                  <PaperClipIcon class="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                                  <div class="ml-4 flex min-w-0 flex-1 gap-2">
                                    <span class="truncate font-medium">coverletter_back_end_developer.pdf</span>
                                    <span class="flex-shrink-0 text-gray-400">4.5mb</span>
                                  </div>
                                </div>
                                <div class="ml-4 flex flex-shrink-0 space-x-4">
                                  <button type="button" class="rounded-md bg-white font-medium text-indigo-600 hover:text-indigo-500">Update</button>
                                  <span class="text-gray-200" aria-hidden="true">|</span>
                                  <button type="button" class="rounded-md bg-white font-medium text-gray-900 hover:text-gray-800">Remove</button>
                                </div>
                              </li>
                            </ul>
                          </dd>
                        </div>
                      </dl>
                    </div>
                  </div>
                </div>
              </section>
            </div>
  
            <!-- Right column -->
            <div class="grid grid-cols-1 gap-4">
              <section aria-labelledby="section-2-title">
                <h2 class="sr-only" id="section-2-title">Section title</h2>
                <div class="overflow-hidden rounded-lg bg-white shadow">
                  <div class="p-6">
                    <div class="py-3">
            <div v-for="item in items" :key="item.name" >
              <a :href="item.href" class="rtl hover:bg-gray-100 block px-4 py-5 text-sm text-gray-700 rounded-xl">{{ item.name }}</a>
            </div>
          </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </main>
    </div>
  </template>
  
  <script setup>
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
  import { Bars3Icon, BellIcon, XMarkIcon } from '@heroicons/vue/24/outline'
  import { MagnifyingGlassIcon } from '@heroicons/vue/20/solid'
  
  const items = [
  { name: 'اطلاعات کاربری', href: '#' },
  { name: 'Save and publish', href: '#' },
  { name: 'Export PDF', href: '#' },
]

  const user = {
    name: 'Tom Cook',
    email: 'tom@example.com',
    imageUrl:
      'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
  }
  const navigation = [
    { name: 'Home', href: '#', current: true },
    { name: 'Profile', href: '#', current: false },
    { name: 'Resources', href: '#', current: false },
    { name: 'Company Directory', href: '#', current: false },
    { name: 'Openings', href: '#', current: false },
  ]
  const userNavigation = [
    { name: 'Your Profile', href: '#' },
    { name: 'Settings', href: '#' },
    { name: 'Sign out', href: '#' },
  ]
  </script>