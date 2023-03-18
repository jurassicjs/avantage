<template>
  <div class="slider">
    <div class="slides" ref="slidesElem">
      <div class="slide" v-for="(slide, index) in slides" :key="index">
        <img :src="slide.image" :alt="slide.alt" />
        <div class="caption">{{ slide.caption }}</div>
      </div>
    </div>
    <div class="controls">
      <button class="prev" @click="prevSlide">
        <Icon class="w-5 h-5 text-yellow-400" aria-hidden="true" name="carbon:arrow-left" />
      </button>
      <button class="next" @click="nextSlide">
        <Icon class="w-5 h-5 text-yellow-400" aria-hidden="true" name="carbon:arrow-right" />
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { clearInterval } from 'timers';
import { ref, onMounted } from 'vue';

interface Slide {
  image: string;
  alt: string;
  caption: string;
}

const slides = ref<Slide[]>([
  {
    image: '/img/nuxt-mailer.png',
    alt: 'Slide 1',
    caption: 'Caption 1',
  },
  {
    image: '/img/nuxt-scheduler.png',
    alt: 'Slide 2',
    caption: 'Caption 2',
  },
  {
    image: '/img/auth.png',
    alt: 'Slide 3',
    caption: 'Caption 3',
  },
]);

const currentSlide = ref(0);
const slidesElem = ref<HTMLElement | null>(null);
const slideElem = ref<HTMLElement | null>(null);

const autoSlide = setInterval(() => {
  autoNext()
}, 3000)

const slideTo = (index: number): void => {
  if (!slidesElem.value || !slideElem.value) {
    return;
  }

  const slideWidth = slideElem.value.clientWidth;
  slidesElem.value.style.transform = `translateX(-${slideWidth * index}px)`;
};

const nextSlide = (): void => {
  cancelAuto()
  
  if (currentSlide.value < slides.value.length - 1) {
    currentSlide.value++;
  } else {
    currentSlide.value = 0;
  }
  slideTo(currentSlide.value);
};

const autoNext = (): void => {
  if (currentSlide.value < slides.value.length - 1) {
    currentSlide.value++;
  } else {
    currentSlide.value = 0;
  }
  slideTo(currentSlide.value);
};

const prevSlide = (): void => {
  cancelAuto()
  if (currentSlide.value > 0) {
    currentSlide.value--
  } else {
    currentSlide.value = slides.value.length - 1;
  }
  slideTo(currentSlide.value);
};

const cancelAuto = () : void => {
  if(process.client) {
    window.clearInterval(autoSlide)
  }
}

onMounted(() => {
  console.log('slideElem', slideElem.value)
  slideElem.value = slidesElem.value?.querySelector('.slide') as HTMLElement;
  console.log('slideElem', slideElem.value)

});
</script>

<style scoped>
.slider {
  position: relative;
  width: 100%;
  height: 400px;
  overflow: hidden;
}

.slides {
  display: flex;
  transition: transform 0.5s ease;
}

 .slide {
  position: relative;
  flex: 0 0 100%;
}

.slide img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.controls {
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  padding: 20px;
}

</style>
