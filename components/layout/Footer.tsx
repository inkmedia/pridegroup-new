"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { type ReactNode, useMemo, useState } from "react";

const quickLinks = [
  { label: "About Pride Group", href: "#" },
  { label: "Cities", href: "#" },
  { label: "Media & Awards", href: "#" },
  { label: "Careers", href: "#" },
];

const fieldClass =
  "mt-2 w-full border-b border-b-2 border-[#1f3d72] bg-transparent pb-2 text-s outline-none placeholder:text-[#6b7280]";

const cityProjects: Record<string, string[]> = {
  Pune: ["Project 1", "Project 2", "Project 3"],
  Mumbai: ["Project 1", "Project 2", "Project 3"],
  Bangalore: ["Project 1", "Project 2", "Project 3"],
};

/* ---------------- MAIN ---------------- */

export default function Footer() {
  const pathname = usePathname();
  const [city, setCity] = useState("");
  const hideEnquirySection = pathname?.startsWith("/projects/") ?? false;

  const projects = useMemo(() => {
    return city ? (cityProjects[city] ?? []) : [];
  }, [city]);

  return (
    <footer className="w-full">
      {/* CONTACT SECTION */}
      {!hideEnquirySection && (
        <section className="bg-[#f3f3f3]">
          <div className="mx-auto px-5 py-10 sm:px-8 sm:py-12 md:px-10 lg:px-14 lg:py-[60px]">
            <h2 className="text-[32px] leading-[1.15] text-[#364166] sm:text-[30px]">
              Enquire Now
            </h2>

            <div className="mt-8 grid grid-cols-1 gap-10 lg:mt-10 lg:grid-cols-[250px_1px_minmax(0,1fr)] lg:gap-[56px]">
              {/* LEFT */}
              <div className="space-y-7 text-sm sm:space-y-8">
                <div>
                  <p className="text-[16px] font-semibold uppercase text-black tracking-[0.04em]">
                    Call
                  </p>
                  <p className="mt-2 text-[#222]">080 2222 2424</p>
                </div>

                <div>
                  <p className="text-[16px] font-semibold uppercase text-black tracking-[0.04em]">
                    Email
                  </p>
                  <p className="mt-2 break-all text-[#222]">
                    digital@prideworldcity.com
                  </p>
                </div>

                <div>
                  <p className="text-[16px] font-semibold uppercase text-black tracking-[0.04em]">
                    Head Office
                  </p>
                  <p className="mt-2 leading-[1.7] text-[#222]">
                    Pride House, S. No. 108,
                    <br />
                    Pride Purple Properties,
                    <br />
                    Gokhalenagar, Pune 411016
                  </p>
                </div>
              </div>

              {/* DIVIDER */}
              <div className="hidden bg-[#b5b5b5] lg:block" />

              {/* FORM */}
              <div>
                <p className="text-[16px] font-semibold uppercase tracking-[0.04em] text-black">
                  Let’s Start the Conversation
                </p>

                <form className="mt-6 grid grid-cols-1 gap-x-8 gap-y-6 sm:mt-8 lg:grid-cols-2 lg:gap-x-10">
                  <Input label="Name" type="text" />
                  <Input label="Number" type="tel" />
                  <Input label="Email" type="email" />

                  <div>
                    <label className="text-s text-[#1f1f1f]">City</label>
                    <select
                      className={`${fieldClass} pb-3`}
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                    >
                      <option value="">--select--</option>
                      <option value="Pune">Pune</option>
                      <option value="Mumbai">Mumbai</option>
                      <option value="Bangalore">Bangalore</option>
                    </select>
                  </div>

                  {city && (
                    <div>
                      <label className="text-s text-[#1f1f1f]">Project</label>
                      <select className={`${fieldClass} pb-3`} defaultValue="">
                        <option value="">--select project--</option>
                        {projects.map((project) => (
                          <option key={`${city}-${project}`} value={project}>
                            {project}
                          </option>
                        ))}
                      </select>
                    </div>
                  )}

                  <div className={!city ? "lg:col-span-2" : ""}>
                    <label className="text-s text-[#1f1f1f]">Message</label>
                    <textarea rows={1} className={fieldClass} />
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* BLUE FOOTER */}
      <section className="bg-[#173566] text-white">
        <div className="mx-auto px-5 py-10 sm:px-8 sm:py-12 md:px-10 lg:px-14 lg:py-[50px]">
          <div className="grid grid-cols-1 gap-10 md:grid-cols-2 lg:grid-cols-[1.2fr_0.8fr_1fr]">
            {/* LEFT */}
            <div>
              <div className="flex items-center gap-4">
                <Image
                  src="/images/logo.png"
                  alt="logo"
                  width={90}
                  height={90}
                  className="h-auto w-[78px] sm:w-[90px]"
                />
                <Image
                  src="/images/gptw-logo.png"
                  alt="badge"
                  width={60}
                  height={90}
                  className="h-auto w-[50px] sm:w-[60px]"
                />
              </div>

              <div className="mt-6 flex flex-wrap gap-x-5 gap-y-2 text-[12px] uppercase tracking-[0.04em] text-white/90">
                <p>linkedin</p>
                <p>instagram</p>
                <p>facebook</p>
              </div>
            </div>

            {/* LINKS */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.04em]">
                Quick Links
              </p>

              <div className="mt-4 space-y-3 text-sm">
                {quickLinks.map((item) => (
                  <Link
                    key={item.label}
                    href={item.href}
                    className="block transition hover:opacity-70"
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* CONTACT */}
            <div>
              <p className="text-[11px] font-semibold uppercase tracking-[0.04em]">
                Contact
              </p>

              <div className="mt-4 space-y-4 text-sm">
                <Contact icon="call">+91 8055546000</Contact>
                <Contact icon="mail">digital@prideworldcity.com</Contact>
                <Contact icon="location_on">
                  Pride World City, Pune - 411081
                </Contact>
              </div>
            </div>
          </div>

          {/* BOTTOM */}
          <div className="mt-8 flex flex-col gap-2 border-t border-white/30 pt-4 text-[11px] text-white/80 sm:text-xs lg:flex-row lg:items-center lg:justify-between">
            <p>© Pride Group 2026 | Privacy Policy | Disclaimer</p>
            <p>Designed & Developed by Ink Media</p>
          </div>
        </div>
      </section>
    </footer>
  );
}

/* ---------------- COMPONENTS ---------------- */

function Input({ label, type = "text" }: { label: string; type?: string }) {
  return (
    <div>
      <label className="text-s text-[#1f1f1f]">{label}</label>
      <input type={type} className={fieldClass} />
    </div>
  );
}

function Contact({ icon, children }: { icon: string; children: ReactNode }) {
  return (
    <div className="flex items-start gap-3">
      <span className="material-symbols-outlined text-[18px]">{icon}</span>
      <p className="leading-[1.6]">{children}</p>
    </div>
  );
}
