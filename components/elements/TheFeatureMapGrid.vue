<script setup lang="ts">
import  ColorModeLogo  from "~~/components/elements/Logos/colorMode.vue";
</script>

<template>
  <div class="flex flex-column justify-between gap-10 py-10">
    <div class="mt-10">
      <div class="mb-10 text-center gap-10">
        <h2 class="text-base text-[#00dc82] font-semibold tracking-wide uppercase"><span
            class="text-black dark:text-white">Advantages of</span> Avantage</h2>
      </div>

      <dl class="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-20">
        <div class="relative mb-5">
          <dt>
            <a href="https://www.youtube.com/channel/UCFDF_U_uoKc6MhIZPZKo5CA" target="_blank">
              <div class="absolute flex items-center justify-center h-12 w-12 rounded-md  text-white">
                <!-- Heroicon name: outline/globe-alt -->
                <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1"
                  id="Layer_1" x="0px" y="0px" viewBox="0 0 461.001 461.001"
                  style="enable-background:new 0 0 461.001 461.001;" xml:space="preserve">

                  <path style="fill:#F61C0D;"
                    d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728   c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137   C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607   c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z" />
                </svg>
              </div>
            </a>
            <p class="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">YouTube Channel</p>
          </dt>
          <dd class="mt-2 ml-16 text-base text-gray-500">
             Nuxt Tutorials by Full Stack Jack
          </dd>
        </div>

        <nuxt-link to="http://localhost:3000/_tailwind/">
          <div class="relative mb-5">
            <dt>
              <div
                class="absolute flex justify-center h-12 w-12 pt-2 pl-1 rounded-md bg-[#00dc82] text-white hover:text-black bg-gradient-to-r hover:from-green-500 hover:to-teal-400 md:hover:scale-110">
                <svg>

                  <path xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" fill="currentColor" clip-rule="evenodd"
                    d="M20.832 0c-5.556 0-9.028 2.778-10.417 8.333 2.084-2.777 4.514-3.82 7.292-3.125 1.585.397 2.718 1.546 3.971 2.819 2.043 2.073 4.407 4.473 9.57 4.473 5.556 0 9.028-2.778 10.417-8.333-2.083 2.777-4.514 3.819-7.291 3.125-1.585-.397-2.718-1.546-3.972-2.82C28.359 2.4 25.995 0 20.832 0ZM10.417 12.5C4.86 12.5 1.389 15.276 0 20.832c2.083-2.778 4.514-3.82 7.292-3.125 1.584.396 2.717 1.546 3.971 2.818C13.306 22.6 15.67 25 20.833 25c5.556 0 9.028-2.777 10.417-8.333-2.084 2.778-4.514 3.82-7.292 3.125-1.585-.396-2.717-1.546-3.971-2.819-2.043-2.073-4.407-4.473-9.57-4.473Z" />

                </svg>
              </div>
              <p class="ml-16 text-lg leading-6 font-medium text-gray-900 dark:text-white">Tailwind</p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              configured and ready to go
            </dd>
          </div>
        </nuxt-link>

        <nuxt-link to="https://www.prisma.io/">
          <div class="relative mb-5">
            <dt>
              <div
                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#00dc82] text-white bg-gradient-to-r hover:from-green-500 hover:to-teal-400 md:hover:scale-110">
                <svg class="hover:text-black" height="32px" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
                  <title>file_type_prisma</title>
                  <path
                    d="M25.21,24.21,12.739,27.928a.525.525,0,0,1-.667-.606L16.528,5.811a.43.43,0,0,1,.809-.094l8.249,17.661A.6.6,0,0,1,25.21,24.21Zm2.139-.878L17.8,2.883h0A1.531,1.531,0,0,0,16.491,2a1.513,1.513,0,0,0-1.4.729L4.736,19.648a1.592,1.592,0,0,0,.018,1.7l5.064,7.909a1.628,1.628,0,0,0,1.83.678l14.7-4.383a1.6,1.6,0,0,0,1-2.218Z"
                    style="fill:currentColor;fill-rule:evenodd" />
                </svg>
              </div>
              <p class="ml-16 text-lg leading-6 font-medium dark:text-white text-gray-900">Prisma Js</p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              configured and ready to go
            </dd>
          </div>
        </nuxt-link>

        <nuxt-link to="/login">
          <div class="mb-5">
            <dt>
              <div
                class="absolute flex items-center justify-center h-12 w-12 p-1 text-white hover:text-black rounded-md bg-[#00dc82] text-white bg-gradient-to-r hover:from-green-500 hover:to-teal-400 md:hover:scale-110">
             
                <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                <svg version="1.1" id="Layer_1" fill="currentColor" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px"
                   viewBox="0 0 330 330" style="enable-background:new 0 0 330 330;" xml:space="preserve">
                <g id="XMLID_504_">
                  <path id="XMLID_505_" d="M65,330h200c8.284,0,15-6.716,15-15V145c0-8.284-6.716-15-15-15h-15V85c0-46.869-38.131-85-85-85
                    S80,38.131,80,85v45H65c-8.284,0-15,6.716-15,15v170C50,323.284,56.716,330,65,330z M207.481,219.356l-42.5,42.5
                    c-2.929,2.929-6.768,4.394-10.606,4.394s-7.678-1.465-10.606-4.394l-21.25-21.25c-5.858-5.858-5.858-15.354,0-21.213
                    c5.857-5.858,15.355-5.858,21.213,0l10.644,10.643l31.894-31.893c5.857-5.858,15.355-5.858,21.213,0
                    C213.34,204.002,213.34,213.498,207.481,219.356z M110,85c0-30.327,24.673-55,55-55s55,24.673,55,55v45H110V85z"/>
                </g>
                </svg>
              </div>
              <p
                class="ml-16 text-lg leading-6 font-medium dark:text-white text-gray-900 md:hover:scale-110 duration-500">
                Auth</p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              Login with email or username
            </dd>
          </div>
        </nuxt-link>


        <nuxt-link to="https://vitest.dev">
          <div class="relative mb-5">
            <dt>
              <div
                class="absolute flex items-center justify-center h-12 w-12 rounded-md bg-[#00dc82] text-white bg-gradient-to-r hover:from-green-500 hover:to-teal-400 md:hover:scale-110">
                <svg width="290" height="290" viewBox="0 0 165 165" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <g clip-path="url(#clip0_301_2)">
                  <g filter="url(#filter0_d_301_2)">
                  <path d="M120.831 57.2543L84.693 109.505C84.3099 110.059 83.7558 110.474 83.1148 110.687C82.4738 110.9 81.7809 110.898 81.1412 110.684C80.5015 110.469 79.95 110.052 79.5702 109.497C79.1905 108.941 79.0032 108.277 79.037 107.606L80.4833 78.7582L57.1343 73.8064C56.6353 73.7007 56.1704 73.474 55.7807 73.1465C55.391 72.8191 55.0885 72.4009 54.9001 71.929C54.7117 71.4571 54.6432 70.9461 54.7006 70.4412C54.758 69.9364 54.9395 69.4532 55.2291 69.0345L91.3675 16.7837C91.7507 16.2294 92.3048 15.8145 92.9458 15.6018C93.5869 15.3891 94.2798 15.3902 94.9196 15.6051C95.5593 15.8199 96.1109 16.2367 96.4906 16.7923C96.8703 17.3478 97.0575 18.0117 97.0236 18.6833L95.5773 47.5314L118.926 52.4827C119.425 52.5885 119.89 52.8152 120.28 53.1426C120.67 53.4701 120.972 53.8883 121.16 54.3602C121.349 54.8321 121.417 55.3431 121.36 55.8479C121.303 56.3528 121.121 56.836 120.831 57.2547L120.831 57.2543Z" fill="#FCC72B"/>
                  <path d="M82.9866 153.343C82.0254 153.344 81.0735 153.156 80.1855 152.788C79.2975 152.42 78.4909 151.88 77.8122 151.2L43.6658 117.056C42.2998 115.683 41.5341 113.824 41.5366 111.887C41.5392 109.95 42.3098 108.092 43.6796 106.723C45.0493 105.353 46.9064 104.582 48.8435 104.579C50.7807 104.577 52.6399 105.342 54.0134 106.708L82.9866 135.678L146.105 72.5626C147.481 71.2088 149.336 70.4536 151.266 70.4615C153.197 70.4693 155.046 71.2396 156.41 72.6045C157.775 73.9695 158.546 75.8184 158.554 77.7487C158.561 79.679 157.806 81.5342 156.452 82.9101L88.1597 151.2C87.4811 151.881 86.6747 152.42 85.7869 152.788C84.8992 153.156 83.9475 153.344 82.9866 153.343Z" fill="#729B1B"/>
                  <path d="M82.9572 153.343C83.9184 153.344 84.8703 153.156 85.7583 152.788C86.6463 152.42 87.4528 151.88 88.1316 151.2L122.278 117.056C123.644 115.683 124.41 113.824 124.407 111.887C124.405 109.95 123.634 108.092 122.264 106.723C120.894 105.353 119.037 104.582 117.1 104.579C115.163 104.577 113.304 105.342 111.93 106.708L82.9572 135.678L19.8389 72.5626C18.4629 71.2088 16.6077 70.4536 14.6775 70.4615C12.7472 70.4693 10.8982 71.2396 9.53331 72.6045C8.16839 73.9695 7.39811 75.8184 7.39025 77.7487C7.38239 79.679 8.13759 81.5342 9.49135 82.9101L77.784 151.2C78.4627 151.881 79.2691 152.42 80.1568 152.788C81.0446 153.156 81.9963 153.344 82.9572 153.343Z" fill="#729B1B" fill-opacity="0.5"/>
                  </g>
                  </g>
                  <defs>
                  <filter id="filter0_d_301_2" x="1.3902" y="10.4431" width="167.163" height="153.9" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
                  <feFlood flood-opacity="0" result="BackgroundImageFix"/>
                  <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
                  <feOffset dx="2" dy="3"/>
                  <feGaussianBlur stdDeviation="4"/>
                  <feComposite in2="hardAlpha" operator="out"/>
                  <feColorMatrix type="matrix" values="0 0 0 0 0.108333 0 0 0 0 0.108333 0 0 0 0 0.108333 0 0 0 0.2 0"/>
                  <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_301_2"/>
                  <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_301_2" result="shape"/>
                  </filter>
                  <clipPath id="clip0_301_2">
                  <rect width="165" height="165" fill="white"/>
                  </clipPath>
                  </defs>
                  </svg>
              </div>
              <p class="ml-16 text-lg leading-6 font-medium dark:text-white text-gray-900">Vitest</p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              configured and ready to go
            </dd>
          </div>
        </nuxt-link>
        <nuxt-link to="https://nuxt.com/modules/color-mode">
          <div class="mb-5">
            <dt>
              <div
                class="absolute flex items-center justify-center h-12 w-12 p-1 text-white hover:text-black rounded-md bg-[#00dc82] text-white bg-gradient-to-r hover:from-green-500 hover:to-teal-400 md:hover:scale-110">
             
                <!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->
                <ColorModeLogo/>
              </div>
              <p
                class="ml-16 text-lg leading-6 font-medium dark:text-white text-gray-900 md:hover:scale-110 duration-500">
                Color Mode</p>
            </dt>
            <dd class="mt-2 ml-16 text-base text-gray-500">
              Dark mode ready
            </dd>
          </div>
        </nuxt-link>


      </dl>
    </div>
  </div>

</template>
