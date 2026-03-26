"use client";

const awards = [
  {
    title: "Developer of the Year",
    company: "Pride Group",
    source: "Economic Times Now",
    year: "2018",
    image: "/images/awards/best-landscape.jpg",
  },
  {
    title: "Developer of the Year",
    company: "Pride Group",
    source: "Economic Times Now",
    year: "2018",
    image: "/images/awards/best-premium-plotted.jpg",
  },
  {
    title: "Developer of the Year",
    company: "Pride Group",
    source: "Economic Times Now",
    year: "2018",
    image: "/images/awards/best-premium.jpg",
  },
  {
    title: "Developer of the Year",
    company: "Pride Group",
    source: "Economic Times Now",
    year: "2018",
    image: "/images/awards/developer-of-year.jpg",
  },
];

export default function AwardsSection() {
  return (
    <section className="bg-[#f5f5f5] py-16 md:py-20">
      <div className="mx-auto w-[90%] max-w-[1480px]">
        {/* HEADER */}
        <div className="mb-10 max-w-[620px]">
          <h2 className="mb-4 text-[34px] md:text-[54px] text-[#233a63]">
            Our Awards
          </h2>

          <p className="text-[16px] md:text-[18px] text-[#222] leading-[1.6]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </div>

        {/* GRID */}
        <div className="grid grid-cols-1 gap-[18px] md:grid-cols-2 xl:grid-cols-4">
          {awards.map((award, index) => (
            <div
              key={index}
              className="group relative h-[460px] md:h-[505px] overflow-hidden bg-black cursor-pointer"
            >
              {/* IMAGE (hidden by default) */}
              <img
                src={award.image}
                alt={award.title}
                className="
                  absolute inset-0 h-full w-full object-cover
                  opacity-100 scale-110
                  transition-all duration-700 ease-out
                  group-hover:opacity-100 group-hover:scale-100
                "
              />

              {/* DARK OVERLAY */}
              <div className="absolute inset-0 bg-black/90 transition-all duration-500 group-hover:bg-black/40" />

              {/* CONTENT */}
              <div className="absolute inset-0 z-10 flex flex-col justify-end px-6 pb-8 transition-all duration-500 group-hover:pb-12">
                <h3 className="text-[26px] md:text-[30px] text-white leading-[1.2]">
                  {award.title}
                </h3>

                <p className="mt-2 text-[16px] text-[#bcc0d9]">
                  {award.source}
                </p>

                {/* EXTRA INFO */}
                <div className="mt-4 overflow-hidden">
                  <div
                    className="
                      translate-y-[30px] opacity-0
                      transition-all duration-500 delay-100
                      group-hover:translate-y-0 group-hover:opacity-100
                    "
                  >
                    <p className="text-[16px] font-semibold text-white">
                      {award.company}
                    </p>

                    <span className="mt-2 block text-[16px] text-white/80">
                      {award.year}
                    </span>
                  </div>
                </div>
              </div>

              {/* BORDER */}
              <div className="absolute inset-0 border-2 border-transparent transition-all duration-300 group-hover:border-[#1f3f78]" />
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="mt-12 md:mt-14">
          <button className="h-[60px] w-full bg-[#ececef] text-[16px] md:text-[18px] font-bold text-[#1f2d52] transition hover:bg-[#dcdce0] cursor-pointer">
            VIEW ALL OUR AWARDS & ACCOLADES
          </button>
        </div>
      </div>
    </section>
  );
}
