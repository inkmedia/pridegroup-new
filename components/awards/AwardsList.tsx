"use client";

import Image from "next/image";
import { useMemo, useRef, useState } from "react";

type EntityKey = "group" | "pwc";

type AwardItem = {
  id: string;
  title: string;
  year: string;
  awardee: string;
  department: string;
  image: string;
  entity: EntityKey;
  summary: string;
};

const awardImages = [
  "/images/awards/best-landscape.jpg",
  "/images/awards/developer-of-year.jpg",
  "/images/awards/best-premium.jpg",
  "/images/awards/best-premium-plotted.jpg",
];

const entityLabels: Record<EntityKey, string> = {
  group: "Pride Group",
  pwc: "Pride World City",
};

const entityDepartments: Record<EntityKey, string[]> = {
  group: [
    "Engineering",
    "HR",
    "Facility Management",
    "Sales & Marketing",
    "Corporate Communications",
  ],
  pwc: [
    "Engineering",
    "HR",
    "Facility Management",
    "Sales & Marketing",
    "Township Operations",
  ],
};

const awardTitleTemplates = [
  "Excellence in Delivery",
  "Best Workplace Practice",
  "Project Execution Excellence",
  "Innovation in Systems",
  "Customer Trust Citation",
  "Operational Excellence Honour",
  "Leadership in Performance",
  "Service Quality Recognition",
  "Outstanding Process Award",
  "Integrated Team Achievement",
  "Built Environment Distinction",
  "Performance Benchmark Award",
];

const awardeeTemplates = [
  "Times Property",
  "ET Realty",
  "Real Estate Awards Council",
  "Industry Leadership Forum",
  "Pune Property Awards",
  "Built Space Review",
];

const years = [
  "2025",
  "2024",
  "2023",
  "2022",
  "2021",
  "2020",
  "2019",
  "2018",
  "2017",
  "2016",
  "2015",
  "2014",
];

function buildAwards(entity: EntityKey) {
  return entityDepartments[entity].reduce<Record<string, AwardItem[]>>(
    (acc, department, departmentIndex) => {
      acc[department] = awardTitleTemplates.map((title, index) => ({
        id: `${entity}-${department.toLowerCase().replace(/[^a-z0-9]+/g, "-")}-${index}`,
        title: `${title} ${department}`,
        year: years[index % years.length],
        awardee: awardeeTemplates[(index + departmentIndex) % awardeeTemplates.length],
        department,
        entity,
        image: awardImages[(index + departmentIndex) % awardImages.length],
        summary: `${entityLabels[entity]} recognition for ${department.toLowerCase()} excellence, operational discipline, and long-term quality standards.`,
      }));

      return acc;
    },
    {},
  );
}

const awardData: Record<EntityKey, Record<string, AwardItem[]>> = {
  group: buildAwards("group"),
  pwc: buildAwards("pwc"),
};

function EntityTab({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`cursor-pointer rounded-full px-7 py-3.5 text-[14px] font-[700] uppercase tracking-[0.14em] transition-all duration-300 sm:px-8 sm:text-[15px] ${
        active
          ? "bg-[#173363] text-white shadow-[0_12px_28px_rgba(23,51,99,0.22)]"
          : "bg-white text-black/55 hover:bg-[#efe8dd] hover:text-black"
      }`}
    >
      {children}
    </button>
  );
}

function ModeTab({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`cursor-pointer rounded-full border px-5 py-2.5 text-[12px] font-[700] uppercase tracking-[0.14em] transition-all ${
        active
          ? "border-[#173363] bg-[#173363] text-white"
          : "border-[#d8d1c4] bg-white text-[#173363] hover:border-[#173363]/35"
      }`}
    >
      {children}
    </button>
  );
}

