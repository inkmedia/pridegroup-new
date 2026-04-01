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
      { threshold: 0.2 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div ref={ref} className="overflow-hidden">
      <div
        className={`transition-all duration-700 ease-out ${
          show ? "translate-y-0 opacity-100" : "translate-y-[30px] opacity-0"
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
        className={`object-cover object-top transition-transform duration-[1800ms] ${
          show ? "scale-100" : "scale-110"
        }`}
      />
    </div>
  );
}

/* ---------- DATA ---------- */
const boardOfDirectors = [
  { name: "Arvind Jain", role: "MD" },
  { name: "DP Jain", role: "" },
  { name: "Nidhi Jain", role: "MBA Finance" },
  { name: "ML Saraogi", role: "" },
];

const managementTeam = {
  Pune: [
    { name: "Rishabh Jain", role: "VP / Director of Business Development" },
    { name: "CB Kulkarni", role: "VP Engineering" },
    { name: "Sarika Taori", role: "VP Legal" },
    { name: "Vivek Singh", role: "VP Sales and CRM" },
    { name: "Sushant Kokate", role: "AVP Marketing and Strategy" },
    { name: "Raj Gupta", role: "CFO" },
  ],
  Bangalore: [
    { name: "Mahesh Goyal", role: "Director / Partner" },
    { name: "Ravi", role: "Director / Partner" },
    { name: "Siddhart Rajgharia", role: "Director / Partner" },
  ],
  Mumbai: [
    { name: "Rajesh Jain", role: "" },
    { name: "Gulamnabi Kumthe", role: "" },
    { name: "Gautam Bharill", role: "" },
    { name: "Sonali", role: "HR Head" },
  ],
};

type TeamMember = {
  name: string;
  role?: string;
};

/* ---------- UTIL ---------- */
function getInitials(name: string) {
  return name
    .split(" ")
    .map((word) => word[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();
}

/* ---------- MEMBER CARD ---------- */
function MemberCard({ member, index }: { member: TeamMember; index: number }) {
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
      { threshold: 0.15 },
    );

    if (ref.current) observer.observe(ref.current);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ease-out ${
        show ? "translate-y-0 opacity-100" : "translate-y-8 opacity-0"
      }`}
      style={{ transitionDelay: `${index * 80}ms` }}
    >
      <div className="group h-full rounded-[10px] border border-[#1f3f6b]/10 bg-white p-5 shadow-[0_10px_30px_rgba(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_40px_rgba(0,0,0,0.07)]">
        <div className="flex items-start gap-4">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-[#1f3f6b]/8 text-[14px] font-semibold tracking-[0.06em] text-[#1f3f6b]">
            {getInitials(member.name)}
          </div>

          <div className="min-w-0">
            <h3 className="text-[20px] leading-[1.3] text-[#1f2a44] sm:text-[22px]">
              {member.name}
            </h3>

            {member.role ? (
              <p className="mt-2 text-[12px] font-semibold uppercase tracking-[0.12em] text-[#1f3f6b]/80 sm:text-[13px]">
                {member.role}
              </p>
            ) : (
              <p className="mt-2 text-[13px] text-[#6b7280]">—</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

/* ---------- TEAM GRID ---------- */
function TeamGrid({ members }: { members: TeamMember[] }) {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {members.map((member, index) => (
        <MemberCard
          key={`${member.name}-${index}`}
          member={member}
          index={index}
        />
      ))}
    </div>
  );
}

/* ---------- MAIN COMPONENT ---------- */
export default function ManagingDirector() {
  const [activeTab, setActiveTab] = useState<"board" | "management">("board");
  const [activeLocation, setActiveLocation] =
    useState<keyof typeof managementTeam>("Pune");

  return (
    <>
      {/* ================= MD SECTION ================= */}
      <section id="mds-desk" className="py-10 sm:py-12 md:py-16 lg:py-20">
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 md:px-10 lg:px-6">
          <div className="grid grid-cols-1 overflow-hidden rounded-[10px] lg:grid-cols-2">
            {/* LEFT CONTENT */}
            <div className="flex flex-col justify-center bg-[#f1f1f1] px-5 py-10 sm:px-8 sm:py-12 md:px-10 lg:px-12 lg:py-14 xl:px-16">
              <div className="mb-[-8%] sm:mb-[-10%] lg:mb-[-13%]">
                <span className="text-[110px] leading-none text-[#1f3f6b] sm:text-[140px] md:text-[170px] lg:text-[200px]">
                  “
                </span>
              </div>

              <div className="space-y-4 text-[14px] leading-[1.8] text-[#444] sm:space-y-5 sm:text-[15px] lg:text-[16px]">
                <TextReveal>
                  When I travelled abroad, I noticed that cities were built to
                  serve communities; spaces were designed to allow people to
                  walk to work and have everything they needed close.
                </TextReveal>

                <TextReveal>
                  At Pride World City, we create well-ventilated, spacious homes
                  and build a lifestyle fostering connection and convenience —
                  because a great city isn’t just where you live, it’s how you
                  live.
                </TextReveal>
              </div>

              <div className="mt-8 sm:mt-10">
                <TextReveal>
                  <p className="text-[22px] text-[#2b2b2b] sm:text-[24px]">
                    - Arvind Jain
                  </p>
                </TextReveal>

                <TextReveal>
                  <p className="mt-2 text-[11px] font-semibold tracking-[0.14em] text-[#1f3f6b] sm:text-[12px]">
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

      {/* ================= TEAM & LEADERSHIP SECTION ================= */}
      <section
        id="team-and-leadership"
        className="bg-[#f8f8f8] py-12 sm:py-14 md:py-16 lg:py-20"
      >
        <div className="mx-auto max-w-[1400px] px-5 sm:px-8 md:px-10 lg:px-6">
          <div className="mb-8 sm:mb-10 lg:mb-12">
            <TextReveal>
              <h2 className="mt-3 text-[30px] leading-[1.15] text-[#1f2a44] sm:text-[36px] md:text-[40px]">
                Team & Leadership
              </h2>
            </TextReveal>

            <TextReveal>
              <p className="mt-4 max-w-[760px] text-[15px] leading-[1.9] text-[#1f3f6b]/75 sm:text-[16px]">
                A strong leadership foundation led by experienced board members
                and a dynamic management team across key locations.
              </p>
            </TextReveal>
          </div>

          <div className="rounded-[10px] border border-[#1f3f6b]/10 bg-white p-4 shadow-[0_16px_50px_rgba(0,0,0,0.04)] sm:p-6 lg:p-8">
            {/* MAIN TABS */}
            <div className="mb-6 flex flex-wrap gap-3 border-b border-black/6 pb-5">
              <button
                onClick={() => setActiveTab("board")}
                className={`cursor-pointer rounded-full px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.08em] transition-all duration-300 sm:text-[14px] ${
                  activeTab === "board"
                    ? "bg-[#1f3f6b] text-white shadow-md"
                    : "bg-[#f4f6f8] text-[#1f2a44] hover:bg-[#e9eef4]"
                }`}
              >
                Board of Directors
              </button>

              <button
                onClick={() => setActiveTab("management")}
                className={`cursor-pointer rounded-full px-5 py-2.5 text-[13px] font-semibold uppercase tracking-[0.08em] transition-all duration-300 sm:text-[14px] ${
                  activeTab === "management"
                    ? "bg-[#1f3f6b] text-white shadow-md"
                    : "bg-[#f4f6f8] text-[#1f2a44] hover:bg-[#e9eef4]"
                }`}
              >
                Management Team
              </button>
            </div>

            {/* BOARD */}
            {activeTab === "board" && (
              <div>
                <div className="mb-6">
                  <h3 className="text-[22px] text-[#1f2a44] sm:text-[24px]">
                    Board of Directors
                  </h3>
                  <p className="mt-2 text-[15px] text-[#64748b]">
                    Guiding the organization with vision, governance and
                    long-term direction.
                  </p>
                </div>

                <TeamGrid members={boardOfDirectors} />
              </div>
            )}

            {/* MANAGEMENT */}
            {activeTab === "management" && (
              <div>
                <div className="mb-6">
                  <h3 className="text-[22px] text-[#1f2a44] sm:text-[24px]">
                    Management Team
                  </h3>
                  <p className="mt-2 text-[15px] text-[#64748b]">
                    Leadership teams across our core operational locations.
                  </p>
                </div>

                {/* LOCATION TABS */}
                <div className="mb-6 flex flex-wrap gap-3">
                  {(
                    Object.keys(managementTeam) as Array<
                      keyof typeof managementTeam
                    >
                  ).map((location) => (
                    <button
                      key={location}
                      onClick={() => setActiveLocation(location)}
                      className={`cursor-pointer rounded-full px-4 py-2 text-[13px] font-semibold tracking-[0.06em] transition-all duration-300 sm:text-[14px] ${
                        activeLocation === location
                          ? "bg-[#dbe7f3] text-[#1f3f6b]"
                          : "bg-[#f6f6f6] text-[#475569] hover:bg-[#eef2f7]"
                      }`}
                    >
                      {location}
                    </button>
                  ))}
                </div>

                <TeamGrid members={managementTeam[activeLocation]} />
              </div>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
