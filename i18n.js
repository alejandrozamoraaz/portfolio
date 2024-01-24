import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { languages, resources } from '@/app/_lib/languages'

i18n.use(initReactI18next).init({
  resources,
  lng: languages[0].code,
  interpolation: {
    escapeValue: false,
  },
});

export default i18n