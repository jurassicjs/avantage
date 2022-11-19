<script setup lang="ts">
import { userLogout } from "~/composables/useAuth";

const showSideDrawer = ref(false)
const logout = userLogout
const router = useRouter()
const colorMode = useColorMode()

const user = useState('user')
const initalCheck = await useLoggedIn()
const isLoggedIn = ref(initalCheck)

router.afterEach(() => {
  showSideDrawer.value = false
})

const setColorTheme = (newTheme: Theme) => {
  colorMode.preference = newTheme
}

async function checkIfLoggedIn() {
  const check = await useLoggedIn()
  isLoggedIn.value = check
}

watch(user, async () => {
  await checkIfLoggedIn()
}, { deep: true });

</script>

<template>
  <div class="navbar relative dark:bg-black">
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div class="flex justify-between  border-b-2 border-gray-100">
        <div class="flex justify-between min-w-full md:min-w-0">
          <div class="md:hidden mt-4 bg-black">
            <button @click="showSideDrawer = true" type="button"
              class="bg-white rounded-md p-2 inline-flex  text-gray-400 hover:text-gray-500 dark:bg-black dark:text-gray-200 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500"
              aria-expanded="false">
              <span class="sr-only dark:bg-black">Open menu</span>
              <svg class="h-6 w-6 dark:bg-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            </button>
          </div>
          <div class="">
            <nuxt-link to="/">
              <span class="sr-only">Home</span>
                <svg class="h-16 md:h-24 w-auto transition duration-500 scale-110  bg-black dark:text-black text-white" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="500"
                zoomAndPan="magnify" viewBox="0 0 375 374.999991" height="500" preserveAspectRatio="xMidYMid meet"
                version="1.0">
                <defs>
                  <clipPath id="40bf54d1b7">
                    <path d="M 111 128 L 223 128 L 223 250 L 111 250 Z M 111 128 " clip-rule="nonzero" />
                  </clipPath>
                  <clipPath id="dced853121">
                    <path
                      d="M 158.492188 128.78125 L 222.449219 163.671875 L 175.425781 249.871094 L 111.46875 214.984375 Z M 158.492188 128.78125 "
                      clip-rule="nonzero" />
                  </clipPath>
                  <clipPath id="ecceb019f7">
                    <path d="M 37 116 L 194.363281 116 L 194.363281 247 L 37 247 Z M 37 116 " clip-rule="nonzero" />
                  </clipPath>
                  <clipPath id="d2a702a414">
                    <path d="M 20.152344 165 L 78 165 L 78 184 L 20.152344 184 Z M 20.152344 165 " clip-rule="nonzero" />
                  </clipPath>
                  <clipPath id="60549f80c1">
                    <path d="M 162.472656 124 L 360 124 L 360 253 L 162.472656 253 Z M 162.472656 124 "
                      clip-rule="nonzero" />
                  </clipPath>
                </defs>
                <rect x="-37.5" width="450" fill="currentColor" y="-37.499999" height="449.999989" fill-opacity="1" />
                <rect x="-37.5" width="450" fill="currentColor" y="-37.499999" height="449.999989" fill-opacity="1" />
                <rect x="-37.5" width="450" fill="currentColor" y="-37.499999" height="449.999989" fill-opacity="1" />
                <g clip-path="url(#40bf54d1b7)">
                  <g clip-path="url(#dced853121)">
                    <path fill="#00dc82"
                      d="M 158.492188 128.785156 L 222.445312 163.675781 L 175.425781 249.867188 L 111.472656 214.980469 L 158.492188 128.785156 "
                      fill-opacity="1" fill-rule="nonzero" />
                  </g>
                </g>
                <path class="fill-[#80eec0] hover:fill-[#00dc82]"
                  d="M 188.28125 144.109375 C 190.261719 147.226562 191.929688 150.210938 193.414062 153.773438 C 175.84375 145.917969 158.613281 157.125 155.636719 164.222656 C 156.421875 163.859375 169.925781 157.730469 186.246094 173.421875 C 158.21875 176.695312 160.828125 189.136719 146.488281 193.066406 C 157.101562 201.890625 166.691406 194.191406 175.164062 198.773438 C 190.15625 207.289062 182.832031 218.421875 166.039062 214.675781 C 172.636719 223.109375 182.023438 226.019531 192.113281 223.84375 C 192.164062 224.8125 192.136719 225.753906 192.058594 226.671875 L 192.058594 226.699219 C 187.523438 230.3125 180.746094 230.183594 174.828125 228.035156 C 170.683594 226.722656 167.003906 223.003906 164.398438 219.730469 C 162.183594 217.164062 160.4375 212.84375 157.4375 210.929688 C 157.648438 210.796875 157.855469 210.667969 158.089844 210.5625 C 161.792969 208.179688 170.917969 211.21875 173.523438 207.289062 C 177.851562 201.183594 163.304688 204.90625 161.558594 204.90625 C 156.132812 204.667969 150.710938 202.496094 147.007812 198.566406 C 144.507812 196.050781 140.675781 188.140625 136.6875 186.753906 C 140.050781 184.761719 142.890625 182.691406 146.566406 181.328125 C 151.179688 179.601562 155.117188 177.007812 157.621094 172.792969 C 153.867188 172.136719 151.027344 170.117188 147.582031 168.390625 C 153.632812 162.546875 156.890625 153.800781 163.09375 148.140625 C 171.253906 140.988281 179.832031 140.390625 188.28125 144.109375 "
                  fill-opacity="1" fill-rule="nonzero" />
                <path fill="currentColor"
                  d="M 189.347656 142.011719 C 188.488281 141.933594 187.679688 141.933594 186.898438 141.988281 C 187.367188 142.691406 187.835938 143.402344 188.28125 144.109375 C 179.832031 140.390625 171.253906 140.988281 163.09375 148.140625 C 156.890625 153.800781 153.632812 162.546875 147.582031 168.390625 C 151.023438 170.117188 153.867188 172.136719 157.621094 172.789062 C 155.117188 177.007812 151.179688 179.601562 146.566406 181.332031 C 142.890625 182.691406 140.050781 184.761719 136.6875 186.753906 C 140.675781 188.140625 144.507812 196.050781 147.007812 198.566406 C 150.710938 202.496094 156.132812 204.667969 161.558594 204.90625 C 163.304688 204.90625 177.851562 201.183594 173.523438 207.289062 C 170.917969 211.21875 161.792969 208.179688 158.089844 210.5625 C 157.855469 210.667969 157.648438 210.796875 157.4375 210.929688 C 160.4375 212.84375 162.183594 217.164062 164.398438 219.730469 C 167.003906 223.003906 170.683594 226.722656 174.828125 228.035156 C 180.746094 230.183594 187.523438 230.3125 192.058594 226.699219 C 191.957031 228.085938 191.667969 229.421875 191.277344 230.703125 C 185.414062 235.738281 178.007812 239.296875 171.335938 240.921875 C 167.003906 241.785156 162.210938 241.996094 157.878906 241.785156 C 153.527344 241.339844 150.476562 239.167969 146.359375 238.066406 C 150.921875 238.300781 156.785156 235.894531 159.394531 231.753906 C 166.121094 220.621094 147.660156 210.351562 138.746094 210.144531 C 127.664062 209.90625 114.839844 220.019531 106.601562 216.246094 C 111.605469 216.691406 116.167969 206.871094 120.289062 204.667969 C 123.964844 202.835938 126.988281 201.082031 130.402344 200.085938 C 126.804688 194.425781 121.617188 189.761719 115.074219 187.878906 C 105.949219 185.023438 95.519531 194.480469 89 189.84375 C 95.730469 188.953125 99.640625 181.09375 105.949219 178.917969 C 112.753906 176.695312 121.070312 177.085938 127.613281 180.253906 C 126.960938 169.542969 120.207031 157.492188 110.511719 152.515625 C 119.089844 146.621094 129.414062 156.65625 138.746094 156.207031 C 148.523438 155.789062 161.347656 147.277344 155.691406 135.910156 C 153.734375 132.214844 149.824219 130.460938 146.359375 129.152344 C 163.617188 123.519531 177.746094 129.230469 189.347656 142.011719 "
                  fill-opacity="1" fill-rule="nonzero" />
                <g clip-path="url(#ecceb019f7)">
                  <path class="fill-[#00dc82] hover:fill-[#80eec0]"  
                    d="M 163.773438 117.414062 C 171.515625 118.621094 179.859375 122.996094 186.246094 130.855469 C 190.339844 136.25 191.695312 138.867188 194.355469 142.902344 C 192.632812 142.402344 190.914062 142.117188 189.347656 142.011719 C 177.746094 129.230469 163.617188 123.515625 146.359375 129.152344 C 149.824219 130.460938 153.734375 132.214844 155.691406 135.910156 C 161.347656 147.277344 148.523438 155.789062 138.746094 156.207031 C 129.414062 156.652344 119.089844 146.621094 110.511719 152.515625 C 120.207031 157.492188 126.960938 169.542969 127.613281 180.253906 C 121.066406 177.085938 112.753906 176.695312 105.949219 178.917969 C 99.640625 181.09375 95.726562 188.953125 89 189.84375 C 95.519531 194.480469 105.949219 185.023438 115.074219 187.878906 C 121.617188 189.761719 126.804688 194.425781 130.402344 200.085938 C 126.988281 201.082031 123.964844 202.835938 120.289062 204.667969 C 116.167969 206.871094 111.605469 216.691406 106.601562 216.246094 C 114.839844 220.019531 127.664062 209.90625 138.746094 210.144531 C 147.660156 210.351562 166.121094 220.621094 159.394531 231.753906 C 156.785156 235.890625 150.921875 238.300781 146.359375 238.066406 C 150.476562 239.167969 153.527344 241.339844 157.878906 241.785156 C 162.210938 241.996094 167.003906 241.785156 171.335938 240.921875 C 178.007812 239.296875 185.414062 235.738281 191.277344 230.703125 C 185.90625 247.835938 156.132812 255.433594 118.800781 233.324219 C 120.859375 225.570312 159.417969 240.320312 153.65625 223.84375 C 132.226562 202.886719 97.839844 240.871094 78.703125 218.605469 C 98.699219 219.675781 100.65625 202.445312 117.914062 201.578125 C 113.640625 199.824219 108.03125 197.597656 96.300781 200.214844 C 89.289062 201.789062 82.613281 205.507812 75.445312 206.816406 C 63.894531 210.246094 44.160156 203.804688 37.875 189.1875 C 54.824219 194.6875 66.320312 191.757812 81.308594 181.277344 C 87.828125 176.695312 93.382812 170.800781 101.855469 170.144531 C 106.652344 170.144531 111.789062 168.652344 116.558594 171.820312 C 108.347656 165.351562 111.058594 162.992188 92.597656 157.675781 C 84.570312 155.394531 74.792969 157.046875 66.972656 162.289062 C 72.1875 153.773438 80.996094 144.917969 90.121094 140.988281 C 106.417969 133.785156 116.507812 137.402344 132.148438 143.953125 C 140.621094 147.226562 156.914062 146.570312 143.230469 136.746094 C 136.058594 132.164062 129.542969 137.714844 120.417969 125.613281 C 134.105469 125.613281 144.871094 114.480469 163.773438 117.414062 "
                    fill-opacity="1" fill-rule="nonzero" />
                </g>
                <g clip-path="url(#d2a702a414)">
                  <path class="fill-[#00dc82] hover:fill-[#80eec0]"
                    d="M 77.269531 170.09375 C 72.367188 177.425781 60.792969 185.3125 48.695312 183.503906 C 41.945312 182.351562 32.429688 170.40625 20.148438 174.730469 C 34.511719 153.878906 62.382812 174.546875 77.269531 170.09375 "
                    fill-opacity="1" fill-rule="nonzero" />
                </g>
                <g clip-path="url(#60549f80c1)">
                  <path class="fill-[#00dc82] hover:fill-[#80eec0]"
                    d="M 273.007812 252.957031 L 346.253906 252.957031 C 348.578125 252.957031 350.863281 252.363281 352.878906 251.238281 C 354.894531 250.113281 356.566406 248.492188 357.730469 246.539062 C 358.890625 244.589844 359.503906 242.375 359.503906 240.121094 C 359.5 237.871094 358.886719 235.65625 357.722656 233.707031 L 308.535156 151.203125 C 307.371094 149.253906 305.699219 147.632812 303.683594 146.507812 C 301.671875 145.378906 299.386719 144.785156 297.058594 144.785156 C 294.734375 144.785156 292.449219 145.378906 290.433594 146.507812 C 288.417969 147.632812 286.746094 149.253906 285.585938 151.203125 L 273.007812 172.3125 L 248.414062 131.035156 C 247.253906 129.082031 245.578125 127.464844 243.566406 126.335938 C 241.550781 125.210938 239.265625 124.617188 236.9375 124.617188 C 234.613281 124.617188 232.328125 125.210938 230.3125 126.335938 C 228.296875 127.464844 226.625 129.082031 225.460938 131.035156 L 164.25 233.707031 C 163.085938 235.65625 162.472656 237.871094 162.46875 240.121094 C 162.46875 242.375 163.082031 244.589844 164.242188 246.539062 C 165.40625 248.492188 167.078125 250.113281 169.09375 251.238281 C 171.109375 252.363281 173.394531 252.957031 175.722656 252.957031 L 221.699219 252.957031 C 239.914062 252.957031 253.347656 245.207031 262.59375 230.09375 L 285.035156 192.457031 L 297.054688 172.3125 L 333.132812 232.816406 L 285.035156 232.816406 Z M 220.949219 232.792969 L 188.863281 232.789062 L 236.960938 152.121094 L 260.957031 192.457031 L 244.890625 219.414062 C 238.75 229.222656 231.777344 232.792969 220.949219 232.792969 Z M 220.949219 232.792969 "
                    fill-opacity="1" fill-rule="nonzero" />
                </g>
              </svg>
            </nuxt-link>
          </div>
        </div>
        <nav class="hidden md:flex justify-between space-x-10 align-bottom mt-14">
          <div class="hidden md:flex space-x-10 align-bottom">
            <nuxt-link to="/subscribe">
              <span
                class="text-base font-medium text-gray-500 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300 ">
               Stripe Integration
              </span>
            </nuxt-link>
            <nuxt-link to="/info">
              <span
                class="text-base font-medium text-gray-500 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300 ">
                App Info
              </span>
            </nuxt-link>
            <nuxt-link to="/articles/overview">
              <span
                class="text-base font-medium text-gray-500 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300 ">
                Nuxt Content
              </span>
            </nuxt-link>
    
            <span class="">
              <nuxt-link to="/">
                <span
                  class="text-base font-medium text-gray-500 dark:text-gray-200 hover:text-gray-900 dark:hover:text-gray-300 ">
                  Docs 
                </span>
              </nuxt-link>
            </span>
          </div>
        </nav>

        <div class="flex justify-between space-x-5 align-bottom mt-14">

          <NuxtLink to="https://github.com/jurassicjs/nuxt3-fullstack-tutorial">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
              role="img" class="dark:text-gray-50 h-6 w-6 hidden lg:block hover:dark:text-gray-400 hover:text-gray-400" width="0.97em" height="1em"
              preserveAspectRatio="xMidYMid meet" viewBox="0 0 496 512">
              <path fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6c-3.3.3-5.6-1.3-5.6-3.6c0-2 2.3-3.6 5.2-3.6c3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9c2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9c.3 2 2.9 3.3 5.9 2.6c2.9-.7 4.9-2.6 4.6-4.6c-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2c12.8 2.3 17.3-5.6 17.3-12.1c0-6.2-.3-40.4-.3-61.4c0 0-70 15-84.7-29.8c0 0-11.4-29.1-27.8-36.6c0 0-22.9-15.7 1.6-15.4c0 0 24.9 2 38.6 25.8c21.9 38.6 58.6 27.5 72.9 20.9c2.3-16 8.8-27.1 16-33.7c-55.9-6.2-112.3-14.3-112.3-110.5c0-27.5 7.6-41.3 23.6-58.9c-2.6-6.5-11.1-33.3 2.6-67.9c20.9-6.5 69 27 69 27c20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27c13.7 34.7 5.2 61.4 2.6 67.9c16 17.7 25.8 31.5 25.8 58.9c0 96.5-58.9 104.2-114.8 110.5c9.2 7.9 17 22.9 17 46.4c0 33.7-.3 75.4-.3 83.6c0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252C496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2c1.6 1.6 3.9 2.3 5.2 1c1.3-1 1-3.3-.7-5.2c-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9c1.6 1 3.6.7 4.3-.7c.7-1.3-.3-2.9-2.3-3.9c-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2c2.3 2.3 5.2 2.6 6.5 1c1.3-1.3.7-4.3-1.3-6.2c-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9c1.6 2.3 4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2c-1.4-2.3-4-3.3-5.6-2z">
              </path>
            </svg>
          </NuxtLink>

          <NuxtLink to="https://discord.gg/9XXEvE43pG" class="text-gray-800 hidden lg:block">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
              class="text-black dark:text-gray-200 h-6 w-6 ml-2 hover:dark:text-purple-400 hover:text-purple-400" viewBox="0 -28.5 256 256" version="1.1"
              preserveAspectRatio="xMidYMid">
              <g>
                <path
                  d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                  fill="currentColor" fill-rule="nonzero" />
              </g>
            </svg>
          </NuxtLink>

          <NuxtLink to="https://twitter.com/full_stack_jack">
            <svg class="dark:text-gray-50 h-6 w-6 hidden lg:block hover:dark:text-blue-400 hover:text-blue-400" fill="none" viewBox="0 0 24 24">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M22 5.897c-.75.33-1.5.577-2.333.66A4.4 4.4 0 0021.5 4.33c-.833.495-1.667.825-2.583.99a4.053 4.053 0 00-3-1.32c-2.25 0-4.084 1.814-4.084 4.041 0 .33 0 .66.084.907-3.5-.165-6.5-1.814-8.5-4.288-.417.66-.584 1.32-.584 2.062 0 1.402.75 2.639 1.834 3.381-.667 0-1.334-.165-1.834-.495v.083c0 1.98 1.417 3.629 3.25 3.958-.333.083-.666.165-1.083.165-.25 0-.5 0-.75-.082.5 1.65 2 2.804 3.833 2.804C6.667 17.608 4.917 18.268 3 18.268c-.333 0-.667 0-1-.082C3.833 19.34 6 20 8.25 20c7.583 0 11.667-6.186 11.667-11.546v-.495c.833-.578 1.5-1.32 2.083-2.062z"
                fill="currentColor"></path>
            </svg>
          </NuxtLink>

          <span class="hidden md:block " @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')">
            <svg v-if="$colorMode.value == 'dark'" xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 text-gray-50 hidden lg:block hover:dark:text-yellow-400 hover:text-yellow-400" 
              viewBox="0 0 20 20" 
              fill="currentColor">
              <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
            </svg>
            <svg v-if="$colorMode.value == 'light'" xmlns="http://www.w3.org/2000/svg" class="h-6 w-6 hidden lg:block hover:dark:text-yellow-400 hover:text-yellow-400"
              viewBox="0 0 20 20" fill="currentColor ">
              <path fill-rule="evenodd"
                d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                clip-rule="evenodd" />
            </svg>
          </span>
          <User :isLoggedIn="isLoggedIn" class="hidden md:block" />
        </div>
      </div>
    </div>


    <!-- drawer component -->
    <div id="drawer-navigation my-12" :class="{ hidden: !showSideDrawer }"
      class="fixed z-40 top-0 h-screen  transition-all duration-700   p-4 overflow-y-auto bg-white w-80 dark:bg-black"
      tabindex="-1" aria-labelledby="drawer-navigation-label">
      <h5 id="drawer-navigation-label" class="text-base font-semibold text-gray-500 dark:text-gray-200 uppercase hover:dark:text-green-400 hover:text-green-400">Menu
      </h5>

      <button @click="showSideDrawer = false" type="button" data-drawer-dismiss="drawer-navigation"
        aria-controls="drawer-navigation"
        class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-500 dark:text-gray-200 rounded-lg text-sm p-1.5 absolute top-2.5 right-2.5 inline-flex items-center dark:hover:bg-black dark:hover:text-white">
        <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clip-rule="evenodd"></path>
        </svg>
        <span class="sr-only">Close menu</span>
      </button>

      <div class="py-4 overflow-y-auto my-12">
        <ul class="space-y-2">
          <li>

            <button class="ml-2" @click="setColorTheme($colorMode.preference == 'dark' ? 'light' : 'dark')">
              <svg v-if="$colorMode.value == 'dark'" xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-gray-500 dark:text-gray-200" viewBox="0 0 20 20" fill="currentColor">
                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
              </svg>
              <svg v-if="$colorMode.value == 'light'" xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 text-gray-500 dark:text-gray-200" viewBox="0 0 20 20" fill="currentColor">
                <path fill-rule="evenodd"
                  d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                  clip-rule="evenodd" />
              </svg>
            </button>
          </li>
          <NuxtLink to="https://github.com/jurassicjs/nuxt3-fullstack-tutorial">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" aria-hidden="true"
              role="img" class="text-gray-500 dark:text-gray-200 h-6 w-6 ml-2 mt-2 " width="0.97em" height="1em"
              preserveAspectRatio="xMidYMid meet" viewBox="0 0 496 512">
              <path fill="currentColor"
                d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6c-3.3.3-5.6-1.3-5.6-3.6c0-2 2.3-3.6 5.2-3.6c3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9c2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9c.3 2 2.9 3.3 5.9 2.6c2.9-.7 4.9-2.6 4.6-4.6c-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2c12.8 2.3 17.3-5.6 17.3-12.1c0-6.2-.3-40.4-.3-61.4c0 0-70 15-84.7-29.8c0 0-11.4-29.1-27.8-36.6c0 0-22.9-15.7 1.6-15.4c0 0 24.9 2 38.6 25.8c21.9 38.6 58.6 27.5 72.9 20.9c2.3-16 8.8-27.1 16-33.7c-55.9-6.2-112.3-14.3-112.3-110.5c0-27.5 7.6-41.3 23.6-58.9c-2.6-6.5-11.1-33.3 2.6-67.9c20.9-6.5 69 27 69 27c20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27c13.7 34.7 5.2 61.4 2.6 67.9c16 17.7 25.8 31.5 25.8 58.9c0 96.5-58.9 104.2-114.8 110.5c9.2 7.9 17 22.9 17 46.4c0 33.7-.3 75.4-.3 83.6c0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252C496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2c1.6 1.6 3.9 2.3 5.2 1c1.3-1 1-3.3-.7-5.2c-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9c1.6 1 3.6.7 4.3-.7c.7-1.3-.3-2.9-2.3-3.9c-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2c2.3 2.3 5.2 2.6 6.5 1c1.3-1.3.7-4.3-1.3-6.2c-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9c1.6 2.3 4.3 3.3 5.6 2.3c1.6-1.3 1.6-3.9 0-6.2c-1.4-2.3-4-3.3-5.6-2z">
              </path>
            </svg>
          </NuxtLink>
          <NuxtLink to="https://discord.gg/tFGTQBdT" class="text-gray-800">
            <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
              class="text-gray-500 dark:text-gray-200 h-6 w-6 ml-2 mt-2" viewBox="0 -28.5 256 256" version="1.1"
              preserveAspectRatio="xMidYMid">
              <g>
                <path
                  d="M216.856339,16.5966031 C200.285002,8.84328665 182.566144,3.2084988 164.041564,0 C161.766523,4.11318106 159.108624,9.64549908 157.276099,14.0464379 C137.583995,11.0849896 118.072967,11.0849896 98.7430163,14.0464379 C96.9108417,9.64549908 94.1925838,4.11318106 91.8971895,0 C73.3526068,3.2084988 55.6133949,8.86399117 39.0420583,16.6376612 C5.61752293,67.146514 -3.4433191,116.400813 1.08711069,164.955721 C23.2560196,181.510915 44.7403634,191.567697 65.8621325,198.148576 C71.0772151,190.971126 75.7283628,183.341335 79.7352139,175.300261 C72.104019,172.400575 64.7949724,168.822202 57.8887866,164.667963 C59.7209612,163.310589 61.5131304,161.891452 63.2445898,160.431257 C105.36741,180.133187 151.134928,180.133187 192.754523,160.431257 C194.506336,161.891452 196.298154,163.310589 198.110326,164.667963 C191.183787,168.842556 183.854737,172.420929 176.223542,175.320965 C180.230393,183.341335 184.861538,190.991831 190.096624,198.16893 C211.238746,191.588051 232.743023,181.531619 254.911949,164.955721 C260.227747,108.668201 245.831087,59.8662432 216.856339,16.5966031 Z M85.4738752,135.09489 C72.8290281,135.09489 62.4592217,123.290155 62.4592217,108.914901 C62.4592217,94.5396472 72.607595,82.7145587 85.4738752,82.7145587 C98.3405064,82.7145587 108.709962,94.5189427 108.488529,108.914901 C108.508531,123.290155 98.3405064,135.09489 85.4738752,135.09489 Z M170.525237,135.09489 C157.88039,135.09489 147.510584,123.290155 147.510584,108.914901 C147.510584,94.5396472 157.658606,82.7145587 170.525237,82.7145587 C183.391518,82.7145587 193.761324,94.5189427 193.539891,108.914901 C193.539891,123.290155 183.391518,135.09489 170.525237,135.09489 Z"
                  fill="currentColor" fill-rule="nonzero" />
              </g>
            </svg>
          </NuxtLink>
          <NuxtLink to="https://twitter.com/jack_fullstack">
            <svg class="text-gray-500 dark:text-gray-200 h-6 w-6 ml-2 mt-2" fill="none" viewBox="0 0 24 24">
              <path fill-rule="evenodd" clip-rule="evenodd"
                d="M22 5.897c-.75.33-1.5.577-2.333.66A4.4 4.4 0 0021.5 4.33c-.833.495-1.667.825-2.583.99a4.053 4.053 0 00-3-1.32c-2.25 0-4.084 1.814-4.084 4.041 0 .33 0 .66.084.907-3.5-.165-6.5-1.814-8.5-4.288-.417.66-.584 1.32-.584 2.062 0 1.402.75 2.639 1.834 3.381-.667 0-1.334-.165-1.834-.495v.083c0 1.98 1.417 3.629 3.25 3.958-.333.083-.666.165-1.083.165-.25 0-.5 0-.75-.082.5 1.65 2 2.804 3.833 2.804C6.667 17.608 4.917 18.268 3 18.268c-.333 0-.667 0-1-.082C3.833 19.34 6 20 8.25 20c7.583 0 11.667-6.186 11.667-11.546v-.495c.833-.578 1.5-1.32 2.083-2.062z"
                fill="currentColor"></path>
            </svg>
          </NuxtLink>
          <li>
            <NuxtLink to="/topics/news"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg aria-hidden="true"
                class="w-6 h-6 text-gray-500 dark:text-gray-200 transition duration-75  group-hover:text-gray-900 dark:hover:text-gray-300  dark:group-hover:text-white"
                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z"></path>
                <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z"></path>
              </svg>
              <span class="ml-3">News</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/subscribe"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg aria-hidden="true"
                class="flex-shrink-0 w-6 h-6 text-gray-500 dark:text-gray-200 transition duration-75 group-hover:text-gray-900 dark:hover:text-gray-300  dark:group-hover:text-white"
                fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z">
                </path>
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Pro Membership</span>
              <span
                class="inline-flex items-center justify-center px-2 ml-3 text-sm font-medium text-gray-800 bg-gray-200 rounded-full dark:bg-gray-700 dark:text-gray-300">Pro</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/topics"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round"
                  d="M15.75 10.5l4.72-4.72a.75.75 0 011.28.53v11.38a.75.75 0 01-1.28.53l-4.72-4.72M4.5 18.75h9a2.25 2.25 0 002.25-2.25v-9a2.25 2.25 0 00-2.25-2.25h-9A2.25 2.25 0 002.25 7.5v9a2.25 2.25 0 002.25 2.25z" />
              </svg>

              <span class="flex-1 ml-3 whitespace-nowrap">Video</span>
              <!-- <span class="inline-flex items-center justify-center w-3 h-3 p-3 ml-3 text-sm font-medium text-blue-600 bg-blue-200 rounded-full dark:bg-blue-900 dark:text-blue-200">3</span> -->
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/tutorials"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
              </svg>

              <span class="flex-1 ml-3 whitespace-nowrap">Tutorials</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/articles"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 01-2.25 2.25M16.5 7.5V18a2.25 2.25 0 002.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 002.25 2.25h13.5M6 7.5h3v3H6v-3z" />
              </svg>

              <span class="flex-1 ml-3 whitespace-nowrap">Articles</span>
            </NuxtLink>
          </li>
          <li>
            <NuxtLink to="/ask-jack/search"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-9 5.25h.008v.008H12v-.008z" />
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Ask Jack</span>
            </NuxtLink>
          </li>
          <li v-if="!isLoggedIn">
            <NuxtLink to="/login"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">Sign In</span>
            </NuxtLink>
          </li>
          <li v-if="!isLoggedIn">
            <NuxtLink to="/register"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M19.5 14.25v-2.625a3.375 3.375 0 00-3.375-3.375h-1.5A1.125 1.125 0 0113.5 7.125v-1.5a3.375 3.375 0 00-3.375-3.375H8.25m6.75 12l-3-3m0 0l-3 3m3-3v6m-1.5-15H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 00-9-9z" />
              </svg>

              <span class="flex-1 ml-3 whitespace-nowrap">Sign Up</span>
            </NuxtLink>
          </li>
          <li @click="logout" v-if="isLoggedIn">
            <span to="/register"
              class="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round"
                  d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
              </svg>
              <span class="flex-1 ml-3 whitespace-nowrap">logout</span>
            </span>
          </li>
        </ul>


      </div>
    </div>

  </div>

</template>
