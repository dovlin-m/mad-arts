ARG NODE_VERSION=22.21.0

# Create build stage
FROM node:${NODE_VERSION}-slim AS build

# Enable pnpm
ENV PNPM_HOME="/pnpm"
ENV PATH="$PNPM_HOME:$PATH"
RUN corepack enable

WORKDIR /app

COPY ./package.json /app/
COPY ./pnpm-lock.yaml /app/

RUN pnpm install --shamefully-hoist

ADD . ./
COPY .env.defaults .env
RUN npx nuxi generate --dotenv .env.prod
