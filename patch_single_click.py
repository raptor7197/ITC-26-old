with open("components/agenda/AgendaSchedule.tsx", "r") as f:
    content = f.read()

import re

# Find the map block for session.items
# We want to change the rendering of the item div.

old_block = """                                              const itemMatch = getMatchData(item);
                                              return (
                                                <div
                                                  key={idx}
                                                  className={`flex items-start gap-2 text-[12px] font-normal leading-[1.3] ${
                                                    itemMatch
                                                      ? "text-sky-300 cursor-pointer hover:text-white transition-colors"
                                                      : "text-[#a3b8cc]"
                                                  }`}
                                                  onClick={(e) => {
                                                    if (itemMatch) {
                                                      e.stopPropagation();
                                                      handleTileClick(item);
                                                    }
                                                  }}
                                                  {...(itemMatch ? { "title": "Click to read more details" } : {})}
                                                >
                                                  {["day1", "day2"].includes(activeId)
                                                    ? ICONS.bullet
                                                    : ICONS.user}
                                                  <span>{item}</span>
                                                </div>"""

new_block = """                                              const itemMatch = getMatchData(item);
                                              const isTutorialTile = activeId === "tutorials" && session.title !== "ITC-at-ITC";
                                              const isItemClickable = itemMatch && !isTutorialTile;
                                              
                                              return (
                                                <div
                                                  key={idx}
                                                  className={`flex items-start gap-2 text-[12px] font-normal leading-[1.3] ${
                                                    isItemClickable
                                                      ? "text-sky-300 cursor-pointer hover:text-white transition-colors"
                                                      : isTutorialTile ? "text-sky-300" : "text-[#a3b8cc]"
                                                  }`}
                                                  onClick={(e) => {
                                                    if (isItemClickable) {
                                                      e.stopPropagation();
                                                      handleTileClick(item);
                                                    }
                                                  }}
                                                  {...(isItemClickable ? { "title": "Click to read more details" } : {})}
                                                >
                                                  {["day1", "day2"].includes(activeId)
                                                    ? ICONS.bullet
                                                    : ICONS.user}
                                                  <span>{item}</span>
                                                </div>"""

if old_block in content:
    content = content.replace(old_block, new_block)
    with open("components/agenda/AgendaSchedule.tsx", "w") as f:
        f.write(content)
    print("Successfully patched single-click tiles for tutorials.")
else:
    print("Could not find the block to replace!")
