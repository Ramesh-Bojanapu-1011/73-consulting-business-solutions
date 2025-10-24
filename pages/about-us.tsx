import React, { useRef, useEffect } from "react";
import Head from "next/head";
import AOS from "aos";
import { useTranslation } from "react-i18next";

import SiteHeadder from "@/components/SiteHeadder";
import SiteFooter from "@/components/SiteFooter";
import Image from "next/image";
import Link from "next/link";

const AboutUsPage: React.FC = () => {
  const carouselRef = useRef<HTMLDivElement | null>(null);
  const pausedRef = useRef(false);

  React.useEffect(() => {
    AOS.init({ duration: 800 });

    // auto-scroll carousel every 2.5s when not paused
    const interval = setInterval(() => {
      const el = carouselRef.current;
      if (!el || pausedRef.current) return;
      // scroll by one card width (approx)
      const delta = el.clientWidth * 0.8;
      if (el.scrollLeft + el.clientWidth >= el.scrollWidth - 10) {
        // loop back to start
        el.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        el.scrollBy({ left: delta, behavior: "smooth" });
      }
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  const { t } = useTranslation();

  // translation-driven content
  const missionLeftList = t("about.mission.left", {
    returnObjects: true,
  }) as string[];
  const missionRightList = t("about.mission.right", {
    returnObjects: true,
  }) as string[];

  const features = t("about.features", { returnObjects: true }) as
    | Array<{ title: string; desc: string }>
    | undefined;

  const servicesSnapshot = t("about.servicesSnapshot", {
    returnObjects: true,
  }) as Array<{ title: string; desc: string }> | undefined;

  const serviceIcons = [
    <svg
      className="w-8 h-8 text-indigo-600"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 2l3 6 6 .5-4.5 3.5L19 20l-7-4-7 4 2.5-8.0L4 8.5 10 8 12 2z"
        fill="currentColor"
      />
    </svg>,
    <svg
      className="w-8 h-8 text-indigo-600"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M20 17.58A5.5 5.5 0 0014.5 12H13v-1a4 4 0 10-8 0v1H6.5A4.5 4.5 0 0011 18h9a1 1 0 000-2h0z"
        fill="currentColor"
      />
    </svg>,
    <svg
      className="w-8 h-8 text-indigo-600"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M12 1v22M5 7h14M7 12h10M9 17h6"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>,
  ];

  const teamHeading = t("about.teamHeading");
  const teamParagraph = t("about.teamParagraph");

  const testimonials = t("about.testimonials", { returnObjects: true }) as
    | Array<{ quote: string; name: string; role: string }>
    | undefined;

  const contactHeading = t("about.contact.heading");
  const contactParagraph = t("about.contact.paragraph");
  const contactButton = t("about.contact.button");

  return (
    <>
      <Head>
        <title>{t("about.title")} — Consulting / Business Solutions</title>
        <meta name="description" content={t("about.description")} />
      </Head>

      <SiteHeadder />

      <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 caret-transparent">
        {/* Hero */}
        <section className="py-24 min-h-screen bg-linear-to-r from-indigo-600 to-pink-500 text-white flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              {t("about.heroTitle")}
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg">
              {t("about.heroParagraph")}
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow"
              >
                {t("about.cta.schedule")}
              </Link>
            </div>
          </div>
        </section>

        {/* Mission & Values - redesigned to match reference layout */}
        <section className="py-16" aria-labelledby="mission">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left: decorative circular image */}
              <div className="lg:col-span-6 flex justify-center lg:justify-start">
                <div className="relative w-full max-w-md">
                  {/* large circular crop */}
                  <div className="overflow-hidden rounded-full md:w-96 md:h-96   mx-auto lg:mx-0">
                    <Image
                      src="https://images.pexels.com/photos/6930545/pexels-photo-6930545.jpeg"
                      alt="Team working"
                      width={768}
                      height={768}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  {/* decorative cut-away shapes */}
                  <div
                    className="hidden lg:block absolute -right-20 -top-10 w-56 h-56 rounded-br-full bg-white/60 dark:bg-gray-900/60"
                    aria-hidden
                  />
                  <div
                    className="hidden lg:block absolute -left-20 -bottom-10 w-40 h-40 rounded-tl-full bg-white/40 dark:bg-gray-900/40"
                    aria-hidden
                  />
                </div>
              </div>

              {/* Right: content */}
              <div className="lg:col-span-6">
                <p className="text-sm text-indigo-600 font-medium">
                  {t("about.introBadge")}
                </p>
                <h2
                  id="mission"
                  className="mt-3 text-3xl md:text-4xl font-extrabold leading-tight"
                >
                  {t("about.missionHeading")}
                </h2>
                <p className="mt-4 text-gray-700 dark:text-gray-300">
                  {t("about.missionParagraph")}
                </p>

                <div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-2 text-sm text-gray-700 dark:text-gray-300">
                  <ul className="space-y-2">
                    {(missionLeftList || []).map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-indigo-600">+</span>
                        {item}
                      </li>
                    ))}
                  </ul>

                  <ul className="space-y-2">
                    {(missionRightList || []).map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="text-indigo-600">+</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mt-8 flex items-center gap-6">
                  <a
                    href="/contact-us"
                    className="inline-flex items-center gap-3 bg-gray-100 dark:bg-gray-800 text-gray-900 dark:text-gray-100 px-5 py-3 rounded-full shadow"
                  >
                    {t("about.moreAbout")}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Feature + media split (replaces Impact metrics) */}
        <section
          className="py-16 bg-gray-50 dark:bg-gray-800"
          aria-labelledby="impact"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Left: headline + feature rows */}
              <div className="lg:col-span-7">
                <h2
                  id="impact"
                  className="text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-gray-100 mb-6"
                >
                  {t("about.impactHeading")}
                </h2>
                <p className="text-gray-600 dark:text-gray-300 mb-8 max-w-xl">
                  {t("about.impactParagraph")}
                </p>

                <div className="space-y-4">
                  {(features || []).map((f, idx) => (
                    <div
                      key={`${f.title}-${idx}`}
                      className="flex items-start gap-4"
                    >
                      <div className="shrink-0">
                        <div className="w-14 h-14 bg-white rounded-lg shadow flex items-center justify-center">
                          {/* keep decorative icons by index to preserve visual design */}
                          {
                            [
                              <svg
                                key={0}
                                className="w-6 h-6 text-indigo-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12 2l2 5h5l-4 3 2 5-5-3-5 3 2-5-4-3h5l2-5z"
                                  fill="currentColor"
                                />
                              </svg>,
                              <svg
                                key={1}
                                className="w-6 h-6 text-indigo-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12 12a4 4 0 100-8 4 4 0 000 8zm-8 9a8 8 0 0116 0H4z"
                                  fill="currentColor"
                                />
                              </svg>,
                              <svg
                                key={2}
                                className="w-6 h-6 text-indigo-600"
                                viewBox="0 0 24 24"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M12 2a10 10 0 100 20 10 10 0 000-20zm1 11h3v2h-5V7h2v6z"
                                  fill="currentColor"
                                />
                              </svg>,
                            ][idx % 3]
                          }
                        </div>
                      </div>
                      <div>
                        <h3 className="font-semibold text-lg text-gray-900 dark:text-gray-100">
                          {f.title}
                        </h3>
                        <p className="text-sm text-gray-600 dark:text-gray-300 mt-1 max-w-md">
                          {f.desc}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Right: stacked images */}
              <div className="lg:col-span-5 relative">
                <div className="relative w-full h-full flex items-center justify-center">
                  <div className="hidden min-[769px]:block absolute -top-40 right-0 size-64  rounded-lg overflow-hidden shadow-lg">
                    <Image
                      src="/about-team1.jpg"
                      alt="Team 1"
                      width={640}
                      height={400}
                      className="object-cover w-full h-full"
                    />
                  </div>

                  <div className="min-[769px]:absolute -top-7 left-14  size-56   bg-white rounded-xl p-2 shadow-lg">
                    <div className="w-full h-full overflow-hidden rounded-lg border-4 border-white">
                      <Image
                        src="/about-team2.jpg"
                        alt="Team 2"
                        width={400}
                        height={400}
                        className="object-cover w-full h-full"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services snapshot */}
        <section className="py-16" aria-labelledby="services">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="services" className="text-2xl font-bold mb-6">
              {t("about.servicesSnapshotHeading")}
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {(servicesSnapshot || []).map((s, idx) => (
                <div
                  key={`${s.title}-${idx}`}
                  className="p-6 bg-white/60 dark:bg-gray-800/60 rounded-lg border hover:shadow-lg transition-transform transform hover:-translate-y-1 hover:border-indigo-400"
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className="flex items-center justify-center w-12 h-12 rounded-md bg-linear-to-br from-indigo-50 to-pink-50 dark:from-indigo-700/30 dark:to-pink-600/20">
                      <div className="w-8 h-8">
                        {serviceIcons[idx % serviceIcons.length]}
                      </div>
                    </div>
                    <div>
                      <h3 className="font-semibold text-lg">{s.title}</h3>
                      <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                        {s.desc}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 " aria-labelledby="team" data-aos="fade-up">
          <div className="max-w-7xl mx-auto px-4 text-center sm:px-6 lg:px-8">
            <h2 id="team" className="text-2xl font-bold mb-6">
              {teamHeading}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {teamParagraph}
            </p>

            {/* Carousel */}
            <div className="relative">
              <div className="absolute -left-2 top-1/2 transform -translate-y-1/2 z-10">
                <button
                  aria-label="Previous"
                  onClick={() => {
                    const el = carouselRef.current;
                    if (el)
                      el.scrollBy({
                        left: -el.clientWidth * 0.8,
                        behavior: "smooth",
                      });
                  }}
                  className="bg-white/90 dark:bg-gray-800/80 p-2 rounded-full shadow hover:bg-white"
                >
                  ‹
                </button>
              </div>

              <div className="absolute -right-2 top-1/2 transform -translate-y-1/2 z-10">
                <button
                  aria-label="Next"
                  onClick={() => {
                    const el = carouselRef.current;
                    if (el)
                      el.scrollBy({
                        left: el.clientWidth * 0.8,
                        behavior: "smooth",
                      });
                  }}
                  className="bg-white/90 dark:bg-gray-800/80 p-2 rounded-full shadow hover:bg-white"
                >
                  ›
                </button>
              </div>

              {/* scroll-snap container */}
              <div
                ref={carouselRef}
                onMouseEnter={() => (pausedRef.current = true)}
                onMouseLeave={() => (pausedRef.current = false)}
                className="team-carousel flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth [&::-webkit-scrollbar]:hidden   py-2 px-2"
              >
                {[
                  {
                    name: "about.team.members.0.name",
                    role: "about.team.members.0.role",
                    img: "https://randomuser.me/api/portraits/women/81.jpg",
                  },
                  {
                    name: "about.team.members.1.name",
                    role: "about.team.members.1.role",
                    img: "https://randomuser.me/api/portraits/men/82.jpg",
                  },
                  {
                    name: "about.team.members.2.name",
                    role: "about.team.members.2.role",
                    img: "https://randomuser.me/api/portraits/women/83.jpg",
                  },
                  {
                    name: "about.team.members.3.name",
                    role: "about.team.members.3.role",
                    img: "https://randomuser.me/api/portraits/men/84.jpg",
                  },
                  {
                    name: "about.team.members.4.name",
                    role: "about.team.members.4.role",
                    img: "https://randomuser.me/api/portraits/women/85.jpg",
                  },
                  {
                    name: "about.team.members.5.name",
                    role: "about.team.members.5.role",
                    img: "https://randomuser.me/api/portraits/men/86.jpg",
                  },
                  {
                    name: "about.team.members.6.name",
                    role: "about.team.members.6.role",
                    img: "https://randomuser.me/api/portraits/women/87.jpg",
                  },
                  {
                    name: "about.team.members.7.name",
                    role: "about.team.members.7.role",
                    img: "https://randomuser.me/api/portraits/men/88.jpg",
                  },
                ].map((m, idx) => (
                  <div
                    key={idx}
                    className="snap-center shrink-0 w-64 md:w-56 lg:w-64 p-4 bg-white/60 dark:bg-gray-800/60 rounded-xl border border-pink-600 hover:shadow-lg transform  hover:-translate-y-1 transition-transform duration-200 flex flex-col items-center text-center"
                  >
                    <div className="relative mb-3">
                      {/* gradient ring behind image */}
                      <div className="absolute inset-0 flex items-center justify-center z-0">
                        <div
                          className="w-32 h-32 rounded-full bg-linear-to-tr from-indigo-200 to-pink-200 dark:from-indigo-700 dark:to-pink-600 opacity-30 blur-2xl"
                          aria-hidden
                        />
                      </div>

                      <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-white dark:border-gray-800 shadow-lg z-10">
                        <Image
                          src={m.img}
                          alt={t(`${m.name}`)}
                          width={112}
                          height={112}
                          className="object-cover filter grayscale contrast-95 opacity-95"
                        />
                      </div>
                    </div>

                    <div className="font-semibold text-gray-900 dark:text-gray-100">
                      {t(`${m.name}`)}
                    </div>
                    <div className="text-sm text-gray-500 dark:text-gray-300 mb-4">
                      {t(`${m.role}`)}
                    </div>

                    <div className="mt-auto w-full">
                      <div className="flex items-center justify-center gap-3">
                        <a
                          href="#"
                          aria-label={`${m.name} facebook`}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M22 12.07C22 6.48 17.52 2 11.93 2S2 6.48 2 12.07c0 4.99 3.66 9.12 8.44 9.93v-7.03H8.07v-2.9h2.37V9.41c0-2.35 1.4-3.64 3.55-3.64 1.03 0 2.11.18 2.11.18v2.32h-1.18c-1.16 0-1.52.72-1.52 1.45v1.75h2.59l-.41 2.9h-2.18v7.03C18.34 21.19 22 17.06 22 12.07z" />
                          </svg>
                        </a>
                        <a
                          href="#"
                          aria-label={`${m.name} twitter`}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M22.46 6c-.77.35-1.6.58-2.46.69.89-.53 1.57-1.38 1.89-2.39-.83.49-1.75.85-2.72 1.05A4.15 4.15 0 0015.5 4c-2.28 0-4.13 1.86-4.13 4.15 0 .33.04.66.1.97C7.69 9.92 4.07 7.86 1.64 4.9c-.36.62-.57 1.34-.57 2.11 0 1.46.74 2.75 1.86 3.51-.69-.02-1.34-.21-1.9-.52v.05c0 2.03 1.45 3.73 3.37 4.12-.35.1-.73.15-1.12.15-.27 0-.53-.02-.78-.07.53 1.64 2.07 2.83 3.9 2.86A8.32 8.32 0 012 19.54 11.7 11.7 0 007.29 21c7.55 0 11.68-6.27 11.68-11.71 0-.18 0-.35-.01-.53.8-.57 1.49-1.28 2.04-2.09z" />
                          </svg>
                        </a>
                        <a
                          href="#"
                          aria-label={`${m.name} linkedin`}
                          className="text-gray-500 hover:text-gray-700"
                        >
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="18"
                            height="18"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.5 17.5v-6H6v6h2.5zM7.25 9.9a1.45 1.45 0 110-2.9 1.45 1.45 0 010 2.9zM18 17.5v-3.25c0-1.9-1-2.25-1.75-2.25-.75 0-1.75.4-1.75 2.25V17.5H18z" />
                          </svg>
                        </a>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section
          className="py-16 bg-gray-50 dark:bg-gray-900"
          aria-labelledby="testimonials"
          data-aos="fade-up"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2
              id="testimonials"
              className="text-2xl text-center font-bold mb-6"
            >
              {t("about.testimonialsHeading")}
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {(testimonials || []).map((tt, i) => (
                <figure
                  key={`${tt.name}-${i}`}
                  className="p-6 bg-white/60 dark:bg-gray-800/60 border-l-4 border-indigo-500/80 dark:border-indigo-400/60 rounded-lg hover:shadow-lg transition-shadow duration-200 flex flex-col justify-between"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <div className="flex items-start gap-4 mb-3">
                    <div className="text-indigo-500 dark:text-indigo-400 text-4xl leading-none font-serif">
                      “
                    </div>
                    <blockquote className="text-gray-700 dark:text-gray-300 italic">
                      {tt.quote}
                    </blockquote>
                  </div>

                  <figcaption className="mt-4 flex items-center justify-between text-sm text-gray-600 dark:text-gray-400">
                    <div>
                      <div className="font-semibold text-gray-900 dark:text-gray-100">
                        {tt.name}
                      </div>
                      <div className="text-xs text-gray-500 dark:text-gray-300">
                        {tt.role}
                      </div>
                    </div>
                  </figcaption>
                </figure>
              ))}
            </div>
          </div>
        </section>

        {/* Contact / CTA */}
        <section
          className="py-16 bg-gray-50 dark:bg-gray-900"
          aria-labelledby="contact"
          data-aos="fade-up"
        >
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="contact" className="text-2xl font-bold mb-4">
              {contactHeading}
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              {contactParagraph}
            </p>

            <a
              href="/contact-us"
              className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md shadow"
            >
              {contactButton}
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
};

export default AboutUsPage;
