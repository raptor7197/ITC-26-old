with open("components/agenda/AgendaSchedule.tsx", "r") as f:
    content = f.read()

# 1. Fix the td className
old_td_className = """                                className={
                                  isParallelBreak
                                    ? "bg-[#0b172a]/80 backdrop-blur-sm border-y-2 border-white/10 p-3 sm:p-4 align-middle"
                                    : `border-2 border-white/20 ${style ? style.bgCell : "bg-[#09224f] text-white"} p-3 sm:p-5 align-top break-words ${session && getMatchData(session.title, session.items) ? "cursor-pointer hover:brightness-110 transition-all" : ""}`
                                }"""

new_td_className = """                                className={
                                  isParallelBreak
                                    ? "border-2 border-white/20 bg-transparent p-3 text-center align-middle"
                                    : `border-2 border-white/20 ${style ? style.bgCell : "bg-[#09224f] text-white"} p-3 sm:p-5 align-top break-words ${session && getMatchData(session.title, session.items) ? "cursor-pointer hover:brightness-110 transition-all" : ""}`
                                }"""

content = content.replace(old_td_className, new_td_className)

# 2. Fix the inner content
old_inner = """                                {session ? (
                                  isParallelBreak ? (
                                    <div className="flex items-center justify-center gap-3 text-[#a3b8cc] font-medium text-[13px] sm:text-[15px] uppercase tracking-wider text-center h-full">
                                      {ICONS.break}
                                      <span>{session.title}</span>
                                    </div>
                                  ) : session.title.toLowerCase().includes("distinguished address") ? ("""

new_inner = """                                {session ? (
                                  isParallelBreak ? (
                                    <div className="flex items-center justify-center gap-3 bg-[#03152d] border border-white/20 rounded-xl mx-2 py-3 shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] h-full min-h-[50px]">
                                      {session.title.toLowerCase().includes("lunch") ? ICONS.lunch : ICONS.coffee}
                                      <span className="text-[13px] font-bold tracking-[0.2em] uppercase text-sky-400">
                                        {session.title}
                                      </span>
                                    </div>
                                  ) : session.title.toLowerCase().includes("distinguished address") ? ("""

content = content.replace(old_inner, new_inner)

with open("components/agenda/AgendaSchedule.tsx", "w") as f:
    f.write(content)

print("AgendaSchedule patched for parallel break slots")
