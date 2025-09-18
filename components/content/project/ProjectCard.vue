<script setup lang="ts">
interface Project {
  title: string;
  description: string;
  version: string;
  link: string;
  icon?: string;
  tags?: string[];
}

defineProps<{
  project: Project;
}>()
</script>

<template>
  <div class="group relative overflow-hidden rounded-xl border bg-card text-card-foreground shadow h-full flex flex-col cursor-pointer">

    <NuxtLink :to="project.link" class="p-5 sm:p-6 flex-1 flex flex-col relative z-10">
      <div class="flex items-start justify-between">
        <div class="flex items-center gap-3 sm:gap-4">
          <!-- 简化的图标容器 -->
          <div class="flex h-10 w-10 sm:h-12 sm:w-12 items-center justify-center rounded-lg bg-primary/10 flex-shrink-0">
            <SmartIcon
              :name="project.icon || 'lucide:package'"
              class="h-5 w-5 sm:h-6 sm:w-6 text-primary"
            />
          </div>

          <div class="min-w-0 flex-1">
            <h3 class="text-base sm:text-lg font-bold leading-tight truncate">
              {{ project.title }}
            </h3>
            <div class="flex items-center gap-2 mt-1">
              <span class="inline-flex items-center rounded-full bg-primary/10 px-2 py-1 text-xs font-medium text-primary">
                {{ project.version }}
              </span>
            </div>
          </div>
        </div>
      </div>

      <p class="mt-4 text-sm text-muted-foreground line-clamp-3 flex-1">
        {{ project.description }}
      </p>

      <div v-if="project.tags && project.tags.length > 0" class="mt-4 flex flex-wrap gap-2">
        <span
          v-for="tag in project.tags.slice(0, 3)"
          :key="tag"
          class="inline-flex items-center rounded-full bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
        >
          {{ tag }}
        </span>
        <span
          v-if="project.tags.length > 3"
          class="inline-flex items-center rounded-full bg-muted px-2 py-1 text-xs font-medium text-muted-foreground"
        >
          +{{ project.tags.length - 3 }}
        </span>
      </div>

      <div class="mt-5 flex items-center justify-between pt-4 border-t border-border/50">
        <span class="text-sm font-medium text-primary">
          查看详情
        </span>

        <div class="flex items-center">
          <SmartIcon
            name="lucide:arrow-right"
            class="h-4 w-4 text-primary"
          />
        </div>
      </div>
    </NuxtLink>
  </div>
</template>

<style scoped>
/* 无动画样式 */
</style>
