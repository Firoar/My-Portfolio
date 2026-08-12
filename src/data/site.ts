// ---------------------------------------------------------------------------
//  ✏️  EDIT THIS FILE to personalize the whole site.
//      It drives the hero, about, skills, experience, contact and footer.
// ---------------------------------------------------------------------------

export const site = {
  /** Your name as shown in the terminal hero */
  name: 'Chiranjivi S',
  /** Short title tag */
  title: 'Chiranjivi S',
  /** One-liner under your name */
  role: 'Software Engineer · Backend & Cloud',
  /** Short tagline shown in the hero */
  tagline:
    'A curious, builder-first engineer — diving deep into systems, cloud, and the full stack.',
  /** Used in <meta name="description"> */
  description:
    'Portfolio of Chiranjivi S — a software engineer building scalable backend systems, cloud infrastructure and full-stack products with Java, Go, TypeScript and Kubernetes.',
  /** Absolute base URL of the deployed site (used for sitemap/SEO) */
  url: 'https://iamchiranjivi.in',
  /** Location shown in the terminal header */
  location: 'Bengaluru, Karnataka, India',
  /** Direct link to the résumé */
  resume:
    'https://drive.google.com/file/d/1_yszlQWurpJ7SFLDHCeoxqxSId1Xo9g8/view?usp=drive_link',
} as const;

export const about = {
  /** Shown in the About section */
  lines: [
    "I'm Chiranjivi — a curious builder who loves to take things apart and put them back together, better.",
    'Backend, systems and cloud by day — any "how does that work?" rabbit hole by night.',
  ],
  /** Pills shown in the About section */
  facts: [
    'B.Tech CSE @ IIIT Kottayam · CGPA 8.50',
    '1000+ problems solved on Codeforces, LeetCode & GFG',
    'Pupil on Codeforces',
  ],
} as const;

export const skills = {
  languages: ['Java', 'Go', 'Python', 'C++', 'JavaScript', 'TypeScript', 'SQL'],
  backend: ['Spring Boot', 'NestJS', 'Node.js', 'Express.js', 'FastAPI', 'Gin'],
  frontend: ['React', 'Next.js', 'Redux', 'Zustand', 'HTML5 Canvas'],
  cloudDevops: ['AWS', 'Docker', 'Kubernetes', 'Terraform', 'Kafka', 'Jenkins', 'CI/CD'],
  databases: ['PostgreSQL', 'MySQL', 'MongoDB', 'Firebase', 'Supabase'],
  tools: ['Git', 'Postman', 'OAuth', 'Electron', 'GitHub'],
} as const;

export const experience = [
  {
    period: 'Jan 2026 — Jun 2026',
    role: 'Software Engineer Intern · App Architecture',
    company: 'Motive',
    notes: [
      'Built KEDA-based autoscaling for Kafka consumers on Kubernetes, adapting to real-time consumer lag — projected to save $330K annually.',
      'Automated Kafka topic & consumer infrastructure with reusable Terraform modules and CLI generators covering auth, retry/DLQ and monitoring.',
    ],
  },
  {
    period: 'May 2025 — Jul 2025',
    role: 'Research Intern · AI, LLM & Human Interaction',
    company: 'RISHA Lab @ IIT Tirupati',
    notes: [
      'Researched AI-human interaction patterns and LLM integration in HCI under Dr. Sridhar Chimalakonda.',
    ],
  },
  {
    period: 'Nov 2022 — Apr 2026',
    role: 'B.Tech in Computer Science',
    company: 'IIIT Kottayam',
    notes: ['Graduating with CGPA 8.50, focused on systems, algorithms and distributed computing.'],
  },
] as const;

export const contact = {
  email: 'chiru02.dev@gmail.com',
  github: 'https://github.com/Firoar',
  linkedin: 'https://www.linkedin.com/in/chiranjivi-s/',
  /** Extra socials — add/remove freely */
  socials: [
    { label: 'github', url: 'https://github.com/Firoar' },
    { label: 'linkedin', url: 'https://www.linkedin.com/in/chiranjivi-s/' },
  ] as const,
  /** Short CTA shown above the contact box */
  blurb: "Currently open to software engineering internships & full-time roles.",
};

