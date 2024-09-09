// next.config.mjs
import { i18n } from './next-i18next.config.mjs';

/** @type {import('next').NextConfig} */
const nextConfig = {
  i18n:{
    locales: ['en', 'sk'],
    defaultLocale: 'en',
    localeDetection: false, 
  },
  images: {
    domains: ['images.unsplash.com', 'assets.aceternity.com'],
  },
};

export default nextConfig;
