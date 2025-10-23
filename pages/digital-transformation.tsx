import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import SiteHeadder from "@/components/SiteHeadder";
import SiteFooter from "@/components/SiteFooter";

const DigitalTransformation: React.FC = () => {
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
        { threshold: 0.3 }
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
        <title>Digital transformation — Enkonix Insights</title>
        <meta
          name="description"
          content="Digital transformation for mid-market firms: practical cloud adoption, data foundations and repeatable delivery patterns to accelerate value."
        />
      </Head>

      <SiteHeadder />

      <main className="min-h-screen caret-transparent  bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Hero */}
        <section className="py-20 min-h-screen flex justify-center items-center bg-linear-to-r from-indigo-600 to-pink-500 text-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Digital transformation that actually delivers
            </h1>
            <p className="mt-4 text-lg max-w-3xl mx-auto">
              Practical cloud adoption, stronger data foundations and repeatable delivery patterns so mid-market firms convert investment into measurable value.
            </p>
            <div className="mt-6">
              <Link
                href="/contact-us"
                className="inline-block px-5 py-3 bg-white text-indigo-700 rounded-md font-semibold"
              >
                Start a transformation conversation
              </Link>
            </div>
          </div>
        </section>

        {/* Overview & Challenges */}
        <section className="py-16">
          <div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold">Why digital transformation stalls</h2>
              <p className="mt-4 text-gray-700 dark:text-gray-300">
                Transformation projects often fail to deliver because teams
                chase technology without clear outcomes, lack data that
                supports decisions, or adopt cloud patterns that aren't
                aligned to business priorities. We focus on the smallest
                changes that unlock predictable, measurable value.
              </p>

              <ul className="mt-6 space-y-3 text-gray-600 dark:text-gray-400">
                <li>• Technology-first roadmaps with no clear business metrics</li>
                <li>• Data scattered across teams and systems</li>
                <li>• Siloed delivery that doesn't embed operational change</li>
                <li>• Premature scale without an effective pilot and feedback loop</li>
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
                <h3 className="text-2xl font-semibold">How we make transformation stick</h3>
                <p className="mt-3 text-gray-700 dark:text-gray-300">
                  We combine outcome-focused discovery, pragmatic engineering
                  patterns and short pilots to prove value quickly. That
                  creates the case and capability to scale safely.
                </p>

                <div className="mt-8 grid sm:grid-cols-3 gap-4">
                  <div className="flex items-start gap-4">
                    <div className="flex-none w-10 h-10 rounded-lg bg-indigo-600 text-white flex items-center justify-center">
                      1
                    </div>
                    <div>
                      <div className="font-semibold">Discover</div>
                      <div className="text-sm text-gray-600 dark:text-gray-400">
                        Targeted discovery to identify high-impact use
                        cases and the smallest viable changes.
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
                        Clear success metrics, owners and acceptance
                        criteria so pilots can be evaluated objectively.
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
                        Short, measurable pilots that validate value and
                        create reusable delivery patterns.
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
                      <div className="font-semibold">Discovery</div>
                    </div>
                    <div className="shrink-0 text-center">
                      <div className="text-xs text-gray-500">Weeks 2–4</div>
                      <div className="font-semibold">Prototype & validate</div>
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
                    “The pilot proved out our assumptions and within two
                    months we were already seeing a measurable uplift in
                    customer retention.” — CTO, SaaS provider
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
                <Counter to={30} suffix="%" />
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Typical reduction in lead time to deploy
                </div>
              </div>
              <div className="p-4 bg-white shadow-2xl dark:bg-gray-800 rounded-lg text-center">
                <Counter to={10} suffix="w" />
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Pilot to measurable benefit (typical)
                </div>
              </div>
              <div className="p-4 bg-white shadow-2xl dark:bg-gray-800 rounded-lg text-center">
                <Counter to={2} suffix="x" />
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Faster time-to-value vs traditional projects
                </div>
              </div>
            </div>

            {/* Left-accent cards */}
            <div className="mt-8 grid md:grid-cols-2 gap-6">
              <div className="rounded-lg bg-white dark:bg-gray-800 overflow-hidden shadow">
                <div className="border-l-4 border-indigo-600 p-6">
                  <div className="font-semibold">Cloud strategy & roadmap</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Pragmatic cloud adoption plans that prioritise quick wins
                    and minimise migration risk.
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white dark:bg-gray-800 overflow-hidden shadow">
                <div className="border-l-4 border-indigo-600 p-6">
                  <div className="font-semibold">Data foundations</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Build a single source of truth and analytics patterns that
                    unlock actionable insights.
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white dark:bg-gray-800 overflow-hidden shadow">
                <div className="border-l-4 border-indigo-600 p-6">
                  <div className="font-semibold">Delivery & platform engineering</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Implement repeatable platform patterns and CI/CD to make
                    pilots low-cost and safe to run.
                  </div>
                </div>
              </div>

              <div className="rounded-lg bg-white dark:bg-gray-800 overflow-hidden shadow">
                <div className="border-l-4 border-indigo-600 p-6">
                  <div className="font-semibold">Change & adoption coaching</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400 mt-2">
                    Practical coaching to ensure new ways of working stick.
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-8 grid md:grid-cols-3 gap-6 items-start">
              <div className="md:col-span-2 rounded-lg p-6 bg-white dark:bg-gray-800 shadow">
                <div className="font-semibold">Client testimonial</div>
                <div className="text-sm text-gray-600 dark:text-gray-400 mt-3">
                  “Enkonix helped us run a lightweight pilot, prove the
                  business case and scale a platform pattern that reduced
                  time-to-onboard by 40%.”
                </div>
                <div className="mt-4 text-sm font-semibold">— CTO, Fintech</div>
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
                  img: "/clients/saas-pilot.jpg",
                  alt: "SaaS pilot",
                  title: "SaaS provider — pilot to scale",
                  desc: "Validated a revenue-focused experiment and reduced onboarding time by 40%.",
                },
                {
                  img: "/clients/retail-forecast.jpg",
                  alt: "Retail forecasting",
                  title: "Retail chain — forecasting platform",
                  desc: "Built a single forecasting model that cut planning time and improved margin predictions.",
                },
                {
                  img: "/clients/fintech-onboard.jpg",
                  alt: "Fintech onboarding",
                  title: "Fintech — faster onboarding",
                  desc: "Short pilots and repeatable platform patterns reduced onboarding friction and time-to-live.",
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

export default DigitalTransformation;
