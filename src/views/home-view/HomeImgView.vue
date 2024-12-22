<!-- 首页-响应式图片模块 -->

<script setup lang="ts">
import { ref, watch } from 'vue'
import { useTheme } from 'vuetify'

import aibox_zh_dark from '@/assets/images/aibox-zh-dark.png'
import aibox_zh_light from '@/assets/images/aibox-zh-light.png'

const theme = useTheme() // 获取当前主题

const showImg = ref(theme.global.current.value.dark ? aibox_zh_dark : aibox_zh_light)

watch(
  () => theme.global.current.value.dark,
  (newVal) => {
    showImg.value = newVal ? aibox_zh_dark : aibox_zh_light
  }
)
</script>

<template>
  <!-- Attributes 继承只影响组件的根元素，不会自动传递给子元素的子元素 -->
  <!-- 例如给内部 div 设置 v-bind:class="$attrs['class']"，则会把组件的 class 传递给内部 div -->
  <!-- v-bind="$attrs"没有参数的 v-bind 会将一个对象的所有属性都作为 attribute 应用到目标根元素上 -->
  <div class="image-container">
    <!-- 背景效果层 -->
    <div class="background-effect"></div>
    <!-- 图片层 -->
    <div class="image-content">
      <v-img :src="showImg" max-height="388" alt="AIBox" loading="lazy" class="depth-image"></v-img>
    </div>
  </div>
</template>

<style scoped>
.image-container {
  position: relative;
  isolation: isolate;
}

.background-effect {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  max-width: 800px;
  background-image: linear-gradient(-45deg, rgba(189, 52, 254, 0.5) 50%, rgba(71, 202, 255, 0.5) 50%);
  filter: blur(72px);
  z-index: 1;
}

.image-content {
  position: relative;
  z-index: 2;
}

/* 近距离柔和阴影 */
.depth-image {
  filter: drop-shadow(0 5px 8px rgba(0, 0, 0, 0.12));
}

@media (max-width: 960px) {
  .background-effect {
    filter: blur(64px);
  }
}

@media (max-width: 640px) {
  .background-effect {
    filter: blur(56px);
  }
}
</style>
