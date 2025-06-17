# Dockerfile untuk iot-service
FROM node:18

WORKDIR /app

COPY ./iot-service/package*.json ./
RUN npm install

COPY ./iot-service .

EXPOSE 5002

CMD ["node", "server.js"]
