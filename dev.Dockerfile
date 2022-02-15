FROM node:14.15.5
ENV REFRESHED_AT "15-02-2021"

WORKDIR /app
COPY package.json package.json
COPY yarn.lock yarn.lock
RUN yarn install

EXPOSE 8080
CMD ["yarn", "run", "dev"]