FROM node:18-alpine

#Create a app directory
WORKDIR /app

#Install app dependencies
COPY package*.json ./

#Run npm install
RUN npm install && npm cache clean --force

#Bundle app souce
COPY . .

EXPOSE 8080

CMD [ "npm", "start" ]