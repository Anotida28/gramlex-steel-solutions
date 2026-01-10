import { Building, Calendar, CheckCircle, FileText, MapPin, Package, Truck, Wrench } from "lucide-react";

export const servicePillars = [
  {
    id: "construction",
    title: "Construction",
    description:
      "End-to-end delivery support for civil, commercial, and industrial builds with coordinated site logistics.",
    highlights: ["Project scheduling support", "QA documentation", "Site coordination"],
    icon: Building,
  },
  {
    id: "steel-hardware",
    title: "Steel & General Hardware",
    description:
      "Reliable supply of reinforcement steel, mesh, and construction hardware with verified mill traceability.",
    highlights: ["Certified steel supply", "Cutting & bending", "Hardware procurement"],
    icon: Wrench,
  },
  {
    id: "earthmoving",
    title: "Earthmoving Equipment & Trucks",
    description:
      "Fleet-backed equipment and haulage to keep earthworks, foundations, and bulk movements on schedule.",
    highlights: ["Excavation & grading", "Tipper & flatbed fleet", "Operator support"],
    icon: Truck,
  },
];

export const serviceDetails = [
  {
    id: "construction",
    title: "Construction Delivery",
    summary:
      "A single point of coordination for reinforcement supply, fabrication, and site sequencing across complex builds.",
    icon: Building,
    whatWeDo: [
      "Coordinate reinforcement schedules with site programmes.",
      "Provide on-site support for placement and compliance.",
      "Align deliveries to pour sequencing and staging areas.",
    ],
    deliverables: [
      "Bending schedules and bar lists",
      "QA/QC documentation packs",
      "Site-ready bundles and cages",
    ],
    process: [
      "Scope review and drawing take-off",
      "Fabrication planning and scheduling",
      "Delivery, placement, and sign-off",
    ],
  },
  {
    id: "steel-hardware",
    title: "Steel & General Hardware Supply",
    summary:
      "Certified reinforcement steel and critical hardware sourced, fabricated, and delivered with full traceability.",
    icon: Package,
    whatWeDo: [
      "Source reinforcement steel from vetted mills.",
      "Provide cutting, bending, and kitting services.",
      "Supply hardware essentials for fast site mobilisation.",
    ],
    deliverables: [
      "Reinforcement steel and mesh supply",
      "Hardware packs (ties, chairs, anchors)",
      "Mill certificates and delivery notes",
    ],
    process: [
      "Material specification and sourcing",
      "Fabrication, kitting, and labelling",
      "Delivery with reconciliation support",
    ],
  },
  {
    id: "earthmoving",
    title: "Earthmoving Equipment & Trucks",
    summary:
      "Earthworks, haulage, and equipment support backed by experienced operators and reliable fleet availability.",
    icon: Truck,
    whatWeDo: [
      "Excavation, grading, and bulk earthworks.",
      "On-demand tipper, low-bed, and flatbed haulage.",
      "Operator support and safety compliance oversight.",
    ],
    deliverables: [
      "Equipment mobilisation plan",
      "Operator-certified machinery",
      "Daily production and safety reports",
    ],
    process: [
      "Site briefing and access assessment",
      "Equipment mobilisation and execution",
      "Progress tracking and demobilisation",
    ],
  },
];

export const serviceProcess = [
  {
    title: "Site visit",
    description: "Confirm scope, access, and safety requirements at the project location.",
    icon: MapPin,
  },
  {
    title: "Quote",
    description: "Detailed pricing and timelines aligned to your program and drawings.",
    icon: FileText,
  },
  {
    title: "Schedule",
    description: "Fabrication and fleet mobilisation planned around pour sequences.",
    icon: Calendar,
  },
  {
    title: "Deliver",
    description: "Materials, equipment, and crews deployed with QA controls in place.",
    icon: Truck,
  },
  {
    title: "Handover",
    description: "Documentation, compliance checks, and close-out reporting.",
    icon: CheckCircle,
  },
];

export const serviceFaqs = [
  {
    question: "Can Gramlex support multi-site or phased delivery programmes?",
    answer:
      "Yes. We align our fabrication and logistics to your pour sequences, providing staggered deliveries and on-site supervision for each phase.",
  },
  {
    question: "Do you provide mill certificates and QA documentation?",
    answer:
      "All reinforcement steel shipments include mill certificates, inspection reports, and QA/QC documentation tailored to your compliance requirements.",
  },
  {
    question: "What lead times should we plan for custom fabrication?",
    answer:
      "Lead times depend on volume and complexity, but we can turn around urgent packages within 48-72 hours once schedules are confirmed.",
  },
  {
    question: "Is equipment hire available with operators?",
    answer:
      "Yes. We provide trained operators and supervisors for earthmoving equipment and haulage operations.",
  },
];
