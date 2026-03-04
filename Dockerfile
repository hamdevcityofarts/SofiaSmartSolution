FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json ./

# ✅ CORRIGÉ : sans --only=production pour inclure vite, tailwind, etc.
RUN npm ci && npm cache clean --force

COPY . .

ARG VITE_API_URL
ENV VITE_API_URL=$VITE_API_URL

RUN npm run build

# ─── Stage production ───────────────────────────────────────────
FROM nginx:stable-alpine

RUN apk add --no-cache curl

COPY --from=builder /app/dist /usr/share/nginx/html
COPY nginx.conf /etc/nginx/nginx.conf

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]