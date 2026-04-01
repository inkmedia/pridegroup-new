"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";

const pillars = [
  {
    title: "Purpose-Driven Work",
    text: "Every role contributes to shaping environments that improve how people live, work and connect.",
    icon: "fa-solid fa-building",
  },
  {
    title: "Merit & Growth",
    text: "We value capability, ownership and continuous learning, with opportunities built around performance and potential.",
    icon: "fa-solid fa-chart-line",
  },
  {
    title: "Collaboration & Trust",
    text: "Strong teamwork, mutual respect and transparent communication are central to how we move projects forward.",
    icon: "fa-solid fa-people-group",
  },
  {
    title: "Positive Intent",
    text: "We approach challenges with resilience, responsibility and a mindset focused on solutions and progress.",
    icon: "fa-solid fa-compass",
  },
];

export default function LifeAtPrideGroup() {
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
      { threshold: 0.18 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <section className="bg-white px-5 py-8 sm:px-8 sm:py-10 md:py-12 lg:px-10 lg:py-14">
      <div ref={ref} className="mx-auto max-w-[1440px]">
        <div className="grid items-stretch gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:gap-6">
          {/* LEFT */}
          <div
            className={`h-full transition-all duration-1000 ease-[cubic-bezier(.22,1,.36,1)] ${
              visible
                ? "translate-y-0 scale-100 opacity-100"
                : "translate-y-10 scale-[0.97] opacity-0"
            }`}
          >
            <div className="h-full overflow-hidden rounded-[10px] border border-black/8 bg-white shadow-[0_18px_50px_rgba(0,0,0,0.06)]">
              <div className="relative h-[280px] sm:h-[360px] lg:h-full lg:min-h-[520px] xl:min-h-[560px]">
                <Image
                  src="/images/Function-Gimmicks.jpg"
                  alt="Life at Pride Group"
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />

                <div className="absolute bottom-4 left-4 right-4 rounded-[16px] border border-white/15 bg-white/10 p-4 text-white backdrop-blur-md sm:bottom-5 sm:left-5 sm:right-5 sm:p-5">
                  <p className="text-[10px] font-[700] uppercase tracking-[0.18em] text-white/70 sm:text-[11px]">
                    Careers at Pride Group
                  </p>

                  <h3 className="mt-2 text-[22px] font-[500] leading-[1.15] tracking-[-0.02em] sm:text-[26px]">
                    Grow with teams that value ownership, excellence and shared
                    progress.
                  </h3>

                  <p className="mt-2 max-w-[520px] text-[13px] leading-[1.7] text-white/80 sm:text-[14px]">
                    We are building more than projects. We are building a
                    workplace where people can learn, contribute and create
                    impact with confidence.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div
            className={`h-full transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${
              visible ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
            }`}
          >
            <div className="flex h-full flex-col rounded-[10px] border border-black/8 bg-[#f8f8f8] p-4 sm:p-5 lg:p-6">
              <p className="mb-2 text-[10px] font-[700] uppercase tracking-[0.22em] text-[#1f3f6b]/65 sm:text-[11px]">
                Life at Pride Group
              </p>

              <h2 className="max-w-[700px] text-[22px] font-[500] leading-[1.25] tracking-[-0.03em] text-[#1f3f6b] sm:text-[23px] lg:text-[24px]">
                A culture built on trust, growth and the drive to go beyond
                commitments.
              </h2>

              <div className="mt-4 h-[1px] w-14 bg-[#1f3f6b]/20" />

              <p className="mt-4 max-w-[680px] text-[14px] leading-[1.75] text-black/65 sm:text-[15px]">
                At Pride Group, work is shaped by accountability, collaboration
                and long-term thinking. We believe people do their best when
                they feel respected, trusted and supported in taking ownership.
              </p>

              <div className="mt-5 grid gap-3 sm:grid-cols-2">
                {pillars.map((item, index) => (
                  <div
                    key={item.title}
                    className={`rounded-[14px] border border-black/8 bg-white p-4 transition-all duration-700 ease-[cubic-bezier(.22,1,.36,1)] ${
                      visible
                        ? "translate-y-0 opacity-100"
                        : "translate-y-10 opacity-0"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                  >
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#1f3f6b] text-white">
                      <i className={`${item.icon} text-[14px]`} />
                    </div>

                    <h3 className="mt-3 text-[18px] font-[500] leading-[1.2] text-[#1f3f6b]">
                      {item.title}
                    </h3>

                    <p className="mt-2 text-[13px] leading-[1.7] text-black/62 sm:text-[14px]">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
