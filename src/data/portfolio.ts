// ─── Edit this file to update your portfolio content ────────────────────────

export const personal = {
  name: 'Muhammad Bin Asim',
  title: 'Full-Stack Engineer & AI Systems Architect',
  tagline: 'I build intelligent, production-grade systems — from AI-powered data platforms to mobile-first products that scale.',
  location: 'Islamabad, Pakistan',
  email: 'muhammadasimkk@gmail.com',
  phone: '+92 315 5917512',
  github: 'https://github.com/muhammadasimkk',       // [UPDATE] verify username
  linkedin: 'https://linkedin.com/in/muhammadasimkk', // [UPDATE] verify handle
  twitter: 'https://twitter.com/muhammadasimkk',      // [UPDATE] or remove if unused
  cvUrl: '/Muhammad_Bin_Asim_CV.pdf',                 // drop your CV PDF in public/
  yearsOfExperience: '3+',
  projectsShipped: '10+',
  techStack: ['TypeScript', 'React', 'Node.js', 'AI/LLM', 'MongoDB', 'PostgreSQL'],
}

export const about = {
  bio: [
    "I'm a full-stack engineer with 3+ years of hands-on experience building responsive, production-grade web and mobile interfaces. My career spans AI-integrated platforms, HR tech, fintech, and cross-platform mobile — always focused on translating complex requirements into clean, scalable code.",
    "At Intelligent Learning Machines I built React interfaces for real-time AI workflows, contributed to an Electron desktop app (IbexVision Cortex), and worked deep inside LLM evaluation pipelines — prompt engineering, response validation, and model behaviour analysis. At Hyve HR I delivered a ~30% frontend performance improvement through lazy loading, memoization, and rendering optimisation.",
    "Outside my day roles I ship full products: ClawtTrade (a 12-service AI-assisted trading platform with Temporal workflows and a non-bypassable risk engine), PromptPilot, LaunchFlow, and Gymmies. I like systems where AI handles bounded reasoning while deterministic services own the critical paths.",
  ],
  stats: [
    { label: 'Years Experience', value: '3+' },
    { label: 'Projects Shipped', value: '10+' },
    { label: 'Performance boost @ Hyve HR', value: '30%' },
    { label: 'Workflow efficiency @ ILM', value: '+20%' },
  ],
}

export type Project = {
  id: string
  name: string
  tagline: string
  description: string
  category: string
  featured: boolean
  status: 'production' | 'development' | 'shipped'
  tech: string[]
  highlights: string[]
  github?: string
  live?: string
  gradient: string
  accentColor: string
}

