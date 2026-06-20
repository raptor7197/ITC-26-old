export const keynoteSpeakers = [
  {
    id: 0,
    name: "Yervant Zorian",
    affiliation: "Synopsys",
    title: "Designing Chiplets & 3DIC for Quality & Reliability",
    comingSoon: true,
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
  },
  {
    id: 2,
    name: "Senthilkumar Dhamodharan",
    affiliation: "Caliber Interconnect Solutions",
    title: "SI Complexity to AI Revolution: India’s Silicon Leap 2047",
    description:
      "As artificial intelligence redefines the semiconductor landscape, intelligent testing, validation, and manufacturing have become essential enablers of innovation. This keynote explores how AI-driven methodologies, digital twins, and ecosystem collaboration can accelerate India’s semiconductor journey and strengthen its position in the global technology value chain.",
    bio: [
      "Senthilkumar Dhamodharan is a semiconductor engineering leader with nearly two decades of experience in post-silicon validation and high-volume manufacturing testing across Digital, Mixed Signal, PMIC, and RF technologies. Having held leadership roles at Caliber Interconnect Solutions, Qualcomm, AMD, and NXP, he has developed deep expertise in semiconductor quality, reliability, and test engineering.",
      "His industry experience, combined with ongoing research in AI/ML applications for post-silicon validation, provides him with a unique perspective on how intelligent testing and AI-driven innovation can shape the future of the semiconductor industry.",
    ],
    image: "/images/keynote/senthilkumar-photo.png",
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
  },
  {
    id: 5.5,
    name: "Nilanjan Mukherjee",
    affiliation: "Siemens",
    comingSoon: true,
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
  },
];

