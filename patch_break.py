with open("components/agenda/AgendaSchedule.tsx", "r") as f:
    content = f.read()

# 1. We need to add `const isParallelBreak = session && session.title.toLowerCase().includes("break");`
old_colSpan = "const colSpan = session?.colSpan || 1;"
new_colSpan = """const colSpan = session?.colSpan || 1;
                            const isParallelBreak = session && session.title.toLowerCase().includes("break");"""

content = content.replace(old_colSpan, new_colSpan)

# 2. We need to replace the `<td>` className
old_td_className = """                                className={`border-2 border-white/20 ${style ? style.bgCell : "bg-[#09224f] text-white"} p-3 sm:p-5 align-top break-words ${session && getMatchData(session.title, session.items) ? "cursor-pointer hover:brightness-110 transition-all" : ""}`}"""
new_td_className = """                                className={
                                  isParallelBreak
                                    ? "bg-[#0b172a]/80 backdrop-blur-sm border-y-2 border-white/10 p-3 sm:p-4 align-middle"
                                    : `border-2 border-white/20 ${style ? style.bgCell : "bg-[#09224f] text-white"} p-3 sm:p-5 align-top break-words ${session && getMatchData(session.title, session.items) ? "cursor-pointer hover:brightness-110 transition-all" : ""}`
                                }"""

content = content.replace(old_td_className, new_td_className)

# 3. We need to replace the `{session ? (` inner content to check for isParallelBreak
old_inner = """                                {session ? (
                                  session.title.toLowerCase().includes("distinguished address") ? ("""
new_inner = """                                {session ? (
                                  isParallelBreak ? (
                                    <div className="flex items-center justify-center gap-3 text-[#a3b8cc] font-medium text-[13px] sm:text-[15px] uppercase tracking-wider text-center h-full">
                                      {ICONS.break}
                                      <span>{session.title}</span>
                                    </div>
                                  ) : session.title.toLowerCase().includes("distinguished address") ? ("""

content = content.replace(old_inner, new_inner)

with open("components/agenda/AgendaSchedule.tsx", "w") as f:
    f.write(content)

print("AgendaSchedule patched for parallel break slots")