export const projects: Project[] = [
  {
    id: 'clawtrade-hb',
    name: 'ClawtTrade',
    tagline: 'AI-Assisted Crypto Trading Platform',
    description:
      'Production-oriented monorepo for an AI-assisted crypto trading platform. Hummingbot provides exchange connectivity while deterministic signal generation, regime detection, risk controls, orchestration, and reconciliation remain in-house. LLMs rank opportunities and explain incidents — they never place orders and never bypass the risk engine.',
    category: 'Fintech / AI',
    featured: true,
    status: 'development',
    tech: ['TypeScript', 'Node.js', 'Temporal', 'PostgreSQL', 'Redis', 'Hummingbot', 'Docker', 'Prisma', 'Turborepo'],
    highlights: [
      '12-service microservices monorepo with Turborepo and pnpm',
      'Deterministic risk engine that cannot be bypassed by AI',
      'Temporal-powered durable workflows for execution orchestration',
      'Full audit trail for every decision and order lifecycle',
      'TWAP and Grid Strike controller strategies via Hummingbot',
      'Real-time regime detection — trending, ranging, volatile',
    ],
    gradient: 'from-cyan-500/20 via-blue-500/10 to-transparent',
    accentColor: '#22d3ee',
  },
  {
    id: 'ibexvision',
    name: 'IbexVision',
    tagline: 'AI-Driven Data Processing & Evaluation Platform',
    description:
      'AI-driven data processing and evaluation platform at Intelligent Learning Machines. Built React interfaces for real-time AI workflow interaction and contributed to IbexVision Cortex — an Electron desktop app for executing AI pipelines. Worked on LLM evaluation systems including prompt engineering, response validation, and model behaviour analysis.',
    category: 'AI / Enterprise',
    featured: true,
    status: 'production',
    tech: ['React', 'TypeScript', 'Electron.js', 'LLM Integration', 'Prompt Engineering', 'Python', 'REST APIs'],
    highlights: [
      'React interfaces enabling users to interact with real-time AI workflows',
      'IbexVision Cortex — Electron desktop app for AI pipeline execution',
      'LLM evaluation: prompt engineering, response validation, model behaviour analysis',
      'Annotation and preprocessing pipelines improving workflow efficiency by ~20%',
      'Responsive, cross-browser-compatible layouts across all product surfaces',
    ],
    gradient: 'from-violet-500/20 via-purple-500/10 to-transparent',
    accentColor: '#8b5cf6',
  },
  {
    id: 'cardiovision',
    name: 'CardioVision',
    tagline: 'AI-Based CAD Diagnosis Interface',
    description:
      'React-based interface to visualise medical AI outputs for coronary artery disease (CAD) diagnosis. The underlying model was trained on 1,000+ medical reports. Integrated ML predictions into real-time user workflows, making AI insights immediately actionable for clinical decision-making.',
    category: 'AI / Healthcare',
    featured: true,
    status: 'shipped',
    tech: ['React', 'TypeScript', 'ML Integration', 'Data Visualisation', 'REST APIs'],
    highlights: [
      'Visualisation layer for ML model trained on 1,000+ medical reports',
      'Real-time integration of ML predictions into clinical user workflows',
      'Responsible AI considerations for high-stakes healthcare context',
      'Clean, accessible interface designed for clinical decision support',
    ],
    gradient: 'from-red-500/20 via-pink-500/10 to-transparent',
    accentColor: '#f43f5e',
  },
  {
    id: 'hyve-hr',
    name: 'Hyve HR',
    tagline: 'Role-Based HR Analytics & Workflow Platform',
    description:
      'Full-stack HR tech platform with role-specific dashboards, operational workflows, and real-time data-driven modules. Built modular React component architecture directly from design specs, integrated Node.js + MongoDB APIs, and delivered a ~30% frontend performance improvement.',
    category: 'SaaS / HR Tech',
    featured: true,
    status: 'production',
    tech: ['React', 'Node.js', 'MongoDB', 'REST APIs', 'Tailwind CSS', 'TypeScript'],
    highlights: [
      '~30% frontend performance improvement via lazy loading and memoization',
      'Modular, reusable component architecture converted from Figma specs',
      'REST API integration (Node.js + MongoDB) for real-time workflows',
      'Full cross-browser compatibility and mobile responsiveness',
      'Role-based dashboards giving each team member a relevant view',
    ],
    gradient: 'from-blue-500/20 via-cyan-500/10 to-transparent',
    accentColor: '#3b82f6',
  },
  {
    id: 'promptpilot',
    name: 'PromptPilot',
    tagline: 'AI Prompt Workspace for Teams',
    description:
      'A focused AI workspace for structured prompt runs, reusable templates, and export-ready outputs. Targets product, marketing, and growth teams who iterate on AI prompts and need repeatable workflows with full history.',
    category: 'AI / SaaS',
    featured: true,
    status: 'shipped',
    tech: ['React 19', 'TypeScript', 'Vite', 'Express', 'Prisma', 'PostgreSQL', 'OpenAI API', 'Tailwind CSS'],
    highlights: [
      'Template variables like {{product}} and {{audience}} for repeatable reuse',
      'Streaming responses with real-time output rendering',
      'Tags, favorites, pins, and archive states for run management',
      'Markdown + JSON export for all prompt runs',
      'License-based Pro tier with usage metering',
    ],
    gradient: 'from-purple-500/20 via-pink-500/10 to-transparent',
    accentColor: '#a855f7',
  },
  {
    id: 'gymmies',
    name: 'Gymmies',
    tagline: 'AI Fitness Mobile App',
    description:
      'Cross-platform fitness app with gamified mechanics, workout planning, nutrition tracking, and an LLM-based AI coach delivering personalised recommendations. Built for iOS, Android, and Web using Expo and integrated with Supabase, MapBox, and RevenueCat.',
    category: 'Mobile / Health',
    featured: false,
    status: 'development',
    tech: ['React Native', 'Expo', 'TypeScript', 'Supabase', 'OpenAI API', 'MapBox', 'RevenueCat'],
    highlights: [
      'Cross-platform iOS, Android, and Web from a single codebase',
      'LLM-based AI coach for personalised fitness recommendations',
      'Gamified progression system with workout planning and nutrition tracking',
      'Real-time gym locator powered by MapBox',
      'RevenueCat in-app subscription management',
    ],
    gradient: 'from-green-500/20 via-emerald-500/10 to-transparent',
    accentColor: '#10b981',
  },
]

