export interface Speaker {
  id: number | string;
  name?: string;
  title?: string;
  affiliation?: string;
  description?: string;
  bio?: string[];
  image?: string;
  alternateImage?: string;
  imageClassName?: string;
  comingSoon?: boolean;
  authors?: any[];
}

export const keynoteSpeakers = [
  {
    id: 0,
    name: "Yervant Zorian",
    affiliation: "Synopsys",
    title: "Designing Chiplets and 3DIC for Quality and Reliability",
    description:
      "As semiconductor innovation moves beyond traditional transistor scaling, chiplet-based architectures and 3D integrated circuits are emerging as the foundation of next-generation computing systems. While these technologies enable unprecedented levels of performance, scalability, and heterogeneous integration, they also introduce new challenges in test, quality, reliability, and lifecycle management. This keynote explores the design methodologies, DFT strategies, and reliability frameworks required to ensure robust, high-quality chiplet and 3DIC systems, highlighting the critical role of advanced test technologies in enabling the future of semiconductor integration.",
    bio: [
      "Dr. Yervant Zorian is President of Synopsys Armenia, Chief Architect and Fellow at Synopsys, and one of the world's foremost pioneers in semiconductor test, Built-In Self-Test (BIST), Design-for-Test (DFT), and Electronic Design Automation (EDA). Over a distinguished career spanning industry, academia, and standards development, he has held leadership positions at Synopsys, Virage Logic, LogicVision, and AT&T Bell Laboratories. He currently serves as President of the IEEE Test Technology Technical Council (TTTC) and founded the IEEE 1500 Standardization Working Group.",
      "A pioneer of modern BIST methodologies, Dr. Zorian has fundamentally shaped semiconductor test architectures and international DFT standards through more than 40 U.S. patents, four books, and over 350 technical publications. A recipient of numerous prestigious honors, including the IEEE Industrial Pioneer Award for his contributions to BIST and the IEEE TTTC Lifetime Contribution Award, he continues to be a leading voice driving innovation in semiconductor test, reliability, and advanced system integration.",
    ],
    image: "/images/Yervant_Zorian.png",
    imageClassName: "object-[60%_10%] scale-[1.03]",
  },
  {
    id: 1,
    name: "Subhashish Mitra",
    affiliation: "Stanford University",
    title:
      "Silent Data Corruption by 10× Test Escapes Threatens Reliable Computing",
    description:
      "In an era where computing underpins everything from cloud infrastructure and AI to autonomous systems, ensuring reliability has never been more critical. This keynote examines the growing threat of test escapes and silent data corruption, highlighting the limitations of conventional testing approaches and the need for next-generation strategies to safeguard trust in increasingly complex semiconductor systems.",
    bio: [
      "Subhashish Mitra is the William E. Ayer Endowed Chair Professor at Stanford University and a globally recognized leader in robust computing, system reliability, and electronic design automation. Over decades of pioneering research, his innovations in testing, validation, fault prediction, and resilience have shaped modern semiconductor systems and influenced technologies deployed across cloud, AI, and automotive platforms worldwide.",
      "His extensive work with academia, industry, and national semiconductor initiatives has provided him with unique insights into the reliability challenges facing next-generation computing systems, making him a leading voice on the future of trustworthy and resilient computing.",
    ],
    image: "/images/keynote/Subhasish-Mitra.png",
    imageClassName: "object-[center_10%] scale-[1.03]",
  },
  {
    id: 2,
    name: "Senthilkumar Dhamodharan",
    affiliation: "Caliber Interconnects",
    title: "SI Complexity to AI Revolution: India’s Silicon Leap 2047",
    description:
      "As artificial intelligence redefines the semiconductor landscape, intelligent testing, validation, and manufacturing have become essential enablers of innovation. This keynote explores how AI-driven methodologies, digital twins, and ecosystem collaboration can accelerate India’s semiconductor journey and strengthen its position in the global technology value chain.",
    bio: [
      "Senthilkumar Dhamodharan is a semiconductor engineering leader with nearly two decades of experience in post-silicon validation and high-volume manufacturing testing across Digital, Mixed Signal, PMIC, and RF technologies. Having held leadership roles at Caliber Interconnects, Qualcomm, AMD, and NXP, he has developed deep expertise in semiconductor quality, reliability, and test engineering.",
      "His industry experience, combined with ongoing research in AI/ML applications for post-silicon validation, provides him with a unique perspective on how intelligent testing and AI-driven innovation can shape the future of the semiconductor industry.",
    ],
    image: "/images/senthilkumar.png",
    imageClassName: "object-[center_10%]",
  },

  {
    id: 5,
    name: "Jeff Rearick",
    affiliation: "AMD",
    title: "AI in Test: Fear It or Harness It",
    description:
      "Artificial Intelligence is rapidly transforming industries worldwide, creating both unprecedented opportunities and significant challenges. In the semiconductor test ecosystem, AI is reshaping how products are designed, validated, and tested, while simultaneously introducing new requirements for ensuring the reliability and trustworthiness of AI-driven systems. This keynote examines the evolving relationship between AI and test, highlighting how the test community plays a critical role in enabling the next generation of intelligent technologies.",
    bio: [
      "Jeff Rearick is a Senior Fellow at AMD where he has led the DFX Strategy team for the past 19 years, after spending the previous 22 years at HP and Agilent Technologies working on DFT and test methodologies. He holds 50 patents, has published many technical papers, serves on the ITC Steering Committee, and remains deeply engaged in IEEE working groups, including serving as the Editor for all three of the IEEE 1687 family of standards currently in flight.",
      "Jeff's day job of looking just far enough into the future of test and debug and validation to keep a steady stream of innovations coming down the pipeline to intercept ever-advancing AMD products keeps him at the forefront of emerging trends, including the epochal disruption that AI has brought to our field.",
    ],
    image: "/images/keynote/jeff_rearick_2024.png",
    imageClassName: "object-[30%_30%]",
  },
  {
    id: 5.5,
    name: "Nilanjan Mukherjee",
    affiliation: "Siemens",
    title: "Built-in Intelligence – Leveraging Advanced DFT for Silicon Health Monitoring",
    description:
      "As semiconductor technologies continue to evolve, ensuring silicon quality, reliability, and long-term health has become increasingly challenging. Modern designs require test methodologies that extend beyond manufacturing to enable continuous monitoring throughout the product lifecycle. This talk explores how advanced Design-for-Test (DFT) infrastructures provide the foundation for comprehensive silicon health monitoring, integrating on-chip intelligence, diagnostics, and lifecycle analytics to improve test quality, reduce cost, and enhance reliability from manufacturing through field deployment.",
    bio: [
      "Nilanjan Mukherjee is Vice President of Software Engineering for Tessent Silicon Lifecycle Solutions at Siemens EDA, where he leads the development of advanced technologies spanning the complete silicon lifecycle, from design through field operation. A globally recognized expert in semiconductor test and diagnostics, he has pioneered innovations in test compression, Logic BIST, Memory BIST, low-power DFT, in-field testing, and silicon lifecycle management. His contributions include foundational work on EDT/TestKompress, VersaPoint Test Points, Observation Scan Technology, low-power hybrid EDT/Logic BIST, and packetized scan-based in-field testing.",
      "His work has significantly advanced the industry's approach to DFT, silicon diagnostics, and predictive health monitoring through the integration of on-chip sensing and data analytics. Holding over 60 U.S. patents, authoring more than 100 technical publications, and receiving numerous prestigious awards, including the IEEE Donald O. Pederson Outstanding Paper Award, the ITC Most Significant Paper Award, and multiple Best Paper Awards, Nilanjan continues to be a leading voice shaping the future of intelligent test and silicon lifecycle management.",
    ],
    image: "/images/keynote/Nilanjan_Mukherjee.png",
    imageClassName: "object-[20%_20%]",
  },
  {
    id: 6,
    name: "Bizhan Delgoshaei",
    affiliation: "Google",
    title:
      "From Silent Patient to Self-Healing Silicon: The Four Evolutionary Stages of DFT in Mass Production",
    description:
      "As semiconductor devices grow in complexity and production volumes continue to scale, ensuring silicon quality and reliability has become increasingly challenging. This keynote explores the evolution of Design for Testability (DFT) from a traditional diagnostic tool into an intelligent, lifecycle-driven framework that enables improved yield, reliability, and manufacturing efficiency. By examining the four evolutionary stages of DFT, it highlights how modern test methodologies are shaping the future of autonomous and self-healing silicon.",
    bio: [
      "Bizhan Delgoshaei is Director of Custom Silicon Engineering Operations at Google, where he oversees Tensor manufacturing, test, and quality. Over more than two decades, he has led the successful ramp of advanced semiconductor products, including FPGAs, SoCs, memory, PMICs, and security devices: from development to high-volume production.",
      "Through leadership roles at Google, Apple, and Altera, he has gained deep expertise in silicon manufacturing, quality engineering, and operational excellence. His extensive industry experience provides him with valuable insights into the evolving role of Design for Testability (DFT) in enabling reliable, scalable, and increasingly intelligent semiconductor systems.",
    ],
    image: "/images/keynote/bizhan_delgoshaei.png",
    imageClassName: "object-[40%_10%]",
  },
];

export const industrySpeakers = [
  {
    id: 0,
    name: "Jayashree Saxena",
    affiliation: "Anora Labs",
    title: "A Day in the Life of a DFT Engineer - Can Agents Help?",
    description:
      "Concepts such as scan and BIST have been routinely used in the industry for many decades. Nonetheless, the complexity of Design for Test (DFT) implementation continues to challenge us every day. This talk will provide a DFT Engineer’s view of the challenges and will highlight the exacting attention to detail required to implement DFT. In addition, the domain knowledge required to enable seamless integration with other parts of the design flow is a skill that is acquired over many years. While automation has made significant inroads to ease several of these challenges, there is still a lot that rests on individual skills and attention. Can we harness AI agents judiciously to understand the nuances of DFT implementation and help where the impact will be felt the most ?",
    bio: [
      "Jayashree Saxena has over 30 years of experience in Design-for-test. She currently holds the title of Vice President, Semiconductor DFT at Anora LLC. Prior to joining Anora in 2013, Jayashree spent close to 20 years at Texas Instruments. Jayashree holds a Master of Engineering in Electrical Communication Engineering from the Indian Institute of Science, Bangalore and a Ph.D in Electrical and Computer Engineering from the University of Massachusetts at Amherst."
    ],
    image: "/images/jayashree_saxena.png",
    imageClassName: "object-top"
  },
  {
    id: 1,
    name: "Nithin Gopinath",
    affiliation: "Texas Instruments",
    title: "Built-in Intelligence in Analog-to-Digital Convertors",
    description:
      "As modern semiconductor systems demand higher speeds, greater integration, and lower power consumption, ensuring consistent analog performance has become increasingly challenging. This keynote explores the evolution of high-speed ADC testing, from traditional trimming techniques to intelligent digital-assisted correction and real-time background calibration. It highlights how built-in intelligence is transforming analog design and test methodologies, enabling improved performance, reduced test costs, and greater resilience to process, voltage, and temperature variations.",
    bio: [
      "Nithin Gopinath is a Senior Member Technical Staff at Texas Instruments, where he has spent over 15 years advancing high-speed data converter technologies. His work in architecting, validating, and optimizing state-of-the-art ADC solutions has contributed to innovations in calibration techniques, performance optimization, and test efficiency across demanding applications including wireless communications, aerospace, defense, and instrumentation.",
      "As Post-Silicon Validation & Test Manager for the High-Speed ADC group, Nithin has developed deep expertise in addressing the challenges of analog performance variability, test cost, and design complexity. His extensive experience with high-speed pipelined ADCs, sigma-delta ADCs, and intelligent calibration methodologies provides him with unique insights into the growing role of built-in intelligence in enabling robust, high-performance analog systems.",
    ],
    image: "/images/keynote/nithin_Gopinath.png",
    imageClassName: "object-center",
  },
  {
    id: 2,
    name: "Nikhil Sudhakaran",
    affiliation: "Marvell",
    title:
      "System Level Test at Hyperscale: Transforming DFT for Data Infrastructure",
    description:
      "The rise of AI-driven data infrastructure is redefining the demands placed on modern semiconductor systems. As designs evolve from monolithic SoCs to heterogeneous, chiplet-based architectures featuring advanced packaging, high-bandwidth interfaces, and memory-centric computing, traditional Design-for-Test (DFT) approaches are no longer sufficient. This keynote explores how hyperscale workloads and platform-level integration are driving a shift toward system-level test strategies, highlighting the need for hierarchical, package-aware, and data-driven methodologies to ensure quality, reliability, and scalability in next-generation AI infrastructure.",
    bio: [
      "Nikhil is an engineering leader with over two decades of experience in semiconductor design and test, currently serving as Director of Engineering at Marvell, where he leads Design-for-Test initiatives for custom silicon powering next-generation AI infrastructure in hyperscale data centers. Throughout his career at Marvell, Intel, and Qualcomm, he has played a pivotal role in delivering complex SoCs across client, server, mobile, IoT, and automotive markets.",
      "His expertise spans the entire silicon lifecycle, from DFT architecture and verification to post-silicon validation, test development, and ATE bring-up. With deep experience in advanced test methodologies, multi-die systems, and high-performance computing platforms, Nikhil brings valuable insights into how Design-for-Test is evolving to address the challenges of hyperscale AI infrastructure and system-level integration.",
    ],
    image: "/images/keynote/nikhil.png",
    imageClassName: "object-center",
  },
  {
    id: 3,
    name: "Gopikrishna Siddula",
    affiliation: "SanDisk",
    title: "Testing High Speed Flash Interface IOs",
    description: "As flash memory technologies continue to deliver higher bandwidth and lower latency, the design and validation of high-speed interface I/Os have become increasingly critical to ensuring reliable data transfer and system performance. Testing these interfaces presents unique challenges, including signal integrity, timing margins, and robustness under demanding operating conditions. This talk explores the methodologies and best practices for validating high-speed flash interface I/Os, highlighting the role of advanced test techniques in enabling reliable, high-performance memory systems for next-generation storage applications.",
    bio: [
      "Gopikrishna Siddula has been a member of the Mixed-Signal IP team at SanDisk for over 12 years, specializing in the design and integration of high-performance memory interface I/Os. He holds an M.S. from IIIT Hyderabad and is an inventor on multiple U.S. patents covering high-speed I/O design, ESD protection, and memory interface technologies.",
      "Through years of developing and integrating advanced memory interfaces, Gopikrishna has gained deep expertise in the challenges of achieving reliable, high-speed data communication. His experience in high-performance I/O design and innovation provides valuable insights into the testing methodologies required to ensure robust and efficient flash memory interfaces."
    ],
    image: "/images/gopikrishna_siddula.png",
    alternateImage: "/images/gopi_krishna_siddula_expanded.png",
    imageClassName: "object-center",
  },
  {
    id: 4,
    name: "Anand Muthaiah",
    affiliation: "Tessolve",
    title: "On-Chip Intelligence Transforming IC Testing",
    description: "As integrated circuits become increasingly complex, traditional testing approaches are evolving toward intelligent, self-aware methodologies that enhance quality, reliability, and manufacturing efficiency. On-chip intelligence is enabling advanced capabilities such as real-time diagnostics, adaptive testing, built-in self-test, silicon health monitoring, and AI-assisted analytics, transforming test from a manufacturing checkpoint into a continuous lifecycle function. This talk explores how embedded intelligence is redefining IC testing, enabling faster validation, lower test costs, improved yield, and more resilient semiconductor systems across advanced packaging, chiplet architectures, and next-generation devices.",
    bio: [
      "Anand Muthaiah is Senior Vice President and Head of the COE and Post Silicon Business Unit at Tessolve, bringing over 30 years of experience in semiconductor test, hardware, and package design. An expert in digital, analog, and mixed-signal testing, he has built extensive expertise in high-volume manufacturing, post-silicon validation, and advanced semiconductor engineering. At Tessolve, he leads strategic initiatives in advanced packaging, chiplet-based device testing, silicon validation, system-level test (SLT), photonics, and AI-driven manufacturing solutions. He holds an M.S. in Electrical Engineering from the University of South Florida and has held key technical and leadership roles at Cyrix Semiconductor, LTX Corporation, Intel Technologies, and Tessolve.",
      "His broad experience across semiconductor design, validation, packaging, and manufacturing enables him to bridge emerging technologies with production-ready solutions. By driving innovations in chiplet testing, AI-assisted manufacturing workflows, and advanced validation methodologies, Anand brings a forward-looking perspective on improving efficiency, quality, and scalability across the semiconductor lifecycle."
    ],
    image: "/images/Anand_Muttaiah.png",
    imageClassName: "object-center"
  }
];