function AwardCard({
  award,
  compact = false,
}: {
  award: AwardItem;
  compact?: boolean;
}) {
  return (
    <article className="overflow-hidden rounded-[10px] border border-[#ddd5c8] bg-white shadow-[0_16px_40px_rgba(15,31,58,0.06)]">
      <div className={`relative ${compact ? "h-[180px]" : "h-[220px]"}`}>
        <Image
          src={award.image}
          alt={award.title}
          fill
          sizes={compact ? "(max-width: 1024px) 80vw, 30vw" : "(max-width: 1024px) 100vw, 33vw"}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#10203b]/78 via-[#10203b]/18 to-transparent" />
        <div className="absolute bottom-4 left-4 right-4">
          <p className="text-[11px] font-[700] uppercase tracking-[0.16em] text-white/70">
            {award.department}
          </p>
          <p className="mt-2 text-[12px] font-[700] uppercase tracking-[0.12em] text-[#f0d89a]">
            {award.year}
          </p>
        </div>
      </div>

      <div className={compact ? "p-5" : "p-6"}>
        <h3
          className={`font-[600] leading-[1.25] text-[#10203b] ${
            compact ? "text-[20px]" : "text-[22px]"
          }`}
        >
          {award.title}
        </h3>
        <p className="mt-3 text-[12px] font-[700] uppercase tracking-[0.12em] text-[#173363]/68">
          {award.awardee}
        </p>
        <p className="mt-4 text-[14px] leading-[1.8] text-[#26344e]/76">
          {award.summary}
        </p>
      </div>
    </article>
  );
}

