<script setup lang="ts">
interface Project {
  title: string;
  description: string;
  version: string;
  link: string;
  icon?: string;
  tags?: string[];
}

const props = defineProps<{
  projects: Project[];
  title?: string;
  description?: string;
}>()

const searchTerm = ref('')
const selectedTag = ref('')

// 获取所有唯一的标签
const allTags = computed(() => {
  const tags = new Set<string>()
  props.projects.forEach((project) => {
    project.tags?.forEach(tag => tags.add(tag))
  })
  return Array.from(tags).sort()
})

// 过滤项目
const filteredProjects = computed(() => {
  return props.projects.filter((project) => {
    const matchesSearch = searchTerm.value === ''
      || project.title.toLowerCase().includes(searchTerm.value.toLowerCase())
      || project.description.toLowerCase().includes(searchTerm.value.toLowerCase())

    const matchesTag = selectedTag.value === ''
      || project.tags?.includes(selectedTag.value)

    return matchesSearch && matchesTag
  })
})

// 动画相关
const isMounted = ref(false)
const visibleProjects = ref<Project[]>([])

onMounted(() => {
  isMounted.value = true
  // 初始显示所有项目
  visibleProjects.value = [...filteredProjects.value]
})

// 监听过滤结果变化，更新可见项目
watch(filteredProjects, (newProjects) => {
  if (!isMounted.value) {
    return
  }

  // 简单的淡入淡出效果
  visibleProjects.value = []
  setTimeout(() => {
    visibleProjects.value = [...newProjects]
  }, 100)
}, { deep: true })
</script>

<template>
  <div class="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <!-- 页面标题和描述 -->
    <div class="text-center mb-8 sm:mb-12">
      <h1 class="text-3xl sm:text-4xl font-bold tracking-tight">
        {{ title || '开源项目' }}
      </h1>
      <p class="mt-3 sm:mt-4 text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
        {{ description || '探索我们的开源项目集合，每个项目都旨在解决特定问题并提供优雅的解决方案。' }}
      </p>
    </div>

    <!-- 搜索和筛选 -->
    <div class="mb-6 sm:mb-8 flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
      <div class="relative w-full sm:w-80">
        <SmartIcon
          name="lucide:search"
          class="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground"
        />
        <input
          v-model="searchTerm"
          type="text"
          placeholder="搜索项目..."
          class="w-full rounded-md border border-input bg-background px-10 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        >
      </div>

      <div v-if="allTags.length > 0" class="flex flex-wrap gap-2 max-w-full overflow-x-auto py-1">
        <button
          class="inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium transition-colors whitespace-nowrap" :class="[
            selectedTag === ''
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted text-muted-foreground hover:bg-muted/80',
          ]"
          @click="selectedTag = ''"
        >
          全部
        </button>
        <button
          v-for="tag in allTags"
          :key="tag"
          class="inline-flex items-center rounded-md px-3 py-1.5 text-sm font-medium transition-colors whitespace-nowrap" :class="[
            selectedTag === tag
              ? 'bg-primary text-primary-foreground'
              : 'bg-muted text-muted-foreground hover:bg-muted/80',
          ]"
          @click="selectedTag = tag"
        >
          {{ tag }}
        </button>
      </div>
    </div>

    <!-- 项目网格 -->
    <TransitionGroup
      v-if="filteredProjects.length > 0"
      name="project-list"
      tag="div"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6"
    >
      <ProjectCard
        v-for="project in filteredProjects"
        :key="project.title"
        :project="project"
      />
    </TransitionGroup>

    <!-- 无结果提示 -->
    <Transition name="fade">
      <div v-if="filteredProjects.length === 0" class="text-center py-8 sm:py-12">
        <SmartIcon name="lucide:package-x" class="mx-auto h-10 w-10 sm:h-12 sm:w-12 text-muted-foreground" />
        <h3 class="mt-3 sm:mt-4 text-base sm:text-lg font-medium">
          未找到匹配的项目
        </h3>
        <p class="mt-1 sm:mt-2 text-sm text-muted-foreground">
          请尝试调整搜索条件或选择其他标签
        </p>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
/* 项目列表动画 */
.project-list-enter-active,
.project-list-leave-active {
  transition: all 0.3s ease;
}

.project-list-enter-from,
.project-list-leave-to {
  opacity: 0;
  transform: translateY(20px);
}

.project-list-move {
  transition: transform 0.3s ease;
}

/* 淡入淡出动画 */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
