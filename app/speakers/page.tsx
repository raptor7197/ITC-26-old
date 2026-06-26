"use client";

import { useState } from "react";
import Image from "next/image";
import {
  keynoteSpeakers,
  industrySpeakers,
  tutorialsData,
  distinguishedAddressesData,
} from "@/lib/speakersData";
import AgendaModal, { ModalData } from "@/components/agenda/AgendaModal";

// Extract tutorial speakers from tutorialsData and group their tutorials
const tutorialSpeakersMap = new Map<string, any>();

tutorialsData.forEach((tutorial) => {
  if (tutorial.authors) {
    tutorial.authors.forEach((author) => {
      if (!tutorialSpeakersMap.has(author.name)) {
        tutorialSpeakersMap.set(author.name, {
          name: author.name,
          affiliation: author.affiliation,
          image: author.image,
          imageClassName: author.imageClassName,
          tutorials: [],
        });
      }
      const speakerData = tutorialSpeakersMap.get(author.name);
      speakerData.tutorials.push(tutorial);
    });
  }
});

const tutorialSpeakers = Array.from(tutorialSpeakersMap.values()).map((author, index) => ({
  id: `tut-${index}`,
  name: author.name,
  affiliation: author.affiliation,
  image: author.image,
  imageClassName: author.imageClassName,
  tutorials: author.tutorials,
}));

const sections = [
  { title: "Keynote Speakers", data: keynoteSpeakers },
  { title: "Distinguished Addresses", data: distinguishedAddressesData },
  { title: "Industry Speakers", data: industrySpeakers },
  { title: "Tutorial Speakers", data: tutorialSpeakers },
];

const SpeakerCard = ({ speaker, onClick }: { speaker: any; onClick: () => void }) => {
  return (
    <div 
      onClick={onClick}
      className="w-[300px] md:w-[360px] min-h-[380px] md:min-h-[420px] border border-white/20 rounded-lg p-8 flex flex-col items-center bg-[#03396c]/50 backdrop-blur-sm shadow-[0_0_15px_rgba(0,0,0,0.2)] hover:border-white/40 hover:scale-105 transition-all duration-300 group cursor-pointer"
    >
      <div className="relative w-40 h-40 md:w-56 md:h-56 mb-8 rounded-full overflow-hidden border-2 border-white/10 group-hover:border-white/30 transition-colors bg-white/5 flex items-center justify-center">
        {speaker.image ? (
          <Image
            src={speaker.image}
            alt={speaker.name || "Speaker"}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className={`object-cover ${speaker.imageClassName || "object-top scale-105"}`}
          />
        ) : (
          <span className="text-gray-400 font-bold text-2xl">
            {speaker.name ? speaker.name.charAt(0) : "S"}
          </span>
        )}
      </div>

      <div className="text-center flex-grow flex flex-col items-center w-full">
        <h3 className="text-xl md:text-2xl font-bold mb-3 text-white leading-tight group-hover:text-sky-300 transition-colors duration-300">
          {speaker.name}
        </h3>
        <p className="text-base md:text-lg text-gray-300 font-medium leading-snug">
          {speaker.affiliation}
        </p>
        <div className="mt-auto pt-4 opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-center gap-2 text-sky-400 text-xs sm:text-sm font-bold tracking-wide uppercase translate-y-2 group-hover:translate-y-0">
          <span>Click to read more</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M9 5l7 7-7 7" />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default function Speakers() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedSpeakerData, setSelectedSpeakerData] = useState<ModalData | null>(null);

  const handleCardClick = (speaker: any, sectionTitle: string) => {
    if (sectionTitle === "Tutorial Speakers") {
      // Use the exact same data structure (the full tutorial object) as the Agenda page to preserve the layout with all co-authors
      setSelectedSpeakerData(speaker.tutorials[0] as ModalData);
    } else {
      setSelectedSpeakerData(speaker as ModalData);
    }
    setIsModalOpen(true);
  };

  return (
    <main className="min-h-screen overflow-hidden relative text-white font-poppins selection:bg-white/20">
      <div className="relative z-10 pt-[150px] pb-20 w-[85%] sm:w-[90%] md:w-full md:px-10 max-w-[1360px] mx-auto flex flex-col items-center">
        {/* Title */}
        <h1 className="text-4xl md:text-[64px] font-bold text-center mb-16 tracking-tight">
          OUR SPEAKERS
        </h1>

        {sections.map((section, index) => (
          <div
            key={index}
            className="w-full flex flex-col items-center mb-24 relative"
          >
            <h2 className="text-2xl md:text-4xl font-bold mb-12 text-center text-[#90cbfb] drop-shadow-sm uppercase tracking-wider">
              {section.title}
            </h2>

            <div className="flex flex-wrap justify-center gap-8 md:gap-12">
              {section.data.map((speaker: any) => (
                <SpeakerCard 
                  key={speaker.id || speaker.name} 
                  speaker={speaker} 
                  onClick={() => handleCardClick(speaker, section.title)}
                />
              ))}
            </div>

            {index !== sections.length - 1 && (
              <div className="w-full h-[1px] mt-24 opacity-20 pointer-events-none flex justify-center">
                <div className="w-3/4 h-full border-b border-dashed border-white"></div>
              </div>
            )}
          </div>
        ))}
      </div>

      <AgendaModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        data={selectedSpeakerData}
      />
    </main>
  );
}
