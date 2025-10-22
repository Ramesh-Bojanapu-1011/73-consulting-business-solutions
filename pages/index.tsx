import Head from "next/head";
import SiteHeadder from "@/components/SiteHeadder";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Consulting / Business Solutions</title>
        <meta
          name="description"
          content="Consulting and business transformation services"
        />
      </Head>

      <main className="min-h-screen flex justify-center items-center bg-linear-to-b from-white to-gray-50 dark:from-gray-900 dark:to-gray-800">
        <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <h1 className="text-4xl md:text-5xl font-extrabold mb-6 text-gray-900 dark:text-white">
            Consulting & Business Solutions
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-300 mb-8">
            We help organizations transform operations, modernize technology,
            and accelerate growth.
          </p>

          <div className="flex items-center justify-center gap-4">
            <Link
              href="/auth"
              className="px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md shadow"
            >
              Get started
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
