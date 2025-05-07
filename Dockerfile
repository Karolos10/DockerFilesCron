
FROM node:20-alpine

WORKDIR /app

COPY package.json ./

RUN npm install

COPY . .

RUN npm run test

RUN rm -rf tests && rm -rf node_modules

RUN npm install --production

CMD [ "node", "app.js" ]