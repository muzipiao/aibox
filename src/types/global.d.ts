// 在不同文件中多次使用 declare global，所有声明会被合并
declare global {
  interface Window {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    _hmt?: any[]
  }
}

export {} // 作用是将文件转换为一个模块，而不导出任何内容
