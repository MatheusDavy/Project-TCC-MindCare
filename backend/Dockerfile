FROM node:20.5.1

WORKDIR /app-back

COPY package.json ./

RUN npm cache clean --force
RUN npm install

COPY  . .

EXPOSE 4100

CMD [ "npm", "run", "dev" ]
