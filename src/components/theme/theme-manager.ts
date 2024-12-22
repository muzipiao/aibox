import { useTheme } from 'vuetify'
import { onMounted, computed } from 'vue'
import { useThemeStore, type ThemeMode } from '@/stores/theme-store'

const themeManager = () => {
  const theme = useTheme()
  const themeStore = useThemeStore()
  // auto 返回系统深色状态；其他返回 mode === 'dark'
  const isDark = computed(() => {
    const savedMode = themeStore.getMode()
    return savedMode === 'auto' ? isSystemDark.value : savedMode === 'dark'
  })
  // 判断系统是否为深色模式
  const isSystemDark = computed(() => {
    return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
  })
  const themeMode = computed(() => {
    return themeStore.mode
  })

  // 更新主题浅色/深色
  const updateTheme = (dark: boolean) => {
    theme.global.name.value = dark ? 'dark' : 'light'
  }

  // 保存主题模式
  const setThemeMode = (mode: ThemeMode) => {
    themeStore.setMode(mode)
    if (mode === 'auto') {
      syncWithSystem()
    } else {
      updateTheme(mode === 'dark')
    }
  }

  // 根据系统自动切换
  const syncWithSystem = () => {
    if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
      updateTheme(true)
    } else {
      updateTheme(false)
    }
  }

  // 监听系统主体切换
  const handleSystemThemeChange = (event: MediaQueryListEvent) => {
    if (themeStore.mode === 'auto') {
      updateTheme(event.matches)
    }
  }

  onMounted(() => {
    themeStore.initializeMode()
    if (themeStore.mode === 'auto') {
      syncWithSystem()
    } else {
      updateTheme(themeStore.mode === 'dark')
    }
    const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
    mediaQuery.addEventListener('change', handleSystemThemeChange)
  })

  return { isDark, isSystemDark, themeMode, setThemeMode }
}

export default themeManager