export type Experience = {
  role: string
  company: string
  period: string
  location: string
  description: string
  achievements: string[]
  tech: string[]
  type: 'full-time' | 'contract' | 'freelance' | 'internship'
}

export const experience: Experience[] = [
  {
    role: 'Junior Software Engineer',
    company: 'Intelligent Learning Machines',
    period: 'Sep 2024 – Jul 2025',
    location: 'Islamabad, Pakistan',
    description:
      'Built React-based frontend interfaces for IbexVision — an AI-driven data processing and evaluation platform. Worked across the full frontend stack including an Electron desktop app, LLM evaluation systems, and data annotation pipelines.',
    achievements: [
      'Designed and built React interfaces enabling users to interact with real-time AI workflows and system outputs',
      'Contributed to IbexVision Cortex (Electron desktop app), owning UI components and feature delivery end-to-end',
      'Worked on LLM evaluation systems — prompt engineering, response validation, and model behaviour analysis',
      'Designed annotation and preprocessing data pipelines improving workflow efficiency by ~20%',
      'Implemented responsive, cross-browser-compatible layouts aligned with product designs',
    ],
    tech: ['React', 'TypeScript', 'Electron.js', 'LLM Integration', 'Prompt Engineering', 'Python'],
    type: 'full-time',
  },
  {
    role: 'Full Stack Developer',
    company: 'Hyve HR',
    period: 'Jul 2024 – Mar 2025',
    location: 'Islamabad, Pakistan',
    description:
      'Built and maintained scalable React applications for an HR tech platform. Focused on modular component architecture, performance optimisation, and real-time data-driven workflows.',
    achievements: [
      'Improved frontend performance by ~30% through lazy loading, memoization, and refined rendering strategies',
      'Built scalable React applications directly from Figma design specs — modular, reusable component architecture',
      'Integrated REST APIs (Node.js + MongoDB) enabling real-time workflows across multiple product modules',
      'Ensured full cross-browser compatibility and responsiveness across all delivered features',
    ],
    tech: ['React', 'Node.js', 'MongoDB', 'REST APIs', 'Tailwind CSS', 'TypeScript'],
    type: 'full-time',
  },
  {
    role: 'Co-Founder',
    company: 'eBay Dropshipping Business',
    period: 'Jul 2025 – Mar 2026',
    location: 'Remote',
    description:
      'Co-founded and scaled an e-commerce operation. Combined SEO strategy, workflow automation, and end-to-end operational execution.',
    achievements: [
      'Managed 50+ active listings; improved conversion rates by ~35% through SEO-optimised copy and structured strategies',
      'Automated order processing workflows, reducing manual workload by ~40%',
      'Demonstrated full entrepreneurial ownership from setup through scaling',
    ],
    tech: ['eBay API', 'SEO', 'Automation', 'Operations'],
    type: 'freelance',
  },
  {
    role: 'MERN Stack Developer Intern',
    company: 'Nayatel',
    period: 'Aug 2023 – Sep 2023',
    location: 'Islamabad, Pakistan',
    description:
      'Built full-stack applications using the MERN stack, integrating backend APIs with frontend systems to improve usability and performance.',
    achievements: [
      'Built full-stack MERN applications with API integration and frontend delivery',
      'Gained production experience with REST API design, version control workflows, and deployment pipelines',
    ],
    tech: ['MongoDB', 'Express.js', 'React', 'Node.js', 'REST APIs'],
    type: 'internship',
  },
]

