FROM node:alpine

ARG USER=wikigif
ARG APP_HOME=/app
ARG GIPHY_API_KEY

RUN adduser -D -h $APP_HOME $USER

WORKDIR $APP_HOME

COPY package.json package-lock.json ./

RUN chown -R $USER:$USER $APP_HOME

USER $USER

RUN npm install

ENV PATH="/home/$USER/.local/bin:${PATH}"
ENV GIPHY_API_KEY=${GIPHY_API_KEY}

COPY --chown=$USER:$USER public ./public
COPY --chown=$USER:$USER routes ./routes
COPY --chown=$USER:$USER server.js ./server.js

EXPOSE 3000

CMD ["npm", "start"]
##testing lint pr
