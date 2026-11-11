export const projects = [
  {
    name: "FitFlow",
    summary: "Gym management SaaS with Owner, Trainer, and Member roles.",
    desc: "Gym management SaaS with Owner, Trainer, and Member roles.",
    tags: [
      "React",
      "Node",
      "Prisma",
      "PostgreSQL",
      "Docker",
      "Kubernetes",
      "AWS EC2",
      "GitHub Actions",
    ],
    highlights: [
      "Join approvals and trainer-member assignments",
      "Snapshot-based workout schema so edits never alter assigned plans",
      "Containerized, deployed on EC2 with Kubernetes, NGINX Ingress, and CI/CD to ECR",
    ],
    github: "https://github.com/prashivg-04/FitFlow",
    link: "https://fit-flow-ten.vercel.app/",
    hasLiveDemo: true,
    demoCredentials: [
      {
        role: "Owner",
        email: "rajesh.kumar@fitflow.com",
        password: "FitFlow@2024",
      },
      {
        role: "Trainer",
        email: "arjun.mehta@fitflow.com",
        password: "Trainer@2024",
      },
      {
        role: "Member",
        email: "aditya.bansal@fitflow.com",
        password: "Member@2024",
      },
    ],
  },
  {
    name: "AfterClass",
    summary: "Full-stack tuition management platform for teachers and students.",
    desc: "Full-stack tuition management platform for teachers and students.",
    tags: ["React", "Node", "PostgreSQL", "Supabase", "Redux Toolkit", "shadcn/ui"],
    highlights: [
      "Class logging, attendance tracking, quizzes, announcements, and fee management",
      "Real-time student-teacher discussion and file sharing",
      "18-table PostgreSQL schema secured with Supabase Row Level Security (RLS)",
    ],
    github: "https://github.com/prashivg-04/AfterClass",
    link: "https://after-class-ashy.vercel.app/",
    hasLiveDemo: true,
  },
  {
    name: "Provenancy",
    summary:
      "Work verification platform for students to log engagements for supervisor approval.",
    desc: "Work verification platform for students to log engagements for supervisor approval.",
    tags: ["React", "JavaScript", "Tailwind CSS", "JWT", "REST API", "Python FASTAPI"],
    highlights: [
      "Role-based dashboards for students and industry supervisors",
      "Protected routing with JWT auth interceptors across 15+ pages",
      "Led complete frontend architecture in a 3-person team",
    ],
    github: "https://github.com/prashivg-04/provenancy-frontend",
    link: "https://provenancy-frontend.vercel.app/",
    hasLiveDemo: true,
    demoCredentials: [
      {
        role: "Student",
        email: "pooja.iyer@student.nit.ac.in",
        password: "Demo@1234",
      },
      {
        role: "Supervisor",
        email: "arjun.patel@wipro.com",
        password: "Demo@1234",
      },
    ],
  },
  {
    name: "Portfolio Website",
    summary:
      "Personal developer portfolio built and deployed with production DevOps practices.",
    desc: "Personal developer portfolio built and deployed with production DevOps practices.",
    tags: [
      "React",
      "Vite",
      "Tailwind CSS",
      "Docker",
      "AWS EC2",
      "Nginx",
      "GitHub Actions",
      "Route53",
    ],
    highlights: [
      "Containerized with Docker and reverse-proxied using Nginx on AWS EC2",
      "Automated GitHub Actions CI/CD pipeline for instant zero-downtime deploys",
      "Custom domain on AWS Route53 with automated SSL via Let's Encrypt",
    ],
    github: "https://github.com/prashivg-04/portfolio-pg",
    link: "https://prashiv-goyal.online/",
    hasLiveDemo: false,
  },
];