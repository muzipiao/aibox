// 全局主题状态

import { ref } from 'vue'
import { defineStore } from 'pinia'

export type ThemeMode = 'auto' | 'light' | 'dark'

export const useThemeStore = defineStore('themeStore', () => {
  const mode = ref<ThemeMode>('auto')

  const setMode = (newMode: ThemeMode) => {
    mode.value = newMode
    localStorage.setItem('themeMode', newMode)
  }

  const getMode = () => {
    const savedMode = localStorage.getItem('themeMode') as ThemeMode | null
    if (savedMode && ['auto', 'light', 'dark'].includes(savedMode)) {
      return savedMode
    } else {
      return 'auto'
    }
  }

  const initializeMode = () => {
    const savedMode = localStorage.getItem('themeMode') as ThemeMode | null
    if (savedMode && ['auto', 'light', 'dark'].includes(savedMode)) {
      mode.value = savedMode
    } else {
      mode.value = 'auto'
    }
  }

  return { mode, setMode, getMode, initializeMode }
})
