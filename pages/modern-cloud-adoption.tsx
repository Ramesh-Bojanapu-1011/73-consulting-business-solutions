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
        <title>Modern cloud adoption without the usual risks — Insights</title>
        <meta
          name="description"
          content="Practical guidance for adopting cloud platforms quickly while keeping costs, security and disruption under control."
        />
      </Head>

      <SiteHeadder />

      <main className="min-h-screen caret-transparent bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Hero */}
        <section className="py-20 bg-linear-to-r from-sky-600 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Modern cloud adoption without the usual risks
            </h1>
            <p className="mt-4 text-lg max-w-2xl mx-auto">
              Move to cloud faster and safer — minimise cost surprises, reduce
              security gaps and keep your teams productive during change.
            </p>

            <div className="mt-6 text-sm opacity-90">
              Enkonix • Oct 23, 2025 • 6 min read
            </div>
          </div>
        </section>

        {/* Article */}
        <div className="max-w-5xl mx-auto px-6 py-16 grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <article className="prose prose-lg dark:prose-invert bg-white dark:bg-gray-800 rounded-xl p-8 shadow">
              <Image
                src="/blog/cloud-illustration.jpg"
                alt="Cloud adoption"
                width={1200}
                height={520}
                className="rounded-md mb-6 object-cover w-full h-64"
              />

              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 text-sm text-gray-500 dark:text-gray-400 mb-4">
                <div>
                  <span className="inline-block mr-3">Oct 23, 2025</span>
                  <span className="inline-block">•</span>
                  <span className="inline-block ml-3">6 min read</span>
                </div>
                <div className="flex items-center gap-3">
                  <div className="flex gap-2">
                    <span className="inline-block px-2 py-1 bg-sky-100 text-sky-700 text-xs rounded-full">
                      Cloud
                    </span>
                    <span className="inline-block px-2 py-1 bg-sky-100 text-sky-700 text-xs rounded-full">
                      Security
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-lg border border-gray-100 dark:border-gray-700 bg-sky-50 dark:bg-gray-800/40 p-4 mb-6">
                <div className="font-semibold text-sky-700 dark:text-sky-300">
                  In short
                </div>
                <div className="text-sm text-gray-700 dark:text-gray-300 mt-2">
                  Practical steps to adopt cloud platforms with limited
                  disruption — plan for cost, automate governance and pilot at
                  pace.
                </div>
              </div>

              <p className="lead">
                Cloud offers speed and agility, but poor planning introduces
                cost, security and operational risks. This guide shows a
                low-friction adoption path that protects your business while
                enabling rapid value delivery.
              </p>

              <blockquote className="border-l-4 pl-4 italic text-lg text-gray-700 dark:text-gray-300 my-6">
                “Pilot small, automate fast, and measure what matters — not
                everything.”
              </blockquote>

              <h5 className="text-lg font-semibold">Five pragmatic steps</h5>
              <ol className="list-decimal pl-6 space-y-6">
                <li>
                  <p className="text-lg font-semibold">
                    Set outcome-based pilots
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Pick a narrow, valuable use-case (e.g., an analytics
                    pipeline or a customer-facing microservice). Define clear
                    success metrics and a 6–12 week timescale.
                  </p>
                </li>

                <li>
                  <p className="text-lg font-semibold">
                    Automate governance early
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Use IaC and policy-as-code to enforce baseline security,
                    permissions and cost controls from day one.
                  </p>
                </li>

                <li>
                  <p className="text-lg font-semibold">
                    Measure cost and risk continuously
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Track spend per pilot, set budget alerts and run
                    post-mortems for expensive resources. Treat cost as a
                    first-class metric.
                  </p>
                </li>

                <li>
                  <p className="text-lg font-semibold">Teach teams by doing</p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Embed platform engineers with product teams during pilots so
                    knowledge and ownership transfer naturally.
                  </p>
                </li>

                <li>
                  <p className="text-lg font-semibold">
                    Plan the roll‑out, not the lift
                  </p>
                  <p className="text-sm text-gray-700 dark:text-gray-300">
                    Move from pilot to scaled adoption with a runway: template
                    projects, shared platform services and a clear migration
                    roadmap.
                  </p>
                </li>
              </ol>

              <div className="mt-6">
                <p className="text-sm text-gray-700 dark:text-gray-300">
                  If you want, we can sketch a pilot for your top use-case and
                  deliver a 6-week proof of value.
                </p>
              </div>

              <div className="mt-8">
                <Link
                  href="/contact-us"
                  className="inline-block px-5 py-3 bg-sky-600 text-white rounded-md"
                >
                  Request a pilot
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
                  <div className="text-sm text-gray-500">
                    Cloud & Platform team
                  </div>
                </div>
              </div>

              <div className="mt-4 text-sm text-gray-600 dark:text-gray-300">
                We help teams adopt cloud platforms with pragmatic delivery and
                strong guardrails — small pilots that scale.
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
