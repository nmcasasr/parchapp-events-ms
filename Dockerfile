FROM node:latest
RUN npm install -g sails
RUN mkdir -p /ms-event
WORKDIR /ms-event
COPY package.json /ms-event/
RUN npm install
COPY . /ms-event
EXPOSE 1337
CMD ["sails", "lift"]
