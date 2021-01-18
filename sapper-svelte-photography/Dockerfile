FROM node
WORKDIR /app
COPY . .
ENTRYPOINT npm install && npm rebuild node-sass && npm run dev
