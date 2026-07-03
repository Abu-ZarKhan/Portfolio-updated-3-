import {
    mobile,
    ai,
    laravel,
    php,
    seb,
    dks,
    backend,
    nesspaklogo,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    carrent,
    jobit,
    tripguide,
    irsawebsite,
    lesco,
    fesco,
    iesco,
    WordPress,
    crownwms,
    shopify,
    unity,
    threejs,
    csharp,
    dotnetcore,
    mssql,
    vuejs,
    nextjs,
    bootstrap,
    wordpress,
} from "../assets";

export const navLinks = [{
        id: "about",
        title: "About",
    },
    {
        id: "work",
        title: "Experience",
    },
    {
        id: "skills",
        title: "Skills",
    },
    {
        id: "projects",
        title: "Projects",
    },
    {
        id: "certificates",
        title: "Certificates",
    },
    {
        id: "contact",
        title: "Contact",
    },
];

const services = [{
        title: "Web Developer",
        icon: web,
    },
    {
        title: "React.js Developer",
        icon: mobile,
    },
    {
        title: "Game Developer",
        icon: unity,
    },
    {
        title: "Artifitial Intelligence",
        icon: ai,
    },
    {
        title: "PHP Developer",
        icon: php,
    },
    {
        title: "Laravel Developer",
        icon: laravel,
    },
    {
        title: "UI/UX Designer",
        icon: figma,
    },
    {
        title: "WordPress Developer",
        icon: WordPress,
    },
];

const technologies = [{
        name: "HTML 5",
        icon: html,
    },
    {
        name: "CSS 3",
        icon: css,
    },
    {
        name: "JavaScript",
        icon: javascript,
    },
    {
        name: "php",
        icon: php,
    },
    {
        name: "React JS",
        icon: reactjs,
    },
    {
        name: "Redux Toolkit",
        icon: redux,
    },
    {
        name: "Tailwind CSS",
        icon: tailwind,
    },
    {
        name: "Node JS",
        icon: nodejs,
    },
    {
        name: "MongoDB",
        icon: mongodb,
    },
    {
        name: "laravel",
        icon: laravel,
    },
    {
        name: "git",
        icon: git,
    },
    {
        name: "figma",
        icon: figma,
    },
    {
        name: "ai",
        icon: ai,
    },
    {
        name: "C#",
        icon: csharp,
    },
    {
        name: "ASP.NET Core",
        icon: dotnetcore,
    },
    {
        name: "SQL Server",
        icon: mssql,
    },
    {
        name: "Vue JS",
        icon: vuejs,
    },
    {
        name: "Next JS",
        icon: nextjs,
    },
    {
        name: "Bootstrap",
        icon: bootstrap,
    },
    {
        name: "WordPress",
        icon: wordpress,
    },
];

// Education timeline (fed into the same vertical-timeline component as experience)
const education = [{
        title: "MPhil - Computer Science",
        company_name: "COMSATS University Islamabad, Lahore (CUI)",
        icon: creator,
        iconBg: "#6b4de6",
        date: "In Progress",
        points: [
            "Pursuing an MPhil in Computer Science, deepening expertise in software architecture and applied computing.",
        ],
    },
    {
        title: "BS - Computer Science",
        company_name: "National College of Business Administration & Economics (NCBA&E)",
        icon: creator,
        iconBg: "#6b4de6",
        date: "2024",
        points: [
            "Completed a Bachelor's degree in Computer Science, building a strong foundation across software engineering, databases, and web development.",
        ],
    },
];

