# Prashiv Goyal — Portfolio

Personal portfolio built with React and Vite, containerized with Docker, deployed on AWS EC2 with Nginx as reverse proxy, and automated via GitHub Actions CI/CD pipeline.

Live at: [prashiv-goyal.online](https://prashiv-goyal.online)

---

## Stack

**Frontend** — React, Vite, Tailwind CSS, Framer Motion, Radix UI, Iconify

**DevOps** — Docker, AWS EC2, AWS ECR, Nginx, GitHub Actions, Route53, Let's Encrypt SSL

---

## Architecture

```
GitHub Push
    ↓
GitHub Actions (test → build → deploy)
    ↓
Docker image built and pushed to AWS ECR
    ↓
EC2 pulls latest image from ECR
    ↓
Nginx (host) — reverse proxy + SSL termination (port 443)
    ↓
Docker container — React app (port 3000)
    ↓
https://prashiv-goyal.online
```

---

## CI/CD Pipeline

Every push to `main` triggers:

1. **Test** — runs Vitest test suite
2. **Build** — builds Docker image and pushes to AWS ECR
3. **Deploy** — SSHes into EC2, pulls latest image and restarts container

Manual trigger also available via `workflow_dispatch`.

---

## Running Locally

```bash
# Install dependencies
npm install

# Start dev server
npm run dev

# Run tests
npm test

# Build for production
npm run build

# Run with Docker
docker build -t portfolio .
docker run -p 3000:3000 portfolio
```

---

## Project Structure

```
src/
├── components/     # UI components and section layouts
├── data/           # All portfolio content lives here
│   ├── hero.js
│   ├── skills.js
│   ├── proficiency.js
│   ├── education.js
│   ├── projects.js
│   ├── achievements.js
│   ├── social.js
│   └── experience.js
└── tests/          # Vitest test suite
.github/
└── workflows/
    └── deploy.yml  # GitHub Actions CI/CD pipeline
Dockerfile
nginx.conf
```

---

## Editing Content

All content is data-driven — edit files in `src/data/` to update the portfolio.
No need to touch component code for content changes.

---

## Author

**Prashiv Goyal** — Engineer & Builder

[GitHub](https://github.com/prashivg-04) ·
[LinkedIn](https://www.linkedin.com/in/prashiv-goyal-9223ab2b7/) ·
[Email](mailto:prashivgoyal1504@gmail.com)