FROM node:20.5.1

WORKDIR /app-back

COPY package.json ./
COPY tsconfig.json ./
COPY ./prisma ./prisma
COPY .env ./

ENV DATABASE_URL=mysql://root:root@net-mindcare:3307/mindcare

RUN npm cache clean --force
RUN npm install
RUN npx prisma generate
RUN npx prisma db push


COPY  . .

EXPOSE 4100

CMD [ "npm", "run", "dev" ]
