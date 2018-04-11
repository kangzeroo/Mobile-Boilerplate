FROM nodesource/trusty:6.3.1

ADD package.json package.json
RUN npm install --only=dev
RUN npm install
RUN npm install -g forever
ADD . .
RUN npm run build

EXPOSE 3001

CMD ["npm","run", "prod"]
