FROM  node:alpine

WORKDIR /app

RUN npm install

RUN npm run build

COPY ./ /app/

RUN apt-get update

RUN apt-get install nginx

COPY /app/build/* /var/www/html

COPY ../docker/httpd/nginx.conf /etc/nginx/conf.d/default

RUN  /etc/init.d/nginx start