import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import SiteHeadder from "@/components/SiteHeadder";
import SiteFooter from "@/components/SiteFooter";

const TechnologyITConsulting: React.FC = () => {
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
  return (
    <>
      <Head>
        <title>Technology & IT Consulting — Enkonix Insights</title>
        <meta
          name="description"
          content="Technology & IT consulting: build resilient platforms, modernise legacy systems and align engineering to business outcomes."
        />
      </Head>

      <SiteHeadder />

      <main className="min-h-screen caret-transparent  bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Hero */}
        <section className="py-20 min-h-screen flex justify-center items-center bg-linear-to-r from-indigo-600 to-pink-500 text-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Technology & IT consulting that moves the business forward
            </h1>
            <p className="mt-4 text-lg max-w-3xl mx-auto">
              Modernise legacy systems, secure your platform, and align
              engineering to measurable business outcomes.
            </p>
            <div className="mt-6">
              <Link
                href="/contact-us"
                className="inline-block px-5 py-3 bg-white text-indigo-700 rounded-md font-semibold"
              >
                Book a technology review
              </Link>
            </div>
          </div>
        </section>

        {/* Overview & Challenges */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold">
                Common technology challenges we solve
              </h2>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                Many organisations are held back by fragile legacy systems,
                fragmentated tooling and lack of engineering alignment to core
                business goals. We focus on pragmatic modernisation and
                measurable value delivery.
              </p>

              <ul className="mt-6 space-y-3 text-gray-600 dark:text-gray-400">
                <li>• Legacy platforms that slow feature delivery</li>
                <li>• Unclear ownership across infrastructure and apps</li>
                <li>• Security and compliance gaps</li>
                <li>• High operational toil and incident frequency</li>
              </ul>
            </div>

            <div>
              <Image
                src="/services/strategy-overview.jpg"
                alt="Strategy overview"
                width={640}
                height={380}
                className="rounded-md object-cover w-full h-56"
              />
            </div>
          </div>
        </section>

        {/* Our approach (new style) */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid lg:grid-cols-2 gap-10 items-center">
              <div>
                <h3 className="text-2xl font-semibold">
                  How we help technology teams deliver
                </h3>
                <p className="mt-3 text-gray-700 dark:text-gray-300">
                  We assess platform health, reduce technical debt and embed
                  practices that increase deployment frequency and reliability.
                </p>

                <div className="mt-8 grid sm:grid-cols-3 gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-none w-10 h-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <div className="font-semibold">Assess</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Rapid platform and architecture health checks to
                        identify high-impact technical risks.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-none w-10 h-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <div className="font-semibold">Plan</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Roadmaps that prioritise business impact and reduce risk
                        during migration.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-none w-10 h-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
                      3
                    </div>
                    <div>
                      <div className="font-semibold">Deliver</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Incremental migrations and automation that lower cost
                        and improve reliability.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <blockquote className="border-l-4 pl-4 italic text-gray-700 dark:text-gray-300">
                    “We reduced incidents and increased release confidence — our
                    platform is now stable enough to move faster.” — CTO
                  </blockquote>
                </div>
              </div>

              <div className="hidden lg:block">
                <Image
                  src="/services/approach-visual.jpg"
                  alt="Approach"
                  width={720}
                  height={520}
                  className="rounded-md object-cover w-full h-80"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Services — different style */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-xl font-semibold">Services we offer</h3>

            {/* Stats row */}
            <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-4">
              <div className="p-4 bg-white shadow-2xl dark:bg-gray-800 rounded-lg text-center">
                <Counter to={99} suffix="%" />
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Uptime improvement in our platform projects
                </div>
              </div>
              <div className="p-4 bg-white shadow-2xl dark:bg-gray-800 rounded-lg text-center">
                <Counter to={2} suffix="w" />
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Typical time to first measurable reliability win
                </div>
              </div>
              <div className="p-4 bg-white shadow-2xl dark:bg-gray-800 rounded-lg text-center">
                <Counter to={60} suffix="%" />
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Reduction in toil through automation (typical)
                </div>
              </div>
            </div>

            {/* Left-accent cards */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="rounded-lg bg-white dark:bg-gray-800 overflow-hidden shadow">
                <div className="border-l-4 border-indigo-600 p-6">
                  <div className="font-semibold">
                    Platform architecture & modernisation
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Re-architect services to reduce coupling, enable independent
                    delivery and lower operational risk.
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white dark:bg-gray-800 overflow-hidden shadow">
                <div className="border-l-4 border-indigo-600 p-6">
                  <div className="font-semibold">Cloud & infrastructure</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Design secure, cost-effective cloud platforms and migration
                    plans.
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white dark:bg-gray-800 overflow-hidden shadow">
                <div className="border-l-4 border-indigo-600 p-6">
                  <div className="font-semibold">
                    Observability & SRE practices
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Implement monitoring, runbooks and automation to reduce
                    incident impact.
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white dark:bg-gray-800 overflow-hidden shadow">
                <div className="border-l-4 border-indigo-600 p-6">
                  <div className="font-semibold">Security & compliance</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Threat modelling, compliance assessments and practical
                    remediation plans.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-6 items-start">
              <div className="md:col-span-2 rounded-lg p-6 bg-white dark:bg-gray-800 shadow">
                <div className="font-semibold">Client testimonial</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                  “Enkonix stabilised our platform and helped us ship features
                  with confidence — the ops burden dropped significantly.”
                </div>
                <div className="mt-4 text-sm font-semibold">
                  — CTO, SaaS scale-up
                </div>
              </div>

              <div className="rounded-lg p-6 bg-white dark:bg-gray-800 border flex flex-col items-center justify-center">
                <div className="text-sm text-gray-600">Ready to start?</div>
                <Link
                  href="/contact-us"
                  className="mt-4 inline-block px-4 py-2 bg-indigo-600 text-white rounded-md"
                >
                  Book discovery
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* Case studies — image-led cards (rendered from array) */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-xl font-semibold">Case studies</h3>

            <div className="mt-6 grid md:grid-cols-3 gap-6">
              {[
                {
                  img: "/clients/tech-platform.jpg",
                  alt: "Platform modernisation",
                  title: "SaaS — platform modernisation",
                  desc: "Migrated core services to a modular architecture and reduced release risk.",
                },
                {
                  img: "/clients/tech-cloud.jpg",
                  alt: "Cloud migration",
                  title: "Retail — cloud migration",
                  desc: "Lifted-and-refactored workloads to cloud and optimised costs.",
                },
                {
                  img: "/clients/tech-sre.jpg",
                  alt: "SRE & observability",
                  title: "Logistics — SRE & observability",
                  desc: "Introduced monitoring, alerting and runbooks to reduce incident time-to-resolution.",
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

        {/* CTA — full-bleed dark hero */}
        <section className="py-20 bg-indigo-700 text-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Ready to make strategy real?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-indigo-100">
              Book a short discovery call and we'll sketch a practical 90-day
              plan that starts delivering measurable outcomes quickly.
            </p>

            <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/contact-us"
                className="inline-block px-6 py-3 bg-white text-indigo-700 rounded-md font-semibold"
              >
                Book discovery
              </Link>
              <Link
                href="/services"
                className="inline-block px-6 py-3 border border-white/30 rounded-md text-white"
              >
                See services
              </Link>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
};

export default TechnologyITConsulting;
