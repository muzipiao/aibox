// 全局语言设置

import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useLanguageStore = defineStore('languageStore', () => {
  // 初始化时从 localStorage 获取保存的语言代码
  const savedCode = localStorage.getItem('languageCode')
  const code = ref<string | null>(savedCode)

  const setCode = (newCode: string | null) => {
    code.value = newCode
    if (newCode) {
      localStorage.setItem('languageCode', newCode)
    } else {
      localStorage.removeItem('languageCode')
    }
  }

  const getCode = () => {
    return code.value
  }

  return { code, setCode, getCode }
})
