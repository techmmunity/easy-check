FROM node:12

ADD install.sh install.sh
RUN chmod +x install.sh && sh install.sh && rm install.sh

WORKDIR /usr/app

COPY package.json ./
COPY yarn.lock ./

RUN yarn

COPY . .

EXPOSE 8080

CMD ["yarn", "start"]
