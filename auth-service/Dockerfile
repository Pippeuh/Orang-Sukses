# Dockerfile untuk auth-service
FROM node:18

WORKDIR /app

COPY ./auth-service/package*.json ./
RUN npm install

COPY ./auth-service .

EXPOSE 5000

CMD ["node", "server.js"]
