import re

files = [
    "app/cfp/page.tsx",
    "app/cft/page.tsx",
    "app/art/page.tsx",
    "app/call-for-posters/page.tsx",
    "app/call-for-workshop/page.tsx",
    "app/hackathon/page.tsx",
    "app/fellowship/page.tsx",
]

for file in files:
    with open(file, "r") as f:
        content = f.read()

    if "import PageHeader" not in content:
        content = re.sub(r'import Image from "next/image";', 'import Image from "next/image";\nimport PageHeader from "@/components/ui/PageHeader";', content)

    title = "TITLE"
    if "call-for-workshop" in file:
        title = "CALL FOR WORKSHOP"
    elif "call-for-posters" in file:
        title = "CALL FOR POSTERS"
    elif "art" in file:
        title = "ACADEMIA RESEARCH TRACK"
    elif "fellowship" in file:
        title = "FELLOWSHIP PROGRAM"
    elif "hackathon" in file:
        title = "HACKATHON"
    elif "cfp" in file:
        title = "CALL FOR PAPERS"
    elif "cft" in file:
        title = "CALL FOR TUTORIALS"

    start_str = '<div className="text-center mb-16">'
    start_idx = content.find(start_str)
    
    if start_idx != -1:
        # Find the matching closing div
        div_count = 0
        end_idx = -1
        i = start_idx
        while i < len(content):
            if content[i:i+4] == "<div":
                div_count += 1
                i += 4
            elif content[i:i+6] == "</div>":
                div_count -= 1
                if div_count == 0:
                    end_idx = i + 6
                    break
                i += 6
            else:
                i += 1
        
        if end_idx != -1:
            replacement = f'<PageHeader title="{title}" />'
            content = content[:start_idx] + replacement + content[end_idx:]

    with open(file, "w") as f:
        f.write(content)

