<template>  
<nuxt-link to="https://nuxt.com/modules/color-mode">
  <div class="mb-5">
    <dt>
      <div
        class="absolute flex items-center justify-center h-12 w-12 p-1 text-white hover:text-black rounded-md bg-[#00dc82] text-white bg-gradient-to-r hover:from-green-500 hover:to-teal-400 md:hover:scale-110">
     
        <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
        <slot name="logo"></slot>
      </div>
      <p
        class="ml-16 text-lg leading-6 font-medium dark:text-white text-gray-900 md:hover:scale-110 duration-500">
      <slot name="title"></slot>  
      </p>
    </dt>
    <dd class="mt-2 ml-16 text-base text-gray-500">
      <slot name="description"></slot>
    </dd>
  </div>
</nuxt-link>
</template>
