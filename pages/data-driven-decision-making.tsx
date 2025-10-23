import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import SiteHeadder from "@/components/SiteHeadder";
import SiteFooter from "@/components/SiteFooter";

const Post: React.FC = () => {
  return (
    <>
      <Head>
        <title>
          Building data-driven decision making in mid-market firms — Insights
        </title>
        <meta
          name="description"
          content="How mid-market firms can build repeatable data-driven decision processes without excessive cost or complexity."
        />
      </Head>

      <SiteHeadder />

      <main className="min-h-screen caret-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Hero */}
        <section className="py-20 bg-linear-to-r from-sky-600 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Building data-driven decision making in mid-market firms
            </h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto">
              Practical, low-friction approaches to get reliable insights into
              customers, costs and growth — without a big data org.
            </p>

            <div className="mt-6 text-sm opacity-90">
              Enkonix • Oct 23, 2025 • 7 min read
            </div>
          </div>
        </section>

        {/* Article */}
        <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <article className="prose prose-lg dark:prose-invert bg-white dark:bg-gray-800 rounded-xl p-8 shadow">
              <Image
                src="/blog/data-decision-hero.jpg"
                alt="Data-driven decisions"
                width={1200}
                height={520}
                className="rounded-md mb-6 object-cover w-full h-64"
              />

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                <div>
                  <span className="inline-block mr-3">Oct 23, 2025</span>
                  <span className="inline-block">•</span>
                  <span className="inline-block ml-3">7 min read</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <span className="inline-block px-2 py-1 bg-sky-100 text-sky-700 text-xs rounded-full">
                      Data
                    </span>
                    <span className="inline-block px-2 py-1 bg-sky-100 text-sky-700 text-xs rounded-full">
                      Operations
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-gray-100 dark:border-gray-700 bg-sky-50 dark:bg-gray-800/40 p-4 mb-6">
                <div className="font-semibold text-sky-700 dark:text-sky-300">
                  In short
                </div>
                <div className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                  Start small: pick a repeatable decision, instrument the right
                  signal, assign an owner and iterate. This creates momentum
                  without heavy upfront investment.
                </div>
              </div>

              <p className="lead">
                Mid-market firms don't need a data science factory to make
                better decisions. The goal is repeatability: consistent signals,
                simple metrics and clear ownership.
              </p>

              <blockquote className="border-l-4 pl-4 italic text-lg text-gray-700 dark:text-gray-300 my-6">
                “Reliable data + clear ownership = faster, less risky
                decisions.”
              </blockquote>

              <h5 className="text-lg font-semibold">
                Five steps to get started
              </h5>
              <ol className="list-decimal pl-6 space-y-6">
                <li>
                  <p className="text-lg font-semibold">
                    Pick a high-value decision
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Find a recurring decision that impacts revenue, cost or
                    retention and that your teams make often — for example,
                    campaign budget allocation or pricing changes.
                  </p>
                </li>

                <li>
                  <p className="text-lg font-semibold">
                    Define a single metric
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Agree on one clear metric that represents success for the
                    decision. Keep it simple and measurable.
                  </p>
                </li>

                <li>
                  <p className="text-lg font-semibold">
                    Instrument minimal, accurate data
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Collect only what's necessary, add validation rules and make
                    the data accessible to the team that acts on it.
                  </p>
                </li>

                <li>
                  <p className="text-lg font-semibold">
                    Create a weekly feedback loop
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Deliver short dashboards or alerts focused on the metric,
                    trend and a suggested action — not a long report.
                  </p>
                </li>

                <li>
                  <p className="text-lg font-semibold">
                    Turn outcomes into templates
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    When a pattern works, create a template pipeline, dashboard
                    and runbook so other teams can reuse the approach.
                  </p>
                </li>
              </ol>

              <div className="mt-6">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  We can help map your first three decisions and deliver a 6–8
                  week pilot that demonstrates impact and builds capability.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact-us"
                  className="inline-block px-5 py-3 bg-sky-600 text-white rounded-md"
                >
                  Start a pilot
                </Link>
              </div>

              <hr className="my-8 border-gray-100 dark:border-gray-700" />

              <div className="flex items-center justify-between">
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Related posts
                </div>
                <div>
                  <Link
                    href="/blog"
                    className="text-sm text-sky-600 hover:underline"
                  >
                    See all insights
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
                  <div className="font-semibold">Enkonix Advisors</div>
                  <div className="text-sm text-gray-500">Data & Insights</div>
                </div>
              </div>

              <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                Practical help to build measurement, analytics and operational
                ownership so insights become decisions.
              </div>

              <div className="mt-6">
                <Link
                  href="/contact-us"
                  className="inline-block px-4 py-2 bg-sky-600 text-white rounded-md"
                >
                  Talk to an expert
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
