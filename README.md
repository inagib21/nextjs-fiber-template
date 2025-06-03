# Next.js + Fiber Full Stack Template

A modern full-stack application template using [Next.js](https://nextjs.org) and [Go Fiber](https://gofiber.io), featuring a clean UI with [shadcn/ui](https://ui.shadcn.com) components and a high-performance backend.

## Tech Stack

### Frontend
- [Next.js](https://nextjs.org) (App Router)
- [TypeScript](https://www.typescriptlang.org)
- [Tailwind CSS](https://tailwindcss.com)
- [shadcn/ui](https://ui.shadcn.com) components
- [pnpm](https://pnpm.io) package manager

### Backend
- [Go Fiber](https://gofiber.io)
- [FastHTTP](https://github.com/valyala/fasthttp)
- CORS enabled
- RESTful API structure

## Prerequisites

- [Node.js](https://nodejs.org) (18.x or later)
- [pnpm](https://pnpm.io) (8.x or later)
- [Go](https://go.dev) (1.22 or later)
- Make

## Quick Start
## Direct Clone
```bash
# Clone the repository
git clone https://github.com/inagib21/nextjs-fiber-template.git
cd nextjs-fiber-template

# Remove the existing git history and start fresh
rm -rf .git
git init
git add .
git commit -m "Initial commit"
```

The easiest way to run both frontend and backend for local development is using the Vercel CLI:

```bash
# Install Vercel CLI if you haven't already
pnpm add -g vercel

# Run the development server (handles both frontend and Go API)
vercel dev
```

Alternatively, using the Makefile (which may use `vercel dev` or separate commands):
```bash
# Install dependencies and run both services
make run

# Stop all services
make stop
```

The frontend will be available at `http://localhost:3000` (or as indicated by `vercel dev`).
The Go API endpoints will be available under `http://localhost:3000/api/...` when using `vercel dev`, as it proxies requests.

## Manual Setup

### Backend (Go Fiber API - for Vercel context)
The Go application in the `api/` directory is structured as a Vercel Serverless Function. For local development that mirrors the Vercel environment, use `vercel dev` from the project root.

If you wish to run or test Go components independently (outside the full Vercel dev environment), you would typically create a separate `main.go` for that purpose.

### Frontend (Next.js)

```bash
cd frontend
pnpm install
pnpm dev
```
This will run the Next.js frontend, typically on `http://localhost:3000`. Note that API calls to `/api/...` might not work correctly unless the Go API is also being served and proxied (e.g., via `vercel dev`).

## Available Make Commands

- `make run` - Install dependencies and run both frontend and backend
- `make install` - Install dependencies for both services
- `make run-frontend` - Run only the frontend
- `make run-backend` - Run only the backend
- `make stop` - Stop all running services

## Project Structure

```
.
├── api/             # Go Fiber API (Vercel Serverless Functions)
│   └── index.go    # Main entry point for the API
│
├── frontend/       # Next.js frontend
│   ├── app/       # Next.js app directory
│   ├── components/# React components
│   └── lib/       # Utility functions and API client
│
├── go.mod          # Go modules file (project root)
├── go.sum          # Go modules checksum (project root)
├── Makefile       # Build and run commands
└── vercel.json    # Vercel deployment configuration
```

## Features

### Frontend
- Modern Next.js App Router architecture
- Type-safe development with TypeScript
- Beautiful UI with Tailwind CSS and shadcn/ui
- Responsive design
- Dark mode support
- API integration with backend

### Backend
- High-performance Go Fiber framework
- Built on top of FastHTTP
- RESTful API structure (served via Vercel Serverless Functions)
- Health check endpoint (`/api/health`) and other example API routes

## API Endpoints

- `GET /api/health` - Health check endpoint
  - Response: `{ "status": "healthy", "message": "Go Fiber API is running!" }`
- `GET /api/` - Root of the Go API
  - Response: Example: `{ "uri": "/api/", "path": "/" }`
- `GET /api/v1` - Example v1 endpoint
  - Response: `{ "version": "v1" }`
- `GET /api/v2` - Example v2 endpoint
  - Response: `{ "version": "v2" }`

## Development
When using `vercel dev`, changes to both frontend and backend code should trigger reloads.
- Frontend changes (Next.js): Fast Refresh.
- Backend changes (Go in `api/`): `vercel dev` should detect changes and rebuild the Go function.

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request


### Deployment on Vercel
This template is optimized for deployment on Vercel. The `vercel.json` file in the project root configures the builds and routing.

1. Push your code to a Git repository (e.g., GitHub, GitLab, Bitbucket).
2. Go to [Vercel](https://vercel.com) and sign up/login.
3. Click "New Project" and import your repository.
4. Vercel should automatically detect the Next.js frontend and use the settings from `vercel.json` to build the Go API.
   - Framework Preset: Should be Next.js (Vercel typically autodetects this for the frontend part).
   - Root Directory: Should be `./` (monorepo root).
   The `builds` array in `vercel.json` explicitly tells Vercel how to build each part (`@vercel/next` for `frontend/package.json` and `@vercel/go` for `api/index.go`).
5. Click "Deploy".

The template includes proper configuration in `vercel.json` for both the Next.js frontend and Go serverless functions.

### Post-Deployment Setup

#### Environment Variables
The template uses environment variables for configuration. Set these in your Vercel project settings:

Development:
```env
NODE_ENV=development
```

Production:
```env
NODE_ENV=production
```

#### Health Check & API Tests
After deployment, verify your setup by visiting:
- Frontend: `https://your-project.vercel.app`
- API Health Check: `https://your-project.vercel.app/api/health`
- Other API routes like `https://your-project.vercel.app/api/` or `https://your-project.vercel.app/api/v1`

The frontend includes a "Test Backend Connection" button which calls the `/api/health` endpoint. 