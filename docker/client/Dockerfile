FROM node:11.13.0-alpine

RUN mkdir -p /usr/src/client

WORKDIR /usr/src/client

COPY entrypoint /usr/local/bin/

ENTRYPOINT ["entrypoint"]