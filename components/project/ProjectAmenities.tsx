"use client";

import { useState } from "react";
import type { Project } from "@/types/project";

export default function ProjectAmenities({ project }: { project: Project }) {
  const amenities = project.details.amenities;
  const [activeCategory, setActiveCategory] = useState(0);
  const [miscOpen, setMiscOpen] = useState(false);

  if (!amenities?.categories?.length) return null;

  const currentCategory =
    amenities.categories[activeCategory] || amenities.categories[0];

  return (
    <section
      id="amenities"
      className="scroll-mt-36 bg-[#f6f1e7] py-12 sm:py-16 lg:py-20"
    >
      <div className="mx-auto max-w-[1440px] px-4 sm:px-6 lg:px-10">
        <div className="max-w-[820px]">
          <p className="text-[13px] font-[700] uppercase tracking-[0.14em] text-[#173363]/70">
            Wellington Lifestyle
          </p>
          <h2 className="mt-3 text-[34px] font-[500] leading-none text-black sm:text-[42px]">
            {amenities.title || "Amenities"}
          </h2>
          <p className="mt-4 text-[17px] leading-[1.8] text-black/65 sm:text-[18px]">
            Discover dedicated spaces for wellness, sports, family time, and
            open-air social moments across the Wellington community.
          </p>
        </div>

        <div className="mt-10 grid gap-6 lg:grid-cols-[280px_minmax(0,1fr)]">
          <div className="rounded-[24px] bg-white p-4 shadow-[0_12px_32px_rgba(0,0,0,0.06)] sm:p-5">
            <div className="flex gap-3 overflow-x-auto lg:flex-col">
              {amenities.categories.map((category, index) => {
                const isActive = index === activeCategory;

                return (
                  <button
                    key={category.title}
                    type="button"
                    onClick={() => setActiveCategory(index)}
                    className={`flex min-w-[180px] items-center justify-between rounded-[18px] px-4 py-4 text-left transition lg:min-w-0 ${
                      isActive
                        ? "bg-[#173363] text-white shadow-lg"
                        : "bg-[#f7f7f7] text-black hover:bg-[#ece7db]"
                    }`}
                  >
                    <span className="text-[18px] font-[600] leading-snug">
                      {category.title}
                    </span>
                    <span
                      className={`inline-flex h-10 w-10 items-center justify-center rounded-full text-[13px] font-[700] ${
                        isActive
                          ? "bg-white/15 text-white"
                          : "bg-white text-[#173363]"
                      }`}
                    >
                      {String(category.items.length).padStart(2, "0")}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="rounded-[28px] bg-white p-6 shadow-[0_18px_40px_rgba(0,0,0,0.07)] sm:p-8">
            <div className="flex flex-col gap-4 border-b border-black/10 pb-6 sm:flex-row sm:items-end sm:justify-between">
              <div>
                <p className="text-[13px] font-[700] uppercase tracking-[0.14em] text-[#173363]/70">
                  Curated Spaces
                </p>
                <h3 className="mt-2 text-[28px] font-[500] leading-none text-black sm:text-[34px]">
                  {currentCategory.title}
                </h3>
              </div>

              <div className="rounded-full bg-[#f4efe6] px-4 py-2 text-[13px] font-[700] uppercase tracking-[0.1em] text-[#173363]">
                {currentCategory.items.length} amenities
              </div>
            </div>

            <div className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
              {currentCategory.items.map((item) => (
                <div
                  key={`${currentCategory.title}-${item}`}
                  className="flex min-h-[68px] items-center rounded-[18px] border border-[#efe5d3] bg-[#fbf8f2] px-4 py-4 text-[16px] leading-snug text-black/80"
                >
                  <span className="mr-3 flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#173363] text-[14px] text-white">
                    +
                  </span>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {!!amenities.miscItems.length && (
          <div className="mt-6 rounded-[24px] bg-white shadow-[0_12px_32px_rgba(0,0,0,0.06)]">
            <button
              type="button"
              onClick={() => setMiscOpen((prev) => !prev)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8"
            >
              <div>
                <p className="text-[13px] font-[700] uppercase tracking-[0.14em] text-[#173363]/70">
                  Additional Offerings
                </p>
                <h3 className="mt-2 text-[26px] font-[500] leading-none text-black sm:text-[30px]">
                  {amenities.miscTitle || "Misc"}
                </h3>
              </div>

              <span className="flex h-12 w-12 items-center justify-center rounded-full bg-[#173363] text-[24px] text-white">
                {miscOpen ? "−" : "+"}
              </span>
            </button>

            {miscOpen && (
              <div className="border-t border-black/8 px-6 py-6 sm:px-8">
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
                  {amenities.miscItems.map((item) => (
                    <div
                      key={item}
                      className="rounded-[16px] bg-[#f7f5ef] px-4 py-4 text-[15px] leading-snug text-black/75"
                    >
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
