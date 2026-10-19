const projects = [
  {
    number: '01',
    category: 'AI Engineering / Full-Stack',
    title: 'Prabhat AI — Personal AI Agent',
    status: 'LIVE',
    description:
      'A deployed personal AI agent that answers questions about my professional background, projects, technical skills and learning journey. Features retrieval-augmented generation (RAG), semantic search, vector embeddings, conversation memory, context-aware responses, GitHub integration, document processing and security guardrails. Built and tested end-to-end across 28 days.',
    technologies: [
      'React',
      'Vite',
      'TypeScript',
      'Tailwind CSS',
      'Node.js',
      'Express',
      'MongoDB',
      'Mongoose',
      'Google Gemini',
      '@google/genai',
      'Embeddings',
      'Vector Search',
      'RAG',
      'Conversation Memory',
      'GitHub API',
      'REST API',
      'JWT',
    ],
    image: 'prabhat-ai',
    liveUrl: 'https://prabhat-ai.vercel.app/',
    githubUrl: 'https://github.com/prabhatjaidiya/prabhat-ai',
  },

  {
    number: '02',
    category: 'Productivity / Full-Stack',
    title: 'Job / Internship Tracker',
    status: 'LIVE',
    description:
      'A full-stack job and internship management platform for organizing applications, tracking statuses, managing deadlines, and keeping the job search workflow in one place.',
    technologies: [
      'React', 'Vite', 'Tailwind CSS', 'React Router',
      'Node.js', 'Express', 'TypeScript', 'MongoDB',
      'Mongoose', 'JWT', 'bcrypt', 'REST API',
    ],
    image: 'job-tracker',
    liveUrl: 'https://job-tracker-frontend-26wf.onrender.com',
    githubUrl: 'https://github.com/prabhatjaidiya/job-tracker',
  },

  {
    number: '03',
    category: 'Finance / Dashboard',
    title: 'Expense Tracker',
    status: 'LIVE',
    description:
      'A responsive personal finance dashboard designed to track expenses, manage budgets and visualize spending patterns through interactive financial insights.',
    technologies: [
      'React', 'Vite', 'Tailwind CSS', 'Recharts',
      'Context API', 'Local Storage',
    ],
    image: 'expense-tracker',
    liveUrl: 'https://expense-tracker-lovat-pi.vercel.app/',
    githubUrl: 'https://github.com/prabhatjaidiya/Expense-Tracker',
  },

  {
    number: '04',
    category: 'Weather / API',
    title: 'Weather App',
    status: 'LIVE',
    description:
      'A responsive weather application that delivers real-time conditions, forecasts and location-based insights through weather APIs, with a focus on clear data visualization and usability.',
    technologies: [
      'React', 'JavaScript', 'Tailwind CSS', 'REST API',
    ],
    image: 'weather',
    liveUrl: 'https://weather-app-7cfd.vercel.app/',
    githubUrl: 'https://github.com/prabhatjaidiya/Weather-App',
  },

  {
    number: '05',
    category: 'E-commerce / Full-Stack',
    title: 'ShopSphere — E-commerce Platform',
    status: 'IN PROGRESS',
    description:
      'A full-stack e-commerce platform featuring product discovery, authentication, cart management, checkout, order tracking, payment integration and an admin dashboard for product and order management.',
    technologies: [
      'React', 'Vite', 'Tailwind CSS', 'React Router',
      'TanStack Query', 'Node.js', 'Express', 'TypeScript',
      'MongoDB', 'Mongoose', 'JWT', 'bcrypt',
      'Cloudinary', 'Razorpay', 'REST API',
    ],
    image: 'ecommerce',
    liveUrl: '#',
    githubUrl: '#',
  },

  {
    number: '06',
    category: 'Collaboration / Real-Time',
    title: 'Real-Time Collaboration Platform',
    status: 'PLANNED',
    description:
      'A collaborative workspace where teams can manage projects, tasks and discussions while receiving real-time updates across shared workspaces.',
    technologies: [
      'React', 'Node.js', 'Express', 'MongoDB',
      'Socket.IO', 'JWT',
    ],
    image: 'collaboration',
    liveUrl: '#',
    githubUrl: '#',
  },

  {
    number: '07',
    category: 'Communication / Real-Time',
    title: 'Real-Time Chat App',
    status: 'PLANNED',
    description:
      'A real-time messaging application supporting private and group conversations, online presence, typing indicators, message history and instant message delivery.',
    technologies: [
      'React', 'Node.js', 'Express', 'MongoDB',
      'Socket.IO', 'JWT',
    ],
    image: 'chat',
    liveUrl: '#',
    githubUrl: '#',
  },
]

export default projects