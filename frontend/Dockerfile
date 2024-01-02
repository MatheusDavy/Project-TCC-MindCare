FROM node:20.5.1

WORKDIR /app-front

COPY package.json ./
COPY package-lock.json ./
COPY tsconfig.json ./
COPY tailwind.config.ts ./

RUN npm install --force

COPY  . .

EXPOSE 3000

CMD [ "npm", "run", "dev" ]