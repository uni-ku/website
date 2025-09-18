<script setup lang="ts">
defineProps<{ isMobile: boolean }>()

const { navDirFromPath } = useContentHelpers()
const config = useConfig()
const { locale, defaultLocale, navigation } = useI18nDocs()

const tree = computed(() => {
  const route = useRoute()
  const path = route.path.split('/')
  if (config.value.aside.useLevel) {
    const leveledPath = path.splice(0, locale.value === defaultLocale ? 3 : 4).join('/')

    const dir = navDirFromPath(leveledPath, navigation.value)
    return dir ?? []
  }

  return navigation.value
})
</script>

<template>
  <UiScrollArea orientation="vertical" class="relative h-full overflow-hidden py-6 pr-6 text-sm md:pr-4" type="hover">
    <LayoutHeaderNavMobile v-if="isMobile" class="mb-5 border-b pb-2" />
    <LayoutSearchButton v-if="config.search.inAside" />
    <ul v-if="config.aside.useLevel && config.aside.levelStyle === 'aside'" class="flex flex-col gap-1 border-b pb-4">
      <li>
        <NuxtLinkLocale
          to="/projects"
          class="text-foreground/80 hover:bg-muted hover:text-primary flex h-8 items-center gap-2 rounded-md p-2 text-sm"
        >
          <SmartIcon
            name="lucide:blocks"
            class="self-center"
            :size="16"
          />
          全部项目
        </NuxtLinkLocale>
      </li>
    </ul>
    <LayoutAsideTree
      :links="tree"
      :level="0"
      :class="[(config.aside.useLevel && config.aside.levelStyle === 'aside') ? 'pt-4' : 'pt-1']"
    />
  </UiScrollArea>
</template>
