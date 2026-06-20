import re

with open('lib/speakersData.ts', 'r') as f:
    content = f.read()

ids_to_extract = ["529", "521", "497", "chiplet", "533", "510", "p2929", "525", "487", "531", "534", "504", "342"]
blocks = {}

for tid in ids_to_extract:
    # Find the id line
    id_pattern = r'\s*id:\s*"' + tid + r'",'
    match = re.search(id_pattern, content)
    if not match:
        print(f"Could not find id {tid}")
        continue
        
    start_id_idx = match.start()
    start_idx = content.rfind('{', 0, start_id_idx)
    
    status_match = re.search(r'status:\s*"ready",?', content[start_idx:])
    if not status_match:
        print(f"Could not find status: ready for {tid}")
        continue
        
    status_end_idx = start_idx + status_match.end()
    end_idx = content.find('}', status_end_idx) + 1
    
    block_text = content[start_idx:end_idx]
    
    if tid in ["chiplet", "p2929"]:
        block_text = re.sub(r'abstract:\s*".*?",', 'abstract: "More info coming soon.",', block_text)
        
    blocks[tid] = block_text
    
    content = content[:start_idx] + "/* REMOVED */" + content[end_idx:]

content = re.sub(r'/\* REMOVED \*/\s*,\s*', '/* REMOVED */', content)
content = re.sub(r',\s*/\* REMOVED \*/', '/* REMOVED */', content)
content = content.replace('/* REMOVED */', '')

insert_match = re.search(r'export const tutorialsData = \[\s*', content)
if insert_match:
    insert_idx = insert_match.end()
    
    ordered_blocks = []
    for tid in ids_to_extract:
        if tid in blocks:
            ordered_blocks.append(blocks[tid])
            
    insert_str = ",\n".join(ordered_blocks)
    
    next_char = content[insert_idx:].strip()
    if next_char.startswith('{'):
        insert_str += ",\n"
        
    content = content[:insert_idx] + insert_str + content[insert_idx:]
    
    with open('lib/speakersData.ts', 'w') as f:
        f.write(content)
    print("Reordered successfully!")
else:
    print("Could not find tutorialsData array")

