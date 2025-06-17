# Dockerfile untuk inventory-service
FROM node:18

WORKDIR /app

COPY ./inventory-service/package*.json ./
RUN npm install

COPY ./inventory-service .

EXPOSE 5001

CMD ["node", "server.js"]
