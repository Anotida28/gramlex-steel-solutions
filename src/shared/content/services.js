import { Building, Calendar, CheckCircle, FileText, MapPin, Package, Truck, Wrench } from "lucide-react";

export const servicePillars = [
  {
    id: "construction",
    image: "service-construction",
    title: "Construction",
    description:
      "We take ownership of reinforcement coordination so your programme keeps moving. From bar schedules to pour-ready bundles, every delivery is sequenced to your site.",
    highlights: ["Project scheduling & sequencing", "QA/QC documentation packs", "On-site coordination & sign-off"],
    icon: Building,
  },
  {
    id: "steel-hardware",
    image: "service-steel",
    title: "Steel & General Hardware",
    description:
      "Certified reinforcement steel and critical hardware — sourced from vetted mills, fabricated to spec, and delivered with full traceability documentation.",
    highlights: ["Mill-certified reinforcement steel", "Precision cutting & bending", "Hardware & consumables supply"],
    icon: Wrench,
  },
  {
    id: "earthmoving",
    image: "service-earthmoving",
    title: "Earthmoving Equipment & Trucks",
    description:
      "Our fleet is ready when yours isn't. Excavators, tippers, low-beds, and experienced operators — mobilised fast and managed safely for the full duration.",
    highlights: ["Excavation, grading & bulk earthworks", "Tipper, flatbed & low-bed fleet", "Certified operators & safety oversight"],
    icon: Truck,
  },
];

export const serviceDetails = [
  {
    id: "construction",
    image: "service-construction",
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
    image: "service-steel",
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
    image: "service-earthmoving",
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
      "Yes. We align our fabrication schedules and logistics to your pour sequences, providing staggered deliveries and on-site supervision for each phase. Our team works directly with your site programme to eliminate clashes and avoid downtime between pours.",
  },
  {
    question: "Do you provide mill certificates and QA documentation?",
    answer:
      "Every reinforcement steel shipment includes mill certificates, batch inspection reports, and QA/QC documentation tailored to your compliance requirements. We maintain full traceability from source mill to site, and our documentation packs are formatted to match standard handover requirements.",
  },
  {
    question: "What lead times should we plan for custom fabrication?",
    answer:
      "Lead times depend on volume and complexity. Standard bending and kitting packages are typically turned around within 3–5 working days. For urgent programmes, we can mobilise priority fabrication slots within 48–72 hours once drawings and schedules are confirmed.",
  },
  {
    question: "Is equipment hire available with operators?",
    answer:
      "Yes. All earthmoving equipment is available with trained, safety-certified operators and on-site supervisors. We manage safety inductions, daily reporting, and equipment maintenance so you can focus on your project — not fleet logistics.",
  },
  {
    question: "Do you deliver outside of Harare?",
    answer:
      "We deliver across all 10 provinces of Zimbabwe. With our own logistics fleet and established transport partners, we can reach remote sites and tight delivery windows. Contact us with your location and we'll confirm turnaround times for your area.",
  },
  {
    question: "Can you handle both small orders and large-scale supply contracts?",
    answer:
      "Yes. We work with contractors ranging from single-building projects to large infrastructure programmes. Whether you need 5 tons for a residential slab or a phased supply contract for a national infrastructure project, our procurement and logistics teams scale to match your volume.",
  },
  {
    question: "What happens if our programme shifts mid-project?",
    answer:
      "Schedule changes are a reality on site and we plan for them. Once you notify us of a revised pour sequence, we adjust fabrication slots, reschedule deliveries, and reallocate fleet accordingly — without penalty for reasonable programme changes. Our teams are experienced at absorbing scope shifts without disrupting overall delivery.",
  },
  {
    question: "How do I get a quote?",
    answer:
      "Use our contact form or call us directly. For steel and hardware, share your drawing set or bar schedule and we'll price it within one business day. For earthmoving, tell us the scope, site location, and estimated duration. We'll respond with a detailed proposal aligned to your programme.",
  },
];
