// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ['shadcn-docs-nuxt'],
  modules: ['motion-v/nuxt'],
  image: {
    domains: ['github.com'],
  },
  fonts: {
    provider: 'none',
  },
  i18n: {
    defaultLocale: 'zh',
    locales: [
      {
        code: 'zh',
        name: '简体中文',
        language: 'zh-CN',
      },
    ],
  },
  compatibilityDate: '2024-07-06',
})
