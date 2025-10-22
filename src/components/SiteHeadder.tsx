import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ModeToggle } from "./theme/ModeToggle";

const SiteHeadder = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

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
    { href: "/home1", label: "Home 1" },
    { href: "/home2", label: "Home 2" },
  ];

  const services = [
    { href: "/services", label: "All Services" },
    { href: "/strategy-&-planning", label: "Strategy & Planning" },
    { href: "/digital-transformation", label: "Digital Transformation" },
    { href: "/operations-optimization", label: "Operations Optimization" },
    { href: "/finance-advisory", label: "Financial Advisory" },
    {
      href: "/hr-&-organizational-design",
      label: "HR & Organizational Design",
    },
    {
      href: "/technology-&-it-consulting",
      label: "Technology & IT Consulting",
    },
  ];

  const languages = [
    { code: "en", label: "English" },
    { code: "ar", label: "Arabic" },
    { code: "he", label: "Herbew" },
  ];

  const profileActions = [
    { href: "/profile", label: "Profile" },
    { action: "logout", label: "Logout" },
  ];

  return (
    <header
      ref={rootRef}
      className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm text-nowrap sticky top-0 shadow-md caret-transparent transition-colors duration-200 z-100"
    >
      <div className=" max-w-screen  mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex   h-16">
          <div className="flex w-full justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <Link href="/">
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
                  Home
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
                href="/about"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
              >
                About Us
              </Link>

              {/* Services dropdown */}
              <div className="relative">
                <button
                  onClick={() => toggleDropdown("services")}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100 flex items-center relative group"
                  aria-expanded={openDropdown === "services"}
                  aria-haspopup="true"
                >
                  Services
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
                Blog
              </Link>
              <Link
                href="/contact"
                className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
              >
                Contact Us
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
                  Language
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
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-200 dark:hover:bg-gray-800 hover:bg-gray-100"
                  aria-expanded={openDropdown === "profile"}
                  aria-haspopup="true"
                >
                  Open user menu
                </button>

                {openDropdown === "profile" && (
                  <div className="absolute right-0 z-20 mt-2 w-40 bg-white dark:bg-gray-800 dark:border-gray-700 border rounded-md shadow-lg py-1 transition-transform duration-150">
                    {profileActions.map((p) =>
                      p.href ? (
                        <Link
                          key={String(p.href)}
                          href={p.href}
                          className="block px-4 py-2 text-sm text-gray-700 dark:text-gray-200 dark:hover:bg-gray-700 hover:bg-gray-50"
                        >
                          {p.label}
                        </Link>
                      ) : (
                        <button
                          key={String(p.label)}
                          className="w-full text-left px-4 py-2 text-sm text-gray-700 dark:text-gray-200 dark:hover:bg-gray-700 hover:bg-gray-50"
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
                <span>Home</span>
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
              href="/about"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
            >
              About Us
            </Link>

            <div>
              <button
                onClick={() => toggleDropdown("services-mobile")}
                className="w-full flex justify-between items-center px-3 py-2 text-left text-gray-700 rounded-md hover:bg-gray-50"
              >
                <span>Services</span>
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
              Blog
            </Link>
            <Link
              href="/contact"
              className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:bg-gray-50"
            >
              Contact Us
            </Link>

            <div>
              <button
                onClick={() => toggleDropdown("lang-mobile")}
                className="w-full flex justify-between items-center px-3 py-2 text-left text-gray-700 rounded-md hover:bg-gray-50"
              >
                <span>Language</span>
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
                <span>Profile</span>
              </button>
              {openDropdown === "profile-mobile" && (
                <div className="mt-1 pl-4">
                  {profileActions.map((p) =>
                    p.href ? (
                      <Link
                        key={String(p.href)}
                        href={p.href}
                        className="block px-2 py-1 text-gray-700 dark:text-gray-200"
                      >
                        {p.label}
                      </Link>
                    ) : (
                      <button
                        key={String(p.label)}
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
