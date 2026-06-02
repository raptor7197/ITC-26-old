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
  colSpan?: number;
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
          { hall: "Grand Victoria 1", title: "Tutorial 1", items: ["(90 mins)"] },
          { hall: "Grand Victoria 2", title: "Tutorial 2", items: ["(90 mins)"] },
          { hall: "Arabica & Robusta", title: "Tutorial 3", items: ["(90 mins)"] },
          { hall: "Brain Box", title: "Tutorial 4", items: ["(90 mins)"] },
        ],
      },
      {
        kind: "parallel",
        time: "10:45 AM – 11:15 AM",
        sessions: [
          { hall: "Grand Victoria 1", title: "Tea/Coffee Break", colSpan: 3 },
          { hall: "Brain Box", title: "No Activity Planned" },
        ],
      },
      {
        kind: "parallel",
        time: "11:15 AM – 12:45 PM",
        sessions: [
          { hall: "Grand Victoria 1", title: "Tutorial 5", items: ["(90 mins)"] },
          { hall: "Grand Victoria 2", title: "Tutorial 6", items: ["(90 mins)"] },
          { hall: "Arabica & Robusta", title: "Tutorial 7", items: ["(90 mins)"] },
          { hall: "Brain Box", title: "No Activity Planned" },
        ],
      },
      {
        kind: "parallel",
        time: "12:45 PM – 01:45 PM",
        sessions: [
          { hall: "Grand Victoria 1", title: "Lunch Break", colSpan: 3 },
          { hall: "Brain Box", title: "No Activity Planned" },
        ],
      },
      {
        kind: "parallel",
        time: "01:45 PM – 03:15 PM",
        sessions: [
          { hall: "Grand Victoria 1", title: "Tutorial 8", items: ["(90 mins)"] },
          { hall: "Grand Victoria 2", title: "Tutorial 9", items: ["(90 mins)"] },
          { hall: "Arabica & Robusta", title: "Tutorial 10", items: ["(90 mins)"] },
          { hall: "Brain Box", title: "No Activity Planned" },
        ],
      },
      {
        kind: "parallel",
        time: "03:15 PM – 03:45 PM",
        sessions: [
          { hall: "Grand Victoria 1", title: "Tea/Coffee Break", colSpan: 3 },
          { hall: "Brain Box", title: "No Activity Planned" },
        ],
      },
      {
        kind: "parallel",
        time: "03:45 PM – 05:15 PM",
        sessions: [
          { hall: "Grand Victoria 1", title: "Tutorial 11", items: ["(90 mins)"] },
          { hall: "Grand Victoria 2", title: "Tutorial 12", items: ["(90 mins)"] },
          { hall: "Arabica & Robusta", title: "Tutorial 13", items: ["(90 mins)"] },
          { hall: "Brain Box", title: "No Activity Planned" },
        ],
      },
      {
        kind: "parallel",
        time: "05:15 PM – 06:15 PM",
        sessions: [
          { hall: "Grand Victoria 1", title: "No Activity Planned", colSpan: 3 },
          { hall: "Brain Box", title: "No Activity Planned" },
        ],
      },
      {
        kind: "parallel",
        time: "06:30 PM – 07:45 PM",
        sessions: [
          { hall: "Grand Victoria 1", title: "No Activity Planned", colSpan: 2 },
          { hall: "Arabica & Robusta", title: "TTTC Workshop - Proposal Review" },
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
          "General Co-Chair, ITC India 2026 | Opening Remarks, Conference Highlights, Lamp Lighting by Chief Guests",
        location: "Grand Victoria 1 & 2",
        variant: "plenary",
      },
      {
        kind: "single",
        time: "09:30 AM – 10:00 AM",
        title: "Keynote 1",
        variant: "keynote",
      },
      {
        kind: "single",
        time: "10:00 AM – 10:30 AM",
        title: "Keynote 2",
        variant: "keynote",
      },
      {
        kind: "single",
        time: "10:30 AM – 11:00 AM",
        title: "Keynote 3",
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
        title: "Tea/Coffee Break",
      },
      {
        kind: "parallel",
        time: "11:30 AM – 12:45 PM",
        label: "SESSIONS",
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
            title: "ART Track 1",
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
        label: "SESSIONS",
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
            title: "ART Track 2",
            items: ["Paper 1", "Paper 2", "Hackathon Presentations"],
          },
        ],
      },
      {
        kind: "parallel",
        time: "03:30 PM – 04:00 PM",
        sessions: [
          {
            hall: "Grand Victoria 1",
            title: "Tea/Coffee Break",
            colSpan: 3,
          },
          {
            hall: "Brain Box",
            title: "Poster Session",
            items: ["(ENTRANCE LOBBY)"],
          },
        ],
      },
      {
        kind: "parallel",
        time: "04:00 PM – 04:25 PM",
        sessions: [
          {
            hall: "Grand Victoria 1",
            title: "Distinguished Address 1",
            colSpan: 3,
          },
          {
            hall: "Brain Box",
            title: "Poster Session",
            items: ["(ENTRANCE LOBBY)"],
          },
        ],
      },
      {
        kind: "parallel",
        time: "04:25 PM – 04:50 PM",
        sessions: [
          {
            hall: "Grand Victoria 1",
            title: "Distinguished Address 2",
            colSpan: 3,
          },
          {
            hall: "Brain Box",
            title: "Poster Session",
            items: ["(ENTRANCE LOBBY)"],
          },
        ],
      },
      {
        kind: "parallel",
        time: "04:50 PM – 05:15 PM",
        sessions: [
          {
            hall: "Grand Victoria 1",
            title: "Distinguished Address 3",
            colSpan: 3,
          },
          {
            hall: "Brain Box",
            title: "Poster Session",
            items: ["(ENTRANCE LOBBY)"],
          },
        ],
      },
      {
        kind: "single",
        time: "05:15 PM – 05:30 PM",
        title: "Closing Remarks | General Co-Chairs, ITC India 2026",
        variant: "plenary",
      },
      {
        kind: "break",
        time: "05:30 PM – 06:30 PM",
        title: "BREAK (NO ACTIVITY PLANNED)",
      },
      {
        kind: "single",
        time: "06:30 PM – 08:30 PM",
        title: "Banquet Sit Down Dinner (Invite Only)",
        subtitle:
          "ITC India - 10th Edition Reflections | Felicitation of the Past Chairs, Advisory Committee Members | Panel 2",
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
        title: "Welcome / Day 1 Summary | General Co-Chair, ITC India 2025",
        variant: "plenary",
      },
      {
        kind: "single",
        time: "09:30 AM – 10:00 AM",
        title: "Keynote 4",
        variant: "keynote",
      },
      {
        kind: "single",
        time: "10:00 AM – 10:30 AM",
        title: "Keynote 5",
        variant: "keynote",
      },
      {
        kind: "single",
        time: "10:30 AM – 11:00 AM",
        title: "Keynote 6",
        variant: "keynote",
      },
      {
        kind: "break",
        time: "11:00 AM – 11:30 AM",
        title: "Tea/Coffee Break",
      },
      {
        kind: "parallel",
        time: "11:30 AM – 12:45 PM",
        label: "SESSIONS",
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
        label: "SESSIONS",
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
        title: "Tea/Coffee Break",
      },
      {
        kind: "parallel",
        time: "04:00 PM – 04:25 PM",
        sessions: [
          {
            hall: "Grand Victoria 1",
            title: "Distinguished Address 4",
            colSpan: 2,
          },
          {
            hall: "Arabica & Robusta",
            title: "No Activity Planned",
          },
          {
            hall: "Brain Box",
            title: "Poster Session",
            items: ["(ENTRANCE LOBBY)"],
          },
        ],
      },
      {
        kind: "parallel",
        time: "04:25 PM – 05:30 PM",
        sessions: [
          {
            hall: "Grand Victoria 1",
            title: "Panel 4",
            colSpan: 2,
          },
          {
            hall: "Arabica & Robusta",
            title: "No Activity Planned",
          },
          {
            hall: "Brain Box",
            title: "Poster Session",
            items: ["(ENTRANCE LOBBY)"],
          },
        ],
      },
      {
        kind: "single",
        time: "05:30 PM – 06:00 PM",
        title: "Closing Ceremony | Awards and Valedictory Session | General Co-Chair, ITC India 2026",
        variant: "plenary",
      },
    ],
  },
];
