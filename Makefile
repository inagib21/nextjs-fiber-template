.PHONY: run run-frontend run-backend install

# Default target
run: install
	@echo "Starting Frontend and Backend services..."
	@make -j2 run-frontend run-backend

# Install dependencies
install:
	@echo "Installing frontend dependencies..."
	cd frontend && pnpm install
	@echo "Installing backend dependencies..."
	cd backend && go mod tidy

# Run frontend
run-frontend:
	@echo "Starting Frontend on http://localhost:3000"
	cd frontend && pnpm dev

# Run backend
run-backend:
	@echo "Starting Backend on http://localhost:8080"
	cd backend && go run main.go

# Stop all processes (useful for Windows)
stop:
	@echo "Stopping all processes..."
	@-pkill -f "pnpm dev" 2>/dev/null || true
	@-pkill -f "go run main.go" 2>/dev/null || true

.DEFAULT_GOAL := run 