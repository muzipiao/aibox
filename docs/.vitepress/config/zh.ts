import { defineConfig, type DefaultTheme } from "vitepress";

export const zh = defineConfig({
  lang: "zh-Hans",
  description: "一站式工具集合，让工作生活更简单",

  themeConfig: {
    nav: nav(),

    sidebar: {},

    footer: {
      message: "基于 Apache 许可发布",
      copyright: `版权所有 © 2019-${new Date().getFullYear()} lifei`,
    },

    docFooter: {
      prev: "上一页",
      next: "下一页",
    },

    outline: {
      label: "页面导航",
    },

    lastUpdated: {
      text: "最后更新于",
      formatOptions: {
        dateStyle: "short",
        timeStyle: "medium",
      },
    },

    langMenuLabel: "多语言",
    returnToTopLabel: "回到顶部",
    sidebarMenuLabel: "菜单",
    darkModeSwitchLabel: "主题",
    lightModeSwitchTitle: "切换到浅色模式",
    darkModeSwitchTitle: "切换到深色模式",
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [];
}

// minisearch 搜索翻译
export const search: DefaultTheme.LocalSearchOptions["locales"] = {
  zh: {
    translations: {
      button: {
        buttonText: "搜索文档",
        buttonAriaLabel: "搜索文档",
      },
      modal: {
        displayDetails: "显示详情",
        resetButtonTitle: "清除查询条件",
        backButtonTitle: "取消",
        noResultsText: "无法找到相关结果",
        footer: {
          selectText: "选择",
          selectKeyAriaLabel: "选择",
          navigateText: "切换",
          navigateUpKeyAriaLabel: "切换",
          closeText: "关闭",
          closeKeyAriaLabel: "关闭",
        },
      },
    },
  },
};
