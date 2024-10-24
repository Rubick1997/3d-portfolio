import { Book, Briefcase, Contact, House } from "lucide-react";
import {
  CitiLogo,
  FixinityLogo,
  JaxelLogo,
  PyteLogo,
  SnodgrassIcon,
  Spotlight1,
  Spotlight2,
  Spotlight3,
  Spotlight4,
} from "@/assets/images";
import { CrowdFindIcon, ReferrsMeIcon, CloudExpressIcon } from "@/assets/icons";
import {
  SiAntdesign,
  SiMantine,
  SiNextdotjs,
  SiReact,
  SiRecoil,
  SiRedux,
  SiShadcnui,
  SiStyledcomponents,
  SiSwr,
  SiTailwindcss,
} from "@icons-pack/react-simple-icons";

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
    id: 3,
    name: "Work",
    href: "#work",
    icon: <Briefcase className="h-5 w-5" />,
  },
  {
    id: 4,
    name: "Contact",
    href: "#contact",
    icon: <Contact className="h-5 w-5" />,
  },
];

export const clientReviews = [
  {
    id: 1,
    name: "Emily Johnson",
    position: "Marketing Director at GreenLeaf",
    img: "",
    review: "",
  },
];

export const myProjects = [
  {
    title: "ReferrsMe",
    desc: "Referral-driven job application platform that successfully supported over 1,000 users.",
    subdesc:
      "Developed a comprehensive front-end in Next.js for platform that not only streamlined the application process but also enhanced user engagement and facilitated connections between job seekers and employers, contributing to a more efficient referral system.",
    logo: <ReferrsMeIcon className="w-10 h-10 shadow-md" />,
    logoStyle: {
      backgroundColor: "#2A1816",
      border: "0.2px solid #36201D",
      boxShadow: "0px 0px 60px 0px #AA3C304D",
    },
    spotlight: Spotlight1,
    tags: [
      {
        id: 2,
        name: "Next.js",
        Icon: SiNextdotjs,
      },
      {
        id: 3,
        name: "Styled Components",
        Icon: SiStyledcomponents,
      },
      {
        id: 4,
        name: "Redux",
        Icon: SiRedux,
      },
    ],
  },
  {
    title: "Crowndfind",
    desc: "Platform that enhances networking opportunities and facilitates project collaborations, enabling developers to showcase their skills while helping businesses find the talent they need.",
    subdesc:
      "Created a user-friendly UI platform in React that effectively connects early-career software developers with startups and small businesses. ",
    logo: <CrowdFindIcon className="w-10 h-10 shadow-md" />,
    logoStyle: {
      backgroundColor: "#13202F",
      border: "0.2px solid #17293E",
      boxShadow: "0px 0px 60px 0px #2F6DB54D",
    },
    spotlight: Spotlight2,
    tags: [
      {
        id: 2,
        name: "React",
        Icon: SiReact,
      },
      {
        id: 3,
        name: "Recoil",
        Icon: SiRecoil,
      },
      {
        id: 4,
        name: "Tailwind CSS",
        Icon: SiTailwindcss,
      },
      {
        id: 0,
        name: "Tailwind CSS",
        Icon: SiAntdesign,
      },
    ],
  },
  {
    title: "Cloud Express",
    desc: "Cloud deployment platform that designed to simplify backend infrastructure setup for small startups and businesses",
    subdesc:
      "Launched an intuitive UI in NextJS that streamlines the deployment process, making it accessible for teams with varying technical expertise. It not only improved operational efficiency but also successfully secured two enterprise clients, demonstrating its value in meeting the needs of growing organizations.",
    logo: <CloudExpressIcon className="w-10 h-10 shadow-md" />,
    logoStyle: {
      backgroundColor: "#60f5a1",
      background:
        "linear-gradient(0deg, #60F5A150, #60F5A150), linear-gradient(180deg, rgba(255, 255, 255, 0.9) 0%, rgba(208, 213, 221, 0.8) 100%)",
      border: "0.2px solid rgba(208, 213, 221, 1)",
      boxShadow: "0px 0px 60px 0px rgba(35, 131, 96, 0.3)",
    },
    spotlight: Spotlight3,
    tags: [
      {
        id: 2,
        name: "Next.js",
        Icon: SiNextdotjs,
      },
      {
        id: 3,
        name: "Mantine",
        Icon: SiMantine,
      },
      {
        id: 4,
        name: "Tailwind CSS",
        Icon: SiTailwindcss,
      },
      {
        id: 0,
        name: "SWR",
        Icon: SiSwr,
      },
    ],
  },
  {
    title: "Snodgrass AI",
    desc: "Tool designed to assist prompt engineers in testing and refining AI models for optimal performance",
    subdesc:
      "This project is particularly exciting as it has ranked in the top 10% of applications for Y Combinator’s 2024 batch, reflecting its innovative approach and potential impact in the AI space. By focusing on user experience and functionality, I aim to create an intuitive interface that empowers engineers to achieve more accurate and efficient model outputs, ultimately contributing to advancements in AI technology.",
    logo: (
      <img src={SnodgrassIcon} className="w-16 h-16 shadow-md rounded-xl" />
    ),
    isImage: true,
    logoStyle: {
      backgroundColor: "#60f5a1",
      background: "inherit",
    },
    spotlight: Spotlight4,
    tags: [
      {
        id: 2,
        name: "Next.js",
        Icon: SiNextdotjs,
      },
      {
        id: 3,
        name: "SWR",
        Icon: SiSwr,
      },
      {
        id: 4,
        name: "Shad cn/ui",
        Icon: SiShadcnui,
      },
      {
        id: 0,
        name: "Tailwind CSS",
        Icon: SiAntdesign,
      },
    ],
  },
];