export const tutorialsData = [
  {
    id: "529",
    title: "Squeezing Quality into Cents: DFT Strategies for Low-Cost MCUs",
    abstract:
      "Low-cost microcontrollers form the backbone of today's connected world, powering applications across IoT, automotive, industrial, and consumer markets. However, delivering high-quality, reliable MCUs at massive production volumes requires balancing stringent cost targets with demanding quality and safety requirements. This tutorial explores Design-for-Test strategies specifically tailored for cost-sensitive MCU designs, addressing challenges such as minimizing silicon overhead, reducing test time, optimizing ATE utilization, managing test power, and maximizing manufacturing throughput. Through practical examples and real-world methodologies, attendees will gain valuable insights into achieving high test coverage and low DPPM while operating within the tight area, power, and cost constraints that define modern MCU development.",
    authors: [
      {
        name: "Vishal Diwan",
        affiliation: "Texas Instruments",
        bio: "Vishal Diwan is a Digital Design Manager and Member Group Technical Staff at Texas Instruments, where he leads the DFT team for the ASM Business Unit. With over 13 years of experience in Design-for-Test methodologies, he has developed deep expertise across scan architectures, test automation, and advanced DFT implementation strategies for semiconductor products. He holds a Master's degree in Electrical Engineering from IIT Bombay and has contributed extensively to the field through multiple patents, technical publications, and presentations at industry conferences.\n\nHis experience in developing efficient DFT solutions for cost-sensitive, high-volume semiconductor products has given him valuable insight into the trade-offs between test quality, silicon area, test time, and manufacturing cost. This practical perspective enables him to provide a comprehensive view of how innovative DFT methodologies can help deliver reliable MCUs while meeting the aggressive cost targets demanded by today's semiconductor industry.",
        image: "/images/tutorials/tut_529_1.png",
        imageClassName: "object-center",
      },
    ],
    status: "ready",
  },
  {
    id: "521",
    title: "LLM for VLSI Design, Automation and Test",
    abstract:
      "The growing complexity of modern semiconductor systems is placing unprecedented demands on design, verification, and test workflows. As chips scale to billions of transistors and increasingly heterogeneous architectures, traditional EDA methodologies require significant manual effort and domain expertise to meet aggressive performance, power, and time-to-market targets. This tutorial explores how Large Language Models (LLMs) are emerging as powerful assistants for VLSI engineers, enabling higher levels of automation across RTL design, verification, synthesis, debugging, and test generation. Rather than replacing conventional EDA flows, the session examines how LLMs can augment engineering productivity, streamline development cycles, and redefine the way designers, verification engineers, and test professionals interact with semiconductor design tools in the AI era.",
    authors: [
      {
        name: "Dr. Chandan Karfa",
        affiliation: "IIT Guwahati",
        bio: "Dr. Chandan Karfa is an Associate Professor in the Department of Computer Science and Engineering at IIT Guwahati, where his research spans electronic design automation, formal verification, hardware security, high-level synthesis, and formal methods. Prior to joining academia, he spent five years as a Senior R&D Engineer at Synopsys, gaining valuable industry experience in semiconductor design automation. A prolific researcher, he has authored more than eighty publications in leading international journals and conferences and has been recognized with several prestigious honors, including the Google India Research Award, Google Silicon Research Awards, Qualcomm Faculty Award, and multiple innovation and best paper awards.\n\nHis unique combination of academic research and industrial experience provides him with deep insight into both the challenges and opportunities facing modern semiconductor design flows. Through his work at the intersection of EDA, formal methods, and AI-driven automation, Dr. Karfa brings a forward-looking perspective on how LLMs can transform VLSI design, verification, and test while enhancing the productivity of the next generation of semiconductor engineers.",
        image: "/images/tutorials/tut_521_1.png",
      },
    ],
    status: "ready",
  },
  {
    id: "497",
    title:
      "Mission Mode Scan Dump Using IJTAG and TAP Customization: Architecture, Implementation, and Practical Considerations",
    abstract:
      "As modern SoCs continue to grow in scale and complexity, effective post-silicon debug has become a critical challenge for ensuring rapid issue resolution and successful product deployment. Traditional test infrastructures often lack the observability required during mission-mode operation, creating the need for more flexible and scalable debug methodologies. This tutorial explores the use of IEEE 1687 (IJTAG) and TAP customization to enable mission-mode scan dump capabilities, providing efficient access to internal silicon states with minimal design impact. Attendees will gain insights into IJTAG-based architectures, scan data extraction techniques, implementation challenges, verification strategies, and practical considerations for enhancing observability and debuggability in advanced semiconductor designs.",
    authors: [
      {
        name: "Sreekanth G Pai",
        affiliation: "Marvell",
        bio: "Sreekanth G Pai is a Senior Principal Engineer with extensive experience in Design-for-Test, scan architectures, IJTAG infrastructures, and post-silicon debug methodologies for complex SoCs. Throughout his career, he has led and contributed to multiple large-scale silicon programs, developing expertise in TAP customization, mission-mode debug techniques, and Tessent-based DFT implementations.\n\nHis work in enabling robust observability, debuggability, and secure access mechanisms across advanced validation and test environments has provided him with deep insight into the challenges of modern post-silicon debug. This experience makes him well positioned to discuss scalable IJTAG-based approaches for mission-mode scan dump and advanced debug architectures.",
        image: "/images/tutorials/tut_497_1.png",
      },
      {
        name: "Raseena K A",
        affiliation: "Marvell",
        bio: "Raseena K A is a Senior Engineer specializing in DFT implementation, scan architectures, and post-silicon debug for complex SoCs. Her experience includes the development of IJTAG-based infrastructures, scan dump enablement, clock and OCC interactions, and customized debug solutions tailored to mission-mode applications.\n\nThrough her work on silicon bring-up and debug using advanced scan and test methodologies, she has developed strong expertise in practical debug execution and validation workflows. Her hands-on experience provides valuable perspectives on implementing efficient, scalable, and reliable scan dump solutions for modern semiconductor systems.",
        image: "/images/tutorials/tut_497_2.png",
      },
    ],
    status: "ready",
  },
  {
    id: "chiplet",
    title: "Testing Chiplet-Based 2.5D/3D ICs : An Academia/Industry perspective",
    abstract: "More info coming soon.",
    authors: [
      {
        name: "Binod Kumar",
        affiliation: "IIT Jodhpur",
        bio: "",
        image: ""
      },
      {
        name: "Manisha Kumari",
        affiliation: "IIT Jodhpur",
        bio: "",
        image: ""
      },
      {
        name: "Jaynarayan T Tudu",
        affiliation: "IIT Tirupati",
        bio: "",
        image: ""
      },
      {
        name: "Jyotirmoy Saikia",
        affiliation: "Cadence",
        bio: "",
        image: ""
      },
      {
        name: "Sagar Kumar",
        affiliation: "Cadence",
        bio: "",
        image: ""
      }
    ],
    status: "ready",
  },
  {
    id: "533",
    title: "Closed Loop Test Engineering \u2013 From Design to Mass Production",
    abstract:
      "As semiconductor products become increasingly complex and quality expectations continue to rise, achieving ultra-low DPPM while maintaining aggressive cost targets requires tighter integration between design, test, and manufacturing. This tutorial explores the concept of Closed Loop Test Engineering, demonstrating how Design-for-Test and Volume Product Engineering can work together to optimize product quality, yield, and test efficiency throughout the silicon lifecycle. Covering topics such as advanced DFT architectures, fault coverage strategies, yield analysis, test optimization, diagnosis methodologies, and production feedback mechanisms, the session provides a comprehensive framework for connecting design decisions with manufacturing outcomes to drive continuous improvement from silicon development through mass production.",
    authors: [
      {
        name: "Maheedhar Jalasutram",
        affiliation: "Google",
        bio: "Maheedhar Jalasutram leads DFT Architecture within Google's Silicon team, where he is responsible for developing scalable test architectures that balance quality, coverage, and test cost for advanced mobile SoCs. Throughout his career, including leadership roles at Google and Texas Instruments, he has driven innovations in concurrent testing, design-for-debug, high-speed test methodologies, and system-level test enablement.\n\nHis extensive experience spanning DFT architecture, validation, and production test has provided him with deep insight into the challenges of delivering high-quality silicon at scale. This expertise enables him to offer a unique perspective on how test methodologies can be integrated across the entire product lifecycle to improve both quality and manufacturing efficiency.",
        image: "/images/tutorials/tut_533_1.png",
        imageClassName: "object-[center_10%] scale-[1.1]",
      },
      {
        name: "Jeren Ku",
        affiliation: "Google",
        bio: "Jeren Ku leads the Foundry, Assembly Process, and Yield Engineering team within Google's Custom Silicon Operations organization. He oversees manufacturing operations, yield improvement, process optimization, quality management, and product ramp activities for Google's custom silicon programs. Prior to Google, he held leadership positions at Intel and TSMC, focusing on advanced semiconductor process technologies, including FinFET and Gate-All-Around transistor development.\n\nHis experience across process technology development, manufacturing operations, and yield engineering has given him a comprehensive understanding of how design, fabrication, and production data interact to influence product quality. This background provides valuable insight into building closed-loop methodologies that accelerate yield learning and production readiness.",
        image: "/images/tutorials/tut_533_2.png",
        imageClassName: "object-[center_25%] scale-[1.15]",
      },
      {
        name: "Daejin Shin",
        affiliation: "Google",
        bio: "Daejin Shin leads the Product Engineering and Quality team within Google's Custom Silicon Operations organization, overseeing test yield analysis, manufacturing operations, supply chain quality, and OSAT engagement for multiple generations of Google silicon products. His team plays a key role in delivering scalable, high-quality semiconductor solutions while driving operational excellence across the manufacturing ecosystem.\n\nThrough his work at the intersection of product engineering, quality management, and high-volume manufacturing, he has developed deep expertise in leveraging test and yield data to improve product robustness and production efficiency. His experience provides valuable perspectives on establishing effective feedback loops between design, test, and manufacturing to achieve world-class quality outcomes.",
        image: "/images/tutorials/tut_533_3.png",
      },
    ],
    status: "ready",
  },
  {
    id: "510",
    title: "Machine Learning is Inevitable or Not: A DFT Designer\u2019s View",
    abstract:
      "Artificial Intelligence and Machine Learning are rapidly transforming engineering workflows across the semiconductor industry, creating both new opportunities and new challenges for Design-for-Test (DFT) engineers. As modern SoCs continue to increase in complexity, traditional DFT methodologies face growing demands for faster turnaround times, improved test quality, lower power consumption, and reduced defective-parts-per-million (DPPM). This tutorial explores the practical application of machine learning in DFT, covering areas such as ATPG optimization, test point insertion, test coverage enhancement, IR-drop analysis, and intelligent DFT automation. It also examines the emerging role of AI-driven assistants and large language models in streamlining DFT workflows, while providing a balanced perspective on where machine learning can deliver meaningful value\u2014and where engineering expertise remains indispensable.",
    authors: [
      {
        name: "Ankush Srivastava",
        affiliation: "Qualcomm",
        bio: "Ankush Srivastava is a semiconductor test expert with over 19 years of industry experience and currently leads the development of advanced Design-for-Test methodologies for Qualcomm's cutting-edge SoCs. Holding a doctorate from IIT Bombay and a degree from BITS Pilani, he has made significant contributions to semiconductor test technology through numerous patents, technical publications, intellectual property developments, and presentations at leading international conferences.\n\nHis extensive work in DFT automation, test optimization, and next-generation validation methodologies has given him deep insight into the evolving intersection of machine learning and semiconductor testing. As an active contributor to the global test community through organizations such as ITC, ATS, VLSI Design, and VDAT, Ankush brings a practical and forward-looking perspective on how AI can be effectively leveraged to improve DFT productivity, test quality, and silicon success.",
        image: "/images/tutorials/tut_510_1.png",
      },
    ],
    status: "ready",
  },
  {
    id: "p2929",
    title: "Beyond Scan Dump: Why IEEE P2929 Enables True Scan State Extraction",
    abstract: "More info coming soon.",
    authors: [
      {
        name: "Lee Harrison",
        affiliation: "Siemens EDA",
        bio: "",
        image: "/images/tutorials/tut_487_1.png",
        imageClassName: "object-[center_60%] scale-105"
      },
      {
        name: "Andy Hughes",
        affiliation: "Siemens EDA",
        bio: "",
        image: ""
      },
      {
        name: "Peter Orlando",
        affiliation: "Siemens EDA",
        bio: "",
        image: ""
      }
    ],
    status: "ready",
  },
  {
    id: "525",
    title:
      "Testing to Self Testing: Self Test Driven Functional Safety for ISO 26262 Compliant Automotive SoCs",
    abstract:
      "As automotive systems evolve into software-defined, safety-critical computing platforms, ensuring functional safety throughout a vehicle's lifecycle has become a fundamental requirement. Traditional manufacturing and validation testing alone are no longer sufficient to meet the stringent demands of ISO 26262 compliance. This tutorial explores how Built-In Self-Test (BIST) technologies are transforming functional safety architectures by enabling continuous in-field fault detection, diagnostics, and reliability monitoring. Covering logic BIST, memory BIST, mission-mode testing, and safety-driven test strategies, the session provides practical insights into designing scalable, standards-compliant automotive SoCs capable of delivering robust safety assurance from silicon to system.",
    authors: [
      {
        name: "Rajesh Kumar Tiwari",
        affiliation: "Qualcomm India",
        bio: "Rajesh Kumar Tiwari is Director of Engineering at Qualcomm India, with over 22 years of experience in semiconductor design and Design-for-Test technologies. Over the course of his career at Qualcomm and Texas Instruments, he has led the development of advanced DFT architectures, in-system BIST solutions, and test methodologies across mobile, compute, and automotive platforms. He is also an active contributor to the semiconductor test community through his involvement with IEEE initiatives and technical innovations.\n\nHis extensive experience in deploying self-test and safety-focused DFT solutions for complex SoCs has given him deep insight into the challenges of achieving functional safety in modern automotive systems. This expertise positions him uniquely to discuss the evolving role of self-test technologies in enabling ISO 26262-compliant semiconductor designs.",
        image: "/images/tutorials/tut_525_1.jpg",
      },
      {
        name: "Mohammed Zuber P Malek",
        affiliation: "Qualcomm India",
        bio: "Mohammed Zuber P Malek is a Senior Staff Engineer and Manager at Qualcomm India with more than 17 years of experience in Design-for-Testability. Having contributed to over twenty successful chip tape-outs, he has developed extensive expertise across in-system BIST, scan synthesis, ATPG, low-power testing, TestSTA, and RTL-level DFT integration. He currently leads Qualcomm's Auto-DFT methodology and TestSTA initiatives, driving scalable and robust test solutions for advanced SoC programs.\n\nHis work in architecting automated DFT methodologies and self-test infrastructures for complex silicon platforms has provided him with valuable insight into the intersection of functional safety, diagnostics, and test automation. This experience enables him to offer practical perspectives on leveraging self-test technologies to meet the reliability and compliance requirements of next-generation automotive systems.",
        image: "/images/tutorials/tut_525_2.png",
      },
    ],
    status: "ready",
  },
  {
    id: "487",
    title:
      "The Seamless Integration of Packetized Scan and In-System Test with Advanced ATE Equipment",
    abstract:
      "As semiconductor devices continue to increase in complexity, reducing test cost while maintaining high quality and reliability has become a key industry challenge. Emerging technologies such as packetized scan architectures and in-system test methodologies are transforming how structural tests are delivered, enabling more efficient use of Automatic Test Equipment (ATE), reducing test data volume, and extending test capabilities beyond manufacturing into system-level and in-field environments. This tutorial provides an overview of packetized ATPG data generation, configuration, and deployment, highlighting how seamless integration with advanced ATE platforms supports scalable test delivery, enhanced diagnostics, data logging, and long-term product reliability throughout the silicon lifecycle.",
    authors: [
      {
        name: "Lee Harrison",
        affiliation: "Siemens EDA",
        bio: "Lee Harrison is Director of Product Marketing within Siemens Tessent Division, bringing over 25 years of experience in Design-for-Test technologies and semiconductor test solutions. Throughout his career, he has worked extensively with Tessent DFT products, focusing on emerging requirements in functional safety, security, automotive electronics, and high-performance computing applications. His efforts have helped ensure that evolving customer needs are translated into scalable and effective DFT methodologies.\n\nHis extensive experience working at the intersection of semiconductor design, test, safety, and reliability has provided him with valuable insights into the industry's transition toward more intelligent and integrated test solutions. This perspective enables him to address the growing importance of packetized scan architectures and in-system testing in modern semiconductor products.",
        image: "/images/tutorials/tut_487_1.png",
        imageClassName: "object-[center_60%] scale-105",
      },
      {
        name: "Hagen Goller",
        affiliation: "Advantest",
        bio: "",
        image: "",
      },
    ],
    status: "ready",
  },
  {
    id: "531",
    title: "Advanced Test Data Analytics for Yield and Quality Improvement",
    abstract:
      "As semiconductor technologies continue to scale and heterogeneous integration becomes increasingly prevalent, the volume and complexity of test and manufacturing data have grown exponentially. Extracting actionable insights from this data has become essential for accelerating yield ramp, improving product quality, reducing scrap, and enhancing manufacturing efficiency. This tutorial explores modern data analytics methodologies within the Silicon Lifecycle Management (SLM) framework, covering advanced statistical techniques, machine learning applications, root-cause analysis, yield monitoring, and real-time quality management. Attendees will gain practical insights into leveraging both local and cloud-based analytics platforms to transform vast semiconductor test datasets into data-driven decisions that improve yield, reliability, and operational excellence.",
    authors: [
      {
        name: "Shamitha Rao",
        affiliation: "Synopsys, India",
        bio: "Shamitha Rao is Director of Solutions Engineering at Synopsys, where she leads customer engagements for the TestMAX product portfolio. With more than 20 years of experience spanning DFT architecture, implementation, silicon validation, and test solutions, she has held key roles at Synopsys, Intel, Siemens EDA, STMicroelectronics, and Wipro. Her contributions to semiconductor test technology have been recognized through multiple technical publications, conference presentations, and industry awards.\n\nHer extensive experience across the semiconductor lifecycle\u2014from design and test architecture to silicon bring-up and manufacturing\u2014provides her with a unique perspective on how advanced analytics can be leveraged to improve product quality, yield learning, and test efficiency in modern semiconductor ecosystems.",
        image: "/images/tutorials/tut_531_1.png",
      },
      {
        name: "Shrestha Hota",
        affiliation: "Synopsys",
        bio: "Shrestha Hota is a Staff Solutions Engineer at Synopsys with over a decade of experience in semiconductor manufacturing analytics and yield engineering. She specializes in architecting analytics frameworks that enable yield optimization, root-cause analysis, and operational efficiency across high-volume manufacturing environments. Her work focuses on deploying advanced analytics platforms that transform complex manufacturing data into actionable insights.\n\nThrough her leadership in customer engagements and data-driven manufacturing initiatives, she has developed deep expertise in applying analytics to solve real-world semiconductor production challenges. This experience positions her at the forefront of modern yield engineering and intelligent manufacturing solutions.",
        image: "/images/tutorials/tut_531_2.png",
      },
      {
        name: "Navya Rastogi",
        affiliation: "Synopsys",
        bio: "Navya Rastogi is a Staff Applications Engineer at Synopsys with expertise spanning semiconductor process engineering, yield analysis, fabrication technologies, and data science. Prior to joining Synopsys, she gained experience in both the semiconductor capital equipment industry and at Amazon, bringing a multidisciplinary perspective to advanced manufacturing analytics. She holds a PhD in Nanoscience from the Indian Institute of Science.\n\nHer background across semiconductor processes, yield engineering, and data-driven problem solving provides her with valuable insight into the application of analytics for improving manufacturing performance and product quality in advanced semiconductor technologies.",
        image: "/images/tutorials/tut_531_3.png",
      },
      {
        name: "Soumya Mittal",
        affiliation: "Qualcomm",
        bio: "Soumya Mittal is a Staff Engineer at Qualcomm specializing in AI-driven diagnostic intelligence for next-generation semiconductor platforms. His work focuses on developing scalable frameworks that automate failure analysis and transform complex diagnostic data into actionable engineering insights, accelerating silicon development and deployment. He holds a PhD from Carnegie Mellon University and is an alumnus of IIT Roorkee.\n\nHis expertise at the intersection of semiconductor diagnostics, artificial intelligence, and large-scale data analysis has enabled him to drive innovative approaches to yield learning and quality improvement. This experience provides him with a unique perspective on how advanced analytics and AI are reshaping semiconductor manufacturing and test methodologies.",
        image: "/images/tutorials/tut_531_4.png",
      },
    ],
    status: "ready",
  },
  {
    id: "534",
    title: "Understanding Test Escapes and the Limitations of Scan DFT Testing",
    abstract:
      "As semiconductor devices continue to scale in complexity and performance, test escapes have emerged as a critical challenge impacting product quality and system reliability. Despite advances in scan-based testing, cell-aware methodologies, and system-level test strategies, timing-related defects continue to evade detection, leading to operational failures and, in some cases, silent data corruption in large-scale computing environments. This tutorial provides a comprehensive examination of the root causes behind test escapes, the limitations of existing scan and system-level test methodologies, and the effectiveness of emerging timing-aware test approaches. Drawing on industrial production data and recent research, the session offers valuable insights into improving defect detection, enhancing test quality, and addressing the growing reliability challenges associated with advanced semiconductor technologies.",
    authors: [
      {
        name: "Adit D. Singh",
        affiliation: "Auburn University",
        bio: "Adit D. Singh is the Godbold Endowed Chair in Electrical and Computer Engineering at Auburn University and a globally recognized authority in VLSI test, reliability, and semiconductor quality. Over a distinguished academic and research career spanning more than four decades, he has made pioneering contributions to defect-based testing, adaptive testing, and statistical methods for integrated circuit validation. A Life Fellow of IEEE, he has authored more than 300 technical publications, holds internationally licensed patents, and has served in numerous leadership roles across the global semiconductor test community.\n\nHis extensive research, industry collaborations, and deep involvement in advancing test methodologies have provided him with unparalleled insight into the challenges of test escapes and timing-related failures in modern semiconductor devices. Combining rigorous academic research with practical industry perspectives, he brings a uniquely authoritative view on improving test effectiveness and ensuring reliable operation of increasingly complex integrated circuits.",
        image: "/images/tutorials/tut_534_1.png",
        imageClassName: "object-[center_40%]",
      },
    ],
    status: "ready",
  },
  {
    id: "504",
    title:
      "Scalable ATE Hardware Design: From Concept to Manufacturing with Reusable Architecture",
    abstract:
      "As semiconductor devices continue to push the boundaries of speed, power, and integration, the complexity of Automated Test Equipment (ATE) hardware design has increased significantly. Achieving reliable signal and power integrity while maintaining scalability, cost efficiency, and rapid deployment is now a critical requirement for successful device validation. This tutorial presents a comprehensive approach to designing robust ATE hardware, covering Device Interface Boards (DIBs), SI/PI methodologies, simulation-driven design practices, manufacturing readiness, and validation workflows. A key focus is the adoption of reusable hardware architectures based on modular motherboard-daughtercard concepts, enabling faster development cycles, improved scalability, and enhanced first-time-right success across diverse semiconductor product families.",
    authors: [
      {
        name: "Lokapriya Balakrishnan",
        affiliation: "Caliber Interconnects",
        bio: "Lokapriya Balakrishnan is a Test Engineer at Caliber Interconnects with over seven years of experience in semiconductor testing and ATE interface hardware development. Her work spans turnkey load board and probe card design, signal and power integrity optimization, device testing, and tester platform conversion projects. In addition to her technical contributions, she has successfully led engineering teams in delivering high-quality hardware solutions within demanding development schedules.\n\nHer experience across both hardware development and semiconductor validation provides her with a unique perspective on the challenges of designing scalable, high-performance ATE solutions. This expertise enables her to bridge the gap between hardware architecture, test requirements, and manufacturing realities.",
        image: "/images/tutorials/tut_504_1.png",
      },
      {
        name: "Senthilkumar Dhamodharan",
        affiliation:
          "Caliber Interconnects",
        bio: "Senthilkumar Dhamodharan is Vice President, Silicon Validation & Test Engineering at Caliber Interconnects, where he leads large-scale test engineering operations spanning SoC, PMIC, Digital, Mixed-Signal, and RF products. With more than 19 years of experience at industry leaders including Qualcomm, AMD, and NXP, he has played a significant role in advancing semiconductor test methodologies, engineering strategy, and intellectual property development.\n\nHis extensive experience managing complex validation programs and building high-performance engineering teams has given him deep insight into scalable test infrastructure and hardware development. This perspective makes him uniquely positioned to address the challenges of creating efficient, reusable ATE architectures for modern semiconductor products.",
        image: "/images/senthilkumar.png",
        imageClassName: "object-[center_10%]",
      },
      {
        name: "Vaishnavi Saravanan",
        affiliation: "Caliber Interconnects",
        bio: "Vaishnavi Saravanan is a Senior Test Engineer at Caliber Interconnects with over a decade of experience in testing SoC, Mixed-Signal, and RF devices across both bench and ATE environments. Currently leading Caliber's RF team, she has developed strong expertise in device characterization, validation methodologies, and high-performance test execution.\n\nHer extensive hands-on experience across multiple semiconductor domains provides valuable insight into the practical challenges of ATE deployment and validation. This background enables her to contribute a real-world perspective on designing scalable hardware solutions that improve efficiency, reliability, and test coverage.",
        image: "/images/tutorials/tut_504_3.png",
      },
    ],
    status: "ready",
  },
  {
    id: "342",
    title:
      "Customer Centric Post Silicon Validation Approach for System on Chip (SoC)",
    abstract:
      "As System-on-Chip (SoC) designs become increasingly complex, ensuring reliable silicon deployment requires a comprehensive validation strategy that extends well beyond fabrication and pre-silicon verification. Post-Silicon Validation (PSV) plays a critical role in bridging the gap between design intent and real-world customer usage, enabling early issue detection, efficient debug, and improved product quality. This tutorial provides a practical overview of customer-centric PSV methodologies, covering silicon bring-up, design-for-debug infrastructure, validation planning, benchmark-driven testing, and unified software frameworks that support both pre- and post-silicon environments. Attendees will gain insights into industry-standard validation flows, debug techniques, and test reuse strategies that accelerate product readiness while improving system reliability and customer experience.",
    authors: [
      {
        name: "Ravishankar Manishankar",
        affiliation: "Intel",
        bio: "Ravishankar Manishankar is a validation expert at Intel with over 21 years of experience spanning System-on-Chip platform validation, functional validation, and embedded wireless software development. Throughout his career, he has worked extensively in areas including PCIe, CXL, customer platform validation, benchmark enablement, and DSP firmware systems engineering across 2G, 3G, 4G, and DAB technologies. He also brings valuable academic experience from the United States, where he conducted research and taught advanced wireless communication topics.\n\nHis extensive background across silicon validation, software development, and customer platform enablement has provided him with a holistic understanding of the challenges involved in bringing complex SoCs to market. This combination of technical depth and real-world deployment experience gives him unique insight into customer-centric post-silicon validation methodologies and the tools, processes, and strategies required to ensure successful silicon qualification and deployment.",
        image: "/images/tutorials/tut_342_1.png",
      },
      {
        name: "Siloni Palani",
        affiliation: "Intel",
        bio: "Siloni Palani is a validation engineer at Intel with over nine years of experience in pre-silicon and post-silicon validation for data center GPUs and complex SoCs. Her expertise spans concurrency testing, platform validation, LPDDR5 memory systems, validation tool development, and automation frameworks. She has played a key role in hardware bring-up activities and system-level validation efforts focused on enhancing product quality and debug efficiency.\n\nThrough her work on complex silicon platforms, validation infrastructure, and automation-driven workflows, she has developed deep expertise in identifying, diagnosing, and resolving system-level issues throughout the product lifecycle. Her experience provides valuable perspectives on modern validation practices and the importance of scalable, customer-focused approaches to post-silicon validation in increasingly sophisticated semiconductor systems.",
        image: "/images/tutorials/tut_342_2.png",
      },
    ],
    status: "ready",
  }];

