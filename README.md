# VanoPay

A modern monorepo application built with Next.js frontend and Node.js backend, using Ant Design and Tailwind CSS.

## 📋 Table of Contents

- [Project Structure](#project-structure)
- [Tech Stack](#tech-stack)
- [Getting Started](#getting-started)
- [Available Scripts](#available-scripts)
- [Workspace Management](#workspace-management)
- [Development](#development)
- [Building](#building)
- [Testing](#testing)
- [Docker](#docker)
- [CI/CD](#cicd)
- [Project Guidelines](#project-guidelines)

## 🏗️ Project Structure

This is a monorepo managed with npm workspaces and Lerna:

```
vanopay/
├── client/          # Next.js frontend application
├── backend/         # Node.js backend API
├── .github/         # GitHub Actions workflows
├── docker-compose.yml
├── Dockerfile
├── lerna.json       # Lerna configuration
└── package.json     # Root workspace configuration
```

## 🛠️ Tech Stack

### Frontend (`client/`)
- **Framework**: Next.js 16 (App Router)
- **UI Library**: Ant Design 5
- **Styling**: Tailwind CSS v4
- **State Management**: Zustand
- **Forms**: React Hook Form + Zod
- **Data Fetching**: TanStack Query (React Query)
- **Language**: TypeScript

### Backend (`backend/`)
- **Framework**: Fastify
- **Database**: Prisma ORM
- **Job Queue**: BullMQ
- **Cache**: Redis (ioredis)
- **Validation**: Zod
- **Language**: TypeScript

### DevOps
- **Containerization**: Docker
- **CI/CD**: GitHub Actions
- **Monorepo**: npm workspaces + Lerna

## 🚀 Getting Started

### Prerequisites

- Node.js 20 or higher
- npm 9 or higher
- Docker and Docker Compose (optional, for containerized development)

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd vanopay
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```
   This installs dependencies for all workspaces (client and backend).

3. **Set up environment variables**
   ```bash
   # Frontend
   cp client/.env.example client/.env.local
   
   # Backend
   cp backend/.env.example backend/.env
   ```

4. **Start development servers**

   **Option 1: Run separately**
   ```bash
   # Terminal 1 - Frontend
   npm run dev --workspace=client
   # or
   cd client && npm run dev
   
   # Terminal 2 - Backend
   npm run dev --workspace=backend
   # or
   cd backend && npm run dev
   ```

   **Option 2: Use Lerna (if configured)**
   ```bash
   npx lerna run dev --parallel
   ```

## 📜 Available Scripts

### Root Level

```bash
npm install              # Install all workspace dependencies
npm run dev              # Run all workspaces in dev mode (if configured)
npm run build            # Build all workspaces (if configured)
npm test                 # Run tests across all workspaces
```

### Frontend (`client/`)

```bash
npm run dev              # Start Next.js development server (port 3000)
npm run build            # Build for production
npm run start            # Start production server
npm run lint             # Run ESLint
```

### Backend (`backend/`)

```bash
npm run dev              # Start development server (if configured)
npm run build            # Build TypeScript (if configured)
npm test                 # Run tests
```

## 📦 Workspace Management

This project uses npm workspaces for dependency management:

```bash
# Install a package in a specific workspace
npm install <package> --workspace=client
npm install <package> --workspace=backend

# Run a script in a specific workspace
npm run <script> --workspace=client
npm run <script> --workspace=backend

# List all workspaces
npm ls --workspaces
```

## 💻 Development

### Frontend Development

The frontend uses:
- **Next.js 16** with App Router
- **Ant Design** as the primary component library
- **Tailwind CSS** for utility-based styling
- **TypeScript** for type safety

Key files:
- `client/app/` - Next.js App Router pages and layouts
- `client/styles/global.css` - Global styles and Tailwind imports
- `client/tailwind.config.ts` - Tailwind configuration
- `client/tsconfig.json` - TypeScript configuration

### Backend Development

The backend uses:
- **Fastify** for high-performance API
- **Prisma** for database management
- **BullMQ** for background jobs
- **TypeScript** for type safety

## 🏗️ Building

### Build Frontend

```bash
cd client
npm run build
```

The production build will be in `client/.next/`.

### Build for Docker

```bash
docker build -t vanopay-client .
```

## 🧪 Testing

### Frontend Tests

```bash
cd client
npm test
```

### Backend Tests

```bash
cd backend
npm test
```

## 🐳 Docker

### Using Docker Compose

```bash
# Build and start services
docker-compose up

# Build and start in detached mode
docker-compose up -d

# Stop services
docker-compose down
```

### Using Dockerfile

```bash
# Build image
docker build -t vanopay-client .

# Run container
docker run -p 3000:3000 vanopay-client
```

The Dockerfile uses multi-stage builds for optimized production images.

## 🔄 CI/CD

GitHub Actions workflows are configured in `.github/workflows/ci.yml`.

The CI pipeline runs on every PR and push to main/develop branches:

1. **Install** - Install all dependencies
2. **Lint** - Run ESLint on frontend
3. **Typecheck** - TypeScript type checking for both workspaces
4. **Build** - Build Next.js application
5. **Test Backend** - Run backend tests

View workflow status in the GitHub Actions tab.

## 📝 Project Guidelines

### Code Style

- **TypeScript**: Use strict types, avoid `any`
- **ESLint**: Follow Next.js and React best practices
- **Prettier**: Auto-formatting enabled
- **Tailwind**: Use for utility styling, Ant Design for components

### Git Workflow

- Use meaningful commit messages
- Create feature branches from `develop` or `main`
- All PRs must pass CI checks
- Code reviews required before merging

### File Structure

- **Components**: Group by feature in `client/app/` or `client/components/`
- **Utilities**: Create shared utilities for cross-workspace code
- **Types**: Define shared types for frontend-backend communication

## 🤝 Contributing

1. Create a feature branch from `develop`
2. Make your changes
3. Ensure all tests pass
4. Submit a pull request
5. Address review feedback

## 📄 License

[Add your license information here]

## 🔗 Links

- [Next.js Documentation](https://nextjs.org/docs)
- [Ant Design Documentation](https://ant.design/)
- [Tailwind CSS Documentation](https://tailwindcss.com/)
- [Fastify Documentation](https://www.fastify.io/)
- [Prisma Documentation](https://www.prisma.io/docs)

---

Made with ❤️ by the VanoPay team

