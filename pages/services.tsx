import React from "react";
import Head from "next/head";
import Link from "next/link";
import { useTranslation } from "react-i18next";
import Image from "next/image";
import AOS from "aos";

import SiteHeadder from "@/components/SiteHeadder";
import SiteFooter from "@/components/SiteFooter";

const ServicesPage: React.FC = () => {
  const carouselRef = React.useRef<HTMLDivElement | null>(null);
  const pauseRef = React.useRef(false);
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const currentIndexRef = React.useRef<number>(0);

  React.useEffect(() => {
    AOS.init({ duration: 800 });

    // interval-based auto-advance (advances one slide every 3.5s)
    let intervalId: NodeJS.Timeout | null = null;

    function startAuto() {
      intervalId = setInterval(() => {
        const el = carouselRef.current;
        if (!el || pauseRef.current) return;
        const len = el.children.length;
        if (!len) return;
        const nextIdx = (currentIndexRef.current + 1) % len;
        scrollToIndex(nextIdx);
      }, 3500);
    }

    startAuto();

    // center the initial item once mounted
    setTimeout(() => scrollToIndex(0), 150);

    return () => {
      if (intervalId) clearInterval(intervalId);
    };
  }, []);

  const { t } = useTranslation();

  // compute index from scroll position
  const onScroll = React.useCallback(() => {
    const el = carouselRef.current;
    if (!el) return;
    const children = Array.from(el.children) as HTMLElement[];
    if (!children.length) return;
    const center = el.scrollLeft + el.clientWidth / 2;
    let nearest = 0;
    let nearestDist = Infinity;
    children.forEach((c, i) => {
      const rect = c.offsetLeft + c.offsetWidth / 2;
      const dist = Math.abs(center - rect);
      if (dist < nearestDist) {
        nearestDist = dist;
        nearest = i;
      }
    });
    currentIndexRef.current = nearest;
    setCurrentIndex(nearest);
  }, []);

  // prev / next controls
  const scrollToIndex = (i: number) => {
    const el = carouselRef.current;
    if (!el) return;
    const child = el.children[i] as HTMLElement | undefined;
    if (!child) return;
    pauseRef.current = true;

    // compute target left so the child is centered in the container
    const containerCenter = el.clientWidth / 2;
    const childCenter = child.offsetLeft + child.offsetWidth / 2;
    const targetLeft = Math.max(0, childCenter - containerCenter);

    el.scrollTo({ left: targetLeft, behavior: "smooth" });
    currentIndexRef.current = i;
    setCurrentIndex(i);
    setTimeout(() => (pauseRef.current = false), 1000);
  };

  const prev = () => {
    const el = carouselRef.current;
    if (!el) return;
    const idx = Math.max(0, currentIndex - 1);
    scrollToIndex(idx);
  };

  const next = () => {
    const el = carouselRef.current;
    if (!el) return;
    const idx = Math.min(el.children.length - 1, currentIndex + 1);
    scrollToIndex(idx);
  };

  const services = [
    {
      slug: "strategy-&-planning",
      title: t("services.items.strategy.title"),
      short: t("services.items.strategy.short"),
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 24 24"
        >
          <rect width="24" height="24" fill="none" />
          <g fill="none">
            <path fill="#78eb7b" d="M4 23a3 3 0 1 0 0-6a3 3 0 0 0 0 6" />
            <path
              fill="#c9f7ca"
              d="M4 18.96a2.99 2.99 0 0 1 2.822 2.02c.114-.315.175-.646.178-.98a3 3 0 0 0-6 0c.003.334.063.666.178.98A2.99 2.99 0 0 1 4 18.96"
            />
            <path
              stroke="#191919"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M4 23a3 3 0 1 0 0-6a3 3 0 0 0 0 6"
              stroke-width="1"
            />
            <path fill="#ff808c" d="M9 17h6v6H9z" />
            <path fill="#ffbfc5" d="M9 23v-6h6z" />
            <path
              stroke="#191919"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 17h6v6H9z"
              stroke-width="1"
            />
            <path fill="#66e1ff" d="m20 17l-3 6h6z" />
            <path fill="#c2f3ff" d="m20 17l-3 6h3z" />
            <path
              stroke="#191919"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m20 17l-3 6h6zm-6.5-5h-3"
              stroke-width="1"
            />
            <path
              fill="#ffef5e"
              d="M15 6.5a3.09 3.09 0 0 0-3-3a3.09 3.09 0 0 0-3 3A2.94 2.94 0 0 0 10.5 9v1h3V9A2.94 2.94 0 0 0 15 6.5"
            />
            <path
              fill="#fff9bf"
              d="M12 5.664a3.09 3.09 0 0 1 2.755 1.887c.147-.332.23-.688.245-1.05a3.09 3.09 0 0 0-3-3a3.09 3.09 0 0 0-3 3a2.9 2.9 0 0 0 .245 1.051A3.09 3.09 0 0 1 12 5.664"
            />
            <path
              stroke="#191919"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15 6.5a3.09 3.09 0 0 0-3-3a3.09 3.09 0 0 0-3 3A2.94 2.94 0 0 0 10.5 9v1h3V9A2.94 2.94 0 0 0 15 6.5M4 17v-2.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 .5.5V17m-8-5v4.5M12 1v1m3.89.611l-.708.707M17.5 6h-1M8.111 2.611l.707.707M6.5 6h1"
              stroke-width="1"
            />
          </g>
        </svg>
      ),
    },
    {
      slug: "digital-transformation",
      title: t("services.items.digitalTransformation.title"),
      short: t("services.items.digitalTransformation.short"),
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 14 14"
        >
          <rect width="14" height="14" fill="none" />
          <g fill="none">
            <path
              fill="#d7e0ff"
              d="M9.514 5.031a4.5 4.5 0 1 0-6.5 4v1.5a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-1.5a4.48 4.48 0 0 0 2.5-4"
            />
            <path
              stroke="#1447e6"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M8.399 7.97c-.386.44-.856.8-1.385 1.061v1.5a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1.5A4.5 4.5 0 0 1 6.867.9M3.014 13.5h4"
              stroke-width="1"
            />
            <path
              fill="#fff"
              d="M7.402 4.442c-.351-.061-.351-.565 0-.626a3.18 3.18 0 0 0 2.558-2.45l.022-.097c.076-.346.57-.349.648-.002l.026.112a3.19 3.19 0 0 0 2.565 2.436c.353.06.353.567 0 .629a3.19 3.19 0 0 0-2.565 2.435l-.026.113c-.079.346-.572.344-.648-.003l-.022-.097a3.18 3.18 0 0 0-2.558-2.45"
            />
            <path
              stroke="#1447e6"
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M7.402 4.442c-.351-.061-.351-.565 0-.626a3.18 3.18 0 0 0 2.558-2.45l.022-.097c.076-.346.57-.349.648-.002l.026.112a3.19 3.19 0 0 0 2.565 2.436c.353.06.353.567 0 .629a3.19 3.19 0 0 0-2.565 2.435l-.026.113c-.079.346-.572.344-.648-.003l-.022-.097a3.18 3.18 0 0 0-2.558-2.45"
              stroke-width="1"
            />
          </g>
        </svg>
      ),
    },
    {
      slug: "operations-optimization",
      title: t("services.items.operations.title"),
      short: t("services.items.operations.short"),
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 48 48"
        >
          <rect width="48" height="48" fill="none" />
          <g fill="none" stroke-linejoin="round" stroke-width="4">
            <path
              fill="#2f88ff"
              stroke="#000"
              d="M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z"
            />
            <path stroke="#fff" stroke-linecap="round" d="M18 22H30" />
            <path stroke="#fff" stroke-linecap="round" d="M18 28H30" />
            <path stroke="#fff" stroke-linecap="round" d="M24.0083 22V34" />
            <path stroke="#fff" stroke-linecap="round" d="M30 15L24 21L18 15" />
          </g>
        </svg>
      ),
    },
    {
      slug: "finance-advisory",
      title: t("services.items.finance.title"),
      short: t("services.items.finance.short"),
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="50"
          viewBox="0 0 48 48"
        >
          <rect width="48" height="48" fill="none" />
          <path
            fill="#ffb74d"
            d="M29 43v-4.6l2.6.5c2.9.6 5.6-1.5 5.8-4.4L38 28l2.9-1.2c1-.4 1.4-1.6.8-2.6L38 18c-.6-7.6-4.9-15-16-15C10.6 3 5 11.4 5 20c0 3.7 1.3 6.9 3.3 9.6c1.8 2.5 2.7 5.5 2.7 8.5v4.8h18z"
          />
          <path fill="#ff9800" d="M29 43v-4.6L22 37v6z" />
          <circle cx="33.5" cy="21.5" r="1.5" fill="#784719" />
          <path
            fill="#ff5722"
            d="M21.4 3C12.3 3 5 10.3 5 19.4c0 11.1 6 11.4 6 18.6l2.6-.9c2.1-.7 3.9-2.3 4.7-4.4l2.8-6.8L27 23v-6s7-3.8 7-10.3C31 4.2 25.7 3 21.4 3"
          />
          <path
            fill="#546e7a"
            d="M21 2.1c-.6 0-1 .4-1 1V17c0 .6.4 1 1 1s1-.4 1-1V3.1c0-.6-.4-1-1-1m15.9 29.8c-7.9 0-10.3-4.9-10.4-5.1c-.2-.5-.8-.7-1.3-.5s-.7.8-.5 1.3c.1.3 3 6.3 12.2 6.3c.6 0 1-.4 1-1s-.5-1-1-1"
          />
          <circle cx="37" cy="33" r="2" fill="#37474f" />
          <circle cx="21" cy="23" r="7" fill="#37474f" />
          <circle cx="21" cy="23" r="4" fill="#546e7a" />
        </svg>
      ),
    },
    {
      slug: "hr-&-organizational-design",
      title: t("services.items.hr.title"),
      short: t("services.items.hr.short"),
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={50}
          height={50}
          viewBox="0 0 24 24"
        >
          <g fill="none">
            <path
              stroke="#191919"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M1 11.732V1.24"
              strokeWidth={1}
            ></path>
            <path
              fill="#ffef5e"
              d="M23 2.196v7.642l-6.36 2.621a11.5 11.5 0 0 1-3.684.737h-2.39a8.5 8.5 0 0 0-3.578.937L1 17.5v-5.768l6.935-3.826a5 5 0 0 1 3.491-.325l3.549 1.186a3.13 3.13 0 0 0 3.07-.842z"
            ></path>
            <path
              fill="#ff808c"
              d="M23 9.838v5.749l-6.256 1.473a14.7 14.7 0 0 1-3.778.287l-2.4-.182a6.3 6.3 0 0 0-3.483.947L1 22.312V17.5l5.988-3.367a8.5 8.5 0 0 1 3.577-.937h2.392a11.5 11.5 0 0 0 3.682-.737z"
            ></path>
            <path
              fill="#66e1ff"
              d="M23 15.587v6.696a.48.48 0 0 1-.478.478H1.478A.49.49 0 0 1 1 22.31l6.083-4.199a6.3 6.3 0 0 1 3.482-.947l2.401.182a14.7 14.7 0 0 0 3.778-.287z"
            ></path>
            <path
              fill="#fff9bf"
              d="M18.045 7.925a3.13 3.13 0 0 1-3.07.842l-3.549-1.186a5 5 0 0 0-3.491.325L1 11.732v1.913L7.935 9.82a5 5 0 0 1 3.491-.325l3.549 1.185a3.13 3.13 0 0 0 3.07-.842L23 4.11V2.196z"
            ></path>
            <path
              fill="#ffbfc5"
              d="M16.64 12.46a11.5 11.5 0 0 1-3.684.736h-2.39a8.5 8.5 0 0 0-3.578.937L1 17.5v1.913l5.988-3.368c1.11-.57 2.33-.89 3.577-.936h2.392a11.6 11.6 0 0 0 3.682-.738L23 11.751V9.836z"
            ></path>
            <path
              fill="#c2f3ff"
              d="M16.744 17.06a14.7 14.7 0 0 1-3.778.287l-2.4-.182a6.3 6.3 0 0 0-3.483.947L1 22.312a.49.49 0 0 0 .478.449H3.12l3.963-2.736a6.3 6.3 0 0 1 3.482-.947l2.401.183a14.7 14.7 0 0 0 3.778-.287L23 17.5v-1.913z"
            ></path>
            <path
              stroke="#191919"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M23 2.196v7.642l-6.36 2.621a11.5 11.5 0 0 1-3.684.737h-2.39a8.5 8.5 0 0 0-3.578.937L1 17.5v-5.768l6.935-3.826a5 5 0 0 1 3.491-.325l3.549 1.186a3.13 3.13 0 0 0 3.07-.842z"
              strokeWidth={1}
            ></path>
            <path
              stroke="#191919"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M23 9.838v5.749l-6.256 1.473a14.7 14.7 0 0 1-3.778.287l-2.4-.182a6.3 6.3 0 0 0-3.483.947L1 22.312V17.5l5.988-3.367a8.5 8.5 0 0 1 3.577-.937h2.392a11.5 11.5 0 0 0 3.682-.737z"
              strokeWidth={1}
            ></path>
            <path
              stroke="#191919"
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M23 15.587v6.696a.48.48 0 0 1-.478.478H1.478A.49.49 0 0 1 1 22.31l6.083-4.199a6.3 6.3 0 0 1 3.482-.947l2.401.182a14.7 14.7 0 0 0 3.778-.287z"
              strokeWidth={1}
            ></path>
          </g>
        </svg>
      ),
    },
    {
      slug: "technology-&-it-consulting",
      title: t("services.items.technology.title"),
      short: t("services.items.technology.short"),
      image: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width={50}
          height={50}
          viewBox="0 0 32 32"
        >
          <path
            fill="#1447e6"
            d="M19 24h4v4h-4zm7 0h4v4h-4zm-7-7h4v4h-4zm7 0h4v4h-4z"
          ></path>
          <path
            fill="#1447e6"
            d="M17 24H4V10h24v5h2v-5a2 2 0 0 0-2-2h-6V4a2 2 0 0 0-2-2h-8a2 2 0 0 0-2 2v4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h13ZM12 4h8v4h-8Z"
          ></path>
        </svg>
      ),
    },
  ];

  const approachFeatures = [
    {
      id: 1,
      // titles and bodies are provided via i18n keys (services.approach.features.[id])
    },
    {
      id: 2,
      // titles and bodies are provided via i18n keys (services.approach.features.[id])
    },
    {
      id: 3,
      // titles and bodies are provided via i18n keys (services.approach.features.[id])
    },
  ];

  const testimonials = [
    {
      id: "t1",
      quote: t("services.testimonials.t1.quote"),
      name: t("services.testimonials.t1.name"),
      role: t("services.testimonials.t1.role"),
      avatar: "https://randomuser.me/api/portraits/women/68.jpg",
    },
    {
      id: "t2",
      quote: t("services.testimonials.t2.quote"),
      name: t("services.testimonials.t2.name"),
      role: t("services.testimonials.t2.role"),
      avatar: "https://randomuser.me/api/portraits/men/45.jpg",
    },
    {
      id: "t3",
      quote: t("services.testimonials.t3.quote"),
      name: t("services.testimonials.t3.name"),
      role: t("services.testimonials.t3.role"),
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
    },
    {
      id: "t4",
      quote: t("services.testimonials.t4.quote"),
      name: t("services.testimonials.t4.name"),
      role: t("services.testimonials.t4.role"),
      avatar: "https://randomuser.me/api/portraits/men/76.jpg",
    },
    {
      id: "t5",
      quote: t("services.testimonials.t5.quote"),
      name: t("services.testimonials.t5.name"),
      role: t("services.testimonials.t5.role"),
      avatar: "https://randomuser.me/api/portraits/men/12.jpg",
    },
    {
      id: "t6",
      quote: t("services.testimonials.t6.quote"),
      name: t("services.testimonials.t6.name"),
      role: t("services.testimonials.t6.role"),
      avatar: "https://randomuser.me/api/portraits/women/12.jpg",
    },
  ];

  return (
    <>
      <Head>
        <title>{t("services.title")} — Consulting / Business Solutions</title>
        <meta name="description" content={t("services.description")} />
      </Head>

      <SiteHeadder />

      <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 caret-transparent">
        {/* Hero */}
        <section className="py-20 min-h-screen flex items-center justify-center bg-linear-to-r from-indigo-600 to-pink-500 text-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              {t("services.title")}
            </h1>
            <p className="mt-4 max-w-2xl mx-auto">
              {t("services.description")}
            </p>
          </div>
        </section>

        {/* Services grid (6) */}
        <section className="py-16">
          <div className="  mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold  text-center mb-6">
              {t("services.gridHeading")}
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((s, index) => (
                <article
                  key={index}
                  className="flex shadow-2xl items-start gap-4 rounded-2xl bg-white/90 dark:bg-gray-800/70 p-6 transform hover:-translate-y-1 hover:shadow-xl transition-all duration-200"
                >
                  <div className="shrink-0 flex items-center">
                    <div
                      className="w-1 h-20 bg-indigo-500 rounded mr-4"
                      aria-hidden="true"
                    />
                    <div className="w-20 h-20 rounded-full flex justify-center items-center overflow-hidden shadow-lg">
                      {s.image}
                    </div>
                  </div>

                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h4 className="font-bold text-lg text-gray-900 dark:text-gray-100">
                        {s.title}
                      </h4>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-3">
                        {s.short}
                      </p>
                    </div>

                    <div className="mt-4 flex justify-end">
                      <Link
                        href={`/${s.slug}`}
                        className="inline-block px-4 py-2 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                      >
                        {t("common.learnMore")}
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Approach: feature + media split */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              <div data-aos="fade-up">
                <h2 className="text-3xl font-extrabold mb-4">
                  {t("services.approach.heading")}
                </h2>
                <p className="text-gray-700 dark:text-gray-300 mb-6">
                  {t("services.approach.paragraph")}
                </p>

                <ul className="space-y-4">
                  {approachFeatures.map((f) => (
                    <li key={f.id} className="flex items-center">
                      <div className="shrink-0">
                        <div className=" size-9 rounded-full bg-indigo-600 text-white flex items-center justify-center font-semibold">
                          {f.id}
                        </div>
                      </div>
                      <div className="ml-4">
                        <h4 className="font-semibold">
                          {t(`services.approach.features.${f.id}.title`)}
                        </h4>
                        <p className="text-sm text-gray-600 dark:text-gray-300">
                          {t(`services.approach.features.${f.id}.body`)}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                <div className="mt-6">
                  <Link
                    href="/contact-us"
                    className="inline-block px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md shadow"
                  >
                    {t("services.bookDiscovery")}
                  </Link>
                </div>
              </div>

              <div
                data-aos="zoom-in"
                className="flex justify-center lg:justify-end"
              >
                <div className="w-full max-w-md rounded-xl overflow-hidden shadow-lg">
                  <Image
                    src="https://i.pinimg.com/1200x/0a/72/3f/0a723f388c8858fca51f99ea5c4c53c8.jpg"
                    alt="Our approach"
                    width={720}
                    height={480}
                    className="object-cover w-full h-64 lg:h-90"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-16 bg-white dark:bg-gray-900">
          <div className="  mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-8 text-center">
              {t("services.testimonialsHeading")}
            </h2>

            <div className="relative">
              <div className="relative">
                <div
                  ref={carouselRef}
                  className="carousel flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory [&::-webkit-scrollbar]:hidden pt-20  pb-4 "
                  role="list"
                  aria-label="Testimonials"
                  onMouseEnter={() => (pauseRef.current = true)}
                  onMouseLeave={() => (pauseRef.current = false)}
                  onFocus={() => (pauseRef.current = true)}
                  onBlur={() => (pauseRef.current = false)}
                  onScroll={onScroll}
                >
                  {testimonials.map((t, idx) => (
                    <figure
                      key={t.id}
                      data-index={idx}
                      className={`max-w-[80%] sm:max-w-[48%] lg:max-w-[30%] snap-center p-6 bg-white rounded-xl shadow-md dark:bg-gray-800 border relative shrink-0 overflow-visible transform transition-transform duration-300 ${
                        idx === currentIndex ? "scale-102 z-10" : "scale-95"
                      }`}
                    >
                      {/* left accent bar */}
                      <div
                        className="absolute left-0 top-6 bottom-6 w-1 bg-indigo-500 rounded-r"
                        aria-hidden
                      ></div>

                      {/* avatar overlapping */}
                      <div className="absolute -top-6 left-8 w-14 h-14 rounded-full overflow-hidden border-2 border-white dark:border-gray-900 shadow">
                        <Image
                          src={t.avatar}
                          alt={t.name}
                          width={56}
                          height={56}
                          className="object-cover w-full h-full"
                        />
                      </div>

                      <div className="ml-6 pl-6">
                        <div className="flex items-center gap-2 mb-3">
                          {/* SVG stars */}
                          <div className="flex" aria-hidden>
                            {[...Array(5)].map((_, i) => (
                              <svg
                                key={i}
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="currentColor"
                                className="text-yellow-400 mr-1"
                              >
                                <path d="M12 .587l3.668 7.431L23.4 9.75l-5.7 5.56L18.8 24 12 19.897 5.2 24l1.1-8.69L.6 9.75l7.732-1.732z" />
                              </svg>
                            ))}
                          </div>
                        </div>

                        <blockquote className="text-base text-gray-800 dark:text-gray-100 italic leading-relaxed mb-4">
                          {t.quote}
                        </blockquote>

                        <figcaption className="mt-2 flex items-center pt-2">
                          <div className="ml-1">
                            <div className="font-semibold">{t.name}</div>
                            <div className="text-xs text-gray-500">
                              {t.role}
                            </div>
                          </div>
                        </figcaption>
                      </div>
                    </figure>
                  ))}
                </div>

                {/* subtle left/right gradient overlays */}
                <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-12 bg-linear-to-r from-white to-transparent dark:from-gray-900" />
                <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-12 bg-linear-to-l from-white to-transparent dark:from-gray-900" />

                {/* prev / next buttons */}
                <button
                  onClick={prev}
                  aria-label="Previous testimonials"
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800 p-2 rounded-full shadow"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="15 18 9 12 15 6"></polyline>
                  </svg>
                </button>
                <button
                  onClick={next}
                  aria-label="Next testimonials"
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-white/90 dark:bg-gray-800 p-2 rounded-full shadow"
                >
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <polyline points="9 18 15 12 9 6"></polyline>
                  </svg>
                </button>

                {/* dot indicators */}
                <div className="mt-6 flex justify-center gap-3">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => scrollToIndex(i)}
                      title={`Go to testimonial ${i + 1}`}
                      className={`w-3 h-3 rounded-full ${
                        i === currentIndex ? "bg-indigo-600" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4">
              {t("services.contact.heading")}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {t("services.contact.paragraph")}
            </p>
            <Link
              href="/contact-us"
              className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md shadow"
            >
              {t("services.contact.button")}
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
};

export default ServicesPage;
