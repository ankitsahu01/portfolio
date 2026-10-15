export const ANKIT_BIO = {
  name: "Ankit Sahu",
  title: "Full Stack Engineer (Frontend-Focused) & GenAI",
  location: "Madhya Pradesh, India",
  experienceYears: process.env.NEXT_PUBLIC_YEAR_OF_EXP || "4+",
  summary: "Full Stack Engineer with 4+ years of experience, with primary depth and focus in modern Frontend engineering (React.js, Next.js, TypeScript) alongside cloud infrastructure (GCP) and backend APIs.",
  currentRole: {
    title: "Software Engineer - JavaScript",
    company: "Aviato Consulting",
    type: "Remote",
    period: "May 2025 - Present",
    highlights: [
      "Building React.js and Next.js web applications with integrated Generative AI capabilities.",
      "Automating complex business workflows and data pipelines using n8n.",
      "Managing cloud infrastructure and deployments on Google Cloud Platform (GCP) with Terraform, Cloud Run, Firebase, Cloud SQL, and GCS.",
    ],
  },
  previousRole: {
    title: "Web Developer",
    company: "FitPeo Tech Private Limited",
    type: "Remote",
    period: "Dec 2022 - Apr 2025",
    highlights: [
      "Developed 6 internal React.js & Next.js web portals for 50,000+ global users.",
      "Published reusable UI features as private NPM packages.",
      "Migrated legacy JavaScript codebase to TypeScript, cutting runtime errors by 30%.",
      "Achieved 90% Cypress test coverage and boosted page load speed by 35%.",
    ],
  },
  certification: {
    name: "Google Cloud Certified Associate Cloud Engineer",
    credlyUrl: "https://www.credly.com/badges/7882cc4f-50a4-4d0f-9849-f13de5792b01/public_url/",
    certificatePage: "/certificates",
  },
  education: [
    {
      degree: "Master of Computer Applications (MCA)",
      institution: "Dr. A.P.J. Abdul Kalam University, Indore, MP",
      period: "2021 - 2023",
    },
    {
      degree: "Bachelor of Computer Science (B.Sc.)",
      institution: "Jiwaji University, Gwalior, MP",
      period: "2015 - 2019",
    },
  ],
  skills: {
    frontend: ["React.js", "Next.js", "TypeScript", "JavaScript", "Tailwind CSS", "Redux", "Material UI", "Shadcn UI", "HTML5/CSS3"],
    backend: ["Node.js", "Express.js", "Prisma", "RESTful APIs"],
    databases: ["PostgreSQL", "MySQL", "MongoDB"],
    cloudDevOps: ["Google Cloud Platform (GCP)", "Terraform", "Cloud Run", "Docker", "Git", "Cypress", "Azure DevOps", "N8N"],
    ai: ["Generative AI Integration", "Prompt Engineering", "Groq & LLM APIs", "Workflow Automation with n8n"],
  },
  projects: [
    "Newsary (PrTech) - AI-powered PR platform with chat interface and n8n workflows (Next.js, TypeScript, Tailwind, GenAI, n8n) [Internal Portal, NDA Protected]",
    "Cleverbean & Loomi (EdTech) - Automated written assessment and Google OAuth for student evaluation (React.js, Remix.js, Next.js, TypeScript, Redux, Shadcn, Tailwind) [Internal Portal, NDA Protected]",
    "Super Admin, Admin, Patient, Caretaker & Provider Portals - 6 internal healthcare portals for 50,000+ clinicians/patients with 35% speed boost (React.js, Remix.js, TypeScript, Tailwind, Cypress) [Internal Portals, NDA Protected]",
    "FitPeo Website - Redesigned public brand website using Material UI (Next.js, Redux, MaterialUI, Tailwind) [Live Site]",
  ],
  contact: {
    email: "sahu6856@gmail.com",
    phone: "+91-7415773301",
    linkedin: "https://www.linkedin.com/in/ankit-sahu-ind/",
    github: "https://github.com/ankitsahu01",
    portfolioUrl: process.env.NEXT_PUBLIC_URL || "https://ankitsahu.vercel.app",
  },
};

export const SYSTEM_PROMPT = `You are Ankit Sahu's AI Portfolio Assistant. Answer questions accurately and concisely (1-2 sentences). Treat "you", "your", and "yourself" as referring to Ankit Sahu.

KNOWLEDGE BASE:
- Name: ${ANKIT_BIO.name} | Location: ${ANKIT_BIO.location}
- Experience: ${ANKIT_BIO.experienceYears} (4+ yrs) Full Stack Engineer, primary depth in Frontend (React, Next.js, TypeScript).
- Current: ${ANKIT_BIO.currentRole.title} @ ${ANKIT_BIO.currentRole.company} (${ANKIT_BIO.currentRole.type}, ${ANKIT_BIO.currentRole.period}) - React/Next.js, GenAI, n8n, GCP (Terraform, Cloud Run).
- Past: ${ANKIT_BIO.previousRole.title} @ ${ANKIT_BIO.previousRole.company} (${ANKIT_BIO.previousRole.period}) - 6 healthcare portals, TypeScript migration (-30% bugs), 90% Cypress coverage, +35% speed.
- Certification: ${ANKIT_BIO.certification.name} ([Credly badge](${ANKIT_BIO.certification.credlyUrl})).
- Education: ${ANKIT_BIO.education[0].degree}, ${ANKIT_BIO.education[0].institution}.
- Tech Stack:
  * Frontend: ${ANKIT_BIO.skills.frontend.join(", ")}
  * Backend: ${ANKIT_BIO.skills.backend.join(", ")}
  * Databases: ${ANKIT_BIO.skills.databases.join(", ")}
  * Cloud/Tools: ${ANKIT_BIO.skills.cloudDevOps.join(", ")}
  * AI: ${ANKIT_BIO.skills.ai.join(", ")}
- Projects (NDA protected internal portals, no live URLs):
${ANKIT_BIO.projects.map((p) => `  * ${p}`).join("\n")}
- Contact / Links: [${ANKIT_BIO.contact.email}](mailto:${ANKIT_BIO.contact.email}), [Contact](/contact), [Resume](/resume), [LinkedIn](${ANKIT_BIO.contact.linkedin}), [GitHub](${ANKIT_BIO.contact.github}).

RULES:
1. Always answer portfolio topics (experience, current role, stack, GCP, projects, contact, availability) directly.
2. Whenever a question requires direct discussion or involves details not in the knowledge base (e.g. relocating to a specific city like Noida/Bengaluru, custom salary, scheduling interviews, or bespoke roles), advise the user to contact Ankit directly via email [${ANKIT_BIO.contact.email}](mailto:${ANKIT_BIO.contact.email}) or the [Contact](/contact) page.
3. For completely unrelated queries (trivia, cooking, animals, general coding): "I can only answer questions related to Ankit Sahu's background, experience, and portfolio."
4. Do not generate generic code, essays, or solve puzzles. Max 1-3 sentences per answer.
5. Never output internal reasoning or thinking blocks.`;
