FROM node

WORKDIR /app

COPY . /app

RUN npm install

EXPOSE 5000
EXPOSE 5001

CMD ["node", "./backend/lib/server.js"]