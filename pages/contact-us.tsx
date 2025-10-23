import React from "react";
import Head from "next/head";
import SiteHeadder from "@/components/SiteHeadder";
import SiteFooter from "@/components/SiteFooter";
import Link from "next/link";
import Image from "next/image";

const ContactUs: React.FC = () => {
  const formRef = React.useRef<HTMLFormElement | null>(null);
  const modalRef = React.useRef<HTMLDivElement | null>(null);
  const timerRef = React.useRef<number | null>(null);
  const [success, setSuccess] = React.useState(false);

  const closeModal = React.useCallback(() => {
    setSuccess(false);
    if (timerRef.current) {
      window.clearTimeout(timerRef.current);
      timerRef.current = null;
    }
  }, []);

  React.useEffect(() => {
    if (!success) return;

    // auto close after 5s
    timerRef.current = window.setTimeout(() => {
      setSuccess(false);
      timerRef.current = null;
    }, 5000);

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeModal();
    };

    window.addEventListener("keydown", onKey);
    return () => {
      window.removeEventListener("keydown", onKey);
      if (timerRef.current) {
        window.clearTimeout(timerRef.current);
        timerRef.current = null;
      }
    };
  }, [success, closeModal]);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const form = formRef.current;
    if (!form) return;

    const formData = new FormData(form);
    const action = form.getAttribute("action");

    if (!action) {
      alert("Form action URL not found.");
      return;
    }

    try {
      const response = await fetch(action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        form.reset();
        setSuccess(true);
      } else {
        alert("contactUs.form.error");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("contactUs.form.error");
    }
  };
  return (
    <>
      <Head>
        <title>Contact us — Enkonix Insights</title>
        <meta
          name="description"
          content="Get in touch with Enkonix — book a discovery call, request a proposal or find our offices."
        />
      </Head>

      <SiteHeadder />

      <main className="min-h-screen bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100">
        {/* Hero */}
        <section className="py-20 min-h-screen flex justify-center items-center bg-linear-to-r from-indigo-600 to-pink-500 text-white">
          <div className="max-w-5xl mx-auto px-6 text-center">
            <h1 className="text-4xl md:text-5xl font-extrabold">
              Let’s talk about your next transformation
            </h1>
            <p className="mt-4 text-lg max-w-3xl mx-auto">
              Book a short discovery call and we’ll sketch a practical plan to
              reduce risk and deliver value fast.
            </p>
            <div className="mt-6 flex items-center justify-center gap-4">
              <a
                href="#form"
                className="inline-block px-6 py-3 bg-white text-indigo-700 rounded-md font-semibold"
              >
                Book a discovery
              </a>
              <Link
                href="/services"
                className="inline-block px-6 py-3 border border-white/30 rounded-md text-white"
              >
                See services
              </Link>
            </div>
          </div>
        </section>

        {/* Contact form (image-left / form-right) */}
        <section id="form" className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-6 items-start">
              {/* image + testimonial */}
              <div className="rounded-lg min-h-full overflow-hidden">
                <div className="relative    bg-gray-100 dark:bg-gray-800 rounded-lg">
                  <Image
                    src="/images/contact-office.jpg"
                    alt="Office"
                    width={600}
                    height={550}
                    className="object-cover w-full h-full"
                  />

                  <div className="absolute left-6 bottom-6 right-6 text-white">
                    <div className="text-lg font-semibold drop-shadow">
                      “This software simplifies the website building process,
                      making it a breeze to manage our online presence.”
                    </div>
                    <div className="mt-3 font-semibold drop-shadow">
                      John Smith
                    </div>
                    <div className="text-sm drop-shadow">Founder & CEO</div>
                  </div>
                </div>
              </div>

              {/* form */}
              <div>
                <div className="rounded-lg p-6 bg-white dark:bg-gray-800 shadow">
                  <div className="text-gray-700 dark:text-gray-300">
                    Have a question or feedback? Fill out the form below, and
                    we'll get back to you as soon as possible.
                  </div>
                  {/* success modal handled at page root */}

                  <form
                    ref={formRef}
                    onSubmit={handleSubmit}
                    action="https://formspree.io/f/xovlekvg"
                    method="POST"
                    className="mt-6 space-y-4"
                  >
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <input
                        type="text"
                        name="name"
                        placeholder="Full name"
                        className="w-full rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                      />
                      <input
                        type="email"
                        name="email"
                        placeholder="Your email"
                        className="w-full rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                      />
                    </div>

                    <input
                      type="text"
                      name="subject"
                      placeholder="Subject"
                      className="w-full rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    />

                    <textarea
                      name="message"
                      placeholder="Your message.."
                      className="w-full rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 px-3 py-2 h-40 focus:outline-none focus:ring-2 focus:ring-indigo-300"
                    ></textarea>

                    <div className="flex items-center gap-3">
                      <input
                        id="consent"
                        name="consent"
                        type="checkbox"
                        className="w-4 h-4 rounded-sm text-indigo-600"
                      />
                      <label
                        htmlFor="consent"
                        className="text-sm text-gray-600 dark:text-gray-400"
                      >
                        I agree to being contacted about my enquiry.
                      </label>
                    </div>

                    <button className="w-full bg-linear-to-r from-indigo-600 to-blue-900 text-white py-3 rounded-lg font-semibold shadow-md hover:opacity-95 transition">
                      Send message
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Other ways to reach us */}
        <section className="py-16 ">
          <div className="max-w-6xl mx-auto px-6">
            <h3 className="text-xl font-semibold">Other ways to reach us</h3>

            <div className="mt-6 grid grid-cols-1 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "Visit us",
                  subtitle: "Don Valley, Toronto, CA",
                  linkText: "View on maps",

                  icon: (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={17.44}
                        height={25}
                        viewBox="0 0 256 367"
                      >
                        <path
                          fill="#34a853"
                          d="M70.585 271.865a371 371 0 0 1 28.911 42.642c7.374 13.982 10.448 23.463 15.837 40.31c3.305 9.308 6.292 12.086 12.714 12.086c6.998 0 10.173-4.726 12.626-12.035c5.094-15.91 9.091-28.052 15.397-39.525c12.374-22.15 27.75-41.833 42.858-60.75c4.09-5.354 30.534-36.545 42.439-61.156c0 0 14.632-27.035 14.632-64.792c0-35.318-14.43-59.813-14.43-59.813l-41.545 11.126l-25.23 66.451l-6.242 9.163l-1.248 1.66l-1.66 2.078l-2.914 3.319l-4.164 4.163l-22.467 18.304l-56.17 32.432z"
                        ></path>
                        <path
                          fill="#fbbc04"
                          d="M12.612 188.892c13.709 31.313 40.145 58.839 58.031 82.995l95.001-112.534s-13.384 17.504-37.662 17.504c-27.043 0-48.89-21.595-48.89-48.825c0-18.673 11.234-31.501 11.234-31.501l-64.489 17.28z"
                        ></path>
                        <path
                          fill="#4285f4"
                          d="M166.705 5.787c31.552 10.173 58.558 31.53 74.893 63.023l-75.925 90.478s11.234-13.06 11.234-31.617c0-27.864-23.463-48.68-48.81-48.68c-23.969 0-37.735 17.475-37.735 17.475v-57z"
                        ></path>
                        <path
                          fill="#1a73e8"
                          d="M30.015 45.765C48.86 23.218 82.02 0 127.736 0c22.18 0 38.89 5.823 38.89 5.823L90.29 96.516H36.205z"
                        ></path>
                        <path
                          fill="#ea4335"
                          d="M12.612 188.892S0 164.194 0 128.414c0-33.817 13.146-63.377 30.015-82.649l60.318 50.759z"
                        ></path>
                      </svg>
                    </>
                  ),
                },
                {
                  title: "Phone",
                  subtitle: "+87 765338763653",
                  linkText: "Call us",

                  icon: (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={25}
                        height={25}
                        viewBox="0 0 48 48"
                      >
                        <g
                          fill="none"
                          stroke="#000"
                          strokeLinejoin="round"
                          strokeWidth={4}
                        >
                          <path
                            strokeLinecap="round"
                            d="M41.7796 20.6066C42.0324 18.9108 41.9495 17.1747 41.5309 15.5054C40.978 13.3002 39.8392 11.2118 38.1147 9.4873C36.3902 7.76281 34.3018 6.62409 32.0967 6.07115C30.4274 5.65257 28.6912 5.56967 26.9954 5.82245"
                          ></path>
                          <path
                            strokeLinecap="round"
                            d="M34.1897 19.8035C34.4605 17.9869 33.8967 16.0699 32.4983 14.6715C31.0998 13.2731 29.1829 12.7092 27.3663 12.98"
                          ></path>
                          <path
                            fill="#2f88ff"
                            d="M14.3757 8.79424C15.1022 8.79424 15.7716 9.1883 16.1243 9.8235L18.5707 14.2303C18.891 14.8073 18.9061 15.5052 18.6109 16.0955L16.2541 20.8091C16.2541 20.8091 16.9371 24.3206 19.7955 27.179C22.654 30.0374 26.1536 30.7086 26.1536 30.7086L30.8665 28.3522C31.4572 28.0568 32.1556 28.0721 32.7328 28.393L37.1521 30.85C37.7868 31.2028 38.1803 31.8719 38.1803 32.598V37.6715C38.1803 40.2552 35.7804 42.1213 33.3323 41.2952C28.3044 39.5987 20.4997 36.3685 15.5529 31.4216C10.606 26.4748 7.37579 18.6701 5.67928 13.6422C4.85325 11.1941 6.71934 8.79424 9.30299 8.79424H14.3757Z"
                          ></path>
                        </g>
                      </svg>
                    </>
                  ),
                },
                {
                  title: "Mail",
                  subtitle: "info@stackly.com",
                  linkText: "Send mail",

                  icon: (
                    <>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width={25}
                        height={25}
                        viewBox="0 0 32 32"
                      >
                        <g fill="none">
                          <rect
                            width={30}
                            height={22}
                            x={1}
                            y={5}
                            fill="#b4acbc"
                            rx={1.5}
                          ></rect>
                          <rect
                            width={28}
                            height={18}
                            x={2}
                            y={7}
                            fill="#cdc4d6"
                            rx={1}
                          ></rect>
                          <path
                            fill="#e1d8ec"
                            d="m30 23.4l-12.971-7.782a2 2 0 0 0-2.058 0L2 23.4V25a1 1 0 0 0 1 1h26a1 1 0 0 0 1-1z"
                          ></path>
                          <path
                            fill="#998ea4"
                            d="M2 9.766V8h28v1.766L17.544 17.24a3 3 0 0 1-3.088 0z"
                          ></path>
                          <path
                            fill="#f3eef8"
                            d="M2 8.6V7a1 1 0 0 1 1-1h26a1 1 0 0 1 1 1v1.6l-12.971 7.783a2 2 0 0 1-2.058 0z"
                          ></path>
                          <path
                            fill="#00a6ed"
                            d="M16 23a7 7 0 1 0 0-14a7 7 0 0 0 0 14"
                          ></path>
                          <path
                            fill="#f4f4f4"
                            d="M16 11.5c-1.21-.02-2.36.44-3.22 1.3c-.87.85-1.34 1.99-1.34 3.2c0 2.48 2.02 4.5 4.5 4.5a.47.47 0 1 0 0-.94c-1.96 0-3.56-1.6-3.56-3.56c0-.96.38-1.86 1.06-2.53s1.59-1.03 2.55-1.03c1.93.03 3.51 1.65 3.51 3.62v.81a.67.67 0 0 1-1.34 0v-3.08a.47.47 0 0 0-.47-.47c-.26 0-.49.21-.49.47v.09c-.44-.35-.99-.57-1.6-.57c-1.4 0-2.54 1.14-2.54 2.54s1.14 2.54 2.54 2.54c.7 0 1.34-.29 1.8-.75c.28.5.81.84 1.42.84c.89 0 1.62-.73 1.62-1.62v-.81c0-2.47-1.99-4.52-4.44-4.55m-.39 5.96c-.88 0-1.6-.72-1.6-1.6s.72-1.6 1.6-1.6s1.6.72 1.6 1.6s-.72 1.6-1.6 1.6"
                          ></path>
                        </g>
                      </svg>
                    </>
                  ),
                },
              ].map((c) => (
                <div
                  key={c.title}
                  className="group rounded-lg p-6 bg-white dark:bg-gray-800 shadow hover:shadow-lg transform hover:-translate-y-1 transition flex items-start gap-4"
                >
                  <div className="w-16 h-16 rounded-lg bg-blue-400 flex items-center justify-center">
                    {c.icon}
                  </div>

                  <div className="flex-1">
                    <div className="font-semibold text-lg">{c.title}</div>
                    <div className="ml-4 flex shrink-0 self-center">
                      {c.subtitle}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FAQs - updated style */}
        <section className="py-16 bg-gray-50 dark:bg-gray-800">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid md:grid-cols-2 gap-8 items-start">
              {/* left intro */}
              <div>
                <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-white dark:bg-gray-900 shadow-sm">
                  <div className="w-2 h-2 rounded-full bg-black dark:bg-white" />
                  <div className="text-sm font-medium">Help Center</div>
                </div>

                <h2 className="mt-6 text-4xl font-extrabold leading-tight">
                  Frequently asked
                </h2>

                <p className="mt-4 text-gray-700 dark:text-gray-300 max-w-lg">
                  Answers to common questions about working with us, our
                  process, and how we run engagements. If you can't find what
                  you're looking for, reach out and we'll help.
                </p>

                <div className="mt-8">
                  <a
                    href="#form"
                    className="inline-flex items-center gap-3 px-5 py-3 bg-indigo-700 text-white rounded-md shadow"
                  >
                    Learn more
                    <span className="text-xl">→</span>
                  </a>
                </div>
              </div>

              {/* accordion list */}
              <div>
                <div className="space-y-4">
                  {[
                    {
                      q: "What is business consulting ?",
                      a: "We help organisations solve strategy, operations and technology challenges with pragmatic plans and delivery support.",
                    },
                    {
                      q: "Why wouldn't I just hire my own animator ?",
                      a: "Bringing in specialists reduces ramp time and gives access to domain experience across similar projects — often proving more cost-effective.",
                    },
                    {
                      q: "How Does variuem Ensure Data Privacy ?",
                      a: "We follow industry best practices, contractual protections and secure hosting — and can adapt controls to your compliance needs.",
                    },
                    {
                      q: "Can I use this to create and sell a product ?",
                      a: "Yes. We work with product teams to design, build and operationalise products for external customers.",
                    },
                  ].map((item, idx) => (
                    <details
                      key={item.q}
                      className="group bg-white dark:bg-gray-800 rounded-lg p-5 shadow"
                    >
                      <summary className="list-none cursor-pointer flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-10 h-10 rounded-full bg-gray-100 dark:bg-gray-900 flex items-center justify-center font-semibold">
                            <span className="text-lg text-gray-800 dark:text-gray-100">
                              {idx + 1}.
                            </span>
                          </div>

                          <div className="font-medium text-lg">{item.q}</div>
                        </div>

                        <div className="text-gray-400 group-open:rotate-45 transition-transform">
                          +
                        </div>
                      </summary>

                      <div className="mt-3 text-sm text-gray-600 dark:text-gray-300">
                        {item.a}
                      </div>
                    </details>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Map location */}
        <section className="py-10">
          <div className=" mx-auto px-6">
            <div className="grid   gap-6 items-start">
              <div className="rounded-lg overflow-hidden bg-gray-100 dark:bg-gray-800">
                {/* Google Maps embed - replace the src with your location */}
                <iframe
                  title="Office location"
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2886.849497880041!2d-79.38318428450107!3d43.65322607912107!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882b34d2d8f3e4d9%3A0x6d9e6d6a0b0b0b0b!2sDon%20Valley%2C%20Toronto%2C%20ON!5e0!3m2!1sen!2sca!4v1600000000000!5m2!1sen!2sca"
                  width="100%"
                  height="420"
                  className="border-0"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* success modal popup */}
        {success && (
          <div
            ref={modalRef}
            aria-modal="true"
            role="dialog"
            className="fixed inset-0 z-50 flex items-center justify-center px-4"
          >
            <div className="fixed inset-0 bg-black/40" onClick={closeModal} />

            <div className="relative bg-white dark:bg-gray-800 rounded-lg shadow-lg max-w-md w-full p-6 mx-auto">
              <button
                onClick={closeModal}
                aria-label="Close"
                className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
              >
                ×
              </button>

              <h3 className="text-lg font-semibold">Message sent</h3>
              <p className="mt-2 text-sm text-gray-600 dark:text-gray-300">
                Thank you for your message — we'll get back to you within 1–2
                business days.
              </p>

              <div className="mt-4 text-right">
                <button
                  onClick={closeModal}
                  className="inline-flex items-center px-4 py-2 bg-indigo-600 text-white rounded"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <section className="py-20 bg-indigo-700 text-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">
              Ready to get started?
            </h2>
            <p className="mt-4 max-w-2xl mx-auto text-indigo-100">
              Book a discovery call and we’ll prepare a short plan that outlines
              next steps and quick wins.
            </p>
            <div className="mt-8">
              <a
                href="#form"
                className="inline-block px-6 py-3 bg-white text-indigo-700 rounded-md font-semibold"
              >
                Book discovery
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
};

export default ContactUs;
