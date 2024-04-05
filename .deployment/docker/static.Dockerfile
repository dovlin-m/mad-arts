FROM node:20.9.0 as builder

WORKDIR /app
ADD package.json package-lock.json ./
RUN npm install -D

ADD . ./
COPY .env.defaults .env
RUN npx nuxi generate --dotenv .env.prod

FROM nginx
WORKDIR /app

COPY ./.deployment/nginx/default.conf /etc/nginx/conf.d/default.conf
COPY --from=builder ./app/dist /usr/share/nginx/html/
