# Setting the base to nodejs 10.0.0
FROM node:10.0.0-alpine@sha256:8fef1fa754962f317fd77abba875318645652c1eea846fd832f08b8ea7a43395

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
