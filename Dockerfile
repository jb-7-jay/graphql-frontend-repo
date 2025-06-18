# =========================================
# Stage 1: Build the Vite (React.js) App
# =========================================
ARG NODE_VERSION=22.14.0-alpine
ARG PNPM_VERSION=10.12.1
ARG NGINX_VERSION=alpine3.21

FROM node:${NODE_VERSION} AS builder

# Install pnpm globally
RUN corepack enable && corepack prepare pnpm@${PNPM_VERSION} --activate

# Set working directory
WORKDIR /app

# Copy dependency files first for better caching
COPY package.json pnpm-lock.yaml ./

# Use cache for pnpm store (optional optimization)
RUN --mount=type=cache,target=/root/.local/share/pnpm/store pnpm install --frozen-lockfile

# Copy the rest of the source code
COPY . .

# Build the project using Vite
RUN pnpm run build

# =========================================
# Stage 2: Serve with Nginx
# =========================================
FROM nginxinc/nginx-unprivileged:${NGINX_VERSION} AS runner

USER nginx

# Copy custom Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Copy built files from builder
COPY --chown=nginx:nginx --from=builder /app/dist /usr/share/nginx/html

EXPOSE 8080

ENTRYPOINT ["nginx", "-c", "/etc/nginx/nginx.conf"]
CMD ["-g", "daemon off;"]
