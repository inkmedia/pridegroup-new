"use client";

import Image from "next/image";
import { useEffect, useRef, useState, type ReactNode } from "react";

/* ---------- TEXT REVEAL ---------- */
function TextReveal({ children }: { children: ReactNode }) {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.3 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="overflow-hidden">
      <div
        className={`transition-all duration-700 ease-out ${
          show ? "translate-y-0 opacity-100" : "translate-y-[40px] opacity-0"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

/* ---------- IMAGE REVEAL ---------- */
function ImageReveal() {
  const [show, setShow] = useState(false);
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShow(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="relative h-full w-full overflow-hidden">
      <div
        className={`absolute inset-0 z-10 bg-[#f5f5f5] transition-transform duration-[1200ms] ease-in-out ${
          show ? "translate-x-full" : "translate-x-0"
        }`}
      />

      <Image
        src="/images/md.png"
        alt="Managing Director"
        fill
        sizes="(max-width: 1024px) 100vw, 50vw"
        className={`object-cover transition-transform duration-[2000ms] ${
          show ? "scale-100" : "scale-110"
        }`}
      />
    </div>
  );
}

/* ---------- MAIN COMPONENT ---------- */

export default function ManagingDirector() {
  return (
    <section className="py-10 sm:py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 md:px-10 lg:px-6">
        <div className="grid grid-cols-1 overflow-hidden lg:grid-cols-2">
          {/* LEFT CONTENT */}
          <div className="flex flex-col justify-center bg-[#f1f1f1] px-5 py-10 sm:px-8 sm:py-12 md:px-10 lg:px-12 lg:py-14 xl:px-16">
            {/* QUOTE ICON */}
            <div className="mb-[-8%] sm:mb-[-10%] lg:mb-[-13%]">
              <span className="text-[110px] leading-none text-[#1f3f6b] sm:text-[140px] md:text-[170px] lg:text-[200px]">
                “
              </span>
            </div>

            {/* TEXT */}
            <div className="space-y-4 text-[14px] leading-[1.8] text-[#444] sm:space-y-5 sm:text-[15px] md:text-[15px] lg:text-[16px] lg:leading-[1.75]">
              <TextReveal>
                When I travelled abroad, I noticed that cities were built to
                serve communities; spaces were designed to allow people to walk
                to work and have everything they needed close.
              </TextReveal>

              <TextReveal>
                At Pride World City, we create well-ventilated, spacious homes
                and build a lifestyle fostering connection and convenience —
                because a great city isn’t just where you live, it’s how you
                live.
              </TextReveal>
            </div>

            {/* NAME */}
            <div className="mt-8 sm:mt-10">
              <TextReveal>
                <p className="text-[22px] text-[#2b2b2b] sm:text-[24px]">
                  - Arvind Jain
                </p>
              </TextReveal>

              <TextReveal>
                <p className="mt-2 text-[11px] font-semibold tracking-[0.12em] text-[#1f3f6b] sm:text-[12px]">
                  MANAGING DIRECTOR
                </p>
              </TextReveal>
            </div>
          </div>

          {/* RIGHT IMAGE */}
          <div className="relative h-[280px] sm:h-[360px] md:h-[460px] lg:h-full lg:min-h-[620px]">
            <ImageReveal />
          </div>
        </div>
      </div>
    </section>
  );
}
