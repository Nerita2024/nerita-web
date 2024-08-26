import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from './public/locales/en/common.json';
import sk from './public/locales/sk/common.json';

// Define resources
const resources = {
  en: { translation: en },
  sk: { translation: sk },
};

// Default language
const defaultLang = 'en';

// Determine the language to use
let savedLang = defaultLang;

// Check if code is running in the browser
if (typeof window !== 'undefined') {
  savedLang = localStorage.getItem('lang') || defaultLang;
}

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: savedLang,
    fallbackLng: defaultLang,
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
