const heroStats = [
  { label: "Hands-on Hours", value: "12+" },
  { label: "Mini Projects", value: "2" },
  { label: "Bonuses", value: "AI Mastery Kit" },
  { label: "Certificate", value: "JNTUGV" },
];

const toolStack = [
  {
    name: "Google AI Studio",
    description: "Rapid prompt experiments and text generation.",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/google/google-original.svg",
    url: "https://aistudio.google.com/",
  },
  {
    name: "HuggingFace",
    description: "Model playground for open-source LLMs and spaces.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzttlcHBdv4O7n0cLlM1aNFB-fx5ScOSqajf5bTov1YRAwZ9wv1NFbxlrsbSCUye1Lgos&usqp=CAU",
    url: "https://huggingface.co/",
  },
  {
    name: "OpenAI Chat",
    description: "Master GPT style prompting and API integration.",
    image:
      "https://static.vecteezy.com/system/resources/previews/022/227/364/non_2x/openai-chatgpt-logo-icon-free-png.png",
    url: "https://chat.openai.com/",
  },
  {
    name: "Midjourney & DALL·E",
    description: "Generate visuals for decks, mockups, and storytelling.",
    image: "https://avatars.githubusercontent.com/u/61396273?s=280&v=4",
    url: "https://www.midjourney.com/",
  },
  {
    name: "Flowise + Langflow",
    description: "No-code agent builders with drag-and-drop logic.",
    image: "https://avatars.githubusercontent.com/u/128289781?v=4",
    url: "https://flowiseai.com/",
  },
  {
    name: "Supabase",
    description: "Backend for prototypes, auth, and logging actions.",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/supabase/supabase-original.svg",
    url: "https://supabase.com/",
  },
  {
    name: "Replit Agents",
    description: "Ship agents with hosted runtimes and automation.",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/replit/replit-original.svg",
    url: "https://replit.com/refer/jntugvmca",
  },
  {
    name: "LangChain Tools",
    description: "Function calling, doc QA, and reasoning chains.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShzp30XASXzPGrU2z1yjrI5WUriI-Iz2N1jw&s",
    url: "https://www.langchain.com/",
  },

  // -------------------------
  // ⭐ Newly Added Platforms
  // -------------------------

  {
    name: "Lovable",
    description: "AI that builds full apps instantly with smart UI + backend.",
    image: "https://lovable.dev/img/logo/lovable-icon-bg-light.png",
    url: "https://lovable.dev/invite/AT0U9DD",
  },
  {
    name: "v0 by Vercel",
    description: "Instant UI generation from prompts with React components.",
    image:
      "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/vercel-v0-icon.png",
    url: "https://v0.app/ref/ZWZPWR",
  },
  {
    name: "Cursor",
    description:
      "The AI-powered coding editor used for shipping products faster.",
    image:
      "https://framerusercontent.com/images/lfSBU4EhKcMg3iGg98L2F1ESfA.jpg?width=500&height=500",
    url: "https://cursor.sh/",
  },
  {
    name: "Emergent",
    description:
      "AI agents that automate entire workflows and business systems.",
    image:
      "https://pbs.twimg.com/profile_images/1913617233001295872/hYKnojsI_400x400.jpg",
    url: "https://app.emergent.sh/register?ref=jntu253942",
  },
];

const workshopDays = [
  {
    title: "Day 1 · Introduction",
    subtitle: "November 17 · Forenoon",
    sessions: [
      {
        name: "Prompt Engineering Mastery",
        topics: [
          "Instructional prompts for automation",
          "Role-based prompts for context awareness",
          "Step-by-step reasoning prompts",
          "Output-controlled formats (tables, JSON)",
          "Reasoning prompts for better analysis",
        ],
        outcome:
          "Guide AI to think, analyze, and ship accurate, context-aware responses. Build smart workflows and kick-start agent thinking without code.",
      },
    ],
  },
  {
    title: "Day 1 · Foundation",
    subtitle: "November 17 · Afternoon",
    sessions: [
      {
        name: "Explore Generative AI Tools",
        topics: [
          "Google AI Studio deep dive",
          "HuggingFace + community models",
          "OpenAI Chat/API playground",
          "Image generators (DALL·E, Midjourney)",
          "Audio + code assistants",
        ],
        outcome:
          "Become comfortable switching tools, generate content quickly, and assemble prototypes without touching code.",
      },
      {
        name: "Study LLM Fundamentals",
        topics: [
          "Tokens, context windows, and memory",
          "Temperature vs. determinism",
          "Model selection and cost trade-offs",
          "Response reliability and guardrails",
          "Prompt patterns for consistency",
        ],
        outcome:
          "Control outputs better, pick the right model per task, and architect reliable AI workflows.",
      },
      {
        name: "Try No-Code Agent Tools",
        topics: [
          "Flowise & Langflow builders",
          "Connecting prompts, tools, and data",
          "Branching conversation flows",
          "Testing & debugging automations",
          "Shipping beginner-friendly chatbots",
        ],
        outcome:
          "Create working agents, automate tasks, and deliver professional experiences without writing code.",
      },
    ],
  },
  {
    title: "Day 2 · Build & Deploy",
    subtitle: "November 18 · Full Day",
    sessions: [
      {
        name: "Build a Simple AI Agent",
        topics: [
          "Connect LLMs to APIs & databases",
          "Add tools, function calling, and memory",
          "Grounding with documents + file readers",
          "Validation loops and human-in-the-loop",
          "Deploy + monitor outputs",
        ],
        outcome:
          "Deliver agents that answer from docs, send emails, and automate workflows end-to-end.",
      },
      {
        name: "Develop 1–2 Mini AI Products",
        topics: [
          "Pick product ideas (feedback, incident, hiring)",
          "Design UI + Supabase/Replit backends",
          "Integrate models + eval checks",
          "Deploy with live demo links",
          "Basic QA + user onboarding",
        ],
        outcome:
          "Walk away with deployable prototypes, clear user flows, and documentation to showcase.",
      },
      {
        name: "Prepare Demo & Documentation",
        topics: [
          "Problem → Demo → Impact storytelling",
          "Slide deck + fallback video",
          "README with prompts & setup",
          "Shareable deployment URLs",
          "Interview-ready talking points",
        ],
        outcome:
          "Launch a polished package: slides, README, demo video, and links recruiters can test instantly.",
      },
    ],
  },
];