export const distinguishedAddressesData = [
  {
    id: 2,
    name: "Alpa Sood",
    affiliation: "Teradyne",
    title: "The Critical Role of Test Strategy in India's Semiconductor Growth",
    description: "As India accelerates its ambitions of becoming a global semiconductor hub, developing a robust test ecosystem is emerging as a strategic priority. Advanced test methodologies are essential not only for ensuring product quality and reliability but also for strengthening manufacturing capabilities, enabling supply chain resilience, and enhancing global competitiveness. This talk explores the pivotal role of test strategy in building a sustainable semiconductor ecosystem, highlighting the importance of collaboration between industry, government, and academia to support India's vision of becoming a leading semiconductor nation.",
    bio: [
      "Alpa is Country Manager for India at Teradyne, bringing over 15 years of experience across business, policy, and government affairs. Throughout her career, she has worked closely with the Government of India and various state governments to foster the growth and innovation of the semiconductor ecosystem, building strong partnerships between the public and private sectors that create opportunities for businesses, entrepreneurs, and the broader industry.",
      "Prior to joining Teradyne, Alpa led government affairs, legal, and strategic policy engagement at Marvell India, where she developed deep expertise in navigating complex industry landscapes. Her extensive background in bridging public and private sector relationships makes her a driving force in shaping India's semiconductor future."
    ],
    image: "/images/Alpa-Sood.png",
    imageClassName: "object-[40%_10%]"
  },
  {
    id: 1,
    name: "Don Chan",
    affiliation: "Cadence",
    title: "From Point Tools to Agentic AI: How EDA has impacted Semiconductor Industry",
    description: "Electronic Design Automation (EDA) has been the driving force behind decades of semiconductor innovation, enabling engineers to design increasingly complex chips while sustaining the pace of Moore's Law. As transistor scaling approaches its physical limits, the industry is transitioning toward heterogeneous chiplet-based architectures, 3D integration, and AI-driven design methodologies. This talk explores the evolution of EDA from traditional point tools to intelligent, agentic AI workflows, highlighting how advances in design technology co-optimization, DFT methodologies, and AI-assisted automation are reshaping semiconductor design. Attendees will gain insights into the next generation of EDA technologies that will power future innovations in high-performance computing and artificial intelligence.",
    bio: [
      "Don Chan is Vice President of Research and Development at Cadence, where he leads the Foundry organization and drives strategic partnerships across the global semiconductor ecosystem. He oversees technology enablement, process certification, and customer support for advanced semiconductor nodes while also leading marketing and business development for Cadence's Digital and Signoff product portfolio. Throughout his career, he has led key R&D initiatives spanning 3D-IC, Conformal, Modus, and Stratus technologies, and previously held leadership positions at Synopsys and Fujitsu Micro.",
      "His extensive experience in semiconductor design enablement, foundry collaboration, and advanced EDA technologies has provided him with a unique perspective on the evolution of chip design methodologies. By working closely with foundries, customers, and global R&D teams to deliver next-generation design solutions, Don is uniquely positioned to discuss how agentic AI, heterogeneous integration, and intelligent EDA workflows are transforming the future of semiconductor design."
    ],
    image: "/images/Don-Chan.png",
    imageClassName: "object-top scale-105"
  },
  {
    id: 3,
    name: "Rajesh Vaddempudi",
    affiliation: "Advantest, India",
    title: "The Intelligent Silicon Era: Redefining Semiconductor Test Through Innovation, AI, and Collaboration",
    description: "The semiconductor industry is entering an era where artificial intelligence, intelligent automation, and ecosystem collaboration are fundamentally reshaping test methodologies. As silicon complexity continues to increase, traditional approaches must evolve to deliver higher quality, faster time-to-market, and greater manufacturing efficiency. This talk explores how innovation in semiconductor test, combined with AI-driven intelligence and strong industry partnerships, is redefining the future of silicon validation, production, and lifecycle management, enabling the next generation of high-performance and reliable semiconductor products.",
    bio: [
      "Rajesh Vaddempudi is the Managing Director of Advantest India and a seasoned semiconductor leader with over 26 years of experience driving business growth, engineering innovation, and operational excellence. Throughout his career at Advantest, Texas Instruments, and Tessolve, he has developed deep expertise in semiconductor test, product engineering, and post-silicon validation, leading the establishment of advanced test infrastructures spanning wafer sort, final test, qualification, and reliability.",
      "Having successfully guided complex semiconductor products from silicon validation through production ramp, Rajesh brings a comprehensive understanding of the technologies and collaborative strategies required to deliver high-quality products at scale. His leadership across engineering, manufacturing, and customer engagement provides a valuable perspective on how AI and innovation are transforming the future of semiconductor test."
    ],
    image: "/images/Rajesh_Vaddempudi.png",
    imageClassName: "object-[center_10%]"
  },
  {
    id: 4,
    name: "Arojit Roychowdhury",
    affiliation: "Qualcomm",
    title: "Semiconductor Test: A Product Perspective",
    description: "As semiconductor products evolve from ultra-low-power edge devices to high-performance computing platforms, meeting increasingly stringent targets for power, performance, area, cost, and quality has become a defining industry challenge. Semiconductor test plays a pivotal role in bridging design and manufacturing by enabling high yield, product quality, and rapid time-to-market. This talk presents a product-centric perspective on semiconductor test, highlighting its growing importance in delivering reliable, scalable, and manufacturable silicon for high-volume production.",
    bio: [
      "Arojit Roychowdhury is Senior Director of Technology at Qualcomm India, where he leads chipset engineering for Snapdragon-based mobile platforms from concept through high-volume production. With over two decades of experience in semiconductor product development, he has held leadership roles across SoC design, architecture, and customer engineering at Qualcomm, Texas Instruments, and Intel. He holds an M.Tech in Electronic Systems from IIT Bombay and a Bachelor's degree in Electronics from the University of Mumbai.",
      "Having led multiple generations of high-volume semiconductor products from concept to commercialization, Arojit has firsthand experience in balancing engineering innovation with manufacturability, quality, and market demands. His product development perspective offers valuable insights into how semiconductor test serves as a critical enabler of product success, ensuring robust quality, accelerated production readiness, and sustained customer satisfaction."
    ],
    image: "/images/Arojit-Roychowdhury.png",
    imageClassName: "object-[50%_15%] scale-[1.05]"
  }
];

