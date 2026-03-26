"use client";

import { useEffect, useState } from "react";

export default function ProjectHero({ project }: any) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setLoaded(true), 100);
    return () => clearTimeout(t);
  }, []);

  const isVideo = project.hero?.type === "video";

  return (
    <section
      data-header="dark"
      className="relative h-[85vh] min-h-[500px] w-full overflow-hidden"
    >
      {/* MEDIA */}
      {isVideo ? (
        <video
          src={project.hero.src}
          autoPlay
          muted
          loop
          playsInline
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1400ms] ease-out ${
            loaded ? "scale-100 opacity-100" : "scale-110 opacity-0"
          }`}
        />
      ) : (
        <img
          src={project.hero.src}
          alt={project.title}
          className={`absolute inset-0 h-full w-full object-cover transition-all duration-[1400ms] ease-out ${
            loaded ? "scale-100 opacity-100" : "scale-110 opacity-0"
          }`}
        />
      )}

      {/* OVERLAY */}
      <div className="absolute inset-0 bg-black/50" />

      {/* CONTENT */}
      <div className="relative z-10 mx-auto flex h-full w-full max-w-[1400px] items-center px-5 sm:px-6 md:px-10 lg:px-16">
        <div
          className={`max-w-[650px] text-white transition-all duration-700 ${
            loaded ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
          }`}
        >
          {/* LOCATION */}
          {project.location && (
            <p className="mb-3 text-[12px] uppercase tracking-[0.18em] text-white/70">
              {project.location}
            </p>
          )}

          {/* TITLE */}
          <h1 className="text-[36px] sm:text-[48px] md:text-[56px] leading-[1.1] font-serif">
            {project.title}
          </h1>

          {/* SUBTITLE */}
          {project.overview?.subtitle && (
            <p className="mt-4 text-[14px] sm:text-[16px] text-white/85">
              {project.overview.subtitle}
            </p>
          )}

          {/* CTA */}
          <div className="mt-6 flex gap-4">
            <button className="border border-white px-6 py-3 text-sm uppercase tracking-wide transition hover:bg-white hover:text-black">
              Enquire Now
            </button>

            <button className="text-sm underline underline-offset-4 hover:text-white/70 transition">
              View Brochure
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
