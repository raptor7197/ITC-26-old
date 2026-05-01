"use client";

import { useState } from "react";

const indianPricing = [
  {
    category: "Industry Delegate",
    tutorialOnly: { regular: 5500, earlyBird: 4400 },
    confOnly: { regular: 10450, earlyBird: 8360 },
    tutorialConf: { regular: 13750, earlyBird: 11000 },
  },
  {
    category: "Academia",
    tutorialOnly: { regular: 5500, earlyBird: 3850 },
    confOnly: { regular: 10450, earlyBird: 7315 },
    tutorialConf: { regular: 13750, earlyBird: 9625 },
  },
  {
    category: "IEEE Members",
    tutorialOnly: { regular: 5500, earlyBird: 4400 },
    confOnly: { regular: 10450, earlyBird: 8360 },
    tutorialConf: { regular: 13750, earlyBird: 11000 },
  },
  {
    category: "Alumni - Indian",
    tutorialOnly: null,
    confOnly: null,
    tutorialConf: { regular: 13750, earlyBird: 7000 },
  },
];

const internationalPricing = [
  {
    category: "Industry Delegate",
    tutorialOnly: { regular: 110, earlyBird: 88 },
    confOnly: { regular: 220, earlyBird: 176 },
    tutorialConf: { regular: 265, earlyBird: 220 },
  },
  {
    category: "Academia",
    tutorialOnly: { regular: 110, earlyBird: 77 },
    confOnly: { regular: 220, earlyBird: 154 },
    tutorialConf: { regular: 265, earlyBird: 185 },
  },
  {
    category: "IEEE Members",
    tutorialOnly: { regular: 110, earlyBird: 88 },
    confOnly: { regular: 220, earlyBird: 176 },
    tutorialConf: { regular: 265, earlyBird: 220 },
  },
  {
    category: "Alumni - International",
    tutorialOnly: null,
    confOnly: null,
    tutorialConf: { regular: 264, earlyBird: 120 },
  },
];

type PricingRow = (typeof indianPricing)[number];

function PriceCell({
  price,
  currency,
}: {
  price: { regular: number; earlyBird: number } | null;
  currency: string;
}) {
  if (!price) {
    return <td className="p-3 text-center text-white/30">—</td>;
  }
  return (
    <td className="p-3 text-center">
      <div className="text-white/50 line-through text-xs">
        {currency}
        {price.regular.toLocaleString()}
      </div>
      <div className="text-[#6aaff1] font-semibold text-sm sm:text-base">
        {currency}
        {price.earlyBird.toLocaleString()}
      </div>
    </td>
  );
}

function PricingTable({
  data,
  currency,
}: {
  data: PricingRow[];
  currency: string;
}) {
  return (
    <div className="overflow-x-auto">
      <table className="w-full text-sm md:text-base border-collapse min-w-[500px]">
        <thead>
          <tr className="bg-white/10 border-b border-white/20">
            <th className="p-3 text-left font-semibold text-white">Category</th>
            <th className="p-3 text-center font-semibold text-white">
              Tutorial Only
            </th>
            <th className="p-3 text-center font-semibold text-white">
              Conference Only
            </th>
            <th className="p-3 text-center font-semibold text-white">
              Tutorial + Conference
            </th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, idx) => (
            <tr
              key={row.category}
              className={`border-b border-white/10 ${idx % 2 === 1 ? "bg-white/5" : ""}`}
            >
              <td className="p-3 font-medium text-white">{row.category}</td>
              <PriceCell price={row.tutorialOnly} currency={currency} />
              <PriceCell price={row.confOnly} currency={currency} />
              <PriceCell price={row.tutorialConf} currency={currency} />
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default function RegistrationPricing() {
  const [tab, setTab] = useState<"indian" | "international">("indian");

  return (
    <section
      id="registration"
      className="relative w-full py-16 sm:py-20 px-[5%] sm:px-[4%] md:px-[3%] lg:px-[2.5%] xl:px-[2.25%] text-white"
    >
      <div className="text-center mb-10 sm:mb-14">
        <h2 className="text-3xl md:text-5xl font-bold font-angkor text-white tracking-wide uppercase">
          Registration
        </h2>
        <div className="w-24 h-1 bg-[#6aaff1] mx-auto rounded-full mt-4"></div>
      </div>

      <div className="max-w-5xl mx-auto px-2">
        <div className="flex justify-center mb-8">
          <div className="inline-flex rounded-lg border border-white/20 overflow-hidden">
            <button
              onClick={() => setTab("indian")}
              className={`px-5 sm:px-8 py-3 font-poppins font-medium text-sm sm:text-base transition-colors ${
                tab === "indian"
                  ? "bg-[#6aaff1] text-[#03396c]"
                  : "bg-white/5 text-white hover:bg-white/10"
              }`}
            >
              Indian Participants
            </button>
            <button
              onClick={() => setTab("international")}
              className={`px-5 sm:px-8 py-3 font-poppins font-medium text-sm sm:text-base transition-colors ${
                tab === "international"
                  ? "bg-[#6aaff1] text-[#03396c]"
                  : "bg-white/5 text-white hover:bg-white/10"
              }`}
            >
              International Participants
            </button>
          </div>
        </div>

        <div className="bg-[#022241]/60 border border-[#6aaff1]/20 rounded-xl backdrop-blur-sm px-5 py-5 sm:p-6 md:p-8">
          {tab === "indian" ? (
            <PricingTable data={indianPricing} currency="₹" />
          ) : (
            <PricingTable data={internationalPricing} currency="$" />
          )}

          <div className="mt-6 pt-4 flex items-center justify-center">
            <div className="font-poppins text-xs sm:text-sm text-white/60">
              <span className="text-white/50 line-through mr-2">Regular</span>
              <span className="text-[#6aaff1] font-semibold">
                Early Bird Price
              </span>{" "}
              — available until 30th June 2026
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
