# Setting the base to nodejs 10.0.0
FROM node:10.12.0-alpine@sha256:1e3e3e7ffc965511c5d4f4e90ec5d9cabee95b5b1fbcd49eb6a2289f425cf183

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
