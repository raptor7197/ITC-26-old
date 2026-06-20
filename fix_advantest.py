import re

with open("lib/agendaData.ts", "r") as f:
    content = f.read()

content = content.replace("""      {
        kind: "parallel",
        time: "04:00 PM – 04:25 PM",
        sessions: [
          {
            hall: "Grand Victoria 1",
            title: "Distinguished Address: Advantest",
            colSpan: 3,
            location: "Grand Victoria 1 & 2",
          },
          {
            hall: "Brain Box",
            title: "Poster Session",
            location: "ENTRANCE LOBBY",
            rowSpan: 2,
          },
        ],
      },""", """      {
        kind: "parallel",
        time: "04:00 PM – 04:25 PM",
        sessions: [
          {
            hall: "Grand Victoria 1",
            title: "Distinguished Address: Advantest",
            colSpan: 3,
            location: "Grand Victoria 1 & 2",
          },
          {
            hall: "Brain Box",
            title: "Poster Session",
            location: "ENTRANCE LOBBY",
            rowSpan: 2,
          },
        ],
      },""".replace("parallel", "single_with_parallel"))

# Wait, if I change kind to "single", what happens to the Poster Session in Brain Box?
# The Poster Session is in the same time slot but on a different track! 
# "Single" slots span the ENTIRE width. You CANNOT have a "single" slot AND a parallel track in the same time block in this data structure!
