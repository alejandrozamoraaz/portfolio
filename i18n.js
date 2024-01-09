import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import enTranslation from './translations/en.json';
import esTranslation from './translations/es.json';

const resources = {
  en: enTranslation,
  es: esTranslation,
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'en', // idioma por defecto
  interpolation: {
    escapeValue: false, // no es necesario escapar valores para React
  },
});

export default i18n;
