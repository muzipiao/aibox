import { createApp } from 'vue'
import { createPinia } from 'pinia'

import VueGtag from 'vue-gtag'
import i18n from '@/i18n/index'
import vuetify from '@/plugins/vuetify'
import router from '@/router/router-index'

import App from './App.vue'

const pinia = createPinia()
const app = createApp(App)

// 注册插件
app.use(i18n)
app.use(pinia)
app.use(router)
app.use(vuetify)
app.use(VueGtag, { config: { id: 'G-5C5KEMHV32' } })

app.mount('#app')
