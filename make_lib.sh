#!/bin/bash
echo 'export const keynoteSpeakers = [' > lib/speakersData.ts
sed -n '4,64p' app/keynote/page.tsx >> lib/speakersData.ts
echo '];' >> lib/speakersData.ts
echo '' >> lib/speakersData.ts

echo 'export const industrySpeakers = [' >> lib/speakersData.ts
sed -n '5,28p' app/industry-sessions/page.tsx >> lib/speakersData.ts
echo '];' >> lib/speakersData.ts
echo '' >> lib/speakersData.ts

echo 'export const tutorialsData = [' >> lib/speakersData.ts
sed -n '4,320p' app/tutorials/page.tsx >> lib/speakersData.ts
echo '];' >> lib/speakersData.ts

# Now modify the files to import them
sed -i '3,65c\import { keynoteSpeakers as speakers } from "@/lib/speakersData";' app/keynote/page.tsx
sed -i '4,29c\import { industrySpeakers as speakers } from "@/lib/speakersData";' app/industry-sessions/page.tsx
sed -i '3,321c\import { tutorialsData as tutorials } from "@/lib/speakersData";' app/tutorials/page.tsx

