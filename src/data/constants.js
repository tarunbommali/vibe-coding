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
    title: "Day 1 · Foundation & Tools",
    subtitle: "Forenoon · 9:40 AM - 1:00 PM",
    sessions: [
      {
        name: "Getting Started With Gen AI",
        topics: [
          "Onboarding into generative AI foundations",
          "Gen AI Tool Stack exploration", 
          "Large Language Model fundamentals",
          "AI-assisted writing, designing, and coding",
          "Idea generation acceleration techniques"
        ],
        outcome: "Students understand how GenAI works and can use it to speed up writing, designing, coding, and idea generation.",
      },
      {
        name: "Prompting Techniques",
        topics: [
          "Structured methods for clear AI instructions",
          "Controlling style, depth, and reasoning",
          "Improving answer quality and reliability",
          "Reducing AI mistakes and hallucinations",
          "Academic and project-focused prompting"
        ],
        outcome: "Students learn how to craft effective prompts that improve answer quality, reduce mistakes, and make AI tools more reliable for academic and project work.",
      },
      {
        name: "Building AI Tool Kit",
        topics: [
          "Essential tools, libraries, and platforms",
          "Writing, testing, and deploying AI models",
          "Practical resources for real AI tasks",
          "Tool integration and workflow setup",
          "Immediate application for projects"
        ],
        outcome: "Students gain a ready-to-use set of tools they can apply immediately for projects, experiments, and learning advanced AI concepts.",
      },
    ],
  },
  {
    title: "Day 1 · Workflows & Integration",
    subtitle: "Afternoon · 2:00 PM - 4:00 PM", 
    sessions: [
      {
        name: "AI Workflows & Multi-App Integration",
        topics: [
          "Thinker-Doer Workflow methodology",
          "Blindman-Elephant Approach for complex problems",
          "Structured data collection and preprocessing", 
          "Model training and evaluation processes",
          "Connecting multiple apps using AI bridges"
        ],
        outcome: "Students learn how to follow a systematic process to build end-to-end AI solutions with clarity and consistency across multiple applications.",
      },
    ],
  },
  {
    title: "Day 2 · Personalization & Agents",
    subtitle: "Forenoon · 9:40 AM - 1:00 PM",
    sessions: [
      {
        name: "Building AI Personalized Agents",
        topics: [
          "Create Your Own Writing Bot - GPT that mimics your style",
          "AI integration into existing workflows",
          "AI Agentic Tools & Workflows design",
          "Future trends in AI revolution",
          "Productivity enhancement through AI agents"
        ],
        outcome: "Learn to create personalized writing bots, explore AI trends, and develop AI-driven solutions to enhance productivity and efficiency in work processes.",
      },
    ],
  },
  {
    title: "Day 2 · Product Development", 
    subtitle: "Afternoon · 2:00 PM - 4:00 PM",
    sessions: [
      {
        name: "Building Products using AI",
        topics: [
          "Transform ideas into AI-powered products",
          "Step-by-step product development process",
          "Rapid prototyping without deep technical skills",
          "App development and workflow automation", 
          "AI feature experimentation and integration"
        ],
        outcome: "Students quickly learn to prototype apps, automate workflows, and experiment with AI features even without deep technical skills.",
      },
      {
        name: "Vibe Coding & Automation Tools",
        topics: [
          "ChatGPT for code generation and debugging",
          "Gemini AI for multi-modal development",
          "Lovable for instant app building",
          "Bolt for rapid prototyping",
          "Replit for collaborative coding"
        ],
        outcome: "Master AI-powered coding tools to accelerate development and automate repetitive programming tasks.",
      },
      {
        name: "VS Code AI Plugins & Setup",
        topics: [
          "Cursor AI for intelligent code completion",
          "Windsurf for AI-assisted development",
          "Roo for workflow optimization", 
          "Plugin configuration and best practices",
          "Customizing AI coding environment"
        ],
        outcome: "Set up and optimize VS Code with AI plugins to create a powerful, personalized development environment.",
      },
    ],
  },
];

const deliverables = [
  "JNTUGV-backed certificate to boost your resume and LinkedIn profile.",
  "Personalized writing bot and 1-2 AI agents with documentation.",
  "Complete AI toolkit setup with practical workflow integration.",
  "Reusable prompt library and productivity automation scripts.",
  "Confidence operating tools like Flowise, Langflow, Supabase, and Replit Agents.",
];

const bonuses = [
  {
    title: "AI Mastery Kit",
    description: "Complete collection of tools, templates, and workflows for ongoing AI learning and application.",
  },
  {
    title: "10+ AI Productivity Hacks",
    description: "Battle-tested workflows to automate research, email, reporting, and task management.",
  },
  {
    title: "10+ Premium PPT Templates", 
    description: "Ready-to-edit slide decks for strategy, classrooms, demos, and investor pitches.",
  },
  {
    title: "Time Management Ebook",
    description: "A focused guide on prioritization, energy management, and AI-assisted planning.",
  },
];

const aiModelProviders = [
  {
    name: "OpenAI Models",
    description: "Advanced reasoning and multimodal coverage for high-stakes work.",
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
      { 
        name: "GPT-4o", 
        id: "gpt-4o", 
        focus: "Multimodal inputs and outputs" 
      },
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
    description: "Self-hostable alternatives for cost control and customization.",
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
      name: "Lovable",
      purpose: "AI app builder", 
      features: ["Instant UI generation", "Smart backend", "No-code setup"],
      useCase: "Building full applications without coding",
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
    title: "Personalized Agent Structure", 
    summary: "Custom GPT agents with personalized writing styles and workflow integration",
    bullets: [
      "Style mimicry and tone adaptation",
      "Workflow-specific tool integration", 
      "Memory and context management",
      "Multi-platform deployment options",
    ],
  },
  toolPatterns: [
    {
      name: "Writing Style Adaptation",
      description: "Learn and replicate individual writing patterns and preferences",
    },
    {
      name: "Workflow Automation", 
      description: "Connect to existing tools and processes for seamless integration",
    },
    {
      name: "Content Generation",
      description: "Create context-aware content across different formats and platforms",
    },
    {
      name: "Personal Assistant Functions", 
      description: "Task management, scheduling, and personalized recommendations",
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
      name: "Personalized Instructional",
      description: "Adapt instructions to individual style and preferences",
      snippet: "You are an AI assistant that writes in my personal style...",
    },
    {
      name: "Role Based Personalization", 
      description: "Assume personalized professional personas with consistent tone",
      snippet: "You are {my professional role}. Write as I would communicate...",
    },
    {
      name: "Workflow Integration",
      description: "Connect AI responses to specific tools and processes", 
      snippet: "Generate output formatted for {specific tool} integration...",
    },
  ],
  deployment: [
    {
      name: "Custom GPT Deployment",
      description: "Deploy personalized agents as custom GPTs for everyday use",
      highlights: ["Easy access", "No coding required", "Continuous learning"],
    },
    {
      name: "API Integration", 
      description: "Integrate agents into existing applications and workflows",
      highlights: ["Scalable", "Customizable", "Enterprise-ready"],
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
