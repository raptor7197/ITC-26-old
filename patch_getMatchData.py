with open("components/agenda/AgendaSchedule.tsx", "r") as f:
    content = f.read()

# Current getMatchData for tutorials:
#     const tutorialMatch = tutorialsData.find(
#       (t) =>
#         t.title &&
#         (t.title.toLowerCase() === safeTitle ||
#           safeTitle.includes(t.title.toLowerCase())),
#     );

new_logic = """    const tutorialMatch = tutorialsData.find(
      (t) =>
        (t.title && (t.title.toLowerCase() === safeTitle || safeTitle.includes(t.title.toLowerCase()))) ||
        (t.authors && t.authors.some(a => safeTitle.includes(a.name.toLowerCase()) || a.name.toLowerCase().includes(safeTitle))) ||
        (items && items.some(item => t.authors && t.authors.some(a => item.toLowerCase().includes(a.name.toLowerCase()))))
    );"""

import re
content = re.sub(
    r'const tutorialMatch = tutorialsData\.find\([\s\S]*?safeTitle\.includes\(t\.title\.toLowerCase\(\)\)\),\s*\);',
    new_logic,
    content
)

with open("components/agenda/AgendaSchedule.tsx", "w") as f:
    f.write(content)
