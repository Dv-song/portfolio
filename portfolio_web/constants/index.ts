import llmcover from "../public/llmCover.png";
import llmcover_big from "../public/work_covers/summer_research_2024/2024_summer_research.png";
import llm_research_logo from "@/public/work_covers/summer_research_2024/cover_logo.png";
import dymaxioncover from "../public/dymaxionCover.png";
import dymaxioncover_big from "../public/work_covers/dymaxion/coverImagebig.png";
import dymaxion_logo from "../public/work_covers/dymaxion/logo.svg";
import portfoliocover from "../public/portfolioCover.png";
import cvcover from "../public/cvcover.png";
import drivealive_image from "../public/work_covers/drivealive/coverimg.png";
import drivealive_logo from "../public/work_covers/drivealive/logo.png";
import partifulcover from "../public/partifulcover.png";
import partiful_cover from "../public/work_covers/partiful/partiful_cover.png";
import sweolcover from "../public/sewolcover.png";
import ffcover from "../public/ffcover.png";
import handercover from "../public/handercover.png"
import hander_cover from "../public/work_covers/hander/cover_image.png";
import resocover from "../public/resocover.png";
import reso_cover from "../public/work_covers/reso/reso_cover.png";
import qgcover from "../public/quantguidecover.png";
import sofa from "../public/ysoa.svg";
import { StaticImageData } from "next/image";

import partiful_cover_long from "../public/landing/Portfolio_Imgs/partifulcard.png";
import drivealive_cover_long from "../public/landing/Portfolio_Imgs/drivealive_cover_long.png";
import hander_cover_long from "../public/landing/Portfolio_Imgs/hander_cover_long.png";
import reso_cover_long from "../public/landing/Portfolio_Imgs/reso_cover_long.png";




export const NAV_LINKS = [
    { href: '/about', key: 'about', label: 'ABOUT' },
    { href: '/work', key: 'work', label: 'WORK & PROJECTS' },
    { href: '/contact', key: 'contact', label: 'CONTACT' },
];

export const LIFE_UPDATES = [
    { title: "Currently Interested in...", update: ["💡  entrepreneurship and idea validation", "🦾  distributed AI agent systems in indoor environment"] },
    { title: "Work Updates: Fall '24", update: ["🩺 [Research] Working on utilizing LLM based agent to protect patient privacy.", ""] },
    { title: "Life Updates", update: ["🌞 Reading Survival of the Friendliest by Brian Hare and Vanessa Woods"] },
];


export const CONTACTS = [
    { href: 'mailto:seung_heon_song@brown.edu?subject=[From%20Portfolio]%20Hey%20Dave!&body=Dear%20Dave%2C%0D%0AHi!%0D%0A*%20please%20share%20what%20you%20want%20to%20talk%20about!', key: 'Email', label: "Let's Chat!" },
    { href: "https://drive.google.com/file/d/1Izac394CQ69lpZAIJqJugIWH7CtahLrS/view?usp=sharing", key: 'Résumé', label: "📍" },
    { href: 'https://github.com/Dv-song', key: 'Github', label: "For Code" },
    { href: 'https://www.linkedin.com/in/davidshsong/', key: 'LinkedIn', label: "More about me" },
    { href: 'https://www.instagram.com/d.songg/', key: 'Instagram', label: "👋" },
]

export const ENGNSKILLS = [
    {
        type: "Languages", skills: "Python, Java, Javascript, Typescript, Prolog, C, HTML, CSS, ReasonML, XML"
    },
    {
        type: "Frameworks & Technologies", skills: "React, Node.js, Express, Next.js, React Native, Tailwind CSS, Bootstrap, Git"
    },
    {
        type: "Process", skills: "Full-Stack Development, Mobile Development, AI & ML, Computer Vision, LLM Research"
    }
]

export const DESIGNSKILLS = [
    { type: "Software", skills: "Figma, Adobe Illustrator, Rhino 3D, Stata, Miro, Microsoft Office" },
    { type: "Process", skills: "UX Research, User Journeys, AB Testing, Rapid Prototyping, Wire-framing, Usability Testing, Quantitative & Qualitative user research" }
]

export const WORKTYPES = [
    "Selected", "All", "UI/UX", "Engineering", "Research"
]
interface Work {
    featured: boolean;
    href: string;
    id: number;
    title: string;
    position: string;
    time: string;
    subtitle: string;
    skilltags: string[];
    coverimg: StaticImageData[];
    tag: boolean;
    tagtxt: string;
    category: string[];
    selected: boolean;
    cover_logo?: StaticImageData;
    cover_text?: string;
}

