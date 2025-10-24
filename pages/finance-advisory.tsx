import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import SiteHeadder from "@/components/SiteHeadder";
import SiteFooter from "@/components/SiteFooter";
import { useTranslation } from "react-i18next";

const FinancialAdvisory: React.FC = () => {
  // simple in-file counter component
  const Counter: React.FC<{
    to: number;
    suffix?: string;
    duration?: number;
  }> = ({ to, suffix = "", duration = 1200 }) => {
    const ref = React.useRef<HTMLDivElement | null>(null);
    const [value, setValue] = React.useState(0);
    const startedRef = React.useRef(false);

    React.useEffect(() => {
      const el = ref.current;
      if (!el) return;

      const obs = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting && !startedRef.current) {
              startedRef.current = true;
              const start = performance.now();
              const from = 0;
              const id = requestAnimationFrame(function step(now) {
                const t = Math.min(1, (now - start) / duration);
                const v = Math.round(from + (to - from) * t);
                setValue(v);
                if (t < 1) requestAnimationFrame(step);
              });
            }
          });
        },
        { threshold: 0.3 },
      );

      obs.observe(el);
      return () => obs.disconnect();
    }, [to, duration]);

    return (
      <div ref={ref} className="text-2xl font-bold text-indigo-600">
        {value}
        {suffix}
      </div>
    );
  };

  const { t } = useTranslation();

  return (
    <>
      <Head>
        <title>{t("financeAdvisory.pageTitle")}</title>
        <meta
          name="description"
          content={t("financeAdvisory.metaDescription")}
        />
      </Head>

      <SiteHeadder />

      <main className="min-h-screen caret-transparent  bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Hero */}
        <section className="py-20 min-h-screen flex justify-center items-center bg-linear-to-r from-indigo-600 to-pink-500 text-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              {t("financeAdvisory.hero.title")}
            </h1>
            <p className="mt-4 text-lg max-w-3xl mx-auto">
              {t("financeAdvisory.hero.paragraph")}
            </p>
            <div className="mt-6">
              <Link
                href="/contact-us"
                className="inline-block px-5 py-3 bg-white text-indigo-700 rounded-md font-semibold"
              >
                {t("financeAdvisory.hero.cta")}
              </Link>
            </div>
          </div>
        </section>

        {/* Overview & Challenges */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold">
                {t("financeAdvisory.overview.heading")}
              </h2>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                {t("financeAdvisory.overview.paragraph")}
              </p>

              <ul className="mt-6 space-y-3 text-gray-600 dark:text-gray-400">
                <li>• {t("financeAdvisory.overview.bullets.1")}</li>
                <li>• {t("financeAdvisory.overview.bullets.2")}</li>
                <li>• {t("financeAdvisory.overview.bullets.3")}</li>
                <li>• {t("financeAdvisory.overview.bullets.4")}</li>
              </ul>
            </div>

            <div>
              <Image
                src="https://i.pinimg.com/736x/8c/c0/b3/8cc0b3c8f492357e13173579c4c3fbb9.jpg"
                alt={t("financeAdvisory.imageAlt")}
                width={640}
                height={380}
                className="rounded-md object-cover w-full h-80"
              />
            </div>
          </div>
        </section>

        {/* Our approach */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-semibold">
                  {t("financeAdvisory.approach.heading")}
                </h3>
                <p className="mt-3 text-gray-700 dark:text-gray-300">
                  {t("financeAdvisory.approach.paragraph")}
                </p>

                <div className="mt-8 grid sm:grid-cols-3 gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-none w-10 h-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <div className="font-semibold">
                        {t("financeAdvisory.approach.features.1.title")}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {t("financeAdvisory.approach.features.1.body")}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-none w-10 h-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <div className="font-semibold">
                        {t("financeAdvisory.approach.features.2.title")}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {t("financeAdvisory.approach.features.2.body")}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-none w-10 h-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
                      3
                    </div>
                    <div>
                      <div className="font-semibold">
                        {t("financeAdvisory.approach.features.3.title")}
                      </div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        {t("financeAdvisory.approach.features.3.body")}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    {t("financeAdvisory.timeline.badge")}
                  </div>
                  <div className="mt-4 flex items-center gap-6 overflow-auto">
                    <div className="shrink-0 text-center">
                      <div className="text-xs text-gray-500">
                        {t("financeAdvisory.timeline.week1.label")}
                      </div>
                      <div className="font-semibold">
                        {t("financeAdvisory.timeline.week1.title")}
                      </div>
                    </div>
                    <div className="shrink-0 text-center">
                      <div className="text-xs text-gray-500">
                        {t("financeAdvisory.timeline.week2.label")}
                      </div>
                      <div className="font-semibold">
                        {t("financeAdvisory.timeline.week2.title")}
                      </div>
                    </div>
                    <div className="shrink-0 text-center">
                      <div className="text-xs text-gray-500">
                        {t("financeAdvisory.timeline.week3.label")}
                      </div>
                      <div className="font-semibold">
                        {t("financeAdvisory.timeline.week3.title")}
                      </div>
                    </div>
                    <div className="shrink-0 text-center">
                      <div className="text-xs text-gray-500">
                        {t("financeAdvisory.timeline.week4.label")}
                      </div>
                      <div className="font-semibold">
                        {t("financeAdvisory.timeline.week4.title")}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <blockquote className="border-l-4 pl-4 italic text-gray-700 dark:text-gray-300">
                    {t("financeAdvisory.testimonial.quote")} —{" "}
                    {t("financeAdvisory.testimonial.author")}
                  </blockquote>
                </div>
              </div>

              <div className="hidden lg:block">
                <Image
                  src="https://i.pinimg.com/736x/92/ed/23/92ed2345e6eb6475aff56df7fb1ec1bb.jpg"
                  alt="Approach"
                  width={720}
                  height={520}
                  className="rounded-md object-cover w-full h-80"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-xl font-semibold">
              {t("financeAdvisory.servicesHeading")}
            </h3>

            {/* Stats row */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-white shadow-2xl dark:bg-gray-800 rounded-lg text-center">
                <Counter to={15} suffix="%" />
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {t("financeAdvisory.stats.improvement")}
                </div>
              </div>
              <div className="p-4 bg-white shadow-2xl dark:bg-gray-800 rounded-lg text-center">
                <Counter to={8} suffix="w" />
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {t("financeAdvisory.stats.timeToModel")}
                </div>
              </div>
              <div className="p-4 bg-white shadow-2xl dark:bg-gray-800 rounded-lg text-center">
                <Counter to={1} suffix="M" />
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  {t("financeAdvisory.stats.runRate")}
                </div>
              </div>
            </div>

            {/* Left-accent cards */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="rounded-lg bg-white dark:bg-gray-800 overflow-hidden shadow">
                <div className="border-l-4 border-indigo-600 p-6">
                  <div className="font-semibold">
                    {t("financeAdvisory.cards.fpna.title")}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {t("financeAdvisory.cards.fpna.body")}
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white dark:bg-gray-800 overflow-hidden shadow">
                <div className="border-l-4 border-indigo-600 p-6">
                  <div className="font-semibold">
                    {t("financeAdvisory.cards.unitEconomics.title")}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {t("financeAdvisory.cards.unitEconomics.body")}
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white dark:bg-gray-800 overflow-hidden shadow">
                <div className="border-l-4 border-indigo-600 p-6">
                  <div className="font-semibold">
                    {t("financeAdvisory.cards.costToValue.title")}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {t("financeAdvisory.cards.costToValue.body")}
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white dark:bg-gray-800 overflow-hidden shadow">
                <div className="border-l-4 border-indigo-600 p-6">
                  <div className="font-semibold">
                    {t("financeAdvisory.cards.handover.title")}
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    {t("financeAdvisory.cards.handover.body")}
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-6 items-start">
              <div className="md:col-span-2 rounded-lg p-6 bg-white dark:bg-gray-800 shadow">
                <div className="font-semibold">
                  {t("financeAdvisory.clientTestimonial.heading")}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                  {t("financeAdvisory.clientTestimonial.body")}
                </div>
                <div className="mt-4 text-sm font-semibold">
                  {t("financeAdvisory.clientTestimonial.author")}
                </div>
              </div>

              <div className="rounded-lg p-6 bg-white dark:bg-gray-800 border flex flex-col items-center justify-center">
                <div className="text-sm text-gray-600">
                  {t("financeAdvisory.ready.heading")}
                </div>
                <Link
                  href="/contact-us"
                  className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded-md"
                >
                  {t("financeAdvisory.ready.book")}
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Case studies */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-xl font-semibold">
              {t("financeAdvisory.caseStudies.heading")}
            </h3>

            <div className="mt-6 grid md:grid-cols-3 gap-6">
              {[
                {
                  img: "https://i.pinimg.com/1200x/d5/5d/4d/d55d4d930c4604378a89da1eecbfd40f.jpg",
                  alt: t("financeAdvisory.caseStudies.market.alt"),
                  title: t("financeAdvisory.caseStudies.market.title"),
                  desc: t("financeAdvisory.caseStudies.market.desc"),
                },
                {
                  img: "https://i.pinimg.com/1200x/78/60/d8/7860d8c1b252a253fffd371a29f6e282.jpg",
                  alt: t("financeAdvisory.caseStudies.retail.alt"),
                  title: t("financeAdvisory.caseStudies.retail.title"),
                  desc: t("financeAdvisory.caseStudies.retail.desc"),
                },
                {
                  img: "https://i.pinimg.com/736x/e9/0a/0f/e90a0f3afc41773f1eee7259d81e61f5.jpg",
                  alt: t("financeAdvisory.caseStudies.saas.alt"),
                  title: t("financeAdvisory.caseStudies.saas.title"),
                  desc: t("financeAdvisory.caseStudies.saas.desc"),
                },
              ].map((c) => (
                <article
                  key={c.title}
                  className="rounded-lg overflow-hidden bg-black/5 dark:bg-white/5 shadow-lg hover:shadow-2xl transform hover:-translate-y-1 transition"
                >
                  <div className="relative h-48">
                    <Image
                      src={c.img}
                      alt={c.alt}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute inset-0 bg-linear-to-t from-black/50 via-transparent to-transparent"></div>
                    <div className="absolute left-4 bottom-4 right-4 text-white">
                      <div className="font-semibold text-lg drop-shadow">
                        {c.title}
                      </div>
                      <p className="mt-2 text-sm opacity-90 drop-shadow">
                        {c.desc}
                      </p>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-indigo-700 text-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              {t("financeAdvisory.cta.heading")}
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-indigo-100">
              {t("financeAdvisory.cta.paragraph")}
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-block px-6 py-3 bg-white text-indigo-700 rounded-md font-semibold"
              >
                {t("financeAdvisory.cta.button")}
              </Link>
              <Link
                href="/services"
                className="inline-block px-6 py-3 border border-white/30 rounded-md text-white"
              >
                {t("financeAdvisory.cta.learnMore")}
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
};

export default FinancialAdvisory;
