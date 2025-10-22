import React from "react";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import AOS from "aos";
import "aos/dist/aos.css";

import SiteHeadder from "@/components/SiteHeadder";
import SiteFooter from "@/components/SiteFooter";

const ServicesPage: React.FC = () => {
  React.useEffect(() => {
    AOS.init({ duration: 800 });
  }, []);

  const services = [
    {
      slug: "strategy-&-Planning",
      title: "Strategy & Planning",
      short:
        "Align leadership on high-impact priorities, roadmaps and measurable KPIs to drive strategic growth.",

      image: "/services/business-strategy.jpg",
    },
    {
      slug: "digital-transformation",
      title: "Digital Transformation",
      short:
        "Modernise platforms and migrate to cloud-native architectures that reduce risk and enable scale.",

      image: "/services/technology-cloud.jpg",
    },
    {
      slug: "operations-optimization",
      title: "Operations Optimization",
      short:
        "Streamline processes, reduce cost and improve throughput through targeted operational improvements.",

      image: "/services/finance-ops.jpg",
    },
    {
      slug: "finance-advisory",
      title: "Financial Advisory",
      short:
        "Deliver actionable finance transformation, forecasting and commercial due diligence support.",

      image: "/services/customer-experience.jpg",
    },
    {
      slug: "hr-&-organizational-design",
      title: "HR & Organizational Design",
      short:
        "Align organisation design, roles and governance to support strategic priorities and ways of working.",

      image: "/services/data-analytics.jpg",
    },
    {
      slug: "technology-&-it-consulting",
      title: "Technology & IT Consulting",
      short:
        "Architect, build and secure platforms with pragmatic engineering and ops practices.",

      image: "/services/change-management.jpg",
    },
  ];

  return (
    <>
      <Head>
        <title>Services — Consulting / Business Solutions</title>
        <meta
          name="description"
          content="Our services: strategy, technology, finance, data and change management."
        />
      </Head>

      <SiteHeadder />

      <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-800 dark:text-gray-100 caret-transparent">
        {/* Hero */}
        <section className="py-20 bg-linear-to-r from-indigo-600 to-pink-500 text-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Our Services
            </h1>
            <p className="mt-4 max-w-2xl mx-auto">
              End-to-end consulting and delivery across strategy, cloud,
              analytics and operations.
            </p>
          </div>
        </section>

        {/* Services grid (6) */}
        <section className="py-16">
          <div className="  mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold  text-center mb-6">What we do</h2>

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
                        Learn more
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Approach section */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-4">Our approach</h2>
            <p className="text-gray-700 dark:text-gray-300">
              We combine strategy, analytics and engineering to deliver
              measurable outcomes. Our engagements are structured to deliver
              value quickly and build internal capability for sustainable
              change.
            </p>
          </div>
        </section>

        {/* Case studies / examples */}
        <section className="py-16">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-2xl font-bold mb-6">Case studies</h2>
            <div className="grid grid-cols-1 min-[769px]:grid-cols-3 gap-6">
              <div className="p-6 bg-white/60 dark:bg-gray-800/60 rounded-lg border">
                <h3 className="font-semibold">
                  RetailCo: Fulfilment optimisation
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  Reduced operating costs and improved fulfilment times through
                  process redesign and automation.
                </p>
              </div>
              <div className="p-6 bg-white/60 dark:bg-gray-800/60 rounded-lg border">
                <h3 className="font-semibold">FinBank: Tech transformation</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  Delivered a cloud migration and platform re-architecture to
                  improve scalability and reduce TCO.
                </p>
              </div>
              <div className="p-6 bg-white/60 dark:bg-gray-800/60 rounded-lg border">
                <h3 className="font-semibold">SaaSify: Product & ops</h3>
                <p className="text-sm text-gray-600 dark:text-gray-300 mt-2">
                  Helped prioritise initiatives and build delivery capability to
                  accelerate feature throughput.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Contact CTA */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to get started?</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              Book a complimentary discovery conversation to explore how we can
              help.
            </p>
            <Link
              href="/contact-us"
              className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md shadow"
            >
              Book a discovery call
            </Link>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
};

export default ServicesPage;
