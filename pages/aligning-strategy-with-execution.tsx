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
        <title>
          {t("blog.posts.aligningStrategy.title")} — {t("blog.title")}
        </title>
        <meta
          name="description"
          content={t("blog.posts.aligningStrategy.excerpt")}
        />
      </Head>

      <SiteHeadder />

      <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Hero */}
        <section className="py-20 bg-linear-to-r from-indigo-600 to-pink-500 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              {t("blog.posts.aligningStrategy.title")}
            </h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto">
              {t("blog.posts.aligningStrategy.excerpt")}
            </p>

            <div className="mt-6 text-sm opacity-90">
              {t("blog.posts.aligningStrategy.author")} •{" "}
              {t("blog.posts.aligningStrategy.date")} •{" "}
              {t("blog.posts.aligningStrategy.readingMinutes")}{" "}
              {t("blog.readingUnit", "min read")}
            </div>
          </div>
        </section>

        {/* Article */}
        <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <article className="prose prose-lg dark:prose-invert bg-white dark:bg-gray-800 rounded-xl p-8 shadow">
              <Image
                src="/blog/strategy-execution-hero.jpg"
                alt="Strategy"
                width={1200}
                height={520}
                className="rounded-md mb-6 object-cover w-full h-64"
              />

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                <div>
                  <span className="inline-block mr-3">
                    {t("blog.posts.aligningStrategy.date")}
                  </span>
                  <span className="inline-block">•</span>
                  <span className="inline-block ml-3">
                    {t("blog.posts.aligningStrategy.readingMinutes")}{" "}
                    {t("blog.readingUnit")}
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <span className="inline-block px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">
                      {t("blog.tags.strategy")}
                    </span>
                    <span className="inline-block px-2 py-1 bg-indigo-100 text-indigo-700 text-xs rounded-full">
                      {t("blog.tags.execution")}
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-gray-100 dark:border-gray-700 bg-indigo-50 dark:bg-gray-800/40 p-4 mb-6">
                <div className="font-semibold text-indigo-700 dark:text-indigo-300">
                  {t("blog.postContent.aligningStrategy.quickSummary.heading")}
                </div>
                <div className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                  {t("blog.postContent.aligningStrategy.quickSummary.body")}
                </div>
              </div>

              <p className="lead">
                {t("blog.postContent.aligningStrategy.lead")}
              </p>

              <blockquote className="border-l-4 pl-4 italic text-lg text-gray-700 dark:text-gray-300 my-6">
                {t("blog.postContent.aligningStrategy.blockquote")}
              </blockquote>

              <ol className="list-decimal pl-6 space-y-6">
                {[1, 2, 3, 4, 5].map((i) => (
                  <li key={i}>
                    <p className="text-lg font-semibold">
                      {t(`blog.postContent.aligningStrategy.steps.${i}.title`)}
                    </p>
                    <p className="text-sm text-gray-700 dark:text-gray-300">
                      {t(`blog.postContent.aligningStrategy.steps.${i}.body`)}
                    </p>
                  </li>
                ))}
              </ol>

              <div className="mt-8">
                <Link
                  href="/contact-us"
                  className="inline-block px-5 py-3 bg-indigo-600 text-white rounded-md"
                >
                  {t("blog.postContent.aligningStrategy.cta")}
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
                    className="text-sm text-indigo-600 hover:underline"
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
                <div className="w-12 h-12 rounded-full bg-indigo-600 flex items-center justify-center text-white font-semibold">
                  {t("blog.author.jane.initials")}
                </div>
                <div>
                  <div className="font-semibold">
                    {t("blog.author.jane.name")}
                  </div>
                  <div className="text-sm text-gray-500">
                    {t("blog.author.jane.role")}
                  </div>
                </div>
              </div>

              <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                {t("blog.author.jane.bio")}
              </div>

              <div className="mt-6">
                <Link
                  href="/contact-us"
                  className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md"
                >
                  {t("blog.author.jane.cta")}
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
