import {
  ServiceItem,
  SolarisSolution,
  IndustrySector,
  ProjectCaseStudy,
  ResourceDocument
} from '../types';

export const COMPANY_DETAILS = {
  name: 'GENIVERT SYSTEMS LTD',
  division: 'AD IMPERIUM SOLARIS',
  statement: 'Engineering Intelligent Power Solutions for a Reliable and Sustainable Future.',
  brandMessage: 'Genivert Systems designs, installs, maintains, and manages intelligent electrical and energy infrastructure that keeps institutions powered, connected, efficient, and future-ready.',
  tagline: 'Uganda & East Africa’s Institutional Power Engineering Partner',
  email: 'genivertsystems@gmail.com',
  phonePrimary: '+256 788 946795',
  phoneSecondary: '+256 788 946795',
  whatsappNumber: '256788946795',
  address: 'Plot 679 Block 1-4 Mengo Hill, Kampala, Uganda',
  poBox: 'P.O. Box, Kampala, Uganda',
  operatingHours: 'Mon - Fri: 8:00 AM - 6:00 PM | 24/7 Emergency Response Line',
  socials: {
    linkedin: 'https://www.linkedin.com/company/135275144/admin/dashboard/',
    youtube: 'https://www.youtube.com/@genivertsystems',
    x: 'https://x.com/GenivertSystems'
  },
  stats: [
    { label: 'Installed Power Infrastructure', value: '28+ MW' },
    { label: 'Institutional Systems Maintained', value: '140+' },
    { label: 'Critical Power Uptime Achieved', value: '99.98%' },
    { label: 'Annual CO2 Offset', value: '18,500 Tons' },
  ],
  certifications: [
    'ERA Certified Electrical Contractor (Class A)',
    'ISO 9001:2015 Quality Management Systems',
    'ISO 45001:2018 Occupational Health & Safety',
    'IEEE & IEC Compliant System Architecture',
    'Uganda National Bureau of Standards (UNBS) Certified'
  ]
};

export const CORE_VALUES = [
  {
    title: 'Engineering Excellence',
    desc: 'Precision system design, rigorous load calculation, and unyielding compliance with international electrical codes.'
  },
  {
    title: 'Safety First',
    desc: 'Zero-compromise HSQE protocols protecting our team, institutional personnel, and critical machinery.'
  },
  {
    title: 'Reliability',
    desc: 'Continuous uninterrupted power architecture engineered to prevent costly institutional downtime.'
  },
  {
    title: 'Innovation',
    desc: 'Deploying smart AI monitoring, hybrid orchestration, and high-efficiency energy storage technologies.'
  },
  {
    title: 'Sustainability',
    desc: 'Transitioning East African organizations to clean, economical, and carbon-reduced power systems.'
  },
  {
    title: 'Customer Partnership',
    desc: 'Lifecycle support from feasibility study and procurement through commissioning and preventive maintenance.'
  }
];

