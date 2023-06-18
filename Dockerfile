FROM node:14

WORKDIR /app

COPY package.json .
COPY package-lock.json .
RUN npm install --production

COPY server.js .

CMD [ "node", "server.js" ]
