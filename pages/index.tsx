import Head from "next/head";
import SiteHeadder from "@/components/SiteHeadder";
// import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";
import { useTranslation } from "react-i18next";

export default function Home() {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("index.title")} </title>
        <meta name="description" content={t("index.description")} />
      </Head>

      <main className="min-h-screen flex justify-center items-center bg-linear-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white">
            {t("index.heading")}
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            {t("index.subheading")}
          </p>

          <div className="flex items-center justify-center gap-4">
            <Link
              href="/auth"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md shadow"
            >
              {t("index.cta")}
            </Link>
          </div>
        </section>
      </main>

      {/* <SiteFooter /> */}
    </>
  );
}
