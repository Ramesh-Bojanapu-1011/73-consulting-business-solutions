import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import SiteHeadder from "@/components/SiteHeadder";
import SiteFooter from "@/components/SiteFooter";

const OperationsOptimization: React.FC = () => {
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
        <title>Operations optimization — Enkonix Insights</title>
        <meta
          name="description"
          content="Operations optimisation for mid-market firms: streamline workflows, add observability and automate repeatable tasks to reduce cost and risk."
        />
      </Head>

      <SiteHeadder />

      <main className="min-h-screen caret-transparent  bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Hero */}
        <section className="py-20 min-h-screen flex justify-center items-center bg-linear-to-r from-indigo-600 to-pink-500 text-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Operations optimization for mid-market leaders
            </h1>
            <p className="mt-4 text-lg max-w-3xl mx-auto">
              Streamline operations, reduce handoffs and embed automated
              processes so teams deliver faster with less risk.
            </p>
            <div className="mt-6">
              <Link
                href="/contact-us"
                className="inline-block px-5 py-3 bg-white text-indigo-700 rounded-md font-semibold"
              >
                Book an ops optimisation call
              </Link>
            </div>
          </div>
        </section>

        {/* Overview & Challenges */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold">
                Operational friction we solve
              </h2>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                Inefficient handoffs, manual reconciliation processes and poor
                observability increase cost and slow outcomes. We optimise
                workflows, automate repeatable tasks and surface the right
                telemetry so teams can act faster.
              </p>

              <ul className="mt-6 space-y-3 text-gray-600 dark:text-gray-400">
                <li>
                  • Manual reconciliation and frequent operational fire-drills
                </li>
                <li>• Poor visibility into performance and cost drivers</li>
                <li>
                  • High operational overhead from one-off engineering work
                </li>
                <li>• Lack of clear SLAs and runbooks for critical flows</li>
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
                  Our ops-first approach
                </h3>
                <p className="mt-3 text-gray-700 dark:text-gray-300">
                  We run focused operational discovery, design reliable
                  automation patterns and deliver small pilots that reduce cycle
                  time and operational cost.
                </p>

                <div className="mt-8 grid sm:grid-cols-3 gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-none w-10 h-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <div className="font-semibold">Discover</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Targeted operational discovery to identify high-impact
                        workflow improvements.
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="flex-none w-10 h-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
                      2
                    </div>
                    <div>
                      <div className="font-semibold">Define</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Clear operational KPIs, owners and escalation paths so
                        improvements are measurable.
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
                        Short pilots that automate manual steps and reduce
                        mean-time-to-recover.
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <div className="text-sm text-gray-600 dark:text-gray-400">
                    Typical engagement phases
                  </div>
                  <div className="mt-4 flex items-center gap-6 overflow-auto">
                    <div className="shrink-0 text-center">
                      <div className="text-xs text-gray-500">Week 1</div>
                      <div className="font-semibold">Ops discovery</div>
                    </div>
                    <div className="shrink-0 text-center">
                      <div className="text-xs text-gray-500">Weeks 2–4</div>
                      <div className="font-semibold">Automate & validate</div>
                    </div>
                    <div className="shrink-0 text-center">
                      <div className="text-xs text-gray-500">Weeks 5–8</div>
                      <div className="font-semibold">Pilot & measure</div>
                    </div>
                    <div className="shrink-0 text-center">
                      <div className="text-xs text-gray-500">Week 9+</div>
                      <div className="font-semibold">Scale</div>
                    </div>
                  </div>
                </div>

                <div className="mt-6">
                  <blockquote className="border-l-4 pl-4 italic text-gray-700 dark:text-gray-300">
                    “Automating a handful of reconciliation tasks saved our ops
                    team dozens of hours each week.” — Head of Ops, Retailer
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
                <Counter to={40} suffix="%" />
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Typical reduction in manual effort
                </div>
              </div>
              <div className="p-4 bg-white shadow-2xl dark:bg-gray-800 rounded-lg text-center">
                <Counter to={20} suffix="%" />
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Decrease in incident frequency after baseline fixes
                </div>
              </div>
              <div className="p-4 bg-white shadow-2xl dark:bg-gray-800 rounded-lg text-center">
                <Counter to={3} suffix="w" />
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Typical time to a measurable cost or performance win
                </div>
              </div>
            </div>

            {/* Left-accent cards */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="rounded-lg bg-white dark:bg-gray-800 overflow-hidden shadow">
                <div className="border-l-4 border-indigo-600 p-6">
                  <div className="font-semibold">
                    Process mapping & efficiency
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Map end-to-end workflows to remove waste and unnecessary
                    handoffs.
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white dark:bg-gray-800 overflow-hidden shadow">
                <div className="border-l-4 border-indigo-600 p-6">
                  <div className="font-semibold">
                    Observability & monitoring
                  </div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Implement telemetry, alerts and dashboards that surface
                    problems before they escalate.
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white dark:bg-gray-800 overflow-hidden shadow">
                <div className="border-l-4 border-indigo-600 p-6">
                  <div className="font-semibold">Automation & runbooks</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Automate repeatable operational tasks and provide runbooks
                    to reduce cognitive load.
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white dark:bg-gray-800 overflow-hidden shadow">
                <div className="border-l-4 border-indigo-600 p-6">
                  <div className="font-semibold">Ops maturity & training</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Build skills and processes so the improvements are
                    sustained.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-6 items-start">
              <div className="md:col-span-2 rounded-lg p-6 bg-white dark:bg-gray-800 shadow">
                <div className="font-semibold">Client testimonial</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                  “By automating our nightly reconciliation and adding
                  observability we reduced incidents and freed 30% of our
                  engineers' time.”
                </div>
                <div className="mt-4 text-sm font-semibold">
                  — Head of Ops, Payments
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
                  img: "/clients/ops-reconcile.jpg",
                  alt: "Reconciliation automation",
                  title: "Retail — reconciliation automation",
                  desc: "Automated nightly reconciliation to remove manual effort and reduce errors.",
                },
                {
                  img: "/clients/ops-monitor.jpg",
                  alt: "Monitoring platform",
                  title: "Logistics — improved observability",
                  desc: "Implemented observability and alerts that reduced incident time-to-detect.",
                },
                {
                  img: "/clients/ops-runbook.jpg",
                  alt: "Runbooks and automation",
                  title: "Payments — runbooks & automation",
                  desc: "Created runbooks and automated routine ops to reduce mean time to recover.",
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

export default OperationsOptimization;
