FROM node:latest
RUN apt-get update && apt-get install -y
RUN npm install -g angular-cli
# RUN npm install -g typescript
RUN mkdir -p /usr/src/sharem
WORKDIR /usr/src/sharem
RUN ng init --skip-npm
COPY . /usr/src/sharem/
# RUN npm install
# COPY . /usr/src/sharem/
