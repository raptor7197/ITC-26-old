export type AgendaSlotVariant =
  | "registration"
  | "break"
  | "lunch"
  | "keynote"
  | "plenary"
  | "parallel"
  | "special"
  | "evening"
  | "none";

export type ParallelSession = {
  hall: string;
  title: string;
  items?: string[];
};

export type AgendaSlot =
  | {
      kind: "single";
      time: string;
      title: string;
      subtitle?: string;
      location?: string;
      variant?: AgendaSlotVariant;
    }
  | {
      kind: "parallel";
      time: string;
      label?: string;
      sessions: ParallelSession[];
    }
  | {
      kind: "break";
      time: string;
      title: string;
    };

export type AgendaDay = {
  id: string;
  label: string;
  date: string;
  subtitle: string;
  slots: AgendaSlot[];
};

export const VENUES = [
  "Grand Victoria 1",
  "Grand Victoria 2",
  "Arabica & Robusta",
  "Brain Box",
] as const;

export const agendaDays: AgendaDay[] = [
  {
    id: "tutorials",
    label: "Day 0",
    date: "Sunday, July 19, 2026",
    subtitle: "Tutorials",
    slots: [
      {
        kind: "single",
        time: "08:00 AM – 09:15 AM",
        title: "Registrations",
        variant: "registration",
      },
      {
        kind: "parallel",
        time: "09:15 AM – 10:45 AM",
        sessions: [
          { hall: "Grand Victoria 1", title: "Tutorial 1", items: ["90 mins"] },
          { hall: "Grand Victoria 2", title: "Tutorial 2", items: ["90 mins"] },
          {
            hall: "Arabica & Robusta",
            title: "Tutorial 3",
            items: ["90 mins"],
          },
          { hall: "Brain Box", title: "Tutorial 4", items: ["90 mins"] },
        ],
      },
      {
        kind: "break",
        time: "10:45 AM – 11:15 AM",
        title: "Tea / Coffee Break",
      },
      {
        kind: "parallel",
        time: "11:15 AM – 12:45 PM",
        sessions: [
          { hall: "Grand Victoria 1", title: "Tutorial 5", items: ["90 mins"] },
          { hall: "Grand Victoria 2", title: "Tutorial 6", items: ["90 mins"] },
          {
            hall: "Arabica & Robusta",
            title: "Tutorial 7",
            items: ["90 mins"],
          },
          { hall: "Brain Box", title: "No Activity Planned" },
        ],
      },
      {
        kind: "break",
        time: "12:45 PM – 01:45 PM",
        title: "Lunch Break",
      },
      {
        kind: "parallel",
        time: "01:45 PM – 03:15 PM",
        sessions: [
          { hall: "Grand Victoria 1", title: "Tutorial 8", items: ["90 mins"] },
          { hall: "Grand Victoria 2", title: "Tutorial 9", items: ["90 mins"] },
          {
            hall: "Arabica & Robusta",
            title: "Tutorial 10",
            items: ["90 mins"],
          },
        ],
      },
      {
        kind: "break",
        time: "03:15 PM – 03:45 PM",
        title: "Tea / Coffee Break",
      },
      {
        kind: "parallel",
        time: "03:45 PM – 05:15 PM",
        sessions: [
          {
            hall: "Grand Victoria 1",
            title: "Tutorial 11",
            items: ["90 mins"],
          },
          {
            hall: "Grand Victoria 2",
            title: "Tutorial 12",
            items: ["90 mins"],
          },
          {
            hall: "Arabica & Robusta",
            title: "Tutorial 13",
            items: ["90 mins"],
          },
        ],
      },
      {
        kind: "single",
        time: "05:15 PM – 06:15 PM",
        title: "No Activity Planned",
        variant: "none",
      },
      {
        kind: "parallel",
        time: "06:30 PM – 07:45 PM",
        sessions: [
          { hall: "Grand Victoria 1", title: "No Activity Planned" },
          { hall: "Grand Victoria 2", title: "No Activity Planned" },
          {
            hall: "Arabica & Robusta",
            title: "TTTC Workshop — Proposal Review",
          },
          { hall: "Brain Box", title: "No Activity Planned" },
        ],
      },
    ],
  },
  {
    id: "day1",
    label: "Day 1",
    date: "Monday, July 20, 2026",
    subtitle: "Conference & Exhibits",
    slots: [
      {
        kind: "single",
        time: "08:00 AM – 09:00 AM",
        title: "Registrations",
        variant: "registration",
      },
      {
        kind: "single",
        time: "09:00 AM – 09:30 AM",
        title: "Conference Inauguration",
        subtitle:
          "Opening Remarks, Conference Highlights, Lamp Lighting by Chief Guests",
        location: "Grand Victoria 1 & 2",
        variant: "plenary",
      },
      {
        kind: "single",
        time: "09:30 AM – 10:00 AM",
        title: "Keynote 1",
        location: "Grand Victoria 1 & 2",
        variant: "keynote",
      },
      {
        kind: "single",
        time: "10:00 AM – 10:30 AM",
        title: "Keynote 2",
        location: "Grand Victoria 1 & 2",
        variant: "keynote",
      },
      {
        kind: "single",
        time: "10:30 AM – 11:00 AM",
        title: "Keynote 3",
        location: "Grand Victoria 1 & 2",
        variant: "keynote",
      },
      {
        kind: "single",
        time: "11:00 AM – 11:05 AM",
        title: "Exhibit Zone Inauguration",
        variant: "special",
      },
      {
        kind: "break",
        time: "11:05 AM – 11:30 AM",
        title: "Tea / Coffee Break",
      },
      {
        kind: "parallel",
        time: "11:30 AM – 12:45 PM",
        label: "Technical Sessions",
        sessions: [
          {
            hall: "Grand Victoria 1",
            title: "Technical Track 1",
            items: ["Paper 1", "Paper 2", "Paper 3"],
          },
          {
            hall: "Grand Victoria 2",
            title: "Technical Track 2",
            items: ["Paper 1", "Paper 2", "Paper 3"],
          },
          {
            hall: "Arabica & Robusta",
            title: "Technical Track 3",
            items: ["Paper 1", "Paper 2", "Paper 3"],
          },
          {
            hall: "Brain Box",
            title: "Academia Research Track 1",
            items: ["Paper 1", "Paper 2", "Paper 3"],
          },
        ],
      },
      {
        kind: "break",
        time: "12:45 PM – 01:45 PM",
        title: "Lunch Break",
      },
      {
        kind: "parallel",
        time: "01:45 PM – 03:30 PM",
        label: "Technical Sessions",
        sessions: [
          {
            hall: "Grand Victoria 1",
            title: "Technical Track 4",
            items: ["Paper 1", "Paper 2", "Paper 3", "Paper 4"],
          },
          {
            hall: "Grand Victoria 2",
            title: "Technical Track 5",
            items: ["Paper 1", "Paper 2", "Paper 3", "Paper 4"],
          },
          {
            hall: "Arabica & Robusta",
            title: "Technical Track 6",
            items: ["Paper 1", "Paper 2", "Paper 3", "Paper 4"],
          },
          {
            hall: "Brain Box",
            title: "Academia Research Track 2 & Hackathon",
            items: ["Paper 1", "Paper 2", "Hackathon Presentations"],
          },
        ],
      },
      {
        kind: "parallel",
        time: "03:30 PM – 05:15 PM",
        sessions: [
          {
            hall: "Entrance Lobby",
            title: "Poster Session",
            items: ["03:30 PM – 05:15 PM"],
          },
          {
            hall: "Grand Victoria",
            title: "Other Events",
            items: [
              "03:30 – 04:00 · Tea / Coffee Break",
              "04:00 – 04:25 · Distinguished Address 1",
              "04:25 – 04:50 · Distinguished Address 2",
              "04:50 – 05:15 · Distinguished Address 3",
            ],
          },
        ],
      },
      {
        kind: "single",
        time: "05:15 PM – 05:30 PM",
        title: "Closing Remarks",
        subtitle: "General Co-Chairs, ITC India 2026",
        variant: "plenary",
      },
      {
        kind: "break",
        time: "05:30 PM – 06:30 PM",
        title: "Break (No Activity Planned)",
      },
      {
        kind: "single",
        time: "06:30 PM – 08:30 PM",
        title: "Banquet Sit-Down Dinner",
        subtitle:
          "Invite Only · ITC India 10th Edition Reflections · Felicitation of Past Chairs & Advisory Committee Members · Panel 2",
        variant: "evening",
      },
    ],
  },
  {
    id: "day2",
    label: "Day 2",
    date: "Tuesday, July 21, 2026",
    subtitle: "Conference & Exhibits",
    slots: [
      {
        kind: "single",
        time: "08:30 AM – 09:00 AM",
        title: "Registrations",
        variant: "registration",
      },
      {
        kind: "single",
        time: "09:00 AM – 09:30 AM",
        title: "Welcome / Day 1 Summary",
        subtitle: "General Co-Chair, ITC India 2025",
        location: "Grand Victoria 1 & 2",
        variant: "plenary",
      },
      {
        kind: "single",
        time: "09:30 AM – 10:00 AM",
        title: "Keynote 4",
        location: "Grand Victoria 1 & 2",
        variant: "keynote",
      },
      {
        kind: "single",
        time: "10:00 AM – 10:30 AM",
        title: "Keynote 5",
        location: "Grand Victoria 1 & 2",
        variant: "keynote",
      },
      {
        kind: "single",
        time: "10:30 AM – 11:00 AM",
        title: "Keynote 6",
        location: "Grand Victoria 1 & 2",
        variant: "keynote",
      },
      {
        kind: "break",
        time: "11:00 AM – 11:30 AM",
        title: "Tea / Coffee Break",
      },
      {
        kind: "parallel",
        time: "11:30 AM – 12:45 PM",
        label: "Technical Sessions",
        sessions: [
          {
            hall: "Grand Victoria 1",
            title: "Industry Session 1",
            items: ["Panel 3", "Talk 1"],
          },
          {
            hall: "Grand Victoria 2",
            title: "Technical Track 7",
            items: ["Paper 1", "Paper 2", "Paper 3"],
          },
          {
            hall: "Arabica & Robusta",
            title: "Technical Track 8",
            items: ["Paper 1", "Paper 2", "Paper 3"],
          },
          {
            hall: "Brain Box",
            title: "Technical Track 9",
            items: ["Paper 1", "Paper 2", "Paper 3"],
          },
        ],
      },
      {
        kind: "break",
        time: "12:45 PM – 01:45 PM",
        title: "Lunch Break",
      },
      {
        kind: "parallel",
        time: "01:45 PM – 03:30 PM",
        label: "Technical Sessions",
        sessions: [
          {
            hall: "Grand Victoria 1",
            title: "Industry Session 2",
            items: ["Talk 2", "Talk 3", "Talk 4", "Talk 5"],
          },
          {
            hall: "Grand Victoria 2",
            title: "Paper Session 10",
            items: ["Paper 1", "Paper 2", "Paper 3", "Paper 4"],
          },
          {
            hall: "Arabica & Robusta",
            title: "Paper Session 11 (TRC)",
            items: ["Paper 1", "Paper 2", "Paper 3", "Paper 4"],
          },
          {
            hall: "Brain Box",
            title: "Special Session",
            items: ["TBD"],
          },
        ],
      },
      {
        kind: "break",
        time: "03:30 PM – 04:00 PM",
        title: "Tea / Coffee Break",
      },
      {
        kind: "parallel",
        time: "04:00 PM – 05:30 PM",
        sessions: [
          {
            hall: "Entrance Lobby",
            title: "Poster Session",
            items: ["04:00 PM – 05:30 PM"],
          },
          {
            hall: "Grand Victoria 1 & 2",
            title: "Other Events",
            items: [
              "04:00 – 04:25 · Distinguished Address 4",
              "04:25 – 05:30 · Panel 4",
            ],
          },
        ],
      },
      {
        kind: "single",
        time: "05:30 PM – 06:00 PM",
        title: "Closing Ceremony",
        subtitle:
          "Awards and Valedictory Session · General Co-Chair, ITC India 2026",
        location: "Grand Victoria 1 & 2",
        variant: "plenary",
      },
    ],
  },
];
