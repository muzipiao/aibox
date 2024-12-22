// 路由组件，使用 import 路由懒加载

import { createWebHistory, createRouter } from 'vue-router'

const routes = [
  { path: '/', name: 'index', component: () => import('@/views/home-view/HomeView.vue') },
  { path: '/aibox', name: 'aibox', component: () => import('@/views/home-view/HomeView.vue') }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

router.afterEach((to) => {
  if (window._hmt) {
    window._hmt.push(['_trackPageview', to.fullPath])
  }
})

export default router
