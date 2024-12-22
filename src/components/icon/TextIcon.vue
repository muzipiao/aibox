<!-- 文字图标 -->

<script setup lang="ts">
import { computed } from 'vue'
import { useTheme } from 'vuetify'
import { mdiImageBrokenVariant } from '@mdi/js'

const theme = useTheme() // 获取当前主题

export interface Props {
  icon?: string
  size?: string | number
  color?: string
  darkColor?: string
  width?: string | number
  height?: string | number
}

// 设置默认属性值
const props = withDefaults(defineProps<Props>(), {
  icon: mdiImageBrokenVariant,
  size: 24,
  color: '#000000',
  darkColor: '#ffffff'
})

const iconColor = computed(() => {
  return theme.global.current.value.dark ? props.darkColor : props.color
})

const iconWidth = computed(() => {
  return props.width || props.size
})

const iconHeight = computed(() => {
  return props.height || props.size
})
</script>

<template>
  <svg
    xmlns="http://www.w3.org/2000/svg"
    :fill="iconColor"
    :width="iconWidth"
    :height="iconHeight"
    viewBox="0 0 24 24"
    preserveAspectRatio="xMidYMid meet"
    role="img"
    aria-hidden="true"
  >
    <path :d="props.icon" />
  </svg>
</template>

<style scoped>
svg {
  display: inline-block;
  vertical-align: middle;
}
</style>
