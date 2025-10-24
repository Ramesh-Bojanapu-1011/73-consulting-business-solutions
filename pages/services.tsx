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
      image: "/services/business-strategy.jpg",
    },
    {
      slug: "digital-transformation",
      title: t("services.items.digitalTransformation.title"),
      short: t("services.items.digitalTransformation.short"),
      image: "/services/technology-cloud.jpg",
    },
    {
      slug: "operations-optimization",
      title: t("services.items.operations.title"),
      short: t("services.items.operations.short"),
      image: "/services/finance-ops.jpg",
    },
    {
      slug: "finance-advisory",
      title: t("services.items.finance.title"),
      short: t("services.items.finance.short"),
      image: "/services/customer-experience.jpg",
    },
    {
      slug: "hr-&-organizational-design",
      title: t("services.items.hr.title"),
      short: t("services.items.hr.short"),
      image: "/services/data-analytics.jpg",
    },
    {
      slug: "technology-&-it-consulting",
      title: t("services.items.technology.title"),
      short: t("services.items.technology.short"),
      image: "/services/change-management.jpg",
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

  const caseStudies = [
    {
      id: "retailco",
      title: t("services.caseStudies.retailco.title"),
      tag: t("services.caseStudies.retailco.tag"),
      summary: t("services.caseStudies.retailco.summary"),
      image: "/services/case-retail.jpg",
      href: "/case-studies/retailco-fulfilment",
    },
    {
      id: "finbank",
      title: t("services.caseStudies.finbank.title"),
      tag: t("services.caseStudies.finbank.tag"),
      summary: t("services.caseStudies.finbank.summary"),
      image: "/services/case-finbank.jpg",
      href: "/case-studies/finbank-tech",
    },
    {
      id: "saasify",
      title: t("services.caseStudies.saasify.title"),
      tag: t("services.caseStudies.saasify.tag"),
      summary: t("services.caseStudies.saasify.summary"),
      image: "/services/case-saasify.jpg",
      href: "/case-studies/saasify-product-ops",
    },
  ];

  const testimonials = [
    {
      id: "t1",
      quote: t("services.testimonials.t1.quote"),
      name: t("services.testimonials.t1.name"),
      role: t("services.testimonials.t1.role"),
      avatar: "/team/bonsey.jpg",
    },
    {
      id: "t2",
      quote: t("services.testimonials.t2.quote"),
      name: t("services.testimonials.t2.name"),
      role: t("services.testimonials.t2.role"),
      avatar: "/team/daniel.jpg",
    },
    {
      id: "t3",
      quote: t("services.testimonials.t3.quote"),
      name: t("services.testimonials.t3.name"),
      role: t("services.testimonials.t3.role"),
      avatar: "/team/michael.jpg",
    },
    {
      id: "t4",
      quote: t("services.testimonials.t4.quote"),
      name: t("services.testimonials.t4.name"),
      role: t("services.testimonials.t4.role"),
      avatar: "/team/khairul.jpg",
    },
    {
      id: "t5",
      quote: t("services.testimonials.t5.quote"),
      name: t("services.testimonials.t5.name"),
      role: t("services.testimonials.t5.role"),
      avatar: "/team/rick.jpg",
    },
    {
      id: "t6",
      quote: t("services.testimonials.t6.quote"),
      name: t("services.testimonials.t6.name"),
      role: t("services.testimonials.t6.role"),
      avatar: "/team/harry.jpg",
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
                    <div className="w-20 h-20 rounded-full overflow-hidden shadow-lg">
                      <Image
                        src={s.image}
                        alt={s.title}
                        width={80}
                        height={80}
                        className="object-cover w-full h-full"
                      />
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
                    src="/services/approach-illustration.jpg"
                    alt="Our approach"
                    width={720}
                    height={480}
                    className="object-cover w-full h-64 lg:h-80"
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
                  className="carousel flex gap-6 overflow-x-auto scrollbar-hide snap-x snap-mandatory [&::-webkit-scrollbar]:hidden py-4"
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
