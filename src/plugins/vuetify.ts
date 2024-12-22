import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { md3 } from 'vuetify/blueprints'
import { aliases, mdi } from 'vuetify/iconsets/mdi-svg'

// Vuetify
const vuetify = createVuetify({
  // 蓝图配置，默认Material Design 3
  blueprint: md3,
  // 设置默认图标，默认{ defaultSet: 'mdi' }，这里仅做展示使用
  icons: { defaultSet: 'mdi', aliases, sets: { mdi } },
  // 全局配置，取消水波纹
  defaults: { global: { ripple: false } }
})

export default vuetify
