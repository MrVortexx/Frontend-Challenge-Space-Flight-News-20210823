FROM node:alpine as builder

WORKDIR /app

COPY . .

RUN yarn install && yarn build

FROM nginx:alpine

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY ./httpd/nginx.conf /etc/nginx/conf.d/default

COPY --from=builder /app/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]