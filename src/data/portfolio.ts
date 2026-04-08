export type Highlight = {
  value: string;
  label: string;
  note: string;
};

export type SkillGroup = {
  title: string;
  items: readonly string[];
};

export type ExperienceEntry = {
  role: string;
  company: string;
  period: string;
  summary: string;
  bullets: readonly string[];
};

export type ProjectEntry = {
  name: string;
  period: string;
  status: string;
  summary: string;
  stack: readonly string[];
  bullets: readonly string[];
};

export const portfolioData = {
  name: "Amitabh Mathur",
  title: "AI & ML Engineer",
  location: "Jodhpur, Rajasthan, India",
  email: "amitabhmathur12@gmail.com",
  phone: "+91 9509109721",
  linkedin: "https://linkedin.com/in/amitabh-mathur",
  github: "https://github.com/raosabh007",
  tagline:
    "Building intelligent systems that feel sharp, useful, and grounded in the real world.",
  summary:
    "AI & ML engineer in training focused on LLM products, quantitative systems, and real-world machine learning experiences that stay practical under pressure.",
  about:
    "Currently pursuing a B.Tech in Artificial Intelligence & Machine Learning at JIET College of Engineering. My work sits at the intersection of generative AI, algorithmic trading, and applied computer vision, with a strong pull toward products that feel useful in the real world.",
  availability:
    "Open to ambitious internships, applied AI collaborations, and product builds where machine learning has to do more than just look impressive.",
  specialties: [
    "Generative AI systems and RAG workflows",
    "Algorithmic trading strategy design",
    "Full-stack product thinking for AI apps",
    "Computer vision prototypes with edge awareness",
  ],
  education: {
    degree: "B.Tech, Artificial Intelligence & Machine Learning",
    school: "JIET College of Engineering, Jodhpur",
    period: "2023-2027",
    detail: "CGPA: 7.0 / 10",
  },
  highlights: [
    {
      value: "5+",
      label: "years of market data analyzed",
      note: "Historical stock datasets shaped predictive pipelines during the Anand Rathi internship.",
    },
    {
      value: "20+",
      label: "engineered trading features",
      note: "Feature sets blended volatility, momentum, and trend signals for model improvement.",
    },
    {
      value: "78%",
      label: "profitability uplift",
      note: "Backtesting improvements reported across Python and C++ strategy iterations.",
    },
  ] satisfies readonly Highlight[],
  skillGroups: [
    {
      title: "Languages",
      items: ["Python", "C/C++", "SQL", "JavaScript"],
    },
    {
      title: "Machine Learning",
      items: ["scikit-learn", "TensorFlow", "PyTorch", "Pandas", "NumPy"],
    },
    {
      title: "Generative AI",
      items: ["LLM APIs", "LangChain", "RAG", "FAISS", "Prompt Engineering"],
    },
    {
      title: "Tools",
      items: ["Git", "Docker", "Linux", "Streamlit", "AWS/GCP"],
    },
    {
      title: "Databases",
      items: ["PostgreSQL"],
    },
  ] satisfies readonly SkillGroup[],
  experience: [
    {
      role: "AI & ML Intern",
      company: "Anand Rathi Financial Services",
      period: "2025",
      summary:
        "Built predictive market modeling pipelines grounded in historical stock data and feature-rich evaluation loops.",
      bullets: [
        "Analyzed more than five years of stock market history with Python-based ML workflows.",
        "Designed ensemble models that improved prediction accuracy by roughly 18-25% over baseline systems.",
        "Reduced model bias and variance by 15% through cross-validation, feature selection, and metric tuning.",
      ],
    },
    {
      role: "Algorithmic Trading Analyst",
      company: "Delta Exchange (MetaTrader 5)",
      period: "2024-Present",
      summary:
        "Developing adaptive trading systems that connect quantitative logic with automation-ready execution.",
      bullets: [
        "Designed and deployed quantitative strategies in Python and C++ on MetaTrader 5 servers.",
        "Improved strategy profitability by approximately 78% compared with early backtesting baselines.",
        "Currently building an AI-driven trading automation agent with n8n workflows for adaptive execution.",
      ],
    },
  ] satisfies readonly ExperienceEntry[],
  projects: [
    {
      name: "Doctor Copilot",
      period: "2026",
      status: "Live",
      summary:
        "A full-stack healthcare management system that blends secure operations with LLM-powered clinical assistance.",
      stack: ["Next.js", "Prisma", "PostgreSQL", "Vercel", "LLM Workflows"],
      bullets: [
        "Implemented secure multi-role access, audit logging, and consent-driven data sharing.",
        "Integrated intelligent triage and clinical summarization to streamline documentation workflows.",
        "Shipped a production-ready deployment for scalable, real-time healthcare interactions.",
      ],
    },
    {
      name: "S.H.I.V",
      period: "2024",
      status: "Prototype",
      summary:
        "A YOLOv8-based assistive AI system for visually impaired users with real-time object detection and distance awareness.",
      stack: ["YOLOv8", "Computer Vision", "Edge Optimization", "Python"],
      bullets: [
        "Prototyped real-time assistive detection for practical accessibility use cases.",
        "Implemented distance estimation through bounding-box scaling and perspective approximation.",
        "Validated the system in an open house competition as a deployment-minded concept.",
      ],
    },
  ] satisfies readonly ProjectEntry[],
  achievements: [
    "Finalist, Inter-College Chess Championship",
    "Represented District Level Football Team",
    "Winner, 5K College Marathon",
  ],
  certifications: [
    "Machine Learning Specialization (Andrew Ng)",
    "Full Stack AI Development",
    "Python Programming Certifications",
  ],
  contactCta:
    "Open to internships, collaborations, and ambitious product ideas across AI, healthcare, and trading systems.",
} as const;
