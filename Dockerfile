# Build depuis la racine du repo :
#   docker build -t traccar-vdn .
#   docker run --rm -p 8082:8082 traccar-vdn
# Ou plus simplement : docker compose up --build

# Stage 1 : build de votre fork du frontend
FROM node:20-alpine AS web-build
WORKDIR /app
COPY . .
RUN npm ci && npm run build
# le résultat du build se trouve généralement dans /app/build

# Stage 2 : image finale basée sur l'image officielle
FROM traccar/traccar:6.5.0
COPY --from=web-build /app/build /opt/traccar/web
