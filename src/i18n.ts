import { createI18n } from 'vue-i18n'
import en from './locales/en.json'
import hr from './locales/hr.json'
import de from './locales/de.json'
import pt from './locales/pt.json'

type MessageSchema = typeof en

export const i18n = createI18n<[MessageSchema], 'en' | 'hr' | 'de' | 'pt'>({
  legacy: false, // Use Composition API
  locale: 'en',
  fallbackLocale: 'en',
  messages: {
    en,
    hr,
    de,
    pt
  },
  fallbackWarn: false,
  missingWarn: false
})

export const availableLocales = [
  { code: 'en', name: 'English' },
  { code: 'hr', name: 'Hrvatski' },
  { code: 'de', name: 'Deutsch' },
  { code: 'pt', name: 'Português' }
]
