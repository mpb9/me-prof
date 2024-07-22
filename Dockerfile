# syntax=docker/dockerfile:1.4

# node version: 20.9.0 for successful build
FROM node:20.9.0 

# Create app directory
# in this directory all the files will be copied
WORKDIR /app

# Copy package.json to /app
COPY package*.json  .

# copy dependencies . . means all files in current directory with node_modules and other files
# (space between each . )
COPY . .

# run npm install to install all dependencies
RUN npm install 

# expose port 3000
EXPOSE 3000

# start the app
CMD [ "npm", "run", "start" ]