ARG NODE_VERSION=20
#ARG PLATFORM=amd64
ARG PLATFORM=arm64v8

#FROM --platform=${BUILDPLATFORM} node:${NODE_VERSION} AS build
FROM ${PLATFORM}/node:20
ENV NODE_ENV=development
WORKDIR /usr/src/app
COPY package*.json ./
RUN npm install
COPY . .
EXPOSE 3000
CMD ["npm", "run", "dev"]

