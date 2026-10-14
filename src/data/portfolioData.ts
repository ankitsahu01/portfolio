export interface ProjectItem {
  id: string;
  title: string;
  category: string;
  affiliation: string;
  description: string;
  bulletPoints?: string[];
  tags: string[];
  githubUrl?: string;
  liveUrl?: string;
  isNdaProtected?: boolean;
}

export interface ExperienceItem {
  id: string;
  role: string;
  company: string;
  companyUrl: string;
  period: string;
  type: string;
  isCurrent?: boolean;
  bulletPoints: string[];
  tags: string[];
}

export interface SkillItem {
  name: string;
  iconId: string;
  category: "frontend" | "cloud" | "ai" | "testing" | "backend";
}

export interface MetricItem {
  label: string;
  value: string;
  detail: string;
  description: string;
  iconName: string;
  highlightColor?: string;
}

export interface FaqItem {
  id: string;
  question: string;
  answer: string;
}

export const PORTFOLIO_DATA = {
  personal: {
    name: "Ankit Sahu",
    shortName: "ankit",
    role: "Full Stack Engineer (Frontend-Focused)",
    experienceYears: "4+",
    location: "Madhya Pradesh, India",
    email: "sahu6856@gmail.com",
    emailAlt: "sahu6856@gmail.com",
    phone: "+91-7415773301",
    heroSubheading: "Next.js, React, TS & GCP Cloud",
    heroTitlePrefix: "Frontend Focused",
    heroTitleGradient: "Full Stack Engineer",
    heroBio: "4+ years shipping production React/Next.js systems, autonomous n8n workflows, and hardened Google Cloud infrastructure.",
    currentCompany: "Aviato Consulting",
    currentCompanyUrl: "https://www.linkedin.com/company/aviato-consulting/",
    previousCompany: "FitPeo Tech",
    previousCompanyUrl: "https://www.linkedin.com/company/fitpeo",
    resumeUrl: "/resume.pdf",
    credlyBadgeUrl: "https://www.credly.com/badges/7882cc4f-50a4-4d0f-9849-f13de5792b01/public_url/",
    credlyId: "Credly #7882cc4f",
  },
  socials: {
    github: "https://github.com/ankitsahu01",
    linkedin: "https://www.linkedin.com/in/ankit-sahu-ind",
    emailMailto: "mailto:sahu6856@gmail.com",
  },
  coreTechStack: [
    { name: "Next.js 14", highlight: false },
    { name: "React.js", highlight: false },
    { name: "TypeScript", highlight: false },
    { name: "GCP Cloud Run", highlight: true },
    { name: "Terraform IaC", highlight: false },
    { name: "n8n Automation", highlight: false },
    { name: "LangChain", highlight: false },
    { name: "Node.js", highlight: false },
    { name: "Cypress", highlight: false },
    { name: "Tailwind CSS", highlight: false },
    { name: "Docker", highlight: false },
  ],
  skillsHeadline: {
    title: "My Skills",
    subtitle: "I build things for the people",
    quote: "Lean Design, Develop, Deploy",
    description: "My default go-to stack is Next.js 14 (TypeScript & Tailwind CSS) paired with Node.js microservices hosted on Google Cloud Run. I also engineer automated enterprise workflows leveraging n8n, LangChain, and Redis for background message dispatching.",
  },
  skillCategories: [
    { key: "frontend", label: "Frontend" },
    { key: "backend", label: "Backend" },
    { key: "cloud", label: "Cloud & GCP" },
    { key: "ai", label: "GenAI & n8n" },
    { key: "testing", label: "Testing & CI/CD" },
  ],
  skillsList: [
    { name: "TypeScript", iconId: "typescript", category: "frontend" },
    { name: "React.js", iconId: "react", category: "frontend" },
    { name: "Next.js 14", iconId: "nextjs", category: "frontend" },
    { name: "Google Cloud (ACE)", iconId: "gcp", category: "cloud" },
    { name: "Cloud Run & K8s", iconId: "kubernetes", category: "cloud" },
    { name: "Terraform IaC", iconId: "terraform", category: "cloud" },
    { name: "n8n Workflows", iconId: "n8n", category: "ai" },
    { name: "LangChain & GenAI", iconId: "langchain", category: "ai" },
    { name: "Tailwind CSS", iconId: "tailwind", category: "frontend" },
    { name: "Redux Toolkit", iconId: "redux", category: "frontend" },
    { name: "Cypress E2E", iconId: "cypress", category: "testing" },
    { name: "Docker & CI/CD", iconId: "docker", category: "cloud" },
    { name: "PostgreSQL", iconId: "postgresql", category: "backend" },
    { name: "MongoDB", iconId: "mongodb", category: "backend" },
    { name: "Redis Caching", iconId: "redis", category: "backend" },
    { name: "Node.js / Express", iconId: "nodejs", category: "backend" },
    { name: "Prisma ORM", iconId: "prisma", category: "backend" },
    { name: "REST & GraphQL", iconId: "graphql", category: "backend" },
  ] as SkillItem[],
  metrics: [
    {
      label: "Performance",
      value: "35% Faster",
      detail: "Chunk splitting",
      description: "Reduced average web page load latency via chunk splitting, browser pipeline audits, and selective tree-shaking.",
      iconName: "speed",
    },
    {
      label: "Scale & Reach",
      value: "50k+ Users",
      detail: "Healthcare users",
      description: "Scaled 6 enterprise healthcare internal web portals supporting 50,000+ active clinicians globally with zero downtime.",
      iconName: "public",
      highlightColor: "text-primary",
    },
    {
      label: "Reliability",
      value: "90% Coverage",
      detail: "Cypress automated",
      description: "Cypress end-to-end and regression test automation suite instituted to guarantee mission-critical healthcare workflows.",
      iconName: "verified_user",
      highlightColor: "text-emerald-400",
    },
    {
      label: "Code Quality",
      value: "-30% Bugs",
      detail: "TypeScript migration",
      description: "Eliminated runtime crash exceptions across large legacy applications through a team-wide migration to strict TypeScript.",
      iconName: "bug_report",
    },
  ] as MetricItem[],
  projects: [
    {
      id: "project-newsary",
      title: "Newsary (PrTech)",
      category: "PRTECH & GENAI",
      affiliation: "Aviato Consulting",
      description: "AI-powered PR platform featuring a modern conversational chat interface built with Next.js and server-side AI processing to orchestrate automated data pipelines using n8n.",
      bulletPoints: [
        "Built a PR platform featuring an AI-powered chat interface using Next.js.",
        "Implemented server-side AI processing to interpret user inputs and orchestrate automated workflows using n8n.",
      ],
      tags: ["Next.js", "TypeScript", "Tailwind CSS", "GenAI", "n8n"],
      isNdaProtected: true,
    },
    {
      id: "project-cleverbean-loomi",
      title: "Cleverbean & Loomi (EdTech)",
      category: "EDTECH & OAUTH",
      affiliation: "Aviato Consulting",
      description: "Automated student assessment evaluation platform featuring real-time progress tracking rubrics and secure Google OAuth verification for user onboarding and registration.",
      bulletPoints: [
        "Developed an automated written assessment feature to evaluate and track student progress effectively.",
        "Implemented Google OAuth verification for registration.",
      ],
      tags: ["React.js", "Remix.js", "Next.js", "TypeScript", "Redux", "Shadcn UI", "Tailwind CSS"],
      isNdaProtected: true,
    },
    {
      id: "project-healthcare-portals",
      title: "Super Admin, Admin, Patient, Caretaker & Provider Portals",
      category: "HEALTHCARE ENTERPRISE",
      affiliation: "FitPeo Tech",
      description: "Suite of 6 internal healthcare portals serving 50,000+ active medical clinicians and patients. Re-architected code, completed full product requirements, integrated secure APIs, and cut page load time by 35%.",
      bulletPoints: [
        "Tech: React.js, Remix.js, TypeScript, Tailwind CSS, Cypress.",
        "Completely redesigned and refactored code, completed business requirements, and integrated APIs in all portals.",
        "Optimized application performance, reducing average page load time by 35%.",
      ],
      tags: ["React.js", "Remix.js", "TypeScript", "Tailwind CSS", "Cypress E2E"],
      isNdaProtected: true,
    },
    {
      id: "project-fitpeo-website",
      title: "FitPeo Website",
      category: "BRAND WEB PLATFORM",
      affiliation: "FitPeo Tech",
      description: "Public brand website successfully redesigned and redeveloped using Material UI and Next.js, delivering a visually appealing and modern online presence that effectively showcases FitPeo's offerings.",
      bulletPoints: [
        "Successfully redesigned and redeveloped the brand website using MUI.",
        "Delivering a visually appealing and modern online presence that effectively showcases FitPeo's offerings.",
      ],
      tags: ["Next.js", "Redux", "Material-UI", "Tailwind CSS"],
      liveUrl: "https://fitpeo.com",
      isNdaProtected: false,
    },
  ] as ProjectItem[],
  experiences: [
    {
      id: "aviato-consulting",
      role: "Software Engineer - JavaScript",
      company: "Aviato Consulting",
      companyUrl: "https://www.linkedin.com/company/aviato-consulting/",
      period: "May 2025 — Present",
      type: "Remote",
      isCurrent: true,
      bulletPoints: [
        "Architecting responsive web applications in Next.js 14 & React.js, weaving native GenAI interfaces and zero-maintenance automated pipelines using n8n.",
        "Orchestrating cloud infrastructure on GCP using Terraform (IaC), autoscaling workloads on Cloud Run, and persisting state across Cloud SQL, Firebase, and GCS.",
        "Automating complex business workflows and data pipelines using n8n and webhook-driven orchestration.",
      ],
      tags: ["Next.js 14", "React.js", "GenAI", "n8n", "Terraform", "GCP Cloud Run"],
    },
    {
      id: "fitpeo-tech",
      role: "Web Developer",
      company: "FitPeo Tech Private Limited",
      companyUrl: "https://www.linkedin.com/company/fitpeo",
      period: "Dec 2022 — Apr 2025",
      type: "Enterprise Healthcare · Remote",
      isCurrent: false,
      bulletPoints: [
        "Engineered 6 internal web portals supporting 50,000+ active healthcare users globally; extracted standard dashboard primitives into private NPM packages.",
        "Spearheaded migration to strict TypeScript, driving runtime bugs down by 30%; built automated CI/CD checks in Cypress boasting 90% regression coverage.",
        "Audited browser rendering pipelines and bundle tree-shaking, slashing page load latency by 35%.",
      ],
      tags: ["TypeScript", "React.js", "Redux Toolkit", "Cypress", "Webpack"],
    },
  ] as ExperienceItem[],
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Dr. A.P.J. Abdul Kalam University",
      location: "Indore, MP, India",
      period: "2021 — 2023",
    },
    {
      degree: "Bachelor of Computer Science (B.Sc CS)",
      institution: "Jiwaji University",
      location: "Gwalior, MP, India",
      period: "2015 — 2019",
    },
  ],
  certifications: [
    {
      title: "Google Cloud Certified Associate Cloud Engineer",
      issuer: "Google Cloud",
      validity: "Jul 2026 — Jul 2029",
      credentialUrl: "https://www.credly.com/badges/7882cc4f-50a4-4d0f-9849-f13de5792b01/public_url/",
      credentialId: "#7882cc4f",
      description: "Demonstrates verified ability to deploy enterprise applications, monitor operations, and manage secure cloud infrastructure on Google Cloud Platform.",
    },
  ],
  faq: [
    {
      id: "faq-1",
      question: "Who is Ankit Sahu?",
      answer: "I am a Full Stack Engineer with 4+ years of professional experience building high-performance web applications and resilient cloud platforms. My core focus lies at the intersection of modern frontend architecture (React.js, Next.js 14 App Router, TypeScript), declarative Google Cloud infrastructure (GCP Cloud Run, Terraform), and automated GenAI / n8n pipelines.",
    },
    {
      id: "faq-2",
      question: "What is Ankit's core tech stack?",
      answer: "My primary stack consists of Next.js 14, React.js, TypeScript, Tailwind CSS, Redux Toolkit on the client; Node.js, Express, Cloud Run, Cloud SQL, Firebase on the backend; Terraform, Docker, GCP, GCS for DevOps and infrastructure; and n8n, LangChain, and LLM APIs for autonomous workflow orchestration.",
    },
    {
      id: "faq-3",
      question: "What are Ankit's key engineering milestones?",
      answer: "Key milestones include achieving the official Google Cloud Certified: Associate Cloud Engineer credential (Credly verified), scaling 6 internal web portals for 50,000+ active medical clinicians at FitPeo Tech, eliminating 30% of runtime errors via TypeScript refactoring, and optimizing page load speeds by 35%.",
    },
    {
      id: "faq-4",
      question: "Is Ankit available for hire?",
      answer: "Yes. I am currently open to Senior Full Stack, Senior Frontend, and Cloud Specialist roles (Remote or Hybrid). I can transition within a standard notice window. Reach out directly at sahu6856@gmail.com or via LinkedIn.",
    },
  ] as FaqItem[],
};
