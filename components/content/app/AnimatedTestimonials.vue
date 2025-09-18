<script lang="ts" setup>
import { Motion } from 'motion-v'

interface Testimonial {
  quote: string;
  name: string;
  designation: string;
  image: string;
}
interface Props {
  testimonials?: Testimonial[];
  autoplay?: boolean;
  duration?: number;
}

const props = withDefaults(defineProps<Props>(), {
  testimonials: () => [],
  autoplay: () => false,
  duration: 5000,
})

const active = ref(0)

const interval = ref<any>()

const activeTestimonialQuote = computed(() => {
  return props.testimonials[active.value].quote.split(' ')
})

onMounted(() => {
  if (props.autoplay) {
    interval.value = setInterval(handleNext, props.duration)
  }
})

onUnmounted(() => {
  if (!interval.value) {
    clearInterval(interval.value)
  }
})

function handleNext() {
  active.value = (active.value + 1) % props.testimonials.length
}

function handlePrev() {
  active.value = (active.value - 1 + props.testimonials.length) % props.testimonials.length
}

function isActive(index: number) {
  return active.value === index
}

function randomRotateY() {
  return Math.floor(Math.random() * 21) - 10
}
</script>

<template>
  <div class="w-full font-sans antialiased">
    <div class="relative grid grid-cols-1 gap-6 md:grid-cols-2">
      <div class="relative h-56 md:h-64 w-full">
        <AnimatePresence>
          <Motion
            v-for="(testimonial, index) in props.testimonials"
            :key="testimonial.image"
            as="div"
            :initial="{
              opacity: 0,
              scale: 0.9,
              z: -100,
              rotate: randomRotateY(),
            }"
            :animate="{
              opacity: isActive(index) ? 1 : 0.7,
              scale: isActive(index) ? 1 : 0.95,
              z: isActive(index) ? 0 : -100,
              rotate: isActive(index) ? 0 : randomRotateY(),
              zIndex: isActive(index) ? 40 : testimonials.length + 2 - index,
              y: isActive(index) ? [0, -80, 0] : 0,
            }"
            :exit="{
              opacity: 0,
              scale: 0.9,
              z: 100,
              rotate: randomRotateY(),
            }"
            :transition="{
              duration: 0.4,
              ease: 'easeInOut',
            }"
            class="absolute inset-0 origin-bottom"
          >
            <div class="flex justify-center items-center h-full rounded-3xl">
              <NuxtImg
                :src="testimonial.image"
                :alt="testimonial.name"
                width="100"
                height="100"
                :draggable="false"
                class="object-cover object-center rounded-2xl md:w-28 md:h-28"
              />
            </div>
          </Motion>
        </AnimatePresence>
      </div>

      <div class="flex flex-col justify-between py-4">
        <Motion
          :key="active"
          as="div"
          :initial="{
            y: 20,
            opacity: 0,
          }"
          :animate="{
            y: 0,
            opacity: 1,
          }"
          :exit="{
            y: -20,
            opacity: 0,
          }"
          :transition="{
            duration: 0.2,
            ease: 'easeInOut',
          }"
        >
          <h3 class="text-lg md:text-xl font-bold text-black dark:text-white">
            {{ props.testimonials[active].name }}
          </h3>
          <p class="text-xs md:text-sm text-gray-500 dark:text-neutral-500">
            {{ props.testimonials[active].designation }}
          </p>
          <Motion
            as="p"
            class="mt-3 md:mt-4 text-sm md:text-base text-gray-500 dark:text-neutral-300"
          >
            <Motion
              v-for="(word, index) in activeTestimonialQuote"
              :key="index"
              as="span"
              :initial="{
                filter: 'blur(10px)',
                opacity: 0,
                y: 5,
              }"
              :animate="{
                filter: 'blur(0px)',
                opacity: 1,
                y: 0,
              }"
              :transition="{
                duration: 0.2,
                ease: 'easeInOut',
                delay: 0.02 * index,
              }"
              class="inline-block"
            >
              {{ word }}&nbsp;
            </Motion>
          </Motion>
        </Motion>
        <div class="flex gap-3 md:gap-4 pt-4 md:pt-0">
          <button
            class="group/button flex size-6 md:size-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            @click="handlePrev"
          >
            <Icon
              name="lucide:arrow-left"
              class="size-4 md:size-5 text-black transition-transform duration-300 group-hover/button:rotate-12 dark:text-neutral-400"
            />
          </button>
          <button
            class="group/button flex size-6 md:size-7 items-center justify-center rounded-full bg-gray-100 dark:bg-neutral-800"
            @click="handleNext"
          >
            <Icon
              name="lucide:arrow-right"
              class="size-4 md:size-5 text-black transition-transform duration-300 group-hover/button:-rotate-12 dark:text-neutral-400"
            />
          </button>
        </div>
      </div>
    </div>
  </div>
</template>
