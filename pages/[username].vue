<template>
  
  <div class="relative " v-if="results && results.image">
      <img v-if="results.background_image" :src="results.background_image" alt=""
        class="absolute  inset-0 -z-10  h-full w-full object-cover " />
      <img v-else :src="results.image" alt=""
        class="absolute  inset-0 -z-10  h-full w-full object-cover " />
        <div v-if="results.is_background_blur" class="absolute backdrop-blur-sm overflow-hidden inset-0 -z-10  h-full w-full  " />
  
      <div class="bg rounded-b-[50px] "></div>
      <div class="bg bg2 rounded-b-[50px]"></div>
      <div class="bg bg3 rounded-b-[50px]"></div>
    <div class="absolute bg-black/30 overflow-hidden inset-0 -z-10  h-full w-full  " />
    <!-- <div class="absolute inset-x-0 -top-0 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80" aria-hidden="true">
      <div
        class="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
        style="clip-path: polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)" />
    </div> -->
   
    <div class="flex flex-col justify-center items-center " v-if="results">
      <img class="h-24 w-24 mt-10 object-cover rounded-full" :src="results.image" alt="" />
      <div class="flex items-center mt-4 space-x-reverse space-x-2">
      
        
        <!-- Using the ExclamationCircleIcon component -->
        <Menu as="div" class="relative inline-block text-left">
          <div>
            <!-- Using a div or span as a clickable element for opening the dropdown -->
            <div @click="toggleMenu" class="inline-flex w-full justify-center gap-x-1.5 cursor-pointer rounded-md px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm">
              <MenuButton
                class="inline-flex w-full justify-center gap-x-1.5 rounded-md  text-sm font-semibold text-gray-900 shadow-sm ">
                
                <ExclamationCircleIcon @click="" class="h-5 w-5 my-2 text-white " />
                <h1 class="text-white font-bold text-xl ">{{ results.name }}</h1>
              </MenuButton>
              <span class="sr-only">Show options</span>
            </div>
          </div>
          <transition enter-active-class="transition ease-out duration-500"
            enter-from-class="transform opacity-0 scale-95" enter-to-class="transform opacity-100 scale-100"
            leave-active-class="transition ease-in duration-100" leave-from-class="transform opacity-100 scale-100"
            leave-to-class="transform opacity-0 scale-95">
            <MenuItems
              class="absolute rtl left-1/2 z-10 mt-2 w-96 -translate-x-1/2 rounded-xl bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
              <!-- Menu items here -->
              <p class="text-right p-5 px-10 font-serif text-lg font-semibold">درباره فروشگاه:</p>
              <p class="text-right pb-5 px-10 text-gray-700 font-normal text-base leading-relaxed">{{results.bio}}</p>
            </MenuItems>
          </transition>
        </Menu>
      </div>
      <div class="">
        <ul class="md:absolute left-10 top-0 flex justify-start mt-5 space-x-2">
            <li v-if="results.telegram && results.telegram != 'null'" class="bg-gradient-to-b from-indigo -600 to-indigo -900  rounded-full  w-8 h-8 flex justify-center items-center" >
                <a :href="'https://t.me/'+results.telegram" target="_blank" class="text-white  ">
                    <svg class="w-4 h-4" fill="currentColor" style="enable-background:new 0 0 512 512;" version="1.1" viewBox="0 0 512 512" width="512px" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"><g id="comp_x5F_335-telegram"><g><g><g><path d="M477.805,102.981l-67.327,317.515c-5.08,22.41-18.326,27.984-37.15,17.431l-102.585-75.596      l-49.497,47.607c-5.477,5.478-10.06,10.061-20.617,10.061l7.37-104.479l190.129-171.804c8.268-7.37-1.792-11.454-12.848-4.083      L150.233,287.633l-101.19-31.671c-22.011-6.873-22.408-22.012,4.581-32.568L449.419,70.911      C467.744,64.04,483.779,74.994,477.805,102.981z" style=""/><path d="M389.819,453.082c-6.575,0-13.769-2.164-21.383-6.433c-0.36-0.202-0.709-0.427-1.042-0.672      l-95.797-70.595l-43.353,41.698c-5.775,5.774-12.978,12.918-27.617,12.918c-2.774,0-5.424-1.152-7.315-3.183      c-1.892-2.029-2.855-4.754-2.66-7.521l7.37-104.479c0.182-2.578,1.354-4.984,3.271-6.717l148.935-134.58L155.562,296.095      c-2.48,1.562-5.521,1.956-8.315,1.082l-101.19-31.672c-19.627-6.128-22.91-17.06-23.12-23.03      c-0.282-8.018,4.182-19.452,27.045-28.395l395.843-152.5c4.736-1.776,9.363-2.661,13.836-2.661      c9.022,0,16.929,3.631,22.264,10.225c4.812,5.947,9.699,17.007,5.66,35.926L420.26,422.57c-0.01,0.046-0.02,0.091-0.029,0.137      C414.239,449.135,398.605,453.081,389.819,453.082z M378.737,429.491c5.425,2.959,9.01,3.591,11.081,3.591      c1.865,0,7.536,0,10.892-14.731l67.313-317.444c1.842-8.628,1.24-15.615-1.647-19.184c-1.505-1.86-3.765-2.804-6.715-2.804      c-2.066,0-4.331,0.457-6.73,1.356L57.219,232.725c-9.771,3.822-13.369,7.515-14.161,8.964c0.74,0.919,3.25,2.943,8.965,4.728      l96.79,30.294l231.036-145.476c5.356-3.543,11.187-5.493,16.433-5.493c6.65,0,12.04,3.301,14.064,8.616      c1.015,2.663,2.503,9.632-5.564,16.823L217.69,320.239l-6.001,85.075c0.761-0.723,1.574-1.536,2.484-2.446      c0.046-0.046,0.093-0.092,0.14-0.137l49.497-47.607c3.509-3.376,8.941-3.734,12.865-0.844L378.737,429.491z" style=""/></g></g></g></g><g id="Layer_1"/></svg>
                </a>
            </li>
            <li v-if="results.whatsapp && results.whatsapp != 'null'" class="bg-gradient-to-b from-indigo -600 to-indigo -900  rounded-full  w-8 h-8 flex justify-center items-center">
                <a :href="'https://wa.me/'+results.whatsapp" target="_blank" class="text-white ">
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 32 32">
                      <path fill-rule="evenodd" fill="currentColor" d="M 24.503906 7.503906 C 22.246094 5.246094 19.246094 4 16.050781 4 C 9.464844 4 4.101563 9.359375 4.101563 15.945313 C 4.097656 18.050781 4.648438 20.105469 5.695313 21.917969 L 4 28.109375 L 10.335938 26.445313 C 12.078125 27.398438 14.046875 27.898438 16.046875 27.902344 L 16.050781 27.902344 C 22.636719 27.902344 27.996094 22.542969 28 15.953125 C 28 12.761719 26.757813 9.761719 24.503906 7.503906 Z M 16.050781 25.882813 L 16.046875 25.882813 C 14.265625 25.882813 12.515625 25.402344 10.992188 24.5 L 10.628906 24.285156 L 6.867188 25.269531 L 7.871094 21.605469 L 7.636719 21.230469 C 6.640625 19.648438 6.117188 17.820313 6.117188 15.945313 C 6.117188 10.472656 10.574219 6.019531 16.054688 6.019531 C 18.707031 6.019531 21.199219 7.054688 23.074219 8.929688 C 24.949219 10.808594 25.980469 13.300781 25.980469 15.953125 C 25.980469 21.429688 21.523438 25.882813 16.050781 25.882813 Z M 21.496094 18.445313 C 21.199219 18.296875 19.730469 17.574219 19.457031 17.476563 C 19.183594 17.375 18.984375 17.328125 18.785156 17.625 C 18.585938 17.925781 18.015625 18.597656 17.839844 18.796875 C 17.667969 18.992188 17.492188 19.019531 17.195313 18.871094 C 16.894531 18.722656 15.933594 18.40625 14.792969 17.386719 C 13.90625 16.597656 13.304688 15.617188 13.132813 15.320313 C 12.957031 15.019531 13.113281 14.859375 13.261719 14.710938 C 13.398438 14.578125 13.5625 14.363281 13.710938 14.1875 C 13.859375 14.015625 13.910156 13.890625 14.011719 13.691406 C 14.109375 13.492188 14.058594 13.316406 13.984375 13.167969 C 13.910156 13.019531 13.3125 11.546875 13.0625 10.949219 C 12.820313 10.367188 12.574219 10.449219 12.390625 10.4375 C 12.21875 10.429688 12.019531 10.429688 11.820313 10.429688 C 11.621094 10.429688 11.296875 10.503906 11.023438 10.804688 C 10.75 11.101563 9.980469 11.824219 9.980469 13.292969 C 9.980469 14.761719 11.050781 16.183594 11.199219 16.382813 C 11.347656 16.578125 13.304688 19.59375 16.300781 20.886719 C 17.011719 21.195313 17.566406 21.378906 18 21.515625 C 18.714844 21.742188 19.367188 21.710938 19.882813 21.636719 C 20.457031 21.550781 21.648438 20.914063 21.898438 20.214844 C 22.144531 19.519531 22.144531 18.921875 22.070313 18.796875 C 21.996094 18.671875 21.796875 18.597656 21.496094 18.445313 Z"></path>
                    </svg>
                </a>
            </li>
            <li v-if="results.instagram && results.instagram != 'null'" class="bg-gradient-to-b from-indigo -600 to-indigo -900  rounded-full  w-8 h-8 flex justify-center items-center">
                <a :href="'https://www.instagram.com/'+results.instagram" target="_blank" class="text-white ">
                    <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path fill-rule="evenodd" d="M7.75 2A5.75 5.75 0 002 7.75v8.5A5.75 5.75 0 007.75 22h8.5A5.75 5.75 0 0022 16.25v-8.5A5.75 5.75 0 0016.25 2h-8.5zM8.01 3.5h7.98a4.26 4.26 0 014.26 4.26v8.48a4.26 4.26 0 01-4.26 4.26H8.01a4.26 4.26 0 01-4.26-4.26V7.76A4.26 4.26 0 018.01 3.5zM12 7.28a4.72 4.72 0 100 9.44 4.72 4.72 0 000-9.44zm0 7.79a3.07 3.07 0 110-6.14 3.07 3.07 0 010 6.14zM16.97 6.2a1.11 1.11 0 110 2.22 1.11 1.11 0 010-2.22z" clip-rule="evenodd"></path>
                    </svg>
                </a>
            </li>
            <li v-if="results.twitter && results.twitter != 'null'" class="bg-gradient-to-b from-indigo -600 to-indigo -900  rounded-full  w-8 h-8 flex justify-center items-center">
                <a :href="'https://x.com/'+results.twitter" target="_blank" class="text-white ">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M23.32 4.27h-4.88l-4.9 6.76-4.62-6.76H4.14l6.24 8.75-6.24 8.74h4.89l4.89-6.74 4.6 6.74h4.8l-6.23-8.74 6.23-8.75z"></path>
                    </svg>
                </a>
            </li>
            <li v-if="results.eitaa && results.eitaa != 'null'" class="bg-gradient-to-b from-indigo -600 to-indigo -900  rounded-full  w-8 h-8 flex justify-center items-center">
                <a :href="'https://eitaa.com/'+results.eitaa" target="_blank" class="text-white ">
                    <svg class="w-4 h-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                      <path d="M5.968 23.942a6.624 6.624 0 0 1-2.332-.83c-1.62-.929-2.829-2.593-3.217-4.426-.151-.717-.17-1.623-.15-7.207C.288 5.47.274 5.78.56 4.79c.142-.493.537-1.34.823-1.767C2.438 1.453 3.99.445 5.913.08c.384-.073.94-.08 6.056-.08 6.251 0 6.045-.009 7.066.314a6.807 6.807 0 0 1 4.314 4.184c.33.937.346 1.087.369 3.555l.02 2.23-.391.268c-.558.381-1.29 1.06-2.316 2.15-1.182 1.256-2.376 2.42-2.982 2.907-1.309 1.051-2.508 1.651-3.726 1.864-.634.11-1.682.067-2.302-.095-.553-.144-.517-.168-.726.464a6.355 6.355 0 0 0-.318 1.546l-.031.407-.146-.03c-1.215-.241-2.419-1.285-2.884-2.5a3.583 3.583 0 0 1-.26-1.219l-.016-.34-.309-.284c-.644-.59-1.063-1.312-1.195-2.061-.212-1.193.34-2.542 1.538-3.756 1.264-1.283 3.127-2.29 4.953-2.68.658-.14 1.818-.177 2.403-.075 1.138.198 2.067.773 2.645 1.639.182.271.195.31.177.555a.812.812 0 0 1-.183.493c-.465.651-1.848 1.348-3.336 1.68-2.625.585-4.294-.142-4.033-1.759.026-.163.04-.304.031-.313-.032-.032-.293.104-.575.3-.479.334-.903.984-1.05 1.607-.036.156-.05.406-.034.65.02.331.053.454.192.736.092.186.275.45.408.589l.24.251-.096.122a4.845 4.845 0 0 0-.677 1.217 3.635 3.635 0 0 0-.105 1.815c.103.461.421 1.095.739 1.468.242.285.797.764.886.764.024 0 .044-.048.044-.106.001-.23.184-.973.326-1.327.423-1.058 1.351-1.96 2.82-2.74.245-.13.952-.47 1.572-.757 1.36-.63 2.103-1.015 2.511-1.305 1.176-.833 1.903-2.065 2.14-3.625.086-.57.086-1.634 0-2.207-.368-2.438-2.195-4.096-4.818-4.37-2.925-.307-6.648 1.953-8.942 5.427-1.116 1.69-1.87 3.565-2.187 5.443-.123.728-.169 2.08-.093 2.75.193 1.704.822 3.078 1.903 4.156a6.531 6.531 0 0 0 1.87 1.313c2.368 1.13 4.99 1.155 7.295.071.996-.469 1.974-1.196 3.023-2.25 1.02-1.025 1.71-1.88 3.592-4.458 1.04-1.423 1.864-2.368 2.272-2.605l.15-.086-.019 3.091c-.018 2.993-.022 3.107-.123 3.561-.6 2.678-2.54 4.636-5.195 5.242l-.468.107-5.775.01c-4.734.008-5.85-.002-6.19-.056z"/>
                    </svg>
                </a>
            </li>
            <li v-if="results.rubika && results.telegram != 'null'" class="bg-gradient-to-b from-indigo -600 to-indigo -900  rounded-full  w-8 h-8 flex justify-center items-center">
                <a :href="'https://rubika.ir/'+results.rubika" target="_blank" class="text-white ">
                  <svg class="w-4 h-4" fill="#ffffff" version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" viewBox="0 0 412.287 412.287"xml:space="preserve">
                    <g>
                      <path d="M380.546,110.125L211.552,1.586c-3.293-2.115-7.515-2.115-10.807,0L31.744,110.081c-2.866,1.84-4.6,5.014-4.598,8.42l0.041,180.039c0.002,3.476,1.806,6.699,4.767,8.519l168.961,103.75c1.605,0.986,3.419,1.479,5.233,1.479c1.814,0,3.629-0.491,5.232-1.479L380.352,307.1c2.96-1.818,4.766-5.043,4.767-8.519l0.023-180.039C385.143,115.137,383.409,111.965,380.546,110.125z M206.147,25.627l61.936,39.629l-61.936,39.627l-61.934-39.627L206.147,25.627z M50.197,291.254v-63.938l60.692,36.848l0.01,64.377L50.197,291.254z M110.899,237.623l-60.703-37.285v-64.74l60.703,38.842V237.623z M63.22,116.834l59.186-37.869l59.186,37.869l-59.186,37.869L63.22,116.834z M133.908,174.44l60.705-38.844v64.742l-60.705,37.285V174.44z M133.938,277.927l40.348,25.815l-40.348,24.783V277.927L133.938,277.927z M194.642,379.952l-50.232-30.854l50.232-30.847V379.952z M206.138,297.04l-62.076-38.765l62.076-38.592l62.076,38.733L206.138,297.04z M217.653,379.952v-61.645l50.194,30.812L217.653,379.952z M278.358,328.571l-40.388-24.805l40.388-25.842V328.571z M278.388,237.67l-60.703-37.287v-64.736l60.703,38.842V237.67z M230.708,116.879l59.186-37.867l59.186,37.867l-59.186,37.869L230.708,116.879z M362.104,291.3l-60.705,37.286v-63.17l60.705-37.983V291.3z M362.104,200.383l-60.705,37.287v-63.182l60.705-38.844V200.383z"/>
                    </g>
                  </svg>
                </a>
            </li>
        </ul>
      </div>
  
      
    </div>
    <div class="mx-auto max-w-2xl  py-10 md:pt-[1rem] md:pb-[1rem]">
      <div class="hidden sm:mb-8 sm:flex sm:justify-center">
      </div>
    </div>
  </div>
  <div class="w-full h-56 bg-indigo-600 flex py-10 flex-col justify-center items-center space-y-4" v-else
    v-if="results">
    <div class="h-24 w-24 rounded-full bg-white" alt="" />
    <div class="flex items-center space-x-reverse space-x-2">
      <h1 class="text-white font-bold text-xl">{{ results.name }}</h1>
      <!-- Using the ExclamationCircleIcon component -->
      <ExclamationCircleIcon class="h-5 w-5 text-white" />
    </div>

  </div>
  
  <div class="mt-[-40px]">

    <svg id="Layer_2" class="w-full" fill="white" data-name="Layer 2" xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 695.06 35.8">

      <g id="Layer_2-2" data-name="Layer 2">
        <g id="Layer_1-2" data-name="Layer 1-2">
          <path class="cls-1" d="M695.06,0V35.8H0V0S194.27,12.75,356.77,12.75,695.06,0,695.06,0Z" />
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
          <div class="overflow-hidden -mt-2 bg-white shadow">
            <div class="pb-56" v-if="results">
              <!-- Your content -->
              <div 
                v-if="results.is_empty" 
                class="flex flex-col items-center justify-center py-28 rounded-lg text-indigo-600">
                
                <h2 class="text-xl font-bold">!خوش آمدید</h2>
                <p class="mt-2 rtl text-center text-black">
                 این فروشگاه هنوز خالی است. منتظر محصولات  <strong>{{results.name}}</strong>   باشید.
                </p>
              </div>

              <div v-else>
                <div v-if="results.is_sellable == false" class="bg-indigo-100 border-r-[9px] border-indigo-500 rounded-md text-indigo-700 p-4 m-10 rtl"
                  role="alert">
                  <div class="flex items-center justify-between" >
                    <p class="font-bold me-2">
                      محصولات فروشگاه موقتا قابل فروش نیست لطفا با پشتیبان فروشگاه ارتباط بگیرید. 
                    </p>
                    <nuxt-link v-if="isLogin" :to="support" class=" me-2 cursor-pointer text-white bg-indigo-600 p-2 rounded-lg" >
                       ارتباط با پشتیبان فروشگاه                  
                    </nuxt-link>
                  </div>
                </div>
                <div v-if="results && results.is_sellable == true">
                  <PinProductCarousel :idShop="results.id" />
                  <PinDigitalProductCarousel :idShop="results.id" />
                  
                </div>                                                    <!-- bg-gradient-to-tl bg-indigo-600 from-gray-900 from-0%  text-white  -->
                <div v-if="results && results.is_sellable == true" v-for="(item, index) in order" :class="index % 2 != 0 ? '' : ''" >
                  <component :is="BlogCarousel" :idObject="item.id_object" :idShop="results.id" :title="item.title"
                    v-if="item.type == 'blog'" />
                  <component :is="ProductCarousel" :idObject="null" :idShop="results.id" :title="item.title"
                    v-if="item.type == 'product'" />
                  <component :is="ProductCarousel" :idObject="item.id_object" :idShop="results.id" :title="item.title"
                    v-if="item.type == 'productCategory'" />
                  <component :is="DigitalProductCarousel" :idObject="null" :idShop="results.id" :title="item.title"
                    v-if="item.type == 'digital'" />
                  <component :is="DigitalProductCarousel" :idObject="item.id_object" :idShop="results.id"
                    :title="item.title" v-if="item.type == 'productDigitalCategory'" />
                    <!-- <div class="container border-b py-2 mx-auto" ></div> -->
                
                </div>
              </div>
            </div>
          </div>
        </section>
        <!-- Main 3 column grid -->
      </div>
    </main>
  </div>

  <div >
    <div class="pb-16 py-[200px] pb-[800px]  flex items-center justify-center" v-if="loading == true">
        <div role="status">
            <span class="relative flex h-8 w-8">
                <span
                    class="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
                <span class="relative inline-flex rounded-full h-8 w-8 bg-indigo-500"></span>
            </span>
            <span class="sr-only">Loading...</span>
        </div>
    </div>
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
import PinProductCarousel from "@/components/section/profile/PinProductCarousel.vue"
import PinDigitalProductCarousel from "@/components/section/profile/PinDigitalProductCarousel.vue"
import DigitalProductCarousel from "@/components/section/profile/DigitalProductCarousel.vue"
import ProductCarousel from "@/components/section/profile/ProductCarousel.vue"
import BlogCarousel from "@/components/section/profile/BlogCarousel.vue"
import Blog from "@/components/shared/Blog.vue"
import axios from 'axios'
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
    BlogCarousel,
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
    DigitalProductCarousel: DigitalProductCarousel,
    ProductCarousel: ProductCarousel,
    BlogCarousel: BlogCarousel,
    loading : true,
    support: null,
    order: [
        { id_object: 1, title: "محصولات فیزیکی", type: 'product' },
        { id_object: 2, title: "محصولات دیجیتال", type: 'digital' },
        { id_object: 3, title: "مقاله ها", type: 'blog' },
      ],
    selectedTab: 'products',
    results: null,
    data: [
    ],
  }),
  computed: {
    isLogin() {
      return useUserStore().userToken != null;
    },
  },
  methods: {
    openInNewTab() {
        window.open('https://panel.phoneplus.ir/', '_blank');
    },
    async getData() {
      this.loading = true
      await axios.get(`${apiStore().address}/api/account/shop-profile-info/${this.$route.params.username}/`, {
        headers: {
          'Content-Type': 'multipart/form-data',
          Accept: "application/json",
          Authorization:
              this.isLogin == true ? `Token ${useUserStore().userToken}` : "",
        },
      }).then((response) => {
        this.results = response.data
        this.support = `/p/chat/${this.results.admin[0].username}/${this.results.admin[0].username}_${useUserStore().username}`
        response.data.order.length > 0 ?  this.order = response.data.order : ''
        this.loading = false

      })
    },
    openLogin() {
      NavigationStore().changeLoginState(true)
    },
  },
  async mounted() {
    await this.getData()
    useUserStore().status=='s'? 
    NavigationStore().setButtons([{
          'name': 'مدیریت فروشگاه',
          'func': this.openInNewTab,
          'href': null,
        }])
    :
    NavigationStore().setButtons([{
        'name':'پشتیبانی فروشگاه',
        'func': this.isLogin == true ?null :this.openLogin ,
        'href': this.isLogin == true ? this.support : null,
      }])
  
  },
  
}
</script>

<style scoped>
/* .carousel__slide {
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
} */



.bg-blue-circle-best-product{
   

  background-image:radial-gradient(ellipse 100% 90% at 50% -30%, #5109d591 20.9%, #00000000 90%);
}
</style>
