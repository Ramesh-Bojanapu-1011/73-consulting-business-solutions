import { ThemeProvider } from "@/components/theme/ThemeProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "aos/dist/aos.css";
import i18n from "@/i18n";
import React from "react";

export default function App({ Component, pageProps }: AppProps) {
  const [langReady, setLangReady] = React.useState(false);
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("selectedLanguage");
      if (savedLang === "en") i18n.changeLanguage("en");
      else if (savedLang === "ar") i18n.changeLanguage("ar");
      else if (savedLang === "he") i18n.changeLanguage("he");
      setLangReady(true);
    }
  }, [i18n.language]);
  if (!langReady) return null;
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
