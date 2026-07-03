import type { ReactNode } from "react";
import BrushOutlinedIcon from "@mui/icons-material/BrushOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import FactCheckOutlinedIcon from "@mui/icons-material/FactCheckOutlined";

export type FeatureCard = {
  title: string;
  description: string;
  icon: ReactNode;
};

export type ProjectCard = {
  title: string;
  category: string;
  image: string;
  description: string;
  details?: string; // Additional details for split-pane lightbox
  tools?: string[]; // Tools used for this project
};

export type TimelineItem = {
  title: string;
  meta: string;
  description: string;
};

export type ReferenceItem = {
  name: string;
  role: string;
  phone: string;
  email: string;
};

export const featureCards: FeatureCard[] = [
  {
    title: "Visual Direction",
    description:
      "Brand systems and layouts that feel calm, premium, and easy to scan.",
    icon: <BrushOutlinedIcon />,
  },
  {
    title: "UI Thinking",
    description:
      "Interfaces structured for clarity, rhythm, and a clear user path.",
    icon: <DashboardCustomizeOutlinedIcon />,
  },
  {
    title: "Quality Focus",
    description:
      "Attention to spacing, consistency, and presentation across every screen.",
    icon: <FactCheckOutlinedIcon />,
  },
];

export const projectCards: ProjectCard[] = [
  {
    title: "Fashion Hub Sale",
    category: "Poster Design",
    image: "/images/projects/fashion.png",
    description: "A bold fashion sale promotional poster with a warm color palette.",
    details: "A premium marketing asset designed to boost click-through rates and high conversion in fashion retailers. The warm typography is carefully curated to create a high-fashion editorial mood.",
    tools: ["Photoshop", "Figma", "Canva"],
  },
  {
    title: "Winter Collection",
    category: "Poster Design",
    image: "/images/projects/jmcy.png",
    description: "A seasonal fashion promotional poster highlighting winter wear.",
    details: "High-fashion catalog cover page highlighting winter outerwear. Curated visual contrast helps focus viewer attention on product texture and details.",
    tools: ["Photoshop", "Lightroom"],
  },
  {
    title: "Sony Headphones Max",
    category: "Social Media Design",
    image: "/images/projects/Social Media Design.png",
    description: "A promotional social media graphic for Sony headphones with a modern layout.",
    details: "An experimental visual layout crafted for modern ad spaces. Using product-focused grid rhythm, this banner balances product highlights with core specs.",
    tools: ["Figma", "Illustrator"],
  },
  {
    title: "Kyla's 24th Birthday",
    category: "Invitation Design",
    image: "/images/projects/kyla-invitation.png",
    description: "A warm celebration invite with a soft, personal presentation.",
    details: "A modern, elegant birthday invite card featuring custom floral artwork, soft pastel color palettes, and curated serif typography.",
    tools: ["Canva", "Illustrator"],
  },
  {
    title: "Baptism Invitation",
    category: "Invitation Design",
    image: "/images/projects/baptism-invitation.png",
    description: "A clean and elegant invite tuned for a formal family event.",
    details: "An elegant, minimalist invitation tailored for sacred baptismal events. Focuses on premium gold accents, generous negative space, and deep spiritual reverence.",
    tools: ["Illustrator", "Photoshop"],
  },
  {
    title: "Rose Tisay's 50th Birthday",
    category: "Invitation Design",
    image: "/images/projects/rose-invitation.png",
    description: "A milestone birthday card with a polished celebratory tone.",
    details: "A milestone celebratory invite showcasing luxury floral motifs, gold gradients, and a clear informational hierarchy for guests.",
    tools: ["Canva", "Photoshop"],
  },
  {
    title: "Lamborghini Poster",
    category: "Poster Design",
    image: "/images/about/655168047b24b59c07080f6bc16d25372d632d16.png",
    description: "An energetic automotive poster with strong contrast and motion.",
    details: "A high-octane marketing layout presenting automotive speed, high-contrast neon lighting, and dramatic angle choices.",
    tools: ["Photoshop", "Lightroom"],
  },
  {
    title: "ZIPOOL",
    category: "Web Design",
    image: "/images/about/5dcbff2017dae7c06ec548363a6feab63bfec27c.png",
    description: "A travel and carpool concept with a modern app experience.",
    details: "Full visual user interface design for a modern carpooling platform. Solves driver-rider onboarding flows, map interfaces, and simple transaction states.",
    tools: ["Figma", "UI/UX Design"],
  },
  {
    title: "SCIL Portal",
    category: "Quality Engineering",
    image: "/images/about/31369cc4195558f6de134561baf6ee937c2e5286.png",
    description: "Manual testing and QA work for a functional portal workflow.",
    details: "Comprehensive quality assurance execution, system workflow mapping, and rigorous manual testing suites to optimize dashboard responsiveness.",
    tools: ["Manual Testing", "QA Suites", "Jira"],
  },
  {
    title: "Ella & Chad Wedding",
    category: "Invitation Design",
    image: "/images/projects/wedding-invite.png",
    description: "A wedding invite with a clean formal layout and soft styling.",
    details: "A high-fidelity minimalist print invite emphasizing layout rhythm, delicate typography, and a calm pastel design language.",
    tools: ["Illustrator", "InDesign"],
  },
  {
    title: "Tally Mendez Birthday",
    category: "Invitation Design",
    image: "/images/projects/birthday-tally.png",
    description: "A birthday invite built for a cheerful celebration moment.",
    details: "Playful birthday invitation integrating custom character graphics, vibrant color palettes, and high-readability details.",
    tools: ["Canva", "Illustrator"],
  },
  {
    title: "Baseball Tournament",
    category: "Poster Design",
    image: "/images/about/af32f8375e70c67135c3f15ae84bcbf73c48cfce.png",
    description: "A sports poster with strong energy and clear event hierarchy.",
    details: "An dynamic event poster prioritizing clear typographic hierarchy, high-contrast action photography, and bold, modern sport styling.",
    tools: ["Photoshop", "Illustrator"],
  },
  {
    title: "Ferrari Poster",
    category: "Poster Design",
    image: "/images/about/c6818435bf71880d6852b2d7de63dbef0dc8f8ab.png",
    description: "A high-contrast automotive poster with a bold premium feel.",
    details: "Sleek dark-mode automotive poster capturing the power, elegance, and premium branding of modern luxury vehicles.",
    tools: ["Photoshop", "Lightroom"],
  },
  {
    title: "MATCHA",
    category: "Web Design",
    image: "/images/about/5566e2d1b4ae45ccdc7f0e46353d091fe7296da3.png",
    description: "A Japanese beverage brand concept with a polished UI system.",
    details: "Minimalist landing page design for an authentic matcha tea brand, blending organic texture imagery with clean, modern typography grids.",
    tools: ["Figma", "UI/UX Design"],
  },
  {
    title: "MATCHA Branding",
    category: "Web Design",
    image: "/images/projects/branding.png",
    description: "A matcha beverage brand concept with a polished branding design.",
    details: "Complete branding study, packaging visual layout, and logo placement exploration for premium tea products.",
    tools: ["Photoshop", "Illustrator", "Branding"],
  },
];

