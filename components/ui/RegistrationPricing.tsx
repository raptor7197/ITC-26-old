"use client";

import { useState } from "react";
import RegistrationHeroCTA from "@/components/ui/RegistrationHeroCTA";



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
  isEarlyBirdActive = false,
}: {
  price: { regular: number; earlyBird: number } | null;
  currency: string;
  isEarlyBirdActive?: boolean;
}) {
  if (!price) {
    return <td className="p-3 text-center text-white/30">—</td>;
  }
  
  if (isEarlyBirdActive) {
    return (
      <td className="p-3 text-center">
        <div className="text-white/50 line-through text-xs">
          {currency}
          {price.regular.toLocaleString()}
        </div>
        <div className="text-white font-semibold text-sm sm:text-base text-[#6aaff1]">
          {currency}
          {price.earlyBird.toLocaleString()}
        </div>
      </td>
    );
  }

  return (
    <td className="p-3 text-center text-white font-semibold text-sm sm:text-base">
      {currency}
      {price.regular.toLocaleString()}
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
        <div className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-5 sm:p-6 opacity-75">
          <span className="mb-3 inline-block self-start rounded-full bg-white/10 px-3 py-1 font-poppins text-xs font-semibold uppercase tracking-wide text-white/50">
            Closed
          </span>
          <h4 className="font-poppins text-base sm:text-lg font-semibold text-white/70">
            Non-IEEE Members
          </h4>
          <p className="mt-1 font-poppins text-sm text-white/50">
            Industry &amp; Academia delegates
          </p>
          <p className="mt-4 font-poppins text-xs uppercase tracking-wide text-white/40">
            Deadline Passed
          </p>
          <p className="font-poppins text-xl sm:text-2xl font-bold leading-tight text-white/40">
            30 June 2026
          </p>
          <p className="mt-3 font-poppins text-xs sm:text-sm text-white/50">
            Early bird registration has concluded. Regular pricing now applies.
          </p>
        </div>

        <div className="flex flex-col rounded-xl border border-white/10 bg-white/5 p-5 sm:p-6 opacity-75">
          <span className="mb-3 inline-block self-start rounded-full bg-white/10 px-3 py-1 font-poppins text-xs font-semibold uppercase tracking-wide text-white/50">
            Closed
          </span>
          <h4 className="font-poppins text-base sm:text-lg font-semibold text-white/70">
            IEEE Members
          </h4>
          <p className="mt-1 font-poppins text-sm text-white/50">
            Extended Early Bird for IEEE members
          </p>
          <p className="mt-4 font-poppins text-xs uppercase tracking-wide text-white/40">
            Deadline Passed
          </p>
          <p className="font-poppins text-xl sm:text-2xl font-bold leading-tight text-white/40">
            21 July 2026
          </p>
          <p className="mt-3 font-poppins text-xs sm:text-sm text-white/50">
            Early bird registration has concluded. Regular pricing now applies.
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
            return (
            <tr
              key={row.category}
              className={`border-b border-white/10 ${
                idx % 2 === 1
                  ? "bg-white/5"
                  : ""
              }`}
            >
              <td className="p-3 font-medium text-white">
                {row.category}
              </td>
              <PriceCell price={row.tutorialOnly} currency={currency} isEarlyBirdActive={false} />
              <PriceCell price={row.confOnly} currency={currency} isEarlyBirdActive={false} />
              <PriceCell price={row.tutorialConf} currency={currency} isEarlyBirdActive={false} />
            </tr>
          );
          })}
        </tbody>
      </table>
      </div>
    </div>
  );
}

