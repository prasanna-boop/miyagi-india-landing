import React from "react";

export function MetricsStrip() {
  const metrics = [
    {
      value: "125,000+",
      label: "Active students globally",
    },
    {
      value: "20,000+",
      label: "MCQs & solved past questions",
    },
    {
      value: "100%",
      label: "NCERT line-by-line coverage",
    },
  ];

  return (
    <section className="border-y border-[#1C1C1E] bg-[#050507] py-14">
      <div className="max-w-5xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {metrics.map((item, idx) => (
            <div key={idx} className="flex flex-col items-center justify-center">
              <span className="text-4xl sm:text-5xl font-bold tracking-tight text-white mb-2">
                {item.value}
              </span>
              <span className="text-sm font-semibold text-zinc-400">
                {item.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
