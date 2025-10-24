import React from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import AOS from "aos";
import { useTranslation } from "react-i18next";

import SiteHeadder from "@/components/SiteHeadder";
import SiteFooter from "@/components/SiteFooter";

const BlogPage: React.FC = () => {
  React.useEffect(() => {
    AOS.init({});
  }, []);

  const { t } = useTranslation();

  const blogs = [
    {
      slug: "aligning-strategy-with-execution",
      title: t("blog.posts.aligningStrategy.title"),
      excerpt: t("blog.posts.aligningStrategy.excerpt"),
      date: t("blog.posts.aligningStrategy.date"),
      author: t("blog.posts.aligningStrategy.author"),
      image:
        "https://i.pinimg.com/1200x/ec/5a/e9/ec5ae9a3394e4e2ea97c4c4c62ca2d90.jpg",
      readingMinutes: Number(t("blog.posts.aligningStrategy.readingMinutes")),
    },
    {
      slug: "modern-cloud-adoption",
      title: t("blog.posts.modernCloudAdoption.title"),
      excerpt: t("blog.posts.modernCloudAdoption.excerpt"),
      date: t("blog.posts.modernCloudAdoption.date"),
      author: t("blog.posts.modernCloudAdoption.author"),
      image:
        "https://i.pinimg.com/1200x/40/8e/c4/408ec41ea6b4e865fa4571f224ca535a.jpg",
      readingMinutes: Number(
        t("blog.posts.modernCloudAdoption.readingMinutes"),
      ),
    },
    {
      slug: "data-driven-decision-making",
      title: t("blog.posts.dataDrivenDecisionMaking.title"),
      excerpt: t("blog.posts.dataDrivenDecisionMaking.excerpt"),
      date: t("blog.posts.dataDrivenDecisionMaking.date"),
      author: t("blog.posts.dataDrivenDecisionMaking.author"),
      image:
        "https://i.pinimg.com/736x/94/8d/39/948d394ec9c7040198b4d05fc4f78e5a.jpg",
      readingMinutes: Number(
        t("blog.posts.dataDrivenDecisionMaking.readingMinutes"),
      ),
    },
  ];

  const techFeatures = [
    {
      key: "cloud-migration",
      title: t("blog.technology.features.cloud-migration.title"),
      desc: t("blog.technology.features.cloud-migration.desc"),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={25}
          height={25}
          viewBox="0 0 32 32"
        >
          <g fill="none">
            <path
              fill="url(#SVGbB6uibRC)"
              d="M2 19a6 6 0 0 0 6 6h16a6 6 0 1 0-.062-12a8.001 8.001 0 0 0-15.876 0H8a6 6 0 0 0-6 6"
            ></path>
            <path
              fill="url(#SVGQCIgjd6d)"
              fillOpacity={0.3}
              d="M14 19a6 6 0 1 1-12 0a6 6 0 0 1 12 0"
            ></path>
            <path
              fill="url(#SVGx5L2MeJh)"
              fillOpacity={0.3}
              d="M16 22a8 8 0 1 0-7.938-9a6 6 0 0 1 5.359 8.575A8 8 0 0 0 16 22"
            ></path>
            <path
              fill="url(#SVGkOqQn8Jo)"
              d="M16 22a8 8 0 1 0-7.938-9a6 6 0 0 1 5.359 8.575A8 8 0 0 0 16 22"
            ></path>
            <path
              fill="url(#SVGRmaGGdOY)"
              fillOpacity={0.5}
              d="M2 19a6 6 0 0 0 6 6h16a6 6 0 1 0-.062-12a8.001 8.001 0 0 0-15.876 0H8a6 6 0 0 0-6 6"
            ></path>
            <defs>
              <linearGradient
                id="SVGbB6uibRC"
                x1={3}
                x2={15.015}
                y1={9.563}
                y2={27.959}
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#0fafff"></stop>
                <stop offset={1} stopColor="#367af2"></stop>
              </linearGradient>
              <linearGradient
                id="SVGQCIgjd6d"
                x1={2}
                x2={10.09}
                y1={15.056}
                y2={22.215}
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fff"></stop>
                <stop offset={1} stopColor="#fcfcfc" stopOpacity={0}></stop>
              </linearGradient>
              <linearGradient
                id="SVGx5L2MeJh"
                x1={10.825}
                x2={12.942}
                y1={6.9}
                y2={17.931}
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="#fff"></stop>
                <stop offset={1} stopColor="#fcfcfc" stopOpacity={0}></stop>
              </linearGradient>
              <radialGradient
                id="SVGkOqQn8Jo"
                cx={0}
                cy={0}
                r={1}
                gradientTransform="matrix(8.98356 -3.8 3.39718 8.03127 8.686 19.1)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset={0.412} stopColor="#2c87f5"></stop>
                <stop offset={1} stopColor="#2c87f5" stopOpacity={0}></stop>
              </radialGradient>
              <radialGradient
                id="SVGRmaGGdOY"
                cx={0}
                cy={0}
                r={1}
                gradientTransform="matrix(10.79167 21.05115 -154.80576 79.35965 14.833 4.813)"
                gradientUnits="userSpaceOnUse"
              >
                <stop offset={0.5} stopColor="#dd3ce2" stopOpacity={0}></stop>
                <stop offset={1} stopColor="#dd3ce2"></stop>
              </radialGradient>
            </defs>
          </g>
        </svg>
      ),
    },
    {
      key: "security-ops",
      title: t("blog.technology.features.security-ops.title"),
      desc: t("blog.technology.features.security-ops.desc"),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={25}
          height={25}
          viewBox="0 0 48 48"
        >
          <path
            fill="#424242"
            d="M24 4c-5.5 0-10 4.5-10 10v4h4v-4c0-3.3 2.7-6 6-6s6 2.7 6 6v4h4v-4c0-5.5-4.5-10-10-10"
          ></path>
          <path
            fill="#fb8c00"
            d="M36 44H12c-2.2 0-4-1.8-4-4V22c0-2.2 1.8-4 4-4h24c2.2 0 4 1.8 4 4v18c0 2.2-1.8 4-4 4"
          ></path>
          <circle cx={24} cy={31} r={3} fill="#c76e00"></circle>
        </svg>
      ),
    },
    {
      key: "platform-eng",
      title: t("blog.technology.features.platform-eng.title"),
      desc: t("blog.technology.features.platform-eng.desc"),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={25}
          height={25}
          viewBox="0 0 128 128"
        >
          <path
            fill="#82aec0"
            d="M124 71.85v-15.7c0-.59-.45-1.09-1.03-1.15l-17.83-1.89c-.47-.05-.85-.38-.98-.83c-.86-2.95-2.03-5.76-3.48-8.39c-.23-.41-.19-.92.11-1.28l11.28-13.94c.37-.46.34-1.13-.08-1.54l-11.1-11.1a1.15 1.15 0 0 0-1.54-.08L85.39 27.22c-.37.3-.87.33-1.28.11a41.8 41.8 0 0 0-8.39-3.48c-.45-.13-.78-.51-.83-.98L73 5.03C72.94 4.45 72.44 4 71.85 4h-15.7c-.59 0-1.09.45-1.15 1.03l-1.89 17.83c-.05.47-.38.85-.83.98c-2.95.86-5.76 2.03-8.39 3.48c-.41.23-.92.19-1.28-.11L28.67 15.94a1.15 1.15 0 0 0-1.54.08l-11.1 11.1a1.15 1.15 0 0 0-.08 1.54L27.23 42.6c.3.37.33.87.11 1.28a41.8 41.8 0 0 0-3.48 8.39c-.13.45-.51.78-.98.83L5.03 55c-.58.06-1.03.56-1.03 1.15v15.7c0 .59.45 1.09 1.03 1.15l17.83 1.89c.47.05.85.38.98.83c.86 2.95 2.03 5.76 3.48 8.39c.23.41.19.92-.11 1.28L15.94 99.33c-.37.46-.34 1.13.08 1.54l11.1 11.1c.42.42 1.08.45 1.54.08l13.94-11.28c.37-.3.87-.33 1.28-.11c2.64 1.45 5.45 2.62 8.39 3.48c.45.13.78.51.83.98l1.9 17.85c.06.59.56 1.03 1.15 1.03h15.7c.59 0 1.09-.45 1.15-1.03l1.89-17.83c.05-.47.38-.85.83-.98c2.95-.86 5.76-2.03 8.39-3.48c.41-.23.92-.19 1.28.11l13.94 11.28c.46.37 1.13.34 1.54-.08l11.1-11.1c.42-.42.45-1.08.08-1.54l-11.28-13.94c-.3-.37-.33-.87-.11-1.28c1.45-2.64 2.62-5.45 3.48-8.39c.13-.45.51-.78.98-.83L122.97 73c.58-.06 1.03-.56 1.03-1.15m-60 3.43c-6.23 0-11.28-5.05-11.28-11.28S57.77 52.72 64 52.72S75.28 57.77 75.28 64S70.23 75.28 64 75.28"
          ></path>
          <path
            fill="#2f7889"
            d="M80.56 49.48c3.67 4.18 5.78 9.77 5.43 15.85c-.65 11.16-9.83 20.19-21 20.68c-4.75.21-9.18-1.09-12.86-3.45c-.28-.18-.58.2-.34.44a22.41 22.41 0 0 0 17.85 6.67c10.78-.85 19.56-9.5 20.55-20.27c.77-8.36-3.06-15.87-9.23-20.33c-.29-.2-.62.15-.4.41"
          ></path>
          <path
            fill="#b9e4ea"
            d="M43.87 65.32c-.67-13.15 7.83-22.79 20.01-22.79c.65 0 1.68 0 2.48.92c1.01 1.18 1.1 2.6 0 3.77c-.81.86-1.95.92-2.53 1c-12.3 1.59-15.18 9.35-15.83 16.77c-.03.33.06 2.35-1.71 2.56c-2.15.25-2.41-1.91-2.42-2.23"
          ></path>
          <path
            fill="#94d1e0"
            d="M25.24 65.87c-.01-22.03 15.9-40.19 38.13-41.05c.68-.03 2.45 0 3.55.99c1.01.91 1.38 2.51.79 3.82c-.95 2.11-2.85 2.07-3.36 2.09c-18.51.66-34.18 15.73-34.19 33.95c0 .29-.05.58-.15.84l-.1.25c-.76 1.98-3.52 2.09-4.43.18c-.15-.34-.24-.7-.24-1.07"
          ></path>
        </svg>
      ),
    },
    {
      key: "resilience-cost",
      title: t("blog.technology.features.resilience-cost.title"),
      desc: t("blog.technology.features.resilience-cost.desc"),
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={25}
          height={25}
          viewBox="0 0 32 32"
        >
          <g fill="none">
            <path
              fill="#e1d8ec"
              d="M2 6a4 4 0 0 1 4-4h20a4 4 0 0 1 3.731 2.556l-.585 1.776l.854.846V26a4 4 0 0 1-4 4H6a4 4 0 0 1-3.888-3.056l.67-1.893l-.782-.71z"
            ></path>
            <path
              fill="#b4acbc"
              d="M10 11v10H2v1h8v8h1v-8h10v8h1v-8h8v-1h-8V11h8v-1h-8V2h-1v8H11V2h-1v8H2v1zm1 0h10v10H11z"
            ></path>
            <path
              fill="#319fe7"
              d="M2.12 26.976A4 4 0 0 1 2 26v-1.701l7.062-6.973a2.2 2.2 0 0 1 3.06-.03l2.15 2.04a.5.5 0 0 0 .698-.009L29.722 4.531c.18.455.278.95.278 1.469v1.187L16.132 20.902a2.2 2.2 0 0 1-3.052.04l-2.15-2.017a.5.5 0 0 0-.694.01z"
            ></path>
          </g>
        </svg>
      ),
    },
  ] as const;

  return (
    <>
      <Head>
        <title>{t("blog.title")} — Consulting / Business Solutions</title>
        <meta name="description" content={t("blog.description")} />
      </Head>

      <SiteHeadder />

      <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100">
        {/* Hero */}
        <section className="py-20 bg-linear-to-r min-h-screen flex justify-center items-center from-indigo-600 to-pink-500 text-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              {t("blog.heroTitle")}
            </h1>
            <p className="mt-4 max-w-2xl mx-auto">{t("blog.heroParagraph")}</p>
          </div>
        </section>

        {/* Featured posts */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6">{t("blog.latestPosts")}</h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {blogs.map((b) => (
                <article
                  key={b.slug}
                  className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="relative h-44">
                    <Image
                      src={b.image}
                      alt={b.title}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute left-4 top-4 bg-white/90 dark:bg-gray-800/80 px-3 py-1 rounded-full text-xs font-medium">
                      {b.date}
                    </div>
                  </div>

                  <div className="p-5">
                    <h3 className="font-bold text-lg leading-snug">
                      {b.title}
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                      {b.excerpt}
                    </p>

                    <div className="mt-4 flex items-center justify-between">
                      <div className="text-xs text-gray-500">
                        {b.author} • {b.readingMinutes} min
                      </div>
                      <Link
                        href={`/${b.slug}`}
                        className="inline-flex items-center gap-2 px-3 py-2 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md text-sm"
                      >
                        {t("blog.read")}
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <polyline points="9 18 15 12 9 6"></polyline>
                        </svg>
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Section: Consulting playbooks (new style) */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div data-aos="fade-up">
                <div className="flex items-start gap-4">
                  <div className="w-1 h-14 bg-indigo-600 rounded" aria-hidden />
                  <div>
                    <h3 className="text-2xl font-bold">
                      {t("blog.playbooks.heading")}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-3">
                      {t("blog.playbooks.paragraph")}
                    </p>
                  </div>
                </div>

                <ul className="mt-6 space-y-3">
                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-semibold">
                      1
                    </div>
                    <div>
                      <div className="font-semibold">
                        {t("blog.playbooks.items.1.title")}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {t("blog.playbooks.items.1.desc")}
                      </div>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-semibold">
                      2
                    </div>
                    <div>
                      <div className="font-semibold">
                        {t("blog.playbooks.items.2.title")}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {t("blog.playbooks.items.2.desc")}
                      </div>
                    </div>
                  </li>

                  <li className="flex items-start gap-3">
                    <div className="w-8 h-8 rounded-full bg-indigo-100 text-indigo-600 flex items-center justify-center font-semibold">
                      3
                    </div>
                    <div>
                      <div className="font-semibold">
                        {t("blog.playbooks.items.3.title")}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-300">
                        {t("blog.playbooks.items.3.desc")}
                      </div>
                    </div>
                  </li>
                </ul>

                <div className="mt-6">
                  <Link
                    href="/contact-us"
                    className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-md"
                  >
                    {t("blog.playbooks.cta")}
                  </Link>
                </div>
              </div>

              <div
                data-aos="zoom-in"
                className="flex justify-center lg:justify-end"
              >
                <div className="w-full max-w-md rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="https://i.pinimg.com/1200x/e7/32/4b/e7324bcd2be8bf3ed767315e3c93eca4.jpg"
                    alt="Playbooks"
                    width={720}
                    height={480}
                    className="object-cover w-full h-64 lg:h-80"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Technology & Cloud (new) */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div
                data-aos="zoom-in"
                className="flex justify-center lg:justify-end"
              >
                <div className="w-full max-w-md rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="https://i.pinimg.com/736x/cd/13/c9/cd13c9f376265bf5689348298c839687.jpg"
                    alt="Cloud"
                    width={720}
                    height={480}
                    className="object-cover w-full h-64 lg:h-100"
                  />
                </div>
              </div>
              <div data-aos="fade-up">
                <div className="flex items-start gap-4">
                  <div className="w-1 h-14 bg-indigo-600 rounded" aria-hidden />
                  <div>
                    <h3 className="text-2xl font-bold">
                      {t("blog.technology.heading")}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 mt-3">
                      {t("blog.technology.paragraph")}
                    </p>
                  </div>
                </div>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {techFeatures.map((f) => (
                    <div
                      key={f.key}
                      className="p-4 bg-gray-50 dark:bg-gray-800 rounded-lg"
                    >
                      <div className="flex items-start gap-3">
                        <span
                          className={`inline-flex w-10 h-10 rounded items-center justify-center bg-[#c7c3c3]  dark:bg-white/15  `}
                          aria-hidden
                        >
                          <span className="w-6 h-6">{f.icon}</span>
                        </span>

                        <div>
                          <div className="font-semibold">{f.title}</div>
                          <div className="text-sm text-gray-600 dark:text-gray-300">
                            {f.desc}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-6">
                  <Link
                    href="/contact-us"
                    className="inline-block px-6 py-3 bg-indigo-600 text-white rounded-md"
                  >
                    {t("blog.technology.cta")}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section: Meet our clients */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="  mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center justify-between">
              <div>
                <h3 className="text-2xl font-bold">
                  {t("blog.clients.heading")}
                </h3>
                <p className="text-gray-700 dark:text-gray-300 mt-2 max-w-xl">
                  {t("blog.clients.paragraph")}
                </p>
              </div>
              <div className="hidden sm:flex gap-4">
                <Link
                  href="/contact-us"
                  className="px-4 py-2 bg-indigo-600 text-white rounded-md"
                >
                  {t("blog.clients.workWithUs")}
                </Link>
              </div>
            </div>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
              {[
                {
                  logo: "https://randomuser.me/api/portraits/women/44.jpg",
                  quote:
                    "They helped us reduce cloud costs by 30% while improving availability.",
                  name: "Emma R",
                  org: "Fintech Co",
                },
                {
                  logo: "https://randomuser.me/api/portraits/women/45.jpg",
                  quote:
                    "A pragmatic roadmap that the whole leadership team could align behind.",
                  name: "Liam H",
                  org: "Retailer X",
                },
                {
                  logo: "https://randomuser.me/api/portraits/women/35.jpg",
                  quote:
                    "Delivered the transformation with minimal operational disruption.",
                  name: "Priya S",
                  org: "HealthTech Ltd",
                },
                {
                  logo: "https://randomuser.me/api/portraits/men/35.jpg",
                  quote: "Practical and outcomes-focused — delivered quickly.",
                  name: "Owen K",
                  org: "Logistics Co",
                },
              ].map((c) => (
                <div
                  key={c.logo}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow p-6 hover:shadow-lg transition-transform transform hover:-translate-y-1"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:gap-6">
                    <div className="shrink-0">
                      <div className="w-16 h-16 rounded-full bg-linear-to-br from-indigo-500 to-pink-500 p-1">
                        <div className="bg-white dark:bg-gray-900 rounded-full p-2">
                          <Image
                            src={c.logo}
                            alt={c.org}
                            width={64}
                            height={32}
                            className="object-cover object-center   rounded-full"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="mt-4 md:mt-0 md:flex-1">
                      <p className="text-gray-700 dark:text-gray-300">
                        “{c.quote}”
                      </p>
                      <div className="mt-4 text-sm text-gray-500">
                        {c.name} — {c.org}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Section: CTA */}
        <section className="py-20 bg-indigo-600 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              {t("blog.cta.heading")}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-indigo-100">
              {t("blog.cta.paragraph")}
            </p>

            <div className="mt-8 flex items-center justify-center gap-4">
              <Link
                href="/contact-us"
                className="px-6 py-3 bg-white text-indigo-600 rounded-md font-semibold"
              >
                {t("blog.cta.bookDiscovery")}
              </Link>
              <Link
                href="/services"
                className="px-6 py-3 border border-white/30 rounded-md text-white"
              >
                {t("blog.cta.exploreServices")}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
};

export default BlogPage;