const deliverables = [
  "JNTUGV-backed certificate to boost your resume and LinkedIn profile.",
  "1–2 shipped AI agents with live URLs, documentation, and prompts.",
  "Reusable prompt library + productivity hacks to save hours daily.",
  "Confidence operating tools like Flowise, Langflow, Supabase, and Replit Agents.",
];

const bonuses = [
  {
    title: "10+ AI Productivity Hacks",
    description:
      "Battle-tested workflows to automate research, email, reporting, and task management.",
  },
  {
    title: "10+ Premium PPT Templates",
    description:
      "Ready-to-edit slide decks for strategy, classrooms, demos, and investor pitches.",
  },
  {
    title: "Time Management Ebook",
    description:
      "A focused guide on prioritization, energy management, and AI-assisted planning.",
  },
];

const aiModelProviders = [
  {
    name: "OpenAI Models",
    description:
      "Advanced reasoning and multimodal coverage for high-stakes work.",
    models: [
      {
        name: "GPT-4",
        id: "gpt-4",
        focus: "Advanced reasoning & complex tasks",
      },
      {
        name: "GPT-4 Turbo",
        id: "gpt-4-turbo-preview",
        focus: "Balanced performance & cost",
      },
      {
        name: "GPT-3.5 Turbo",
        id: "gpt-3.5-turbo",
        focus: "Fast, cost-effective iterations",
      },
      { name: "GPT-4o", id: "gpt-4o", focus: "Multimodal inputs and outputs" },
    ],
  },
  {
    name: "Google AI Models",
    description: "Gemini family for reasoning, vision, and embeddings.",
    models: [
      {
        name: "Gemini Pro",
        id: "gemini-pro",
        focus: "Text generation & reasoning",
      },
      {
        name: "Gemini Pro Vision",
        id: "gemini-pro-vision",
        focus: "Multimodal understanding",
      },
      {
        name: "PaLM 2 (Text-Bison)",
        id: "text-bison-001",
        focus: "Reliable legacy support",
      },
      {
        name: "Embeddings",
        id: "embedding-001",
        focus: "Vector search & retrieval",
      },
    ],
  },
  {
    name: "Anthropic Claude Models",
    description: "Claude 3 lineup for thoughtful, constitutional responses.",
    models: [
      {
        name: "Claude 3 Opus",
        id: "claude-3-opus-20240229",
        focus: "Most capable reasoning",
      },
      {
        name: "Claude 3 Sonnet",
        id: "claude-3-sonnet-20240229",
        focus: "Balanced performance",
      },
      {
        name: "Claude 3 Haiku",
        id: "claude-3-haiku-20240307",
        focus: "Fast & efficient",
      },
    ],
  },
  {
    name: "Open Source Models",
    description:
      "Self-hostable alternatives for cost control and customization.",
    models: [
      {
        name: "Llama 2 70B",
        id: "meta-llama/Llama-2-70b-chat-hf",
        focus: "Enterprise-ready open weights",
      },
      {
        name: "Mistral 7B",
        id: "mistralai/Mistral-7B-Instruct-v0.2",
        focus: "Lightweight, instruction tuned",
      },
      {
        name: "Code Llama 34B",
        id: "codellama/CodeLlama-34b-Instruct-hf",
        focus: "Code generation",
      },
      {
        name: "Zephyr 7B",
        id: "HuggingFaceH4/zephyr-7b-beta",
        focus: "Chat-centric assistant",
      },
    ],
  },
];

