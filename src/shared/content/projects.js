
export const projectCategories = [
  { id: "all", label: "All" },
  { id: "construction", label: "Construction" },
  { id: "steel-hardware", label: "Steel & Hardware" },
  { id: "earthmoving", label: "Earthmoving" },
];

export const projectStats = [
  { value: "500+", label: "Projects delivered (est.)" },
  { value: "50,000+", label: "Tons supplied (est.)" },
  { value: "15+", label: "Years delivering" },
  { value: "10", label: "Provinces served" },
];

export const projects = [
  {
    id: "gweru-hospital",
    title: "Gweru Central Hospital Expansion",
    category: "construction",
    location: "Gweru, Zimbabwe",
    image: "gweru-hospital-1",
    gallery: [
      { name: "gweru-hospital-1", alt: "Multi-storey concrete frame rising floor by floor" },
      { name: "gweru-hospital-2", alt: "Vertical reinforcement cages tied ahead of a column pour" },
      { name: "gweru-hospital-3", alt: "Power-floating a freshly poured slab" },
      { name: "gweru-hospital-4", alt: "Crew placing concrete over finished reinforcement" },
    ],
    summary:
      "Reinforcement packages for a multi-story critical care facility with fast-tracked sequencing and QA controls.",
    result: "Delivered phased handovers to meet clinical opening milestones.",
    scope: [
      "3,500 tons of reinforcement steel",
      "Custom bending and cage fabrication",
      "Sequenced deliveries aligned to pour schedule",
      "On-site supervision and QA documentation",
    ],
    featured: true,
  },
  {
    id: "kwekwe-conveyor",
    title: "Kwekwe Mining Conveyor Structure",
    category: "steel-hardware",
    location: "Kwekwe, Zimbabwe",
    image: "kwekwe-conveyor-1",
    gallery: [
      { name: "kwekwe-conveyor-1", alt: "Stacker-reclaimer working the ore stockpile" },
      { name: "kwekwe-conveyor-2", alt: "Transfer tower steelwork under construction" },
      { name: "kwekwe-conveyor-3", alt: "Conveyor transfer structure nearing completion" },
      { name: "kwekwe-conveyor-4", alt: "Loaded conveyor running at full capacity" },
    ],
    summary:
      "Heavy-duty reinforcement systems engineered for continuous vibration and high-load mining operations.",
    result: "Improved structural uptime with reinforced load paths.",
    scope: [
      "2,100 tons of specialised alloy steel",
      "Precision fabrication for complex geometries",
      "Placement support with rigging teams",
      "Non-destructive testing and reporting",
    ],
    featured: true,
  },
  {
    id: "harare-logistics-hub",
    title: "Harare Logistics Hub",
    category: "construction",
    location: "Harare, Zimbabwe",
    image: "harare-logistics-1",
    gallery: [
      { name: "harare-logistics-1", alt: "Structural steel frame for the main warehouse" },
      { name: "harare-logistics-2", alt: "Roof steel catching the morning light" },
      { name: "harare-logistics-3", alt: "Long-span roof trusses over the distribution floor" },
      { name: "harare-logistics-4", alt: "Finishing the yard slab ahead of handover" },
    ],
    summary:
      "Structural reinforcement and hardware supply for a 40,000 sqm logistics and warehousing complex.",
    result: "Accelerated slab sequencing to meet commissioning targets.",
    scope: [
      "Beam reinforcement and slab packages",
      "Hardware procurement and delivery",
      "Daily sequencing for accelerated schedule",
    ],
    featured: true,
  },
  {
    id: "mutare-earthworks",
    title: "Mutare Flood Mitigation Earthworks",
    category: "earthmoving",
    location: "Mutare, Zimbabwe",
    image: "mutare-earthworks-1",
    gallery: [
      { name: "mutare-earthworks-1", alt: "Excavator cutting a new stormwater channel" },
      { name: "mutare-earthworks-2", alt: "Wheel loader moving fill along the embankment" },
      { name: "mutare-earthworks-3", alt: "Articulated hauler moving spoil off site" },
      { name: "mutare-earthworks-4", alt: "Crews working into the evening to beat the rains" },
    ],
    summary:
      "Bulk earthworks, haulage, and equipment support for a critical stormwater upgrade programme.",
    result: "Stabilised channels ahead of peak rainfall season.",
    scope: [
      "Excavation and grading operations",
      "Tipper fleet mobilisation",
      "Daily production and safety reporting",
    ],
    featured: false,
  },
  {
    id: "bulawayo-industrial",
    title: "Bulawayo Industrial Facility",
    category: "steel-hardware",
    location: "Bulawayo, Zimbabwe",
    image: "bulawayo-industrial-1",
    gallery: [
      { name: "bulawayo-industrial-1", alt: "Reinforcement mat fixed and ready for inspection" },
      { name: "bulawayo-industrial-2", alt: "Steel pipe stock staged for the plant works" },
      { name: "bulawayo-industrial-3", alt: "I-beams delivered to site with traceability tags" },
      { name: "bulawayo-industrial-4", alt: "Inside the completed manufacturing hall" },
    ],
    summary:
      "Reinforcement supply, mesh, and construction hardware for a new manufacturing campus.",
    result: "Reduced wastage through kitted, labelled bundles.",
    scope: [
      "Mesh and deformed bar supply",
      "Cutting and bending services",
      "Hardware packs for formwork crews",
    ],
    featured: false,
  },
  {
    id: "masvingo-roadworks",
    title: "Masvingo Road Rehabilitation",
    category: "earthmoving",
    location: "Masvingo, Zimbabwe",
    image: "masvingo-roadworks-1",
    gallery: [
      { name: "masvingo-roadworks-1", alt: "New road base laid along the upgraded route" },
      { name: "masvingo-roadworks-2", alt: "Wheel loader working the borrow area" },
      { name: "masvingo-roadworks-3", alt: "Tipper loading aggregate at the quarry" },
      { name: "masvingo-roadworks-4", alt: "Crushed stone stockpiles for road base" },
    ],
    summary:
      "Road base preparation and haulage support for a 32 km rural access upgrade.",
    result: "Improved access with staged earthworks delivery.",
    scope: [
      "Material haulage and stockpiling",
      "Compaction and grading support",
      "Equipment operators and supervisors",
    ],
    featured: false,
  },
];
