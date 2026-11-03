// Edit this file to update the portfolio content. Empty URLs are intentionally not rendered.
export const profile = {
  name: 'Ratnesh Dilip Ramane',
  shortName: 'Ratnesh',
  initials: 'RR',
  role: 'Data Analyst & Python Developer',
  location: 'Maharashtra, India',
  graduation: 'Expected 2027',
  availability: 'Open to internships & selected freelance projects',
  email: 'ratneshramane136@gmail.com', // Add a public contact email
  resumeUrl: '/resume/Ratnesh_Ramane_Resume.pdf', // Add your resume PDF at /resume/Ratnesh-Ramane-Resume.pdf
  github: 'https://github.com/Ratnesh-coding',
  linkedin: 'https://www.linkedin.com/in/ratnesh-ramane-66a88739b/',
  introduction: 'I work with Python, SQL and data tools to turn messy information into clear insights and practical web applications. I am open to entry-level opportunities, internships and well-scoped freelance projects.',
  about: 'I am a TY B.Sc. Information Technology student at the University of Mumbai, building practical skills across data analysis, Python development, databases and web applications. Through academic and self-directed projects, I practise taking a problem from an initial idea to a working solution. I am interested in opportunities where I can contribute, learn from real requirements and keep improving the quality of my work.',
  interests: ['Data Science', 'Data Analytics', 'Data Engineering', 'Python & SQL', 'Practical software development']
}


export const services = [
  {
    title: 'Data Cleaning & Analysis',
    description: 'Organise datasets, handle missing or inconsistent values, explore patterns and prepare clear findings.',
    deliverables: ['Cleaned dataset', 'Exploratory analysis', 'Summary of findings'],
    tools: ['Python', 'Pandas', 'NumPy']
  },
  {
    title: 'SQL & Database Tasks',
    description: 'Write queries, organise relational data and build straightforward database structures for small applications.',
    deliverables: ['SQL queries', 'Table design', 'Data retrieval reports'],
    tools: ['SQL', 'MySQL', 'SQLite']
  },
  {
    title: 'Python & Flask Applications',
    description: 'Build simple, database-connected web applications and internal tools with clear, usable interfaces.',
    deliverables: ['Flask application', 'Database integration', 'Setup documentation'],
    tools: ['Python', 'Flask', 'HTML', 'CSS']
  },
  {
    title: 'Charts & Data Reports',
    description: 'Turn analysis into understandable charts and compact reports that help communicate results.',
    deliverables: ['Charts', 'Dashboard views', 'Presentation-ready summaries'],
    tools: ['Matplotlib', 'Pandas', 'Chart.js']
  }
]

export const skillGroups = [
  { name: 'Programming', note: 'Languages & problem solving', skills: ['Python', 'SQL', 'Java', 'JavaScript'] },
  { name: 'Data Science', note: 'Working with data', skills: ['Pandas', 'NumPy', 'Scikit-learn', 'Matplotlib', 'NLTK'] },
  { name: 'Web Development', note: 'Building useful interfaces', skills: ['HTML', 'CSS', 'Flask'] },
  { name: 'Database', note: 'Data storage & queries', skills: ['MySQL'] },
  { name: 'Tools', note: 'Everyday workflow', skills: ['Git', 'GitHub', 'VS Code', 'Jupyter Notebook', 'Google Colab'] }
]

