"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import TransitionLink from "../common/TransitionLink";

/* ---------------- NAV ---------------- */

const navItems = [
  { label: "THE GROUP", href: "/about" },
  { label: "BUILDING WITH PRIDE", href: "/buildingwithpride" },
  { label: "Projects", href: "/projects" },
];

const menuItems = [
  {
    title: "Media Centre",
    desc: "Discover Pride news, press releases and visual stories.",
    href: "#",
  },
  {
    title: "Contact Us",
    desc: "Get in touch for inquiries, support or feedback.",
    href: "/contact",
  },
  {
    title: "Careers",
    desc: "Join our team and shape the future of real estate.",
    href: "/careers",
  },
  {
    title: "Awards & Recognition",
    desc: "Explore Awards, accolades and industry recognition received by Pride Group.",
    href: "/awards",
  },
  {
    title: "Partner With Us",
    desc: "Collaboration opportunities for businesses and builders.",
    href: "#",
  },
  {
    title: "Investors",
    desc: "Financial reports and corporate disclosures.",
    href: "#",
  },
];

/* ---------------- COMPONENT ---------------- */

export default function Header() {
  const pathname = usePathname();
  const isProjectPage = pathname?.startsWith("/projects/") ?? false;

  const [scrolled, setScrolled] = useState(false);
  const [showHeader, setShowHeader] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [selectedCity, setSelectedCity] = useState("");
  const [enquireOpen, setEnquireOpen] = useState(false);

  const lastScrollYRef = useRef(0);

  /* ---------- CLOSE MENU ON ROUTE CHANGE ---------- */
  useEffect(() => {
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    setEnquireOpen(false);
  }, [pathname]);

  /* ---------- SCROLL ---------- */
  useEffect(() => {
    const handleScroll = () => {
      const current = window.scrollY;
      const last = lastScrollYRef.current;

      if (Math.abs(current - last) < 10) return;

      setScrolled(current > 80);

      if (current < 50) setShowHeader(true);
      else if (current > last) setShowHeader(false);
      else setShowHeader(true);

      lastScrollYRef.current = current;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* ---------- AUTO HEADER THEME ---------- */
  useEffect(() => {
    const sections = document.querySelectorAll("[data-header]");

    if (!sections.length) {
      setDarkMode(false);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        let activeSection: Element | null = null;

        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            activeSection = entry.target;
          }
        });

        if (activeSection) {
          const mode = (activeSection as Element).getAttribute("data-header");
          setDarkMode(mode === "dark");
        } else {
          setDarkMode(false);
        }
      },
      {
        threshold: 0.6,
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, [pathname]);

  /* ---------- LOCK SCROLL ---------- */
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
  }, [menuOpen]);

  const textColor = darkMode && !scrolled ? "text-white" : "text-black";
  const lineColor = darkMode && !scrolled ? "bg-white" : "bg-black";

  return (
    <>
      {/* ================= HEADER ================= */}
      <header
        className={`fixed left-0 top-0 z-[999] w-full transition-all duration-300 ${
          showHeader ? "translate-y-0" : "-translate-y-full"
        } ${
          scrolled ? "bg-white/85 backdrop-blur-lg shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="mx-auto flex max-w-[2048px] items-center justify-between px-4 py-3 sm:px-6 sm:py-4 md:px-8 lg:px-10">
          {/* LOGO */}
          <TransitionLink href="/" className="shrink-0">
            <Image
              src="/images/logo.png"
              alt="Pride Logo"
              width={90}
              height={90}
              className="h-auto w-[62px] sm:w-[72px] lg:w-[80px]"
              priority
            />
          </TransitionLink>

          <div className="flex items-center gap-4 sm:gap-6 lg:gap-8">
            {/* DESKTOP NAV */}
            <nav className="hidden items-center gap-8 lg:flex xl:gap-12">
              {navItems.map((item) => (
                <TransitionLink
                  key={item.label}
                  href={item.href}
                  className={`text-[12px] font-[700] uppercase tracking-[0.08em] transition hover:opacity-70 xl:text-[13px] ${textColor}`}
                >
                  {item.label}
                </TransitionLink>
              ))}
            </nav>

            {/* HAMBURGER */}
            <button
              type="button"
              onClick={() => setMenuOpen(true)}
              className="flex cursor-pointer flex-col gap-[5px] p-1.5"
            >
              {[1, 2, 3].map((i) => (
                <span
                  key={i}
                  className={`block h-[2px] w-[28px] rounded-full sm:w-[34px] lg:w-[38px] ${lineColor}`}
                />
              ))}
            </button>
          </div>
        </div>
      </header>

      {/* ================= OVERLAY ================= */}
      <button
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 z-[999] cursor-pointer bg-black/40 backdrop-blur-sm transition-opacity duration-500 ${
          menuOpen ? "visible opacity-100" : "invisible opacity-0"
        }`}
      />

      {/* ================= DRAWER ================= */}
      <aside
        className={`fixed right-0 top-0 z-[1000] h-full w-full overflow-y-auto bg-black/90 text-white transition-transform duration-700 ease-[cubic-bezier(.22,1,.36,1)] sm:w-[88%] md:w-[72%] lg:w-[58%] xl:w-[50%] ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex min-h-full flex-col">
          {/* TOP */}
          <div className="flex items-center justify-between px-5 py-5 sm:px-8 sm:py-6 lg:px-10 lg:py-8">
            <TransitionLink href="/">
              <Image
                src="/images/logo.png"
                alt="Pride Logo"
                width={70}
                height={70}
                className="h-auto w-[58px] opacity-90 sm:w-[64px] lg:w-[70px]"
              />
            </TransitionLink>

            <div className="flex items-center gap-3 sm:gap-4">
              <div className="relative">
                <select
                  value={selectedCity}
                  onChange={(e) => setSelectedCity(e.target.value)}
                  className="cursor-pointer appearance-none rounded-full border border-white/50 bg-white/10 px-4 py-2 pr-9 text-[11px] font-[700] uppercase tracking-[0.08em] text-white outline-none transition sm:text-[12px]"
                >
                  <option value="" disabled hidden>
                    Select City
                  </option>
                  <option value="Pune" className="text-black">
                    Pune
                  </option>
                  <option value="Mumbai" className="text-black">
                    Mumbai
                  </option>
                  <option value="Bangalore" className="text-black">
                    Bangalore
                  </option>
                </select>

                <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-[10px] text-white">
                  ▼
                </span>
              </div>

              <button
                onClick={() => setMenuOpen(false)}
                className="cursor-pointer text-2xl text-white/70 hover:text-white"
              >
                ✕
              </button>
            </div>
          </div>

          {/* MOBILE NAV */}
          <div className="border-t border-white/10 px-5 py-5 sm:px-8 lg:hidden">
            <nav className="grid gap-4">
              {navItems.map((item) => (
                <TransitionLink
                  key={item.label}
                  href={item.href}
                  className="text-[13px] font-[700] uppercase tracking-[0.08em] text-white/90 hover:text-white"
                >
                  {item.label}
                </TransitionLink>
              ))}
            </nav>
          </div>

          {/* CONTENT */}
          <div className="flex-1 px-5 pb-8 pt-6 sm:px-8 sm:pb-10 sm:pt-8 lg:px-10 lg:pb-12 lg:pt-10">
            <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-x-16 gap-y-8 md:grid-cols-2 md:gap-y-12">
              {menuItems.map((item) => (
                <MenuItem key={item.title} {...item} />
              ))}
            </div>
          </div>

          {/* SOCIAL */}
          <div className="border-t border-white/10 px-5 py-5 sm:px-8 sm:py-6 lg:px-10">
            <div className="flex justify-between">
              <span className="text-[12px] uppercase text-white/70">
                Follow Us
              </span>

              <div className="flex gap-5 text-white/80">
                <a href="#">facebook</a>
                <a href="#">instagram</a>
                <a href="#">twitter</a>
                <a href="#">linkedin</a>
              </div>
            </div>
          </div>
        </div>
      </aside>

      {/* ================= ENQUIRE NOW STICKY BUTTON ================= */}
      {!isProjectPage && (
        <>
          <button
            type="button"
            onClick={() => setEnquireOpen(true)}
            className={`fixed cursor-pointer right-0 top-1/2 z-[998] -translate-y-1/2 rounded-l-xl bg-[#183566] px-5 py-3 text-[11px] font-[700] uppercase tracking-[0.12em] text-white shadow-lg transition-all duration-300 sm:text-[12px] [writing-mode:vertical-rl] ${
              enquireOpen
                ? "translate-x-full opacity-0"
                : "translate-x-0 opacity-100"
            }`}
          >
            Enquire Now
          </button>

          {/* ================= ENQUIRE OVERLAY ================= */}
          <button
            type="button"
            aria-label="Close enquiry form"
            onClick={() => setEnquireOpen(false)}
            className={`fixed inset-0 z-[1001] cursor-pointer bg-black/40 backdrop-blur-sm transition-opacity duration-300 ${
              enquireOpen ? "visible opacity-100" : "invisible opacity-0"
            }`}
          />

          {/* ================= ENQUIRE DRAWER ================= */}
          <aside
            className={`fixed right-0 top-0 z-[1002] h-full w-full max-w-[420px] overflow-y-auto bg-white text-black shadow-2xl transition-transform duration-500 ease-[cubic-bezier(.22,1,.36,1)] ${
              enquireOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex min-h-full flex-col">
              <div className="flex items-center justify-between border-b border-black/10 px-5 py-5 sm:px-6">
                <div>
                  <p className="text-[11px] font-[700] uppercase tracking-[0.12em] text-black/50">
                    Get in touch
                  </p>
                  <h2 className="mt-1 text-[24px] font-[500] sm:text-[28px]">
                    Enquire Now
                  </h2>
                </div>

                <button
                  type="button"
                  onClick={() => setEnquireOpen(false)}
                  className="cursor-pointer text-2xl text-black/60 transition hover:text-black"
                >
                  ✕
                </button>
              </div>

              <div className="flex-1 px-5 py-6 sm:px-6">
                <form
                  onSubmit={(e) => e.preventDefault()}
                  className="grid gap-4"
                >
                  <div>
                    <label className="mb-2 block text-[12px] font-[700] uppercase tracking-[0.08em] text-black/70">
                      Full Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Enter your name"
                      className="w-full rounded-xl border border-black/15 px-4 py-3 text-[14px] outline-none transition focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[12px] font-[700] uppercase tracking-[0.08em] text-black/70">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      placeholder="Enter your phone number"
                      className="w-full rounded-xl border border-black/15 px-4 py-3 text-[14px] outline-none transition focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[12px] font-[700] uppercase tracking-[0.08em] text-black/70">
                      Email Address
                    </label>
                    <input
                      type="email"
                      name="email"
                      placeholder="Enter your email"
                      className="w-full rounded-xl border border-black/15 px-4 py-3 text-[14px] outline-none transition focus:border-black"
                    />
                  </div>

                  <div>
                    <label className="mb-2 block text-[12px] font-[700] uppercase tracking-[0.08em] text-black/70">
                      City
                    </label>
                    <select
                      name="city"
                      className="w-full rounded-xl border border-black/15 px-4 py-3 text-[14px] outline-none transition focus:border-black"
                      defaultValue=""
                    >
                      <option value="" disabled>
                        Select City
                      </option>
                      <option value="Pune">Pune</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Bangalore">Bangalore</option>
                    </select>
                  </div>

                  <div>
                    <label className="mb-2 block text-[12px] font-[700] uppercase tracking-[0.08em] text-black/70">
                      Message
                    </label>
                    <textarea
                      name="message"
                      rows={5}
                      placeholder="Tell us about your requirement"
                      className="w-full rounded-xl border border-black/15 px-4 py-3 text-[14px] outline-none transition focus:border-black"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 rounded-full bg-[#183566] px-6 py-3 text-[12px] font-[700] uppercase tracking-[0.08em] text-white transition hover:opacity-90"
                  >
                    Submit Enquiry
                  </button>
                </form>
              </div>
            </div>
          </aside>
        </>
      )}
    </>
  );
}

/* ---------------- MENU ITEM ---------------- */

function MenuItem({ title, desc, href }: any) {
  return (
    <TransitionLink href={href} className="group block">
      <h3 className="text-[24px] sm:text-[28px]">{title}</h3>
      <p className="mt-3 text-white/60 transition group-hover:text-white/80">
        {desc}
      </p>
    </TransitionLink>
  );
}
