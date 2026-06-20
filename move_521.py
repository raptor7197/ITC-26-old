import re

with open('lib/speakersData.ts', 'r') as f:
    content = f.read()

# The block to find and remove:
pattern = re.compile(r'\}, \{\n\s*id: "521".*?status: "ready",\n', re.DOTALL)
match = pattern.search(content)

if match:
    block = match.group(0)
    # Remove the block from its current location
    content = content[:match.start()] + content[match.end():]
    
    # We want to insert it after the first tutorial.
    # The first tutorial is id: "529". It ends with 'status: "ready",\n}, {' which leads into id: "534".
    # Let's find the first '}, {' after 'id: "529"'
    
    insert_pattern = re.compile(r'id: "529".*?status: "ready",\n', re.DOTALL)
    insert_match = insert_pattern.search(content)
    if insert_match:
        insert_pos = insert_match.end()
        # insert_pos is exactly after 'status: "ready",\n' of 529.
        # So we can insert '}, {\n  id: "521" ... \n' right there.
        # But wait, the original block starts with '}, {'.
        # Let's clean the block to be inserted:
        # Actually, if we insert '}, {\n  id: "521" ... \n' at `insert_pos`, we need to make sure the syntax is correct.
        # Currently at insert_pos, the text is '}, {\n  id: "534"'.
        # So if we insert `}, {\n  id: "521" ... status: "ready",\n` at `insert_pos`, it will result in:
        # ... status: "ready",
        # }, {
        #   id: "521" ... status: "ready",
        # }, {
        #   id: "534" ...
        # This is perfect!
        # Let's extract the clean block from the match:
        clean_block = block
        
        content = content[:insert_pos] + clean_block + content[insert_pos:]
        
        with open('lib/speakersData.ts', 'w') as f:
            f.write(content)
        print("Successfully moved tutorial 521 to the 2nd position.")
    else:
        print("Could not find tutorial 529 to insert after.")
else:
    print("Could not find tutorial 521")
