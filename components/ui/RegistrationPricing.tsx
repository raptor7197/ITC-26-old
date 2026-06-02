"use client";

import { useState } from "react";
import RegistrationHeroCTA from "@/components/ui/RegistrationHeroCTA";

const REGISTER_PORTAL_URL = "https://itc.expoplato.com/";

function RegisterNowButton({ className = "" }: { className?: string }) {
  return (
    <a
      href={REGISTER_PORTAL_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`group inline-flex items-center justify-center rounded-lg border border-[#d8efff]/80 bg-gradient-to-br from-[#8cc9fb] via-[#89c6f9] to-[#7abcf4] px-8 py-3 font-poppins text-sm font-bold tracking-wide text-[#022241] shadow-[0_0_20px_rgba(166,219,255,0.55),0_0_42px_rgba(106,175,241,0.42),0_10px_24px_rgba(106,175,241,0.36)] transition-all duration-500 ease-out hover:-translate-y-0.5 hover:border-[#e6f5ff] hover:bg-gradient-to-br hover:from-[#9fd5ff] hover:via-[#95cffc] hover:to-[#84c5fa] hover:shadow-[0_0_28px_rgba(182,229,255,0.72),0_0_56px_rgba(106,175,241,0.58),0_14px_30px_rgba(106,175,241,0.46)] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#6aaff1] sm:text-base ${className}`}
    >
      <span className="transition-transform duration-300 group-hover:scale-[1.03]">
        Register Now
      </span>
    </a>
  );
}

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
      <div className="text-white font-semibold text-sm sm:text-base">
        {currency}
        {price.earlyBird.toLocaleString()}
      </div>
    </td>
  );
}

function EarlyBirdOffers() {
  return (
    <div className="w-full mt-6 sm:mt-8">
      <h3 className="font-poppins text-center text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-5">
        Early Bird Offers
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
        <div className="flex flex-col rounded-xl border border-[#6aaff1]/30 bg-white/5 p-5 sm:p-6">
          <span className="mb-3 inline-block self-start rounded-full bg-[#6aaff1]/20 px-3 py-1 font-poppins text-xs font-bold uppercase tracking-wide text-[#6aaff1]">
            Early Bird
          </span>
          <h4 className="font-poppins text-base sm:text-lg font-semibold text-white">
            Non-IEEE Members
          </h4>
          <p className="mt-1 font-poppins text-sm text-white/70">
            Industry &amp; Academia delegates
          </p>
          <p className="mt-4 font-poppins text-xs uppercase tracking-wide text-white/60">
            Register by
          </p>
          <p className="font-angkor text-2xl sm:text-3xl font-bold leading-tight text-[#6aaff1]">
            30 June 2026
          </p>
          <p className="mt-3 font-poppins text-xs sm:text-sm text-white/60">
            <span className="text-white/50 line-through">Regular</span>
            <span className="mx-1.5 text-white/40">→</span>
            <span className="font-semibold text-white">Early Bird</span> pricing
            on all ticket types
          </p>
        </div>

        <div className="flex flex-col rounded-xl border border-[#6aaff1]/50 bg-[#6aaff1]/10 p-5 sm:p-6 shadow-[0_0_24px_rgba(106,175,241,0.15)]">
          <span className="mb-3 inline-block self-start rounded-full bg-[#6aaff1] px-3 py-1 font-poppins text-xs font-bold uppercase tracking-wide text-[#03396c]">
            IEEE Offer
          </span>
          <h4 className="font-poppins text-base sm:text-lg font-semibold text-white">
            IEEE Members
          </h4>
          <p className="mt-1 font-poppins text-sm text-white/80">
            Extended Early Bird for IEEE members
          </p>
          <p className="mt-4 font-poppins text-xs uppercase tracking-wide text-white/60">
            Register by
          </p>
          <p className="font-angkor text-2xl sm:text-3xl font-bold leading-tight text-white">
            21 July 2026
          </p>
          <p className="mt-3 font-poppins text-xs sm:text-sm text-white/70">
            Applies to{" "}
            <span className="font-medium text-[#6aaff1]">Tutorial Only</span>,{" "}
            <span className="font-medium text-[#6aaff1]">Conference Only</span>
            , and{" "}
            <span className="font-medium text-[#6aaff1]">
              Tutorial + Conference
            </span>
          </p>
        </div>
      </div>
    </div>
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
    <div>
      <p className="mb-3 font-poppins text-xs sm:text-sm text-white/60 text-center sm:text-left">
        <span className="text-white/50 line-through">Regular</span>
        <span className="mx-2 text-white/40">·</span>
        <span className="font-semibold text-white">Early Bird</span>
        <span className="text-white/50">
          {" "}
          — strikethrough = regular price, bold = Early Bird price
        </span>
      </p>
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
          {data.map((row, idx) => {
            const isIeee = row.category === "IEEE Members";
            return (
            <tr
              key={row.category}
              className={`border-b border-white/10 ${
                isIeee
                  ? "bg-[#6aaff1]/10 border-l-4 border-l-[#6aaff1]"
                  : idx % 2 === 1
                    ? "bg-white/5"
                    : ""
              }`}
            >
              <td className="p-3 font-medium text-white">
                {row.category}
                {isIeee && (
                  <span className="ml-2 hidden sm:inline rounded bg-[#6aaff1]/25 px-1.5 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-[#6aaff1]">
                    Extended offer
                  </span>
                )}
              </td>
              <PriceCell price={row.tutorialOnly} currency={currency} />
              <PriceCell price={row.confOnly} currency={currency} />
              <PriceCell price={row.tutorialConf} currency={currency} />
            </tr>
          );
          })}
        </tbody>
      </table>
      </div>
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
      <RegistrationHeroCTA />

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

          <div className="mt-6 pt-4 flex flex-col items-center justify-center gap-6">
            <div className="w-full max-w-md border border-[#6aaff1]/30 rounded-lg bg-white/5 p-4">
              <h3 className="text-base sm:text-lg font-semibold text-white text-center mb-3">
                Bulk Registration
              </h3>
              <table className="w-full text-xs sm:text-sm border-collapse">
                <thead>
                  <tr className="border-b border-white/20 text-white/80">
                    <th className="p-2 text-left">No. of Pax</th>
                    <th className="p-2 text-right">Discount (%)</th>
                  </tr>
                </thead>
                <tbody className="text-white">
                  <tr className="border-b border-white/10">
                    <td className="p-2">5 - 10</td>
                    <td className="p-2 text-right">10</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-2">11 - 30</td>
                    <td className="p-2 text-right">15</td>
                  </tr>
                  <tr className="border-b border-white/10">
                    <td className="p-2">31 - 40</td>
                    <td className="p-2 text-right">20</td>
                  </tr>
                  <tr>
                    <td className="p-2">&gt; 40</td>
                    <td className="p-2 text-right">25</td>
                  </tr>
                </tbody>
              </table>
            </div>

            <EarlyBirdOffers />

            <p className="font-poppins text-xs sm:text-sm text-white/50 text-center">
              Prices are NOT inclusive of GST
            </p>
            <RegisterNowButton />
            <div className="text-white/60 text-xs sm:text-sm">
              For bulk registration queries: register.itcindia@gmail.com
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
