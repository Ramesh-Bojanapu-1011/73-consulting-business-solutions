import SiteFooter from "@/components/SiteFooter";
import SiteHeadder from "@/components/SiteHeadder";
import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React from "react";
import AOS from "aos";

const HomePage = () => {
  React.useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);
  return (
    <>
      <Head>
        <title>Home — Consulting / Business Solutions</title>
      </Head>

      <SiteHeadder />

      <main className="bg-white dark:bg-gray-900     caret-transparent">
        {/* Section 1: Hero (two-column with image) */}
        <section className="py-20 bg-linear-to-r from-indigo-500 via-indigo-600 to-pink-500 dark:from-gray-900 dark:via-gray-800 dark:to-gray-700 text-white min-h-screen flex items-center ">
          <div className="max-w-7xl mx-auto px-6 ">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left: copy */}
              <div className="order-2 lg:order-1 text-left">
                <span className="inline-block bg-white/10 text-white text-sm font-medium px-3 py-1 rounded-md">
                  Our Integrated IT Solutions
                </span>

                <h1 className="mt-6 text-4xl md:text-6xl font-extrabold leading-tight">
                  Revolutionizing Your
                  <br /> Business with Cutting
                  <br /> Edge IT Solutions
                </h1>

                <p className="mt-6 text-lg text-white/85 max-w-xl">
                  Welcome to our IT solution website, your stop for technology
                  needs. We offer innovative solutions tailored to your business
                  to help you scale and compete.
                </p>

                <div className="mt-8 flex flex-wrap gap-4">
                  <Link
                    data-aos="zoom-in"
                    href="/contact-us"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-lg shadow"
                  >
                    Free Consultation
                    <span className="inline-block bg-white/20 p-2 rounded-full">
                      ↗
                    </span>
                  </Link>

                  <Link
                    data-aos="zoom-in"
                    href="/services"
                    className="inline-flex items-center gap-3 px-6 py-3 bg-white text-gray-800 rounded-lg shadow"
                  >
                    Discover Now
                    <span className="inline-block bg-orange-100 text-orange-600 p-2 rounded-full">
                      ↗
                    </span>
                  </Link>
                </div>
              </div>

              {/* Right: image card */}
              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-md lg:max-w-lg">
                  <div className="absolute inset-0 rounded-2xl bg-white/10 blur-xl transform -translate-x-6 -translate-y-6" />
                  <div className="relative bg-white rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                      src="/hero-team.jpg"
                      alt="Team working"
                      width={500}
                      height={500}
                      className="w-full h-80 object-cover"
                    />
                    {/* decorative overlay */}
                    <svg
                      className="absolute right-4 top-4 w-24 h-24 opacity-40"
                      viewBox="0 0 100 100"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx="50"
                        cy="50"
                        r="48"
                        stroke="white"
                        strokeWidth="2"
                        strokeOpacity="0.12"
                      />
                    </svg>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 2: About / Discover Our Story (image left, text right) */}
        <section id="services" className="py-16">
          <div className="max-w-6xl mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left: image with badge */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative w-full max-w-md lg:max-w-lg">
                  <div className="rounded-2xl overflow-hidden shadow-lg">
                    <Image
                      src="/hero-team.jpg"
                      alt="Team collaboration"
                      width={700}
                      height={700}
                      className="w-full h-[420px] object-cover"
                    />
                  </div>

                  {/* Badge card */}
                  <div className="absolute left-6 bottom-6 bg-indigo-600 text-white rounded-lg p-4 shadow-lg w-44">
                    <div className="flex items-start gap-3">
                      <div className="bg-white/10 p-2 rounded-md">
                        <svg
                          className="w-6 h-6 text-white"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                        >
                          <path
                            strokeWidth="1.5"
                            d="M12 2v4M4.93 4.93l2.83 2.83M2 12h4M4.93 19.07l2.83-2.83M12 20v-4M19.07 19.07l-2.83-2.83M20 12h-4M19.07 4.93l-2.83 2.83"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="text-xl font-bold">24/7 Support</div>
                        <div className="text-sm">
                          TechXen Technology & IT Solution
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right: text */}
              <div>
                <div className="text-sm font-medium text-indigo-600 mb-3 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-indigo-600"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <path
                      d="M12 2L19 8v8l-7 6-7-6V8l7-6z"
                      stroke="currentColor"
                      strokeWidth="1.5"
                    />
                  </svg>
                  About Our Company
                </div>

                <h3
                  data-aos="zoom-in-left"
                  className="text-3xl font-extrabold text-gray-900 dark:text-white"
                >
                  Discover Our Story Empowering Business Through Innovation
                </h3>

                <p
                  data-aos="zoom-in-left"
                  className="mt-4 text-gray-600 dark:text-gray-300 max-w-prose"
                >
                  TechXen is a pioneering force in the realm of technology and
                  IT solutions, dedicated to revolutionising the way businesses
                  thrive in the digital age. Our approach is rooted in
                  collaboration, transparency, and a relentless pursuit of
                  excellence.
                </p>

                {(() => {
                  const bullets = [
                    "Dramatically re-engineer value added IT systems.",
                    "Highlight any unique selling points or differentiators.",
                    "Incorporate visuals such as team photos shots.",
                  ];

                  return (
                    <ul className="mt-6 space-y-3">
                      {bullets.map((b) => (
                        <li key={b} className="flex items-start gap-3">
                          <span className="shrink-0 mt-1 w-6 h-6 bg-indigo-600 text-white rounded-full flex items-center justify-center">
                            ✓
                          </span>
                          <span className="text-gray-800 dark:text-gray-200">
                            {b}
                          </span>
                        </li>
                      ))}
                    </ul>
                  );
                })()}

                <div className="mt-8">
                  <Link
                    href="/about-us"
                    className="inline-flex items-center gap-2 px-5 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md"
                  >
                    Discover More →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 3: Strategy (image-style, light/dark) */}
        <section className="py-20 bg-indigo-900 text-white dark:bg-white dark:text-gray-900">
          <div className=" max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left: copy */}
              <div className="order-2 lg:order-1">
                <span className="inline-block text-sm font-medium text-indigo-300 dark:text-indigo-600 mb-4">
                  Best IT Solution
                </span>

                <h2 className="mt-2 text-3xl md:text-4xl font-extrabold leading-tight">
                  Let's Elevate Your Business with Strategic IT Solutions
                </h2>

                <p className="mt-4 text-indigo-200 dark:text-gray-600 max-w-lg">
                  At TechXen, we design flexible IT solutions to address your
                  specific challenges and goals — from secure networks to
                  managed services that let you focus on your core business.
                </p>

                <div className="mt-8 space-y-6">
                  {[
                    {
                      title: "Network Infrastructure Solutions",
                      desc: "Build a reliable and secure network infrastructure that supports your business operations.",
                    },
                    {
                      title: "Managed IT Services",
                      desc: "Focus on core business activities while we manage your IT needs with proactive support.",
                    },
                  ].map((s) => (
                    <div key={s.title} className="flex items-start gap-4">
                      <div className="shrink-0 w-10 h-10 bg-indigo-700 text-white rounded-full flex items-center justify-center dark:bg-indigo-50 dark:text-indigo-600">
                        <svg
                          className="w-5 h-5 text-current"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M12 2v4M4.93 4.93l2.83 2.83M20 12h-4"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-white dark:text-gray-900">
                          {s.title}
                        </div>
                        <div className="text-indigo-200 dark:text-gray-600 text-sm">
                          {s.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link
                    href="/services"
                    className="inline-block px-5 py-3 bg-orange-500 hover:bg-orange-600 text-white rounded-full"
                  >
                    Discover More
                  </Link>
                </div>
              </div>

              {/* Right: image composition (uses theme-colored frames) */}
              <div className="order-1 lg:order-2 flex justify-center lg:justify-end">
                <div className="relative w-full max-w-lg">
                  <div className="bg-linear-to-br from-indigo-800 to-indigo-700 dark:from-indigo-50 dark:to-indigo-100 rounded-2xl p-4 relative overflow-hidden">
                    <div className="rounded-xl overflow-hidden shadow-2xl relative">
                      <Image
                        src="/hero-team.jpg"
                        alt="Team at work"
                        width={900}
                        height={600}
                        className="w-full h-[360px] object-cover"
                      />
                      <div className="absolute inset-0 pointer-events-none bg-indigo-900/40 dark:bg-indigo-50/70" />
                    </div>
                  </div>

                  {/* small decorative thumbnails using theme borders */}
                  <div className="absolute -left-6 -top-6 w-28 h-20 rounded-lg overflow-hidden border-4 border-indigo-700 dark:border-indigo-300 bg-neutral-50">
                    <Image
                      src="/hero-team.jpg"
                      alt="thumb"
                      width={200}
                      height={140}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="absolute -right-6 -bottom-6 w-28 h-20 rounded-lg overflow-hidden border-4 border-pink-500 dark:border-pink-300 bg-neutral-50">
                    <Image
                      src="/hero-team.jpg"
                      alt="thumb2"
                      width={200}
                      height={140}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4: Themed Image + Features (mask image colors with theme) */}
        <section className="py-20 bg-white dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
              {/* Left: circular image masked with theme overlay */}
              <div className="flex justify-center lg:justify-start">
                <div className="relative w-[360px] h-[360px] rounded-full overflow-hidden shadow-2xl">
                  <Image
                    src="/hero-team.jpg"
                    alt="team"
                    fill
                    style={{ objectFit: "cover" }}
                  />
                  {/* theme overlay to neutralize photo colors */}
                  <div className="absolute inset-0 bg-indigo-600/60 dark:bg-indigo-900/50" />
                  {/* decorative dots */}
                  <div className="absolute -bottom-6 right-6 w-24 h-24 bg-linear-to-br from-pink-300 to-indigo-500 rounded-lg opacity-90" />
                </div>
              </div>

              {/* Right: text content */}
              <div>
                <div className="text-sm font-medium text-indigo-600 mb-3">
                  Why Choose Us
                </div>
                <h3 className="text-3xl font-extrabold text-gray-900 dark:text-white">
                  We Create Result-Oriented Dynamic Applications
                </h3>
                <p className="mt-4 text-gray-600 dark:text-gray-300 max-w-prose">
                  Over 25 years working in IT services developing software
                  applications and mobile apps for clients all over the world.
                </p>

                <div className="mt-6 space-y-6">
                  {[
                    {
                      title: "First Growing Process",
                      desc: "At vero eos et accusamus et iusto odio praesentium.",
                    },
                    {
                      title: "Clean code",
                      desc: "At vero eos et accusamus et iusto odio praesentium.",
                    },
                    {
                      title: "Well Documentation",
                      desc: "At vero eos et accusamus et iusto odio praesentium.",
                    },
                  ].map((f) => (
                    <div key={f.title} className="flex items-start gap-4">
                      <div className="shrink-0 w-12 h-12 bg-white rounded-lg flex items-center justify-center text-indigo-600">
                        {/* icon placeholder */}
                        <svg
                          className="w-6 h-6"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <path
                            d="M3 12h18"
                            stroke="currentColor"
                            strokeWidth="1.5"
                          />
                        </svg>
                      </div>
                      <div>
                        <div className="font-semibold text-gray-900 dark:text-white">
                          {f.title}
                        </div>
                        <div className="text-sm text-gray-600 dark:text-gray-300">
                          {f.desc}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                <div className="mt-8">
                  <Link
                    href="/services"
                    className="inline-block px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-md"
                  >
                    Discover More
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5: Industries / Services Grid (10 items) */}
        <section className="py-20 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-7xl mx-auto px-6">
            <div className="text-center mb-10">
              <div className="text-sm font-medium text-orange-500">
                WORK FOR ANY INDUSTRY
              </div>
              <h2 className="mt-4 text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
                Best Solutions, For All Organizations
              </h2>
              <p className="mt-3 text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                We deliver industry-focused services to help businesses scale,
                modernize and transform.
              </p>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
              {[
                {
                  label: "Software",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={100}
                      height={100}
                      viewBox="0 0 32 32"
                    >
                      <path
                        fill="#0288d1"
                        d="M16 12c7.444 0 12 2.59 12 4s-4.556 4-12 4s-12-2.59-12-4s4.556-4 12-4m0-2c-7.732 0-14 2.686-14 6s6.268 6 14 6s14-2.686 14-6s-6.268-6-14-6"
                      ></path>
                      <path
                        fill="#0288d1"
                        d="M16 14a2 2 0 1 0 2 2a2 2 0 0 0-2-2"
                      ></path>
                      <path
                        fill="#0288d1"
                        d="M10.458 5.507c2.017 0 5.937 3.177 9.006 8.493c3.722 6.447 3.757 11.687 2.536 12.392a.9.9 0 0 1-.457.1c-2.017 0-5.938-3.176-9.007-8.492C8.814 11.553 8.779 6.313 10 5.608a.9.9 0 0 1 .458-.1m-.001-2A2.87 2.87 0 0 0 9 3.875C6.13 5.532 6.938 12.304 10.804 19c3.284 5.69 7.72 9.493 10.74 9.493A2.87 2.87 0 0 0 23 28.124c2.87-1.656 2.062-8.428-1.804-15.124c-3.284-5.69-7.72-9.493-10.74-9.493Z"
                      ></path>
                      <path
                        fill="#0288d1"
                        d="M21.543 5.507a.9.9 0 0 1 .457.1c1.221.706 1.186 5.946-2.536 12.393c-3.07 5.316-6.99 8.493-9.007 8.493a.9.9 0 0 1-.457-.1C8.779 25.686 8.814 20.446 12.536 14c3.07-5.316 6.99-8.493 9.007-8.493m0-2c-3.02 0-7.455 3.804-10.74 9.493C6.939 19.696 6.13 26.468 9 28.124a2.87 2.87 0 0 0 1.457.369c3.02 0 7.455-3.804 10.74-9.493C25.061 12.304 25.87 5.532 23 3.876a2.87 2.87 0 0 0-1.457-.369"
                      ></path>
                    </svg>
                  ),
                },
                {
                  label: "Fintech",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={100}
                      height={100}
                      viewBox="0 0 128 128"
                    >
                      <path
                        fill="#ffca28"
                        d="M93.46 39.45c6.71-1.49 15.45-8.15 16.78-11.43c.78-1.92-3.11-4.92-4.15-6.13c-2.38-2.76-1.42-4.12-.5-7.41c1.05-3.74-1.44-7.87-4.97-9.49s-7.75-1.11-11.3.47s-6.58 4.12-9.55 6.62c-2.17-1.37-5.63-7.42-11.23-3.49c-3.87 2.71-4.22 8.61-3.72 13.32c1.17 10.87 3.85 16.51 8.9 18.03c6.38 1.92 13.44.91 19.74-.49"
                      ></path>
                      <path
                        fill="#e2a610"
                        d="M104.36 8.18c-.85 14.65-15.14 24.37-21.92 28.65l4.4 3.78s2.79.06 6.61-1.16c6.55-2.08 16.12-7.96 16.78-11.43c.97-5.05-4.21-3.95-5.38-7.94c-.61-2.11 2.97-6.1-.49-11.9m-24.58 3.91s-2.55-2.61-4.44-3.8c-.94 1.77-1.61 3.69-1.94 5.67c-.59 3.48 0 8.42 1.39 12.1c.22.57 1.04.48 1.13-.12c1.2-7.91 3.86-13.85 3.86-13.85"
                      ></path>
                      <path
                        fill="#ffca28"
                        d="M61.96 38.16S30.77 41.53 16.7 68.61s-2.11 43.5 10.55 49.48s44.56 8.09 65.31 3.17s25.94-15.12 24.97-24.97c-1.41-14.38-14.77-23.22-14.77-23.22s.53-17.76-13.25-29.29c-12.23-10.24-27.55-5.62-27.55-5.62"
                      ></path>
                      <path
                        fill="#6b4b46"
                        d="M74.76 83.73c-6.69-8.44-14.59-9.57-17.12-12.6c-1.38-1.65-2.19-3.32-1.88-5.39c.33-2.2 2.88-3.72 4.86-4.09c2.31-.44 7.82-.21 12.45 4.2c1.1 1.04.7 2.66.67 4.11c-.08 3.11 4.37 6.13 7.97 3.53c3.61-2.61.84-8.42-1.49-11.24c-1.76-2.13-8.14-6.82-16.07-7.56c-2.23-.21-11.2-1.54-16.38 8.31c-1.49 2.83-2.04 9.67 5.76 15.45c1.63 1.21 10.09 5.51 12.44 8.3c4.07 4.83 1.28 9.08-1.9 9.64c-8.67 1.52-13.58-3.17-14.49-5.74c-.65-1.83.03-3.81-.81-5.53c-.86-1.77-2.62-2.47-4.48-1.88c-6.1 1.94-4.16 8.61-1.46 12.28c2.89 3.93 6.44 6.3 10.43 7.6c14.89 4.85 22.05-2.81 23.3-8.42c.92-4.11.82-7.67-1.8-10.97"
                      ></path>
                      <path
                        fill="none"
                        stroke="#6b4b46"
                        strokeMiterlimit={10}
                        strokeWidth={5}
                        d="M71.16 48.99c-12.67 27.06-14.85 61.23-14.85 61.23"
                      ></path>
                      <path
                        fill="#6d4c41"
                        d="M81.67 31.96c8.44 2.75 10.31 10.38 9.7 12.46c-.73 2.44-10.08-7.06-23.98-6.49c-4.86.2-3.45-2.78-1.2-4.5c2.97-2.27 7.96-3.91 15.48-1.47"
                      ></path>
                      <path
                        fill="#6b4b46"
                        d="M81.67 31.96c8.44 2.75 10.31 10.38 9.7 12.46c-.73 2.44-10.08-7.06-23.98-6.49c-4.86.2-3.45-2.78-1.2-4.5c2.97-2.27 7.96-3.91 15.48-1.47"
                      ></path>
                      <path
                        fill="#e2a610"
                        d="M96.49 58.86c1.06-.73 4.62.53 5.62 7.5c.49 3.41.64 6.71.64 6.71s-4.2-3.77-5.59-6.42c-1.75-3.35-2.43-6.59-.67-7.79"
                      ></path>
                    </svg>
                  ),
                },
                {
                  label: "Healthcare",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={100}
                      height={100}
                      viewBox="0 0 14 14"
                    >
                      <g fill="none">
                        <path
                          fill="#d7e0ff"
                          fillRule="evenodd"
                          d="M9 .5H5V5H.5v4H5v4.5h4V9h4.5V5H9z"
                          clipRule="evenodd"
                        ></path>
                        <path
                          stroke="#1447e6"
                          strokeLinejoin="round"
                          d="M9 .5H5V5H.5v4H5v4.5h4V9h4.5V5H9z"
                          strokeWidth={1}
                        ></path>
                      </g>
                    </svg>
                  ),
                },
                {
                  label: "Data Mining",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={100}
                      height={100}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#1447e6"
                        d="M14.403 8.69a7.1 7.1 0 0 0-3.348-4.217l-.869-.496l.496-.868l-1.736-.993l-.496.869L4.977 1l-.992 1.736l3.473 1.985l-.497.868l-.992 1.737L2 14.272l1.736.992l3.97-6.946l.992-1.736l.496-.869l.868.496Z"
                      ></path>
                      <path
                        fill="#1447e6"
                        d="M10 10v3h12v-3Zm11 2h-4v-1h4Zm-11 3v3h12v-3Zm11 2h-4v-1h4Zm-11 3v3h12v-3Zm11 2h-4v-1h4Z"
                      ></path>
                    </svg>
                  ),
                },
                {
                  label: "Machine learning",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={100}
                      height={100}
                      viewBox="0 0 48 48"
                    >
                      <path
                        fill="#1447e6"
                        fillRule="evenodd"
                        d="M7.197 14.23a17.54 17.54 0 0 1 8.205-7.493q-.359.688-.675 1.428c-.758 1.769-1.372 3.82-1.813 6.065zM5 22.72c0-1.553.202-3.057.582-4.49h6.753a47 47 0 0 0-.167 6.602a2 2 0 1 0 3.997-.177a44 44 0 0 1-.043-1.935c0-1.557.082-3.06.234-4.49h12.216q.11 1.039.17 2.129a2 2 0 1 0 3.994-.217a46 46 0 0 0-.144-1.912h6.754c.312 1.18.505 2.409.563 3.673a2 2 0 1 0 3.996-.184C43.38 10.326 33.983 1.25 22.464 1.25C10.609 1.25 1 10.864 1 22.72c0 7.651 4.002 14.366 10.018 18.166a2 2 0 0 0 2.136-3.382a17.55 17.55 0 0 1-6.046-6.455H12a2 2 0 1 0 0-4H5.54A17.5 17.5 0 0 1 5 22.72M29.525 6.736a17.54 17.54 0 0 1 8.206 7.494h-5.718c-.515-2.62-1.266-4.984-2.212-6.944a19 19 0 0 0-.276-.55M17 14.23h10.927c-.445-2.01-1.038-3.774-1.729-5.206c-1.41-2.921-2.848-3.774-3.734-3.774c-.475 0-1.096.216-1.842.953c-.755.746-1.527 1.924-2.218 3.537c-.554 1.293-1.031 2.807-1.404 4.49m12.938 10.52a6.5 6.5 0 0 1 4.143 0c1.359.456 3.552 1.235 6.578 2.444c1.887.753 3.359 1.378 4.479 1.875c1.155.512 1.862 1.574 1.862 2.75s-.707 2.237-1.862 2.75c-.885.391-1.989.863-3.343 1.416v2.509c0 1.464-.06 2.528-.137 3.295c-.156 1.555-1.065 2.988-2.608 3.68c-1.382.621-3.61 1.281-6.805 1.281s-5.424-.66-6.806-1.28c-1.542-.693-2.451-2.126-2.607-3.68c-.077-.768-.137-1.832-.137-3.296v-2.318q-.922-.373-1.703-.7v8.209a2 2 0 1 1-4 0V32.262q0-.173.028-.338l-.002-.106c0-1.175.708-2.237 1.863-2.75c1.12-.496 2.592-1.12 4.479-1.874c3.026-1.209 5.219-1.988 6.578-2.444m4.143 14.137c.885-.297 2.122-.73 3.713-1.331v.938c0 1.359-.055 2.287-.116 2.896c-.026.26-.144.376-.266.43c-.87.39-2.54.93-5.167.93s-4.297-.54-5.167-.93c-.122-.054-.24-.17-.266-.43c-.061-.609-.117-1.537-.117-2.896v-.761c1.367.51 2.447.887 3.243 1.154a6.5 6.5 0 0 0 4.143 0"
                        clipRule="evenodd"
                      ></path>
                    </svg>
                  ),
                },

                {
                  label: "Medical",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={100}
                      height={100}
                      viewBox="0 0 14 14"
                    >
                      <g fill="none" fillRule="evenodd" clipRule="evenodd">
                        <path
                          fill="#2859c5"
                          d="M3.656.469A2.12 2.12 0 0 1 4.999 0H9c.474 0 .96.153 1.343.469c.389.32.658.8.658 1.354V3.47a1 1 0 1 1-2 0V2H4.998v1.47a1 1 0 1 1-2 0V1.823c0-.553.268-1.034.657-1.354Z"
                        ></path>
                        <path
                          fill="#8fbffa"
                          d="M1.5 3.366C.69 3.366 0 4 0 4.826v7.684c0 .825.69 1.46 1.5 1.46h11c.81 0 1.5-.635 1.5-1.46V4.826c0-.825-.69-1.46-1.5-1.46z"
                        ></path>
                        <path
                          fill="#2859c5"
                          d="M7.625 6.668a.625.625 0 1 0-1.25 0v1.375H5a.625.625 0 1 0 0 1.25h1.375v1.375a.625.625 0 1 0 1.25 0V9.293H9a.625.625 0 1 0 0-1.25H7.625z"
                        ></path>
                      </g>
                    </svg>
                  ),
                },
                {
                  label: "Entertainment",
                  icon: (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={100}
                        height={100}
                        viewBox="0 0 48 48"
                      >
                        <path
                          fill="#3f51b5"
                          d="M43 39V24h-4v15c0 5 4 9 9 9v-4c-2.8 0-5-2.2-5-5"
                        ></path>
                        <circle cx={24} cy={24} r={19} fill="#90a4ae"></circle>
                        <circle cx={24} cy={24} r={2} fill="#37474f"></circle>
                        <g fill="#253278">
                          <circle cx={24} cy={14} r={5}></circle>
                          <circle cx={24} cy={34} r={5}></circle>
                          <circle cx={34} cy={24} r={5}></circle>
                          <circle cx={14} cy={24} r={5}></circle>
                        </g>
                      </svg>
                    </>
                  ),
                },
                {
                  label: "AI",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={100}
                      height={100}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#1447e6"
                        d="M21 10a16.84 16.84 0 0 0-9 3.244A16.84 16.84 0 0 0 3 10v2.96a2.004 2.004 0 0 0-2 2.007v1.004c0 1.109 2 2.208 2 2.208v2.007a14.87 14.87 0 0 1 7.417 2.55A15 15 0 0 1 12 24a15 15 0 0 1 1.583-1.264A14.87 14.87 0 0 1 21 20.186v-2.208a2.004 2.004 0 0 0 2-2.007v-1.004a2.004 2.004 0 0 0-2-2.007Zm-9 11.422a16.84 16.84 0 0 0-7-2.996v-6.15a14.8 14.8 0 0 1 5.417 2.282A15 15 0 0 1 12 15.822a15 15 0 0 1 1.583-1.264A14.8 14.8 0 0 1 19 12.275v6.151a16.84 16.84 0 0 0-7 2.996M11 8h2v1h-2zm0-4h2v1h-2z"
                      ></path>
                      <path
                        fill="#1447e6"
                        d="M11 10h2v1h-2zM9 5a1 1 0 0 0 1-1a.983.983 0 0 0-.99-.99A.995.995 0 1 0 9 5"
                      ></path>
                      <circle cx={15} cy={4} r={1} fill="#1447e6"></circle>
                      <path
                        fill="#1447e6"
                        d="M16 8H8a3.003 3.003 0 0 1-3-3V3a3.003 3.003 0 0 1 3-3h8a3.003 3.003 0 0 1 3 3v2a3.003 3.003 0 0 1-3 3M8 2a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V3a1 1 0 0 0-1-1Z"
                      ></path>
                    </svg>
                  ),
                },
                {
                  label: "Manufacturing",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={100}
                      height={100}
                      viewBox="0 0 24 24"
                    >
                      <path
                        fill="#1447e6"
                        d="m6.71 10l2.46 8h1.94l-4.3-8z"
                        opacity={0.3}
                      ></path>
                      <circle
                        cx={6}
                        cy={7}
                        r={1}
                        fill="#1447e6"
                        opacity={0.3}
                      ></circle>
                      <path
                        fill="#1447e6"
                        d="m19.93 8.35l-3.6 1.68L14 7.7V6.3l2.33-2.33l3.6 1.68c.38.18.82.01 1-.36c.18-.38.01-.82-.36-1l-3.92-1.83a.99.99 0 0 0-1.13.2L13.78 4.4A.98.98 0 0 0 13 4c-.55 0-1 .45-1 1v1H8.82C8.4 4.84 7.3 4 6 4C4.34 4 3 5.34 3 7c0 1.1.6 2.05 1.48 2.58L7.08 18H6c-1.1 0-2 .9-2 2v1h13v-1c0-1.1-.9-2-2-2h-1.62L8.41 8.77c.17-.24.31-.49.41-.77H12v1c0 .55.45 1 1 1c.32 0 .6-.16.78-.4l1.74 1.74c.3.3.75.38 1.13.2l3.92-1.83c.38-.18.54-.62.36-1a.753.753 0 0 0-1-.36M6 8c-.55 0-1-.45-1-1s.45-1 1-1s1 .45 1 1s-.45 1-1 1m5.11 10H9.17l-2.46-8h.1z"
                      ></path>
                    </svg>
                  ),
                },
                {
                  label: "Logistics",
                  icon: (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={100}
                      height={100}
                      viewBox="0 0 24 24"
                    >
                      <g fill="none">
                        <path
                          fill="#fff"
                          d="M22.044 3.391H1.957A.957.957 0 0 0 1 4.348v15.304c0 .528.428.957.957.957h20.087a.956.956 0 0 0 .956-.957V4.348a.956.956 0 0 0-.956-.957"
                        ></path>
                        <path
                          fill="#c2f3ff"
                          d="M21.087 5.308v7.652h-2.392v5.74H2.913V5.308z"
                        ></path>
                        <path
                          fill="#66e1ff"
                          d="M6.54 18.7h12.156v-5.74h2.39V5.308H19.93z"
                        ></path>
                        <path
                          stroke="#191919"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M23 8.652v11a.956.956 0 0 1-.957.957H1.957A.956.956 0 0 1 1 19.652V4.348a.957.957 0 0 1 .957-.957h16.739"
                          strokeWidth={1}
                        ></path>
                        <path
                          fill="#ff808c"
                          d="M21.087 15.83h-2.392v2.87h2.392z"
                        ></path>
                        <path
                          stroke="#191919"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.782 5.308H2.912V18.7h15.783"
                          strokeWidth={1}
                        ></path>
                        <path
                          fill="#ffef5e"
                          d="M21.087 12.96h-2.392v2.87h2.392z"
                        ></path>
                        <path
                          stroke="#191919"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.087 12.96v-2.39"
                          strokeWidth={1}
                        ></path>
                        <path
                          fill="#e3e3e3"
                          d="M8.174 14.87a3.348 3.348 0 1 0 0-6.696a3.348 3.348 0 0 0 0 6.696"
                        ></path>
                        <path
                          fill="#fff"
                          d="M8.174 12.957a1.434 1.434 0 1 0 0-2.87a1.434 1.434 0 0 0 0 2.87"
                        ></path>
                        <path
                          fill="#808080"
                          d="m22.605 6.656l-4.866 4.866l-2.391.478l.478-2.391l4.866-4.866a1.35 1.35 0 0 1 1.907 0l.006.006a1.35 1.35 0 0 1 0 1.907"
                        ></path>
                        <path
                          stroke="#191919"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.087 15.83h-2.392v2.87h2.392z"
                          strokeWidth={1}
                        ></path>
                        <path
                          stroke="#191919"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M21.087 12.96h-2.392v2.87h2.392zM8.174 14.87a3.348 3.348 0 1 0 0-6.696a3.348 3.348 0 0 0 0 6.696"
                          strokeWidth={1}
                        ></path>
                        <path
                          stroke="#191919"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.174 12.957a1.434 1.434 0 1 0 0-2.87a1.434 1.434 0 0 0 0 2.87m14.431-6.301l-4.866 4.866l-2.391.478l.478-2.391l4.866-4.866a1.35 1.35 0 0 1 1.907 0l.006.006a1.35 1.35 0 0 1 0 1.907"
                          strokeWidth={1}
                        ></path>
                      </g>
                    </svg>
                  ),
                },
              ].map((s, index) => {
                // normalize icons: if it's a React element, clone to set size props
                let iconNode = s.icon;

                return (
                  <div
                    key={index}
                    className="relative rounded-2xl overflow-hidden bg-white/60 dark:bg-gray-900/60 backdrop-blur-md p-6 flex flex-col items-center text-center shadow-lg hover:-translate-y-1 transform transition-transform duration-200 border border-white/10"
                  >
                    {/* accent top bar */}
                    <div className="absolute top-0 left-0 right-0 h-1 bg-linear-to-r from-indigo-500 to-pink-500" />

                    <div className="w-24 h-24 flex items-center justify-center bg-white dark:bg-gray-800 rounded-full shadow-inner z-10">
                      {iconNode}
                    </div>

                    <div className="mt-4 font-semibold text-gray-900 dark:text-white z-10">
                      {s.label}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Section 6: Technology Index (logos grid + CTA) */}
        <section className="py-16   dark:bg-gray-900">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <div className="text-sm font-medium text-orange-500">
              TECHNOLOGY INDEX
            </div>
            <h2 className="mt-3 text-3xl md:text-4xl font-extrabold text-gray-900 dark:text-white">
              What Technology We Are Using
              <br /> For Our Valued Customers
            </h2>

            <div
              className="mt-10 grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-8 items-center justify-items-center"
              role="list"
              aria-label="Technology logos"
            >
              {[
                // java
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={50}
                  height={50}
                  viewBox="0 0 128 128"
                >
                  <path
                    fill="#0074bd"
                    d="M52.581 67.817s-3.284 1.911 2.341 2.557c6.814.778 10.297.666 17.805-.753c0 0 1.979 1.237 4.735 2.309c-16.836 7.213-38.104-.418-24.881-4.113m-2.059-9.415s-3.684 2.729 1.945 3.311c7.28.751 13.027.813 22.979-1.103c0 0 1.373 1.396 3.536 2.157c-20.352 5.954-43.021.469-28.46-4.365"
                  ></path>
                  <path
                    fill="#ea2d2e"
                    d="M67.865 42.431c4.151 4.778-1.088 9.074-1.088 9.074s10.533-5.437 5.696-12.248c-4.519-6.349-7.982-9.502 10.771-20.378c.001 0-29.438 7.35-15.379 23.552"
                  ></path>
                  <path
                    fill="#0074bd"
                    d="M90.132 74.781s2.432 2.005-2.678 3.555c-9.716 2.943-40.444 3.831-48.979.117c-3.066-1.335 2.687-3.187 4.496-3.576c1.887-.409 2.965-.334 2.965-.334c-3.412-2.403-22.055 4.719-9.469 6.762c34.324 5.563 62.567-2.506 53.665-6.524m-35.97-26.134s-15.629 3.713-5.534 5.063c4.264.57 12.758.439 20.676-.225c6.469-.543 12.961-1.704 12.961-1.704s-2.279.978-3.93 2.104c-15.874 4.175-46.533 2.23-37.706-2.038c7.463-3.611 13.533-3.2 13.533-3.2M82.2 64.317c16.135-8.382 8.674-16.438 3.467-15.353c-1.273.266-1.845.496-1.845.496s.475-.744 1.378-1.063c10.302-3.62 18.223 10.681-3.322 16.345c0 0 .247-.224.322-.425"
                  ></path>
                  <path
                    fill="#ea2d2e"
                    d="M72.474 1.313s8.935 8.939-8.476 22.682c-13.962 11.027-3.184 17.313-.006 24.498c-8.15-7.354-14.128-13.828-10.118-19.852c5.889-8.842 22.204-13.131 18.6-27.328"
                  ></path>
                  <path
                    fill="#0074bd"
                    d="M55.749 87.039c15.484.99 39.269-.551 39.832-7.878c0 0-1.082 2.777-12.799 4.981c-13.218 2.488-29.523 2.199-39.191.603c0 0 1.98 1.64 12.158 2.294"
                  ></path>
                  <path
                    fill="#ea2d2e"
                    d="M94.866 100.181h-.472v-.264h1.27v.264h-.47v1.317h-.329zm2.535.066h-.006l-.468 1.251h-.216l-.465-1.251h-.005v1.251h-.312v-1.581h.457l.431 1.119l.432-1.119h.454v1.581h-.302zm-44.19 14.79c-1.46 1.266-3.004 1.978-4.391 1.978c-1.974 0-3.045-1.186-3.045-3.085c0-2.055 1.146-3.56 5.738-3.56h1.697zm4.031 4.548v-14.077c0-3.599-2.053-5.973-6.997-5.973c-2.886 0-5.416.714-7.473 1.622l.592 2.493c1.62-.595 3.715-1.147 5.771-1.147c2.85 0 4.075 1.147 4.075 3.521v1.779h-1.424c-6.921 0-10.044 2.685-10.044 6.723c0 3.479 2.058 5.456 5.933 5.456c2.49 0 4.351-1.028 6.088-2.533l.316 2.137h3.163zm13.452 0h-5.027l-6.051-19.689h4.391l3.756 12.099l.835 3.635c1.896-5.258 3.24-10.596 3.912-15.733h4.271c-1.143 6.481-3.203 13.598-6.087 19.688m19.288-4.548c-1.465 1.266-3.01 1.978-4.392 1.978c-1.976 0-3.046-1.186-3.046-3.085c0-2.055 1.149-3.56 5.736-3.56h1.701v4.667zm4.033 4.548v-14.077c0-3.599-2.059-5.973-6.999-5.973c-2.889 0-5.418.714-7.475 1.622l.593 2.493c1.62-.595 3.718-1.147 5.774-1.147c2.846 0 4.074 1.147 4.074 3.521v1.779h-1.424c-6.923 0-10.045 2.685-10.045 6.723c0 3.479 2.056 5.456 5.93 5.456c2.491 0 4.349-1.028 6.091-2.533l.318 2.137h3.163zm-56.693 3.346c-1.147 1.679-3.005 3.008-5.037 3.757l-1.989-2.345c1.547-.794 2.872-2.075 3.489-3.269c.532-1.063.753-2.43.753-5.701V92.891h4.284v22.173c0 4.375-.348 6.144-1.5 7.867"
                  ></path>
                </svg>,
                // dynamodb
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={50}
                  height={50}
                  viewBox="0 0 256 256"
                >
                  <defs>
                    <linearGradient
                      id="SVGWTObRdcx"
                      x1="0%"
                      x2="100%"
                      y1="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#2e27ad"></stop>
                      <stop offset="100%" stopColor="#527fff"></stop>
                    </linearGradient>
                  </defs>
                  <path fill="url(#SVGWTObRdcx)" d="M0 0h256v256H0z"></path>
                  <path
                    fill="#fff"
                    d="M166.675 175.52c-10.682 8.637-33.091 13.2-54.534 13.2c-21.447 0-43.863-4.566-54.541-13.202v17.392h.003c0 8.675 22.397 18.342 54.538 18.342c32.115 0 54.499-9.655 54.534-18.323zm.003-33.049l6.4-.035v.035c0 3.866-1.936 7.475-5.705 10.779c4.57 4.021 5.705 7.966 5.705 10.775c0 .02-.003.035-.003.054v28.831h.003c0 16.035-31.398 24.69-60.937 24.69c-29.469 0-60.781-8.617-60.931-24.578c0-.016-.01-.032-.01-.048v-28.958c0-.007.006-.016.006-.026c.01-2.809 1.15-6.738 5.712-10.75c-4.534-4.005-5.686-7.912-5.715-10.699h.003c0-.013-.006-.022-.006-.035v-28.958c0-.01.006-.02.006-.029c.01-2.809 1.152-6.738 5.716-10.743c-4.538-4.009-5.69-7.92-5.719-10.703h.003c0-.012-.006-.025-.006-.038V63.08c0-.01.006-.019.006-.029C51.261 47.04 82.624 38.4 112.141 38.4c16.675 0 32.694 2.65 43.948 7.271l-2.448 5.866c-10.505-4.314-25.632-6.79-41.5-6.79c-32.141 0-54.538 9.668-54.538 18.349c0 8.677 22.397 18.345 54.538 18.345c.867.01 1.715 0 2.573-.032l.268 6.342c-.947.038-1.894.038-2.841.038c-21.447 0-43.863-4.568-54.541-13.204V91.97h.003v.073c.032 3.329 3.447 6.236 6.307 8.083c8.608 5.488 24.032 9.236 41.232 10.014l-.29 6.341c-17.425-.79-32.682-4.405-42.503-9.946c-2.42 1.809-4.746 4.256-4.746 7.03c0 8.677 22.397 18.345 54.538 18.345c3.152 0 6.281-.105 9.305-.315l.445 6.332c-3.168.22-6.451.33-9.75.33c-21.447 0-43.863-4.567-54.541-13.203v17.383h.003c.032 3.403 3.447 6.307 6.307 8.157c9.844 6.281 28.327 10.192 48.23 10.192h1.409v6.347h-1.408c-20.221 0-38.599-3.754-49.837-10.099c-2.406 1.806-4.7 4.24-4.7 6.992c0 8.677 22.396 18.348 54.537 18.348c32.115 0 54.499-9.655 54.534-18.326v-.035c-.006-2.758-2.31-5.192-4.723-6.998a45 45 0 0 1-5.14 2.523l-2.45-5.865c2.323-.955 4.339-1.987 5.993-3.072c2.886-1.883 6.323-4.825 6.323-8.129m27.411-46.418h-17.932c-1.06 0-2.055-.52-2.647-1.39a3.14 3.14 0 0 1-.33-2.951l10.91-27.27h-41.31l-19.2 38.086h20.423c1.02 0 1.98.486 2.586 1.301c.598.82.774 1.87.464 2.838l-18.228 56.818zm9.821-.974l-79.996 82.648a3.22 3.22 0 0 1-2.31.974a3.2 3.2 0 0 1-1.636-.444a3.16 3.16 0 0 1-1.414-3.692l21.075-65.69h-21.226a3.21 3.21 0 0 1-2.723-1.504a3.15 3.15 0 0 1-.138-3.088l22.4-44.434a3.2 3.2 0 0 1 2.861-1.755h48a3.21 3.21 0 0 1 2.646 1.39a3.15 3.15 0 0 1 .33 2.955L180.87 89.706h20.73c1.28 0 2.441.761 2.944 1.93a3.16 3.16 0 0 1-.634 3.443M62.256 194.158c4.534 2.555 10.243 4.703 16.966 6.38l1.562-6.158c-6.077-1.514-11.389-3.5-15.366-5.742zm16.966-44.403l1.562-6.154c-6.077-1.517-11.389-3.504-15.366-5.745l-3.162 5.52c4.534 2.555 10.24 4.704 16.966 6.38M62.256 92.594l3.162-5.52c3.97 2.241 9.286 4.225 15.366 5.745l-1.562 6.154c-6.732-1.679-12.438-3.827-16.966-6.38"
                  ></path>
                </svg>,
                // redshift
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={50}
                  height={50}
                  viewBox="0 0 256 256"
                >
                  <defs>
                    <linearGradient
                      id="SVGZDBLty2B"
                      x1="0%"
                      x2="100%"
                      y1="100%"
                      y2="0%"
                    >
                      <stop offset="0%" stopColor="#4d27a8"></stop>
                      <stop offset="100%" stopColor="#a166ff"></stop>
                    </linearGradient>
                  </defs>
                  <path fill="url(#SVGZDBLty2B)" d="M0 0h256v256H0z"></path>
                  <path
                    fill="#fff"
                    d="M162.64 112.546c-3.391 0-6.147-2.75-6.147-6.132s2.756-6.136 6.147-6.136c3.388 0 6.144 2.754 6.144 6.136c0 3.381-2.756 6.132-6.144 6.132m-15.57 37.292c-3.388 0-6.143-2.75-6.143-6.132s2.755-6.132 6.143-6.132s6.147 2.75 6.147 6.132s-2.759 6.132-6.147 6.132m-37.367-6.214c-3.385 0-6.14-2.75-6.14-6.132s2.755-6.136 6.14-6.136c3.392 0 6.147 2.754 6.147 6.136c0 3.381-2.755 6.132-6.147 6.132m-15.566 34.185c-3.385 0-6.144-2.75-6.144-6.132s2.759-6.132 6.144-6.132c3.391 0 6.146 2.75 6.146 6.132s-2.755 6.132-6.146 6.132m68.503-83.911c-6.914 0-12.54 5.615-12.54 12.516c0 4.23 2.126 7.96 5.358 10.228l-5.85 14.81a12.6 12.6 0 0 0-2.538-.258c-5.498 0-10.13 3.573-11.814 8.502l-13.09-2.97c-.406-6.537-5.808-11.75-12.463-11.75c-6.91 0-12.533 5.615-12.533 12.516c0 3.225 1.26 6.141 3.276 8.362l-5.712 13.37c-.204-.012-.393-.06-.597-.06c-6.911 0-12.537 5.612-12.537 12.513c0 6.898 5.626 12.513 12.537 12.513c6.914 0 12.54-5.615 12.54-12.513c0-4.428-2.328-8.302-5.815-10.528l5.04-11.795c1.21.386 2.468.65 3.801.65c4.933 0 9.168-2.88 11.21-7.019l13.867 3.146c1.134 5.743 6.21 10.088 12.29 10.088c6.914 0 12.54-5.612 12.54-12.513c0-3.73-1.678-7.044-4.28-9.341l6.147-15.557c.39.039.764.118 1.163.118c6.91 0 12.537-5.615 12.537-12.512c0-6.901-5.626-12.516-12.537-12.516M128 211.219c-31.14 0-54.407-9.348-54.407-17.707V74.085c10.593 8.608 33.016 13.157 54.474 13.157c21.362 0 43.69-4.511 54.34-13.045v119.315c0 8.36-23.27 17.707-54.407 17.707m.067-166.438c32.022 0 54.34 9.507 54.34 18.042c0 8.53-22.318 18.038-54.34 18.038c-32.025 0-54.34-9.507-54.34-18.038c0-8.535 22.315-18.042 54.34-18.042M188.8 62.823c0-15.863-31.29-24.423-60.733-24.423s-60.733 8.56-60.733 24.423c0 .025.007.054.007.08H67.2v130.61c0 15.645 31.325 24.087 60.8 24.087s60.8-8.442 60.8-24.088V62.902h-.006c0-.025.006-.054.006-.08"
                  ></path>
                </svg>,
                // AWS
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={83.67}
                  height={50}
                  viewBox="0 0 256 153"
                >
                  <path
                    fill="#252f3e"
                    d="M72.392 55.438c0 3.137.34 5.68.933 7.545a45.4 45.4 0 0 0 2.712 6.103c.424.678.593 1.356.593 1.95c0 .847-.508 1.695-1.61 2.543l-5.34 3.56c-.763.509-1.526.763-2.205.763c-.847 0-1.695-.424-2.543-1.187a26 26 0 0 1-3.051-3.984c-.848-1.44-1.696-3.052-2.628-5.001q-9.919 11.697-24.922 11.698c-7.12 0-12.8-2.035-16.954-6.103c-4.153-4.07-6.272-9.495-6.272-16.276c0-7.205 2.543-13.054 7.714-17.462c5.17-4.408 12.037-6.612 20.768-6.612c2.882 0 5.849.254 8.985.678c3.137.424 6.358 1.102 9.749 1.865V29.33c0-6.443-1.357-10.935-3.985-13.563c-2.712-2.628-7.29-3.9-13.817-3.9c-2.967 0-6.018.34-9.155 1.103s-6.188 1.695-9.155 2.882c-1.356.593-2.373.932-2.967 1.102s-1.017.254-1.356.254c-1.187 0-1.78-.848-1.78-2.628v-4.154c0-1.356.17-2.373.593-2.966c.424-.594 1.187-1.187 2.374-1.78q4.45-2.29 10.68-3.815C33.908.763 38.316.255 42.978.255c10.088 0 17.463 2.288 22.21 6.866c4.662 4.577 7.036 11.528 7.036 20.853v27.464zM37.976 68.323c2.798 0 5.68-.508 8.731-1.526c3.052-1.017 5.765-2.882 8.053-5.425c1.357-1.61 2.374-3.39 2.882-5.425c.509-2.034.848-4.493.848-7.375v-3.56a71 71 0 0 0-7.799-1.441a64 64 0 0 0-7.968-.509c-5.68 0-9.833 1.102-12.63 3.391s-4.154 5.51-4.154 9.748c0 3.984 1.017 6.951 3.136 8.986c2.035 2.119 5.002 3.136 8.901 3.136m68.069 9.155c-1.526 0-2.543-.254-3.221-.848c-.678-.508-1.272-1.695-1.78-3.305L81.124 7.799c-.51-1.696-.764-2.798-.764-3.391c0-1.356.678-2.12 2.035-2.12h8.307c1.61 0 2.713.255 3.306.848c.678.509 1.187 1.696 1.695 3.306l14.241 56.117l13.224-56.117c.424-1.695.933-2.797 1.61-3.306c.679-.508 1.866-.847 3.392-.847h6.781c1.61 0 2.713.254 3.39.847c.679.509 1.272 1.696 1.611 3.306l13.394 56.795L168.01 6.442c.508-1.695 1.102-2.797 1.695-3.306c.678-.508 1.78-.847 3.306-.847h7.883c1.357 0 2.12.678 2.12 2.119c0 .424-.085.848-.17 1.356s-.254 1.187-.593 2.12l-20.43 65.525q-.762 2.544-1.78 3.306c-.678.509-1.78.848-3.22.848h-7.29c-1.611 0-2.713-.254-3.392-.848c-.678-.593-1.271-1.695-1.61-3.39l-13.14-54.676l-13.054 54.59c-.423 1.696-.932 2.798-1.61 3.391c-.678.594-1.865.848-3.39.848zm108.927 2.289c-4.408 0-8.816-.509-13.054-1.526c-4.239-1.017-7.544-2.12-9.748-3.39c-1.357-.764-2.29-1.611-2.628-2.374a6 6 0 0 1-.509-2.374V65.78c0-1.78.678-2.628 1.95-2.628a4.8 4.8 0 0 1 1.526.255c.508.17 1.271.508 2.119.847a46 46 0 0 0 9.324 2.967a51 51 0 0 0 10.088 1.017c5.34 0 9.494-.932 12.376-2.797s4.408-4.577 4.408-8.053c0-2.373-.763-4.323-2.289-5.934s-4.408-3.051-8.561-4.408l-12.292-3.814c-6.188-1.95-10.765-4.832-13.563-8.647c-2.797-3.73-4.238-7.883-4.238-12.291q0-5.34 2.289-9.41c1.525-2.712 3.56-5.085 6.103-6.95c2.543-1.95 5.425-3.391 8.816-4.408c3.39-1.017 6.95-1.441 10.68-1.441c1.865 0 3.815.085 5.68.339c1.95.254 3.73.593 5.51.932c1.695.424 3.306.848 4.832 1.357q2.288.762 3.56 1.525c1.187.679 2.034 1.357 2.543 2.12q.763 1.017.763 2.797v3.984c0 1.78-.678 2.713-1.95 2.713c-.678 0-1.78-.34-3.22-1.018q-7.25-3.306-16.276-3.306c-4.832 0-8.647.763-11.275 2.374c-2.627 1.61-3.984 4.069-3.984 7.544c0 2.374.848 4.408 2.543 6.019s4.832 3.221 9.325 4.662l12.037 3.815c6.103 1.95 10.511 4.662 13.139 8.137s3.9 7.46 3.9 11.868c0 3.645-.764 6.951-2.205 9.833c-1.525 2.882-3.56 5.425-6.188 7.46c-2.628 2.119-5.764 3.645-9.409 4.747c-3.815 1.187-7.799 1.78-12.122 1.78"
                  ></path>
                  <path
                    fill="#f90"
                    d="M230.993 120.964c-27.888 20.599-68.408 31.534-103.247 31.534c-48.827 0-92.821-18.056-126.05-48.064c-2.628-2.373-.255-5.594 2.881-3.73c35.942 20.854 80.276 33.484 126.136 33.484c30.94 0 64.932-6.442 96.212-19.666c4.662-2.12 8.646 3.052 4.068 6.442m11.614-13.224c-3.56-4.577-23.566-2.204-32.636-1.102c-2.713.34-3.137-2.034-.678-3.814c15.936-11.19 42.13-7.968 45.181-4.239c3.052 3.815-.848 30.008-15.767 42.554c-2.288 1.95-4.492.933-3.475-1.61c3.39-8.393 10.935-27.296 7.375-31.789"
                  ></path>
                </svg>,
                // storm
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={50}
                  height={50}
                  viewBox="0 0 256 256"
                >
                  <defs>
                    <linearGradient
                      id="SVGKnZ0LbDz"
                      x1="40.196%"
                      x2="55.577%"
                      y1="64.058%"
                      y2="47.965%"
                    >
                      <stop offset="0%" stopColor="#af1df5"></stop>
                      <stop offset="21%" stopColor="#bc20e4"></stop>
                      <stop offset="63%" stopColor="#dd29b8"></stop>
                      <stop offset="100%" stopColor="#ff318c"></stop>
                    </linearGradient>
                    <linearGradient
                      id="SVGxXSPGdcC"
                      x1="42.885%"
                      x2="63.378%"
                      y1="78.603%"
                      y2="-4.057%"
                    >
                      <stop offset="2%" stopColor="#6b57ff"></stop>
                      <stop offset="42%" stopColor="#b74af7"></stop>
                      <stop offset="75%" stopColor="#ff318c"></stop>
                    </linearGradient>
                    <linearGradient
                      id="SVGmyR1QcOi"
                      x1="73.258%"
                      x2="32.049%"
                      y1="102.209%"
                      y2="-3.688%"
                    >
                      <stop offset="0%" stopColor="#293896"></stop>
                      <stop offset="8%" stopColor="#3b3aa2"></stop>
                      <stop offset="29%" stopColor="#6740c0"></stop>
                      <stop offset="49%" stopColor="#8a44d8"></stop>
                      <stop offset="68%" stopColor="#a347e9"></stop>
                      <stop offset="86%" stopColor="#b249f3"></stop>
                      <stop offset="100%" stopColor="#b74af7"></stop>
                    </linearGradient>
                    <linearGradient
                      id="SVGQhGADcNM"
                      x1="62.87%"
                      x2="39.747%"
                      y1="72.446%"
                      y2="45.568%"
                    >
                      <stop offset="2%" stopColor="#6b57ff"></stop>
                      <stop offset="78%" stopColor="#b74af7"></stop>
                    </linearGradient>
                  </defs>
                  <path
                    fill="url(#SVGKnZ0LbDz)"
                    d="M141.307 45.013L132.773 19.2L43.68 0L0 49.413l48 24.56v-28.96z"
                  ></path>
                  <path
                    fill="url(#SVGxXSPGdcC)"
                    d="m48 61.813l-48-12.4l24.4 146.56l23.52-.186z"
                  ></path>
                  <path
                    fill="url(#SVGmyR1QcOi)"
                    d="M208 45.013h-83.493L158.053 15.2l64.64 12L256 109.973l-47.973 47.654z"
                  ></path>
                  <path
                    fill="url(#SVGQhGADcNM)"
                    d="M208.053 108.88L208 205.013H70.56l3.547 20.907L160.4 256l95.6-57.227z"
                  ></path>
                  <path d="M47 43.771h162v162H47z"></path>
                  <path
                    fill="#fff"
                    d="M67.947 175.093h60v10h-60zm52.32-58.133l7.813-9.6a27.57 27.57 0 0 0 17.973 7.307c5.334 0 8.694-2.16 8.694-5.68v-.16c0-1.364-.343-2.46-1.422-3.451l-.242-.211a7 7 0 0 0-.557-.414l-.315-.204a11 11 0 0 0-.522-.302l-.382-.2l-.201-.1l-.425-.198a20 20 0 0 0-.454-.198l-.484-.199l-.254-.1l-.531-.198l-.278-.1l-.58-.201l-.303-.101l-.63-.203l-.667-.205l-.702-.208q-.18-.053-.365-.104l-.758-.212l-.795-.215l-2.44-.633l-.766-.205l-1.126-.31l-.368-.105l-.728-.212l-.714-.215l-.351-.11l-.694-.222l-.68-.226l-.334-.116l-.658-.235l-.643-.24q-.16-.061-.316-.124l-.622-.251l-.606-.259c-6.286-2.757-10.049-6.826-10.165-14.88l-.002-.573c0-10.792 8.59-17.981 20.68-18.131l.386-.003a34.67 34.67 0 0 1 22.347 7.654l-6.88 9.973a28.1 28.1 0 0 0-15.653-5.92c-5.067 0-7.734 2.32-7.734 5.333v.187c0 2.23.852 3.644 3.457 4.932l.414.197q.214.099.443.196l.472.195l.502.195l.533.195l.563.196l.596.198l.629.199l.662.202l1.057.308l1.137.318l1.219.328l1.303.341q.431.112.853.228l.836.232q.413.117.817.237l.8.242q.197.06.392.123l.772.25l.754.256q.558.195 1.096.397l.707.273c7.675 3.042 11.938 7.422 12.063 15.448l.003.554c0 11.947-9.12 18.667-22.106 18.667a38.27 38.27 0 0 1-25.52-9.627M68 65.333h24.533c14.15 0 22.786 8.312 22.958 20.354l.002.526c0 13.867-10.8 21.067-24.24 21.067h-9.92v17.973H68zm23.627 30.214c6.586 0 10.453-3.92 10.453-9.067v-.16c0-5.92-4.107-9.093-10.667-9.093h-10.08v18.32z"
                  ></path>
                </svg>,
                // docker
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={50}
                  height={50}
                  viewBox="0 0 256 256"
                >
                  <g fill="none">
                    <rect
                      width={256}
                      height={256}
                      fill="#2396ed"
                      rx={60}
                    ></rect>
                    <path
                      fill="#fff"
                      d="M141.187 122.123h20.717v-18.744h-20.717zm-24.662 0h20.716v-18.744h-20.716zm-24.17 0h20.717v-18.744H92.355zm-24.17 0H88.41v-18.744H68.186zm-24.662 0H64.24v-18.744H43.523zm24.663-22.69h20.223V80.69H68.186zm24.17 0h20.716V80.69H92.355zm24.169 0h20.716V80.69h-20.716zm0-22.69h20.716V58h-20.716zM228 113.739s-8.879-8.386-27.129-5.426c-1.973-14.305-17.264-22.69-17.264-22.69s-14.304 17.264-3.946 36.501c-2.959 1.48-7.892 3.453-15.291 3.453H28.726c-2.467 9.372-2.467 71.521 65.602 71.521c48.832 0 85.333-22.689 102.597-64.123C222.574 134.948 228 113.738 228 113.738"
                    ></path>
                  </g>
                </svg>,
                // tensorflow
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={50}
                  height={50}
                  viewBox="0 0 256 256"
                >
                  <g fill="none">
                    <rect
                      width={256}
                      height={256}
                      fill="#242938"
                      rx={60}
                    ></rect>
                    <path
                      fill="#ff6f00"
                      d="m124.228 229l-33.605-20.11V90.31L40 120.459l.123-44.914L124.228 26zm7.556-203v203l33.609-20.11v-57.109l25.37 15.114l-.151-39.062l-25.219-14.845V90.31L216 120.459l-.122-44.914z"
                    ></path>
                  </g>
                </svg>,
                // nodejs
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={81.53}
                  height={50}
                  viewBox="0 0 512 314"
                >
                  <defs>
                    <linearGradient
                      id="SVGn7WyXdQM"
                      x1="68.188%"
                      x2="27.823%"
                      y1="17.487%"
                      y2="89.755%"
                    >
                      <stop offset="0%" stopColor="#41873f"></stop>
                      <stop offset="32.88%" stopColor="#418b3d"></stop>
                      <stop offset="63.52%" stopColor="#419637"></stop>
                      <stop offset="93.19%" stopColor="#3fa92d"></stop>
                      <stop offset="100%" stopColor="#3fae2a"></stop>
                    </linearGradient>
                    <linearGradient
                      id="SVGYUHp3cUc"
                      x1="43.277%"
                      x2="159.245%"
                      y1="55.169%"
                      y2="-18.306%"
                    >
                      <stop offset="13.76%" stopColor="#41873f"></stop>
                      <stop offset="40.32%" stopColor="#54a044"></stop>
                      <stop offset="71.36%" stopColor="#66b848"></stop>
                      <stop offset="90.81%" stopColor="#6cc04a"></stop>
                    </linearGradient>
                    <linearGradient
                      id="SVGvU14yb0S"
                      x1="-4413.77%"
                      x2="5327.93%"
                      y1="13.43%"
                      y2="13.43%"
                    >
                      <stop offset="9.192%" stopColor="#6cc04a"></stop>
                      <stop offset="28.64%" stopColor="#66b848"></stop>
                      <stop offset="59.68%" stopColor="#54a044"></stop>
                      <stop offset="86.24%" stopColor="#41873f"></stop>
                    </linearGradient>
                    <linearGradient
                      id="SVGsgCB2mOc"
                      x1="-4.389%"
                      x2="101.499%"
                      y1="49.997%"
                      y2="49.997%"
                    >
                      <stop offset="9.192%" stopColor="#6cc04a"></stop>
                      <stop offset="28.64%" stopColor="#66b848"></stop>
                      <stop offset="59.68%" stopColor="#54a044"></stop>
                      <stop offset="86.24%" stopColor="#41873f"></stop>
                    </linearGradient>
                    <linearGradient
                      id="SVGgyHjFbjQ"
                      x1="-9713.77%"
                      x2="27.93%"
                      y1="36.21%"
                      y2="36.21%"
                    >
                      <stop offset="9.192%" stopColor="#6cc04a"></stop>
                      <stop offset="28.64%" stopColor="#66b848"></stop>
                      <stop offset="59.68%" stopColor="#54a044"></stop>
                      <stop offset="86.24%" stopColor="#41873f"></stop>
                    </linearGradient>
                    <linearGradient
                      id="SVGKboQA3ft"
                      x1="-103.861%"
                      x2="100.797%"
                      y1="50.275%"
                      y2="50.275%"
                    >
                      <stop offset="9.192%" stopColor="#6cc04a"></stop>
                      <stop offset="28.64%" stopColor="#66b848"></stop>
                      <stop offset="59.68%" stopColor="#54a044"></stop>
                      <stop offset="86.24%" stopColor="#41873f"></stop>
                    </linearGradient>
                    <linearGradient
                      id="SVGGrjLcbXr"
                      x1="130.613%"
                      x2="4.393%"
                      y1="-211.069%"
                      y2="201.605%"
                    >
                      <stop offset="0%" stopColor="#41873f"></stop>
                      <stop offset="32.88%" stopColor="#418b3d"></stop>
                      <stop offset="63.52%" stopColor="#419637"></stop>
                      <stop offset="93.19%" stopColor="#3fa92d"></stop>
                      <stop offset="100%" stopColor="#3fae2a"></stop>
                    </linearGradient>
                    <path
                      id="SVGA41zMIsC"
                      d="M57.903 1.85a5.96 5.96 0 0 0-5.894 0L3.352 29.933c-1.85 1.04-2.89 3.005-2.89 5.085v56.286c0 2.08 1.156 4.045 2.89 5.085l48.657 28.085a5.96 5.96 0 0 0 5.894 0l48.658-28.085c1.849-1.04 2.89-3.005 2.89-5.085V35.019c0-2.08-1.157-4.045-2.89-5.085z"
                    ></path>
                  </defs>
                  <g fill="none">
                    <path
                      fill="#539e43"
                      d="M253.11 313.094c-1.733 0-3.351-.462-4.854-1.271l-15.371-9.13c-2.312-1.272-1.156-1.734-.462-1.965c3.12-1.04 3.698-1.272 6.934-3.12c.347-.232.81-.116 1.156.115l11.789 7.05c.462.231 1.04.231 1.386 0l46.115-26.698c.462-.231.694-.694.694-1.271v-53.28c0-.579-.232-1.04-.694-1.272l-46.115-26.582c-.462-.232-1.04-.232-1.386 0l-46.115 26.582c-.462.231-.694.809-.694 1.271v53.28c0 .463.232 1.04.694 1.272l12.598 7.281c6.819 3.467 11.095-.578 11.095-4.623v-52.587c0-.693.578-1.387 1.387-1.387h5.894c.694 0 1.387.578 1.387 1.387v52.587c0 9.13-4.97 14.447-13.638 14.447c-2.658 0-4.738 0-10.633-2.89l-12.135-6.934c-3.005-1.733-4.854-4.97-4.854-8.437v-53.28c0-3.467 1.849-6.704 4.854-8.437l46.114-26.698c2.89-1.618 6.82-1.618 9.709 0l46.114 26.698c3.005 1.733 4.855 4.97 4.855 8.437v53.28c0 3.467-1.85 6.704-4.855 8.437l-46.114 26.698c-1.503.694-3.236 1.04-4.854 1.04m14.216-36.637c-20.225 0-24.386-9.246-24.386-17.105c0-.694.578-1.387 1.387-1.387h6.01c.693 0 1.271.462 1.271 1.156c.925 6.125 3.583 9.13 15.834 9.13c9.708 0 13.87-2.196 13.87-7.397c0-3.005-1.157-5.2-16.297-6.703c-12.598-1.272-20.457-4.045-20.457-14.1c0-9.362 7.86-14.91 21.035-14.91c14.793 0 22.075 5.086 23 16.18q0 .521-.347 1.041c-.232.231-.578.462-.925.462h-6.01c-.578 0-1.156-.462-1.271-1.04c-1.387-6.356-4.97-8.437-14.447-8.437c-10.633 0-11.905 3.699-11.905 6.472c0 3.352 1.503 4.392 15.834 6.241c14.216 1.85 20.92 4.508 20.92 14.447c-.116 10.171-8.437 15.95-23.116 15.95"
                    ></path>
                    <path
                      fill="#333"
                      d="M110.028 104.712c0-2.08-1.156-4.046-3.005-5.086l-49.004-28.2c-.81-.463-1.734-.694-2.658-.81h-.463c-.924 0-1.849.347-2.658.81l-49.004 28.2c-1.85 1.04-3.005 3.005-3.005 5.086l.116 75.817c0 1.04.578 2.08 1.502 2.543c.925.578 2.08.578 2.89 0l29.125-16.643c1.849-1.04 3.005-3.005 3.005-5.085v-35.482c0-2.08 1.155-4.045 3.005-5.085l12.366-7.166c.925-.578 1.965-.81 3.005-.81s2.08.232 2.89.81l12.366 7.166c1.85 1.04 3.005 3.004 3.005 5.085v35.482c0 2.08 1.156 4.045 3.005 5.085l29.125 16.643a2.82 2.82 0 0 0 3.005 0c.925-.463 1.503-1.503 1.503-2.543zM345.571.347c-.924-.463-2.08-.463-2.89 0c-.924.578-1.502 1.502-1.502 2.542v75.125c0 .693-.346 1.386-1.04 1.849q-1.04.519-2.08 0l-12.251-7.05a5.96 5.96 0 0 0-5.895 0l-49.004 28.316c-1.849 1.04-3.005 3.005-3.005 5.085v56.516c0 2.08 1.156 4.046 3.005 5.086l49.004 28.316a5.96 5.96 0 0 0 5.895 0l49.004-28.316c1.849-1.04 3.005-3.005 3.005-5.086V21.844c0-2.196-1.156-4.16-3.005-5.201zm-4.507 143.776c0 .578-.231 1.04-.694 1.271l-16.758 9.708a1.71 1.71 0 0 1-1.503 0l-16.758-9.708c-.463-.231-.694-.809-.694-1.271v-19.417c0-.578.231-1.04.694-1.271l16.758-9.709a1.71 1.71 0 0 1 1.503 0l16.758 9.709c.463.23.694.809.694 1.271zm167.584-19.879c1.85-1.04 2.89-3.005 2.89-5.086v-13.753c0-2.08-1.156-4.045-2.89-5.085l-48.657-28.2a5.96 5.96 0 0 0-5.895 0l-49.004 28.315c-1.85 1.04-3.005 3.005-3.005 5.085v56.517c0 2.08 1.156 4.045 3.005 5.085l48.657 27.738c1.85 1.04 4.046 1.04 5.78 0L489 178.45c.925-.463 1.503-1.503 1.503-2.543s-.578-2.08-1.503-2.543l-49.235-28.316c-.925-.578-1.503-1.502-1.503-2.542v-17.683c0-1.04.578-2.08 1.503-2.543l15.371-8.784a2.82 2.82 0 0 1 3.005 0l15.372 8.784c.925.578 1.502 1.502 1.502 2.543v13.869c0 1.04.578 2.08 1.503 2.542a2.82 2.82 0 0 0 3.005 0z"
                    ></path>
                    <path
                      fill="#539e43"
                      d="M456.292 121.585a1.05 1.05 0 0 1 1.156 0l9.362 5.432c.346.232.577.578.577 1.04v10.865c0 .462-.23.809-.577 1.04l-9.362 5.432a1.05 1.05 0 0 1-1.156 0l-9.361-5.432c-.347-.231-.578-.578-.578-1.04v-10.864c0-.463.23-.81.578-1.04z"
                    ></path>
                    <g transform="translate(134.068 70.501)">
                      <mask id="SVGag4sAb1K" fill="#fff">
                        <use href="#SVGA41zMIsC"></use>
                      </mask>
                      <use fill="url(#SVGn7WyXdQM)" href="#SVGA41zMIsC"></use>
                      <g mask="url(#SVGag4sAb1K)">
                        <path d="M51.893 1.85L3.121 29.933C1.27 30.974 0 32.94 0 35.02v56.286c0 1.387.578 2.658 1.502 3.698L56.285 1.156c-1.387-.231-3.005-.116-4.392.693m4.739 123.204c.462-.116.925-.347 1.387-.578l48.773-28.085c1.85-1.04 3.005-3.005 3.005-5.085V35.019c0-1.502-.694-3.005-1.734-4.045z"></path>
                        <path
                          fill="url(#SVGYUHp3cUc)"
                          d="M106.676 29.934L57.788 1.85a8 8 0 0 0-1.503-.578L1.502 95.12a6.1 6.1 0 0 0 1.619 1.387l48.888 28.085c1.387.809 3.005 1.04 4.507.577l51.432-94.078c-.347-.462-.81-.81-1.272-1.156"
                        ></path>
                      </g>
                      <g mask="url(#SVGag4sAb1K)">
                        <path d="M109.797 91.305V35.019c0-2.08-1.271-4.045-3.12-5.085L57.786 1.85a5.1 5.1 0 0 0-1.848-.693l53.511 91.42c.231-.347.347-.809.347-1.271M3.12 29.934C1.272 30.974 0 32.94 0 35.02v56.286c0 2.08 1.387 4.045 3.12 5.085l48.889 28.085q1.734 1.04 3.814.693L3.467 29.818z"></path>
                        <path
                          fill="url(#SVGvU14yb0S)"
                          fillRule="evenodd"
                          d="m50.391.809l-.693.347h.924z"
                          transform="translate(0 -9.246)"
                        ></path>
                        <path
                          fill="url(#SVGsgCB2mOc)"
                          fillRule="evenodd"
                          d="M106.792 105.636c1.387-.809 2.427-2.196 2.89-3.698L56.053 10.402c-1.387-.231-2.89-.116-4.16.693L3.351 39.065l52.355 95.465a8 8 0 0 0 2.196-.693z"
                          transform="translate(0 -9.246)"
                        ></path>
                        <path
                          fill="url(#SVGgyHjFbjQ)"
                          fillRule="evenodd"
                          d="m111.3 104.712l-.347-.578v.809z"
                          transform="translate(0 -9.246)"
                        ></path>
                        <path
                          fill="url(#SVGKboQA3ft)"
                          fillRule="evenodd"
                          d="m106.792 105.636l-48.773 28.085a7 7 0 0 1-2.196.693l.925 1.734l54.089-31.32v-.694l-1.387-2.312c-.231 1.618-1.271 3.005-2.658 3.814"
                          transform="translate(0 -9.246)"
                        ></path>
                        <path
                          fill="url(#SVGGrjLcbXr)"
                          fillRule="evenodd"
                          d="m106.792 105.636l-48.773 28.085a7 7 0 0 1-2.196.693l.925 1.734l54.089-31.32v-.694l-1.387-2.312c-.231 1.618-1.271 3.005-2.658 3.814"
                          transform="translate(0 -9.246)"
                        ></path>
                      </g>
                    </g>
                  </g>
                </svg>,
                // oracle
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={382.09}
                  height={50}
                  viewBox="0 0 512 67"
                >
                  <path
                    fill="#ea1b22"
                    d="M221.034 43.303h33.832l-17.889-28.781l-32.833 52.037h-14.942l39.935-62.508c1.736-2.525 4.63-4.051 7.84-4.051c3.104 0 5.998 1.473 7.682 3.946l40.093 62.613H269.81l-7.05-11.628h-34.253zM376.251 54.93V.631h-12.68v59.614c0 1.631.631 3.21 1.841 4.42s2.841 1.894 4.63 1.894h57.825l7.472-11.628zm-209.78-9.734c12.313 0 22.31-9.944 22.31-22.256c0-12.313-9.997-22.31-22.31-22.31h-55.473v65.93h12.676v-54.3h41.956c5.893 0 10.628 4.789 10.628 10.682c0 5.892-4.735 10.68-10.628 10.68l-35.747-.052l37.851 32.99h18.416l-25.466-21.362zM32.97 66.559C14.77 66.56 0 51.827 0 33.622C0 15.416 14.77.632 32.97.632h38.32c18.204 0 32.963 14.784 32.963 32.99c0 18.205-14.759 32.937-32.964 32.937zm37.468-11.628c11.791 0 21.341-9.524 21.341-21.31S82.228 12.26 70.437 12.26h-36.62c-11.787 0-21.342 9.576-21.342 21.362S22.03 54.93 33.816 54.93zm240.78 11.628c-18.204 0-32.99-14.732-32.99-32.937c0-18.206 14.786-32.99 32.99-32.99h45.514l-7.42 11.628H312.06c-11.786 0-21.362 9.576-21.362 21.362s9.576 21.309 21.362 21.309h45.723l-7.472 11.628zm155.06-11.628c-9.734 0-17.995-6.524-20.52-15.522h54.194l7.471-11.628h-61.665c2.525-8.945 10.786-15.521 20.52-15.521h37.2L511 .63h-45.565c-18.205 0-32.99 14.785-32.99 32.99s14.785 32.938 32.99 32.938h39.094L512 54.931z"
                  ></path>
                </svg>,
                // jmeter
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={50}
                  height={50}
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="#1447e6"
                    d="M4.35 7.79s-.247-.4-.537-.228c-.14.084-.374.318-.653.658l.257.484a6 6 0 0 1 .517-.653c-.079.09-.246.298-.484.662q.501-.035.996-.123c.099-.549-.096-.8-.096-.8m-.386.228l.022-.024zM.91 14.02a45 45 0 0 0-.774 2.33a.2.2 0 0 1-.136.132c.23-.76.458-1.476.687-2.124c-.143-.033-.346.007-.594.11c.17-.13.339-.242.5-.252c-.051-.011-.183-.057-.36-.22c.169.063.316.094.422.072c-.022-.282-.174-.57-.374-.86c-.001-.002.28.161.383.33l.002-.023q.025-.33.093-.654v-.002q.05-.261.127-.522l.066-.223q.043-.13.093-.27q.165-.452.375-.884l.036-.072q.192-.386.408-.76q.115-.199.231-.39q.01-.011.017-.026L2.11 9.71l.008-.013q.355-.57.754-1.108a8 8 0 0 1 .229-.296l.058-.072l.256.482a11 11 0 0 0-.268.404q-.259.415-.487.846l-.217.414l-.222-.439l.22.44l-.007.015l-.133.27l-.077.16l-.206.444a43 43 0 0 0-.57 1.344l-.18.457l-.04.103l-.134.357v.004l-.033.088l-.141.381zm3.235-4.623a5 5 0 0 1-.334.562c-.106.149-.216.25-.457.363l.022-.004q.002-.002.006-.002c.125-.023.28-.074.37-.127a.2.2 0 0 0 .036-.024a1 1 0 0 1-.02.089q-.01.038-.026.085l-.012.033l-.036.092a3 3 0 0 1-.102.226l-.028.057l-.024.039a1 1 0 0 1-.084.116l-.04.044a1 1 0 0 1-.113.101a1.2 1.2 0 0 1-.27.151l.017-.002l.064-.011q.195-.047.361-.16c-.138.275-.326.497-.628.612l.052-.007l.05-.011a1 1 0 0 0 .254-.087a7 7 0 0 1-.18.492q-.106.26-.225.47a2.6 2.6 0 0 1-.35.487c-.276.298-.705.54-1.027.58l.016.003c.366.076.745-.047.996-.324a3 3 0 0 1-.106.187c-.148.24-.318.386-.654.537c.23.013.35-.041.448-.165a1 1 0 0 1-.052.1c-.215.356-.634.478-1.117.456a.54.54 0 0 1 .174.37c-.074-.134-.152-.251-.251-.297l.116-.334l.02-.054v-.006l.132-.37l.026-.07l.003-.01l.17-.454l.007-.022l.168-.435q.093-.238.184-.46q.184-.452.382-.897q.077-.174.152-.336l.05-.108l.097-.205q.043-.093.088-.183l.027-.058q.003-.003.002-.011l.006-.001q.11-.225.213-.423q.226-.435.474-.857l.013-.023q.133-.222.246-.396q.5-.035.995-.12q-.015.078-.038.165a3 3 0 0 1-.075.225a4 4 0 0 1-.187.413zm2.351.674v4.596c0 .28-.041.527-.125.732a1.34 1.34 0 0 1-.35.512a1.4 1.4 0 0 1-.531.3q-.306.095-.674.095a2.7 2.7 0 0 1-.659-.074a.06.06 0 0 1-.046-.06v-.842a.063.063 0 0 1 .076-.062q.117.027.25.045c.162.024.376.03.54-.01a.48.48 0 0 0 .332-.29a.8.8 0 0 0 .052-.313v-4.63c0-.035.027-.063.062-.063h1.01c.036 0 .063.028.063.063zm8.588 1.44a1.35 1.35 0 0 0-.518-.334a1.9 1.9 0 0 0-.675-.114q-.383 0-.702.125c-.208.082-.395.21-.545.377a1.75 1.75 0 0 0-.35.619a2.7 2.7 0 0 0-.123.859c0 .32.044.606.135.848q.139.361.386.603c.164.157.364.276.59.355a2.3 2.3 0 0 0 .742.118q.213 0 .377-.015a2.3 2.3 0 0 0 .61-.13q.143-.05.273-.12a.06.06 0 0 0 .033-.055v-.77a.063.063 0 0 0-.09-.055a2.5 2.5 0 0 1-.827.265q-.153.015-.307.014a.9.9 0 0 1-.332-.055a.7.7 0 0 1-.243-.162a.8.8 0 0 1-.155-.263a1.2 1.2 0 0 1-.058-.295h2.157a.063.063 0 0 0 .063-.062v-.483a2.1 2.1 0 0 0-.114-.725a1.5 1.5 0 0 0-.327-.544zm-1.758 1.029q.033-.325.176-.478a.52.52 0 0 1 .395-.167a.55.55 0 0 1 .246.052q.106.051.176.144a.7.7 0 0 1 .105.22q.03.107.038.229zm10.673-1.387v.934a.062.062 0 0 1-.077.06a.7.7 0 0 0-.254-.027l-.08-.004q-.181 0-.337.047a.64.64 0 0 0-.253.145a.7.7 0 0 0-.163.264q-.059.166-.059.411v1.856a.063.063 0 0 1-.063.063h-.994a.063.063 0 0 1-.063-.063v-3.645c0-.035.028-.063.063-.063h.753c.028 0 .053.02.06.046l.124.462q.06-.1.133-.191a.93.93 0 0 1 .487-.338a1.1 1.1 0 0 1 .434-.044q.05-.002.096.006l.084.011a.3.3 0 0 1 .066.011a.06.06 0 0 1 .044.059zm-5.956 2.794a.06.06 0 0 1 .027.05v.741a.06.06 0 0 1-.033.055a1.5 1.5 0 0 1-.364.125c-.304.068-.62.066-.924-.008a.9.9 0 0 1-.381-.207a1.04 1.04 0 0 1-.256-.397a1.8 1.8 0 0 1-.088-.608V12h-.414a.063.063 0 0 1-.062-.062v-.42a.06.06 0 0 1 .03-.053l.529-.323l.28-.75a.06.06 0 0 1 .058-.04h.636c.035 0 .062.028.062.063v.714h.825c.034 0 .063.028.063.062v.747a.063.063 0 0 1-.063.063h-.825v1.695q0 .187.085.268a.32.32 0 0 0 .231.084q.14 0 .263-.03q.133-.034.264-.08a.06.06 0 0 1 .057.007zm-6.105-3.876v4.77a.063.063 0 0 1-.062.061h-.943a.063.063 0 0 1-.063-.063v-2.45l.014-.473l.01-.242l.008-.187l-1.018 3.37a.06.06 0 0 1-.06.044h-.93a.06.06 0 0 1-.06-.044l-.929-3.32a25 25 0 0 1 .033.88q.005.111.005.204v2.218a.063.063 0 0 1-.063.063h-.903a.063.063 0 0 1-.063-.063V10.07c0-.034.027-.063.062-.063h1.376c.03 0 .053.02.061.047l.981 3.473l1.046-3.474a.06.06 0 0 1 .06-.044h1.376c.034 0 .062.027.062.061zm9.135 1.44a1.35 1.35 0 0 0-.517-.334a1.9 1.9 0 0 0-.676-.114c-.253 0-.49.041-.701.125c-.208.082-.395.21-.545.377a1.75 1.75 0 0 0-.35.619c-.087.278-.13.568-.124.859c0 .32.046.606.135.848q.14.361.387.603c.164.157.364.276.59.355a2.3 2.3 0 0 0 .742.118q.213 0 .376-.015a2.3 2.3 0 0 0 .884-.25a.06.06 0 0 0 .033-.055v-.77a.063.063 0 0 0-.09-.055a2.5 2.5 0 0 1-.828.265q-.152.015-.306.014a.9.9 0 0 1-.332-.055a.7.7 0 0 1-.242-.162a.8.8 0 0 1-.157-.263a1.2 1.2 0 0 1-.057-.295h2.157a.063.063 0 0 0 .063-.062v-.483a2.1 2.1 0 0 0-.114-.725a1.5 1.5 0 0 0-.328-.544zm-.765.58a.7.7 0 0 1 .106.22q.03.107.038.229h-1.137q.034-.325.177-.478a.52.52 0 0 1 .395-.167a.55.55 0 0 1 .246.052a.5.5 0 0 1 .175.144M6.26 7.63h-.137L5.41 9.336h.179l.218-.534h.769l.22.534h.18l-.714-1.708H6.26zm-.419 1.04l.352-.844l.341.844zm1.483.035h.555c.292 0 .489-.262.489-.54c0-.265-.211-.536-.503-.536h-.708v1.708h.166zm0-.926h.532c.187 0 .346.172.346.386c0 .207-.13.392-.332.392h-.546zm1.129 1.558l.218-.534h.767l.22.534h.184l-.714-1.708H8.99l-.715 1.708zm.606-1.51l.342.843H8.71l.352-.844H9.06zm.778.643c0-.41.297-.85.81-.85a.67.67 0 0 1 .631.372l-.135.081a.54.54 0 0 0-.504-.303c-.408 0-.632.365-.632.709c0 .376.276.718.639.718a.58.58 0 0 0 .526-.318l.14.073c-.111.256-.414.397-.676.397c-.468 0-.799-.447-.799-.88zm1.875.867h-.165V7.629h.165v.76h1.011v-.76h.169v1.708h-.169v-.799h-1.01zm2.71 0h-1.145V7.629h1.124v.15h-.959v.616h.836v.142h-.837v.65h.982v.15z"
                  ></path>
                </svg>,
                // mongodb
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={50}
                  height={50}
                  viewBox="0 0 128 128"
                >
                  <path
                    fill="#94795d"
                    fillRule="evenodd"
                    d="M87.259 100.139c.169-.325.331-.612.469-.909c.087-.19.221-.228.41-.223c1.133.032 2.266.067 3.4.078c.963.01 1.928-.008 2.892-.019c1.086-.013 2.172-.07 3.257-.039c1.445.042 2.853.325 4.16.968c1.561.769 2.742 1.94 3.547 3.483a8.7 8.7 0 0 1 .931 3.14c.172 1.608.059 3.179-.451 4.717c-.632 1.906-1.832 3.365-3.499 4.458c-1.283.841-2.69 1.338-4.198 1.622c-1.596.301-3.197.204-4.798.209c-1.756.007-3.511-.031-5.267-.051c-.307-.003-.351-.061-.27-.354l.075-.27c.171-.538.263-.562.809-.652a2.8 2.8 0 0 0 1.087-.413c.184-.122.26-.44.332-.685c.062-.214.065-.449.067-.675c.025-3.425.051-6.849.065-10.272a44 44 0 0 0-.065-2.596c-.034-.605-.357-1.019-1.077-1.162c-.56-.111-1.124-.197-1.687-.296zm16.076 8.293c-.076-.682-.113-1.37-.235-2.042c-.292-1.613-.998-3.018-2.238-4.119c-2.005-1.779-4.419-2.053-6.949-1.841c-.576.048-.7.245-.709.837c-.014.84-.028 1.68-.029 2.52q-.006 3.996 0 7.992q0 1.138.031 2.272c.024.774.305 1.429 1.063 1.729c1.195.473 2.452.529 3.706.336c2.003-.307 3.404-1.474 4.344-3.223c.744-1.388.954-2.903 1.016-4.461m4.869 9.071c-.024-.415.146-.758.356-1.073c.057-.085.253-.081.388-.108l1.146-.227c.405-.086.618-.358.675-.755c.038-.262.074-.527.077-.792a880 880 0 0 0 .059-6.291c.01-2.1.002-4.2.002-6.3l-.009-.401c-.041-.675-.367-1.025-1.037-1.124l-1.453-.221c-.179-.024-.244-.11-.179-.269c.112-.271.219-.552.377-.796c.059-.09.258-.125.392-.122c.694.01 1.388.062 2.082.061l6.041-.036c1.164-.001 2.288.202 3.332.759c1.149.612 1.792 1.559 1.976 2.849c.192 1.355-.219 2.497-1.209 3.404c-.407.374-.934.618-1.406.922l-.154.096c.438.161.855.3 1.261.466c1.188.487 2.133 1.248 2.633 2.463c.395.959.395 1.959.161 2.953c-.364 1.556-1.389 2.591-2.722 3.374c-1.251.735-2.605 1.163-4.047 1.235c-1.33.067-2.666.042-3.999.057l-.772.004a996 996 0 0 1-3.854-.096zm5.537-6.089h.013c0 .658-.009 1.316.003 1.974c.008.426-.007.864.085 1.274c.138.613.418 1.166 1.106 1.342a6.7 6.7 0 0 0 2.818.124c1.177-.205 2.116-.795 2.631-1.916c.382-.833.439-1.716.308-2.618c-.174-1.188-.805-2.05-1.854-2.615c-.688-.371-1.422-.598-2.204-.628c-.876-.033-1.753-.035-2.629-.062c-.246-.007-.28.118-.279.32c.005.934.002 1.869.002 2.805m1.865-4.475c.479-.024 1.021-.031 1.56-.085c1.032-.103 1.759-.622 2.138-1.609c.193-.501.185-1.017.19-1.538c.015-1.357-.777-2.469-2.066-2.929c-.995-.355-2.021-.361-3.053-.333c-.418.011-.605.194-.611.615l-.062 5.489c-.003.218.091.312.303.319z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#50382b"
                    fillRule="evenodd"
                    d="m10.543 116.448l-.073.944c-.68 0-1.307-.005-1.934.002c-1.181.012-2.362.031-3.544.048l-.114.007c-.169-.02-.476-.02-.484-.07c-.05-.281-.034-.576-.021-.867c.001-.033.116-.075.183-.091l.919-.205c.573-.149.775-.396.802-.988c.031-.667.062-1.335.065-2.002c.009-1.642-.001-3.282.006-4.924c.001-.384-.132-.67-.49-.826a44 44 0 0 0-1.285-.546c-.204-.082-.469-.127-.445-.401c.024-.279.281-.352.523-.407c1.002-.229 2.005-.452 3.004-.696c.322-.079.63-.212 1.015-.346c.02.208.057.406.053.604l-.059.941c-.001.106.054.248.133.307c.048.037.209-.03.289-.092c.854-.65 1.758-1.211 2.789-1.538c1.597-.507 2.968-.037 3.928 1.34c.338.485.339.485.808.146c.805-.585 1.647-1.101 2.589-1.441c2.068-.747 4.055.201 4.774 2.284c.262.756.362 1.537.36 2.335l-.019 5.298c-.001.437.144.686.56.822c.467.153.951.258 1.477.396l-.122.911c-.598 0-1.148-.004-1.698.001c-1.344.012-2.688.019-4.031.05c-.234.006-.295-.052-.307-.271c-.039-.701-.045-.7.615-.858l.222-.057c.645-.176.86-.374.865-1.028c.015-1.878.054-3.761-.041-5.635c-.099-1.944-1.642-2.979-3.526-2.481a5.2 5.2 0 0 0-1.69.814c-.175.125-.208.269-.194.488q.081 1.242.093 2.486c.012 1.451-.006 2.902 0 4.354c.002.588.203.813.784.949l.863.199l.16.036c.012.276.023.552.01.828c-.008.173-.142.188-.292.185c-.839-.021-1.679-.049-2.518-.047c-1.021.002-2.041.031-3.061.049h-.24c0-.293-.014-.573.01-.852c.005-.067.123-.161.204-.182l1.006-.213c.427-.105.631-.324.655-.758c.114-2.01.196-4.021.007-6.03a3.7 3.7 0 0 0-.326-1.145c-.515-1.138-1.674-1.613-3.011-1.271c-.635.162-1.208.453-1.75.82a.8.8 0 0 0-.378.695q.002 3.008.013 6.014l.011.773c.012.539.241.823.776.939c.344.078.692.131 1.082.203"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#4f382b"
                    fillRule="evenodd"
                    d="M71.001 105.285c.155.754.152 1.432-.402 1.946c-.55.511-1.246.339-1.925.225c.063.358.133.662.167.97c.247 2.289-.738 3.988-2.861 4.959c-.802.366-1.653.502-2.522.572c-.432.034-.81.364-.851.719c-.042.36.184.73.636.838c.533.127 1.089.163 1.636.226c1.174.134 2.361.195 3.521.405c1.754.316 2.733 1.847 2.424 3.609c-.275 1.568-1.183 2.709-2.449 3.584c-2.133 1.478-4.473 1.91-6.965 1.156c-1.425-.432-2.43-1.369-2.777-2.885c-.174-.759.011-1.446.582-1.961c.679-.61 1.418-1.154 2.129-1.73l.23-.231l-.264-.185c-.725-.344-1.305-.815-1.53-1.633c-.077-.277.003-.459.238-.601q.6-.361 1.193-.735c.186-.116.37-.236.543-.37c.236-.18.215-.314-.067-.418c-.656-.242-1.239-.593-1.691-1.133c-.755-.901-.969-1.974-.907-3.107c.097-1.77 1.058-2.936 2.62-3.686c1.857-.891 3.72-.947 5.613-.135c.7.3 1.438.364 2.189.312c.561-.04 1.051-.252 1.49-.711m-6.843 12.681c-1.394-.012-1.831.16-2.649.993c-.916.934-.911 2.229.003 3.167c.694.711 1.56 1.044 2.523 1.144c1.125.116 2.233.069 3.255-.494c1.09-.603 1.632-1.723 1.387-2.851c-.203-.931-.889-1.357-1.724-1.602c-.95-.278-1.932-.331-2.795-.357m-2.738-8.908c.051.387.072.779.158 1.158c.223.982.65 1.845 1.627 2.282c1.147.515 2.612.294 3.114-1.316a4.85 4.85 0 0 0-.113-3.274a2.5 2.5 0 0 0-.91-1.184c-.996-.695-2.793-.787-3.525.749c-.238.499-.331 1.03-.351 1.585"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#4f372b"
                    fillRule="evenodd"
                    d="M47.35 105.038c.037.171.111.365.113.56c.003.371-.037.742-.058 1.113v.322l.314-.24c.86-.708 1.784-1.311 2.86-1.636c1.942-.585 3.882.478 4.515 2.456c.24.752.335 1.525.344 2.311c.02 1.746.032 3.492.05 5.238c.006.627.078.739.671.92a7.4 7.4 0 0 0 1.03.229c.191.03.273.105.263.292l.002.172c-.007.723-.057.756-.758.754c-1.678-.003-3.355.007-5.033.021c-.5.004-.501.019-.551-.475l-.01-.284c.031-.426.041-.422.46-.484c.282-.042.562-.107.837-.179c.283-.073.419-.282.457-.562c.019-.142.044-.284.043-.426c-.024-1.908.007-3.818-.097-5.723c-.084-1.541-1.26-2.459-2.807-2.354a4.05 4.05 0 0 0-2.071.743c-.413.289-.496.706-.494 1.155q.014 2.676.044 5.353c.004.391.015.782.052 1.17c.039.424.188.595.604.687c.398.088.804.139 1.229.21l.036.328c.014.765-.066.822-.809.819c-1.735-.007-3.47.004-5.204.023c-.273.004-.389-.082-.382-.348l-.004-.114c-.045-.689-.025-.715.627-.827l.308-.062c.706-.159.887-.347.897-1.064c.033-2.271.045-4.541.068-6.812c.003-.326-.12-.579-.424-.714a54 54 0 0 0-1.287-.544c-.238-.098-.51-.16-.519-.489c-.006-.232.242-.437.581-.506c.681-.138 1.368-.253 2.041-.422c.67-.167 1.328-.391 2.062-.611"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#4f382b"
                    fillRule="evenodd"
                    d="M84.865 110.97c-.032 2.121-.583 3.836-2.083 5.123c-1.9 1.633-4.864 2.188-7.287.967c-1.034-.521-1.794-1.32-2.289-2.357c-.759-1.595-.949-3.272-.553-4.99c.392-1.699 1.421-2.93 2.961-3.727c1.584-.819 3.252-1.139 5.011-.709c2.225.543 3.824 2.357 4.142 4.667c.057.405.079.815.098 1.026m-2.577 1.149l-.086-.01c0-.2.011-.4-.002-.6c-.073-1.246-.353-2.433-1.075-3.476c-.685-.988-1.618-1.571-2.832-1.656c-1.359-.096-2.501.664-2.902 2.052c-.602 2.084-.398 4.115.66 6.024c.461.832 1.144 1.446 2.059 1.769c1.793.631 3.383-.186 3.85-2.022c.172-.678.222-1.387.328-2.081"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#4f372b"
                    fillRule="evenodd"
                    d="M40.819 111.134c-.037 1.522-.396 2.929-1.336 4.152c-1.007 1.31-2.391 2.01-3.965 2.305c-1.861.348-3.609.032-5.104-1.217c-.71-.594-1.195-1.355-1.515-2.221c-.525-1.42-.656-2.875-.333-4.358c.345-1.587 1.241-2.8 2.63-3.614c1.606-.939 3.339-1.358 5.19-.936c2.38.544 3.754 2.095 4.262 4.443c.102.474.116.964.171 1.446m-2.606 1.004l-.069-.01v-.286c-.039-1.396-.312-2.726-1.145-3.886c-.617-.861-1.443-1.401-2.502-1.552c-1.726-.246-2.854.778-3.228 2.169c-.488 1.817-.335 3.612.42 5.335c.471 1.074 1.215 1.911 2.358 2.317c1.782.633 3.396-.205 3.847-2.034c.166-.669.216-1.367.319-2.053"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#439934"
                    fillRule="evenodd"
                    d="M82.362 33.544c1.227 3.547 2.109 7.168 2.4 10.92c.36 4.656.196 9.28-.786 13.859l-.126.366c-.308.001-.622-.038-.923.009c-2.543.4-5.083.814-7.624 1.226c-2.627.426-5.256.835-7.878 1.289c-.929.16-2.079-.031-2.454 1.253l-.18.061l.127-7.678l-.129-18.526l1.224-.21c2.001-.327 4.002-.66 6.006-.979c2.39-.379 4.782-.749 7.174-1.119c1.056-.162 2.113-.313 3.169-.471"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#45a538"
                    fillRule="evenodd"
                    d="M62.265 84.911c-1.291-1.11-2.627-2.171-3.864-3.339c-6.658-6.28-11.529-13.673-13.928-22.586c-.661-2.452-1.101-4.945-1.243-7.479c-.1-1.774-.243-3.563-.117-5.328c.333-4.693 1.012-9.341 2.388-13.862l.076-.105c.134.178.326.336.394.537q2.015 5.934 4.004 11.879c4.169 12.451 8.333 24.905 12.509 37.354c.082.243.293.442.445.661z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#46a037"
                    fillRule="evenodd"
                    d="M82.362 33.544c-1.057.157-2.114.309-3.169.471c-2.392.37-4.784.74-7.174 1.119c-2.003.318-4.004.651-6.006.979l-1.224.21l-.01-.798c-.041-.656-.109-1.312-.118-1.968l-.137-12.554c-.032-2.619-.08-5.238-.133-7.856a198 198 0 0 0-.141-4.88c-.04-.873-.181-1.742-.237-2.615c-.033-.502.011-1.008.022-1.512c.624 1.209 1.235 2.427 1.876 3.627c1.013 1.897 2.628 3.295 4.083 4.82c5.746 6.031 9.825 13.039 12.368 20.957"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#409433"
                    fillRule="evenodd"
                    d="m64.792 62.527l.18-.061c.375-1.284 1.525-1.093 2.454-1.253c2.622-.454 5.251-.863 7.878-1.289c2.541-.411 5.081-.825 7.624-1.226c.301-.047.615-.008.923-.009c-.475 1.696-.849 3.429-1.452 5.078c-.685 1.87-1.513 3.696-2.392 5.486a37.6 37.6 0 0 1-4.853 7.458c-1.466 1.762-3.1 3.393-4.737 5.002c-.906.889-1.972 1.614-2.966 2.414l-.258-.176l-.927-.792l-.959-2.104a31.7 31.7 0 0 1-1.065-7.516l.018-.428l.131-1.854c.043-.633.101-1.265.128-1.898c.096-2.276.182-4.554.273-6.832"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#4faa41"
                    fillRule="evenodd"
                    d="M64.792 62.527c-.09 2.278-.176 4.557-.273 6.835c-.027.634-.084 1.266-.128 1.898l-.584.221c-1.298-3.821-2.597-7.602-3.867-11.392c-2.101-6.271-4.176-12.551-6.274-18.824a3423 3423 0 0 0-5.118-15.176c-.081-.236-.311-.422-.471-.631l3.74-6.877c.129.223.298.432.379.672c1.73 5.12 3.457 10.241 5.169 15.367c2.228 6.67 4.441 13.343 6.667 20.014c.089.266.235.512.375.811l.512-.596z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#4aa73c"
                    fillRule="evenodd"
                    d="M48.076 25.458c.161.209.391.395.471.631a3380 3380 0 0 1 5.118 15.176c2.098 6.273 4.173 12.553 6.274 18.824c1.27 3.79 2.569 7.57 3.867 11.392l.584-.221l-.131 1.854l-.119.427c-.203 2.029-.374 4.062-.622 6.087c-.124 1.015-.389 2.011-.59 3.015c-.151-.219-.363-.418-.445-.661c-4.177-12.449-8.34-24.903-12.509-37.354a3011 3011 0 0 0-4.004-11.879c-.068-.201-.26-.359-.394-.537z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#57ae47"
                    fillRule="evenodd"
                    d="m64.918 54.849l-.512.596c-.14-.299-.286-.545-.375-.811c-2.226-6.671-4.439-13.344-6.667-20.014a4618 4618 0 0 0-5.169-15.367c-.081-.24-.25-.449-.379-.672l4.625-6.084c.146.194.354.367.429.586q1.925 5.64 3.822 11.289c1.182 3.518 2.346 7.04 3.542 10.552c.08.235.359.401.545.601l.01.798z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#60b24f"
                    fillRule="evenodd"
                    d="M64.779 35.525c-.187-.199-.465-.365-.545-.601c-1.195-3.512-2.36-7.034-3.542-10.552a2496 2496 0 0 0-3.822-11.289c-.075-.219-.283-.392-.429-.586c1.504-1.473 2.961-2.999 4.526-4.404c1.391-1.248 2.509-2.586 2.561-4.559l.11-.393l.396.998c-.01.504-.055 1.01-.022 1.512c.057.873.198 1.742.237 2.615c.073 1.625.108 3.253.141 4.88c.053 2.618.101 5.237.133 7.856l.137 12.554c.01.657.079 1.313.119 1.969"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#a9aa88"
                    fillRule="evenodd"
                    d="M62.929 82.642c.201-1.004.466-2 .59-3.015c.248-2.024.419-4.058.622-6.087l.051-.008l.05.009a31.7 31.7 0 0 0 1.065 7.516c-.135.178-.324.335-.396.535c-.555 1.566-1.079 3.145-1.637 4.71c-.076.214-.29.381-.439.568l-.571-1.96z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#b6b598"
                    fillRule="evenodd"
                    d="M62.835 86.871c.149-.188.363-.354.439-.568c.558-1.565 1.082-3.144 1.637-4.71c.071-.2.261-.357.396-.535l.959 2.104c-.189.268-.451.511-.556.81l-1.836 5.392c-.076.217-.333.369-.507.552z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#c2c1a7"
                    fillRule="evenodd"
                    d="M63.367 89.915c.173-.183.431-.335.507-.552l1.836-5.392c.104-.299.367-.542.556-.81l.928.791c-.448.443-.697.955-.547 1.602l-.282.923c-.128.158-.314.296-.377.477c-.641 1.836-1.252 3.682-1.898 5.517c-.082.232-.309.415-.468.621z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#cecdb7"
                    fillRule="evenodd"
                    d="M63.621 93.091c.16-.206.387-.389.468-.621c.646-1.835 1.258-3.681 1.898-5.517c.063-.181.249-.318.377-.477l-.389 4.236c-.104.12-.254.225-.304.364l-1.294 3.708c-.091.253-.265.479-.401.716c-.121-.158-.337-.311-.347-.475c-.038-.642-.011-1.289-.008-1.934"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#dbdac7"
                    fillRule="evenodd"
                    d="M63.977 95.501c.136-.237.31-.463.401-.716l1.294-3.708c.05-.14.201-.244.304-.364l.01 2.78l-.931 2.387z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#ebe9dc"
                    fillRule="evenodd"
                    d="m65.055 95.88l.931-2.387l.192 2.824z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#cecdb7"
                    fillRule="evenodd"
                    d="M66.646 85.554c-.149-.646.099-1.158.547-1.602l.258.176z"
                    clipRule="evenodd"
                  ></path>
                  <path
                    fill="#4faa41"
                    fillRule="evenodd"
                    d="m64.242 73.542l-.05-.009l-.051.008l.119-.427z"
                    clipRule="evenodd"
                  ></path>
                </svg>,
                // mysql
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width={50}
                  height={50}
                  viewBox="0 0 128 128"
                >
                  <path
                    fill="#00618a"
                    d="M0 91.313h4.242V74.566l6.566 14.598c.773 1.77 1.832 2.391 3.914 2.391s3.098-.621 3.871-2.391l6.566-14.598v16.746h4.242V74.594c0-1.633-.652-2.422-2-2.828c-3.223-1.004-5.383-.137-6.363 2.039l-6.441 14.41l-6.238-14.41c-.937-2.176-3.14-3.043-6.359-2.039c-1.348.406-2 1.195-2 2.828zM32.93 77.68h4.238v9.227c-.039.5.16 1.676 2.484 1.715h9.223V77.633h4.25c.02 0-.008 14.984-.008 15.047c.023 3.695-4.582 4.496-6.707 4.559H33.02v-2.852l13.414-.004c2.73-.285 2.406-1.645 2.406-2.098v-1.113h-9.012c-4.195-.039-6.863-1.871-6.898-3.977c-.004-.191.09-9.422 0-9.516zm0 0"
                  ></path>
                  <path
                    fill="#e48e00"
                    d="M56.391 91.313h12.195c1.426 0 2.813-.301 3.914-.816c1.836-.84 2.73-1.984 2.73-3.48v-3.098c0-1.223-1.016-2.367-3.016-3.125c-1.059-.41-2.367-.625-3.629-.625h-5.141c-1.711 0-2.527-.516-2.73-1.656c-.039-.137-.039-.246-.039-.383V76.2c0-.109 0-.219.039-.355c.203-.867.652-1.113 2.16-1.25l.41-.027h12.109v-2.824H63.488c-1.711 0-2.609.109-3.426.352c-2.527.789-3.629 2.039-3.629 4.215v2.473c0 1.902 2.16 3.535 5.789 3.914l1.223.055h4.406c.164 0 .324 0 .449.027c1.344.109 1.914.355 2.324.844c.211.195.332.473.324.758v2.477c0 .297-.203.68-.609 1.004c-.367.328-.98.543-1.793.598l-.449.027H56.391zm45.297-4.922c0 2.91 2.164 4.539 6.523 4.867l1.227.055h11.051v-2.828h-11.133c-2.488 0-3.426-.625-3.426-2.121V71.738h-4.238V86.39zm-23.75.148V76.457c0-2.559 1.801-4.113 5.355-4.602a8 8 0 0 1 1.145-.082h8.047c.41 0 .777.027 1.188.082c3.555.488 5.352 2.043 5.352 4.602v10.082c0 2.078-.762 3.188-2.523 3.914l4.18 3.77h-4.926l-3.379-3.051l-3.402.215H84.44a9.2 9.2 0 0 1-2.492-.352c-2.699-.734-4.008-2.152-4.008-4.496zm4.578-.246c0 .137.039.273.082.438c.246 1.172 1.348 1.824 3.023 1.824h3.852l-3.539-3.195h4.926l3.086 2.789c.57-.305.941-.766 1.074-1.363c.039-.137.039-.273.039-.41v-9.668c0-.109 0-.246-.039-.383c-.246-1.09-1.348-1.715-2.984-1.715h-6.414c-1.879 0-3.105.816-3.105 2.098zm0 0"
                  ></path>
                  <path
                    fill="#00618a"
                    d="M124.219 67.047c-2.605-.07-4.598.172-6.301.891c-.484.203-1.258.207-1.336.813c.266.281.309.699.52 1.039c.406.66 1.094 1.539 1.707 2l2.074 1.484c1.273.777 2.699 1.223 3.93 2c.723.461 1.441 1.039 2.148 1.559c.348.254.582.656 1.039.816v-.074c-.238-.305-.301-.723-.52-1.039l-.965-.965c-.941-1.25-2.137-2.348-3.41-3.262c-1.016-.727-3.281-1.711-3.707-2.891l-.074-.074c.719-.078 1.563-.34 2.223-.516c1.117-.301 2.113-.223 3.262-.52l1.559-.449v-.293c-.582-.598-.996-1.387-1.633-1.93c-1.656-1.41-3.469-2.824-5.336-4.004c-1.035-.652-2.312-1.074-3.41-1.629c-.367-.187-1.016-.281-1.262-.594c-.574-.734-.887-1.664-1.332-2.52l-2.668-5.633c-.562-1.285-.93-2.555-1.633-3.707c-3.363-5.535-6.988-8.875-12.602-12.156c-1.191-.699-2.633-.973-4.148-1.332l-2.449-.148c-.496-.211-1.012-.82-1.48-1.113c-1.859-1.176-6.629-3.73-8.008-.371c-.867 2.121 1.301 4.191 2.078 5.266c.543.754 1.242 1.598 1.629 2.445c.258.555.301 1.113.52 1.703c.539 1.453 1.008 3.031 1.707 4.375c.352.68.738 1.395 1.184 2c.273.371.742.539.816 1.113c-.457.641-.484 1.633-.742 2.445c-1.16 3.652-.723 8.191.965 10.898c.516.828 1.734 2.609 3.41 1.926c1.465-.598 1.137-2.445 1.555-4.078c.098-.367.039-.641.223-.887v.074l1.336 2.668c.988 1.59 2.738 3.25 4.223 4.371c.773.582 1.379 1.59 2.375 1.93V68.6h-.074c-.195-.297-.496-.422-.742-.664c-.582-.57-1.227-1.277-1.703-1.93c-1.352-1.832-2.547-3.84-3.633-5.93c-.52-.996-.973-2.098-1.41-3.113c-.168-.391-.164-.984-.516-1.184c-.48.742-1.187 1.344-1.559 2.223c-.594 1.402-.668 3.117-.891 4.891l-.148.074c-1.031-.25-1.395-1.312-1.777-2.223c-.973-2.305-1.152-6.02-.297-8.672c.219-.687 1.219-2.852.813-3.484c-.191-.633-.828-1-1.184-1.484a11.7 11.7 0 0 1-1.187-2.074c-.793-1.801-1.164-3.816-2-5.633c-.398-.871-1.074-1.75-1.629-2.523c-.617-.855-1.305-1.484-1.781-2.52c-.168-.367-.398-.957-.148-1.336c.078-.254.195-.359.445-.441c.43-.332 1.629.109 2.074.293c1.191.496 2.184.965 3.191 1.633c.48.32.969.941 1.555 1.113h.668c1.043.238 2.211.07 3.188.367c1.723.523 3.27 1.34 4.668 2.227c4.273 2.695 7.766 6.535 10.156 11.117c.387.738.551 1.441.891 2.223c.684 1.578 1.543 3.203 2.223 4.746s1.34 3.094 2.297 4.375c.504.672 2.453 1.031 3.336 1.406c.621.262 1.637.535 2.223.891c1.125.676 2.211 1.48 3.266 2.223c.523.375 2.141 1.188 2.223 1.855zM91.082 38.805a5.3 5.3 0 0 0-1.332.148v.074h.074c.258.535.715.879 1.035 1.336l.742 1.555l.074-.07c.461-.324.668-.844.668-1.633c-.187-.195-.211-.437-.371-.668c-.211-.309-.621-.48-.891-.742zm0 0"
                  ></path>
                </svg>,
              ].map((src, index) => (
                <div
                  key={index}
                  className="w-36 h-16 flex items-center justify-center"
                  role="listitem"
                >
                  {src}
                </div>
              ))}
            </div>
          </div>
        </section>
        <SiteFooter />
      </main>
    </>
  );
};

export default HomePage;
