import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

const resources = {
  en: {
    translation: {
      app_name: 'Vyapari Darbaar',
      home: 'Home',
      directory: 'Directory',
      broadcast: 'Broadcast',
      more: 'More',
      daily_bhav_highlights: 'Daily Bhav Highlights',
      todays_news: 'Aaj Ki Taaza Khabar',
      select_region: 'Select Region',
      open_selector: 'Open Selector',
      explore_segments: 'Explore Segments',
    },
  },
  hi: {
    translation: {
      app_name: 'व्यापारी दरबार',
      home: 'होम',
      directory: 'डायरेक्टरी',
      broadcast: 'ब्रॉडकास्ट',
      more: 'और',
      daily_bhav_highlights: 'डेली भाव हाइलाइट्स',
      todays_news: 'आज की ताज़ा खबर',
      select_region: 'एरिया चुनें',
      open_selector: 'सेलेक्टर खोलें',
      explore_segments: 'सेगमेंट्स देखें',
    },
  },
};

i18n.use(initReactI18next).init({
  resources,
  lng: 'hi',
  fallbackLng: 'en',
  interpolation: { escapeValue: false },
});

export default i18n;