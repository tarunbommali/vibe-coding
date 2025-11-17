const liveDate = "November 18-19, 2024";

const timerEndDate = "2025-11-18T23:59:00";

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
    category: "AI Development"
  },
  {
    name: "HuggingFace",
    description: "Model playground for open-source LLMs and spaces.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRzttlcHBdv4O7n0cLlM1aNFB-fx5ScOSqajf5bTov1YRAwZ9wv1NFbxlrsbSCUye1Lgos&usqp=CAU",
    url: "https://huggingface.co/",
    category: "AI Development"
  },
  {
    name: "OpenAI Chat",
    description: "Master GPT style prompting and API integration.",
    image:
      "https://static.vecteezy.com/system/resources/previews/022/227/364/non_2x/openai-chatgpt-logo-icon-free-png.png",
    url: "https://chat.openai.com/",
    category: "AI Development"
  },
  {
    name: "Midjourney & DALL·E",
    description: "Generate visuals for decks, mockups, and storytelling.",
    image: "https://avatars.githubusercontent.com/u/61396273?s=280&v=4",
    url: "https://www.midjourney.com/",
    category: "Design & Visuals"
  },
  {
    name: "Flowise + Langflow",
    description: "No-code agent builders with drag-and-drop logic.",
    image: "https://avatars.githubusercontent.com/u/128289781?v=4",
    url: "https://flowiseai.com/",
    category: "AI Agents"
  },
  {
    name: "Supabase",
    description: "Backend for prototypes, auth, and logging actions.",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/supabase/supabase-original.svg",
    url: "https://supabase.com/",
    category: "Backend & Database"
  },
  {
    name: "Replit Agents",
    description: "Ship agents with hosted runtimes and automation.",
    image:
      "https://raw.githubusercontent.com/devicons/devicon/master/icons/replit/replit-original.svg",
    url: "https://replit.com/refer/jntugvmca",
    category: "Development & Deployment"
  },
  {
    name: "LangChain Tools",
    description: "Function calling, doc QA, and reasoning chains.",
    image:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShzp30XASXzPGrU2z1yjrI5WUriI-Iz2N1jw&s",
    url: "https://www.langchain.com/",
    category: "AI Development"
  },
  {
    name: "Lovable",
    description: "AI that builds full apps instantly with smart UI + backend.",
    image: "https://lovable.dev/img/logo/lovable-icon-bg-light.png",
    url: "https://lovable.dev/invite/AT0U9DD",
    category: "Rapid Prototyping"
  },
  {
    name: "v0 by Vercel",
    description: "Instant UI generation from prompts with React components.",
    image:
      "https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/vercel-v0-icon.png",
    url: "https://v0.app/ref/ZWZPWR",
    category: "Rapid Prototyping"
  },
  {
    name: "Cursor",
    description: "The AI-powered coding editor used for shipping products faster.",
    image:
      "https://framerusercontent.com/images/lfSBU4EhKcMg3iGg98L2F1ESfA.jpg?width=500&height=500",
    url: "https://cursor.sh/",
    category: "Development & Deployment"
  },
  {
    name: "Emergent",
    description: "AI agents that automate entire workflows and business systems.",
    image:
      "https://pbs.twimg.com/profile_images/1913617233001295872/hYKnojsI_400x400.jpg",
    url: "https://app.emergent.sh/register?ref=jntu253942",
    category: "AI Agents"
  },
   {
    name: "Gemini AI",
    description: "Multi-modal AI for development and code generation.",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR2IjbfpPVzpRug-6RUaytQVw-lyEaIJrkE9g&s",
    url: "https://gemini.google.com/",
    category: "AI Development"
  },
  {
    name: "Bolt",
    description: "Rapid prototyping and development platform.",
    image: "https://x5h8w2v3.delivery.rocketcdn.me/wp-content/uploads/2025/05/Logo-Bolt.new_.png",
    url: "https://bolt.new/",
    category: "Rapid Prototyping"
  },
  {
    name: "Windsurf",
    description: "AI-assisted development environment.",
    image: "https://windsurf.ai/favicon.ico",
    url: "https://windsurf.ai/",
    category: "Development & Deployment"
  },
  {
    name: "Roo",
    description: "Workflow optimization and AI coding assistant.",
    image: "https://roo.ai/favicon.ico",
    url: "https://roo.ai/",
    category: "Development & Deployment"
  },
  {
    name: "VS Code + AI Plugins",
    description: "Customizable IDE with AI-powered extensions.",
    image: "https://code.visualstudio.com/favicon.ico",
    url: "https://code.visualstudio.com/",
    category: "Development & Deployment"
  },
  {
    name: "Notion AI",
    description: "AI-powered writing and organization for workflows.",
    image: "https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png",
    url: "https://www.notion.com/",
    category: "Productivity & Writing"
  },
  {
    name: "Claude",
    description: "Advanced AI assistant for complex reasoning tasks.",
    image: "https://www.anthropic.com/favicon.ico",
    url: "https://claude.ai/",
    category: "AI Development"
  },
  {
    name: "GitHub Copilot",
    description: "AI pair programmer for code completion and generation.",
    image: "https://github.com/favicon.ico",
    url: "https://github.com/features/copilot",
    category: "Development & Deployment"
  }
];

 
const textStack = [
  {
    name: "Prompt Engineering Guide",
    description: "Comprehensive guide to structured prompting techniques",
    type: "Documentation",
    url: "https://www.promptingguide.ai/"
  },
  {
    name: "AI Workflow Templates",
    description: "Pre-built templates for Thinker-Doer workflows",
    type: "Templates",
    url: "https://github.com/awesome-ai-workflows"
  },
  {
    name: "LangChain Documentation",
    description: "Official docs for building AI chains and agents",
    type: "Documentation", 
    url: "https://docs.langchain.com/"
  },
  {
    name: "AI Agent Patterns",
    description: "Design patterns for building effective AI agents",
    type: "Guide",
    url: "https://github.com/ai-agent-patterns"
  },
  {
    name: "Rapid Prototyping Guide",
    description: "Step-by-step guide for AI-powered product development",
    type: "Tutorial",
    url: "https://github.com/ai-prototyping-guide"
  },
  {
    name: "VS Code AI Setup Guide",
    description: "Complete setup guide for AI-powered development environment",
    type: "Tutorial",
    url: "https://code.visualstudio.com/docs/ai"
  }
];


