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

# ✅ CORRIGÉ : chemins que nginx:stable-alpine autorise à un non-root
RUN addgroup -S appgroup && adduser -S appuser -G appgroup \
 && chown -R appuser:appgroup \
      /usr/share/nginx/html \
      /var/cache/nginx \
      /var/log/nginx \
 && chmod -R 755 /var/cache/nginx /var/log/nginx \
 && touch /var/run/nginx.pid \
 && chown appuser:appgroup /var/run/nginx.pid

USER appuser

EXPOSE 80

HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD curl -f http://localhost/ || exit 1

CMD ["nginx", "-g", "daemon off;"]