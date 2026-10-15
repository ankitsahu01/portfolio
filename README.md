# Ankit Sahu — Portfolio & AI Copilot

A high-performance personal portfolio, engineering showcase, and interactive AI Copilot built with **Next.js (App Router)**, **TypeScript**, **Tailwind CSS**, and **Groq Cloud API**.

---

## 🚀 Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Server & Client Components)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) with centralized theme engine (`src/config/theme.js`)
- **AI & LLM Integration:** [groq-sdk](https://www.npmjs.com/package/groq-sdk) (Groq Cloud high-speed inference) for contextual AI portfolio assistant
- **Icons:** [React Icons](https://react-icons.github.io/react-icons/)
- **Document Viewing:** [React PDF](https://github.com/wojtekmaj/react-pdf)
- **Form Dispatch:** [EmailJS](https://www.emailjs.com/)
- **Analytics & Insights:** [Vercel Speed Insights](https://vercel.com/docs/speed-insights)

---

## ✨ Key Features

- **Interactive AI Copilot:** Context-aware chatbot powered by Groq ultra-low-latency LLM inference, equipped with real-time bio, experience timeline, and project data.
- **Centralized Theming Engine:** Single-source design token system (`theme.js`) controlling primary accents, surface layers, and WCAG-compliant high-contrast typography.
- **Interactive Skills Matrix:** Hover & tap-capable category filter that dynamically highlights matching tech stacks without layout shift.
- **Work History & Milestones:** Timeline with alternating ambient light gradients and verified Credly Google Cloud credentials.
- **Featured Projects:** Production deliverables showcase featuring NDA status badges, tech tags, and live demos.
- **Dedicated Executive Contact Page (`/contact`):** Unified executive challenge card with real-time availability badge, direct wire channels, and EmailJS form.
- **In-Browser Resume Preview:** PDF resume viewer with pagination, zoom, and instant download.
- **Vector Branding & PWA:** Scalable SVG favicons, Apple touch icons, and web manifest.

---

## 🛠️ Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18.17+ or v20+)
- `npm` or `yarn`

### 1. Clone & Install

```bash
git clone https://github.com/ankitsahu01/portfolio.git
cd portfolio
npm install
```

### 2. Environment Variables

Create a `.env.local` file in the root directory:

```env
# AI Assistant (Groq Cloud)
GROQ_API_KEY=your_groq_api_key
GROQ_MODEL=openai/gpt-oss-120b

# Contact Form (EmailJS)
NEXT_PUBLIC_EMAILJS_SERVICE_ID=your_service_id
NEXT_PUBLIC_EMAILJS_TEMPLATE_ID=your_template_id
NEXT_PUBLIC_EMAILJS_USER_ID=your_user_id
```

### 3. Run Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📜 Available Scripts

| Command | Description |
| :--- | :--- |
| `npm run dev` | Starts local Next.js dev server at `localhost:3000` |
| `npm run build` | Builds optimized production bundle |
| `npm run start` | Starts production server from built assets |
| `npm run lint` | Runs Next.js ESLint checks |

---

## 🌐 Connect with Me

- **GitHub:** [@ankitsahu01](https://github.com/ankitsahu01)
- **LinkedIn:** [Ankit Sahu](https://www.linkedin.com/in/ankit-sahu-ind/)
- **Email:** [sahu6856@gmail.com](mailto:sahu6856@gmail.com)
