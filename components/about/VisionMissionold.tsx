"use client";

import Image from "next/image";
import { useRef, useState } from "react";

type SectionKey = "vision" | "mission";

const data: Record<
  SectionKey,
  {
    title: string;
    text: string;
    image: string;
  }
> = {
  vision: {
    title: "Our Vision",
    text: `We strive to empower individuals across all social strata by enhancing their standard of living. Our commitment is to top-notch infrastructure and fulfilling dreams through our creations.`,
    image: "/images/vision-mission.png",
  },
  mission: {
    title: "Our Mission",
    text: `We aim to establish ourselves among the top 5 real estate developers in India. By 2028, we strive to complete 200M+ sq. ft. of construction, showcasing our commitment to quality and innovation.`,
    image: "/images/vision-mission.png",
  },
};

export default function VisionMission() {
  const [active, setActive] = useState<SectionKey>("vision");
  const [animating, setAnimating] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const handleChange = (key: SectionKey) => {
    if (key === active) return;

    setAnimating(true);

    if (timeoutRef.current) clearTimeout(timeoutRef.current);

    timeoutRef.current = setTimeout(() => {
      setActive(key);
      setAnimating(false);
    }, 300);
  };

  const TabPanel = ({
    tabKey,
    title,
    text,
  }: {
    tabKey: SectionKey;
    title: string;
    text: string;
  }) => {
    const isActive = active === tabKey;

    return (
      <button
        type="button"
        onClick={() => handleChange(tabKey)}
        onMouseEnter={() => handleChange(tabKey)}
        className={`flex flex-1 flex-col justify-center px-5 py-8 text-left transition-all duration-500 sm:px-8 sm:py-10 lg:px-10 xl:px-12 ${
          isActive ? "bg-[#1f3f6b] text-white" : "bg-white text-[#2b2b2b]"
        }`}
      >
        <h3 className="mb-3 text-[26px] leading-[1.15] sm:text-[28px] lg:mb-4 lg:text-[32px]">
          {title}
        </h3>

        <p
          className={`max-w-[420px] text-[14px] leading-[1.75] transition-all duration-500 sm:text-[15px] lg:text-[16px] ${
            isActive ? "translate-y-0 opacity-100" : "opacity-70"
          }`}
        >
          {text}
        </p>
      </button>
    );
  };

  return (
    <section className="bg-[#f5f5f5] py-10 sm:py-12 md:py-14 lg:py-16">
      <div className="mx-auto max-w-[1400px] px-5 sm:px-8 lg:px-6">
        <div className="grid grid-cols-1 overflow-hidden bg-white lg:grid-cols-[1.2fr_0.8fr]">
          {/* LEFT IMAGE */}
          <div className="relative h-[260px] overflow-hidden sm:h-[340px] md:h-[420px] lg:h-[520px]">
            <Image
              key={data[active].image}
              src={data[active].image}
              alt={data[active].title}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className={`object-cover transition-all duration-[900ms] ease-out ${
                animating
                  ? "translate-x-[5%] scale-110"
                  : "translate-x-0 scale-100"
              }`}
            />
          </div>

          {/* RIGHT TABS */}
          <div className="flex flex-col lg:h-[520px]">
            <TabPanel
              tabKey="vision"
              title="Our Vision"
              text={data.vision.text}
            />

            <TabPanel
              tabKey="mission"
              title="Our Mission"
              text={data.mission.text}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
