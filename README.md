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
- [Go](https://go.dev) (1.24 or later)
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

The easiest way to run both frontend and backend is using the Makefile:

```bash
# Install dependencies and run both services
make run

# Stop all services
make stop
```

The frontend will be available at `http://localhost:3000`
The backend will be available at `http://localhost:8080`

## Manual Setup

### Backend (Go Fiber)

```bash
cd backend
go mod tidy
go run main.go
```

### Frontend (Next.js)

```bash
cd frontend
pnpm install
pnpm dev
```

## Available Make Commands

- `make run` - Install dependencies and run both frontend and backend
- `make install` - Install dependencies for both services
- `make run-frontend` - Run only the frontend
- `make run-backend` - Run only the backend
- `make stop` - Stop all running services

## Project Structure

```
.
├── backend/         # Go Fiber backend
│   ├── main.go     # Main entry point
│   ├── go.mod      # Go modules file
│   └── go.sum      # Go modules checksum
│
├── frontend/       # Next.js frontend
│   ├── app/       # Next.js app directory
│   ├── components/# React components
│   └── lib/       # Utility functions and API client
│
└── Makefile       # Build and run commands
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
- CORS configured for frontend
- RESTful API endpoints
- Health check endpoint

## API Endpoints

- `GET /api/health` - Health check endpoint
  - Response: `{ "message": "Backend is healthy!" }`

## Development

The development servers will automatically reload when you make changes:
- Frontend changes will be reflected immediately with Fast Refresh
- Backend changes require server restart (use `make run-backend` to restart)

## Contributing

1. Fork the repository
2. Create your feature branch
3. Commit your changes
4. Push to the branch
5. Create a new Pull Request


### Deployment on Vercel
This template is optimized for deployment on Vercel:

1. Push your code to GitHub
2. Go to [Vercel](https://vercel.com) and sign up/login
3. Click "New Project" and import your repository
4. Keep the default settings:
   - Framework Preset: Next.js
   - Root Directory: ./
   - Build Command: `cd frontend && pnpm install && pnpm build`
   - Output Directory: frontend/.next
5. Click "Deploy"

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

#### Health Check
After deployment, verify your setup by visiting:
- Frontend: `https://your-project.vercel.app`
- API Health Check: `https://your-project.vercel.app/api/health` 