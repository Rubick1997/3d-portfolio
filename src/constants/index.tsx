import { Book, Briefcase, Contact, House } from "lucide-react";
import CitiLogo from "@/assets/images/citi_logo.png";
import FixinityLogo from "@/assets/images/fixinity_logo.png";
import JaxelLogo from "@/assets/images/jaxel_inc_logo.png";
import PyteLogo from "@/assets/images/pyteai_logo.png";

export const linkedinUrl = "https://www.linkedin.com/in/rustam-kolumbayev";
export const githubUrl = "https://github.com/Rubick1997";
export const email = "rustam905@gmail.com";

export const navLinks = [
  {
    id: 1,
    name: "Home",
    href: "#home",
    icon: <House className="h-5 w-5" />,
  },
  {
    id: 2,
    name: "About",
    href: "#about",
    icon: <Book className="h-5 w-5" />,
  },
  {
    id: 4,
    name: "Experience",
    href: "#experience",
    icon: <Briefcase className="h-5 w-5" />,
  },
  {
    id: 5,
    name: "Contact",
    href: "#contact",
    icon: <Contact className="h-5 w-5" />,
  },
];

export const heroStats = [
  { value: "40%", label: "dashboard load-time reduction" },
  { value: "48%", label: "collaboration engagement lift" },
  { value: "60%", label: "incident/support request reduction" },
];

export const profileHighlights = [
  "Senior Software Engineer at Qloo, building AI-powered cultural intelligence and recommendation products.",
  "Specializes in React, TypeScript, LLM/RAG workflows, gRPC, WebSockets, D3.js, and design systems.",
  "Turns complex AI and data platforms into interfaces that enterprise and consumer users can trust.",
];

export const keySkills = [
  "React",
  "TypeScript",
  "Next.js",
  "LLMs",
  "RAG",
  "gRPC",
  "D3.js",
  "WebSockets",
  "Redux Toolkit",
  "Cypress",
  "Jest",
  "Sentry",
  "Firebase",
  "Cloud Security",
];

export const calculateSizes = (
  isSmall: boolean,
  isMobile: boolean,
  isTablet: boolean,
) => {
  return {
    deskScale: isSmall ? 1.25 : isMobile ? 1.6 : isTablet ? 2.3 : 3,
    deskPosition: isMobile ? [-0.2, -4.2, 0] : [-1, -5.5, 0],
    jsPosition: isSmall
      ? [2, -8, 0]
      : isMobile
        ? [5, -8, 0]
        : isTablet
          ? [5, -10, 0]
          : [10, -10, 0],
    reactLogoPosition: isSmall
      ? [3, 1, 0]
      : isMobile
        ? [5, 1, 0]
        : isTablet
          ? [8, 1, 0]
          : [10, 1, 0],
    pythonPosition: isSmall
      ? [-3, 1, 0]
      : isMobile
        ? [-5, 1, 0]
        : isTablet
          ? [-5, 1, 0]
          : [-8, 9, 0],
    gitPosition: isSmall
      ? [-2, -8, 0]
      : isMobile
        ? [-5, -8, 0]
        : isTablet
          ? [-5, -10, 0]
          : [-10, -12, 0],
  };
};

export const workExperiences = [
  {
    id: 1,
    name: "Qloo",
    position: "Senior Frontend Engineer",
    duration: "Feb 2025 - Present",
    location: "Seattle, WA",
    initials: "QL",
    title:
      "Leading frontend architecture for Qloo's AI intelligence platform and TasteDive, building production AI experiences that turn taste graph and ML insights into interfaces people actually use.",
    bullets: [
      "Rebuilt AI dashboard architecture and reduced load time by 40% for a Fortune 100 client base.",
      "Owned TasteDive's Next.js, React, and TypeScript stack as the sole frontend developer across 9+ recommendation categories.",
      "Integrated real-time collaboration, D3.js visualizations, Sentry monitoring, REST APIs, and WebSockets to improve adoption and time to resolution.",
    ],
    animation: "victory",
  },
  {
    id: 2,
    name: "Pyte (acquired by All Hands AI)",
    position: "Senior Frontend Engineer",
    duration: "Dec 2022 - Feb 2025",
    location: "Seattle, WA",
    title:
      "Sole frontend engineer on a secure data collaboration platform for Fortune 100 enterprises, designed around SMPC and confidential computing enclaves.",
    bullets: [
      "Architected 30+ screens in React, TypeScript, Redux Toolkit, gRPC, and WebAssembly.",
      "Built enterprise demos that helped secure paid proofs of concept, including an Advertising Week New York deployment.",
      "Improved security and reliability with OAuth, cloud uploads, SOC 2 remediation, Cypress, Jest, and CI/CD test coverage.",
    ],
    icon: PyteLogo,
    animation: "clapping",
  },
  {
    id: 3,
    name: "Jaxel",
    position: "Full-Stack Engineer",
    duration: "May 2021 - Dec 2022",
    location: "United States",
    title:
      "Led incident management and frontend platform work across enterprise analytics and inventory systems.",
    bullets: [
      "Boosted analytics UI performance by 50% for a Southern California electricity provider.",
      "Cut production incidents by 60% while leading an on-call response team for a global coffee retailer.",
      "Debugged React and Node.js production issues with Datadog, PagerDuty, Postman, and Agile delivery practices.",
    ],
    icon: JaxelLogo,
    animation: "salute",
  },
  {
    id: 4,
    name: "Fixinity",
    position: "Full-Stack Developer",
    duration: "Jul 2019 - May 2021",
    location: "Los Angeles, CA",
    title:
      "Built a location-based marketplace connecting users with local auto mechanics across React, React Native, and Firebase.",
    bullets: [
      "Reduced user complaints by 30% by shipping 20+ discovery and communication features per year.",
      "Improved user satisfaction by 25% through UX collaboration and streamlined core flows.",
      "Built Firebase Authentication, Firestore account flows, and real-time chat for service negotiation.",
    ],
    icon: FixinityLogo,
    animation: "clapping",
  },
  {
    id: 5,
    name: "Citi",
    position: "Developer Intern, Compliance",
    duration: "Jul 2018 - Jun 2019",
    location: "Kazakhstan",
    title:
      "Supported AML and KYC database tooling in Citi's compliance department.",
    bullets: [
      "Built internal tooling that automated KYC document retrieval and helped teams process hundreds of transactions daily.",
      "Fixed bugs across internal Citibank web platforms and supported compliance workflows.",
    ],
    icon: CitiLogo,
    animation: "clapping",
  },
];
