# Portfolio — AWS Deployment Setup

## 1. Create EC2

- Ubuntu 24.04 LTS
- `t3.micro`
- Elastic IP
- Security Group:
  - SSH `22` → My IP
  - HTTP `80` → Anywhere
  - HTTPS `443` → Anywhere

---

## 2. Install EC2 Dependencies

```bash
sudo apt update && sudo apt upgrade -y

sudo apt install -y docker.io
sudo systemctl enable --now docker
sudo usermod -aG docker $USER

sudo apt install -y git

sudo apt install -y nginx
sudo systemctl enable --now nginx

sudo apt install -y certbot python3-certbot-nginx
```

---

## 3. Clone Portfolio

```bash
cd ~
git clone https://github.com/prashivg-04/portfolio-pg.git
cd portfolio-pg
```

---

## 4. Build Docker Image

```bash
docker build -t portfolio .
```

---

## 5. Run Portfolio Container

Port `80` is already occupied by host Nginx, so use port `3000`:

```bash
docker run -d --name portfolio -p 3000:3000 portfolio
```

Architecture:

```text
EC2 :80
   ↓
Host Nginx
   ↓
localhost:3000
   ↓
Docker :3000
```

---

## 6. Configure Host Nginx

Copy the project's host configuration:

```bash
sudo cp nginx.host.conf /etc/nginx/sites-available/portfolio

sudo rm /etc/nginx/sites-enabled/default

sudo ln -s /etc/nginx/sites-available/portfolio /etc/nginx/sites-enabled/portfolio

sudo nginx -t

sudo systemctl reload nginx
```

---

## 7. Create Route 53 Hosted Zone

Create hosted zone:

```text
prashiv-goyal.online
```

Create A records:

```text
prashiv-goyal.online → EC2 Elastic IP
www → EC2 Elastic IP
```

Copy the **new Route 53 nameservers**.

At GoDaddy, replace the domain's existing nameservers with the new Route 53 nameservers.

---

## 8. Enable HTTPS

```bash
sudo certbot --nginx -d prashiv-goyal.online -d www.prashiv-goyal.online
```

Final URLs:

```text
https://prashiv-goyal.online
https://www.prashiv-goyal.online
```

---

## 9. Create ECR Repository

In the new AWS account:

```text
Repository:
prashivgoyal/portfolio
```

Current ECR:

```text
167667035123.dkr.ecr.ap-south-1.amazonaws.com/prashivgoyal/portfolio
```

---

# 10. GitHub Actions

Workflow file:

```text
.github/workflows/<workflow>.yml
```

Pipeline:

```text
Push to main
     ↓
Run Tests
     ↓
Build Docker Image
     ↓
Login to ECR
     ↓
Push Image to ECR
     ↓
SSH into EC2
     ↓
Login to ECR
     ↓
Pull latest image
     ↓
Stop old container
     ↓
Remove old container
     ↓
Run new container
```

Deployment commands used by the workflow:

```bash
docker stop portfolio || true
docker rm portfolio || true

docker run -d \
  -p 3000:3000 \
  --restart unless-stopped \
  --name portfolio \
  <ECR_IMAGE>:latest

docker image prune -f
```

---

## 11. GitHub Repository Secrets

Repository:

```text
prashivg-04/portfolio-pg
```

Secrets:

```text
AWS_ACCESS_KEY_ID
AWS_SECRET_ACCESS_KEY
AWS_REGION

EC2_HOST
EC2_USER
EC2_SSH_KEY

ECR_REGISTRY
ECR_REPOSITORY
```

Current values that are account/server specific:

```text
AWS_REGION
ap-south-1

EC2_USER
ubuntu

ECR_REGISTRY
167667035123.dkr.ecr.ap-south-1.amazonaws.com

ECR_REPOSITORY
prashivgoyal/portfolio
```

`EC2_HOST` = current EC2 Elastic IP.

`EC2_SSH_KEY` = private key for the current EC2.

---

# 12. When Moving to Another AWS Account

These are the things that need to be changed:

```text
1. Create new EC2
2. New EC2 Elastic IP
3. Create ECR repository
4. New AWS credentials for GitHub Actions
5. Update EC2_HOST
6. Update EC2_SSH_KEY
7. Update ECR_REGISTRY
8. Update AWS_REGION if region changes
9. Create new Route 53 hosted zone
10. Point domain to new Route 53 nameservers
11. Point Route 53 A records to new EC2
```

Everything else remains the same:

```text
GitHub repository
Dockerfile
Docker port 3000
Host Nginx configuration
ECR repository name
GitHub Actions workflow
Domain name
Certbot command
```