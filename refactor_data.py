import re

def extract_array_block(filepath, var_name):
    with open(filepath, 'r') as f:
        content = f.read()
        
    start_str = f"const {var_name} = ["
    start_idx = content.find(start_str)
    if start_idx == -1: return None, content
    
    bracket_count = 0
    in_string = False
    escape = False
    
    for i in range(start_idx + len(f"const {var_name} = "), len(content)):
        c = content[i]
        
        if escape:
            escape = False
            continue
            
        if c == '\\':
            escape = True
            continue
            
        if c == '"' or c == "'":
            if not in_string:
                in_string = c
            elif in_string == c:
                in_string = False
            continue
            
        if not in_string:
            if c == '[':
                bracket_count += 1
            elif c == ']':
                if bracket_count == 0:
                    arr_str = content[start_idx:i+1]
                    # We also want to remove the semicolon if it exists
                    end_idx = i + 1
                    if end_idx < len(content) and content[end_idx] == ';':
                        end_idx += 1
                    new_content = content[:start_idx] + content[end_idx:]
                    return arr_str, new_content
                bracket_count -= 1
    return None, content

keynote_arr, new_keynote = extract_array_block("app/keynote/page.tsx", "speakers")
industry_arr, new_industry = extract_array_block("app/industry-sessions/page.tsx", "speakers")
tutorials_arr, new_tutorials = extract_array_block("app/tutorials/page.tsx", "tutorials")

with open("lib/speakersData.ts", "w") as f:
    f.write(f"export {keynote_arr.replace('const speakers', 'const keynoteSpeakers')};\n\n")
    f.write(f"export {industry_arr.replace('const speakers', 'const industrySpeakers')};\n\n")
    f.write(f"export {tutorials_arr.replace('const tutorials', 'const tutorialsData')};\n")

# Inject import statements
new_keynote = 'import { keynoteSpeakers as speakers } from "@/lib/speakersData";\n' + new_keynote
new_industry = 'import { industrySpeakers as speakers } from "@/lib/speakersData";\n' + new_industry
new_tutorials = 'import { tutorialsData as tutorials } from "@/lib/speakersData";\n' + new_tutorials

with open("app/keynote/page.tsx", "w") as f:
    f.write(new_keynote)

with open("app/industry-sessions/page.tsx", "w") as f:
    f.write(new_industry)

with open("app/tutorials/page.tsx", "w") as f:
    f.write(new_tutorials)

print("Refactored data successfully!")