export const industrySpeakers = [
  {
    id: 0,
    name: "Jayashree Saxena",
    affiliation: "Vice President \u2013 Semiconductor DFT, Anora Labs",
    comingSoon: true,
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
  },
  {
    id: 3,
    name: "Gopikrishna Siddula",
    affiliation: "Sandisk",
    title: "Testing High Speed Flash Interface IOs",
    comingSoon: true,
  },
  {
    id: 4,
    name: "Tessolve",
    comingSoon: true,
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
        affiliation: "Digital Design Manager, Texas Instruments",
        bio: "Vishal Diwan is a Digital Design Manager and Member Group Technical Staff at Texas Instruments, where he leads the DFT team for the ASM Business Unit. With over 13 years of experience in Design-for-Test methodologies, he has developed deep expertise across scan architectures, test automation, and advanced DFT implementation strategies for semiconductor products. He holds a Master's degree in Electrical Engineering from IIT Bombay and has contributed extensively to the field through multiple patents, technical publications, and presentations at industry conferences.\n\nHis experience in developing efficient DFT solutions for cost-sensitive, high-volume semiconductor products has given him valuable insight into the trade-offs between test quality, silicon area, test time, and manufacturing cost. This practical perspective enables him to provide a comprehensive view of how innovative DFT methodologies can help deliver reliable MCUs while meeting the aggressive cost targets demanded by today's semiconductor industry.",
        image: "/images/tutorials/tut_529_1.png",
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
        affiliation: "Associate Professor, IIT Guwahati",
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
        affiliation: "Senior Principal Engineer, Marvell",
        bio: "Sreekanth G Pai is a Senior Principal Engineer with extensive experience in Design-for-Test, scan architectures, IJTAG infrastructures, and post-silicon debug methodologies for complex SoCs. Throughout his career, he has led and contributed to multiple large-scale silicon programs, developing expertise in TAP customization, mission-mode debug techniques, and Tessent-based DFT implementations.\n\nHis work in enabling robust observability, debuggability, and secure access mechanisms across advanced validation and test environments has provided him with deep insight into the challenges of modern post-silicon debug. This experience makes him well positioned to discuss scalable IJTAG-based approaches for mission-mode scan dump and advanced debug architectures.",
        image: "/images/tutorials/tut_497_1.png",
      },
      {
        name: "Raseena K A",
        affiliation: "Senior Engineer, Marvell",
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
        name: "Binod Kumar, Manisha Kumari (IIT Jodhpur), Jaynarayan T Tudu (IIT Tirupati), Jyotirmoy Saikia and Sagar Kumar (Cadence)",
        affiliation: "",
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
        affiliation: "Google Silicon Team",
        bio: "Maheedhar Jalasutram leads DFT Architecture within Google's Silicon team, where he is responsible for developing scalable test architectures that balance quality, coverage, and test cost for advanced mobile SoCs. Throughout his career, including leadership roles at Google and Texas Instruments, he has driven innovations in concurrent testing, design-for-debug, high-speed test methodologies, and system-level test enablement.\n\nHis extensive experience spanning DFT architecture, validation, and production test has provided him with deep insight into the challenges of delivering high-quality silicon at scale. This expertise enables him to offer a unique perspective on how test methodologies can be integrated across the entire product lifecycle to improve both quality and manufacturing efficiency.",
        image: "/images/tutorials/tut_533_1.png",
      },
      {
        name: "Chiehjen (Jeren) Ku",
        affiliation: "Google",
        bio: "Chiehjen (Jeren) Ku leads the Foundry, Assembly Process, and Yield Engineering team within Google's Custom Silicon Operations organization. He oversees manufacturing operations, yield improvement, process optimization, quality management, and product ramp activities for Google's custom silicon programs. Prior to Google, he held leadership positions at Intel and TSMC, focusing on advanced semiconductor process technologies, including FinFET and Gate-All-Around transistor development.\n\nHis experience across process technology development, manufacturing operations, and yield engineering has given him a comprehensive understanding of how design, fabrication, and production data interact to influence product quality. This background provides valuable insight into building closed-loop methodologies that accelerate yield learning and production readiness.",
        image: "/images/tutorials/tut_533_2.png",
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
        name: "Lee Harrison, Andy Hughes and Peter Orlando (Siemens EDA)",
        affiliation: "",
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
        affiliation: "Director of Engineering, Qualcomm India",
        bio: "Rajesh Kumar Tiwari is Director of Engineering at Qualcomm India, with over 22 years of experience in semiconductor design and Design-for-Test technologies. Over the course of his career at Qualcomm and Texas Instruments, he has led the development of advanced DFT architectures, in-system BIST solutions, and test methodologies across mobile, compute, and automotive platforms. He is also an active contributor to the semiconductor test community through his involvement with IEEE initiatives and technical innovations.\n\nHis extensive experience in deploying self-test and safety-focused DFT solutions for complex SoCs has given him deep insight into the challenges of achieving functional safety in modern automotive systems. This expertise positions him uniquely to discuss the evolving role of self-test technologies in enabling ISO 26262-compliant semiconductor designs.",
        image: "/images/tutorials/tut_525_1.jpg",
      },
      {
        name: "Mohammed Zuber P Malek",
        affiliation: "Senior Staff Engineer and Manager, Qualcomm India",
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
      },
      {
        name: "Peter VanDenBosch",
        affiliation: "Siemens EDA",
        bio: "Peter VanDenBosch is Product Director for Tessent Streaming Scan Network (SSN) and Tessent In-System Test (IST) at Siemens, where he has played a pivotal role in the development, deployment, and industry adoption of advanced structural test technologies. Since joining Siemens in 2018, he has helped define SSN implementation methodologies and guided numerous successful customer deployments, enabling significant reductions in test cost and test data volume.\n\nWith nearly three decades of experience in Design-for-Test and leadership roles across companies including Marvell, Micron Technology, STMicroelectronics, and LSI Logic, Peter has developed deep expertise in scan architectures, ATE integration, high-speed I/O-based test delivery, and in-field test applications. His hands-on involvement in shaping next-generation test methodologies gives him a unique perspective on how packetized scan and in-system test technologies are transforming semiconductor manufacturing and lifecycle management.",
        image: "/images/tutorials/tut_487_2.png",
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
        affiliation: "Director of Solutions Engineering, Synopsys",
        bio: "Shamitha Rao is Director of Solutions Engineering at Synopsys, where she leads customer engagements for the TestMAX product portfolio. With more than 20 years of experience spanning DFT architecture, implementation, silicon validation, and test solutions, she has held key roles at Synopsys, Intel, Siemens EDA, STMicroelectronics, and Wipro. Her contributions to semiconductor test technology have been recognized through multiple technical publications, conference presentations, and industry awards.\n\nHer extensive experience across the semiconductor lifecycle\u2014from design and test architecture to silicon bring-up and manufacturing\u2014provides her with a unique perspective on how advanced analytics can be leveraged to improve product quality, yield learning, and test efficiency in modern semiconductor ecosystems.",
        image: "/images/tutorials/tut_531_1.png",
      },
      {
        name: "Shrestha Hota",
        affiliation: "Staff Solutions Engineer, Synopsys",
        bio: "Shrestha Hota is a Staff Solutions Engineer at Synopsys with over a decade of experience in semiconductor manufacturing analytics and yield engineering. She specializes in architecting analytics frameworks that enable yield optimization, root-cause analysis, and operational efficiency across high-volume manufacturing environments. Her work focuses on deploying advanced analytics platforms that transform complex manufacturing data into actionable insights.\n\nThrough her leadership in customer engagements and data-driven manufacturing initiatives, she has developed deep expertise in applying analytics to solve real-world semiconductor production challenges. This experience positions her at the forefront of modern yield engineering and intelligent manufacturing solutions.",
        image: "/images/tutorials/tut_531_2.png",
      },
      {
        name: "Navya Rastogi",
        affiliation: "Staff Applications Engineer, Synopsys",
        bio: "Navya Rastogi is a Staff Applications Engineer at Synopsys with expertise spanning semiconductor process engineering, yield analysis, fabrication technologies, and data science. Prior to joining Synopsys, she gained experience in both the semiconductor capital equipment industry and at Amazon, bringing a multidisciplinary perspective to advanced manufacturing analytics. She holds a PhD in Nanoscience from the Indian Institute of Science.\n\nHer background across semiconductor processes, yield engineering, and data-driven problem solving provides her with valuable insight into the application of analytics for improving manufacturing performance and product quality in advanced semiconductor technologies.",
        image: "/images/tutorials/tut_531_3.png",
      },
      {
        name: "Soumya Mital",
        affiliation: "Staff Engineer, Qualcomm",
        bio: "Soumya Mital is a Staff Engineer at Qualcomm specializing in AI-driven diagnostic intelligence for next-generation semiconductor platforms. His work focuses on developing scalable frameworks that automate failure analysis and transform complex diagnostic data into actionable engineering insights, accelerating silicon development and deployment. He holds a PhD from Carnegie Mellon University and is an alumnus of IIT Roorkee.\n\nHis expertise at the intersection of semiconductor diagnostics, artificial intelligence, and large-scale data analysis has enabled him to drive innovative approaches to yield learning and quality improvement. This experience provides him with a unique perspective on how advanced analytics and AI are reshaping semiconductor manufacturing and test methodologies.",
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
        affiliation: "Test Engineer, Caliber Interconnect Solutions",
        bio: "Lokapriya Balakrishnan is a Test Engineer at Caliber Interconnect Solutions with over seven years of experience in semiconductor testing and ATE interface hardware development. Her work spans turnkey load board and probe card design, signal and power integrity optimization, device testing, and tester platform conversion projects. In addition to her technical contributions, she has successfully led engineering teams in delivering high-quality hardware solutions within demanding development schedules.\n\nHer experience across both hardware development and semiconductor validation provides her with a unique perspective on the challenges of designing scalable, high-performance ATE solutions. This expertise enables her to bridge the gap between hardware architecture, test requirements, and manufacturing realities.",
        image: "/images/tutorials/tut_504_1.png",
      },
      {
        name: "Senthilkumar Dhamodharan",
        affiliation:
          "Vice President, Caliber Interconnect Solutions",
        bio: "Senthilkumar Dhamodharan is Vice President, Silicon Validation & Test Engineering at Caliber Interconnect Solutions Pvt Ltd, where he leads large-scale test engineering operations spanning SoC, PMIC, Digital, Mixed-Signal, and RF products. With more than 19 years of experience at industry leaders including Qualcomm, AMD, and NXP, he has played a significant role in advancing semiconductor test methodologies, engineering strategy, and intellectual property development.\n\nHis extensive experience managing complex validation programs and building high-performance engineering teams has given him deep insight into scalable test infrastructure and hardware development. This perspective makes him uniquely positioned to address the challenges of creating efficient, reusable ATE architectures for modern semiconductor products.",
        image: "/images/tutorials/tut_504_2.png",
      },
      {
        name: "Vaishnavi",
        affiliation: "Senior Test Engineer, Caliber Interconnect Solutions",
        bio: "Vaishnavi is a Senior Test Engineer at Caliber Interconnect Solutions with over a decade of experience in testing SoC, Mixed-Signal, and RF devices across both bench and ATE environments. Currently leading Caliber's RF team, she has developed strong expertise in device characterization, validation methodologies, and high-performance test execution.\n\nHer extensive hands-on experience across multiple semiconductor domains provides valuable insight into the practical challenges of ATE deployment and validation. This background enables her to contribute a real-world perspective on designing scalable hardware solutions that improve efficiency, reliability, and test coverage.",
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
  { id: 0, name: "Arojit Roychowdhury", affiliation: "Sr. Director of Technology, Qualcomm", comingSoon: true },
  { id: 1, name: "Don Chan", affiliation: "Vice President, Cadence", comingSoon: true },
  { id: 2, name: "Teradyne", comingSoon: true },
  { id: 3, name: "Advantest", comingSoon: true }
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
  { id: 0, name: "Poster Session", affiliation: "Location: ENTRANCE LOBBY", comingSoon: true }
];