export const panelsData = [
  { id: 0, title: "Correlation Crisis in Semiconductor Test: Can AI Bridge the Gap?", affiliation: "Moderator: Sameer Chillarige", comingSoon: true },
  { id: 1, title: "India's Semiconductor Test Ecosystem: Growth story and Sustainability challenges", affiliation: "Moderator: Gaurav Bhargava", comingSoon: true },
  { id: 2, title: "Scaling DFT in the era of AI, HPCs, Chiplets - Are traditional DFT approaches efficient for MCMs and Chiplets?", affiliation: "Moderator: Kamlesh Pandey", comingSoon: true }
];

export const industryShowcaseData = [
  { id: 0, name: "Caliber", comingSoon: true },
  { id: 1, name: "Teradyne", comingSoon: true },
  { id: 2, name: "Advantest", comingSoon: true }
];
export const postersData = [
  {
    id: '13',
    title: 'Securing Design for Testability: Multi Layered Hardware Validation with Butterfly PUF',
    name: 'Keyur Mahant and Mitulbhai Kansagara'
  },
  {
    id: '41',
    title: 'A Process-Aware Multi-Task U-Net Framework for Mixed Wafer Defect Localisation and Diagnosis in Semiconductor Manufacturing',
    name: 'Venkatesh Kanago, Yashaswini Gadad and Sujithkumar Malaghan'
  },
  {
    id: '51',
    title: 'Bluetooth BLE FW based Test Methodology on ATE',
    name: 'Sai Sumanth Muppavarapu and Christina Kichenamourty'
  },
  {
    id: '54',
    title: 'Concurrent Functional Intelligence During Structural Test Using Selective Hierarchical Core Scan Bypass in Field-Deployable SLM IP',
    name: 'Hitesh Pradhan, Godithi Lakshmi Aruna Santhi, Rohit Mate, Sujit Panda and Vikas Gadi'
  },
  {
    id: '82',
    title: 'Leveraging Generative Artificial Intelligence for Automated Test Equipment (ATE) Test Program Generation in Semiconductor Validation and Production',
    name: 'Govarthanam Krishnasamy'
  },
  {
    id: '125',
    title: 'DRAC: A Dynamic Reconfigurable ATE Core for Extending Tester Capability in High-Resolution Data Converter Testing',
    name: 'Manoj Pachaiyan and Senthilkumar Dhamodharan'
  },
  {
    id: '144',
    title: 'ATE-AMFE: Automated Multi-Platform Feasibility Engine',
    name: 'Venkatraman Sivagnanam, Naveena Natarajan, Jaikrishnan Balakrishnan and Senthilkumar Dhamodharan'
  },
  {
    id: '146',
    title: 'Data-Driven Post-Silicon Validation Framework for High Bandwidth Memory in 2.5D Integration: Adaptive Stress Testing and Hierarchical Fault Isolation',
    name: 'Jaya Surya Moorthy, Kalyana Sundaram Chandran and Senthilkumar Dhamodharan'
  },
  {
    id: '175',
    title: 'Enabling Robust IEEE 1687 Interoperability in Heterogeneous IJTAG Networks through SIB Adaptor Architectures',
    name: 'Vistrita Tyagi, Kshitij Kulshreshtha, Amihay Rabenu and Manish Arora'
  },
  {
    id: '196',
    title: 'Virtual Emulation Ecosystem for Rapid Pre Silicon Validation',
    name: 'V N Sivakumar Avvaru, Srinivasan Arulanandam and Harini Sriram'
  },
  {
    id: '210',
    title: 'A Shift-Left Framework for Automated RTL-Level Correction of Testability Violations to Improve Stuck-At and Transition Fault Coverage',
    name: 'Sunny Kumar, Yeturi Om Sasankar and Philemon Daniel'
  },
  {
    id: '223',
    title: 'Smart Test Line Selection for Pre- and Post-Silicon Validation: Leveraging AI for Enhanced Efficiency',
    name: 'Ashwani Kumar, Trupti Joshi, Vishal B Bhogade and Hemanthkumar Sivaraj'
  },
  {
    id: '226',
    title: 'Scalable Fanin-Fanout Analysis Using Precomputed Reconvergence Data for DFT Verification',
    name: 'Tushar Jeevan, Chandan Kumar, Meetu Agarwal and Suraj Kashyap'
  },
  {
    id: '233',
    title: 'A Cache‑Resident Linux Framework for System‑Level Validation on Enterprise‑Class Processors',
    name: 'Manish Mukul, Madhavan Srinivasan, Mahesh Salgaonkar and Aditya Gupta'
  },
  {
    id: '240',
    title: 'HBM - Case study on a modern complex SOC with multi-die',
    name: 'Padmini Prakash and Pradip Kapure'
  },
  {
    id: '305',
    title: 'A Weighted Hierarchical Approach to Testpoint Configuration driving Efficient and Optimized DFT Convergence',
    name: 'Krunal Siddhapathak and Tathagat Biswas'
  },
  {
    id: '315',
    title: 'Protection of PUF Architectures Against Machine Learning Attacks Using Differential Privacy',
    name: 'Ravi Bandla and Venkata Sreekanth Balijabudda'
  },
  {
    id: '343',
    title: 'Detecting Crosstalk-Induced Static Noise Defects Using a Customized ATPG Test Flow',
    name: 'Siddarth Ambhorkar, Vevekanenda Gonugunta, Ramesh Chandel, Gaurav Mattey, Daniel Tille, Aneri Jain, Naveen Kumar M, Nithin Radhakrishna Pillai and Aditya Girish'
  },
  {
    id: '351',
    title: 'Navigating the Intricacies of Clock Domain Crossing: The Role of Unified Power Format',
    name: 'Meghana L, Sravan Kumar Challa, Leela Krishna Thota and Narendra Kumar Napa'
  },
  {
    id: '362',
    title: 'A Novel Test Point Insertion Methodology for Enhanced Test Efficiency and Improved Design Quality',
    name: 'Pervez Garg, Parth Kadiya and Pavithra K'
  },
  {
    id: '369',
    title: 'In System Test – Driven Memory Initialization for Improved Reliability in Multimode SoCs',
    name: 'Salome Packiavathy, Venkatesh Vandrangi, Suraj Muzhayil Chathoth and Gevorg Torjyan'
  },
  {
    id: '389',
    title: 'An FPGA-Coordinated Validation Framework for Digital DUTs with DC and Protocol Testing for First Silicon Bring Up',
    name: 'Senthilkumar Dhamodharan, Sreeram V.R., Dyaneswaran Anguraj, Swetha Kumar and Shahana Balamurugan'
  },
  {
    id: '406',
    title: 'Pattern Count Optimization and Test Cost Reduction Using TSO.ai for ATPG',
    name: 'Jai Sehgal, Aditi Bahuguna, Peeyush Bhatnagar, Sruthi Nanduru, Theo Toulas and Prakyath Madadi'
  },
  {
    id: '511',
    title: 'A Functionally Self-Testable RISC-V Processor Using a Custom Test Instruction Set',
    name: 'Satyam Kuar and Jaynarayan T Tudu'
  }
];