export const ENGINEERING_SERVICES: ServiceItem[] = [
  {
    id: 'electrical-engineering',
    title: 'Electrical Engineering & Power Distribution',
    shortDesc: 'Turnkey high-voltage and low-voltage electrical design, switchgear installation, distribution boards, and institutional wiring.',
    fullDesc: 'Genivert Systems executes full-scope electrical engineering works for complex facilities. From primary substation connections and heavy distribution switchgear to final branch circuits, earthing, and surge mitigation.',
    category: 'electrical',
    iconName: 'Zap',
    features: [
      'Institutional & commercial electrical layout design',
      'HV/LV switchgear installation and retrofitting',
      'Power distribution board (PDB) & control panel wiring',
      'Earth mat installation and lightning protection systems (LPS)',
      'Thermal imaging & electrical fault diagnostics',
      'Comprehensive testing, inspection, and ERA commissioning certification'
    ],
    specs: [
      'Compliant with IEC 60364 & BS 7671 standards',
      'Class A Licensed Engineering Execution',
      'Precision breaker co-ordination & trip curve testing'
    ],
    applications: ['Universities', 'Hospitals', 'Manufacturing Plants', 'Commercial Towers', 'Government Hubs'],
    image: 'https://images.unsplash.com/photo-1581092160607-ee22621dd758?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'generator-systems',
    title: 'Heavy Generator Systems & ATS Automation',
    shortDesc: 'Supply, installation, automated integration, synchronization, and 24/7 preventive maintenance of institutional diesel generators.',
    fullDesc: 'Reliable standby power requires robust prime and standby generator assets. We specify, deliver, install, and service heavy generators with seamless Automatic Transfer Switch (ATS) controllers and multi-genset synchronization panels.',
    category: 'generators',
    iconName: 'ServerCog',
    features: [
      'Standby & prime power diesel generator supply (15 kVA to 2,500 kVA)',
      'Multi-generator load sharing and synchronizing panels',
      'Automated Transfer Switches (ATS) & mains failure auto-start',
      'Acoustic soundproof canopy fabrication and vibration isolation',
      'Bulk fuel storage tanks, piping, and automated refilling pumps',
      'Routine servicing, oil analysis, and load bank load testing'
    ],
    specs: [
      'DeepSea / ComAp smart controller integration',
      'Fast transfer times (<8 seconds from mains drop)',
      'Custom fuel filtration for high reliability'
    ],
    applications: ['Bank Head Offices', 'Referral Hospitals', 'Hotels & Safari Lodges', 'Data Centres', 'Processing Factories'],
    image: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'ups-critical-power',
    title: 'UPS & Critical Power Protection',
    shortDesc: 'Online double-conversion Uninterruptible Power Supply (UPS) units for zero-millisecond power transfer for vital equipment.',
    fullDesc: 'Power spikes, sags, and micro-cuts destroy delicate medical diagnostic equipment, corrupt bank transaction servers, and halt research labs. Our online double-conversion UPS solutions clean raw grid power continuously.',
    category: 'ups',
    iconName: 'ShieldCheck',
    features: [
      'Three-phase & single-phase online double-conversion UPS systems',
      'Modular expandable UPS topologies (10 kVA to 800 kVA)',
      'Hospital ICU & medical imaging clean power isolation transformers',
      'Battery string impedance monitoring & thermal management',
      'Static bypass switch gear and maintenance isolation bypass panels',
      'Remote SNMP monitoring with automated alert triggers'
    ],
    specs: [
      'True 0ms transfer time (VFI-SS-111 classification)',
      'Power Factor output up to 1.0',
      'Harmonic distortion THDi <3%'
    ],
    applications: ['Hospital ICUs & Operating Theatres', 'Banking Core Servers', 'Telecom Stations', 'Broadcast Studios'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'smart-energy-management',
    title: 'Smart Energy Management & Power Quality',
    shortDesc: 'IoT energy metering, load profiling, power factor correction (PFC), and automated cost optimization analytics.',
    fullDesc: 'Unoptimized power consumption and low power factor lead to excessive utility penalties and wasted energy. Genivert Systems installs smart digital power meters and automatic PFC banks to reduce kVA charges.',
    category: 'smart-energy',
    iconName: 'Activity',
    features: [
      'Real-time IoT cloud energy monitoring dashboards',
      'Automatic Power Factor Correction (APFC) capacitor banks',
      'Active harmonic filters (AHF) for non-linear load smoothing',
      'Sub-metering for tenant billing and departmental energy allocation',
      'Maximum Demand (MD) monitoring and automatic load shedding',
      'Energy audit reports compliant with ISO 50001 standards'
    ],
    specs: [
      'Increases Power Factor to >0.98, avoiding Umeme/utility fines',
      'Reduces total harmonic distortion (THD)',
      'Reduces thermal strain on cables & transformers'
    ],
    applications: ['Large Universities', 'Commercial Plazas', 'Manufacturing Works', 'Large Lodges & Hotels'],
    image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'ict-network-infra',
    title: 'Data & Network Infrastructure',
    shortDesc: 'Structured Cat6A/Cat7 copper & fiber optic cabling, server room rack integration, and clean power for ICT networks.',
    fullDesc: 'Modern institutional buildings rely on dependable high-speed data networks. We integrate structured cabling with clean, filtered backup power to ensure zero dropouts for enterprise networks.',
    category: 'ict',
    iconName: 'Network',
    features: [
      'Category 6A / 7 structured copper cabling & patch panel termination',
      'Single-mode & multi-mode fiber optic backbone splicing & OTDR testing',
      'Server rack enclosure installation with precision cooling airflow',
      'Power Distribution Units (PDUs) with remote power cycling',
      'Access control, IP surveillance power & environmental monitoring',
      'As-built network documentation and cable certification testing'
    ],
    specs: [
      'TIA/EIA-568-D standards compliance',
      'Fluke CableIQ certified link testing',
      'Integrated fire suppression & UPS rack back-up'
    ],
    applications: ['Educational Computer Labs', 'Bank Regional Branches', 'Corporate HQs', 'Government Facilities'],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'voltage-stabilisation',
    title: 'Industrial Voltage Stabilisation',
    shortDesc: 'Heavy-duty servo-controlled voltage stabilizers that protect institutional loads from East Africa’s grid fluctuations.',
    fullDesc: 'Grid voltage sags down to 140V or surges up to 280V frequently burn motors, pumps, air conditioners, and sensitive electronics. Our industrial servo voltage stabilizers maintain a steady 400V/230V output.',
    category: 'voltage',
    iconName: 'Cpu',
    features: [
      'Three-phase microprocessor servo voltage stabilizers (30 kVA to 1,500 kVA)',
      'Wide input voltage range (140V – 280V phase-to-neutral)',
      'Independent phase regulation for unbalanced loads',
      'High-speed response time (<20ms/V)',
      'Digital LED display with voltage, current, and fault telemetry',
      'Integrated surge arresters and automatic under/over voltage cutoff'
    ],
    specs: [
      'Output accuracy ±1%',
      'Over 98% operational efficiency',
      'Heavy copper transformer winding for tropical heat resilience'
    ],
    applications: ['Schools & Water Pumping Sites', 'Hospitals & Medical Labs', 'Hotels', 'Printing & Milling Plants'],
    image: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1200&q=80'
  }
];

export const SOLARIS_SOLUTIONS: SolarisSolution[] = [
  {
    id: 'hybrid-solar-systems',
    title: 'Institutional Solar Hybrid Systems',
    tagline: 'The gold standard in energy independence for Ugandan institutions.',
    description: 'Combines solar PV arrays, smart hybrid inverters, industrial LiFePO4 batteries, grid power, and diesel generator integration into one harmonized automated power system.',
    benefits: [
      'Cuts utility electricity bills by 60% – 85%',
      'Eliminates reliance on expensive diesel generator runtime',
      'Automatic smooth transfer during power cuts',
      'Long lifespan (25-year panel linear performance guarantee)'
    ],
    technicalHighlights: [
      'High-efficiency Tier-1 N-Type TOPCon solar panels (580W+)',
      'Industrial hybrid inverters (30 kW to 500 kW modular sync)',
      'Automated generator auto-start/stop dry-contact control',
      'Remote mobile/desktop cloud telemetry dashboard'
    ],
    targetFacilities: ['Universities & Colleges', 'Hotels & Safari Lodges', 'Hospitals', 'Commercial Office Plazas'],
    icon: 'Sun',
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'energy-storage-systems',
    title: 'Utility-Grade Lithium Energy Storage (ESS)',
    tagline: 'Uninterrupted power day and night with ultra-durable LiFePO4 storage.',
    description: 'Next-generation Lithium Iron Phosphate battery storage banks optimized for high ambient tropical temperatures, high depth-of-discharge, and thousands of duty cycles.',
    benefits: [
      '6,000+ deep discharge cycles (15+ year operational lifespan)',
      'Instant energy dispatch during night-time peak tariff hours',
      'Compact footprint with zero toxic gas off-gassing',
      'Built-in intelligent Battery Management System (BMS)'
    ],
    technicalHighlights: [
      'High C-rate charge/discharge capacity',
      'Multi-tier thermal management & fire suppression option',
      'Modular rack storage scalable from 30 kWh to 2 MWh',
      'Individual cell balance and health telemetry'
    ],
    targetFacilities: ['Data Centres', 'Referral Hospitals', 'Bank Headquarters', 'Off-grid Resorts'],
    icon: 'BatteryCharging',
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'solar-water-solutions',
    title: 'Solar Water Pumping & Thermal Heating',
    tagline: 'High-capacity solar pumping for boreholes and large-scale water heating.',
    description: 'Heavy duty solar thermal collector arrays supplying thousands of liters of hot water daily for dormitories and hotels, alongside brushless DC solar borehole pumps for reliable water supply.',
    benefits: [
      'Eliminates water heating electric geyser power bills (saves ~40% total power)',
      'Zero fuel cost for deep borehole water extraction',
      'Constant 65°C hot water delivery even during grid outages',
      'Durable stainless steel / glass vacuum tube collectors'
    ],
    technicalHighlights: [
      'Centralized hot water storage vessels (1,000L to 20,000L capacities)',
      'Variable Frequency Drive (VFD) solar pump controllers with MPPT',
      'Automatic auxiliary backup heating integration',
      'Pressure-rated closed loop heat exchanger systems'
    ],
    targetFacilities: ['Boarding Schools & Universities', 'Hotels & Safari Lodges', 'Hospitals', 'Agricultural Farms'],
    icon: 'Droplets',
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80'
  },
  {
    id: 'solar-lighting-infrastructure',
    title: 'Institutional Solar Street & Perimeter Lighting',
    tagline: 'Intelligent security and walkway illumination for expansive campuses.',
    description: 'High-lumen LED solar streetlights featuring smart motion dimming, weather-proof IP67 alloy housing, and long-life Lithium batteries built directly into pole assemblies.',
    benefits: [
      '100% free perimeter lighting operating expenses',
      'Enhanced campus safety and security compliance',
      'Zero cable trenching or underground wiring cost',
      'Dawn-to-dusk automatic sensors with smart power saving'
    ],
    technicalHighlights: [
      'High efficiency Bridgelux / Osram LED chips (up to 180 lm/W)',
      'Galvanized hot-dip steel octagonal poles (6m – 12m height)',
      'LiFePO4 battery pack integrated inside light casing or pole root',
      '3 to 5 continuous rainy days autonomy reserve'
    ],
    targetFacilities: ['University Campuses', 'Hospital Compounds', 'Government Parks', 'Industrial Estates'],
    icon: 'Lightbulb',
    image: 'https://images.unsplash.com/photo-1508873696983-2df515122519?auto=format&fit=crop&w=1200&q=80'
  }
];

export const INDUSTRIES_SERVED: IndustrySector[] = [
  {
    id: 'education',
    title: 'Education & Academic Institutions',
    subtitle: 'Universities, Boarding Schools, Vocational Institutes & Training Centers',
    targetClients: ['Public & Private Universities', 'Secondary Boarding Schools', 'Nursing Colleges', 'Polytechnics'],
    keyChallenges: [
      'High electricity bills driven by campus lighting, computer labs, and water heating',
      'Power outages during evening study hours and critical exam periods',
      'Frequent power surges damaging lab equipment and ICT infrastructure'
    ],
    recommendedSolutions: [
      'AD IMPERIUM SOLARIS Hybrid Solar Microgrids (100 kWp+)',
      'Centralized Solar Thermal Hot Water Systems for Student Hostels',
      'UPS Protection for Computer Laboratories & ICT Server Rooms',
      'Campus-wide Perimeter Solar Street Lighting'
    ],
    caseStudyHighlight: {
      title: 'Kampala Academic Campus 180kW Hybrid Solar',
      impact: 'Reduced monthly grid power expenditure by 74% while providing 100% night-time study lighting reliability.'
    },
    image: 'https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80',
    icon: 'GraduationCap'
  },
  {
    id: 'hospitality',
    title: 'Hospitality & Tourism Facilities',
    subtitle: 'Luxury Hotels, Safari Lodges, Beach Resorts & Hospitality Establishments',
    targetClients: ['National Park Safari Lodges', 'Urban Business Hotels', 'Lake & River Resorts', 'Boutique Eco-Lodges'],
    keyChallenges: [
      'Exorbitant diesel generator fuel bills for remote off-grid wilderness lodges',
      'Guest complaints regarding noisy diesel generators during night hours',
      'Continuous hot water requirements for showers, laundry, and kitchens'
    ],
    recommendedSolutions: [
      'Silent Hybrid Solar & Battery Storage Microgrids',
      'Large-scale Solar Water Heating Systems (5,000L - 15,000L daily capacity)',
      'Smart Energy Monitoring & AC Temperature Optimization',
      'Quiet Automatic Generator Sync for Peak Seasons'
    ],
    caseStudyHighlight: {
      title: 'Murchison Falls Eco-Lodge Solar Transformation',
      impact: 'Cut generator diesel consumption from 120 liters/day to under 15 liters, achieving silent 24/7 guest comfort.'
    },
    image: 'https://images.unsplash.com/photo-1566073771259-6a8506099945?auto=format&fit=crop&w=1200&q=80',
    icon: 'Hotel'
  },
  {
    id: 'healthcare',
    title: 'Healthcare & Medical Facilities',
    subtitle: 'Referral Hospitals, Surgical Centers, Medical Laboratories & Clinics',
    targetClients: ['Regional Referral Hospitals', 'Private Specialist Hospitals', 'Diagnostic Centers', 'Blood Banks'],
    keyChallenges: [
      'Life-safety critical necessity for zero-millisecond power interruptions in Operating Theatres and ICUs',
      'Voltage sags ruining high-cost MRI, CT Scanners, and X-ray tube heads',
      'Continuous refrigeration needs for vaccines, pharmaceuticals, and blood storage'
    ],
    recommendedSolutions: [
      'Online Double-Conversion Medical Grade UPS Arrays',
      'Automatic Dual-Generator Synchronization & ATS Backup',
      'Medical Facility Solar Hybrid Backup with Ultra-Fast Battery Storage',
      'Industrial Servo Voltage Regulation for Radiology Equipment'
    ],
    caseStudyHighlight: {
      title: 'Referral Surgical Center Critical UPS & Solar Backup',
      impact: 'Achieved 100% power availability across 4 operating theaters and ICU beds without a single drop in 36 months.'
    },
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    icon: 'HeartPulse'
  },
  {
    id: 'financial',
    title: 'Banking & Financial Institutions',
    subtitle: 'Commercial Banks, Microfinance Institutions, Insurance & Data Centers',
    targetClients: ['Commercial Bank Head HQs', 'Data Centers & Core Banking Hubs', 'Regional Branch Networks', 'ATM Kiosks'],
    keyChallenges: [
      'Financial penalties and customer dissatisfaction during core banking offline outages',
      'Strict regulatory compliance for data center security and uptime',
      'High energy consumption from 24/7 cooling and server loads'
    ],
    recommendedSolutions: [
      'Tier-3 Data Center Modular N+1 Parallel Redundant UPS Systems',
      'Solar Rooftop PV for Urban Bank Headquarters',
      'Remote Power Telemetry and Automated Environmental Controls',
      'Generator Maintenance Contracts with 1-hour SLA Response'
    ],
    caseStudyHighlight: {
      title: 'Commercial Bank Headquarters Power Protection',
      impact: 'Protected core server room infrastructure against 140+ grid voltage spikes and outages annually.'
    },
    image: 'https://images.unsplash.com/photo-1541354329998-f4d9a9f9297f?auto=format&fit=crop&w=1200&q=80',
    icon: 'Building2'
  },
  {
    id: 'religious',
    title: 'Religious & Community Institutions',
    subtitle: 'Seminaries, Cathedral Complexes, Diocesan Offices & Worship Centers',
    targetClients: ['Cathedral & Basilica Compounds', 'Theological Colleges & Seminaries', 'Diocesan Administrative HQs'],
    keyChallenges: [
      'Large roof surfaces but limited operational budgets for ongoing utility bills',
      'High lighting and PA system loads during weekend assemblies and conferences',
      'Remote clergy residences lacking reliable power'
    ],
    recommendedSolutions: [
      'AD IMPERIUM SOLARIS Roof-Mounted Hybrid Solar Systems',
      'Sound & Audio System Clean Power Conditioning',
      'Solar Borehole Pumping for Agricultural Seminary Farms',
      'Institutional Solar Water Heaters for Student Clergy'
    ],
    caseStudyHighlight: {
      title: 'Diocesan Center & Seminary 90kW Solar Upgrade',
      impact: 'Provided complete energy independence for 400 resident students and administrative headquarters.'
    },
    image: 'https://images.unsplash.com/photo-1548625149-fc4a29cf7092?auto=format&fit=crop&w=1200&q=80',
    icon: 'Church'
  },
  {
    id: 'industrial',
    title: 'Commercial & Industrial Enterprises',
    subtitle: 'Manufacturing Plants, Processing Mills, Logistics Parks & Commercial Centers',
    targetClients: ['Agro-Processing Plants', 'Beverage & Packaging Factories', 'Commercial Plazas & Malls', 'Cold Chain Warehouses'],
    keyChallenges: [
      'Heavy monetary loss per minute of production line stoppage',
      'Penalties from electric utilities due to low power factor (<0.90)',
      'Severe power harmonics generated by heavy variable speed drives (VFDs)'
    ],
    recommendedSolutions: [
      'Heavy Duty Automatic Power Factor Correction (APFC) Capacitor Banks',
      'High-Capacity Solar Hybrid Industrial Plants (250kWp – 2MWp)',
      'Harmonic Mitigation & Active Power Quality Filters',
      'Multi-Genset Load Synchronizing Control Systems'
    ],
    caseStudyHighlight: {
      title: 'Food Processing Plant Power Quality & 350kW Solar',
      impact: 'Eliminated power factor utility penalties completely and reduced peak demand costs by 32%.'
    },
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    icon: 'Factory'
  }
];

export const PROJECTS_PORTFOLIO: ProjectCaseStudy[] = [
  {
    id: 'project-1',
    title: '220 kWp Institutional Solar Hybrid & 350 kWh LiFePO4 Battery Microgrid',
    clientCategory: 'Education & Research',
    location: 'Kampala, Uganda',
    year: '2025',
    capacity: '220 kWp PV / 350 kWh Lithium Storage',
    summary: 'Turnkey engineering design, procurement, structural mounting, and commissioning of a high-capacity solar hybrid system for a leading higher learning institute.',
    challenge: 'The institution suffered from daily grid load shedding averaging 3.5 hours, spending over UGX 38,000,000 monthly on diesel fuel for backup generators.',
    solutionProvided: 'Designed a roof-integrated 220 kWp TOPCon solar array synchronized with 350 kWh industrial lithium batteries, a 150 kW Victron/Growth hybrid inverter cluster, and automated generator dry-contact start logic.',
    results: [
      'Grid electricity expenditure decreased by 78%',
      'Generator diesel fuel usage reduced by 85%',
      'Seamless 0ms transfer keeps computer labs and research servers operational continuously',
      'Expected investment payback period: 3.4 years'
    ],
    tags: ['Solar Hybrid', 'LiFePO4 Storage', 'Education', 'Generator Sync'],
    image: 'https://images.unsplash.com/photo-1509391365360-2e959784a276?auto=format&fit=crop&w=1200&q=80',
    featured: true
  },
  {
    id: 'project-2',
    title: 'Regional Hospital Critical ICU UPS & Dual Generator ATS Engineering',
    clientCategory: 'Healthcare',
    location: 'Mbarara, Uganda',
    year: '2024',
    capacity: '120 kVA Modular UPS / 2x 250 kVA Gensets',
    summary: 'Design and deployment of medical-grade online double-conversion UPS infrastructure and automatic dual generator synchronizing panel for intensive care facilities.',
    challenge: 'Unpredictable voltage drops down to 150V damaged sensitive ventilator equipment and caused catastrophic power loss in operating rooms.',
    solutionProvided: 'Installed a 120 kVA modular N+1 redundant UPS system with clean isolation transformers, alongside twin 250 kVA Perkins engine generators with an automated DeepSea synchronization panel.',
    results: [
      '100% electrical uptime maintained across 6 operating theaters for 24+ consecutive months',
      'Zero equipment damage reported since system commissioning',
      'Automated load balancing extends generator engine lifespan'
    ],
    tags: ['Medical UPS', 'Critical Power', 'Generators', 'Healthcare'],
    image: 'https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80',
    featured: true
  },
  {
    id: 'project-3',
    title: '12,000 Liter/Day Solar Thermal Water Heating System for Luxury Safari Lodge',
    clientCategory: 'Hospitality',
    location: 'Queen Elizabeth National Park, Uganda',
    year: '2025',
    capacity: '12,000 Liters Daily at 65°C',
    summary: 'High-efficiency stainless steel vacuum collector solar water heating infrastructure engineered for an off-grid wilderness eco-resort.',
    challenge: 'The lodge relied on electric heating geysers powered by diesel generators, consuming over 80 liters of fuel daily solely for guest shower water.',
    solutionProvided: 'Engineered a centralized 12,000L solar thermal collector array with insulated stainless steel storage tanks and pressurized loop circulation pumps.',
    results: [
      'Generator run-time reduced from 18 hours/day to 4 hours/day',
      'Achieved silent lodge operations during evening and early morning guest hours',
      'Saved approximately 25,000 liters of diesel fuel annually'
    ],
    tags: ['Solar Thermal', 'Water Heating', 'Hospitality', 'Off-Grid'],
    image: 'https://images.unsplash.com/photo-1542314831-068cd1dbfeeb?auto=format&fit=crop&w=1200&q=80',
    featured: true
  },
  {
    id: 'project-4',
    title: 'Bank Headquarters Tier-3 Data Center Power Quality & Voltage Stabilisation',
    clientCategory: 'Banking & Finance',
    location: 'Kampala Financial District, Uganda',
    year: '2024',
    capacity: '400 kVA Industrial Servo Stabilizer',
    summary: 'Installation of high-speed three-phase industrial servo voltage regulation and active harmonic filtering for commercial banking head office.',
    challenge: 'Severe phase-to-phase voltage imbalance and grid noise triggered automated server shutdowns and threatened main computer systems.',
    solutionProvided: 'Supplied and commissioned a 400 kVA heavy copper servo stabilizer with ±1% voltage regulation alongside an active harmonic filter.',
    results: [
      'Clean 400V 3-phase power delivery guaranteed',
      'Core banking server uptime maintained at 99.999%',
      'Eliminated thermal stress on main switchgear cables'
    ],
    tags: ['Voltage Regulation', 'Power Quality', 'Banking', 'Harmonics'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
    featured: false
  },
  {
    id: 'project-5',
    title: '450 kVAR Automatic Power Factor Correction (APFC) for Agro-Processing Plant',
    clientCategory: 'Industrial',
    location: 'Jinja, Uganda',
    year: '2025',
    capacity: '450 kVAR Heavy-duty PFC Capacitor Bank',
    summary: 'Power factor analysis, engineering redesign, and installation of automatic micro-processor controlled PFC capacitor banks.',
    challenge: 'The mill had a low power factor of 0.72 lag due to heavy induction motors, incurring over UGX 14,000,000 in monthly power utility fines.',
    solutionProvided: 'Engineered and installed a 450 kVAR multi-stage detuned capacitor bank with harmonic suppression reactors.',
    results: [
      'Power factor improved from 0.72 to 0.99 constant',
      'Utility low-power-factor penalty completely eliminated on first billing cycle',
      'System ROI achieved in under 7 months'
    ],
    tags: ['Power Factor', 'Industrial', 'Energy Savings', 'Harmonic Filters'],
    image: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1200&q=80',
    featured: false
  }
];

export const HSQE_POLICIES = {
  title: 'Health, Safety, Quality & Environmental Excellence (HSQE)',
  statement: 'At Genivert Systems Ltd, HSQE is not a department — it is an embedded engineering operational culture. We maintain uncompromising safety standards on every high-voltage installation, construction site, and routine maintenance engagement.',
  pillars: [
    {
      title: 'Occupational Health & Safety',
      desc: 'Zero-harm policy through rigorous job safety analysis (JSA), mandatory certified PPE compliance, Lock-Out/Tag-Out (LOTO) procedures, and certified high-voltage safety supervisors.'
    },
    {
      title: 'Engineering Quality Assurance',
      desc: 'All switchgear, solar panels, UPS units, and transformers undergo factory acceptance testing (FAT) and site acceptance testing (SAT) documented with calibrated test equipment.'
    },
    {
      title: 'Environmental Responsibility',
      desc: 'Driving clean solar adoption, proper recycling of lead-acid/lithium batteries through authorized handlers, and reducing the carbon footprint of African institutions.'
    },
    {
      title: 'Regulatory & Code Compliance',
      desc: 'Fully aligned with ERA (Electricity Regulatory Authority) guidelines, Uganda National Bureau of Standards (UNBS), IEC 60364, and BS 7671 electrical codes.'
    }
  ],
  commitments: [
    'Comprehensive Risk Assessments prior to any site work',
    'Formal Permit-to-Work (PTW) protocols for energized electrical connections',
    'Mandatory continuous tool-box safety talks for site engineers',
    '100% traceable serial calibration on testing instruments'
  ]
};

export const RESOURCE_DOCUMENTS: ResourceDocument[] = [
  {
    id: 'res-1',
    title: 'Genivert Systems Ltd - Official Corporate Profile & Engineering Credentials',
    category: 'Profile',
    fileSize: '4.8 MB',
    description: 'Comprehensive institutional engineering overview detailing team qualifications, ERA registration, project portfolio, and technical capabilities.',
    pages: 24,
    featured: true
  },
  {
    id: 'res-2',
    title: 'AD IMPERIUM SOLARIS - Institutional Renewable Energy Transformation Guide',
    category: 'Brochure',
    fileSize: '6.2 MB',
    description: 'Detailed specifications on hybrid solar microgrids, LiFePO4 battery sizing, solar thermal water heating, and financial ROI models for Uganda.',
    pages: 18,
    featured: true
  },
  {
    id: 'res-3',
    title: 'Is Your Institution Solar Ready? - Solar Feasibility & Energy Assessment Manual',
    category: 'Guide',
    fileSize: '3.1 MB',
    description: 'Step-by-step checklist for university facility managers, hospital administrators, and hotel owners preparing for solar hybrid integration.',
    pages: 12,
    featured: true
  },
  {
    id: 'res-4',
    title: 'Harmonics Mitigation & Power Factor Optimization in Commercial Facilities',
    category: 'Technical',
    fileSize: '2.4 MB',
    description: 'Whitepaper on eliminating utility fines, lowering transformer overheating, and extending motor life in East African commercial buildings.',
    pages: 10,
    featured: false
  },
  {
    id: 'res-5',
    title: 'Preventive Maintenance Protocol for Critical Hospital UPS & Generator Systems',
    category: 'Guide',
    fileSize: '1.9 MB',
    description: 'Standard operating procedures for battery testing, ATS servicing, oil sampling, and emergency response SLA management.',
    pages: 8,
    featured: false
  }
];

export const CLIENT_TESTIMONIALS = [
  {
    quote: "Genivert Systems transformed our university campus power infrastructure. The 220 kWp solar hybrid system designed by Ad Imperium Solaris cut our monthly Umeme bill by over 75% and eliminated generator noise during lectures.",
    author: "Prof. Emmanuel M.",
    title: "Director of Facilities & Estate Management",
    organization: "Leading Academic Institute, Kampala"
  },
  {
    quote: "In hospital care, a 5-second blackout in an operating room can be fatal. Genivert Systems installed a modular UPS and automated generator ATS that gives us 100% reliable power. Their engineering team is disciplined and safety-obsessed.",
    author: "Dr. Sarah K.",
    title: "Chief Medical Officer",
    organization: "Specialist Surgical Center, Mbarara"
  },
  {
    quote: "Operating a luxury wilderness lodge requires 24/7 quiet power and constant hot water. The solar thermal hot water and hybrid lithium storage installed by Genivert reduced our diesel spending by over 80%. Exceptional service!",
    author: "Patrick B.",
    title: "General Manager",
    organization: "Eco-Safari Lodge, Queen Elizabeth NP"
  }
];
