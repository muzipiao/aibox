<!-- 首页-描述模块 -->

<script setup lang="ts">
import { useI18n } from 'vue-i18n'

const { t } = useI18n()

defineOptions({
  inheritAttrs: false // 禁用 attribute 继承
})
</script>

<template>
  <!-- Attributes 继承只影响组件的根元素，不会自动传递给子元素的子元素 -->
  <!-- 例如给内部 div 设置 v-bind:class="$attrs['class']"，则会把组件的 class 传递给内部 div -->
  <!-- v-bind="$attrs"没有参数的 v-bind 会将一个对象的所有属性都作为 attribute 应用到目标根元素上 -->
  <div>
    <div class="text-h4 text-md-h3 mt-3 mt-md-5 font-weight-bold">{{ t('home-desc-title') }}</div>
    <p class="text-h5 text-md-h4 mt-5 mt-md-7">{{ t('home-desc-subtitle') }}</p>
    <!-- 下载引导 -->
    <v-row justify="center" class="mt-6 mb-3 mr-2 mr-md-6">
      <v-col cols="12" md="8" class="text-center">
        <v-btn
          class="download-btn"
          href="https://aiboxkit.cn/"
          size="x-large"
          color="#28b8a0"
          rounded
          target="_blank"
          aria-label="Download AIBox"
        >
          {{ t('download-now') }}
        </v-btn>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped></style>