export const education = {
  degree: 'Bachelor of Software Engineering',
  institution: 'NUST (MCS)',
  location: 'Islamabad, Pakistan',
  period: '2020 – 2024',
}

export type SkillCategory = {
  name: string
  icon: string
  color: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    name: 'Frontend',
    icon: 'Monitor',
    color: '#22d3ee',
    skills: ['React.js', 'React Native', 'TypeScript', 'JavaScript (ES6+)', 'HTML5 / CSS3', 'Tailwind CSS', 'CSS Modules', 'Vite', 'Framer Motion', 'Electron.js'],
  },
  {
    name: 'Backend & Databases',
    icon: 'Server',
    color: '#3b82f6',
    skills: ['Node.js', 'Express.js', 'MongoDB', 'PostgreSQL', 'REST APIs', 'Prisma ORM', 'Redis'],
  },
  {
    name: 'AI & LLM Integration',
    icon: 'Brain',
    color: '#a855f7',
    skills: ['OpenAI API', 'LLM Integration', 'Prompt Engineering', 'Response Validation', 'Model Evaluation', 'Computer Vision', 'Streaming AI'],
  },
  {
    name: 'Infrastructure & Tooling',
    icon: 'Cloud',
    color: '#10b981',
    skills: ['Git / GitHub', 'Docker', 'CI/CD', 'Temporal Workflows', 'pnpm Monorepos', 'Turborepo', 'Vercel', 'Agile / Scrum'],
  },
  {
    name: 'Mobile & Cross-Platform',
    icon: 'Smartphone',
    color: '#f59e0b',
    skills: ['Expo', 'React Native', 'Supabase', 'RevenueCat', 'MapBox', 'Cross-Browser Compatibility', 'Responsive Design'],
  },
]

export const specializations = {
  ai: {
    title: 'AI Systems Engineering',
    subtitle: 'Intelligent by design, not by accident',
    description:
      'I build AI-integrated systems where LLMs handle bounded reasoning — summaries, ranking, evaluations — while deterministic services own risk, execution, and data integrity. Experience spans real-time AI workflow interfaces, LLM evaluation pipelines, computer vision for medical diagnosis, and multi-service AI orchestration.',
    capabilities: [
      'LLM integration with bounded reasoning and hard guardrails',
      'Prompt engineering, response validation, and model behaviour analysis',
      'Streaming AI responses and real-time output rendering',
      'Computer vision pipelines integrated into clinical and operational UIs',
      'AI-assisted decision support without relinquishing control',
      'OpenAI API, Electron AI pipelines, and multi-model orchestration',
    ],
  },
  fullstack: {
    title: 'Full-Stack Architecture',
    subtitle: 'From database to device, end to end',
    description:
      'I design systems from the ground up — data models, API contracts, frontend state, mobile UX — and ship them to production. Three years of production delivery across HR tech, AI platforms, fintech, and mobile mean I know the edge cases before they bite.',
    capabilities: [
      'React and React Native from a single TypeScript monorepo',
      'Figma-to-production component delivery with ~30% performance wins',
      'Node.js + MongoDB and Node.js + PostgreSQL API architectures',
      'Cross-browser, responsive, and accessible UI as a baseline standard',
      'Production deployment on Vercel, Fly.io, and Render',
      'Auth, rate limiting, CORS, and security headers built-in',
    ],
  },
}

export const contact = {
  heading: "Let's build something great",
  subheading:
    "I'm open to full-stack, AI engineering, and frontend engineering roles. Available immediately. If you're working on something ambitious, I'd like to hear about it.",
  email: 'muhammadasimkk@gmail.com',
  availability: 'Available immediately',
}
