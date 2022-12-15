<script setup lang="ts">
import TheBillboard from "~~/components/elements/TheBillboard.vue";

definePageMeta({
  middleware: 'auth'
})

const router = useRouter();
const user = await useUser()

function goToRegister() {
  router.push('/register')
}

</script>

<template>
  <div v-if="user">
    <div class="min-h-screen bg-white dark:bg-black my-10">
      <div class="m-auto text-center lg:w-8/12 xl:w-7/12">
        <h2 class="text-2xl text-gray-800 dark:text-gray-200 font-bold md:text-4xl">{{ user.username }}'s dashboard
        </h2>
      </div>
      <div class="max-w-9xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="text-center md:flex align-center md:justify-center  ">
          <TheBillboard >
            <template v-slot:whiteWord>
            The
            </template>
            <template v-slot:colorFullWord>
             Dashboard
             </template>
          </TheBillboard>
        </div>
      </div>

    </div>
  </div>
</template>
<style>

</style>