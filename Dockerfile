# Setting the base to nodejs 10.0.0
FROM node:10.11.0-alpine@sha256:fcd9b3cb2fb21157899bbdb35d1cdf3d6acffcd91ad48c1af5cb62c22d2d05b1

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
