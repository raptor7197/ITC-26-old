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
    subtitle: "Tutorials & Industry Test Challenge",
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
          { hall: "Grand Victoria 1", title: "Squeezing Quality into Cents: DFT Strategies for Low-cost MCUs", items: ["Vishal Diwan and Mudasir Kawoosa (Texas Instruments)"] },
          { hall: "Grand Victoria 2", title: "LLM for VLSI Design, Automation and Test", items: ["Chandan Karfa (IIT Guwahati)"] },
          { hall: "Arabica & Robusta", title: "Mission Mode Scan Dump Using IJTAG and TAP Customization: Architecture, Implementation, and Practical Considerations", items: ["Sreekanth G Pai and Raseena KA (Marvell)"] },
          { hall: "Brain Box", title: "Testing Chiplet-Based 2.5D/3D ICs : An Academia/Industry perspective", items: ["Binod Kumar, Manisha Kumari (IIT Jodhpur), Jaynarayan T Tudu (IIT Tirupati), Jyotirmoy Saikia and Sagar Kumar (Cadence)"] },
        ],
      },
      {
        kind: "break",
        time: "10:45 AM – 11:15 AM",
        title: "Tea/Coffee Break",
      },
      {
        kind: "parallel",
        time: "11:15 AM – 12:45 PM",
        sessions: [
          { hall: "Grand Victoria 1", title: "Closed Loop Test Engineering - From Design to Mass Production", items: ["Maheedhar Jalasutram (Google)"] },
          { hall: "Grand Victoria 2", title: "Machine Learning is Inevitable or Not: A DFT Designer’s View", items: ["Ankush Srivastava (Qualcomm)"] },
          { hall: "Arabica & Robusta", title: "Beyond Scan Dump: Why IEEE P2929 Enables True Scan State Extraction", items: ["Lee Harrison, Andy Hughes and Peter Orlando (Siemens EDA)"] },
          { hall: "Brain Box", title: "Testing Chiplet-Based 2.5D/3D ICs : An Academia/Industry perspective", items: ["Binod Kumar, Manisha Kumari (IIT Jodhpur), Jaynarayan T Tudu (IIT Tirupati), Jyotirmoy Saikia and Sagar Kumar (Cadence)"] },
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
          { hall: "Grand Victoria 1", title: "Testing to Self Testing: Self Test Driven Functional Safety for ISO 26262 Compliant Automotive SoCs", items: ["Rajesh Kumar Tiwari and Mohammed Zuber P Malek (Qualcomm)"] },
          { hall: "Grand Victoria 2", title: "The Seamless Integration of Packetized scan and In-system test with Advanced ATE Equipment", items: ["Lee Harrison (Siemens EDA)"] },
          { hall: "Arabica & Robusta", title: "Advanced Test Data Analytics for Yield and Quality Improvement", items: ["Navya Rastogi, Shamitha Rao, Shrestha Hota (Synopsys) and Soumya Mittal (Qualcomm)"] },
          { hall: "Brain Box", title: "No Activity Planned" },
        ],
      },
      {
        kind: "break",
        time: "03:15 PM – 03:45 PM",
        title: "Tea/Coffee Break",
      },
      {
        kind: "parallel",
        time: "03:45 PM – 05:15 PM",
        sessions: [
          { hall: "Grand Victoria 1", title: "Understanding Test Escapes and the Limitations of Scan DFT Testing", items: ["Adit Singh (Auburn university)"] },
          { hall: "Grand Victoria 2", title: "Scalable ATE Hardware Design: From Concept to Manufacturing with Reusable Architecture", items: ["Lokapriya B, Senthilkumar Dhamodharan and Vaishnavi Saravanan (Caliber Interconnects)"] },
          { hall: "Arabica & Robusta", title: "Customer Centric Post Silicon Validation Approach for System on Chip (SoC)", items: ["Ravishankar Manishankar and Siloni Pilani (Intel)"] },
          { hall: "Brain Box", title: "No Activity Planned" },
        ],
      },
      {
        kind: "parallel",
        time: "05:15 PM – 06:15 PM",
        sessions: [
          { hall: "Grand Victoria 1", title: "No Activity Planned", colSpan: 4 },
        ],
      },
      {
        kind: "parallel",
        time: "06:30 PM – 07:45 PM",
        sessions: [
          { hall: "Grand Victoria 1", title: "No Activity Planned", colSpan: 2 },
          { hall: "Arabica & Robusta", title: "TTTC Workshop" },
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
        subtitle: "General Co-Chair, ITC India 2026 | Opening Remarks, Conference Highlights, Lamp Lighting by Chief Guests",
        location: "Grand Victoria 1 & 2",
        variant: "plenary",
      },
      {
        kind: "single",
        time: "09:30 AM – 10:00 AM",
        title: "Keynote: Yervant Zorian (Synopsys)",
        variant: "keynote",
      },
      {
        kind: "single",
        time: "10:00 AM – 10:30 AM",
        title: "Keynote: Subhashish Mitra (Stanford)",
        variant: "keynote",
      },
      {
        kind: "single",
        time: "10:30 AM – 11:00 AM",
        title: "Keynote: Senthilkumar Dhamodharan (Caliber)",
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
            title: "Technical Track 1: 3D IC and Chiplet Testing",
            items: [
              "Paper 1: RL-Driven 3D Clustering of JScan Architecture with Routing and Area Optimization in Chiplet SiP",
              "Paper 2: A Methodology for Robust Testing of Through Glass Vias (TGV) on Glass Substrate-based 3D Chiplets",
              "Paper 3: Cost Aware Sector Symmetry and Wafer Cutting Methods for 3D ICs with Heterogeneous Defects"
            ],
          },
          {
            hall: "Grand Victoria 2",
            title: "Technical Track 2: Hardware Security and Trojan Detection",
            items: [
              "Paper 1: Innovative Memory Interconnect Architecture: Setting New Standards for Security, Safety and Performance in Real-Time Control MCUs",
              "Paper 2: STAMP: Statistical Trojan Attribution via Multi-class Power-trace analysis",
              "Paper 3: Test Pattern-Driven Detection of Hardware Trojans Using Switching Activity Analysis in FPGA-Based Systems"
            ],
          },
          {
            hall: "Arabica & Robusta",
            title: "Technical Track 3: Pre-Silicon Verification and Debug",
            items: [
              "Paper 1: Comprehensive Coverage Framework for LPDDR6 Feature Validation: Navigating Complex Modes and Reducing the Verification Closure Gap",
              "Paper 2: A Novel Verification Method for Debug Tracing-in Close Chassis System",
              "Paper 3: Assertion Based Formal Verification of AES 128 Crypto Core"
            ],
          },
          {
            hall: "Brain Box",
            title: "Special Session",
            items: ["Industry Showcase 1", "Caliber", "TeraDyne"],
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
            title: "Technical Track 4: Advances in DFT and ATPG",
            items: [
              "Paper 1: Physically Aware Weighted Fault Model : A new paradigm in testing",
              "Paper 2: Rethinking RTL DFT: A Discrete RTL Flow for Parallel DFT Integration",
              "Paper 3: A Novel Power-aware ATPG with Biaxial Transition Control for Extreme Low Power Targets",
              "Paper 4: Differential Evolution with Fitness-and Position-Based Selection in Search of Best Test Pattern for Combinational ATPG"
            ],
          },
          {
            hall: "Grand Victoria 2",
            title: "Technical Track 5: AI and Machine Learning Applications",
            items: [
              "Paper 1: Signal Integrity Simulation Hour Optimization: A Novel AI Framework Using Minute-Scale SI Predictor in High-Speed Test Interface Hardware Design",
              "Paper 2: AI-Driven IP Configuration Optimization for Post-Silicon Validation",
              "Paper 3: T-MAP: A Cross-Platform AI driven Test-Program Metadata Analysis Tool for Digital Coverage, Force, limit and Range Verification",
              "Paper 4: Post-Silicon Validation of Neuromorphic SoCs: A Hybrid BIST and ML-Based Approach for NVM Synaptic Fault Detection"
            ],
          },
          {
            hall: "Arabica & Robusta",
            title: "Technical Track 6: Secure IJTAG and Access Control",
            items: [
              "Paper 1: State-Isolated Scan - A Secure Low-Power Scan Architecture",
              "Paper 2: eFPGA-Enabled Dynamic Access Control for Secure IEEE 1687 (IJTAG) Networks",
              "Paper 3: Design of a SAT-Resilient IJTAG Architecture for Secure and Scalable On-Chip Instrument Access",
              "Paper 4: PQC-Based Secure Access Manager for IJTAG Network"
            ],
          },
          {
            hall: "Brain Box",
            title: "Special Session",
            items: ["Industry Showcase 2", "Advantest 1", "Advantest 2"],
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
            title: "DA: Qualcomm",
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
            title: "DA: Cadence",
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
            title: "DA: Teradyne",
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
        variant: "plenary",
      },
      {
        kind: "single",
        time: "09:30 AM – 10:00 AM",
        title: "Keynote: Jeff Rearick (AMD)",
        variant: "keynote",
      },
      {
        kind: "single",
        time: "10:00 AM – 10:30 AM",
        title: "Keynote: Nilanjan Mukherjee (Siemens)",
        variant: "keynote",
      },
      {
        kind: "single",
        time: "10:30 AM – 11:00 AM",
        title: "Keynote: Bizhan Delgoshaei (Google)",
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
            items: ["Panel 3", "Talk 1: Anora"],
          },
          {
            hall: "Grand Victoria 2",
            title: "Technical Track 7: ATE and Hardware Test Methods",
            items: [
              "Paper 1: Real-Time Path Resistance Compensation and Spatial Diagnostics for High-Volume Wafer Test",
              "Paper 2: Polynomial Regression Based Qualitative Assessment of Automated Test Equipment Calibration",
              "Paper 3: A Novel Plug-In Module Architecture for Extending Automatic Test Equipment Capability to Wireless Testing of Pin-Less Semiconductor Devices"
            ],
          },
          {
            hall: "Arabica & Robusta",
            title: "Technical Track 8: Silicon Reliability and Lifecycle Management",
            items: [
              "Paper 1: Unified Compact Health and Aging Models for Manufacturing to In-Field Silicon Quality and Reliability Management",
              "Paper 2: Reliability Refining Next Generation UV Cured Conformal Coatings under Harsh Environment Testing",
              "Paper 3: Design and Context Aware Embedded Monitor Analytics Through High-Volume Algorithmics and Explainable AI"
            ],
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
            title: "Industry Session 2",
            items: ["Talk 2: TI", "Talk 3: Marvell", "Talk 4: SanDisk", "Talk 5: Tessolve"],
          },
          {
            hall: "Grand Victoria 2",
            title: "Technical Track 9: Memory Test and MBIST Methodologies",
            items: [
              "Paper 1: Physical Design Aware Verification Methodology for Closing Coverage Gaps in SharedBus MBIST",
              "Paper 2: Constraint-Based Functional Testing of Encrypted Memory Systems",
              "Paper 3: Enabling EDA Automation for HBM Testing Using A Plug-n-Play DFT Interface",
              "Paper 4: Enhancements in Memory Test for improved diagnosability and comprehensive multi-bank test"
            ],
          },
          {
            hall: "Arabica & Robusta",
            title: "Technical Track 10: Post-Silicon Validation, Silicon Fixes, and Low-Power DFT",
            items: [
              "Paper 1: A novel hardware design for effective supply voltage glitch injection",
              "Paper 2: Validation Methodology to Characterize Absolute Propagation Delay, Delay variation over temperature and Programmable Delay of 1ps DNL step in Wideband RF Buffers upto 12.8GHz",
              "Paper 3: DFT-Enhanced Spare Cell Architecture for Scan-Integrated ECO and Leakage Optimization in SoCs",
              "Paper 4: Hybrid Power Gating: Hardware Trio Framework based ATPG for Low-Power Scan"
            ],
          },
          {
            hall: "Brain Box",
            title: "ART Track 2",
            items: ["Hackathon Opening Remarks", "Team 1", "Team 2", "Team 3", "Team 4"],
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
            title: "DA: Advantest",
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
        time: "04:25 PM – 05:30 PM",
        sessions: [
          {
            hall: "Grand Victoria 1",
            title: "Panel 4",
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
        time: "05:30 PM – 06:00 PM",
        title: "Closing Ceremony | Awards and Valedictory Session",
        subtitle: "General Co-Chair, ITC India 2026",
        variant: "plenary",
      },
    ],
  },
];
