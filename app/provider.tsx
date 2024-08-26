"use client";

import { ThemeProvider as NextThemesProvider } from "next-themes";
import { appWithTranslation } from 'next-i18next';
import type { AppProps } from 'next/app';

// Define a component for your app
const MyApp = ({ Component, pageProps }: AppProps) => (
  <NextThemesProvider>
    <Component {...pageProps} />
  </NextThemesProvider>
);

// Wrap the component with appWithTranslation
export default appWithTranslation(MyApp);
