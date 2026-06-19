import re

# Read files
with open("app/keynote/page.tsx", "r") as f:
    keynote_content = f.read()

with open("app/industry-sessions/page.tsx", "r") as f:
    industry_content = f.read()

with open("app/tutorials/page.tsx", "r") as f:
    tutorials_content = f.read()

# Extract arrays
def extract_array(content, var_name):
    start_str = f"const {var_name} = ["
    start_idx = content.find(start_str)
    if start_idx == -1: return None
    
    # We need to find the matching closing bracket.
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
                    return content[start_idx:i+1]
                bracket_count -= 1
                
    return None

keynote_arr = extract_array(keynote_content, "speakers")
industry_arr = extract_array(industry_content, "speakers")
tutorials_arr = extract_array(tutorials_content, "tutorials")

with open("lib/speakersData.ts", "w") as f:
    f.write("export " + keynote_arr.replace("const speakers", "const keynoteSpeakers") + ";\n\n")
    f.write("export " + industry_arr.replace("const speakers", "const industrySpeakers") + ";\n\n")
    f.write("export " + tutorials_arr.replace("const tutorials", "const tutorialsData") + ";\n")

print("Created lib/speakersData.ts")
