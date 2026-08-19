// Make changes here
export const site = {
  title: "Chiranjivi S",
  description:
    "Portfolio of Chiranjivi S, a software engineer building scalable backend systems, cloud infrastructure and full-stack products with Java, Go, TypeScript and Kubernetes.",
  url: "https://iamchiranjivi.in",
};

//  personal info
export const profile = {
  name: "Chiranjivi S",
  role: "Software Engineer",
  tagline:
    "I enjoy building software and figuring out how things work under the hood.",
  bio: "I'm Chiranjivi. I recently graduated from IIIT Kottayam in Computer Science, and I'm an aspiring software engineer. I enjoy working on backend systems, cloud infrastructure and distributed systems, and I'm taking baby steps in AI engineering.",

  facts: [],

  location: "Bengaluru, Karnataka, India",
  email: "chiru02.dev@gmail.com",


  avatar: "",

  resumeUrl:
    // "https://drive.google.com/file/d/1_yszlQWurpJ7SFLDHCeoxqxSId1Xo9g8/view?usp=drive_link" // => v9,
    "https://drive.google.com/file/d/1Km1WvJQhOhlFT3EiLNrlo1fp-g49Z7cM/view?usp=sharing", // => v10,
};


export const socials = [
  { label: "GitHub", url: "https://github.com/Firoar" },
  { label: "LinkedIn", url: "https://www.linkedin.com/in/chiranjivi-s/" },
];

export const contactBlurb =
  "Currently open to software engineering internships & full-time roles.";


export const analytics = {
  goatcounter: "drcxor", // e.g. "yourname" → tracks to yourname.goatcounter.com
};

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

// projects
export const projects = [
  {
    name: "Fourier Series Drawing Machine",
    description:
      "Recreates drawings using Fourier Series and FFT, converting an input path into Fourier coefficients and animating rotating epicycles that trace the original image on HTML Canvas.",
    tech: ["JavaScript", "HTML5 Canvas"],
    url: "https://drawingmachine.iamchiranjivi.in/",
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
