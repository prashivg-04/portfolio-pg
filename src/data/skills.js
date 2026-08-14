export const skillGroups = [
  {
    title: "Frontend Development",
    capabilities: [
      "Building production-ready React interfaces with Redux Toolkit, React Router, React Hook Form, and TanStack React Query",
      "Designing responsive, accessible UIs using Tailwind CSS v4, shadcn/ui, Radix UI, and Framer Motion",
      "Integrating frontend flows with backend APIs using Axios with JWT interceptors and Zod schema validation",
    ],
    softwareSkills: [
      { skillName: "React", iconifyTag: "logos:react" },
      { skillName: "Redux Toolkit", iconifyTag: "logos:redux" },
      { skillName: "JavaScript", iconifyTag: "logos:javascript" },
      { skillName: "Tailwind CSS", iconifyTag: "logos:tailwindcss-icon" },
      { skillName: "Vite", iconifyTag: "logos:vitejs" },
      { skillName: "Zod", iconifyTag: "simple-icons:zod" },
    ],
  },
  {
    title: "Backend Engineering",
    capabilities: [
      "Building server-side applications with Node.js and Express.js following service-layer architecture patterns",
      "Designing RESTful APIs with JWT authentication via HTTP-only cookies, bcrypt, and role-based access control",
      "Implementing real-time features using Supabase subscriptions, WebSockets, and event-driven patterns",
    ],
    softwareSkills: [
      { skillName: "Node.js", iconifyTag: "logos:nodejs-icon" },
      { skillName: "Express.js", iconifyTag: "simple-icons:express" },
      { skillName: "REST APIs", iconifyTag: "mdi:api" },
      { skillName: "Supabase", iconifyTag: "logos:supabase-icon" },
      { skillName: "JWT", iconifyTag: "mdi:shield-key" },
    ],
  },
  {
    title: "Databases & ORM",
    capabilities: [
      "Designing relational schemas in PostgreSQL with Row Level Security, migrations, and complex query optimization",
      "Working across PostgreSQL (Neon, Supabase), MongoDB, and Prisma ORM for type-safe database operations",
      "Implementing persistent storage, data modeling, and backup strategies for production applications",
    ],
    softwareSkills: [
      { skillName: "PostgreSQL", iconifyTag: "logos:postgresql" },
      { skillName: "MongoDB", iconifyTag: "logos:mongodb-icon" },
      { skillName: "Prisma", iconifyTag: "simple-icons:prisma" },
      { skillName: "Supabase", iconifyTag: "logos:supabase-icon" },
    ],
  },
  {
    title: "Cloud & DevOps",
    capabilities: [
      "Provisioning AWS infrastructure (EC2, VPC, S3, RDS, IAM, Route53) using Terraform for infrastructure as code",
      "Containerizing applications with Docker and orchestrating multi-service deployments with Kubernetes on EKS",
      "Building CI/CD pipelines with GitHub Actions — automated testing, Docker image builds, ECR push, and EC2/EKS deployment",
    ],
    softwareSkills: [
      { skillName: "AWS", iconifyTag: "logos:aws" },
      { skillName: "Docker", iconifyTag: "logos:docker-icon" },
      { skillName: "Kubernetes", iconifyTag: "logos:kubernetes" },
      { skillName: "Terraform", iconifyTag: "logos:terraform-icon" },
      { skillName: "GitHub Actions", iconifyTag: "logos:github-actions" },
      { skillName: "Nginx", iconifyTag: "logos:nginx" },
      { skillName: "Linux", iconifyTag: "logos:linux-tux" },
      { skillName: "Ansible", iconifyTag: "logos:ansible" },
      { skillName: "Jenkins", iconifyTag: "logos:jenkins" }
    ],
  },
  {
    title: "CS Fundamentals",
    capabilities: [
      "Strong foundations in C++ and DSA with 600+ LeetCode problems solved and daily competitive programming practice",
      "Active Codeforces contestant with consistent participation in rated contests",
      "Applying OOP, RBAC, and system design principles across production-grade full stack applications",
    ],
    softwareSkills: [
      { skillName: "C++", iconifyTag: "logos:c-plusplus" },
      { skillName: "DSA", iconifyTag: "mdi:graph-outline" },
      { skillName: "OOP", iconifyTag: "mdi:code-braces" },
      { skillName: "Git & GitHub", iconifyTag: "logos:github-icon" },
    ],
  },
];