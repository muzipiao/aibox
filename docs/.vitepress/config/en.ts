import { defineConfig, type DefaultTheme } from "vitepress";

export const en = defineConfig({
  lang: "en-US",
  description: "One-stop tool collection to make work and life easier",

  themeConfig: {
    nav: nav(),

    sidebar: {},

    footer: {
      message: "Released under the Apache License",
      copyright: `Copyright © 2019-${new Date().getFullYear()} lifei`,
    },
  },
});

function nav(): DefaultTheme.NavItem[] {
  return [];
}
