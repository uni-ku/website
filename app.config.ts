export default defineAppConfig({
  shadcnDocs: {
    site: {
      name: 'UniKu',
      description: '有很多 Uniapp(Uni) 的酷(Ku) 😎',
    },
    theme: {
      customizable: true,
      color: 'zinc',
      radius: 0.5,
    },
    header: {
      title: 'UniKu',
      border: false,
      showTitle: true,
      darkModeToggle: true,
      languageSwitcher: {
        enable: false,
        triggerType: 'icon',
        dropdownType: 'select',
      },
      logo: {
        light: '/logo.svg',
        dark: '/logo.svg',
      },
      nav: [
        {
          title: '项目',
          to: '/projects',
          description: '查看所有项目',
        },
      ],
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/uni-ku',
        target: '_blank',
      }],
    },
    aside: {
      useLevel: true,
      collapse: false,
      collapseLevel: 1,
      levelStyle: 'aside',
      folderStyle: 'default',
      collapsible: true,
      collapseIcon: 'lucide:chevron-down',
      expandIcon: 'lucide:chevron-right',
      showTitle: true,
      title: '导航',
    },
    main: {
      breadCrumb: true,
      showTitle: true,
      codeCopy: {
        enable: true,
        tooltip: '复制代码',
        icon: 'lucide:copy',
        checkIcon: 'lucide:check',
        timeout: 2000,
      },
      backToTop: {
        enable: true,
        icon: 'lucide:arrow-up',
        text: '返回顶部',
        threshold: 300,
      },
      editLink: {
        enable: true,
        pattern: 'https://github.com/uni-ku/website/edit/main/content/:path',
        text: '编辑此页面',
      },
      lastUpdated: {
        enable: true,
        text: '最后更新于',
        formatOptions: {
          dateStyle: 'long',
          timeStyle: 'short',
        },
      },
    },
    footer: {
      credits: 'Copyright © 2025',
      links: [{
        icon: 'lucide:github',
        to: 'https://github.com/uni-ku',
        target: '_blank',
      }],
    },
    toc: {
      enable: true,
      mobile: true,
      title: '目录',
      links: [
        {
          title: '点颗星星',
          icon: 'lucide:star',
          to: 'https://github.com/uni-ku',
          target: '_blank',
        }, {
          title: '提出问题',
          icon: 'lucide:circle-dot',
          to: 'https://github.com/orgs/uni-ku/discussions',
          target: '_blank',
        },
      ],
    },
    search: {
      enable: true, // 禁用默认搜索，使用自定义组件
      inAside: false,
      placeholder: '搜索文档或项目',
      debounce: 300,
      maxResults: 20,
      showEmpty: true,
      emptyText: '未找到相关结果',
    },
  },
})
