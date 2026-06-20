import re

with open('lib/speakersData.ts', 'r') as f:
    content = f.read()

ids_to_extract = ["529", "521", "497", "chiplet", "533", "510", "p2929", "525"]
blocks = {}

# We will match each block. Since the format is consistent:
for tid in ids_to_extract:
    # Find the id line
    id_pattern = r'\s*id:\s*"' + tid + r'",'
    match = re.search(id_pattern, content)
    if not match:
        print(f"Could not find id {tid}")
        continue
        
    start_id_idx = match.start()
    
    # Find the preceding '{'
    start_idx = content.rfind('{', 0, start_id_idx)
    
    # Find the trailing 'status: "ready"'
    status_match = re.search(r'status:\s*"ready",?', content[start_idx:])
    if not status_match:
        print(f"Could not find status: ready for {tid}")
        continue
        
    status_end_idx = start_idx + status_match.end()
    
    # Find the closing '}'
    end_idx = content.find('}', status_end_idx) + 1
    
    # Extract the block
    block_text = content[start_idx:end_idx]
    
    # If chiplet or p2929, replace abstract
    if tid in ["chiplet", "p2929"]:
        block_text = re.sub(r'abstract:\s*".*?",', 'abstract: "More info coming soon.",', block_text)
        
    blocks[tid] = block_text
    
    # Replace the block with an empty string, and handle the comma
    # It might be followed by `,` or preceded by `,`
    # We will just replace it with empty string. We will clean up `[,` or `,,` or `,]` later.
    # To be safe, let's just replace the block with `/* REMOVED */`
    content = content[:start_idx] + "/* REMOVED */" + content[end_idx:]

# Clean up the array
content = re.sub(r'/\* REMOVED \*/\s*,\s*', '/* REMOVED */', content)
content = re.sub(r',\s*/\* REMOVED \*/', '/* REMOVED */', content)
content = content.replace('/* REMOVED */', '')

# Now we need to insert the blocks at the beginning of tutorialsData
# Find 'export const tutorialsData = ['
insert_match = re.search(r'export const tutorialsData = \[\s*', content)
if insert_match:
    insert_idx = insert_match.end()
    
    # Build the inserted string
    ordered_blocks = []
    for tid in ids_to_extract:
        if tid in blocks:
            ordered_blocks.append(blocks[tid])
            
    insert_str = ",\n".join(ordered_blocks)
    
    # If there are remaining tutorials, we need a comma after our inserted blocks
    # Check if there's anything after insert_idx before the '];'
    next_char = content[insert_idx:].strip()
    if next_char.startswith('{'):
        insert_str += ",\n"
        
    content = content[:insert_idx] + insert_str + content[insert_idx:]
    
    with open('lib/speakersData.ts', 'w') as f:
        f.write(content)
    print("Reordered successfully!")
else:
    print("Could not find tutorialsData array")

