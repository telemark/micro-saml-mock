# Setting the base to nodejs 10.0.0
FROM node:10.3.0-alpine@sha256:3e218008f8531a67d4bb2f79333009c391d64cdd42dbaace604bd547297dc654

# Bundle app source
COPY . /src

# Change working directory
WORKDIR "/src"

# Install dependencies
RUN npm install --production

# Expose 3000
EXPOSE 3000

# Startup
ENTRYPOINT npm start
