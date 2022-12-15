<script setup lang="ts">
import  FlameLogo  from "~~/components/elements/Logos/FlameLogo.vue";
</script>
<template>
    <FlameLogo svgClasses="dark:text-black text-white md:w-[500px] md:h-[500px]"/>
    <div class="flex align-item-center invisible">
      <span class="invisible md:visible mt-[250px] text-[50px] lg:text-[130px] 2xl:text-[130px]   leading-8 font-extrabold tracking-tight ">
        <span name="whiteWord" class="dark:text-white">Nuxt</span>
        <span
          class="bg-clip-text ml-3 text-transparent bg-gradient-to-r hover:from-[#e36a00] to-teal-400 from-[#00dc82] hover:to-[#00dc82]">
          <span name="colorFullWord">Avantage</span>
        </span>
      </span>
    </div>
</template>
