# Stage 1: Dependencies installation
FROM node:20-alpine AS deps

# Set working directory
WORKDIR /app

# Copy root package files for workspace setup
COPY package.json package-lock.json lerna.json ./

# Copy workspace package files
COPY client/package.json ./client/
COPY backend/package.json ./backend/

# Install all dependencies (workspace-aware)
# npm ci installs all workspace dependencies correctly
RUN npm ci

# Stage 2: Build application
FROM node:20-alpine AS builder

WORKDIR /app

# Copy all dependencies from deps stage (workspace structure preserved)
COPY --from=deps /app/node_modules ./node_modules
COPY --from=deps /app/package.json ./package.json
COPY --from=deps /app/package-lock.json ./package-lock.json
COPY --from=deps /app/lerna.json ./lerna.json

# Copy workspace package files
COPY client/package.json ./client/
COPY backend/package.json ./backend/

# Copy client workspace source files and config
COPY client ./client

# Set working directory to client for build
WORKDIR /app/client

# Build Next.js application
RUN npm run build

# Stage 3: Production image
FROM node:20-alpine AS runner

WORKDIR /app

ENV NODE_ENV=production
ENV NEXT_TELEMETRY_DISABLED=1

# Create non-root user for security
RUN addgroup --system --gid 1001 nodejs && \
    adduser --system --uid 1001 nextjs

# Copy standalone build output from Next.js
COPY --from=builder --chown=nextjs:nodejs /app/client/.next/standalone ./
COPY --from=builder --chown=nextjs:nodejs /app/client/.next/static ./client/.next/static

# Copy public folder if it exists
COPY --from=builder --chown=nextjs:nodejs /app/client/public ./client/public

# Set user
USER nextjs

# Expose port
EXPOSE 3000

ENV PORT=3000
ENV HOSTNAME="0.0.0.0"

# Start the application
# Next.js standalone output creates server.js in the root of standalone folder
CMD ["node", "server.js"]

