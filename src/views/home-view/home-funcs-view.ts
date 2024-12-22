// 定义功能列表类型
import { computed, type ComputedRef } from 'vue'
import i18n from '@/i18n/index'

import func_print_card from '@/assets/icons/func_print_card.png'
import func_image_crop from '@/assets/icons/func_img_crop.png'
import func_image_compress from '@/assets/icons/func_img_compress.png'
import func_text_pinyin from '@/assets/icons/func_text_pinyin.png'
import func_text_fantizi from '@/assets/icons/func_text_fantizi.png'
import func_qrcode_icon from '@/assets/icons/func_qrcode_icon.png'
import func_random_food from '@/assets/icons/func_random_food.png'

interface FuncItem {
  name?: ComputedRef<string> // 功能名称
  desc?: ComputedRef<string> // 功能描述
  useAI?: boolean // 是否使用AI
  icon_url?: string // 功能图片
  icon_name?: string // 功能mdi图标
  route_url?: string // 功能跳转URL
}

// 功能列表
function createFuncsList() {
  // useI18n 只能在 setup 函数或组合式 API 的生命周期钩子中调用，使用工厂函数来创建这个列表
  const { t } = i18n.global

  const funcsList: FuncItem[] = [
    {
      name: computed(() => t('funcs-print-id')),
      desc: computed(() => t('funcs-print-id-desc')),
      useAI: true,
      icon_url: func_print_card,
      icon_name: '',
      route_url: '/printcard'
    },
    {
      name: computed(() => t('funcs-image-min')),
      desc: computed(() => t('funcs-image-min-desc')),
      icon_url: func_image_compress,
      icon_name: '',
      route_url: '/compress'
    },
    {
      name: computed(() => t('funcs-image-crop')),
      desc: computed(() => t('funcs-image-crop-desc')),
      icon_url: func_image_crop,
      icon_name: '',
      route_url: '/cropper'
    },
    {
      name: computed(() => t('funcs-qr-code')),
      desc: computed(() => t('funcs-qr-code-desc')),
      icon_url: func_qrcode_icon,
      icon_name: '',
      route_url: '/qrcode'
    },
    {
      name: computed(() => t('funcs-chinese-to-pinyin')),
      desc: computed(() => t('funcs-chinese-to-pinyin-desc')),
      icon_url: func_text_pinyin,
      icon_name: '',
      route_url: '/pinyin'
    },
    {
      name: computed(() => t('funcs-traditional-chinese')),
      desc: computed(() => t('funcs-traditional-chinese-desc')),
      icon_url: func_text_fantizi,
      icon_name: '',
      route_url: '/fantizi'
    },
    {
      name: computed(() => t('what-to-eat')),
      desc: computed(() => t('what-to-eat-desc')),
      icon_url: func_random_food,
      icon_name: '',
      route_url: '/randfood'
    }
  ]

  return funcsList
}

// 多个导出，使用时 `import { 名称 } from 'module'` 命名导入
export { type FuncItem, createFuncsList }
