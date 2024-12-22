<!-- 功能列表 -->

<script setup lang="ts">
import { createFuncsList } from '@/views/home-view/home-funcs-view'

import func_default from '@/assets/icons/func_placeholder.png'

const funcsList = createFuncsList()

const getFullUrl = (url?: string) => {
  return `https://aiboxkit.cn${url || ''}`
}
</script>

<template>
  <div>
    <v-row class="my-8">
      <v-col v-for="item in funcsList" :key="item.route_url" cols="12" sm="6" md="4">
        <v-card
          class="h-100 feature-card"
          role="article"
          elevation="2"
          :href="getFullUrl(item.route_url)"
          target="_blank"
          :aria-label="item.name?.value"
        >
          <v-card-item>
            <div class="d-flex justify-center pt-3">
              <v-img :src="item.icon_url" height="88" alt="Function icon">
                <template v-slot:placeholder>
                  <div class="d-flex align-center justify-center fill-height">
                    <v-progress-circular indeterminate></v-progress-circular>
                  </div>
                </template>
                <template v-slot:error>
                  <div class="d-flex align-center justify-center fill-height">
                    <v-img :src="func_default" height="64"></v-img>
                  </div>
                </template>
              </v-img>
            </div>
          </v-card-item>
          <v-card-title class="text-primary-darken-1 font-weight-bold text-h6">
            {{ item.name }}
          </v-card-title>
          <v-card-text class="text-medium-emphasis text-body-1">
            {{ item.desc }}
          </v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.container {
  min-width: 320px;
}
</style>
