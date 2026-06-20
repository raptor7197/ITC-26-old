with open("components/agenda/AgendaSchedule.tsx", "r") as f:
    content = f.read()

old_block = """    // Check Distinguished Addresses
    const daMatch = distinguishedAddressesData.find(
      (da) =>
        da.name &&
        (safeTitle.includes(da.name.toLowerCase()) ||
          (items &&
            items.some((item) =>
              item.toLowerCase().includes(da.name.toLowerCase()),
            ))),
    );
    if (daMatch) return daMatch as ModalData;

    // Check Industry Showcase
    const showcaseMatch = industryShowcaseData.find(
      (isc) =>
        isc.name &&
        (safeTitle.includes(isc.name.toLowerCase()) ||
          (items &&
            items.some((item) =>
              item.toLowerCase().includes(isc.name.toLowerCase()),
            ))),
    );
    if (showcaseMatch) return showcaseMatch as ModalData;

    // Check for explicit paper/talk formats (Team X:, ART X:, X.X:, Talk X:)
    const paperRegex = /^(team \d+:|art\d+:?|\d+\.\d+:|talk\s*\d+:?|hackathon opening remarks)/i;
    if (paperRegex.test(safeTitle)) {
      return {
        name: title,
        comingSoon: true,
      };
    }"""

new_block = """    // Check for explicit paper/talk formats (Team X:, ART X:, X.X:, Talk X:)
    const paperRegex = /^(team \d+:|art\d+:?|\d+\.\d+:|talk\s*\d+:?|hackathon opening remarks)/i;
    if (paperRegex.test(safeTitle)) {
      return {
        name: title,
        comingSoon: true,
      };
    }

    // Check Distinguished Addresses
    const daMatch = distinguishedAddressesData.find(
      (da) =>
        da.name &&
        (safeTitle.includes(da.name.toLowerCase()) ||
          (items &&
            items.some((item) =>
              item.toLowerCase().includes(da.name.toLowerCase()),
            ))),
    );
    if (daMatch) return daMatch as ModalData;

    // Check Industry Showcase
    const showcaseMatch = industryShowcaseData.find(
      (isc) =>
        isc.name &&
        (safeTitle.includes(isc.name.toLowerCase()) ||
          (items &&
            items.some((item) =>
              item.toLowerCase().includes(isc.name.toLowerCase()),
            ))),
    );
    if (showcaseMatch) return showcaseMatch as ModalData;"""

content = content.replace(old_block, new_block)

with open("components/agenda/AgendaSchedule.tsx", "w") as f:
    f.write(content)

print("AgendaSchedule patched for match precedence")
