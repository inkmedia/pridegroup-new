"use client";

import Link from "next/link";
import { useEffect, useRef, useState } from "react";

/* ---------------- DATA ---------------- */

const ecosystem = [
  {
    title: "Company Vertical #1",
    desc: "Lorem ipsum dolor sit amet, elit, sed doeiusmod tempor incididunt ut labore etdolore magna aliqua.",
  },
  {
    title: "Company Vertical #2",
    desc: "Lorem ipsum dolor sit amet, elit, sed doeiusmod tempor incididunt ut labore etdolore magna aliqua.",
  },
  {
    title: "Company Vertical #3",
    desc: "Lorem ipsum dolor sit amet, elit, sed doeiusmod tempor incididunt ut labore etdolore magna aliqua.",
  },
  {
    title: "Company Vertical #4",
    desc: "Lorem ipsum dolor sit amet, elit, sed doeiusmod tempor incididunt ut labore etdolore magna aliqua.",
  },
];

/* ---------------- COMPONENT ---------------- */

export default function PrideEcosystem() {
  const ref = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          obs.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (ref.current) obs.observe(ref.current);

    return () => obs.disconnect();
  }, []);

  return (
    <section ref={ref} className="py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] sm:px-8 md:px-10 lg:px-6">
        <div className="grid grid-cols-1 overflow-hidden lg:grid-cols-[320px_1fr] xl:grid-cols-[380px_1fr]">
          {/* LEFT PANEL */}
          <div
            className={`flex flex-col justify-center bg-[#1f3f6b] px-6 py-10 text-white transition-all duration-700 sm:px-8 sm:py-12 md:px-10 lg:min-h-[520px] lg:px-10 xl:min-h-[700px] ${
              visible
                ? "translate-x-0 opacity-100"
                : "-translate-x-10 opacity-0"
            }`}
          >
            <h2 className="text-[28px] leading-[1.15] sm:text-[32px] lg:text-[34px]">
              The Pride
              <br />
              Ecosystem
            </h2>

            <p className="mt-5 text-[14px] leading-[1.8] text-white/90 sm:mt-6 sm:text-[15px] lg:text-[15px] xl:text-[16px]">
              Pride Group’s ecosystem extends beyond development itself. It
              includes capital support, facility management, commercial leasing,
              and technology systems that strengthen planning, execution, sales,
              and post-possession operations.
            </p>
          </div>

          {/* RIGHT GRID */}
          <div className="grid grid-cols-1 gap-4 bg-white p-5 sm:gap-5 sm:p-6 md:grid-cols-2 md:gap-6 md:p-8 lg:p-10 xl:p-16">
            {ecosystem.map((item, i) => (
              <div
                key={i}
                className={`group flex min-h-[220px] flex-col justify-between bg-[#e9ebf0] p-6 transition-all duration-500 hover:-translate-y-2 hover:shadow-xl sm:min-h-[240px] sm:p-7 lg:p-8 ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${i * 120}ms` }}
              >
                <div>
                  {/* ICON */}
                  <span className="material-symbols-outlined text-[34px]! text-[#1f3f6b] sm:text-[38px]! lg:text-[42px]!">
                    hub
                  </span>

                  {/* TITLE */}
                  <h3 className="mt-4 text-[20px] leading-[1.25] text-[#2e2e2e] sm:text-[21px] lg:text-[22px]">
                    {item.title}
                  </h3>

                  {/* TEXT */}
                  <p className="mt-3 text-[14px] leading-[1.7] text-[#4a4a4a] sm:text-[15px]">
                    {item.desc}
                  </p>
                </div>

                {/* LINK */}
                <div className="mt-6 text-left md:text-right">
                  <Link
                    href="#"
                    className="text-[14px] font-semibold text-[#1f3f6b] underline underline-offset-4 transition-opacity group-hover:opacity-80"
                  >
                    Visit Website
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
