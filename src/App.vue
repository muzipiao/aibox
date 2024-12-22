<script setup lang="ts">
import NavbarView from '@/components/nav/NavbarView.vue'
</script>

<template>
  <v-app>
    <v-main>
      <navbar-view />
      <v-container class="mx-auto" min-width="320" max-width="1440">
        <router-view />
      </v-container>
    </v-main>
  </v-app>
</template>

<style scoped></style>
