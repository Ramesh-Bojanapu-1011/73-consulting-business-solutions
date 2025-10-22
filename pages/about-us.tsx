import React, { useRef, useEffect } from "react";
import Head from "next/head";
import AOS from "aos";
import "aos/dist/aos.css";
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

  return (
    <>
      <Head>
        <title>About Us — Consulting / Business Solutions</title>
        <meta
          name="description"
          content="We deliver strategy, transformation and measurable results for businesses of all sizes."
        />
      </Head>

      <SiteHeadder />

      <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 caret-transparent">
        {/* Hero */}
        <section className="py-24 min-h-screen bg-linear-to-r from-indigo-600 to-pink-500 text-white flex items-center justify-center">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Consulting that delivers measurable outcomes
            </h1>
            <p className="mt-4 max-w-2xl mx-auto text-lg">
              We combine strategy, analytics and engineering to accelerate
              transformation and deliver sustainable growth. Our teams focus on
              clarity, speed and measurable impact so leadership can act with
              confidence.
            </p>

            <div className="mt-8 flex justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-flex items-center gap-2 bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full shadow"
              >
                Schedule a free consultation
              </Link>
            </div>
          </div>
        </section>

        {/* Mission & Values */}
        <section
          className="py-16"
          aria-labelledby="mission"
          data-aos="fade-right"
        >
          <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="mission" className="text-2xl font-bold mb-4">
              Mission & Values
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Our mission is to turn bold strategy into measurable results. We
              help leaders prioritize, pilot and scale initiatives that reduce
              cost, improve customer outcomes and enable long-term resilience.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 border rounded-lg bg-white/60 dark:bg-gray-800/60">
                <h3 className="font-semibold mb-2">Integrity</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  We act with transparency and accountability in every
                  engagement.
                </p>
              </div>
              <div className="p-4 border rounded-lg bg-white/60 dark:bg-gray-800/60">
                <h3 className="font-semibold mb-2">Impact</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  We prioritise high-value outcomes and measure success against
                  clear KPIs.
                </p>
              </div>
              <div className="p-4 border rounded-lg bg-white/60 dark:bg-gray-800/60">
                <h3 className="font-semibold mb-2">Collaboration</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  We embed with client teams to transfer skills and ensure
                  adoption.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Impact metrics */}
        <section
          className="py-16 bg-gray-50 dark:bg-gray-800"
          aria-labelledby="impact"
          data-aos="zoom-in"
        >
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 id="impact" className="text-2xl font-bold mb-6">
              Milestones & Impact
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="p-6 bg-white/60 dark:bg-gray-900/60 rounded-lg border">
                <div className="text-3xl font-extrabold">20%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Average cost reduction across projects
                </div>
              </div>
              <div className="p-6 bg-white/60 dark:bg-gray-900/60 rounded-lg border">
                <div className="text-3xl font-extrabold">+50%</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Increase in process throughput
                </div>
              </div>
              <div className="p-6 bg-white/60 dark:bg-gray-900/60 rounded-lg border">
                <div className="text-3xl font-extrabold">200+</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">
                  Projects delivered worldwide
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services snapshot */}
        <section
          className="py-16"
          aria-labelledby="services"
          data-aos="fade-left"
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="services" className="text-2xl font-bold mb-6">
              Services snapshot
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 border rounded-lg bg-white/60 dark:bg-gray-800/60">
                <h3 className="font-semibold mb-2">Business Strategy</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Strategic planning, M&A diligence and transformation roadmaps
                  that align leadership and execution.
                </p>
              </div>
              <div className="p-6 border rounded-lg bg-white/60 dark:bg-gray-800/60">
                <h3 className="font-semibold mb-2">Technology & Cloud</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Cloud-native platform builds, secure migrations and data
                  strategy to unlock analytics and automation.
                </p>
              </div>
              <div className="p-6 border rounded-lg bg-white/60 dark:bg-gray-800/60">
                <h3 className="font-semibold mb-2">Finance & Ops</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  Working capital optimisation, FP&A transformation and process
                  automation to improve margins.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-16 " aria-labelledby="team" data-aos="fade-up">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 id="team" className="text-2xl font-bold mb-6">
              Meet our experts
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Seasoned consultants, operators and engineers who partner with
              clients to design, deliver and sustain change. We bring domain
              experience, technical depth and practical delivery skills.
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
                    name: "Aisha Khan",
                    role: "Strategy Lead",
                    img: "/team/aisha.jpg",
                  },
                  {
                    name: "Rahul Mehta",
                    role: "Tech Transformation",
                    img: "/team/rahul.jpg",
                  },
                  {
                    name: "Lena Smith",
                    role: "Operations",
                    img: "/team/lena.jpg",
                  },
                  {
                    name: "Carlos Ruiz",
                    role: "Finance",
                    img: "/team/carlos.jpg",
                  },
                  {
                    name: "Maya Lopez",
                    role: "Change Management",
                    img: "/team/maya.jpg",
                  },
                  {
                    name: "Omar Haddad",
                    role: "Data & Analytics",
                    img: "/team/omar.jpg",
                  },
                  {
                    name: "Sofia Petrova",
                    role: "Customer Experience",
                    img: "/team/sofia.jpg",
                  },
                  {
                    name: "Kenji Watanabe",
                    role: "IT Architecture",
                    img: "/team/kenji.jpg",
                  },
                ].map((m) => (
                  <div
                    key={m.name}
                    className="snap-center shrink-0 w-64 md:w-56 lg:w-64 p-4 bg-white/60 dark:bg-gray-800/60 rounded-lg border flex flex-col items-center text-center"
                  >
                    <div className="relative mb-3">
                      {/* decorative shapes behind image */}
                      <div
                        className="absolute -left-4 -bottom-4 w-6 h-6 rounded-full bg-indigo-600/30 dark:bg-indigo-400/20"
                        aria-hidden
                      />
                      <div
                        className="absolute -right-6 -top-6 w-12 h-12 rounded-full bg-indigo-600/20 dark:bg-indigo-400/10"
                        aria-hidden
                      />

                      <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-white dark:border-gray-800 shadow">
                        <Image
                          src={m.img}
                          alt={m.name}
                          width={112}
                          height={112}
                          className="object-cover filter grayscale contrast-95 opacity-90"
                        />
                      </div>
                    </div>

                    <div className="font-semibold">{m.name}</div>
                    <div className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                      {m.role}
                    </div>

                    {/* social icons */}
                    <div className="flex items-center gap-3">
                      <a
                        href="#"
                        aria-label={`${m.name} facebook`}
                        className="text-gray-500 hover:text-gray-700"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
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
                          width="16"
                          height="16"
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
                          width="16"
                          height="16"
                          fill="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path d="M19 3A2 2 0 0121 5v14a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h14zM8.5 17.5v-6H6v6h2.5zM7.25 9.9a1.45 1.45 0 110-2.9 1.45 1.45 0 010 2.9zM18 17.5v-3.25c0-1.9-1-2.25-1.75-2.25-.75 0-1.75.4-1.75 2.25V17.5H18z" />
                        </svg>
                      </a>
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
            <h2 id="testimonials" className="text-2xl font-bold mb-6">
              What clients say
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  quote:
                    "Their pragmatic approach reduced our operating costs and improved fulfilment times — delivered on time and on budget.",
                  name: "Sara Williams",
                  role: "COO, RetailCo",
                },
                {
                  quote:
                    "A fast, disciplined team that balanced strategy with execution — they made measurable improvements within months.",
                  name: "Michael Chen",
                  role: "Head of Technology, FinBank",
                },
                {
                  quote:
                    "They helped us prioritize the right initiatives and build internal capability so improvements stuck.",
                  name: "Priya Nair",
                  role: "VP Product, SaaSify",
                },
                {
                  quote:
                    "Clear governance, strong delivery and measurable outcomes — a truly collaborative partnership.",
                  name: "Liam O'Connor",
                  role: "CFO, LogisticsX",
                },
              ].map((t, i) => (
                <figure
                  key={t.name}
                  className="p-6 bg-white/60 dark:bg-gray-800/60 border rounded-lg hover:shadow-lg transition-shadow duration-200"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <svg
                    className="w-8 h-8 text-indigo-600 mb-4"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.17 6A5 5 0 002 11v6a2 2 0 002 2h6v-8H7.17zM17.17 6A5 5 0 0012 11v6a2 2 0 002 2h6v-8h-2.83z"
                      fill="currentColor"
                    />
                  </svg>

                  <blockquote className="text-gray-700 dark:text-gray-300 mb-4">
                    “{t.quote}”
                  </blockquote>
                  <figcaption className="text-sm text-gray-600 dark:text-gray-400">
                    <div className="font-semibold text-gray-900 dark:text-gray-100">
                      {t.name}
                    </div>
                    <div className="text-xs">{t.role}</div>
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
              Let's work together
            </h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              If you're ready to explore how we can help your organisation,
              reach out for a complimentary discovery conversation.
            </p>

            <a
              href="/contact-us"
              className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md shadow"
            >
              Book a discovery call
            </a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
};

export default AboutUsPage;
