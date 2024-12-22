import { createI18n, type IntlDateTimeFormats } from 'vue-i18n'
import en from './locales/en.json'
import zh from './locales/zh-CN.json'
import tw from './locales/zh-TW.json'
import es from './locales/es.json' // 西班牙语
import ar from './locales/ar.json' // 阿拉伯语
import fr from './locales/fr.json' // 法语
import de from './locales/de.json' // 德语
import ru from './locales/ru.json' // 俄语
import pt from './locales/pt.json' // 葡萄牙语
import ko from './locales/ko.json' // 韩语
import ja from './locales/ja.json' // 日语
import th from './locales/th.json' // 泰国语

const localMessages = {
  en,
  zh,
  tw,
  es,
  ar,
  fr,
  de,
  ru,
  pt,
  ko,
  ja,
  th
}

// 语言名称
const localNameDict: Record<string, string> = {
  en: 'English', // 英文
  zh: '简体中文', // 简体中文
  tw: '繁體中文', // 繁体中文
  es: 'Español', // 西班牙语
  ar: 'العربية', // 阿拉伯语
  fr: 'Français', // 法语
  de: 'Deutsch', // 德语
  ru: 'Русский', // 俄语
  pt: 'Português', // 葡萄牙语
  ko: '한국어', // 韩语
  ja: '日本語', // 日語
  th: 'ภาษาไทย' // 泰语
}

// 国旗图标
const localFlagDict: Record<string, string> = {
  en: '🇺🇸', // 英文
  zh: '🇨🇳', // 简体中文
  tw: '🇭🇰', // 繁体中文
  es: '🇪🇸', // 西班牙语
  ar: '🇸🇦', // 阿拉伯语
  fr: '🇫🇷', // 法语
  de: '🇩🇪', // 德语
  ru: '🇷🇺', // 俄语
  pt: '🇵🇹', // 葡萄牙语
  ko: '🇰🇷', // 韩语
  ja: '🇯🇵', // 日語
  th: '🇹🇭' // 泰语
}

// 时间格式
const datetimeFormats: IntlDateTimeFormats = {}
for (const key of Object.keys(localMessages)) {
  datetimeFormats[key] = { short: { year: 'numeric', month: 'short', day: 'numeric' } }
}

// 语言匹配函数 ja日文 th泰文
function getNavigatorCode(): string {
  const browserLocale = (navigator.language || navigator.languages[0]).toLowerCase()
  if (browserLocale.length === 0) {
    return 'zh'
  }
  // 再查找是否存在精确匹配的 messages 语言
  const supportLocales = Object.keys(localMessages)
  if (supportLocales.includes(browserLocale)) {
    return browserLocale
  }
  // 繁体中文 zh-Hant-TW
  if (browserLocale.includes('-hant-')) {
    return 'tw'
  }
  // 英语只有一种
  if (browserLocale.startsWith('en-')) {
    return 'en'
  }
  const languageList = browserLocale.split('-')
  const languagePrefix = languageList[0]
  const languageSuffix = languageList[languageList.length - 1]
  // 汉语返回后缀
  if (languagePrefix === 'zh' && supportLocales.includes(languageSuffix)) {
    return languageSuffix
  }
  // 其他语言返回前缀
  if (supportLocales.includes(languagePrefix)) {
    return languagePrefix
  }
  // 如果没有匹配到，返回默认语言
  return 'zh'
}

// 国际化，创建 i18n 实例
const i18n = createI18n({
  legacy: false, // 使用组合式API风格
  locale: getNavigatorCode(), // 默认语言，使用浏览器语言
  fallbackLocale: 'zh', // 备用语言，当默认语言没有找到时使用
  messages: localMessages,
  datetimeFormats: datetimeFormats
})

// export default i18n
export { localNameDict, localFlagDict, getNavigatorCode, i18n as default }
