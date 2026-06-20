with open("lib/agendaData.ts", "r") as f:
    content = f.read()

content = content.replace("export type ParallelSession = {", "export type ParallelSession = {\n  subtitle?: string;")

with open("lib/agendaData.ts", "w") as f:
    f.write(content)
print("Added subtitle to ParallelSession")
