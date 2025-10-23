import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./theme/ModeToggle";
import React from "react";
import i18n from "../i18n";
import { useTranslation } from "react-i18next";
import router from "next/router";

const SiteHeadder = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [lang, setLang] = useState("");
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const [currentUser, setCurrentUser] =
    useState({
      firstName: "",
      lastName: "",
      email: "",
      loginTime: "",
      logoutTime: "",
      registerTime: "",
      role: "",
    }) || null;

  const { t } = useTranslation();

  React.useEffect(() => {
    const user = JSON.parse(localStorage.getItem("Current_User") || "null");
    setCurrentUser(user);
  }, []);

  function handleLogout(): void {
    // Clear user session data (e.g., tokens, user info)
    if (typeof window !== "undefined") {
      const users = JSON.parse(localStorage.getItem("All_Users") || "[]");
      const userLogin = JSON.parse(
        localStorage.getItem("Current_User") || "null",
      );
      const user = users.find((u: any) => u.email === userLogin?.email);
      if (user) {
        user.logoutTime = new Date().toISOString();
        localStorage.setItem("All_Users", JSON.stringify(users));
      }
      localStorage.removeItem("Current_User");
      window.location.href = "/auth";
    }
  }

  const toggleDropdown = (key: string) => {
    setOpenDropdown((prev) => (prev === key ? null : key));
  };

  const rootRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      const target = e.target as Node | null;
      if (rootRef.current && target && !rootRef.current.contains(target)) {
        setOpenDropdown(null);
        setMobileOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const homeItems = [
    { href: "/home1", label: t("header.home1") },
    { href: "/home2", label: t("header.home2") },
  ];

  const services = [
    { href: "/services", label: t("header.allServices") },
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

  const languages = [
    { code: "en", label: t("header.english") },
    { code: "ar", label: t("header.arabic") },
    { code: "he", label: t("header.hebrew") },
  ];

  const profileActions = [
    { href: "/admin-dashboard", label: t("header.admindashboard") },
    { action: "logout", label: t("header.logout") },
  ];

  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const savedLang = localStorage.getItem("selectedLanguage");
      setLang(savedLang || "");

      if (savedLang == "en") {
        document.documentElement.dir = "ltr";
      } else {
        document.documentElement.dir = "rtl";
      }
    }
  }, []);
  console.log("Selected Language:", i18n.language);
  // Restore language from localStorage on mount and on route change
  React.useEffect(() => {
    if (typeof window !== "undefined") {
      const setLangFromStorage = () => {
        if (lang.trim() !== "") {
          if (lang === "en" && i18n.language !== "en")
            i18n.changeLanguage("en");
          else if (lang === "ar" && i18n.language !== "ar")
            i18n.changeLanguage("ar");
          else if (lang === "he" && i18n.language !== "he")
            i18n.changeLanguage("he");
        }
      };
      setLangFromStorage();

      // Listen for route changes to re-apply language
      const handleRouteChange = () => {
        setLangFromStorage();
      };
      router.events.on("routeChangeComplete", handleRouteChange);
      return () => {
        router.events.off("routeChangeComplete", handleRouteChange);
      };
    }
  }, [router.events, i18n.language]);
  const handleLanguageChange = (langLabel: string) => {
    // setSelectedLanguage(langLabel);
    const langObj = languages.find((l) => l.code === langLabel);
    if (langObj) {
      localStorage.setItem("selectedLanguage", langObj.code);
      setLang(langObj.code);
      if (langObj.code === "en") {
        document.documentElement.dir = "ltr";
      } else {
        document.documentElement.dir = "rtl";
      }
      i18n.changeLanguage(langObj.code);
    }
    setOpenDropdown(null); // Close language dropdown after selection
  };

  return (
    <header
      ref={rootRef}
      className="bg-white dark:bg-gray-900  text-nowrap sticky top-0 shadow-md caret-transparent transition-colors duration-200 z-100"
    >
      <div className=" max-w-screen  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex   h-16">
          <div className="flex w-full justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Link href="/home1">
                <Image
                  src="https://i.postimg.cc/DwdH9gv8/logo-stackly.png"
                  alt="Site Logo"
                  width={100}
                  height={100}
                  className="rounded-md"
                />
              </Link>
            </div>

            {/* Desktop nav */}
            <div className="hidden sm:ml-8 sm:flex  sm:space-x-1 sm:items-center">
              {/* Home dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("home")}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100 flex items-center relative group"
                  aria-expanded={openDropdown === "home"}
                  aria-haspopup="true"
                >
                  {i18n.t("header.home")}
                  <svg
                    className="ml-1 h-4 w-4 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.1 1.02l-4.25 4.657a.75.75 0 01-1.08 0L5.21 8.29a.75.75 0 01.02-1.08z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {openDropdown === "home" && (
                  <div className="absolute z-20 mt-2 w-40 bg-white dark:bg-gray-800 dark:border-gray-700 border rounded-md shadow-lg py-1 transition-transform duration-150">
                    {homeItems.map((it) => (
                      <Link
                        key={it.href}
                        href={it.href}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 dark:hover:bg-gray-700 hover:bg-gray-50"
                      >
                        {it.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/about-us"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
              >
                {i18n.t("header.about")}
              </Link>

              {/* Services dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("services")}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100 flex items-center relative group"
                  aria-expanded={openDropdown === "services"}
                  aria-haspopup="true"
                >
                  {i18n.t("header.services")}
                  <svg
                    className="ml-1 h-4 w-4 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.1 1.02l-4.25 4.657a.75.75 0 01-1.08 0L5.21 8.29a.75.75 0 01.02-1.08z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {openDropdown === "services" && (
                  <div className="absolute z-20 mt-2 w-56 bg-white dark:bg-gray-800 dark:border-gray-700 border rounded-md shadow-lg py-1 grid grid-cols-1 transition-transform duration-150">
                    {services.map((s) => (
                      <Link
                        key={s.href}
                        href={s.href}
                        className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 dark:hover:bg-gray-700 hover:bg-gray-50"
                      >
                        {s.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              <Link
                href="/blog"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
              >
                {i18n.t("header.blog")}
              </Link>
              <Link
                href="/contact-us"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
              >
                {i18n.t("header.contact")}
              </Link>
              {/* Mode toggle */}
              <div className="ml-3">
                <ModeToggle />
              </div>
              {/* Languages */}
              <div className="hidden sm:block relative mr-4">
                <button
                  onClick={() => toggleDropdown("lang")}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100 flex items-center relative group"
                  aria-expanded={openDropdown === "lang"}
                  aria-haspopup="true"
                >
                  {i18n.t("header.language")}
                  <svg
                    className="ml-1 h-4 w-4 text-gray-500"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.1 1.02l-4.25 4.657a.75.75 0 01-1.08 0L5.21 8.29a.75.75 0 01.02-1.08z"
                      clipRule="evenodd"
                    />
                  </svg>
                </button>

                {openDropdown === "lang" && (
                  <div className="absolute right-0 z-20 mt-2 w-32 bg-white dark:bg-gray-800 dark:border-gray-700 border rounded-md shadow-lg py-1 transition-transform duration-150 flex flex-col">
                    {languages.map((l) => (
                      <button
                        key={l.code}
                        onClick={() => handleLanguageChange(l.code)}
                        className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 dark:hover:bg-gray-700 hover:bg-gray-50"
                      >
                        {l.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>

              {/* Profile */}
              <div className="hidden sm:block relative">
                <button
                  onClick={() => toggleDropdown("profile")}
                  className="flex items-center   rounded-full text-sm font-medium text-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
                  aria-expanded={openDropdown === "profile"}
                  aria-haspopup="true"
                >
                  {/* Avatar circle with initials */}
                  <span
                    aria-hidden
                    className="flex h-10 w-20 items-center px-4 justify-between rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 text-sm font-semibold"
                  >
                    {currentUser
                      ? currentUser.role != "admin"
                        ? `${currentUser.firstName.charAt(0)}${
                            currentUser.lastName?.charAt(0) || ""
                          }`.toUpperCase()
                        : "AD"
                      : "AD"}
                    {/* caret */}
                    <svg
                      className="  h-4 w-4 text-gray-500"
                      viewBox="0 0 20 20"
                      fill="currentColor"
                      aria-hidden
                    >
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.1 1.02l-4.25 4.657a.75.75 0 01-1.08 0L5.21 8.29a.75.75 0 01.02-1.08z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </span>
                </button>

                {openDropdown === "profile" && (
                  <div
                    className={`absolute ${
                      i18n.language == "en" ? "right-0" : "left-0"
                    } z-20 mt-2 w-40 bg-white dark:bg-gray-800 dark:border-gray-700 border rounded-md shadow-lg py-1 transition-transform duration-150`}
                  >
                    {profileActions.map((p) =>
                      p.href ? (
                        <>
                          {currentUser &&
                            currentUser.role === "admin" &&
                            window.location.pathname != "/admin-dashboard" && (
                              <Link
                                key={String(p.href)}
                                href={p.href}
                                className="block w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 dark:hover:bg-gray-700 hover:bg-gray-50"
                              >
                                {p.label}
                              </Link>
                            )}
                        </>
                      ) : (
                        <button
                          key={String(p.label)}
                          onClick={() => handleLogout()}
                          className="block px-4 w-full py-2 text-sm text-gray-700 dark:text-gray-200 dark:hover:bg-gray-700 hover:bg-gray-50"
                        >
                          {p.label}
                        </button>
                      ),
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          <div className="flex items-center">
            {/* Mobile menu button */}
            <div className="sm:hidden flex items-center">
              <button
                onClick={() => setMobileOpen((s) => !s)}
                className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:bg-gray-100 focus:outline-none bg-white/60 dark:bg-gray-800/60 shadow-sm"
                aria-expanded={mobileOpen}
              >
                <span className="sr-only">Open main menu</span>
                {mobileOpen ? (
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                ) : (
                  <svg
                    className="h-6 w-6"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile menu panel */}
      {mobileOpen && (
        <div className="sm:hidden border-t bg-white/90 dark:bg-gray-900/90 backdrop-blur p-3 rounded-b-lg">
          <div className="px-2 pt-2 pb-3 space-y-2">
            <div>
              <button
                onClick={() => toggleDropdown("home-mobile")}
                className="w-full flex justify-between items-center px-3 py-2 text-left text-gray-700 rounded-md hover:bg-gray-50"
              >
                <span>{i18n.t("header.home")}</span>
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.1 1.02l-4.25 4.657a.75.75 0 01-1.08 0L5.21 8.29a.75.75 0 01.02-1.08z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {openDropdown === "home-mobile" && (
                <div className="mt-1 pl-4">
                  {homeItems.map((it) => (
                    <Link
                      key={it.href}
                      href={it.href}
                      className="block px-2 py-1 text-gray-700 dark:text-gray-200"
                    >
                      {it.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/about-us"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
            >
              {i18n.t("header.about")}
            </Link>

            <div>
              <button
                onClick={() => toggleDropdown("services-mobile")}
                className="w-full flex justify-between items-center px-3 py-2 text-left text-gray-700 rounded-md hover:bg-gray-50"
              >
                <span>{i18n.t("header.services")}</span>
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.1 1.02l-4.25 4.657a.75.75 0 01-1.08 0L5.21 8.29a.75.75 0 01.02-1.08z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {openDropdown === "services-mobile" && (
                <div className="mt-1 pl-4 grid grid-cols-1 gap-1">
                  {services.map((s) => (
                    <Link
                      key={s.href}
                      href={s.href}
                      className="block px-2 py-1 text-gray-700 dark:text-gray-200"
                    >
                      {s.label}
                    </Link>
                  ))}
                </div>
              )}
            </div>

            <Link
              href="/blog"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
            >
              {i18n.t("header.blog")}
            </Link>
            <Link
              href="/contact-us"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
            >
              {i18n.t("header.contact")}
            </Link>

            <div>
              <button
                onClick={() => toggleDropdown("lang-mobile")}
                className="w-full flex justify-between items-center px-3 py-2 text-left text-gray-700 rounded-md hover:bg-gray-50"
              >
                <span>{i18n.t("header.language")}</span>
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.1 1.02l-4.25 4.657a.75.75 0 01-1.08 0L5.21 8.29a.75.75 0 01.02-1.08z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {openDropdown === "lang-mobile" && (
                <div className="mt-1 pl-4">
                  {languages.map((l) => (
                    <button
                      key={l.code}
                      onClick={() => handleLanguageChange(l.code)}
                      className="block px-2 py-1 text-gray-700 dark:text-gray-200"
                    >
                      {l.label}
                    </button>
                  ))}
                </div>
              )}
            </div>

            <div>
              <button
                onClick={() => toggleDropdown("profile-mobile")}
                className="w-full flex justify-between items-center px-3 py-2 text-left text-gray-700 rounded-md hover:bg-gray-50"
              >
                <div className="flex items-center gap-3">
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100 text-sm font-semibold">
                    {currentUser && currentUser.firstName
                      ? `${currentUser.firstName.charAt(0)}${
                          currentUser.lastName?.charAt(0) || ""
                        }`.toUpperCase()
                      : "AD"}
                  </span>
                </div>
                <svg
                  className="h-4 w-4"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M5.23 7.21a.75.75 0 011.06.02L10 11.293l3.71-4.06a.75.75 0 111.1 1.02l-4.25 4.657a.75.75 0 01-1.08 0L5.21 8.29a.75.75 0 01.02-1.08z"
                    clipRule="evenodd"
                  />
                </svg>
              </button>
              {openDropdown === "profile-mobile" && (
                <div className="mt-1 pl-4">
                  {profileActions.map((p) =>
                    p.href ? (
                      <>
                        {currentUser &&
                          currentUser.role === "admin" &&
                          window.location.pathname != "/admin-dashboard" && (
                            <Link
                              key={String(p.href)}
                              href={p.href}
                              className="block w-full px-4 py-2 text-sm text-gray-700 dark:text-gray-200 dark:hover:bg-gray-700 hover:bg-gray-50"
                            >
                              {p.label}
                            </Link>
                          )}
                      </>
                    ) : (
                      <button
                        key={String(p.label)}
                        onClick={() => handleLogout()}
                        className="block px-2 py-1 text-gray-700 dark:text-gray-200"
                      >
                        {p.label}
                      </button>
                    ),
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default SiteHeadder;
