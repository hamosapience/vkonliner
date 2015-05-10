FROM phusion/baseimage:0.9.16

# File Author / Maintainer
MAINTAINER Kalentine Vamenek

# Use baseimage-docker's init system.
CMD ["/sbin/my_init"]

RUN curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.25.1/install.sh | bash
RUN nvm install iojs

ENV DIR /src/
ENV PATH /usr/local/bin:$PATH

ADD package.json /tmp/package.json
RUN cd /tmp && npm install
RUN mkdir -p ${DIR} && cp -a /tmp/node_modules ${DIR}

WORKDIR ${DIR}
COPY . ${DIR}

RUN ./init.sh
