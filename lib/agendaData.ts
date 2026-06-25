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
  subtitle?: string;
  hall: string;
  title: string;
  items?: string[];
  colSpan?: number;
  rowSpan?: number;
  location?: string;
};

export type AgendaSlot =
  | {
      kind: "single";
      time: string;
      title: string;
      subtitle?: string;
      location?: string;
      variant?: AgendaSlotVariant;
      items?: string[];
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
          { hall: "Grand Victoria 1", title: "Closed Loop Test Engineering – From Design to Mass Production", items: ["Maheedhar Jalasutram (Google Silicon Team), Chiehjen (Jeren) Ku and Daejin Shin (Google)"] },
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
          { hall: "Grand Victoria 2", title: "The Seamless Integration of Packetized scan and In-system test with Advanced ATE Equipment", items: ["Lee Harrison and Peter VanDenBosch (Siemens EDA)"] },
          { hall: "Arabica & Robusta", title: "Advanced Test Data Analytics for Yield and Quality Improvement", items: ["Navya Rastogi, Shamitha Rao, Shrestha Hota (Synopsys) and Soumya Mittal (Qualcomm)"] },
          { hall: "Brain Box", title: "ITC-at-ITC", subtitle: "invite only session", items: ["Talk1", "Talk2", "Break", "Talk3", "Talk4", "Break", "Panel: Correlation Crisis in Semiconductor Test: Can AI Bridge the Gap? Moderator: Sameer Chillarige"], rowSpan: 4 },
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
        ],
      },
      {
        kind: "parallel",
        time: "05:15 PM – 06:15 PM",
        sessions: [
          { hall: "Grand Victoria 1", title: "", colSpan: 3 },
        ],
      },
      {
        kind: "parallel",
        time: "06:30 PM – 07:45 PM",
        sessions: [
          { hall: "Grand Victoria 1", title: "", colSpan: 2 },
          { hall: "Arabica & Robusta", title: "TTTC Workshop" },
          { hall: "Brain Box", title: "" },
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
        subtitle: "General Co-Chair, ITC India 2026 (Opening Remarks, Conference Highlights, Lamp Lighting by Chief Guests)",
        location: "Grand Victoria",
        variant: "plenary",
      },
      {
        kind: "single",
        time: "09:30 AM – 10:00 AM",
        title: "Keynote: Yervant Zorian (Synopsys)",
        subtitle: "Designing Chiplets & 3DIC for Quality & Reliability",
        location: "Grand Victoria",
        variant: "keynote",
      },
      {
        kind: "single",
        time: "10:00 AM – 10:30 AM",
        title: "Keynote: Subhashish Mitra (Stanford University)",
        subtitle: "Silent Data corruption by 10x Test Escapes Threatens Reliable computing",
        location: "Grand Victoria",
        variant: "keynote",
      },
      {
        kind: "single",
        time: "10:30 AM – 11:00 AM",
        title: "Keynote: Senthilkumar Dhamodharan (Caliber Interconnect)",
        subtitle: "SI Complexity to AI Revolution: India’s Silicon Leap 2047",
        location: "Grand Victoria",
        variant: "keynote",
      },
      {
        kind: "single",
        time: "11:00 AM – 11:05 AM",
        title: "Exhibit Zone Inauguration",
        location: "Grand Victoria",
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
              "1.1: RL-Driven 3D Clustering of JScan Architecture with Routing and Area Optimization in Chiplet SiP Hilay Patel, Naman Kalra and Jaynarayan T Tudu (IIT Tirupati)",
              "1.2: A Methodology for Robust Testing of Through Glass Vias (TGV) on Glass Substrate-based 3D Chiplets Manisha Kumari (IIT Jodhpur), Jaynarayan T Tudu (IIT Tirupati) and Binod Kumar (IIT Jodhpur)",
              "1.3: Cost Aware Sector Symmetry and Wafer Cutting Methods for 3D ICs with Heterogeneous Defects Tanusree Kaibartta, Saksham Jha, Digvijay Anand Anand (IITISM Dhanbad) and Debesh Das (Jadavpur University)"
            ],
          },
          {
            hall: "Grand Victoria 2",
            title: "Technical Track 2: Hardware Security and Trojan Detection",
            items: [
              "2.1: Innovative Memory Interconnect Architecture: Setting New Standards for Security, Safety and Performance in Real-Time Control MCUs Prasanth Viswanathan Pillai, Varshashree Kottadamane, Ramakrishna Pidaparthi, Rohit Chaudhari, Sivareddy Maramreddy, Naveen Kothuri, Narendra Ravilla and Labeeb K (Texas Instruments India)",
              "2.2: Test Pattern-Driven Detection of Hardware Trojans Using Switching Activity Analysis in FPGA-Based Systems Kannan S J, Chinakaku Lakshmi Prasanna and Sobhit Saxena (Lovely Professional University)",
              "2.3: STAMP: Statistical Trojan Attribution via Multi-class Power-trace analysis Senthilkumar Dhamodharan, Sinthanai Selvi G, Karthika R and Abirami Vinayagamoorthy (Caliber Interconnects)"
            ],
          },
          {
            hall: "Arabica & Robusta",
            title: "Technical Track 3: Pre-Silicon Verification and Debug",
            items: [
              "3.1: Comprehensive Coverage Framework for LPDDR6 Feature Validation: Navigating Complex Modes and Reducing the Verification Closure Gap Dharini Subashchandran, Gruhesh Patel, Meghna Ahuja and Shyam Sharma (Cadence Design Systems India)",
              "3.2: A Novel Verification Method for Debug Tracing-in Close Chassis System Maneesh Pandey and Madhav Lekkala (Intel Technology)",
              "3.3: Assertion Based Formal Verification of AES 128 Crypto Core Shivang Sharma (DRDO, SAG), Vineeth Jaisal (IIT Jodhpur) and Prashant Singh (DRDO, SAG)"
            ],
          },
          {
            hall: "Brain Box",
            title: "Special Session",
            items: ["Industry Showcase 1", "Caliber (11:30 AM - 12:15 PM)", "Teradyne (12:15 PM - 01:00 PM)"],
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
              "4.1: Physically Aware Weighted Fault Model : A new paradigm in testing Sandipan Sharma, Srinivas Vooka, Maheedhar Jalasutram, Pranav Murthy (Google India Pvt. Ltd), Chieh-Jen Ku and Yanhan Zhu (Google LLC)",
              "4.2: Rethinking RTL DFT: A Discrete RTL Flow for Parallel DFT Integration Mohan Raj Gopal, Veejaye Panayadian and Kundan Jha (Sandisk India Pvt Ltd)",
              "4.3: A Novel Power-aware ATPG with Biaxial Transition Control for Extreme Low Power Targets Hanumant Tuntoni (Synopsys), Hillol Maity (Nvidia), Sreenu Kakanuri, Peter Wohl, Parthajit Bhattacharya, Bruce Xue and Geguang Miao (Synopsys)",
              "4.4: Differential Evolution with Fitness-and Position-Based Selection in Search of Best Test Pattern for Combinational ATPG Rahul Bhattacharya (IIT(ISM) Dhanbad)"
            ],
          },
          {
            hall: "Grand Victoria 2",
            title: "Technical Track 5: AI and Machine Learning Applications",
            items: [
              "5.1: Signal Integrity Simulation Hour Optimization: A Novel AI Framework Using Minute-Scale SI Predictor in High-Speed Test Interface Hardware Design Senthilkumar Dhamodharan, Loka Priya, Dyaneswaran Priya and Karthika R (Caliber Interconnects)",
              "5.2: AI-Driven IP Configuration Optimization for Post-Silicon Validation Akhilesh Tiwary, Maneesh Kumar Pandey, Nihar Chaniyara (Intel Technology India Pvt Ltd) and Utsav Banerjee (IISC Bangalore)",
              "5.3: T-MAP: A Cross-Platform AI driven Test-Program Metadata Analysis Tool for Digital Coverage, Force, limit and Range Verification Kaushik Chakravorty, Dundapa Sankapal, Vishal Rohilla, Sudhish Raj Gj, Pratyush Dargan and Robert Cook (Texas Instruments)",
              "5.4: Post-Silicon Validation of Neuromorphic SoCs: A Hybrid BIST and ML-Based Approach for NVM Synaptic Fault Detection Kalyana Sundaram Chandran and Senthilkumar Dhamodharan (Caliber Interconnects)"
            ],
          },
          {
            hall: "Arabica & Robusta",
            title: "Technical Track 6: Secure IJTAG and Access Control",
            items: [
              "6.1: State-Isolated Scan - A Secure Low-Power Scan Architecture C.P. Ravikumar (Vinyana Tech) and Kushal C. (Sykatiya Technologies)",
              "6.2: eFPGA-Enabled Dynamic Access Control for Secure IEEE 1687 (IJTAG) Networks Anshul Raghavendra Katti, Anekait Thampi, Manish Nagaraju and Sudeendra Kumar K (PES University)",
              "6.3: Design of a SAT-Resilient IJTAG Architecture for Secure and Scalable On-Chip Instrument Access Saravanan P, Dharani Sree K, Jothika K, Nivashini S and Sivaprabha Sri Pl (PSG College of Technology)",
              "6.4: PQC-Based Secure Access Manager for IJTAG Network (ART Paper) Prajwal G S Basavaraj, Abhinav S, Arun Kumar N, Sudeendra Kumar (PES University, Bangalore)"
            ],
          },
          {
            hall: "Brain Box",
            title: "Special Session",
            items: ["Industry Showcase 2", "Advantest (02:00 PM - 03:30 PM)"],
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
            location: "ENTRANCE LOBBY",
            rowSpan: 2,
          },
        ],
      },
      {
        kind: "single",
        time: "04:00 PM – 05:15 PM",
        title: "Distinguished Addresses",
        location: "Grand Victoria",
        items: [
          "Distinguished Address: Arojit Roychowdhury, Qualcomm",
          "Distinguished Address: Don Chan, Cadence | Topic : FROM POINT TOOLS TO AGENTIC AI: HOW EDA HAS IMPACTED THE SEMICONDUCTOR INDUSTRY",
          "Distinguished Address: Alpa Sood, Teradyne | Topic : THE CRITICAL ROLE OF TEST STRATEGY IN INDIA'S SEMICONDUCTOR GROWTH"
        ]
      },
      {
        kind: "parallel",
        time: "05:15 PM – 05:30 PM",
        sessions: [
          {
            hall: "Grand Victoria 1",
            title: "Closing Remarks",
            subtitle: "General Co-Chairs, ITC India 2026",
            location: "Grand Victoria",
            colSpan: 3,
          },
          {
            hall: "Brain Box",
            title: "No Activity Planned",
          }
        ],
      },
      {
        kind: "parallel",
        time: "05:30 PM – 06:30 PM",
        sessions: [
          {
            hall: "Grand Victoria 1",
            title: "BREAK",
            colSpan: 3,
          },
          {
            hall: "Brain Box",
            title: "No Activity Planned",
          }
        ],
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
        subtitle: "General Co-Chair, ITC India 2026",
        location: "Grand Victoria",
        variant: "plenary",
      },
      {
        kind: "single",
        time: "09:30 AM – 10:00 AM",
        title: "Keynote: Jeff Rearick (AMD)",
        subtitle: "AI IN TEST: FEAR IT OR HARNESS IT",
        location: "Grand Victoria",
        variant: "keynote",
      },
      {
        kind: "single",
        time: "10:00 AM – 10:30 AM",
        title: "Keynote: Nilanjan Mukherjee (Siemens)",
        subtitle: "Built-in Intelligence- Leveraging Advanced DFT for Silicon Health monitoring",
        location: "Grand Victoria",
        variant: "keynote",
      },
      {
        kind: "single",
        time: "10:30 AM – 11:00 AM",
        title: "Keynote: Bizhan Delgoshaei (Google)",
        subtitle: "From Silent Patient to Self-Healing Silicon: The Four Evolutionary Stages of DFT in Mass Production.",
        location: "Grand Victoria",
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
            items: [
              "Talk 1: Jayashree Saxena, Anora Labs",
              "Talk 2: Built-in Intelligence in Analog-to-Digital Convertors, Nithin Gopinath, Texas Instruments",
              "Talk 3: System Level Test at Hyperscale : Transforming DFT for Data Infrastructure, Nikhil Sudhakaran, Marvell"
            ],
          },
          {
            hall: "Grand Victoria 2",
            title: "Technical Track 7: ATE and Hardware Test Methods",
            items: [
              "7.1: Real-Time Path Resistance Compensation and Spatial Diagnostics for High-Volume Wafer Test Sujith Thomas, Siva Elango S, Dinesh Sharma and Mathangi Raghuraman (Sandisk India Device Design Center Private Limited)",
              "7.2: Polynomial Regression Based Qualitative Assessment of Automated Test Equipment Calibration Anand Venkatachalam (University of Stuttgart), Ernst Aderholz (Infineon Technologies AG,Munich), Matthias Sauer, Simon Schweizer, Matthias Werner (Advantest Europe GmbH) and Ilia Polian (University of Stuttgart)",
              "7.3: A Novel Plug-In Module Architecture for Extending Automatic Test Equipment Capability to Wireless Testing of Pin-Less Semiconductor Devices Sathiyapriya Krishnamoorthy, Manoj Pachaiyan and Senthilkumar Dhamodharan (Caliber Interconnects)"
            ],
          },
          {
            hall: "Arabica & Robusta",
            title: "Technical Track 8: Silicon Reliability and Lifecycle Management",
            items: [
              "8.1: Unified Compact Health and Aging Models for Manufacturing to In-Field Silicon Quality and Reliability Management Dan Alexandrescu, Shubharthi Datta and Leela Krishna Thota (Synopsys)",
              "8.2: Reliability Refining Next Generation UV Cured Conformal Coatings under Harsh Environment Testing Aurkie Ray, Cole Sandvold, Andi Duffy, Bethany Turner, Saskia Hogan, Phil Kinner, Christopher Allen and Anna Lifton (Macdermid Alpha Electronics Solutions)",
              "8.3: Design and Context Aware Embedded Monitor Analytics Through High-Volume Algorithmics and Explainable AI Dan Alexandrescu, Shubharthi Datta and Leela Krishna Thota (Synopsys)"
            ],
          },
          {
            hall: "Brain Box",
            title: "ART Track 1",
            items: [
              "ART1: A Unified Fault Detection and Repair Framework for Memristor-Based Non-Volatile Memories Aryan Anand and Vishal Gupta (VIT)",
              "ART2: Towards Secure IoT: A Lightweight PUF-Based Proximity-Aware Authentication Protocol for Resource-Constrained IoT Devices, Abdulla Syed, Navya Sri Tulluru and Mounika Mellamarthi (SRM University)",
              "ART3: Functional Safety Testing of On-Chip Cache Memories, Siyana Bijju, Simi Sukamaran and Tripti S Warrier (Cochin University of Science and Technology)",
              "ART4: Assertion-Centric UVM Verification of a Fault-Injectable 32-bit RISC-V ALU–IFU Subsystem, Divyanshi Sharma and Sandeep Patel (MANIT Bhopal)"
            ],
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
            items: [
              "Panel: India's Semiconductor Test Ecosystem: Growth story and Sustainability challenges. Moderator: Gaurav Bhargava",
              "Talk 4: Gopikrishna Siddula (Sandisk) : Testing High Speed Flash Interface IOs",
              "Talk 5: Tessolve"
            ],
          },
          {
            hall: "Grand Victoria 2",
            title: "Technical Track 9: Memory Test and MBIST Methodologies",
            items: [
              "9.1: Physical Design Aware Verification Methodology for Closing Coverage Gaps in SharedBus MBIST Shivam Tulsyan, Mayank Parasrampuria, Prachi Sinha, Vasudevan Pillai A and Maheedhar Jalasutram (Google India)",
              "9.2: Constraint-Based Functional Testing of Encrypted Memory Systems Ravikumar C.P. (Vinyana Tech)",
              "9.3: Enabling EDA Automation for HBM Testing Using A Plug-n-Play DFT Interface Quoc Phan, Anshuman Chandra (Siemens EDA), Bartosz Zelek (Poznań University of Technology), Barbara Działowska, Marta Stępniewska and Jonathan Gaudet (Siemens EDA)",
              "9.4: Enhancements in Memory Test for improved diagnosability and comprehensive multi-bank test Prachi Sinha, Veerabhadrarao Vasa, Shivam Tulsyan and Mayank Parasrampuria (Google LLC)"
            ],
          },
          {
            hall: "Arabica & Robusta",
            title: "Technical Track 10: Post-Silicon Validation, Silicon Fixes, and Low-Power DFT",
            items: [
              "10.1: A novel hardware design for effective supply voltage glitch injection Asmita Mohapatra, Antony Varghese and Ashok Kumar (Infineon Technologies India Pvt. Ltd.)",
              "10.2: Validation Methodology to Characterize Absolute Propagation Delay, Delay variation over temperature and Programmable Delay of 1ps DNL step in Wideband RF Buffers upto 12.8GHz Harish Ramesh, Jason Xavier and Pranav Kumar (Texas Instruments)",
              "10.3: DFT-Enhanced Spare Cell Architecture for Scan-Integrated ECO and Leakage Optimization in SoCs Pramod Gayakwad, Raghavendra H D, Chandhramohan K P, Khushboo Rathore, Vishwanath Kunchigi, Vamsi Krishna Oliveti and Santhosh Kamatam (NXP)",
              "10.4: Hybrid Power Gating: Hardware Trio Framework based ATPG for Low-Power Scan (TRC Paper) Darshan V, Karthikeyan Soundararajan, Vivek Roopchand, Arul Karthick Kumar and Praveen Raghuraman (Qualcomm India Private Limited)"
            ],
          },
          {
            hall: "Brain Box",
            title: "ART Track 2",
            items: [
              "Hackathon Opening Remarks",
              "Team 1: A Fault Model for Guided-Wave Optical Interconnects in Die-to-Die Architectures Sanjay S. Subramaniam, Shaun Sebastian, Nishanth M., Gouri S. Nair (Indian Institute of Information Technology Kottayam, India)",
              "Team 2: Cross-Layer Degradation-Aware Fault Modeling and Adaptive Test Generation for FeFET Non-Volatile Memories Aashish Niranjan Barathykannan, Akhilesh M., Shanganidhi K. N., Dinesh Babu A. (SRM Institute of Science and Technology, Vadapalani Campus, India)",
              "Team 3: Functional Fault Modeling for MAC-Based CNN Accelerators M R Harsha, Vanshika Kavi and Suresh G Kini (KLE Technological University)",
              "Team 4: Fault Primitive Taxonomy and MARCH-ReRAM: A Comprehensive Test Framework for Resistive RAM Arrays Addressing Manufacturing Defects and In Field Reliability Degradation Gawtam P and Maithreyan S (Indian Institute of Information Technology Kottayam, India)",
              "Team 5: Observability-Based Functional Fault Modeling for RISC-V Processors Alan Paul, Niranjan K S, Kevin Jose and Adithya R Prabhu (Indian Institute of Information Technology Kottayam, India)"
            ],
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
            title: "Distinguished Address: Rajesh Vaddempudi, MD Advantest India",
            subtitle: "THE INTELLIGENT SILICON ERA: REDEFINING SEMICONDUCTOR TEST THROUGH INNOVATION, AI, AND COLLABORATION",
            colSpan: 3,
            location: "Grand Victoria",
          },
          {
            hall: "Brain Box",
            title: "Poster Session",
            location: "ENTRANCE LOBBY",
            rowSpan: 2,
          },
        ],
      },
      {
        kind: "parallel",
        time: "04:25 PM – 05:30 PM",
        sessions: [
          {
            hall: "Grand Victoria 1",
            title: "Panel: Scaling DFT in the era of AI, HPCs, Chiplets - Are traditional DFT approaches efficient for MCMs and Chiplets? Moderator: Kamlesh Pandey",
            colSpan: 3,
            location: "Grand Victoria",
          },
        ],
      },
      {
        kind: "single",
        time: "05:30 PM – 06:00 PM",
        title: "Closing Ceremony | Awards and Valedictory Session",
        subtitle: "General Co-Chair, ITC India 2026",
        location: "Grand Victoria",
        variant: "plenary",
      },
    ],
  },
];