export const exhibitsData = [
  { id: 0, name: "Exhibit Zone", affiliation: "Location: Grand Victoria 1 & 2", comingSoon: true }
];

export const technicalPapersData = [
  {
    "name": "RL-Driven 3D Clustering of JScan Architecture with Routing and Area Optimization in Chiplet SiP",
    "title": "RL-Driven 3D Clustering of JScan Architecture with Routing and Area Optimization in Chiplet SiP",
    "authors": [
      {
        "name": "Hilay Patel, Naman Kalra and Jaynarayan T Tudu"
      }
    ],
    "abstract": "Three-dimensional stacked ICs introduce new Design-for-Test (DfT) challenges due to high power density, routing congestion, and cross-tier connectivity constraints. In this work We propose 3D Joint-Scan, a tier-aware DfT architecture that extends the 2D Joint-scan framework to multi-tier 3D ICs and integrates reinforcement-learning-based (RL) physical-design optimization. Each tier combines clustered P-serial (MSS) and Prandom (PRAS) scan structures with dual MISRs. We introduce RL driven scan flip-flops clustering in each layer to learn an optimal configuration to jointly minimize routing congestion and wire length while keeping the test power, test time, and data volume unchanged as base line. Experiments on scaled ISCAS89 benchmarks validate the proposed formulation to be efficient in dealing with routing congestion and area optimization. The design for test parameters such as test time, data volume, and test power are constrained within the given limits. The experimental results show the routing congestion reduction by 38% compared to the base line 2D and 3D JScan architecture. The complete 4-tier design is fully synthesized and place-and-routed in 65 nm technology with a maximum area reduction of 20% compared to baseline."
  },
  {
    "name": "A Methodology for Robust Testing of Through Glass Vias (TGV) on Glass Substrate-based 3D Chiplets",
    "title": "A Methodology for Robust Testing of Through Glass Vias (TGV) on Glass Substrate-based 3D Chiplets",
    "authors": [
      {
        "name": "Manisha Kumari, Jaynarayan T Tudu and Binod Kumar"
      }
    ],
    "abstract": "The continued performance pull from the next generation application is driving newer packaging technology to keep up with More-than-Moore performance requirement. Glass substrate-based packaging for the 3D/2.5D chiplet SiP (system in package) is a promising solution which is already in the production pipeline. For 3D/2.5D chiplet packaging technology, through glass vias (TGVs) play a crucial role to interconnect the packaging layers. This layer formation process requires KnownGood-X for substrate, interposer and redistribution layer (RDL). In this work, we address the problem of electrical testing of TGVs for early Known-Good-RDL and Known-Good-Interposer decision. We propose a two-dimensional daisy-chain (2D2C) algorithm and fault localization methodology to test for resistive defects. The experimental results indicate that the proposed methodology detects defects and isolates the defective TGV with a detection rate> 93.3 -100%. Additionally, the experimental results demonstrate 77.4%-100% fault localization."
  },
  {
    "name": "Cost Aware Sector Symmetry and Wafer Cutting Methods for 3D ICs with Heterogeneous Defects",
    "title": "Cost Aware Sector Symmetry and Wafer Cutting Methods for 3D ICs with Heterogeneous Defects",
    "authors": [
      {
        "name": "Tanusree Kaibartta, Saksham Jha, Digvijay Anand Anand and Debesh Das"
      }
    ],
    "abstract": "In the growing field of semiconductor technology three dimensional ICS plays a pivotal role due to their potential for enhanced device performance and reduced footprint. However, wafer on wafer stacking faces the challenge of low compound yield due to defect accumulation across layers. To resolve this issue a comprehensive cost analysis is proposed which considers manufacturing, testing and packaging expenses across all stacking layers. In this regard a sector-based wafer manipulation method (SSC4)(where rotationally symmetric wafers are divided into four identical sectors and optimally aligned to improve stacking yield) was introduced. Based on that foundation, this work introduces an extended cost model that incorporates pattern-dependent wafer premiums\u2014accounting for differences in defect quality by assigning varying cost multipliers to different wafer types. This enables finer-grained analysis of stacking decisions in heterogeneous wafer scenarios, where mixing patterns introduce trade-offs between cost and yield."
  },
  {
    "name": "Innovative Memory Interconnect Architecture: Setting New Standards for Security, Safety and Performance in Real-Time Control MCUs",
    "title": "Innovative Memory Interconnect Architecture: Setting New Standards for Security, Safety and Performance in Real-Time Control MCUs",
    "authors": [
      {
        "name": "Prasanth Viswanathan Pillai, Varshashree Kottadamane, Saya Goud Langadi, Labeeb K, Naveen Kothuri, Narendra Ravilla, Ramakrishna Pidaparthi, Rohit Chaudhari and Sivareddy Maramreddy"
      }
    ],
    "abstract": "This paper presents an innovative memory interconnect architecture for modern Microcontroller Units (MCUs), addressing the critical triad of performance, safety, and security requirements in embedded systems. The architecture incorporates advanced features including sophisticated control peripherals, non-volatile memory (NVM), static randomaccess memory (SRAM), and efficient interconnect topologies such as crossbar and hierarchical bus structures. Safety mechanisms like Error Correction Codes (ECC) and Memory Protection Units (MPUs) are integrated to ensure fault tolerance. Security features encompass secure boot processes, hardware-accelerated cryptographic engines, and robust access control mechanisms. The paper details the implementation of these features in an emerging real-time MCU platform, demonstrating how the architecture balances performance optimization with safety and security requirements while maintaining cost-effectiveness."
  },
  {
    "name": "Test Pattern-Driven Detection of Hardware Trojans Using Switching Activity Analysis in FPGA-Based Systems",
    "title": "Test Pattern-Driven Detection of Hardware Trojans Using Switching Activity Analysis in FPGA-Based Systems",
    "authors": [
      {
        "name": "Kannan S J, Chinakaku Lakshmi Prasanna and Sobhit Saxena"
      }
    ],
    "abstract": "Hardware Trojans (HTs) implanted at the RTL level have been identified as a significant security risk, as their low-probability triggering events make them difficult to detect through conventional functional test and ATPG methods. Current side-channel detection methods rely on reference chips, off-chip instrumentation, or computational overhead, making them impractical for field deployment. This paper proposes a synthesizable test pattern-driven detection method based on on-chip switching activity analysis. A parameterized test pattern generator is designed with dual modes: normal mode generates test patterns based on a Linear Feedback Shift Register (LFSR) for pseudo-random pattern testing, whereas test-driven mode generates deterministic test patterns for Trojan detection, ensuring detection of rare combinational, sequential FSMbased, and data leakage Trojan triggers. A cycle-accurate Hamming distance calculation module is used to calculate output divergence between consecutive cycles and compare it with a statistical reference value of six toggle counts. The synthesizability of the test pattern generator and detection logic was validated on a Xilinx Artix7 FPGA (XC7A35T-1CPG236C), achieving 100% detection of all three classes of HTs within 5-16 clock cycles, zero false positives within 6,400 random test cycles, a maximum frequency of 320 MHz, and a total overhead of 178 LUTs and 96 FFs"
  },
  {
    "name": "STAMP: Statistical Trojan Attribution via Multi-class Power-trace analysis",
    "title": "STAMP: Statistical Trojan Attribution via Multi-class Power-trace analysis",
    "authors": [
      {
        "name": "Senthilkumar Dhamodharan, Sinthanai Selvi G, Karthika R and Abirami Vinayagamoorthy"
      }
    ],
    "abstract": "The globalization of semiconductor supply chains has posed significant security threats. An attacker can place unauthorized modifications, known as Hardware Trojans (HTs), during the fabrication process or shipping. Once inside the system, the Trojan horses can compromise the secrecy of the keys, disable vital systems, or establish backdoors. The majority of the existing techniques can detect the presence of the Trojan but fail to detect the type of Trojan. This paper introduces an innovative system that is easy to comprehend, capable of detecting the type of Trojan present in the system. It utilizes 26 basic statistical attributes such as mean, standard deviation, maximum, minimum, skewness, and kurtosis from the power consumption patterns of the chip. The dataset consists of power and electromagnetic side-channel measurements of 12 AES Trojan horse benchmark designs (AEST400 to AES-T2000), from IEEE Dataport.The accuracy of the machine learning model, which is based on the XGBoost algorithm, in determining the type of Trojan present is around 77%, thus eliminating the need for a Golden Reference Chip. Furthermore,SHAP analysis is used to obtain a clear \u201cTrojan Fingerprint Map.\u201d The map illustrates precisely which features of the power signal make each type of Trojan unique, considering three different operating conditions. For the first time, this framework allows us to obtain a signal-level fingerprint for each Hardware Trojan variant. This can prove useful in targeted inspection, tracing the origins of the threat in the semiconductor supply chain"
  },
  {
    "name": "Comprehensive Coverage Framework for LPDDR6 Feature Validation: Navigating Complex Modes and Reducing the Verification Closure Gap",
    "title": "Comprehensive Coverage Framework for LPDDR6 Feature Validation: Navigating Complex Modes and Reducing the Verification Closure Gap",
    "authors": [
      {
        "name": "Dharini Subashchandran, Gruhesh Patel, Meghna Ahuja and Shyam Sharma"
      }
    ],
    "abstract": "LPDDR6\u2019s are a breakout DRAM with advanced features -Efficiency Mode, Meta Data on Data Bus, X6 Mode, System Meta Mode including carved-out memory, PRAC, dynamic frequency scaling just to name few - create complex verification challenges beyond traditional Commands, data, Timings, Registers, and DRAM state machine coverage. Feature interactions and configuration-dependent behaviors generate exponential scenario spaces that conventional approaches do not adequately address. This paper presents a feature-centric coverage framework employing Randomization to generate targeted bins across mode transitions, operating speeds, bus width, and density variations. Our coverage framework leverages some of the in-house AI tools to parse specifications and detect coverage gaps which are used for targeted testcase creation. This methodology significantly improves coverage closure and reduces manual effort, providing a scalable solution to validate complex next-generation memory protocols."
  },
  {
    "name": "A Novel Verification Method for Debug Tracing-in Close Chassis System",
    "title": "A Novel Verification Method for Debug Tracing-in Close Chassis System",
    "authors": [
      {
        "name": "Maneesh Pandey and Madhav Lekkala"
      }
    ],
    "abstract": "Design for Debug (DFD) plays a crucial role in postsilicon validation during silicon execution, serving as a pivotal phase in the system design cycle. This phase aims to capture design bugs that have escaped detection during the pre-silicon verification phase, particularly in modern complex System-onChip (SoC) designs. In the realm of pre-silicon simulation, DFD SoC presents a dual-faceted approach to validating the SoC, offering both open and closed-chassis debug platforms. In these platforms, trace data is collected at the General-Purpose Input/Output (GPIO) pins and via the GPIO pins to the I3C Bus Functional Model (BFM), respectively. Legacy simulation-based methods for pre-silicon validation have been inherently timeconsuming (3-5 days) due to the necessity of configuring multiple BFMs, such as Sideband and JTAG, within the verification environment. These methods often lead to significant delays and dependencies, complicating the verification process. To address these challenges, we propose a novel verification methodology for debugging trace data in a closed-chassis DFD SoC system. Our proposed methodology leverages the Sneak-Peek (SNPK) engine protocol and Test Access Port (TAP) to perform debugging and tracing of the original source data through the I3C BFM alone, eliminating the need for Sideband and JTAG BFMs. This approach significantly reduces the number of BFM dependencies in the closed-loop chassis debug system, streamlining the verification process and requiring only 1 day for testbench setup bring-up which further enhances efficiency, and effort in bringing up sideband network, validating it for connectivity issues are all a time consuming process, this can be avoided By implementing this alternative method, we aim to accelerate the overall validation cycle, improve deliverables, and contribute to a faster time-tomarket for complex SoC products. This methodology not only simplifies the configuration process but also ensures comprehensive tracing of debug data, making it a standalone, portable solution ready for deployment across various SoC project environments"
  },
  {
    "name": "Assertion Based Formal Verification of AES 128 Crypto Core",
    "title": "Assertion Based Formal Verification of AES 128 Crypto Core",
    "authors": [
      {
        "name": "Shivang Sharma, Vineeth Jaisal and Prashant Singh"
      }
    ],
    "abstract": "The Advanced Encryption Standard (AES) is a cryptographic symmetric key algorithm widely used in secure communication, storage devices, and embedded systems. Even a small RTL bug can compromise system security, making its correct implementation critical. This paper presents the formal verification of an open-source AES 128 encryption core using a System Verilog Assertions (SVA) based formal verification environment developed entirely from scratch. The verification environment attaches to the design under test via the System Verilog bind construct, requiring no modification to the underlying RTL. The environment is structured across four verification layers: FSM transition correctness, round register integrity, handshaking signal protocol and per-round datapath correctness. Formal verification provides mathematical guarantee of correctness for all possible states, whereas simulation-based approaches face difficulty in covering all input combination pairs of plaintext and keys. All assertions are formally proven, all cover properties are witnessed, and complete formal sign off is achieved with 100% observability coverage, 99.6% reachability coverage, and 100% sign-off coverage within 278 seconds of total CPU time, confirming mathematical correctness of the AES-128 implementation across every possible plaintext and key combination."
  },
  {
    "name": "Physically Aware Weighted Fault Model : A new paradigm in testing",
    "title": "Physically Aware Weighted Fault Model : A new paradigm in testing",
    "authors": [
      {
        "name": "Sandipan Sharma, Srinivas Vooka, Maheedhar Jalasutram, Pranav Murthy, Chieh-Jen Ku and Yanhan Zhu"
      }
    ],
    "abstract": "For past six decades, standard fault models such as Transition-Delay Faults (TDF) and Stuck-at Faults (SAF) have relied on uniform weighting for fault sites/nodes, despite the common knowledge among Design-For-Test (DFT) engineers that failure probabilities vary across different fault nodes. This reliance on imprecise mechanisms, driven by the historical absence of a scientific weighting methodology, explains the poor correlation between test coverage and physical metrics like yield loss or Defective-parts-per-million (DPPM). While cell-aware testing offers a partial solution, it remains limited by its lack of integration with real-world failure data and its failure to account for routing-related defects. To overcome these challenges, our paper introduces a novel Multi-Layer Perceptron (MLP) network model that utilizes feature correlation buildup to assign accurate failure weightages based on the actual physical parameters, such as metal routing length and total via counts, derived from Continue-on-Fail (CoF) ATE data. As the model is trained on increasing volumes of data, its ability to predict DPPM and fallout will improve, allowing for a more authentic representation of test coverage. Ultimately, this weighted approach enables the optimization of test processes by reducing pattern counts and prioritizing patterns based on their true defect-catching efficacy"
  },
  {
    "name": "Rethinking RTL DFT: A Discrete RTL Flow for Parallel DFT Integration",
    "title": "Rethinking RTL DFT: A Discrete RTL Flow for Parallel DFT Integration",
    "authors": [
      {
        "name": "Mohan Raj Gopal, Veejaye Panayadian and Kundan Jha"
      }
    ],
    "abstract": "Shift-left DFT methodologies enable early insertion of test logic at the RTL stage, but conventional flows rely on DFT EDA tools to directly insert CODECs, TDRs, MBIST, scan routers, pin multiplexing, boundary scan, and TAP controllers into design RTL, enforcing serial workflows between design and DFT teams, resulting in high tool runtime, license usage, and intrusive design RTL modifications. This paper presents a discrete RTL DFT flow enabling true parallel development at two levels: design\u2013DFT team independence and concurrent wrapper development. Using script-based, modular grey-box abstractions\u2014TestWrap, MemWrap, and IPWrap\u2014 the approach decouples DFT integration from functional RTL and continuous tool invocation. A reusable multi-vendor codec library further reduces tool dependency across partitions and projects. Industrial validation across 50 measured design releases demonstrates an average DFT integration turnaround of 3 days, with a worst-case peak of 11 days, while maintaining functional correctness and achieving scalable, cost-efficient shift-left DFT integration in a representative internal deployment."
  },
  {
    "name": "A Novel Power-aware ATPG with Biaxial Transition Control for Extreme Low Power Targets",
    "title": "A Novel Power-aware ATPG with Biaxial Transition Control for Extreme Low Power Targets",
    "authors": [
      {
        "name": "Hanumant Tuntoni, Hillol Maity, Sreenu Kakanuri, Peter Wohl, Parthajit Bhattacharya, Bruce Xue and Geguang Miao"
      }
    ],
    "abstract": "Aggressive power reduction during compressed scan test is a critical requirement for modern VLSI designs, yet it is fundamentally challenged by compression hardware that obstructs direct ATPG control over scan chain toggles. Prior art has focused on uni-axial power management, providing either horizontal control by freezing the decompressor to hold values across shift cycles, or vertical control by attempting to gate entire scan chains. These solutions, however, operate independently and are often tailored to specific power budgets, with horizontal control typically being more efficient for relaxed targets and vertical control for more stringent constraints. This paper introduces the first co-designed biaxial power control methodology for deterministic ATPG, featuring a novel decompressor architecture that overcomes these limitations. Our hardware enables simultaneous horizontal shift-holding and, direct vertical scan chain blocking through dedicated control registers. This architecture is driven by a tightly-coupled, power-aware ATPG algorithm that intelligently exploits both control mechanisms for highly granular toggle management. The methodology is enhanced by a \u2018shift-left\u2019 test generation strategy that embeds power-aware decisions directly into the fault-merging process. Experimental results on industrial designs show that, compared to a baseline uni-axial technique, our complete biaxial solution reduces pattern count by 3.03x, test cycles by 2.16x, and CPU time by 4.73x, while improving test coverage by 3.27%. These gains are achieved while robustly meeting aggressive power targets as low as 15% shift and 5% capture, demonstrating a significant advance in low-power test quality and efficiency."
  },
  {
    "name": "Differential Evolution with Fitness-and Position-Based Selection in Search of Best Test Pattern for Combinational ATPG",
    "title": "Differential Evolution with Fitness-and Position-Based Selection in Search of Best Test Pattern for Combinational ATPG",
    "authors": [
      {
        "name": "Manish Kumar, Isha Dubey, Priyajit Bhattacharya and Rahul Bhattacharya"
      }
    ],
    "abstract": "Evolutionary algorithms (EAs) are demonstrated to be time effective to identify the optimum test pattern with highest fault coverage in a wide search space of digital tests in VLSI circuits. This work focused on developing MATLAB based Automatic Test Pattern Generation (ATPG) framework to determine the optimal test pattern which can detect maximum number of stuck-at faults in combinational circuits using Fitness-and Position-Based Selection Differential Evolution (FPS-DE). In FPS-DE, the parent selection enhances convergence and diversity. The proposed method is evaluated using ITC\u201999 combinational benchmark circuits and contrasted with Genetic Algorithm (GA), Particle Swarm Optimization (PSO), and a well-known open-source ATPG tool, ATALANTA. The proposed methodology has been used to determine the appropriate mutation strategy for each type of benchmark circuit. Overall, the experimental results demonstrate that FPSDE can effectively generate high-quality test patterns for combinational ATPG"
  },
  {
    "name": "Signal Integrity Simulation Hour Optimization: A Novel AI Framework Using Minute-Scale SI Predictor in High-Speed Test Interface Hardware Design",
    "title": "Signal Integrity Simulation Hour Optimization: A Novel AI Framework Using Minute-Scale SI Predictor in High-Speed Test Interface Hardware Design",
    "authors": [
      {
        "name": "Senthilkumar Dhamodharan, Lokapriya B, Dyaneswaran A, Karthika R and Lokendran S"
      }
    ],
    "abstract": "Signal Integrity (SI) of critical high-speed paths is closely related to topological net connectivity, geometric trace routing morphology, multilayer dielectric stack up permittivity profiles, conductor loss tangent characteristics and via barrel parasitic structures. As high-speed integrated circuit design grows larger, SI simulation becomes computationally unaffordable and machine learning based SI prediction has been explored as a promising solution for freezing layout design without longer simulation hours. In this paper, we present an EDA tool independent, machine learning driven SI prediction framework utilizing heterogeneous Graph Neural Networks (GNNs) for rapid pre-manufacturing integrity assessment. By leveraging standardized PCB manufacturing databases such as ODB++, IPC-2581, and Gerber, the framework enables data extraction and model training from layouts generated by diverse EDA tools. Our methodology constructs attributed heterogeneous graphs encoding electrical adjacency, Euclidean spatial proximity and vertical reference plane coupling through typed edge relations. Thus, we propose a novel graph structure, TL Graph, to unify representations of transmission line structure and fine grained segment relations. Though this framework may require several iterations to achieve compliance, the time line penalty is minimal with sub 3 second inference enabling engineers to adjust layouts with negligible schedule impact versus several 100s of hour cycles. The proposed methodology significantly reduces the overall design time line by utilizing model based predictions in place of multiple iterative EM simulations during the initial design phase, with full wave simulations performed only for final board evaluation. The framework reduces design iterations by 73% and compresses development cycles by 1.8 weeks per platform. The scope of the future research work is also discussed towards the end of this paper."
  },
  {
    "name": "AI-Driven IP Configuration Optimization for Post-Silicon Validation",
    "title": "AI-Driven IP Configuration Optimization for Post-Silicon Validation",
    "authors": [
      {
        "name": "Akhilesh Tiwary, Nihar Chaniyara, Utsav Banerjee and Maneesh Kumar Pandey"
      }
    ],
    "abstract": "Post-silicon validation of configurable intellectual property suffers from a persistent configuration selection problem: the legal operating space grows rapidly with feature combinations, but actual silicon execution remains limited by platform availability, debug effort, and turnaround cost. In many industrial flows, configuration choice is still driven by manual expertise and retrospective coverage inspection, which makes it difficult to prioritize representative and corner-case scenarios systematically. This paper presents a machine-learning-driven framework for post-silicon IP configuration optimization. The method converts raw configuration descriptors into a behavior-oriented feature space, applies K-Means-family clustering and DBSCAN to identify dense and sparse operating regions, and produces a reduced yet diversity-preserving execution set for post-silicon testing. The workflow is organized as a three-layer system comprising data cleanup, clustering and evaluation, and inference. Progressive experiments show that feature-aware clustering materially improves planning quality: K-Means improves from a silhouette score of 0.3250 to 0.4480 across refinement stages, while DBSCAN improves from 0.0931 to 0.5451 with only about 0.3% noise in the final setting. The proposed framework reduces redundant postsilicon test cycles while preserving representative and high-risk configurations needed for effective validation"
  },
  {
    "name": "T-MAP: A Cross-Platform AI driven Test-Program Metadata Analysis Tool for Digital Coverage, Force, limit and Range Verification",
    "title": "T-MAP: A Cross-Platform AI driven Test-Program Metadata Analysis Tool for Digital Coverage, Force, limit and Range Verification",
    "authors": [
      {
        "name": "Kaushik Chakravorty, Dundapa Sankapal, Vishal Rohilla, Sudhish Raj Gj, Pratyush Dargan and Robert Cook"
      }
    ],
    "abstract": "Testers across the industry employ diverse digital/analog inputs and generate varied outputs, making a universal audit framework impractical. Automated audits of digital coverage, voltage settings, force conditions, and limit-vsclamp comparisons are becoming essential for every test program. T-MAP extracts input and output information to construct a metadata-analysis model that highlights coverage gaps, reduces manual effort, streamlines Git-PR reviews, and captures errors missed by human auditors. AI-driven analysis ensures scalability as automation scopes expand. The approach is fully agnostic to tester type, input format, and output interface, eliminating the maintenance overhead of platformspecific scripting and improving engineer adaptability across platforms"
  },
  {
    "name": "Post-Silicon Validation of Neuromorphic SoCs: A Hybrid BIST and ML-Based Approach for NVM Synaptic Fault Detection",
    "title": "Post-Silicon Validation of Neuromorphic SoCs: A Hybrid BIST and ML-Based Approach for NVM Synaptic Fault Detection",
    "authors": [
      {
        "name": "Kalyana Sundaram Chandran, Senthilkumar Dhamodharan and Sindhu Mathy S"
      }
    ],
    "abstract": "Neuromorphic Integrated Circuits (ICs) emulate biological neural systems through event-driven spike processing, enabling edge AI, robotics and cognitive computing. Post-silicon validation of these systems faces critical challenges due to absent on-chip debug infrastructure, limited observability into asynchronous spike-driven operations and large-scale synaptic connectivity. Non-Volatile Memory (NVM) synapses are prone to drift,wear-out and stuck faults that degrade inference accuracy. Existing approaches BIST, inference-based testing, and simulation struggle with intermittent faults arising from analog variability and asynchronous operation. This paper presents a hybrid data-driven framework combining structured BIST sequences, adaptive stress patterns and lightweight ML runtime monitors with hierarchical fault localization at neuron, synapse and network levels, correlating spike activity statistics, synaptic state inference and telemetry data. Silicon validation on a fabricated 28 nm CMOS neuromorphic processor (1024 LIF neurons, 50 chips, 5 fabrication lots) demonstrates 94.2% \u00b1 1.8% fault coverage, 92% diagnostic time reduction versus exhaustive scan and robust operation under 18% analog variation. Total overhead is 1.3% die area and 2.3% power significantly lower than DiagNNose with statistical significance versus BIST-only (p < 0.001), confirming scalable, resilient validation for mission-critical neuromorphic systems"
  },
  {
    "name": "State-Isolated Scan - A Secure Low-Power Scan Architecture",
    "title": "State-Isolated Scan - A Secure Low-Power Scan Architecture",
    "authors": [
      {
        "name": "Ravikumar C.P., Kushal C."
      }
    ],
    "abstract": "The number of flip-flops and gates in Systems-onChip is steadily increasing. Power dissipation during scan shift can exceed the limit imposed by the package, making the test destructive. Power droop resulting from high switching activity during scan test can result in errors, leading to a test-induced yield loss. Several authors have proposed techniques such as staggered scan to reduce scan shift power. Another technique is to add a series of logic gates that block the propagation of switching activity from scan registers into the combinational logic. Scan chains can compromise the security of circuits. A knowledgeable hacker can put the circuit in test mode and scan out sensitive information. In this paper, a technique called \u201cState Isolated Scan\u201d (SIS) is proposed, which addresses both the power issue as well as the security issue. SIS allows complete isolation of the state information during scan shift-in and shift-out operations, thereby eliminating the propagation of cell switching activity into the combinational logic. At the same time, a hacker does not get access to scan data through top-level pins, thereby making the test architecture secure."
  },
  {
    "name": "eFPGA-Enabled Dynamic Access Control for Secure IEEE 1687 (IJTAG) Networks",
    "title": "eFPGA-Enabled Dynamic Access Control for Secure IEEE 1687 (IJTAG) Networks",
    "authors": [
      {
        "name": "Anekait Thampi, Anshul Raghavendra Katti, Manish Nagaraju and Sudeendra Kumar K"
      }
    ],
    "abstract": "Modern System on Chip (SoC) designs integrate numerous embedded instruments for testing, debugging, postsilicon validation, and in-field monitoring. The IEEE 1687 (IJTAG) standard provides scalable access through a reconfigurable scan network of Segment Insertion Bits (SIBs), but this flexibility exposes internal resources to unauthorized access through the test infrastructure. Existing protection approaches rely on fixed hardware mechanisms, limiting adaptability across device lifecycle phases. This work proposes a secure IJTAG architecture integrating an eFPGA between the TAP and the IJTAG network as a reconfigurable security layer that controls instrument cluster connectivity through authenticated configuration, enabling lifecycle-aware isolation while preserving IJTAG flexibility. The architecture is evaluated on IJTAG benchmark networks to assess scalability."
  },
  {
    "name": "Design of a SAT-Resilient IJTAG Architecture for Secure and Scalable On-Chip Instrument Access",
    "title": "Design of a SAT-Resilient IJTAG Architecture for Secure and Scalable On-Chip Instrument Access",
    "authors": [
      {
        "name": "Saravanan P, Dharani Sree K, Jothika K, Nivashini S, Sivaprabha Sri Pl"
      }
    ],
    "abstract": "The IEEE P1687 Internal JTAG (IJTAG) provides a flexible infrastructure for accessing embedded on-chip instruments used for testing, debugging, and configuration in modern integrated circuits. However, the accessibility of IJTAG scan networks can expose internal circuit structures and sensitive data, making them vulnerable to attacks such as intellectual property theft, reverse engineering, and unauthorized instrument access. Conventional logic locking techniques provide limited protection since they can be compromised using de-obfuscation methods. To address these challenges, this paper proposes a SATresilient secure IJTAG architecture that integrates Fault-based Logic Locking (FLL) for Locked Segment Insertion Bits (LSIBs) with a hybrid Anti-SAT block employing multiplexer-based wire entanglement. The proposed design restricts unauthorized access to embedded instruments while increasing the complexity of key recovery. Experimental results demonstrate that increasing the key width significantly enlarges the key search space; A 16-bit key leaves 24,286 unresolved keys after 10 SAT solver iterations, making brute-force recovery impractical"
  },
  {
    "name": "PQC-Based Secure Access Manager for IJTAG Network",
    "title": "PQC-Based Secure Access Manager for IJTAG Network",
    "authors": [
      {
        "name": "Sudeendra Kumar K, Prajwal G S Basavaraj, Abhinav S, Arun Kumar N"
      }
    ],
    "abstract": "As the complexity of System-on-Chip (SoC) designs is increasing, the number of instruments embedded within the chip has also grown significantly. On the other hand, the flexibility provided by the IEEE 1687 standard has led to security issues such as unauthorized access, leakage of information contained in the scan chain, replay attacks, and misuse of the test interface. The existing security schemes for IJTAG are primarily based on conventional cryptographic techniques like RSA and lightweight ciphers. As these techniques are vulnerable and it is safe to migrate to post quantum ciphers even for the chip test security for the devices which have long utilization life especially in the automobiles and industrial control. This work addresses the security issues by developing a secure IJTAG access architecture based on lattice-based Post Quantum Cryptographic (PQC) techniques. The proposed solution is a combination of ML-KEM and ML-DSA for a secure IJTAG. ML-KEM is used for secure session key establishment. ML-DSA is used for authentication of test access requests and unlocking the Access Manager. In comparison to existing schemes, based on classical cryptographic schemes, the authorization time/access time of the proposed PQC based mechanism is high. The security analysis shows that, the proposed scheme is a countermeasure against brute-force and scan sniffing attacks on par with the existing solutions."
  },
  {
    "name": "Real-Time Path Resistance Compensation and Spatial Diagnostics for High-Volume Wafer Test",
    "title": "Real-Time Path Resistance Compensation and Spatial Diagnostics for High-Volume Wafer Test",
    "authors": [
      {
        "name": "Mathangi Raghuraman, Dinesh Sharma, Siva Elango S, Sujith Thomas"
      }
    ],
    "abstract": "During high-volume wafer sort on Automated Test Equipment (ATE), DC parametric measurements are frequently degraded by variable contact resistance at the probe needle-to-pad interface. While standard ATE Time Domain Reflectometry (TDR) calibration resolves edge-timing delays, and offline DC calibration effectively reduces static system resistance from the Parametric Measurement Unit and loadboard traces, these methods fail to account for dynamic, touchdown-dependent fluctuations in contact resistance. This uncompensated variance leads to false failures, excessive retesting, and significant yield loss. This paper proposes a real-time de-embedding methodology that dynamically measures the Total Path Resistance for every die. By isolating and compensating for the variable contact resistance component during active testing, the proposed method recovers true silicon performance without throughput penalty. Furthermore, this work introduces a novel spatial diagnostics framework for highvolume wafer test. By aggregating real-time path resistance data into 2-D wafer heatmaps, the system successfully isolates systematic mechanical degradation such as prober planarity tilt enabling data driven predictive hardware maintenance. Silicon validation across high-volume production devices demonstrates tightened measurement distributions, significant yield recovery, and improved probe card lifecycle management."
  },
  {
    "name": "Polynomial Regression Based Qualitative Assessment of Automated Test Equipment Calibration",
    "title": "Polynomial Regression Based Qualitative Assessment of Automated Test Equipment Calibration",
    "authors": [
      {
        "name": "Matthias Werner, Simon Schweizer, Ilia Polian, Ernst Aderholz, Anand Venkatachalam, Matthias Sauer"
      }
    ],
    "abstract": "In order to preserve measurement accuracy, Automatic Test Equipment (ATE) periodically generates ATE adjustment data as part of its periodic maintenance. Parametric current measurements involving analog and digital instrumentation have been analyzed together with ATE adjustment data using polynomial regression. Key takeaway from this analysis done with CAN Transceiver measurements from multiple Advantest V93000 Tester using multiple test hardware is that degree of correlation between the measurement result and adjustment data varies from channel to channel and it is also dependent on the ATE measurement range. Additional insights on the process capability trend of parametric measurement involving tester channel that shows negative correlation along with time series plots of ATE adjustment data are provided with an aim to evaluate accuracy and drift beyond specification limits in order to derive more value from ATE instrumentation."
  },
  {
    "name": "A Novel Plug-In Module Architecture for Extending Automatic Test Equipment Capability to Wireless Testing of Pin-Less Semiconductor Devices",
    "title": "A Novel Plug-In Module Architecture for Extending Automatic Test Equipment Capability to Wireless Testing of Pin-Less Semiconductor Devices",
    "authors": [
      {
        "name": "Sathiyapriya Krishnamoorthy, Manoj Pachaiyan, Senthilkumar Dhamodharan"
      }
    ],
    "abstract": "Contactless integrated circuits are increasingly used in wireless identification, secure transactions, and short- range communication applications. Devices such as Near Field Communication (NFC), Radio Frequency Identification (RFID), smart cards, and secure identification modules operate through electromagnetic coupling using on-chip antenna structures, enabling power harvesting and bidirectional communication without dedicated electrical interfaces. However, production testers such as Advantest and Teradyne are primarily designed for electrical pin-based testing and do not natively support validation of contactless communication behavior. This work proposes a production- compatible wireless validation architecture that enables contactless device characterization within an automated production test environment. The proposed approach integrates a wireless interface on the load board consisting of a radio-frequency stimulus generator, protocol conversion layer, near-field coupling antenna, and signal demodulation receiver synchronized with the tester control framework. This enables automated carrier generation, command modulation, and capture of load-modulated responses from the device under test. Experimental validation was performed using NFC- enabled RFID tag devices across 120 samples. Carrier field detection showed reliable activation above 1.6 A/m, while RF power harvesting generated internal supply voltages between 2.4 V and 2.8 V. Load-modulated responses ranged from 180\u2013240 mV, enabling reliable demodulation and protocol decoding. Command-response operations, including Unique Identifier (UID) read, memory access, and anti-collision, achieved a bit error rate below 10\u207b\u2076 with an average communication latency of 3.2 \u00b5s and less than 4% device variation. Results showed over 96% correlation with conventional bench validation, demonstrating the feasibility of scalable production testing of contactless semiconductor devices."
  },
  {
    "name": "Unified Compact Health and Aging Models for Manufacturing to In-Field Silicon Quality and Reliability Management",
    "title": "Unified Compact Health and Aging Models for Manufacturing to In-Field Silicon Quality and Reliability Management",
    "authors": [
      {
        "name": "Dan Alexandrescu, Shubharthi Datta and Leela Krishna Thota"
      }
    ],
    "abstract": "Analytics of Silicon Lifecycle Management (SLM) monitors measurements provides the deep silicon metrics and insights required for the semiconductor lifecycle, from manufacturing test to in field operation. This paper presents a solution for preparing compact models from monitor measurements to compute health, aging, and remaining useful life (RUL) metrics. A lightweight autoencoder-based health signature provides robust anomaly detection under partial observability, while HTOL calibrated aging model maps measured degradation to circuit performance and RUL, scaled using mission profile acceleration. The compact models are managed and prepared during manufacturing testing and deployed for edge or in system inference, enabling continuous silicon health and reliability analytics at device and fleet levels."
  },
  {
    "name": "Reliability Refining Next Generation UV Cured Conformal Coatings under Harsh Environment Testing",
    "title": "Reliability Refining Next Generation UV Cured Conformal Coatings under Harsh Environment Testing",
    "authors": [
      {
        "name": "Aurkie Ray, Cole Sandvold, Andi Duffy, Bethany Turner, Saskia Hogan, Phil Kinner, Christopher Allen and Anna Lifton"
      }
    ],
    "abstract": "High reliability electronics pose a higher risk of failure due to the water film formation on the substrate surface when operating in harsh environments such as high temperature and high humidity. This has drawn attention to electronic industries. Typical electronic manufacturing processes potentially add ionic contamination to the substrate surface which could lead to failure in presence of high temperature and high humidity with a working bias voltage. These failures result in an increase of leakage currents, electrochemical migration and corrosion which further result in degradation in performance. To keep a check on these failures the use of conformal coating on the PCB is increasing with time. The electrochemical reliability inferred from the Surface Insulation Resistance (SIR) test helps to access the compatibility of conformal coatings with flux chemistries under harsh environment. This study was focused on assessing the effect of two different generations of UV curing conformal coating on protecting PCBs built with various solder pastes. The effect of solder paste chemistry, preconditioning of the boards before SIR testing (isothermal aging and pre thermocycling) was studied. A customized condensation test protocol is designed to create harsh environment to screen conformal coatings for their ability to withstand moisture ingress and protect the assembly from moisture-related failures such as corrosion and dendritic growth formations. Such study can result in improved electrical reliability and identify the optimal material set and process parameters for operation in harsh environments."
  },
  {
    "name": "Design and Context Aware Embedded Monitor Analytics Through High-Volume Algorithmics and Explainable AI",
    "title": "Design and Context Aware Embedded Monitor Analytics Through High-Volume Algorithmics and Explainable AI",
    "authors": [
      {
        "name": "Dan Alexandrescu, Shubharthi Datta and Leela Krishna Thota"
      }
    ],
    "abstract": "Silicon test results are highly dependent on operating voltage, temperature, and design intent, yet are often interpreted without full context. This paper presents an approach that merges test measurements, operating conditions reported by embedded Silicon Lifecycle Management (SLM) voltage and temperature monitors, and design expectations to enable context aware interpretation of silicon results. Algorithms and explainable AI techniques guide engineers directly to the dominant contributors of misalignment, replacing manual chart inspection with automated, data driven insight generation, distinguishing process variability, systematic model to silicon correlation gaps, and true outlier parts and enabling data driven decisions across NPI, yield ramp, and highvolume manufacturing."
  },
  {
    "name": "Physical Design Aware Verification Methodology for Closing Coverage Gaps in SharedBus MBIST",
    "title": "Physical Design Aware Verification Methodology for Closing Coverage Gaps in SharedBus MBIST",
    "authors": [
      {
        "name": "Shivam Tulsyan, Mayank Parasrampuria, Prachi Sinha, Vasudevan Pillai A and Maheedhar Jalasutram"
      }
    ],
    "abstract": "The industry shift toward SharedBus MBIST architectures has successfully mitigated the Power, Performance, and Area (PPA) bottlenecks associated with traditional embedded memory testing. However, reusing functional paths for testing introduces severe verification challenges, as conventional MBIST algorithms often fail to detect intricate mapping errors like data-bus scrambling, tied-off data bits, and irregular address bits decoding. If left undetected, these discrepancies in implementation result in silent coverage gaps and ineffective memory repair mechanisms. This paper proposes a robust assertion-based RTL verification methodology specifically designed to close these gaps in SharedBus MBIST implementations. By deploying a Walking-0 pattern and continuous monitors across SharedBus and physical memory interfaces, the methodology enforces a strict set of verification rules. Experimental results validate this approach, demonstrating the successful identification of critical implementation bugs across multiple vendor cores that escaped conventional verification.The paper concludes by proving that the overhead of this methodology is minimal and highly justified by the resulting improvements in silicon quality."
  },
  {
    "name": "Constraint-Based Functional Testing of Encrypted Memory Systems",
    "title": "Constraint-Based Functional Testing of Encrypted Memory Systems",
    "authors": [
      {
        "name": "Ravikumar C.P."
      }
    ],
    "abstract": "Encrypted memories which make use of encryption standards such as AES-128 are becoming common in applications such as artificial intelligence, automotive/industrial electronics. Conventional testing schemes, such as Marching Tests, are inadequate for testing of encrypted memories since they do not test the encryption/decryption logic. Further, traditional tests read/write individual bits, whereas AES-128 standard encrypts chunks of 128 bits. This paper proposes test algorithms which can be used both in field testing as well as in factory testing. The essential idea is to write magic squares (MS ) and read them back to verify that all properties of the magic square are intact. MS are very sensitive to a single error and a single error in one of the bits can cause many constraints of the MS to fail. We have developed a simulator to verify and benchmark the test algorithm"
  },
  {
    "name": "Enabling EDA Automation for HBM Testing Using A Plug-n-Play DFT Interface",
    "title": "Enabling EDA Automation for HBM Testing Using A Plug-n-Play DFT Interface",
    "authors": [
      {
        "name": "Quoc Phan, Anshuman Chandra, Bartosz Zelek, Barbara Dzia\u0142owska, Marta St\u0119pniewska and Jonathan Gaudet"
      }
    ],
    "abstract": "High bandwidth memory (HBM) has emerged as the primary high-speed memory in modern AI computing. It provides an ultra-fast wide and power efficient data transfer for AI accelerators and graphics processing units (GPUs) using innovative 3D stacking and advanced through-silicon-via (TSV) technology. However, HBM 3D stack presents significant test challenges at both wafer-level and post package assembly. Memory cells inside each DRAM stack and the micro-bump interconnect in the logic base die must be thoroughly tested to ensure good quality and yield post bonding. In this paper, we describe an efficient package-level testing flow that enables seamless EDA tool automation for DFT insertion and pattern generation. We present the design of different components that enable plugging of the HBM interface to the IJTAG network and leverage an existing memory BIST controller for both memory and interconnect test."
  },
  {
    "name": "Enhancements in Memory Test for improved diagnosability and comprehensive multi-bank test",
    "title": "Enhancements in Memory Test for improved diagnosability and comprehensive multi-bank test",
    "authors": [
      {
        "name": "Prachi Sinha, Veerabhadrarao Vasa, Shivam Tulsyan and Mayank Parasrampuria"
      }
    ],
    "abstract": "The scaling of System-on-Chip (SoC) architectures to sub-5nm nodes necessitates highly optimized custom memory designs. However, these layouts introduce unique physical defect mechanisms and coupling faults invisible to industry-standard March tests. This paper proposes a novel custom testing methodology specifically engineered for multi-bank memory architectures. By implementing a programmable, bank-aware Built-In Self-Test (BIST) architecture, the proposed solution enables concurrent multi-bank stressing to detect inter-bank crosstalk while maintaining strict power-density limits through a custom scheduling algorithm. This methodology provides a scalable framework for ensuring high reliability in performance-critical silicon environments. While the multi-bank BIST identifies the presence of inter-bank coupling, physical localization in sub-5nm nodes requires non-invasive back-side analysis. Our methodology includes a 'Diagnostic Mode' that allows the BIST to loop specific stress patterns, enabling Laser Voltage Probing (LVP) to capture high-resolution internal waveforms. This synergy between custom BIST and optical probing significantly reduces the Time-to-Yield (TTY) by pinpointing the exact physical origin of marginal delay faults. Simulation results demonstrate the effectiveness of this approach in identifying complex inter-bank coupling and providing the deterministic triggering required for failure analysis in advanced process nodes."
  },
  {
    "name": "A novel hardware design for effective supply voltage glitch injection",
    "title": "A novel hardware design for effective supply voltage glitch injection",
    "authors": [
      {
        "name": "Antony Varghese, Ashok Kumar and Asmita Mohapatra"
      }
    ],
    "abstract": "Supply Glitch Voltage Injection is one of the effective techniques to analyse and validate a chip\u2019s performance and reliability in case of sudden changes in the supply. Conventional functional validation poses unique challenges owing to the difficulty of creating these conditions. This paper elaborates on these challenges and proposes a novel, cost-effective hardware solution that facilitates functional validation of these circuits for devices operating on a supply voltage range of 1.7V to 3.6V. The hardware can control the ramp rates of the generated glitch."
  },
  {
    "name": "Validation Methodology to Characterize Absolute Propagation Delay, Delay variation over temperature and Programmable Delay of 1ps DNL step in Wideband RF Buffers upto 12.8GHz",
    "title": "Validation Methodology to Characterize Absolute Propagation Delay, Delay variation over temperature and Programmable Delay of 1ps DNL step in Wideband RF Buffers upto 12.8GHz",
    "authors": [
      {
        "name": "Harish Ramesh, Jason Xavier and Pranav Kumar"
      }
    ],
    "abstract": "Wide Band RF Fanout Buffers is widely used in markets such as Wireless Infrastructure (Wireless Backhaul, 5G base station Beam forming applications), Aerospace & Defense (Phased Array Radar, Beam Forming), Test & Measurement. Modern Wideband RF Clock buffers and Synthesizers have provision to delay its output clock up to several picoseconds range with a step size of around 1picosecond. There are certain applications where programmable delay steps, propagation delay of buffers and channel to channel skew play a critical role in defining a system which require synchronized clocks across different channels. Customers always look out for min/max variation across PVT to budget their system accordingly. Therefore skew, propagation delay and its variations across temperature becomes a very critical parameter during the characterization phase. These measurements are very challenging and sensitive to setup variations, PCB interconnects, cables and measuring equipment. It also gets challenging at higher frequency where the delay range to be measured is greater than clock time period. In this paper measurement methodologies of Absolute propagation delay measurement, Propagation Delay Variation over temperature (Rate of change of delay with temperature) and Precise analog delay step measurements upto a resolution of 1ps are discussed in details with Si results"
  },
  {
    "name": "DFT-Enhanced Spare Cell Architecture for Scan-Integrated ECO and Leakage Optimization in SoCs",
    "title": "DFT-Enhanced Spare Cell Architecture for Scan-Integrated ECO and Leakage Optimization in SoCs",
    "authors": [
      {
        "name": "Pramod Gayakwad, Raghavendra H D, Chandhramohan K P, Khushboo Rathore, Vishwanath Kunchigi, Vamsi Krishna Oliveti and Santhosh Kamatam"
      }
    ],
    "abstract": "Advanced SoC designs increasingly rely on spare cells to enable post-layout and post-silicon engineering change orders (ECOs). However, conventional spare cell implementations are typically logic-only constructs that are neither scan-aware nor optimized for leakage and decoupling behavior, leading to test coverage challenges and unintended power penalties. This paper presents a DFT-enhanced spare cell module that integrates fullscan capability along with scan-controlled input-state enforcement to enable leakage reduction and effective decoupling utilization during inactive modes. The proposed architecture allows spare cells to be seamlessly incorporated into scan chains without perturbing existing DFT infrastructure, while simultaneously enabling their reuse as functional ECO resources. Analysis across representative design scenarios demonstrates that the proposed spare cell approach improves ECO readiness and scan integration with negligible area overhead and controlled leakage impact. The technique is particularly suitable for advanced technology nodes where unused logic contributes disproportionately to static power and reliability concerns. In representative design-level analysis, the method achieves up to ~98.9% stuck-at fault coverage for the spare module and demonstrates ~15% reduction in spare-logic leakage (~0.75 mW at SoC level)."
  },
  {
    "name": "Hybrid Power Gating: Hardware Trio Framework based ATPG for Low-Power Scan (TRC Paper)",
    "title": "Hybrid Power Gating: Hardware Trio Framework based ATPG for Low-Power Scan (TRC Paper)",
    "authors": [
      {
        "name": "Praveen Raghuraman, Arul Karthick Kumar, Darshan V, Karthikeyan Soundararajan, Vivek Roopchand"
      }
    ],
    "abstract": "State-of-the-art System-on-Chip (SoC) designs have evolved into highly complex, stacked architectures characterized by massive logic depth, small form factors, and stringent low-power requirements. The drastic scaling of design complexity and product features in cutting-edge SoCs introduces significant challenges, making structural testing using scan indispensable for determining design yield and robustness of a design. Due to recent spike in process node advancements in semiconductor industry, managing the power density during scan testing has become a critical bottleneck. To address these challenges, it is imperative to achieve high quality through test patterns that deliver stable results across different PVT conditions. Simultaneously, reducing the average unit cost and overall test cost requires optimized IR drop resistant test vector set for efficient sequential fault screening across blocks with minimal test time. Excessive switching activity during the ATPG phases lead to voltage droop (IR drop), causing artificial test failures and yield loss. Existing solutions, such as frequency throttling, EDA supported Low Toggle Vectors often result in unacceptable pattern count inflation or test time penalties. This paper addresses the challenges associated with achieving scan test power reduction in such advanced high density SoC designs."
  }
];
