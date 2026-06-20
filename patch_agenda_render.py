with open("components/agenda/AgendaSchedule.tsx", "r") as f:
    content = f.read()

import re

# We want to replace the `session ? (` block in the `parallel` rendering
# Old:
#                                 {session ? (
#                                   <div className="flex flex-col h-full">
#                                     <h4 className="font-medium text-[14px] leading-[1.4] text-white mb-4">
#                                       {session.title}

old_block = """                                {session ? (
                                  <div className="flex flex-col h-full">
                                    <h4 className="font-medium text-[14px] leading-[1.4] text-white mb-4">
                                      {session.title}
                                    </h4>"""

new_block = """                                {session ? (
                                  session.title.toLowerCase().includes("distinguished address") ? (
                                    <div className="bg-[#03152d] border border-white/20 rounded-[6px] p-4 sm:p-5 h-full shadow-[inset_0_2px_4px_rgba(0,0,0,0.4)] pointer-events-none flex flex-col justify-center items-center text-center min-h-[100px]">
                                      <div>
                                        <div className="font-bold text-white text-base sm:text-lg">
                                          {session.title}
                                        </div>
                                      </div>
                                      {session.location && (
                                        <div className="flex items-center justify-center gap-1.5 mt-3 text-xs sm:text-sm font-semibold text-sky-400">
                                          {ICONS.location}
                                          <span>{session.location}</span>
                                        </div>
                                      )}
                                    </div>
                                  ) : (
                                  <div className="flex flex-col h-full">
                                    <h4 className="font-medium text-[14px] leading-[1.4] text-white mb-4">
                                      {session.title}
                                    </h4>
                                    {session.subtitle && (
                                      <div className="text-xs sm:text-sm text-sky-200 mt-[-8px] mb-4 font-bold italic">
                                        {session.subtitle}
                                      </div>
                                    )}"""

# We also need to close the ternary properly!
# Old:
#                                       {session.location && (
#                                         <div className="flex items-center gap-1.5 text-xs font-semibold text-sky-400">
#                                           {ICONS.location}
#                                           <span>{session.location}</span>
#                                         </div>
#                                       )}
#                                     </div>
#                                   </div>
#                                 ) : (

old_close = """                                      {session.location && (
                                        <div className="flex items-center gap-1.5 text-xs font-semibold text-sky-400">
                                          {ICONS.location}
                                          <span>{session.location}</span>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                ) : ("""

new_close = """                                      {session.location && (
                                        <div className="flex items-center gap-1.5 text-xs font-semibold text-sky-400">
                                          {ICONS.location}
                                          <span>{session.location}</span>
                                        </div>
                                      )}
                                    </div>
                                  </div>
                                  )
                                ) : ("""

if old_block in content and old_close in content:
    content = content.replace(old_block, new_block)
    content = content.replace(old_close, new_close)
    with open("components/agenda/AgendaSchedule.tsx", "w") as f:
        f.write(content)
    print("AgendaSchedule.tsx patched successfully!")
else:
    print("Could not find the blocks to replace in AgendaSchedule.tsx")