const workshopDays = [
  {
    title: "Day 1 · Foundation & Tools",
    subtitle: "Forenoon · 9:40 AM - 1:00 PM",
    sessions: [
      {
        name: "Getting Started With Gen AI",
        topics: [
          "Onboarding into generative AI and its foundations",
          "Gen AI tool stack overview",
          "Large Language Model exploration",
          "AI-assisted writing, designing, and coding",
          "Idea generation acceleration techniques",
        ],
        outcome:
          "Students understand how GenAI works and can use it to speed up writing, designing, coding, and idea generation.",
      },
      {
        name: "Prompting Techniques",
        topics: [
          "Structured methods for writing clear and targeted instructions",
          "Controlling style, depth, and reasoning",
          "Improving answer quality and reducing hallucinations",
          "Academic and project-focused prompting",
        ],
        outcome:
          "Students learn how to craft effective prompts that improve answer quality, reduce mistakes, and make AI tools more reliable for academic and project work.",
      },
      {
        name: "Building AI Tool Kit",
        topics: [
          "Essential tools, libraries, and platforms for prototyping",
          "Writing, testing, and deploying models and agents",
          "Practical resources for real AI tasks",
          "Tool integration and workflow setup",
        ],
        outcome:
          "Students gain a ready-to-use set of tools they can apply immediately for projects, experiments, and learning advanced AI concepts.",
      },
    ],
  },
  {
    title: "Day 1 · Workflows & Integration",
    subtitle: "Afternoon · 2:00 PM - 4:00 PM",
    sessions: [
      {
        name: "AI Workflows",
        topics: [
          "Thinker-Doer workflow methodology",
          "Blindman–Elephant approach for complex problems",
          "Structured data collection and preprocessing",
          "Model training, evaluation, and deployment",
          "Connecting multiple apps using AI integrations",
        ],
        outcome:
          "Students learn how to follow a systematic process to build end-to-end AI solutions with clarity and consistency.",
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
          "Create your own writing bot — build a GPT that writes like you",
          "Integrating AI into personal and team workflows",
          "Agentic tools and workflow design",
          "Future trends in the AI revolution",
        ],
        outcome:
          "Learn to create personalized writing bots, explore upcoming trends, and develop AI-driven solutions to enhance productivity and efficiency.",
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
          "AI feature experimentation and integration",
        ],
        outcome:
          "Students quickly learn to prototype apps, automate workflows, and experiment with AI features even without deep technical skills.",
      },
      {
        name: "Vibe Coding & Automation Tools",
        topics: ["ChatGPT", "Gemini", "Lovable", "Bolt", "Replit"],
        outcome:
          "Hands-on exposure to tools that accelerate prototyping, automation, and agent deployment.",
      },
      {
        name: "VS Code Plugins & Setup",
        topics: ["Cursor AI", "Windsurf", "Roo", "Plugin configuration and best practices"],
        outcome:
          "Set up and optimize VS Code with AI plugins to create a powerful, personalized development environment.",
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
  security: [
    {
      name: "Access Controls",
      practices: [
        "Role-based access and least privilege",
        "API key rotation and scoped tokens",
        "Audit logs for privileged actions",
      ],
    },
    {
      name: "Input Validation & Sanitization",
      practices: [
        "Reject or sanitize untrusted input",
        "Validate file uploads and external data",
        "Rate limiting to prevent abuse",
      ],
    },
    {
      name: "Monitoring & Incident Response",
      practices: [
        "Real-time telemetry and alerting",
        "Error tracking and observability",
        "Defined runbooks for security incidents",
      ],
    },
  ],
  optimization: [
    {
      name: "Model Serving",
      details: [
        "Use smaller models for lightweight tasks",
        "Autoscaling and instance pooling for bursts",
        "Choose appropriate batching windows for throughput",
      ],
    },
    {
      name: "Caching & Batching",
      details: [
        "Cache deterministic responses",
        "Batch similar requests to reduce calls",
        "Use partial responses + streaming where possible",
      ],
    },
    {
      name: "Prompt & Response Efficiency",
      details: [
        "Trim prompts to necessary context",
        "Use structured prompts to avoid back-and-forth",
        "Return concise outputs and post-process on client",
      ],
    },
  ],
};

const DISCORD_IMG_LINK =
  "https://static.vecteezy.com/system/resources/thumbnails/018/930/718/small_2x/discord-logo-discord-icon-transparent-free-png.png";
const DISCORD_SERVER_LINK = "https://discord.gg/E9dckgdNKw";


export {
  heroStats,
  DISCORD_IMG_LINK,
  DISCORD_SERVER_LINK,
  aiModelProviders,
  developmentStack,
  liveDate,
  agentArchitecture,
  timerEndDate,
  toolStack,
  textStack,
  workshopDays,
  deliverables,
  bonuses,
};
