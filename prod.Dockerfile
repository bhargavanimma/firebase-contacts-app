FROM node:15-buster

ARG USERNAME=node

RUN apt-get update \
    && apt-get -y install --no-install-recommends apt-utils dialog 2>&1 \
    && apt-get -y install --no-install-recommends git locales \
    # Cypress dependencies
    libgtk2.0-0 libgtk-3-0 libgbm-dev libnotify-dev libgconf-2-4 libnss3 libxss1 libasound2 libxtst6 xauth xvfb \
    # Other dependencies
    wget curl 2>&1 && \
    apt-get clean

# Set the locale (source: https://stackoverflow.com/questions/28405902/how-to-set-the-locale-inside-a-debian-ubuntu-docker-container)
RUN sed -i '/en_US.UTF-8/s/^# //g' /etc/locale.gen && \
    locale-gen
ENV LANG en_US.UTF-8
ENV LANGUAGE en_US:en
ENV LC_ALL en_US.UTF-8

# Install google chrome (source: https://linuxize.com/post/how-to-install-google-chrome-web-browser-on-debian-9/)

RUN wget -q https://dl.google.com/linux/direct/google-chrome-stable_current_amd64.deb && \
    apt-get -y install ./google-chrome-stable_current_amd64.deb

USER $USERNAME

# Make working directory
RUN mkdir -p /home/node/app

# Set working directory
WORKDIR /home/node/app

# COPY project
COPY --chown=node:node . .

# Install dependencies
RUN npm ci

CMD [ "npm", "run", "start" ]