const experiences = [{
        title: "Web Developer",
        company_name: "National Engineering Services Pakistan (NESPAK)",
        icon: nesspaklogo,
        iconBg: "#ffffff",
        date: "February 2026 - Present",
        points: [
            "Developed and maintained ASP.NET Core MVC modules for real-time monitoring systems (IRSA, LESCO, FESCO, IESCO), using Entity Framework for secure, scalable data access.",
            "Designed responsive, GIS-integrated dashboards for water and power distribution monitoring, reporting, and infrastructure planning.",
            "Rebuilt existing interfaces with intuitive layouts and reusable UI components, improving usability and consistency across projects.",
            "Collaborated closely with senior leads on architectural decisions, performance optimization, and security standards.",
            "Managed Git repositories and version control across multiple concurrent enterprise projects.",
        ],
    },
    {
        title: "Digital Konnecter System",
        company_name: "DKS",
        icon: dks,
        iconBg: "#383E56",
        date: "August 2024 - February 2026",
        points: [
            "Developed and maintained web applications using Laravel and PHP, ensuring high performance and scalability.",
            "Implemented advanced functionalities with Backpack Laravel, enhancing administrative interfaces and user experiences.",
            "Designed and customized WordPress themes and plugins for dynamic client projects.",
            "Utilized best practices in coding, debugging, and optimizing web solutions.",
            "Collaborated with cross-functional teams to deliver projects within tight deadlines.",
            "Gained hands-on experience in modern web development tools and techniques.",
        ],
    },
    {
        title: "Off-Desk Company",
        company_name: "Seller",
        icon: unity,
        iconBg: "#E6DEDD",
        date: "2 June 2024 – 31 August 2024",
        points: [
            "Increased sales by 15% within the first month.",
            "Achieved a 20% conversion rate from daily outbound calls.",
            "Maintained accurate customer records using CRM software.",
            "Boosted customer engagement by 10% through targeted strategies.",
            "Provided prompt and exceptional customer service.",
        ],
    },
    {
        title: "SEB'S Institute",
        company_name: "SM",
        icon: seb,
        iconBg: "#383E56",
        date: "4 March 2022 - 30 Sep 2022",
        points: [
            " Social Media Management Developed and executed social media campaigns created engaging content and monitored online interactions.",
            "Graphic Design Designed visually appealing graphics for social media posts marketing materials and other promotional assets.",
            "Video Editing Edited and produced short-form videos for social media platforms including scriptwriting shooting and post-production.",
        ],
    },
];