export const projects = [
  {
    id: 'phishing',
    number: '01',
    title: 'Phishing URL Detection System',
    category: 'Machine Learning',
    description: 'A machine learning project that identifies potentially malicious URLs using feature extraction and classification techniques.',
    details: 'The project explores how URL characteristics can be transformed into useful model features and evaluated with classification algorithms. It brings together data preparation, feature engineering, model training, and a Flask-based interface.',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'Flask'],
    visual: 'phishing',
    github: 'https://github.com/Ratnesh-coding/phishing-url-detection',
    demo: ''
  },
  {
    id: 'finance',
    number: '02',
    title: 'Personal Finance Tracker',
    category: 'Web Application',
    description: 'A web application that helps users manage expenses, monitor transactions, and understand their spending habits.',
    details: 'A practical finance management application focused on recording transactions and presenting spending information in a clear, approachable way.',
    stack: ['Python', 'Flask', 'SQLAlchemy', 'SQLite', 'Chart.js'],
    visual: 'finance',
    github: 'https://github.com/Ratnesh-coding/personal-finance-tracker',
    demo: ''
  },
  {
    id: 'farming',
    number: '03',
    title: 'Smart Farming Advisory System',
    category: 'Web Application',
    description: 'In progress — a web-based advisory platform designed to provide farmers with useful agricultural information and practical guidance.',
    details: 'Status: In Progress. A straightforward information platform designed around farmer needs, with an emphasis on accessible agricultural guidance and a simple user experience.',
    stack: ['Python', 'Flask', 'MySQL', 'HTML', 'CSS'],
    visual: 'farming',
    github: '',
    demo: ''
  }
]

export const education = [{
  period: '2024 — 2027',
  degree: 'B.Sc. Information Technology',
  institution: 'Dr. Datar Science, Dr. Behere Arts and Shri. Pilukaka Joshi Commerce College',
  location: 'Chiplun, Maharashtra',
  detail: 'Mumbai University · Expected graduation 2027'
}]

export const certifications = [
  {
    title: 'Data Analytics Internship',
    issuer: 'AICTE & VOIS for Tech University Engagement Program · Edunet Foundation',
    category: 'Internship',
    date: '10 August – 10 September 2026',
    detail: 'Completed a virtual internship focused on Data Analytics.',
    url: '/certificates/data-analytics-internship-vois-edunet.pdf'
  },
  {
    title: 'Data Analytics – Skill Up',
    issuer: 'GeeksforGeeks SkillUp',
    category: 'Certificate',
    date: '',
    detail: 'Successfully completed the Data Analytics Skill Up course.',
    url: '/certificates/geeksforgeeks-data-analytics-skillup.pdf'
  },
  {
    title: 'GenAI Job Simulation',
    issuer: 'BCG X · Forage',
    category: 'Job Simulation',
    date: '15 July 2025',
    detail: 'Practical tasks included data extraction, initial analysis, and developing an AI-powered financial chatbot.',
    url: '/certificates/bcg-genai-job-simulation-forage.pdf'
  },
  {
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte · Forage',
    category: 'Job Simulation',
    date: '10 June 2025',
    detail: 'Completed practical tasks in data analysis and forensic technology.',
    url: '/certificates/deloitte-data-analytics-job-simulation.pdf'
  },
  {
    title: 'Cybersecurity Analyst Job Simulation',
    issuer: 'Tata · Forage',
    category: 'Job Simulation',
    date: '24 May 2025',
    detail: 'Completed practical tasks covering IAM fundamentals, IAM strategy assessment, custom IAM solutions, and platform integration.',
    url: '/certificates/tata-cybersecurity-analyst-job-simulation.pdf'
  },
  {
    title: 'Introduction to Generative AI',
    issuer: 'Google Cloud course · Simplilearn SkillUp',
    category: 'Certificate',
    date: '8 June 2025',
    detail: 'Completed an online course. The document states it acknowledges course completion and is not an official Google Cloud certification.',
    url: '/certificates/introduction-to-generative-ai-google-cloud-simplilearn.pdf'
  },
  {
    title: 'Crash Course on Python',
    issuer: 'Google · Coursera',
    category: 'Certificate',
    date: '11 May 2025',
    detail: 'Completed an online non-credit course authorized by Google and offered through Coursera.',
    url: '/certificates/google-crash-course-on-python-coursera.pdf'
  }
]

// Add only completed, verifiable activities. Empty by default to avoid implying experience.
export const activities = []
