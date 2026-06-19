import json

with open("tutorials_data_v3.json", "r") as f:
    tutorials_data = f.read()

with open("app/tutorials/page.tsx", "r") as f:
    content = f.read()

# We need to replace the `const tutorials = [...]` block.
import re

# Find the start of `const tutorials = [`
start_idx = content.find("const tutorials = [")

# Find the end of `];` before `export default function Tutorials`
end_idx = content.find("export default function Tutorials")

if start_idx != -1 and end_idx != -1:
    new_content = content[:start_idx] + "const tutorials = " + tutorials_data + ";\n\n" + content[end_idx:]
    with open("app/tutorials/page.tsx", "w") as f:
        f.write(new_content)
    print("Updated app/tutorials/page.tsx successfully!")
else:
    print("Could not find the tutorials array.")
