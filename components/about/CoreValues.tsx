"use client";

import { useEffect, useRef, useState } from "react";

const values = [
  {
    icon: "workspace_premium",
    title: "Design Excellence",
    text: "Each project is meticulously planned, from internal layouts to master planning. Continuous innovation drives each new project.",
  },
  {
    icon: "handshake",
    title: "Trust and Transparency",
    text: "Early delivery ensures projects are completed ahead of schedule. Strong quality standards build trust.",
  },
  {
    icon: "groups",
    title: "Customer-Centric Approach",
    text: "We place customer well-being at the forefront, crafting spaces that improve lives through practical design.",
  },
  {
    icon: "eco",
    title: "Sustainability",
    text: "We focus on sustainable development practices that balance growth with environmental responsibility.",
  },
];

export default function CoreValues() {
  const [visible, setVisible] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-6">
        <div className="grid grid-cols-1 gap-5 sm:gap-6 lg:grid-cols-[320px_1fr] lg:gap-8 xl:grid-cols-[380px_1fr]">
          {/* LEFT PANEL */}
          <div className="flex flex-col justify-center bg-[#1f3f6b] px-6 py-10 text-white sm:px-8 sm:py-12 md:px-10 lg:min-h-[520px] lg:px-10 xl:h-[600px]">
            <h2 className="text-[28px] leading-[1.15] sm:text-[32px] lg:text-[34px]">
              Core <br /> Values
            </h2>

            <p className="mt-5 text-[14px] leading-[1.8] text-white/90 sm:text-[15px]">
              The principles that guide how we think, build, and grow.
            </p>

            <p className="mt-4 text-[14px] leading-[1.8] text-white/90 sm:text-[15px]">
              Our Core Values inform every decision — from planning to delivery.
            </p>
          </div>

          {/* RIGHT GRID */}
          <div
            ref={ref}
            className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 md:gap-6"
          >
            {values.map((item, index) => (
              <div
                key={item.title}
                className={`group bg-[#f7f7f7] p-6 text-center transition-all duration-700 ease-out hover:-translate-y-2 sm:p-7 lg:p-8 ${
                  visible
                    ? "translate-y-0 opacity-100"
                    : "translate-y-[40px] opacity-0"
                }`}
                style={{
                  transitionDelay: `${index * 120}ms`,
                }}
              >
                <div className="mb-5 flex justify-center text-[#1f3f6b] sm:mb-6">
                  <span className="material-symbols-outlined text-[56px]! sm:text-[64px]! lg:text-[80px]!">
                    {item.icon}
                  </span>
                </div>

                <h3 className="mb-3 text-[20px] leading-[1.25] text-[#2b2b2b] sm:text-[21px] lg:mb-4 lg:text-[22px]">
                  {item.title}
                </h3>

                <p className="text-[14px] leading-[1.7] text-[#555] sm:text-[15px] sm:leading-[1.75]">
                  {item.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
