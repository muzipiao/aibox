<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from 'vuetify'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const theme = useTheme()

// 计算文字颜色：根据深色或浅色模式选择不同的颜色
const textColor = computed(() => {
  return theme.global.current.value.dark ? '#ececec' : '#2c3e50'
})
</script>

<template>
  <v-container>
    <div class="d-flex justify-center flex-wrap text-center">
      <span class="px-1 px-sm-2 px-md-3 footer-text" :color="textColor">
        {{ t('based-apache-license') }}
      </span>
      <span class="px-1 px-sm-2 px-md-3 footer-text" :color="textColor">
        Copyright © {{ new Date().getFullYear() }} — <strong>{{ t('aibox') }}</strong>
      </span>
    </div>
  </v-container>
</template>

<style scoped>
/* 下方的小文字，并移除 a 标签的下划线 */
.footer-text {
  text-decoration: none;
  font-size: 12px;
}
</style>
