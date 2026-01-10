import heroImage from "@/assets/hero-construction.jpg";
import showcaseImage from "@/assets/project-showcase.jpg";

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
  { value: "12", label: "Provinces covered" },
];

export const projects = [
  {
    id: "gweru-hospital",
    title: "Gweru Central Hospital Expansion",
    category: "construction",
    location: "Gweru, Zimbabwe",
    image: showcaseImage,
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
    image: heroImage,
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
    image: showcaseImage,
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
    image: heroImage,
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
    image: showcaseImage,
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
    image: heroImage,
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
