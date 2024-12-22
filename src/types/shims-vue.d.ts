// 解决 TypeScript 无法找到模块“*.vue”的声明文件。此文件告诉 TypeScript 如何解析 .vue 文件
// defineComponent 是从 Vue 导入的值名称,符合值名称的小写约定
// const Component 是一个值名称,符合值名称的小写约定
// 并将值 Component 声明为 defineComponent 函数返回值的类型

declare module '*.vue' {
  import { defineComponent } from 'vue'
  const Component: ReturnType<typeof defineComponent>
  export default Component
}
