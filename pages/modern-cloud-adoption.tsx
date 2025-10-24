import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import SiteHeadder from "@/components/SiteHeadder";
import SiteFooter from "@/components/SiteFooter";
import { useTranslation } from "react-i18next";

const Post: React.FC = () => {
  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("blog.posts.modernCloudAdoption.title")}</title>
        <meta
          name="description"
          content={t("blog.posts.modernCloudAdoption.excerpt")}
        />
      </Head>

      <SiteHeadder />

      <main className="min-h-screen caret-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Hero */}
        <section className="py-20 bg-linear-to-r from-sky-600 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              {t("blog.posts.modernCloudAdoption.title")}
            </h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto">
              {t("blog.posts.modernCloudAdoption.excerpt")}
            </p>

            <div className="mt-6 text-sm opacity-90">
              {`Enkonix • ${t("blog.posts.modernCloudAdoption.date")} • ${t(
                "blog.posts.modernCloudAdoption.readingMinutes",
              )} ${t("blog.readingUnit")}`}
            </div>
          </div>
        </section>

        {/* Article */}
        <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <article className="prose prose-lg dark:prose-invert bg-white dark:bg-gray-800 rounded-xl p-8 shadow">
              <Image
                src="/blog/cloud-illustration.jpg"
                alt={t("blog.posts.modernCloudAdoption.imageAlt")}
                width={1200}
                height={520}
                className="rounded-md mb-6 object-cover w-full h-64"
              />

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                <div>
                  <span className="inline-block mr-3">
                    {t("blog.posts.modernCloudAdoption.date")}
                  </span>
                  <span className="inline-block">•</span>
                  <span className="inline-block ml-3">
                    {`${t("blog.posts.modernCloudAdoption.readingMinutes")} ${t(
                      "blog.readingUnit",
                    )}`}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <span className="inline-block px-2 py-1 bg-sky-100 text-sky-700 text-xs rounded-full">
                      {t("blog.tags.cloud")}
                    </span>
                    <span className="inline-block px-2 py-1 bg-sky-100 text-sky-700 text-xs rounded-full">
                      {t("blog.tags.security")}
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-gray-100 dark:border-gray-700 bg-sky-50 dark:bg-gray-800/40 p-4 mb-6">
                <div className="font-semibold text-sky-700 dark:text-sky-300">
                  {t(
                    "blog.postContent.modernCloudAdoption.quickSummary.heading",
                  )}
                </div>
                <div className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                  {t("blog.postContent.modernCloudAdoption.quickSummary.body")}
                </div>
              </div>

              <p className="lead">
                {t("blog.postContent.modernCloudAdoption.lead")}
              </p>

              <blockquote className="border-l-4 pl-4 italic text-lg text-gray-700 dark:text-gray-300 my-6">
                {t("blog.postContent.modernCloudAdoption.blockquote")}
              </blockquote>

              <h5 className="text-lg font-semibold">
                {t("blog.postContent.modernCloudAdoption.stepsHeading")}
              </h5>
              <ol className="list-decimal pl-6 space-y-6">
                <li>
                  <p className="text-lg font-semibold">
                    {t("blog.postContent.modernCloudAdoption.steps.1.title")}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {t("blog.postContent.modernCloudAdoption.steps.1.body")}
                  </p>
                </li>

                <li>
                  <p className="text-lg font-semibold">
                    {t("blog.postContent.modernCloudAdoption.steps.2.title")}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {t("blog.postContent.modernCloudAdoption.steps.2.body")}
                  </p>
                </li>

                <li>
                  <p className="text-lg font-semibold">
                    {t("blog.postContent.modernCloudAdoption.steps.3.title")}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {t("blog.postContent.modernCloudAdoption.steps.3.body")}
                  </p>
                </li>

                <li>
                  <p className="text-lg font-semibold">
                    {t("blog.postContent.modernCloudAdoption.steps.4.title")}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {t("blog.postContent.modernCloudAdoption.steps.4.body")}
                  </p>
                </li>

                <li>
                  <p className="text-lg font-semibold">
                    {t("blog.postContent.modernCloudAdoption.steps.5.title")}
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    {t("blog.postContent.modernCloudAdoption.steps.5.body")}
                  </p>
                </li>
              </ol>

              <div className="mt-6">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  {t("blog.postContent.modernCloudAdoption.postscript")}
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact-us"
                  className="inline-block px-5 py-3 bg-sky-600 text-white rounded-md"
                >
                  {t("blog.postContent.modernCloudAdoption.cta")}
                </Link>
              </div>

              <hr className="my-8 border-gray-100 dark:border-gray-700" />

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {t("blog.related.heading")}
                </div>
                <div>
                  <Link
                    href="/blog"
                    className="text-sm text-sky-600 hover:underline"
                  >
                    {t("blog.related.seeAll")}
                  </Link>
                </div>
              </div>
            </article>
          </div>

          <aside className="lg:col-span-1">
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-sky-600 flex items-center justify-center text-white font-semibold">
                  EA
                </div>
                <div>
                  <div className="font-semibold">
                    {t("blog.sidebar.enkonix.title")}
                  </div>
                  <div className="text-sm text-gray-500">
                    {t("blog.sidebar.enkonix.role")}
                  </div>
                </div>
              </div>

              <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                {t("blog.sidebar.enkonix.blurb")}
              </div>

              <div className="mt-6">
                <Link
                  href="/contact-us"
                  className="inline-block px-4 py-2 bg-sky-600 text-white rounded-md"
                >
                  {t("blog.sidebar.enkonix.cta")}
                </Link>
              </div>
            </div>
          </aside>
        </div>
      </main>

      <SiteFooter />
    </>
  );
};

export default Post;
