import React from "react";
import Link from "next/link";
import Image from "next/image";
import { useTranslation } from "react-i18next";

type Props = {};

const SiteFooter = (props: Props) => {
  const { t } = useTranslation();
  const services = [
    { href: "/strategy-&-planning", label: t("header.strategy") },
    {
      href: "/digital-transformation",
      label: t("header.digitalTransformation"),
    },
    { href: "/operations-optimization", label: t("header.operations") },
    { href: "/finance-advisory", label: t("header.finance") },
    {
      href: "/hr-&-organizational-design",
      label: t("header.hr"),
    },
    {
      href: "/technology-&-it-consulting",
      label: t("header.technology"),
    },
  ];

  const quickLinks = [
    { href: "/", label: t("footer.home") },
    { href: "/about-us", label: t("footer.about") },
    { href: "/services", label: t("footer.services") },
    { href: "/blog", label: t("footer.blog") },
    { href: "/contact-us", label: t("footer.contact") },
  ];

  return (
    <footer className="bg-white/90 max-w-screen dark:bg-gray-900/90 backdrop-blur-sm border-t border-gray-200 dark:border-gray-800 transition-colors duration-200 caret-transparent">
      <div className="  mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Logo + description */}
          <div className="   ">
            <div className=" ">
              <Image
                src="https://i.postimg.cc/DwdH9gv8/logo-stackly.png"
                alt={t("footer.companyTitle")}
                width={100}
                height={100}
                className="rounded-md"
              />
            </div>
            <div>
              <div className="text-lg font-semibold text-gray-900 dark:text-white">
                {t("footer.companyTitle")}
              </div>
              <div className="text-sm text-gray-600 dark:text-gray-300">
                {t("footer.companyTagline")}
              </div>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              {t("footer.quickLinksTitle")}
            </h4>
            <div className="h-0.5 w-10 mb-3 rounded bg-linear-to-r from-indigo-500 to-pink-500" />
            <ul className="space-y-2">
              {quickLinks.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white text-sm transition-colors duration-150"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services (same as header) */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              {t("footer.servicesTitle")}
            </h4>
            <div className="h-0.5 w-10 mb-3 rounded bg-linear-to-r from-indigo-500 to-pink-500" />
            <ul className="space-y-2">
              {services.map((s) => (
                <li key={s.href}>
                  <Link
                    href={s.href}
                    className="text-gray-700 dark:text-gray-200 hover:text-gray-900 dark:hover:text-white text-sm transition-colors duration-150"
                  >
                    {s.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-sm font-semibold text-gray-900 dark:text-white mb-4">
              {t("footer.contactTitle")}
            </h4>
            <div className="h-0.5 w-10 mb-3 rounded bg-linear-to-r from-indigo-500 to-pink-500" />
            <address className="not-italic text-sm text-gray-700 dark:text-gray-200 space-y-2">
              <div>123 Consulting Ave, Suite 400</div>
              <div>New York, NY 10001</div>
              <div>
                Phone:{" "}
                <Link
                  href="tel:+1234567890"
                  className="hover:underline text-gray-700 dark:text-gray-200"
                >
                  +1 (234) 567-890
                </Link>
              </div>
              <div>
                Email:{" "}
                <Link
                  href="mailto:info@consulting.example"
                  className="hover:underline text-gray-700 dark:text-gray-200"
                >
                  info@consulting.example
                </Link>
              </div>
            </address>
          </div>
        </div>

        <div className="mt-8 border-t border-gray-200 dark:border-gray-800 pt-6 text-center text-sm text-gray-500 dark:text-gray-400">
          {t("footer.copyright", { year: new Date().getFullYear() })}
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;
