import re

with open("components/agenda/AgendaSchedule.tsx", "r") as f:
    content = f.read()

# Add imports
imports = """
import { keynoteSpeakers, industrySpeakers, tutorialsData } from "@/lib/speakersData";
import AgendaModal, { ModalData } from "./AgendaModal";
"""
content = content.replace('import { agendaDays, VENUES } from "@/lib/agendaData";', 'import { agendaDays, VENUES } from "@/lib/agendaData";\n' + imports)

# Add state
state_code = """
  const [activeId, setActiveId] = useState(agendaDays[0].id);
  const [selectedData, setSelectedData] = useState<ModalData | null>(null);

  const getMatchData = (title: string, items?: string[]): ModalData | null => {
    // Check Tutorials
    const tutorialMatch = tutorialsData.find(t => t.title === title || (t.title && title.includes(t.title)));
    if (tutorialMatch) return tutorialMatch as ModalData;

    // Check Keynotes
    const keynoteMatch = keynoteSpeakers.find(k => title.includes(k.name));
    if (keynoteMatch) return keynoteMatch as ModalData;

    // Check Industry Speakers (match name in title or items)
    const industryMatch = industrySpeakers.find(i => title.includes(i.name) || (items && items.some(item => item.includes(i.name))));
    if (industryMatch) return industryMatch as ModalData;

    return null;
  };

  const handleTileClick = (title: string, items?: string[]) => {
    const data = getMatchData(title, items);
    if (data) {
      setSelectedData(data);
    }
  };
"""
content = content.replace('const [activeId, setActiveId] = useState(agendaDays[0].id);', state_code.strip())

# Modify single slot TD
single_slot_search = """
                      <td colSpan={4} className="border-2 border-white/20 bg-transparent p-3">
                        <div className="bg-[#03152d] border border-white/20 rounded-[6px] p-4 h-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)]">
"""
single_slot_replace = """
                      <td 
                        colSpan={4} 
                        className={`border-2 border-white/20 bg-transparent p-3 ${getMatchData(slot.title) ? "cursor-pointer hover:bg-white/5 transition-colors" : ""}`}
                        onClick={() => handleTileClick(slot.title)}
                      >
                        <div className="bg-[#03152d] border border-white/20 rounded-[6px] p-4 h-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] pointer-events-none">
"""
content = content.replace(single_slot_search, single_slot_replace)

# Modify parallel session TD
parallel_slot_search = """
                              className={`border-2 border-white/20 ${style ? style.bgCell : "bg-[#09224f] text-white"} p-3 sm:p-5 align-top break-words`}
                            >
"""
parallel_slot_replace = """
                              className={`border-2 border-white/20 ${style ? style.bgCell : "bg-[#09224f] text-white"} p-3 sm:p-5 align-top break-words ${session && getMatchData(session.title, session.items) ? "cursor-pointer hover:brightness-110 transition-all" : ""}`}
                              onClick={() => session && handleTileClick(session.title, session.items)}
                            >
"""
content = content.replace(parallel_slot_search, parallel_slot_replace)

# Add Modal
content = content.replace("</div>\n    </div>\n  );\n}", "</div>\n\n      <AgendaModal isOpen={!!selectedData} onClose={() => setSelectedData(null)} data={selectedData} />\n    </div>\n  );\n}")

with open("components/agenda/AgendaSchedule.tsx", "w") as f:
    f.write(content)

print("AgendaSchedule.tsx updated successfully.")