export const calculateSizes = (
  isSmall: boolean,
  isMobile: boolean,
  isTablet: boolean,
) => {
  return {
    deskScale: isSmall ? 1.5 : isMobile ? 2 : 3,
    deskPosition: isMobile ? [-0.5, -4.5, 0] : [-1, -5.5, 0],
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
    name: "Pyte Inc",
    position: "Software Engineer",
    duration: "2022 - Present",
    title:
      "To significantly enhance our chances of securing contracts with large enterprises, I took ownership of the entire UI development process. This involved designing and implementing robust software solutions that supported our new service model while ensuring scalability and operational efficiency.",
    icon: PyteLogo,
    animation: "victory",
  },
  {
    id: 2,
    name: "Jaxel Inc",
    position: "Full Stack Engineer",
    duration: "May 2021 - Dec 2022",
    title:
      "Coordinated 2 significant IT and Incident Management projects for enterprise clients. Partnered with cross-functional teams to translate requirements into technical solutions. Analyzed, diagnosed, and resolved software issues to ensure optimal performance. Led Agile development and managed sprints to ensure timely delivery of features.",
    icon: JaxelLogo,
    animation: "clapping",
  },
  {
    id: 3,
    name: "Fixinity",
    position: "Full Stack Engineer",
    duration: "Jul 2019 - May 2021",
    title:
      "Developed a location-based application to connect users with the best local auto mechanics. Reduced user complaints by 30% through the implementation of 20+ features annually to improve real-time search and seamless user communication. Used React, React Native, and Firebase.",
    icon: FixinityLogo,
    animation: "salute",
  },
  {
    id: 4,
    name: "Citibank",
    position: "Full Stack Developer",
    duration: "Jul 2018 - Jun 2019",
    title:
      "Augmented team efficiency by 20% by developing a custom internal tool to automate KYC document retrieval, enabling the team to handle hundreds of transactions daily without manual searches.",
    icon: CitiLogo,
    animation: "clapping",
  },
];

export const keySkills = [
  "Frontend & Backend Development",
  "Stakeholder Collaboration",
  "Automated Testing",
  "Incident Management",
  "Cross-Platform Development",
  "SDLC Management",
  "Cloud Migration",
  "Software Issue Resolution",
];

export const email = "rustam905@gmail.com";
