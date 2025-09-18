<script lang="ts" setup>
const testimonials = [
  {
    name: 'skiyee',
    designation: '@uni-ku/root 作者兼组织创始人',
    quote: 'AKA UniApp之Bug缔造者',
    image: 'https://www.github.com/skiyee.png',
  },
]
</script>

<template>
  <section class="relative min-h-[80vh] flex items-center justify-center pt-12 md:pt-20">
    <div class="container mx-auto px-4 sm:px-6 max-w-7xl">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <!-- 左侧介绍和入口 -->
        <div class="space-y-6 md:space-y-8">
          <div class="space-y-3 md:space-y-4">
            <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
              欢迎来到 <span class="text-primary">UniKu</span>
            </h1>
            <p class="text-base md:text-lg text-gray-600 dark:text-gray-300 max-w-lg">
              探索前沿技术，构建卓越应用。UniKu 是一个专注于创新和质量的开发者社区，致力于提供最佳的开发体验。
            </p>
          </div>

          <div class="flex flex-col sm:flex-row gap-3 md:gap-4">
            <NuxtLink
              to="/projects"
              class="px-5 py-2.5 md:px-6 md:py-3 bg-primary text-primary-foreground font-medium rounded-lg hover:bg-primary/90 transition-colors duration-300 text-center"
            >
              探索项目
            </NuxtLink>
            <NuxtLink
              to="/blog"
              class="px-5 py-2.5 md:px-6 md:py-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-white font-medium rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-300 text-center"
            >
              查看博客
            </NuxtLink>
          </div>

          <div class="pt-2 md:pt-4">
            <div class="flex items-center space-x-3 md:space-x-4">
              <div class="flex -space-x-2">
                <div class="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300">
                  <Icon name="lucide:code" class="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div class="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300">
                  <Icon name="lucide:palette" class="w-4 h-4 md:w-5 md:h-5" />
                </div>
                <div class="w-8 h-8 md:w-10 md:h-10 rounded-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300">
                  <Icon name="lucide:zap" class="w-4 h-4 md:w-5 md:h-5" />
                </div>
              </div>
              <div>
                <p class="text-xs md:text-sm text-gray-600 dark:text-gray-400">
                  加入我们的开发者社区
                </p>
                <p class="text-xs text-gray-500 dark:text-gray-500">
                  已有 100+ 开发者参与
                </p>
              </div>
            </div>
          </div>
        </div>

        <!-- 右侧 AnimatedTestimonials 人员介绍 -->
        <div class="flex justify-center lg:justify-end">
          <ClientOnly>
            <AnimatedTestimonials :testimonials="testimonials" />
          </ClientOnly>
        </div>
      </div>
    </div>
  </section>
</template>
