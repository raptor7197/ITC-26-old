with open("lib/speakersData.ts", "r") as f:
    content = f.read()

replacements = [
    ('affiliation: "Director of Solutions Engineering at Synopsys",', 'affiliation: "Director of Solutions Engineering, Synopsys",'),
    ('affiliation: "Staff Solutions Engineer at Synopsys",', 'affiliation: "Staff Solutions Engineer, Synopsys",'),
    ('affiliation: "Staff Applications Engineer at Synopsys",', 'affiliation: "Staff Applications Engineer, Synopsys",'),
    ('affiliation: "Staff Engineer at Qualcomm",', 'affiliation: "Staff Engineer, Qualcomm",'),
    ('affiliation: "Test Engineer at Caliber Interconnect Solutions",', 'affiliation: "Test Engineer, Caliber Interconnect Solutions",'),
    ('affiliation:\n        "Director of Semiconductor Test Engineering at Caliber Interconnect Solutions",', 'affiliation:\n        "Director of Semiconductor Test Engineering, Caliber Interconnect Solutions",'),
    ('affiliation: "Senior Test Engineer at Caliber Interconnect Solutions",', 'affiliation: "Senior Test Engineer, Caliber Interconnect Solutions",')
]

for old, new in replacements:
    content = content.replace(old, new)

with open("lib/speakersData.ts", "w") as f:
    f.write(content)

print("Replaced all occurrences")
