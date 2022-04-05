FROM node:12-alpine3.12@sha256:83233f79a40109329a5c29e4aa42013ddb65c649388f42ff1f889b68849d8de6 as build

WORKDIR /src

COPY package*.json ./

RUN npm ci

COPY . .

RUN npm run lint \
  && npm run build \
  && npm run test \
  && npm prune --production

FROM node:12-alpine3.12@sha256:83233f79a40109329a5c29e4aa42013ddb65c649388f42ff1f889b68849d8de6

WORKDIR /opt/app-root

RUN apk add --no-cache tini

ENV PORT=3000

EXPOSE $PORT

COPY --chown=node:node --from=build /src/node_modules node_modules
COPY --chown=node:node --from=build /src/dist dist

USER node

ENTRYPOINT ["/sbin/tini", "--"]

CMD ["node", "--unhandled-rejections=strict", "./dist/main.js"]


