import { ThemeProvider } from "@/components/theme/ThemeProvider";
import "@/styles/globals.css";
import type { AppProps } from "next/app";
import "aos/dist/aos.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}
