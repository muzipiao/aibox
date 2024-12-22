<script setup lang="ts">
import { useI18n } from 'vue-i18n'
import { computed, onMounted, ref } from 'vue'
import { useLanguageStore } from '@/stores/language-store'
import { localNameDict, localFlagDict, getNavigatorCode } from '@/i18n/index'

import TextIcon from '@/components/icon/TextIcon.vue'
import SwitchBtn from '@/components/views/SwitchBtn.vue'
import ThemeManager from '@/components/theme/theme-manager'

// 导入使用的图标
import { mdiTranslate, mdiWeatherNight, mdiWhiteBalanceSunny } from '@mdi/js'
import logo_img from '@/assets/images/favicon-32x32.png'

// 国际化
const { t, locale, availableLocales } = useI18n()

// 获取语言文字描述
const getLocaleDesc = (code: string) => {
  switch (code) {
    case 'en':
      return t('local-en')
    case 'zh':
      return t('local-zh-cn')
    case 'tw':
      return t('local-zh-tw')
    case 'es':
      return t('local-es')
    case 'fr':
      return t('local-fr')
    case 'ar':
      return t('local-ar')
    case 'de':
      return t('local-de')
    case 'ko':
      return t('local-ko')
    case 'pt':
      return t('local-pt')
    case 'ru':
      return t('local-ru')
    case 'ja':
      return t('local-ja')
    case 'th':
      return t('local-th')
    default:
      return ''
  }
}

// 根据 localDict 的顺序显示语言
const localList = computed(() => {
  return Object.keys(localNameDict).filter((localKey) => availableLocales.includes(localKey))
})

const languageStore = useLanguageStore() // 缓存到本地缓存 localStorage
// 深色主题切换
const themeManager = ThemeManager()
// 初始状态和系统保持一致
const mediaQuery = window.matchMedia('(prefers-color-scheme: dark)')
const themeSwitch = ref<boolean>(themeManager.isDark.value)

// 监听系统挂载
onMounted(() => {
  if (themeManager.themeMode.value === 'auto') {
    mediaQuery.addEventListener('change', handleSystemThemeChange)
  } else {
    themeSwitch.value = themeManager.themeMode.value === 'dark'
  }
  const languageCode = languageStore.getCode()
  if (languageCode) {
    handleLanguageChange(languageCode)
  }
})

// 如果是 auto，则根据状态设置开关状态
const handleSystemThemeChange = (event: MediaQueryListEvent) => {
  if (themeManager.themeMode.value === 'auto') {
    themeSwitch.value = event.matches
  }
}

// 开关按钮点击切换事件
const handleSwitchChange = () => {
  themeManager.setThemeMode(themeSwitch.value ? 'dark' : 'light')
}

// 切换语言
const handleLanguageChange = (key: string | null) => {
  locale.value = key ?? getNavigatorCode()
  languageStore.setCode(key)
}
</script>

<template>
  <v-app-bar :elevation="1" app>
    <v-container class="mx-auto" min-width="320" max-width="1440">
      <nav role="navigation">
        <v-tabs hide-slider height="44" role="tablist">
          <!-- logo 和 名字 -->
          <v-tab value="tab-1" rounded="lg" to="/" class="px-1" role="tab" aria-controls="panel-home">
            <v-img :src="logo_img" width="24" class="mr-1" alt="Logo icon" />
            <span class="mr-2 mr-sm-5 logo-text">{{ t('aibox') }}</span>
          </v-tab>
          <v-spacer></v-spacer>

          <!-- 翻译按钮 -->
          <v-menu role="menu">
            <template v-slot:activator="{ props }">
              <v-btn
                v-bind="props"
                class="mt-1 translate-btn"
                width="40px"
                height="40px"
                variant="flat"
                rounded="xl"
                aria-label="Translate button"
                aria-haspopup="true"
                aria-expanded="false"
              >
                <text-icon :icon="mdiTranslate" size="24px"></text-icon>
              </v-btn>
            </template>
            <!-- 语言列表 -->
            <v-list role="menu" aria-label="Language selection">
              <v-list-item
                key="localAutomatic"
                :title="t('local-automatic')"
                @click="handleLanguageChange(null)"
                role="menuitem"
              >
                <template v-slot:prepend>
                  <span class="text-h6">🌐&nbsp;</span>
                </template>
              </v-list-item>
              <!-- 语言列表 -->
              <v-list-item
                v-for="(item, index) in localList"
                :key="index"
                :value="item"
                :title="localNameDict[item]"
                :subtitle="getLocaleDesc(item)"
                @click="handleLanguageChange(item)"
                role="menuitem"
              >
                <template v-slot:prepend>
                  <span class="text-h5">{{ localFlagDict[item] }}&nbsp;</span>
                </template>
              </v-list-item>
            </v-list>
          </v-menu>

          <!-- 暗黑模式切换 -->
          <switch-btn
            v-model="themeSwitch"
            class="mt-1 ml-1"
            @change="handleSwitchChange"
            :true-icon="mdiWeatherNight"
            :false-icon="mdiWhiteBalanceSunny"
            role="switch"
            aria-label="Toggle dark mode"
          ></switch-btn>
        </v-tabs>
      </nav>
    </v-container>
  </v-app-bar>
</template>

<style scoped>
.tab-text {
  font-size: 1rem;
}

/* 图标Logo旁文字 */
.logo-text {
  font-size: 1.1rem;
  font-weight: 500;
}

/* 翻译按钮 */
.translate-btn {
  padding: 0;
  display: flex;
  min-width: auto;
  align-items: center;
  justify-content: center;
}
</style>
