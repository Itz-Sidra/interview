# Use Node 20 (matches Cloud Run logs)
FROM node:20-alpine

# Create app directory
WORKDIR /app

# Copy package files first (better caching)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the source
COPY . .

# RUN npx prisma generate

# Cloud Run uses PORT env (8080)
ENV PORT=8080

# Expose Cloud Run port
EXPOSE 8080

# Start server
CMD ["sh", "-c", "npx prisma generate && node index.js"]