export const timeline: TimelineItem[] = [
  {
    title: "Computer Communication Development Institute",
    meta: "Education · 2022 – 2026",
    description:
      "Building design and technical foundations while sharpening UI/UX thinking.",
  },
  {
    title: "Event Organizer and Event Management",
    meta: "Experience",
    description:
      "Planning, scheduling, and coordinating moving parts to keep events on track.",
  },
  {
    title: "Invitation, Poster, and Web Projects",
    meta: "Portfolio Work",
    description:
      "Design work across print, web, and quality assurance tasks with a consistent finish.",
  },
];

export const certificates = [
  "COMMENDATION",
  "JUDGE",
  "OUTSTANDING CAPSTONE PROJECT",
  "ACADEMIC DISTINCTION",
  "DEAN'S LISTER",
  "WITH ACADEMIC DISTINCTION",
  "BEST IN ON THE JOB TRAINING",
] as const;

export const languages = ["Tagalog", "English"] as const;

export const references: ReferenceItem[] = [
  {
    name: "Louie B. Almeda",
    role: "Head/Founder of SCIL, Inc.",
    phone: "+63 930 862 7672",
    email: "louie@almeda.io",
  },
  {
    name: "July Ajero",
    role: "Dean of Student Affairs",
    phone: "+63 960 339 4441",
    email: "ajerojuly@gmail.com",
  },
];

export const socialLinks = [
  { icon: "Facebook", url: "https://facebook.com/gubatmia", label: "Facebook" },
  { icon: "LinkedIn", url: "https://linkedin.com/in/mia-gubat", label: "LinkedIn" },
  { icon: "GitHub", url: "https://github.com/briella13", label: "GitHub" },
];