export default function AwardsList() {
  const [activeEntity, setActiveEntity] = useState<EntityKey>("group");
  const [archiveDepartment, setArchiveDepartment] = useState(
    entityDepartments.group[0],
  );
  const [carouselEntity, setCarouselEntity] = useState<EntityKey>("group");
  const [carouselDepartment, setCarouselDepartment] = useState(
    entityDepartments.group[0],
  );
  const [activeMode, setActiveMode] = useState<"archive" | "carousel">(
    "archive",
  );
  const carouselRef = useRef<HTMLDivElement | null>(null);

  const archiveDepartments = entityDepartments[activeEntity];
  const carouselDepartments = entityDepartments[carouselEntity];

  const archiveAwards = useMemo(
    () => awardData[activeEntity][archiveDepartment] ?? [],
    [activeEntity, archiveDepartment],
  );

  const carouselAwards = useMemo(
    () => awardData[carouselEntity][carouselDepartment] ?? [],
    [carouselDepartment, carouselEntity],
  );

  const totalAwards = useMemo(
    () =>
      (Object.values(awardData.group).flat().length +
        Object.values(awardData.pwc).flat().length).toLocaleString("en-IN"),
    [],
  );

  const scrollCarousel = (direction: "left" | "right") => {
    if (!carouselRef.current) return;

    const amount = carouselRef.current.clientWidth * 0.92;
    carouselRef.current.scrollBy({
      left: direction === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  const handleEntityChange = (entity: EntityKey) => {
    setActiveEntity(entity);
    setArchiveDepartment(entityDepartments[entity][0]);
  };

  const handleCarouselEntityChange = (entity: EntityKey) => {
    setCarouselEntity(entity);
    setCarouselDepartment(entityDepartments[entity][0]);
  };

  return (
    <section className="overflow-hidden bg-[#f8f8f8] py-16 lg:py-24">
      <div className="mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-10">
        <div className="mx-auto max-w-[920px] text-center">
          <h2 className="mt-3 text-[28px] leading-[1.12] text-[#10203b] sm:text-[34px] lg:text-[40px]">
            Showcase Options
          </h2>
        </div>

        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <ModeTab
            active={activeMode === "archive"}
            onClick={() => setActiveMode("archive")}
          >
            Department Archive
          </ModeTab>
          <ModeTab
            active={activeMode === "carousel"}
            onClick={() => setActiveMode("carousel")}
          >
            All Awards Carousel
          </ModeTab>
        </div>

        <div className="mt-6 text-center text-[13px] font-[700] uppercase tracking-[0.12em] text-[#173363]/62">
          Archive-ready sample dataset: {totalAwards}+ awards
        </div>

        {activeMode === "archive" ? (
          <div className="mt-12 rounded-[10px] border border-[#ddd5c8] bg-white p-5 shadow-[0_18px_44px_rgba(15,31,58,0.08)] sm:p-6 lg:p-8">
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-wrap justify-center gap-3">
                <EntityTab
                  active={activeEntity === "group"}
                  onClick={() => handleEntityChange("group")}
                >
                  Pride Group
                </EntityTab>
                <EntityTab
                  active={activeEntity === "pwc"}
                  onClick={() => handleEntityChange("pwc")}
                >
                  Pride World City
                </EntityTab>
              </div>

              <p className="text-center text-[12px] font-[700] uppercase tracking-[0.12em] text-[#173363]/60">
                {entityLabels[activeEntity]} / {archiveDepartment}
              </p>
            </div>

            <div className="mt-8 grid gap-6 lg:grid-cols-[260px_minmax(0,1fr)]">
              <div className="rounded-[10px] bg-[#f8f5ef] p-4">
                <p className="text-[12px] font-[700] uppercase tracking-[0.16em] text-[#173363]/62">
                  Departments
                </p>
                <div className="mt-4 space-y-2">
                  {archiveDepartments.map((department) => (
                    <button
                      key={department}
                      type="button"
                      onClick={() => setArchiveDepartment(department)}
                      className={`flex w-full cursor-pointer items-center justify-between rounded-[10px] border px-4 py-4 text-left transition ${
                        archiveDepartment === department
                          ? "border-[#173363] bg-[#173363] text-white"
                          : "border-[#e4ddd2] bg-white text-[#10203b] hover:border-[#173363]/25"
                      }`}
                    >
                      <span className="text-[14px] font-[700] uppercase tracking-[0.08em]">
                        {department}
                      </span>
                      <span className="text-[18px]">›</span>
                    </button>
                  ))}
                </div>
              </div>

              <div className="rounded-[10px] border border-[#eee6da] bg-[#fcfbf8] p-4 sm:p-5">
                <div className="flex flex-wrap items-center justify-between gap-4 border-b border-[#e5dfd4] pb-4">
                  <div>
                    <p className="text-[12px] font-[700] uppercase tracking-[0.16em] text-[#8b6b3f]">
                      {entityLabels[activeEntity]}
                    </p>
                    <h3 className="mt-2 text-[26px] leading-[1.15] text-[#10203b]">
                      {archiveDepartment}
                    </h3>
                  </div>
                  <div className="text-[12px] font-[700] uppercase tracking-[0.14em] text-[#173363]/60">
                    {archiveAwards.length} awards visible
                  </div>
                </div>

                <div
                  data-lenis-prevent
                  className="mt-5 grid max-h-[780px] gap-5 overflow-y-auto pr-1 sm:grid-cols-2"
                >
                  {archiveAwards.map((award) => (
                    <AwardCard key={award.id} award={award} />
                  ))}
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="mt-12 rounded-[10px] border border-[#ddd5c8] bg-white p-5 shadow-[0_18px_44px_rgba(15,31,58,0.08)] sm:p-6 lg:p-8">
            <div className="flex flex-col items-center gap-4">
              <div className="flex flex-wrap justify-center gap-3">
                <EntityTab
                  active={carouselEntity === "group"}
                  onClick={() => handleCarouselEntityChange("group")}
                >
                  Pride Group
                </EntityTab>
                <EntityTab
                  active={carouselEntity === "pwc"}
                  onClick={() => handleCarouselEntityChange("pwc")}
                >
                  Pride World City
                </EntityTab>
              </div>

              <div className="flex items-center gap-3">
                <ScrollButton
                  direction="left"
                  onClick={() => scrollCarousel("left")}
                />
                <ScrollButton
                  direction="right"
                  onClick={() => scrollCarousel("right")}
                />
              </div>
            </div>

            <div className="mt-6 overflow-x-auto [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
              <div className="flex min-w-max justify-center gap-2 sm:min-w-0">
                {carouselDepartments.map((department) => (
                  <button
                    key={department}
                    type="button"
                    onClick={() => setCarouselDepartment(department)}
                    className={`shrink-0 rounded-full border px-4 py-2 text-[12px] font-[700] uppercase tracking-[0.08em] transition ${
                      carouselDepartment === department
                        ? "border-[#173363] bg-[#173363] text-white"
                        : "border-[#d8d1c4] bg-[#f8f5ef] text-[#173363] hover:border-[#173363]/35"
                    }`}
                  >
                    {department}
                  </button>
                ))}
              </div>
            </div>

            <div
              ref={carouselRef}
              className="mt-8 flex gap-5 overflow-x-auto scroll-smooth [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
            >
              {carouselAwards.map((award) => (
                <div
                  key={award.id}
                  className="min-w-[88%] snap-start sm:min-w-[48%] lg:min-w-[31.6%]"
                >
                  <AwardCard award={award} compact />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

function ScrollButton({
  direction,
  onClick,
}: {
  direction: "left" | "right";
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={direction === "left" ? "Scroll left" : "Scroll right"}
      className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#d8c8b4] bg-white text-[#173363] transition hover:-translate-y-[2px] hover:border-[#173363]"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.8"
        className="h-5 w-5"
      >
        {direction === "left" ? (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15 18l-6-6 6-6"
          />
        ) : (
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 18l6-6-6-6"
          />
        )}
      </svg>
    </button>
  );
}
