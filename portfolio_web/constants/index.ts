import llmcover from "../public/llmCover.png"
import dymaxioncover from "../public/dymaxionCover.png";
import portfoliocover from "../public/portfolioCover.png";
import cvcover from "../public/cvcover.png";
import partifulcover from "../public/partifulcover.png";
import sweolcover from "../public/sewolcover.png";
import ffcover from "../public/ffcover.png";
import handercover from "../public/handercover.png"
import resocover from "../public/resocover.png";
import qgcover from "../public/quantguidecover.png";
import sofa from "../public/ysoa.svg";


export const NAV_LINKS = [
    { href: '/about', key: 'about', label: 'ABOUT' },
    { href: '/work', key: 'work', label: 'WORK' },
    { href: '/contact', key: 'contact', label: 'CONTACT' },
];


export const CONTACTS = [
    { href: 'mailto:seung_heon_song@brown.edu?subject=[From%20Portfolio]%20Hey%20Dave!&body=Dear%20Dave%2C%0D%0AHi!%0D%0A*%20please%20share%20what%20you%20want%20to%20talk%20about!', key: 'Email', label: "Let's Chat!" },
    { href: "https://docs.google.com/document/d/15BK_cKjaB5VSf5g-ugilq0ZpE-pmAlMVKnlNvL5jAT0/edit?usp=sharing", key: 'Résumé', label: "📍" },
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


export const WORKLIST = [
    {
        href: "/work",
        id: 1, title: 'Multimodal LLM Research',
        position: "Research Assistant",
        time: "Summer 2024",
        subtitle: "Summer Research @ Brown University", skilltags: ["AI/ML", "Database", "SQL"],
        coverimg: llmcover,
        tag: true,
        tagtxt: "Summer 2024",
        category: ['Research', 'Selected'], selected: true
    },
    {
        href: "/work",
        id: 2, title: 'Dymaxion',
        position: "Software Engineer",
        time: "Summer 2024",
        subtitle: "Automating Interior Design", skilltags: ["Full-Stack", "Mobile Dev", "Swift", "Intern"],
        coverimg: dymaxioncover,
        tag: true,
        tagtxt: "Summer 2024",
        category: ['Engineering', 'Selected'], selected: true
    },
    {
        href: "/work",
        id: 3, title: 'Portfolio Development',
        position: "Project",
        time: "2024",
        subtitle: "Personal Portfolio Design & Development.", skilltags: ["UI/UX", "Frontend", "Design"],
        coverimg: portfoliocover,
        tag: false,
        tagtxt: "",
        category: ['UI/UX', 'Engineering', 'Selected'], selected: true
    },
    {
        href: "/work",
        id: 4, title: 'Drowsiness Detection Device',
        position: "Project",
        time: "2024",
        subtitle: "Drowsiness detection using Machine Learning and Convolutional Neural Network for Drivers.", skilltags: ["AI/ML", "UIUX", "Computer Vision"],
        coverimg: cvcover,
        tag: true,
        tagtxt: "Work In Progress",
        category: ['Engineering'], selected: true
    },
    {
        href: "/work/pages/YaleSchoolOfArt",
        id: 5, title: 'Yale School of Art Redesign',
        position: "Project",
        time: "2024",
        subtitle: "Redesign of the Yale School of Art Website for Enhanced Accessibility and Coherence.", skilltags: ["UIUX"],
        coverimg: sofa,
        tag: true,
        tagtxt: "",
        category: ['UI/UX'], selected: true
    },
    {
        href: "/work/pages/partiful",
        id: 6, title: 'Partiful',
        position: "UX Designer",
        time: "2024",
        subtitle: "Optimizing user experience for Partiful users. Focus: Past Events", skilltags: ["UIUX"],
        coverimg: partifulcover,
        tag: false,
        tagtxt: "",
        category: ['UI/UX', 'Selected'], selected: true
    },
    {
        href: "/work",
        id: 7, title: 'SeWol(세월)',
        position: "Project",
        time: "2024",
        subtitle: "Exploring the meaning of space ownership in the modern urban environment.", skilltags: ["HCI", "UIUX", "AI/ML"],
        coverimg: sweolcover,
        tag: true,
        tagtxt: "Work In Progress",
        category: ['Engineering', 'Research'], selected: true
    },
    {
        href: "/work",
        id: 8, title: 'ForeverFan',
        position: "UX Designer",
        time: "2024",
        subtitle: "Connecting independent artists with their fans.", skilltags: ["UIUX"],
        coverimg: ffcover,
        tag: false,
        tagtxt: "",
        category: 'UI/UX', selected: false
    },
    {
        href: "/work/pages/hander",
        id: 9, title: 'Hander',
        position: "Co-Founder",
        time: "2023 - 2024",
        subtitle: "With mission to reduce carbon footprint of college students.", skilltags: ["UIUX", "PM", "Full-Stack", "Startup"],
        coverimg: handercover,
        tag: false,
        tagtxt: "",
        category: ['UI/UX', 'Engineering', 'Selected'], selected: true
    },
    {
        href: "/work",
        id: 10, title: 'Reso',
        position: "Chief of Staff, UX Researcher",
        time: "2023 - 2024",
        subtitle: "Reimagining case management process for arbitrators and law firms.", skilltags: ["UIUX", "PM", "UX Research"],
        coverimg: resocover,
        tag: false,
        tagtxt: "",
        category: ['UIUX'], selected: true
    },
    {
        href: "/work",
        id: 11, title: 'QuantGuide',
        position: "UIUX Designer, Frontend Dev",
        time: "2023",
        subtitle: "Making quant interview prep more accessible.", skilltags: ["Frontend", "UIUX"],
        coverimg: qgcover,
        tag: false,
        tagtxt: "",
        category: ['UIUX', 'Engineering'], selected: true
    }
];