const developmentStack = {
  noCodeTools: [
    {
      name: "Flowise",
      purpose: "Visual AI workflow builder",
      features: ["Drag-drop interface", "LLM orchestration", "API endpoints"],
      useCase: "Building AI agents without coding",
    },
    {
      name: "Langflow",
      purpose: "LangChain visual editor",
      features: ["Component-based", "Real-time testing", "Export to code"],
      useCase: "Rapid prototyping of AI applications",
    },
    {
      name: "n8n",
      purpose: "Workflow automation platform",
      features: ["300+ integrations", "Webhooks", "Custom nodes"],
      useCase: "Enterprise automation & integrations",
    },
  ],
  backend: {
    runtime: "Node.js + Express",
    database: [
      { label: "Primary", value: "Supabase (PostgreSQL)" },
      { label: "Vector", value: "Pinecone / PgVector" },
      { label: "Cache", value: "Redis" },
    ],
    authentication: "NextAuth.js / Auth0",
    deployment: "Vercel / AWS / Railway",
  },
  frontend: {
    framework: "Next.js 14+ (App Router)",
    styling: "Tailwind CSS + Shadcn/UI",
    stateManagement: "Zustand / React Context",
    forms: "React Hook Form + Zod",
  },
};

const agentArchitecture = {
  blueprint: {
    title: "Basic Agent Structure",
    summary: "ChatOpenAI (GPT-4) core with pluggable tools and BufferMemory",
    bullets: [
      "LLM + memory initialized per agent",
      "Tool belt grows as workflows expand",
      "Process method streams responses via invoke",
    ],
  },
  toolPatterns: [
    {
      name: "Web Search",
      description: "Real-time context via Serper or Tavily APIs",
    },
    {
      name: "Code Execution",
      description: "Sandboxed snippets with Replit or StackBlitz",
    },
    {
      name: "File Operations",
      description: "PDF parsing, CSV crunching, and note extraction",
    },
    {
      name: "API Integration",
      description: "REST / GraphQL clients for SaaS automation",
    },
  ],
  modelSelection: [
    {
      tier: "High Performance",
      models: ["gpt-4", "claude-3-opus"],
      useCases: ["Complex reasoning", "Strategic planning", "Creative writing"],
      cost: "High",
    },
    {
      tier: "Balanced",
      models: ["gpt-3.5-turbo", "claude-3-sonnet", "gemini-pro"],
      useCases: ["General chat", "Code generation", "Content creation"],
      cost: "Medium",
    },
    {
      tier: "Cost Effective",
      models: ["claude-3-haiku", "llama2", "mistral-7b"],
      useCases: ["Simple Q&A", "Text processing", "Prototyping"],
      cost: "Low",
    },
  ],
  promptTemplates: [
    {
      name: "Instructional",
      description:
        "Structured task, steps, and format for deterministic output.",
      snippet:
        "You are an AI assistant... Provide output exactly as specified.",
    },
    {
      name: "Role Based",
      description: "Assume a persona with tone, expertise, and constraints.",
      snippet: "You are {role}. Act as this character...",
    },
    {
      name: "Step-by-Step",
      description: "Force chain-of-thought style reasoning for reliability.",
      snippet: "Let's think step by step: 1. Understand the problem...",
    },
  ],
  deployment: [
    {
      name: "Serverless Functions",
      description: "Vercel API routes handling chat completions on demand.",
      highlights: ["Edge-friendly", "Automatic scaling", "Secure secrets"],
    },
    {
      name: "Real-time Streaming",
      description: "WebSocket layer streams token-by-token responses.",
      highlights: ["Interactive demos", "Low latency", "Better UX"],
    },
  ],
  security: [
    {
      name: "API Security",
      practices: [
        "Rate limiting with Upstash Redis",
        "Input validation via Zod schemas",
        "Output sanitization using DOMPurify",
        "Managed keys in environment variables",
      ],
    },
    {
      name: "Error Handling",
      practices: [
        "Retry with fallback models",
        "Progressive backoff before failover",
        "Centralized logging for audits",
      ],
    },
  ],
  optimization: [
    {
      name: "Caching Strategy",
      details: [
        "LRU memory cache for hot prompts",
        "Redis for sessions & throttling",
        "CDN delivery for static assets",
      ],
    },
    {
      name: "Model Optimization",
      details: [
        "Prompt compression to trim tokens",
        "Structured JSON outputs",
        "Batch processing for similar jobs",
        "Model cascading from cheap to premium",
      ],
    },
  ],
};

const DISCORD_IMG_LINK =
  "https://static.vecteezy.com/system/resources/thumbnails/018/930/718/small_2x/discord-logo-discord-icon-transparent-free-png.png";
const DISCORD_SERVER_LINK = "https://discord.gg/jntugv";

export {
  heroStats,
  DISCORD_IMG_LINK,
  DISCORD_SERVER_LINK,
  aiModelProviders,
  developmentStack,
  agentArchitecture,
  toolStack,
  workshopDays,
  deliverables,
  bonuses,
};
