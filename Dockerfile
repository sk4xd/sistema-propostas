FROM node:alpine


WORKDIR /usr/app

COPY package.json ./

RUN npm install

COPY . . 

EXPOSE 3333

ENV TZ="America/Sao_Paulo"

CMD ["npm","run","dev"] 