export const WORKLIST: Work[] = [
    {
        featured: true,
        href: "/work/pages/wip",
        id: 2, title: 'Dymaxion',
        position: "Software Engineer Intern",
        time: "Summer 2024",
        subtitle: "Automating Interior Design",
        skilltags: ["Full-Stack", "iOS Development", "Internship"],
        coverimg: [dymaxioncover_big],
        tag: true,
        tagtxt: "Summer 2024",
        category: ['Engineering', 'Selected'],
        selected: true,
        cover_logo: dymaxion_logo,
        cover_text: "Making Interior Design More Accessible with an Automated Furniture Recommendation Algorithm",
    },
    {
        featured: true,
        href: "/work/pages/partiful",
        id: 6, title: 'Partiful',
        position: "UX Designer",
        time: "Spring 2024",
        subtitle: "Optimizing user experience for Partiful users. Focus: Past Events",
        skilltags: ["UI/UX", "Prototyping", "Project"],
        coverimg: [partiful_cover_long, partifulcover],
        tag: false,
        tagtxt: "",
        category: ['UI/UX', 'Selected'],
        selected: true,
        cover_text: "Making Past Memories More Accessible",
    },
    {
        featured: true,
        href: "/work/pages/wip",
        id: 1, title: 'Brown University & RI Hospital',
        position: "LLM Student Researcher",
        time: "Summer 2024",
        subtitle: "Summer Research @ Brown University",
        skilltags: ["LLM", "DSPy", "RAG", "Research"],
        coverimg: [llmcover_big],
        tag: true,
        tagtxt: "Summer 2024",
        category: ['Research', 'Selected'],
        selected: true,
        cover_logo: llm_research_logo,
        cover_text: "Optimizing Local LLM Agents-Based System to Protect Protected Health Information in Freeform Clinical Notes"
    },
    {
        featured: false,
        href: "/work/pages/wip",
        id: 3, title: 'Portfolio Development',
        position: "Project",
        time: "2024",
        subtitle: "Personal Portfolio Design & Development.", skilltags: ["UI/UX", "Frontend", "Design"],
        coverimg: [portfoliocover],
        tag: false,
        tagtxt: "",
        category: ['UI/UX', 'Engineering', 'Selected'], selected: true
    },
    {
        featured: true,
        href: "/work/pages/wip",
        id: 4, title: 'DriveAlive',
        position: "Project",
        time: "Spring 2024",
        subtitle: "Drowsiness detection using Machine Learning and Convolutional Neural Network for Drivers.",
        skilltags: ["AI/ML", "Computer Vision", "Project"],
        coverimg: [drivealive_cover_long],
        tag: true,
        tagtxt: "Work In Progress",
        category: ['Engineering'],
        selected: true,
        cover_logo: drivealive_logo,
        cover_text: "Drowsiness Detection System Using Machine Learning and Convolutional Neural Networks for Rideshare Drivers",
    },
    {
        featured: false,
        href: "/work/pages/YaleSchoolOfArt",
        id: 5, title: 'Yale School of Art Redesign',
        position: "Project",
        time: "2024",
        subtitle: "Redesign of the Yale School of Art Website for Enhanced Accessibility and Coherence.", skilltags: ["UI/UX"],
        coverimg: [sofa],
        tag: true,
        tagtxt: "",
        category: ['UI/UX'], selected: true
    },
    {
        featured: false,
        href: "/work/pages/wip",
        id: 7, title: 'SeWol(세월)',
        position: "Project",
        time: "2024",
        subtitle: "Exploring the meaning of space ownership in the modern urban environment.", skilltags: ["HCI", "UI/UX", "AI/ML"],
        coverimg: [sweolcover],
        tag: true,
        tagtxt: "Work In Progress",
        category: ['Engineering', 'Research'], selected: true
    },
    {
        featured: false,
        href: "/work/pages/wip",
        id: 8, title: 'ForeverFan',
        position: "UX Designer",
        time: "2024",
        subtitle: "Connecting independent artists with their fans.", skilltags: ["UI/UX"],
        coverimg: [ffcover],
        tag: false,
        tagtxt: "",
        category: ['UI/UX'], selected: false
    },
    {
        featured: true,
        href: "/work/pages/hander",
        id: 9, title: 'Hander',
        position: "Co-Founder",
        time: "2023 - 2024",
        subtitle: "With mission to reduce carbon footprint of college students.",
        skilltags: ["UX Research", "Full-Stack", "Startup"],
        coverimg: [hander_cover_long, handercover],
        tag: false,
        tagtxt: "",
        category: ['UI/UX', 'Engineering', 'Selected'], selected: true,
        cover_text: "E-commerce Platform for College Students to Buy and Sell Second-Hand Items"
    },
    {
        featured: true,
        href: "/work/pages/wip",
        id: 10, title: 'Reso',
        position: "Chief of Staff, UX Researcher",
        time: "2023 - 2024",
        subtitle: "Reimagining case management process for arbitrators and law firms.",
        skilltags: ["UI/UX", "Product Design", "Internship"],
        coverimg: [reso_cover_long, resocover],
        tag: false,
        tagtxt: "",
        category: ['UIUX'], selected: true,
        cover_text: "Reimagining Case Management for Arbitrators and Law Firms",
    },
    {
        featured: false,
        href: "/work/pages/wip",
        id: 11, title: 'QuantGuide',
        position: "UIUX Designer, Frontend Dev",
        time: "2023",
        subtitle: "Making quant interview prep more accessible.", skilltags: ["Frontend", "UI/UX"],
        coverimg: [qgcover],
        tag: false,
        tagtxt: "",
        category: ['UIUX', 'Engineering'], selected: true
    }
];


export const workTypes: { type: string, tags: string[] }[] = [
    {
        type: "design",
        tags: ["UX Research", "Product Design", "UI/UX", "Design", "Prototyping"]
    },
    {
        type: "engineering",
        tags: ["LLM", "DSPy", "Full-Stack", "iOS Development", "Frontend", "Design", "AI/ML", "Computer Vision", "RAG"]

    }
]