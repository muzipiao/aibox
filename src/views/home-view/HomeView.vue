<script setup lang="ts">
import HomeDescView from '@/views/home-view/HomeDescView.vue'
import HomeImgView from '@/views/home-view/HomeImgView.vue'
import HomeFunsView from '@/views/home-view/HomeFunsView.vue'
import FooterView from '@/components/nav/FooterView.vue'
</script>

<template>
  <div class="container">
    <div class="d-md-none justify-center aligin-center text-center">
      <HomeImgView class="my-3" />
      <HomeDescView class="my-9" />
    </div>
    <div class="d-none d-md-block">
      <v-row no-gutters>
        <v-col cols="auto" class="d-flex align-center">
          <HomeDescView class="my-9" />
        </v-col>
        <v-col class="d-md-block d-flex align-center">
          <HomeImgView class="my-3 mr-3" />
        </v-col>
      </v-row>
    </div>
    <!-- 功能列表 -->
    <HomeFunsView class="mt-1" />

    <FooterView class="footer-position" />
  </div>
</template>

<!-- Style  -->
<style scoped>
.container {
  min-height: calc(100vh - 88px);
  min-width: 320px;
  padding-bottom: 88px;
}

.footer-position {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
