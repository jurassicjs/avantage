<script setup lang="ts">
import TheFeatureGrid from "~~/components/elements/TheFeatureMapGrid.vue";
import TheBillboard from "~~/components/elements/TheBillboard.vue";
</script>

<template>
  <div class="">
    <div class="py-12 theme-mode dark:bg-black">
      <div class="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center md:flex align-center md:justify-center  ">
          <TheBillboard />
        </div>
      </div>
    </div>
    <div class="flex justify-center dark:bg-gray-900 bg-gray-200">
      <TheFeatureGrid />
    </div>
  </div>
</template>