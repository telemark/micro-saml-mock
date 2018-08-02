# Setting the base to nodejs 10.0.0
FROM node:10.8.0-alpine@sha256:8ccd3aa2e3340c79bb18aaa414523b2d81b0da05e36b52dfe6e0686aa3583411

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
