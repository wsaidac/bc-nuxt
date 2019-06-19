###################################################################
# Base container with shared deps
###################################################################

FROM node:10-alpine as base

ENV APP_HOME=/usr/src/app\
    HOST=0.0.0.0\
    PORT=4000
RUN apk add --update --quiet git curl &&\
    mkdir -p /usr/src/app

WORKDIR $APP_HOME

###################################################################
# Development container with devkit deps
###################################################################

FROM base as dev
RUN apk add --quiet tini

###################################################################
# Final optimized container for production
###################################################################

FROM base as prod

COPY package.json yarn.lock $APP_HOME/
RUN yarn global add pm2 --silent &&\
    yarn install --silent
COPY . $APP_HOME
RUN yarn build
EXPOSE 4000
USER node
CMD ["pm2", "start", "npm", "--attach", "--name", "\"nuxt\"", "--", "start"]
