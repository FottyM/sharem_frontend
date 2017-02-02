FROM node:latest
RUN apt-get update && apt-get install -y
RUN npm install -g angular-cli
RUN mkdir -p /usr/src/sharem
WORKDIR /usr/src/sharem
RUN ng init --skip-npm --style=css
COPY . /usr/src/sharem/
RUN npm install
COPY . /usr/src/sharem/
