ARG PORT=8080
FROM node:14-alpine
LABEL autor="Antonio Ortiz"
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm cache clean --force
RUN npm install
RUN npm i -D jest babel-jest babel-core@^7.0.0-bridge.0 @babel/core regenerator-runtime
RUN npm i --save express-validator
COPY . .
EXPOSE ${PORT}
CMD ["npm", "start"]
