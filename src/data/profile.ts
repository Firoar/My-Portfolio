// ============================================================================
// 👋 YOUR PROFILE
// ----------------------------------------------------------------------------
// This is the ONLY file you need to edit to update your portfolio.
// Change any value below and the whole site updates automatically.
// Leave an array empty (e.g. `skills: []`) and that section is hidden.
// ============================================================================

// Site-wide settings (used for the browser tab title, SEO, etc.)
export const site = {
  title: "Chiranjivi S",
  description:
    "Portfolio of Chiranjivi S, a software engineer building scalable backend systems, cloud infrastructure and full-stack products with Java, Go, TypeScript and Kubernetes.",
  url: "https://iamchiranjivi.in",
};

// Your personal info
export const profile = {
  name: "Chiranjivi S",
  role: "Software Engineer",
  tagline:
    "I enjoy building software and figuring out how things work under the hood.",
  bio: "I'm Chiranjivi. I recently graduated from IIIT Kottayam in Computer Science, and I'm an aspiring software engineer. I enjoy working on backend systems, cloud infrastructure and distributed systems, and I'm taking baby steps in AI engineering.",

  // Short facts shown as pills in the About section. Leave `[]` to hide them.
  facts: [],

  location: "Bengaluru, Karnataka, India",
  email: "chiru02.dev@gmail.com",

  // Optional: drop a photo into `public/` and reference it here, e.g. "/avatar.jpg".
  // Set to "" to hide the avatar entirely.
  avatar: "",

  // Optional: link to your résumé / CV (can be a file in `public/`, e.g. "/resume.pdf").
  // Set to "" to hide the button.
  resumeUrl:
    // "https://drive.google.com/file/d/1_yszlQWurpJ7SFLDHCeoxqxSId1Xo9g8/view?usp=drive_link" // => v9,
    "https://drive.google.com/file/d/1Km1WvJQhOhlFT3EiLNrlo1fp-g49Z7cM/view?usp=sharing", // => v10,
};

// Social links shown in the Contact section.
// Add or remove entries freely — each one becomes a button.
export const socials = [
  { label: "GitHub", url: "https://github.com/Firoar" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/chiranjivi-s/" },
];

// One-liner shown at the top of the Contact section.
export const contactBlurb =
  "Currently open to software engineering internships & full-time roles.";

// Visitor analytics. Currently supports GoatCounter (free for personal use,
// privacy-friendly, shows country-level geography in its dashboard).
// 1. Create a free account at https://www.goatcounter.com and add your site.
// 2. Paste your site code (the "yoursite" part of "yoursite.goatcounter.com")
//    below. Set to "" to disable analytics entirely.
export const analytics = {
  goatcounter: "drcxor", // e.g. "yourname" → tracks to yourname.goatcounter.com
};

// Skills, grouped by category. Add/remove groups or items as you like.
// Known skills automatically get a small monochrome icon next to their name
// (matched from the skill name — see src/data/skillIcons.ts). Unknown skills
// simply show as plain text, so write names naturally: "TypeScript",
// "Node.js", "PostgreSQL", etc.
export const skillGroups = [
  {
    title: "Languages",
    items: ["TypeScript", "Java", "Python", "SQL", "C++"],
  },
  {
    title: "Backend",
    items: ["Spring Boot", "NestJS", "Node.js", "Express.js", "FastAPI"],
  },
  {
    title: "Frontend",
    items: ["React", "Next.js", "Redux", "React Native", "HTML5 Canvas"],
  },
  {
    title: "Cloud & DevOps",
    items: [
      "AWS",
      "Docker",
      "Kubernetes",
      "Terraform",
      "Kafka",
      "GitHub Actions",
    ],
  },
  {
    title: "Databases",
    items: ["PostgreSQL", "MySQL", "MongoDB", "Firebase", "Supabase"],
  },
  {
    title: "Tools",
    items: ["Git", "Postman", "Electron", "GitHub"],
  },
];

// Projects. Each entry becomes a card on the page.
// `url` and `repo` are optional — set one or both to "" to hide that link.
export const projects = [
  {
    name: "Fourier Series Drawing Machine",
    description:
      "Recreates drawings using Fourier Series and FFT, converting an input path into Fourier coefficients and animating rotating epicycles that trace the original image on HTML Canvas.",
    tech: ["JavaScript", "HTML5 Canvas"],
    url: "",
    repo: "https://github.com/Firoar/fourier_series",
  },
  {
    name: "JOD Chess Engine",
    description:
      "A custom chess engine in pure JavaScript with full move legality validation, including castling, en passant, check and checkmate detection. Zero external dependencies, PvP with real-time move highlighting.",
    tech: ["JavaScript"],
    url: "https://firoar.github.io/JodChess/",
    repo: "https://github.com/Firoar/JodChess",
  },
  {
    name: "PixelVerse",
    description:
      "A 2D social media metaverse where users can form groups, choose a specific map, and invite friends to join in an immersive world, live as an avatar and have video conferences.",
    tech: [
      "React",
      "Redux",
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "WebRTC",
      "Socket.io",
    ],
    url: "",
    repo: "https://github.com/Firoar/PixelVerse",
  },
  {
    name: "CompSim",
    description:
      "A desktop logic gate simulator built with Electron, React and TypeScript, featuring a drag-and-drop editor and real-time simulation.",
    tech: ["Electron", "React", "TypeScript"],
    url: "",
    repo: "https://github.com/Firoar/CompSim",
  },
];

// Work experience, newest first.
// `description` can be a single string or a list of bullet points.
// Leave `experience: []` to hide this section entirely.
export const experience = [
  {
    company: "Motive",
    role: "Software Engineer Intern · App Architecture",
    period: "Jan 2026 to Jun 2026",
    description: [
      "Built KEDA-based autoscaling for Kafka consumers on Kubernetes, adapting to real-time consumer lag, projected to save $330K annually.",
      "Automated Kafka topic & consumer infrastructure with reusable Terraform modules and CLI generators covering auth, retry/DLQ and monitoring.",
    ],
  },
  {
    company: "RISHA Lab @ IIT Tirupati",
    role: "Research Intern · AI, LLM & Human Interaction",
    period: "May 2025 to Jul 2025",
    description: [
      "Researched AI-human interaction patterns and LLM integration in HCI under Dr. Sridhar Chimalakonda.",
      "Developed games in Python to research about HCI.",
    ],
  },
];
