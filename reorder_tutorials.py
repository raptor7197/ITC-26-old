import re

with open('lib/speakersData.ts', 'r') as f:
    content = f.read()

# The block to find and remove:
pattern = re.compile(r'\}, \{\n\s*id: "529".*?status: "ready",\n', re.DOTALL)
match = pattern.search(content)
if match:
    block = match.group(0)
    # Remove the block
    content = content[:match.start()] + content[match.end():]
    
    # Strip the leading '}, {' and trailing '\n' to format it to insert at top
    # The block is '}, {\n  id: "529" ... \n'
    clean_block = '{\n' + block.split('{\n', 1)[1]
    
    # Add '}, ' to the end
    clean_block = clean_block + '}, '
    
    # Replace 'export const tutorialsData = [{' with 'export const tutorialsData = [' + clean_block + '{'
    content = content.replace('export const tutorialsData = [{', 'export const tutorialsData = [' + clean_block + '{')
    
    with open('lib/speakersData.ts', 'w') as f:
        f.write(content)
    print("Successfully moved tutorial 529 to the top.")
else:
    print("Could not find tutorial 529")
