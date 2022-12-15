<script setup lang="ts">
import Navbar from "~~/components/layout/TheNavBar.vue";
import TheFooter from "~~/components/layout/TheFooter.vue";
</script>

<template>
  <div>
    <Navbar/>
      <slot/>
    <TheFooter/>
  </div > 
</template>