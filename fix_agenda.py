with open("lib/agendaData.ts", "r") as f:
    content = f.read()

# 1. SanDisk to Sandisk
content = content.replace("SanDisk", "Sandisk")

# 2. ITC-at-ITC to ITC& @ITC
content = content.replace(
    'title: "ITC-at-ITC", items: ["Talk1", "Talk2", "Break", "Talk3", "Talk4", "Break", "Panel: Correlation Crisis in Semiconductor Test: Can AI Bridge the Gap? Moderator: Sameer Chillarige"], rowSpan: 4',
    'title: "ITC& @ITC", subtitle: "*invite only session", items: ["Talk1", "Talk2", "Break", "Talk3", "Talk4", "Break", "Panel: Correlation Crisis in Semiconductor Test: Can AI Bridge the Gap? Moderator: Sameer Chillarige"], rowSpan: 4'
)

# 3. No Activity Planned
content = content.replace('title: "No Activity Planned"', 'title: ""')

with open("lib/agendaData.ts", "w") as f:
    f.write(content)
print("Agenda fixed")
