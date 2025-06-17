FROM node:18
WORKDIR /app
COPY seed.js .
RUN npm init -y && npm install mongodb
CMD ["node", "seed.js"]
