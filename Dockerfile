# Setting the base to nodejs 10.0.0
FROM node:10.11.0-alpine@sha256:3450751aaca30f6d49f2e9897763d755ce5faf37f3b11dee2e606e6f37ef468c

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
