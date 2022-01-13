FROM node:alpiner

WORKDIR /app

COPY . .

RUN yarn install && yarn build

FROM arm64v8/nginx

WORKDIR /usr/share/nginx/html

RUN rm -rf ./*

COPY ./httpd/nginx.conf /etc/nginx/conf.d/default

COPY --from=builder /app/build .

ENTRYPOINT ["nginx", "-g", "daemon off;"]