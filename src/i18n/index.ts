import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Import translation files
import enTranslations from './locales/en.json';
import ruTranslations from './locales/ru.json';
import plTranslations from './locales/pl.json';
import ukTranslations from './locales/uk.json';

const resources = {
  en: {
    translation: enTranslations
  },
  ru: {
    translation: ruTranslations
  },
  pl: {
    translation: plTranslations
  },
  uk: {
    translation: ukTranslations
  }
};

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources,
    fallbackLng: 'en',
    debug: false,
    
    interpolation: {
      escapeValue: false, // React already does escaping
    },
    
    detection: {
      order: ['localStorage', 'navigator', 'htmlTag'],
      caches: ['localStorage'],
    },
  });

export default i18n;
