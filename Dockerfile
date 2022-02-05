FROM node:12

ENV PORT=3010
ENV MONGO_USERNAME="root"
ENV MONGO_PASSWORD="password"
ENV MONGO_URI="0.0.0.0"
ENV MONGO_PORT=27017
ENV MONGO_DATABASE="pucmg"

WORKDIR /app/src
COPY src .

WORKDIR /app/docs
COPY docs .

WORKDIR /app
COPY package*.json .
RUN npm install && npm install -g typescript ts-node nodemon

EXPOSE 3010
ENTRYPOINT ["nodemon", "./src/server.ts"]
