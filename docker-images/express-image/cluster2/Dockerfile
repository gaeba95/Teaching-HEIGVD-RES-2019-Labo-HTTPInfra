FROM node
ENV NPM_CONFIG_LOGLEVEL info

RUN apt-get update

COPY src /opt/app

WORKDIR /opt/app/

EXPOSE 3000

RUN npm install
RUN npm install chance

CMD ["node", "/opt/app/index.js"]
