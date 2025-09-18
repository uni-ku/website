<script setup lang="ts">
import ProjectsGrid from './ProjectGrid.vue'

// 从 content 获取项目数据
const { data: projects } = await useAsyncData('projects', async () => {
  // 查询项目目录下的所有 _dir.yml 文件
  const projectDirs = await queryContent('/projects')
    .where({ _path: /\/_dir$/ })
    .find()

  return projectDirs.map((project: any) => {
    // 从路径中提取项目目录名
    const dirPath = project._path.split('/') as string[]
    const projectDir = dirPath[dirPath.length - 2] // 获取 _dir.yml 前一级目录名

    return {
      title: project.title || '',
      description: project.description || '',
      version: project.navBadges?.[0]?.value || 'v1.0.0',
      link: project.navigation?.redirect || `/projects/${projectDir}/introduction`,
      icon: project.icon || 'lucide:package',
      tags: project.tags || [],
    }
  })
})

// 处理没有项目数据的情况
const displayProjects = computed(() => {
  if (!projects.value || projects.value.length === 0) {
    // 返回默认项目数据，确保页面有内容显示
    return []
  }
  return projects.value
})

// 页面元数据
useHead({
  title: '开源项目 | UniKu',
  meta: [
    { name: 'description', content: '探索 UniKu 组织的开源项目集合，每个项目都旨在解决特定问题并提供优雅的解决方案。' },
  ],
})
</script>

<template>
  <div class="container mx-auto px-4 py-8 sm:py-12">
    <ProjectsGrid
      :projects="displayProjects"
      title="开源项目"
      description="探索我们的开源项目集合，每个项目都旨在解决特定问题并提供优雅的解决方案。"
    />
  </div>
</template>
