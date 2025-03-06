##############
# BASE STAGE #
##############

FROM node AS base

ARG APP_ENVIRONMENT
ARG DEVELOPMENT=False

ENV NODE_MAJOR=23
ENV NODE_ENV=${APP_ENVIRONMENT:-development}

RUN set -ex && apt-get update && apt-get install -y ca-certificates curl gnupg
RUN set -ex && mkdir -p /etc/apt/keyrings
RUN set -ex && curl -fsSL https://deb.nodesource.com/gpgkey/nodesource-repo.gpg.key | gpg --dearmor -o /etc/apt/keyrings/nodesource.gpg

RUN set -ex && echo "deb [signed-by=/etc/apt/keyrings/nodesource.gpg] https://deb.nodesource.com/node_$NODE_MAJOR.x nodistro main" | tee /etc/apt/sources.list.d/nodesource.list
RUN set -ex && apt-get update && apt-get install nodejs -y
RUN set -ex && npm install npm -g

RUN mkdir /usr/src/kelly-pool
WORKDIR /usr/src/kelly-pool

COPY . /usr/src/kelly-pool

RUN npm install

EXPOSE 8080/tcp

#####################
# DEVELOPMENT STAGE #
#####################
FROM base AS development

USER root

# add any dev-only apt-get dependencies

# setup SSH public keys for root user
RUN mkdir -p -m 0700 ~/.ssh && ssh-keyscan github.com >> ~/.ssh/known_hosts

ADD docker-entrypoint.sh /usr/bin/

ENTRYPOINT [ "/usr/bin/docker-entrypoint.sh" ]