import re
import json

def get_block(filepath, var_name, component_name):
    with open(filepath, "r") as f:
        content = f.read()
    
    # We find "const var_name = ["
    start_str = f"const {var_name} = ["
    start_idx = content.find(start_str)
    
    # We find "export default function component_name"
    end_str = f"export default function {component_name}"
    end_idx = content.find(end_str)
    
    if start_idx == -1 or end_idx == -1:
        return None, content
        
    # The array block is everything from start_idx up to end_idx, minus any trailing whitespace/semicolons
    # Actually, it's safer to just extract from start_idx to the last "];" before end_idx
    block_end = content.rfind("];", start_idx, end_idx) + 2
    
    array_str = content[start_idx:block_end]
    new_content = content[:start_idx] + content[block_end:]
    return array_str, new_content

k_arr, k_content = get_block("app/keynote/page.tsx", "speakers", "Keynote")
i_arr, i_content = get_block("app/industry-sessions/page.tsx", "speakers", "IndustrySessions")

# For tutorials, we can use the JSON file we made earlier!
with open("tutorials_data_v3.json", "r") as f:
    t_data = f.read()

t_arr = f"const tutorialsData = {t_data};"
t_content = ""
with open("app/tutorials/page.tsx", "r") as f:
    t_content_raw = f.read()
    start_idx = t_content_raw.find("const tutorials = [")
    end_idx = t_content_raw.find("export default function Tutorials")
    if start_idx != -1 and end_idx != -1:
        t_content = t_content_raw[:start_idx] + t_content_raw[end_idx:]

with open("lib/speakersData.ts", "w") as f:
    f.write(k_arr.replace("const speakers", "export const keynoteSpeakers") + "\n\n")
    f.write(i_arr.replace("const speakers", "export const industrySpeakers") + "\n\n")
    f.write(t_arr.replace("const tutorialsData", "export const tutorialsData") + "\n")

k_content = 'import { keynoteSpeakers as speakers } from "@/lib/speakersData";\n' + k_content
i_content = 'import { industrySpeakers as speakers } from "@/lib/speakersData";\n' + i_content
t_content = 'import { tutorialsData as tutorials } from "@/lib/speakersData";\n' + t_content

with open("app/keynote/page.tsx", "w") as f:
    f.write(k_content)

with open("app/industry-sessions/page.tsx", "w") as f:
    f.write(i_content)

with open("app/tutorials/page.tsx", "w") as f:
    f.write(t_content)

print("Extraction successful.")
