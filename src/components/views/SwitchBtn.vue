<script setup lang="ts">
import { computed } from 'vue'
import TextIcon from '@/components/icon/TextIcon.vue'

// 通过 defineModel 实现 v-model 的双向绑定
const model = defineModel({ default: false })
const emit = defineEmits(['change'])

type Variant = 'flat' | 'text' | 'elevated' | 'tonal' | 'outlined' | 'plain'

export interface Props {
  rounded?: string
  variant?: Variant
  width?: string | number
  height?: string | number
  trueIcon?: string
  falseIcon?: string
  trueColor?: string
  falseColor?: string
}

// 设置默认属性值
const props = withDefaults(defineProps<Props>(), {
  rounded: 'xl',
  variant: 'flat',
  width: '40',
  height: '40',
  trueColor: '#ffffff',
  falseColor: '#000000'
})

// 切换模式的方法
const toggleSwitch = () => {
  model.value = !model.value
  emit('change', model.value)
}

// 计算按钮的样式选项
const buttonOptions = computed(() => ({
  width: `${props.width}px`,
  height: `${props.height}px`,
  variant: props.variant,
  rounded: props.rounded
}))

// 图标名称
const iconData = computed(() => {
  return model.value ? props.trueIcon : props.falseIcon
})

// 图标颜色
const iconColor = computed(() => {
  return model.value ? props.trueColor : props.falseColor
})

// 计算图标的大小为按钮高度的 60%
const iconSize = computed(() => {
  const calcValue = Math.floor(Number(props.height) * 0.6)
  return `${calcValue}`
})
</script>

<template>
  <div class="d-flex justify-center align-center">
    <v-btn class="switch-button" @click="toggleSwitch" v-bind="buttonOptions" aria-label="Toggle switch">
      <text-icon :icon="iconData" :color="iconColor" :size="iconSize" class="icon-animation"></text-icon>
    </v-btn>
  </div>
</template>

<style scoped>
/* min-width: auto 防止按钮的最小宽度限制图标显示，padding: 0; 取消内缩进 */
.switch-button {
  padding: 0;
  display: flex;
  min-width: auto;
  align-items: center;
  justify-content: center;
  transition: transform 0.3s ease-in-out;
}

/* 定义动画时间、动画类型 */
.icon-animation {
  transition: transform 0.3s ease-in-out;
}

/* 切换时的缩放动画，缩放倍数 */
.switch-button:active .icon-animation {
  transform: scale(1.2);
}
</style>