const testimonials = [{
        testimonial: "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
        name: "Sara Lee",
        designation: "CFO",
        company: "Acme Co",
        image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
        testimonial: "I've never met a web developer who truly cares about their clients' success like Rick does.",
        name: "Chris Brown",
        designation: "COO",
        company: "DEF Corp",
        image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
        testimonial: "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
        name: "Lisa Wang",
        designation: "CTO",
        company: "456 Enterprises",
        image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
];

const projects = [{
        name: "IRSA Public Website",
        description: "A water resource monitoring system for the Indus River System Authority tracking inflows, outflows, and reservoir levels in real time, with GIS-integrated dashboards for federal and provincial users.",
        tags: [
            { name: "asp.net-core", color: "blue-text-gradient" },
            { name: "entity-framework", color: "green-text-gradient" },
            { name: "sql-server", color: "pink-text-gradient" },
        ],
        image: irsawebsite,
        source_code_link: "https://github.com/",
    },
    {
        name: "LESCO - NESPAK",
        description: "An automation and monitoring system for Lahore Electric Supply Company, providing real-time grid/feeder monitoring, load forecasting, and GIS-based fault visualization.",
        tags: [
            { name: "asp.net", color: "blue-text-gradient" },
            { name: "entity-framework", color: "green-text-gradient" },
            { name: "sql-server", color: "pink-text-gradient" },
        ],
        image: lesco,
        source_code_link: "https://github.com/",
    },
    {
        name: "FESCO - GIS & Enterprise Management System",
        description: "A GIS-based enterprise system for Faisalabad Electric Supply Company to digitize and manage the full HT/LT distribution network, with mobile field data collection and technical loss analysis.",
        tags: [
            { name: "asp.net-core-mvc", color: "blue-text-gradient" },
            { name: "entity-framework-core", color: "green-text-gradient" },
            { name: "gis", color: "pink-text-gradient" },
        ],
        image: fesco,
        source_code_link: "https://github.com/",
    },
    {
        name: "IESCO - GIS & Enterprise Management System",
        description: "A GIS-enabled enterprise platform for Islamabad Electric Supply Company managing HT/LT network assets, integrated with AMI and SynerGEE for network planning and loss analysis.",
        tags: [
            { name: "asp.net-core-mvc", color: "blue-text-gradient" },
            { name: "entity-framework-core", color: "green-text-gradient" },
            { name: "gis", color: "pink-text-gradient" },
        ],
        image: iesco,
        source_code_link: "https://github.com/",
    },
    {
        name: "Crown Warehouse Management System",
        description: "A Laravel Livewire-based WMS for real-time inventory tracking, barcode-based item management, storage billing automation, and delivery scheduling.",
        tags: [
            { name: "laravel", color: "blue-text-gradient" },
            { name: "livewire", color: "green-text-gradient" },
            { name: "mysql", color: "pink-text-gradient" },
        ],
        image: crownwms,
        source_code_link: "https://github.com/",
    },
    {
        name: "Mindzbay - Custom WordPress Website",
        description: "A scalable e-commerce and content platform with WooCommerce integration, custom themes/plugins, SEO optimization, and a fully responsive storefront.",
        tags: [
            { name: "wordpress", color: "blue-text-gradient" },
            { name: "woocommerce", color: "green-text-gradient" },
            { name: "mysql", color: "pink-text-gradient" },
        ],
        image: null,
        source_code_link: "https://github.com/",
    },
    {
        name: "Digital Konnecter System (DKS) - Website",
        description: "A custom WordPress company website for DKS, featuring dynamic content management, service showcase pages, and client inquiry forms, optimized for SEO and performance.",
        tags: [
            { name: "wordpress", color: "blue-text-gradient" },
            { name: "css", color: "green-text-gradient" },
            { name: "php", color: "pink-text-gradient" },
        ],
        image: dks,
        source_code_link: "https://github.com/",
    },
    {
        name: "Learning Management System (LMS)",
        description: "A Laravel-based LMS supporting course management, enrollments, assignments, and quizzes, with role-based dashboards for admins, instructors, and students.",
        tags: [
            { name: "laravel", color: "blue-text-gradient" },
            { name: "blade", color: "green-text-gradient" },
            { name: "mysql", color: "pink-text-gradient" },
        ],
        image: null,
        source_code_link: "https://github.com/",
    },
    {
        name: "Marketing & Advertising Agency Website",
        description: "Developed a PHP Laravel-based Marketing & Advertising Agency Web App with secure user authentication and ad management.",
        tags: [{
                name: "php",
                color: "blue-text-gradient",
            },
            {
                name: "laravel",
                color: "green-text-gradient",
            },
            {
                name: "tailwind",
                color: "pink-text-gradient",
            },
        ],
        image: carrent,
        source_code_link: "https://github.com/",
    },
    {
        name: "Mekset Cosmetics App",
        description: "Developed Mekset Online Cosmetics, a PHP Laravel-based e-commerce platform with an optimized UX/UI. Built a secure backend for catalog management, order processing, and user authentication.",
        tags: [{
                name: "react-native",
                color: "blue-text-gradient",
            },
            {
                name: "laravel",
                color: "green-text-gradient",
            },
            {
                name: "mysql",
                color: "pink-text-gradient",
            },
        ],
        image: jobit,
        source_code_link: "https://github.com/",
    },
    {
        name: "Makki Al Madni Dialysis Center (MMDC)",
        description: "A WordPress-based healthcare website for Al-Makki Al-Madni Dialysis Center, showcasing dialysis services, specialist doctors, and appointment requests. User-friendly design with seamless navigation and secure backend management.",
        tags: [{
                name: "wordpress",
                color: "blue-text-gradient",
            },
            {
                name: "css",
                color: "green-text-gradient",
            },
            {
                name: "php",
                color: "pink-text-gradient",
            },
        ],
        image: tripguide,
        source_code_link: "https://github.com/",
    },
];

export { services, technologies, experiences, education, testimonials, projects };