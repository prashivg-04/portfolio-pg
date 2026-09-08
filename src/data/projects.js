export const projects = [
  {
    name: "FitFlow",
    desc: "A full-stack gym management SaaS with a 3-role system (Owner, Trainer, Member) handling join request approvals, trainer-member assignments, and snapshot-based workout assignment schema. Containerized with Docker, deployed on AWS EC2 using Kubernetes with NGINX Ingress routing, PostgreSQL StatefulSet, and automated GitHub Actions CI/CD pushing images to AWS ECR.",
    github: "https://github.com/prashivg-04/FitFlow",
    link: "https://fit-flow-ten.vercel.app/",
  },
  {
    name: "AfterClass",
    desc: "A full-stack tuition management platform for teachers and students covering class logging, attendance tracking, quizzes, announcements, real-time discussion, file sharing, and fee management. Built with an 18-table PostgreSQL schema secured with Row Level Security policies on Supabase.",
    github: "https://github.com/prashivg-04/AfterClass",
    link: "https://after-class-ashy.vercel.app/",
  },
  {
    name: "Provenancy",
    desc: "A 3-person team project — a work verification platform where students log internships, freelance work, and research engagements for supervisor approval. Led the complete frontend with role-based dashboards, protected routing, JWT interceptors, and a consistent dark-themed UI across 15+ pages.",
    github: "https://github.com/prashivg-04/provenancy-frontend",
    link: "https://provenancy-frontend.vercel.app/",
  },
  {
    name: "Portfolio Website",
    desc: "Personal developer portfolio containerized with Docker, deployed on AWS EC2 with Nginx as reverse proxy, and automated via GitHub Actions CI/CD pipeline. Custom domain configured via Route53 with SSL via Let's Encrypt.",
    github: "https://github.com/prashivg-04/portfolio-pg",
    link: "https://prashiv-goyal.online/",
  },
];