<script setup lang="ts">
import { ref } from "@vue/reactivity";
import type { Ref } from "vue"
import { verifyOtp } from "~/composables/useOtp";

const otp: Ref<number | undefined> = ref();
const successMessage: Ref<string | undefined> = ref();
const isVerified = ref(false)
const router = useRouter()
const errors: Ref<Map<string, { message: InputValidation; }> | undefined> = ref(new Map<string, { message: InputValidation }>())
let response: otpValidation

async function postOtp() {
  response = await verifyOtp(otp.value);
  errors.value = response.errors

  if(response.isVerified) {
    isVerified.value = response.isVerified
    successMessage.value = 'success, redirecting to /dashboard'
    setTimeout(() => {
      router.push('/dashboard')
    }, 3000)
  }
};

</script>

<template>
  <div class="dark:bg-black h-screen">
    <div class="flex items-center justify-center px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full">
        <div class="lg:flex mt-10">
          <img class="mx-auto h-24 w-auto" src="/img/avantage-clear.svg" alt="full stack jack logo" />
        </div>
        <div class="max-w-md w-full">
          <div>
            <h2 class="text-center text-3xl font-extrabold mt-5 text-gray-900 dark:text-white">
              Verify Email
            </h2>
          </div>

          <div v-if="isVerified"
            class="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mt-3" role="alert">
            <ul class="block sm:inline">
              <li>
                {{ successMessage }}
              </li>
            </ul>
          </div>

          <div v-if="response?.hasErrors && errors"
            class="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mt-3" role="alert">
            <ul class="block sm:inline">
              <li v-for="[key, value] in errors">
                {{ value.message }}
              </li>
            </ul>
          </div>
          <form v-on:submit.prevent class="mt-8 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
            <div class="rounded-md shadow-sm -space-y-px mb-1">
              <div>
                <label for="name" class="sr-only">Verify Email</label>
                <input v-model="otp" id="name" name="otp" required
                  class="appearance-none dark:bg-slate-500 dark:text-white dark:placeholder-white rounded-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-t-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                  :class="errors?.has('name') ? ' border-red-500' : ''" placeholder="enter otp" />
              </div>
            </div>
          </form>
          <button @click.prevent="postOtp"
            class="mt-5 group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#00dc82] hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <span class="absolute left-0 inset-y-0 flex items-center pl-3">
              <!-- Heroicon name: solid/lock-closed -->
              <svg class="h-5 w-5 text-indigo-500 group-hover:text-indigo-400" xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                <path fill-rule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clip-rule="evenodd" />
              </svg>
            </span>
            verify
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