function RefundPolicy() {
  return (
    <div className="mt-10 sm:mt-12 w-full">
      <div className="bg-[#022241]/60 border border-[#6aaff1]/20 rounded-xl backdrop-blur-sm p-6 sm:p-8 md:p-10">
        <h3 className="text-xl sm:text-2xl font-bold mb-6 border-b border-[#6aaff1]/20 pb-3 text-white tracking-wide font-poppins">
          Refund Policy
        </h3>
        
        <div className="space-y-5 text-white/80 font-poppins text-sm sm:text-base leading-relaxed">
          <p>
            <strong className="text-white font-semibold">Note:</strong> In case of no-show or non-participation by the individual/company, the amount paid is non-refundable.
          </p>
          
          <p>
            The amount paid to participate in the IEEE ITC India (ITC SEMICONDUCTOR INDUSTRY SOCIETY) is subject to following refund policy:
          </p>
          
          <ul className="list-disc list-outside ml-6 space-y-4 text-white/70">
            <li>
              In case of event is cancelled by the organizer, the amount paid by the individual/company is fully refundable. There will be no deduction and the refund will be made in the form of an account payee cheque to the registered participant within 30 days of official cancellation of the event.
            </li>
            <li>
              In the case of duplicate payment, a refund will be issued upon submission of valid proof of the transaction. The necessary documentation must be provided to verify the duplicate payment before the refund is processed.
            </li>
          </ul>

          <div className="pt-4 space-y-2 border-t border-[#6aaff1]/10 mt-6">
            <p className="pt-4">
              To claim the refund, share the ticket confirmation email and your Bank account details to{" "}
              <a href="mailto:register.itcindia@gmail.com" className="text-[#6aaff1] hover:text-[#9fd5ff] hover:underline font-medium transition-colors">
                register.itcindia@gmail.com
              </a>
            </p>
            <p>
              For any clarifications related to payment, send an email to{" "}
              <a href="mailto:register.itcindia@gmail.com" className="text-[#6aaff1] hover:text-[#9fd5ff] hover:underline font-medium transition-colors">
                register.itcindia@gmail.com
              </a>
            </p>
          </div>
        </div>
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
            <div className="w-full max-w-md border border-[#6aaff1]/40 rounded-lg bg-[#022241]/40 p-5 mt-2">
              <div className="flex items-center justify-between mb-4 border-b border-[#6aaff1]/20 pb-3">
                <h3 className="text-base sm:text-lg font-semibold text-white">
                  Bulk Registration
                </h3>
                <span className="text-xs font-medium text-[#6aaff1] bg-[#6aaff1]/10 px-2 py-1 rounded">
                  Up to 25% Off
                </span>
              </div>
              <table className="w-full text-sm sm:text-base border-collapse">
                <thead>
                  <tr className="border-b border-white/10 text-white/70">
                    <th className="p-2 text-left font-medium">No. of Attendees</th>
                    <th className="p-2 text-right font-medium">Discount</th>
                  </tr>
                </thead>
                <tbody className="text-white/90">
                  <tr className="border-b border-white/5">
                    <td className="p-2">5 - 10</td>
                    <td className="p-2 text-right text-[#6aaff1]">10%</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-2">11 - 30</td>
                    <td className="p-2 text-right text-[#6aaff1]">15%</td>
                  </tr>
                  <tr className="border-b border-white/5">
                    <td className="p-2">31 - 40</td>
                    <td className="p-2 text-right text-[#6aaff1]">20%</td>
                  </tr>
                  <tr>
                    <td className="p-2">&gt; 40</td>
                    <td className="p-2 text-right text-[#6aaff1]">25%</td>
                  </tr>
                </tbody>
              </table>
              <div className="mt-4 pt-3 border-t border-white/5 text-center">
                <p className="text-white/60 text-xs sm:text-sm">
                  For queries, contact:{' '}
                  <a href="mailto:register.itcindia@gmail.com" className="text-[#6aaff1] hover:underline">
                    register.itcindia@gmail.com
                  </a>
                </p>
              </div>
            </div>

            <EarlyBirdOffers />

            <p className="font-poppins text-xs sm:text-sm text-white/50 text-center">
              Prices are NOT inclusive of GST
            </p>
            <div className="text-white/60 text-xs sm:text-sm text-center mt-4">
              For bulk registration queries: register.itcindia@gmail.com
            </div>
          </div>
        </div>

        <RefundPolicy />
      </div>
    </section>
  );
}
