FROM node:argon

# Create app directory 
RUN mkdir -p /usr/src/app 
WORKDIR /usr/src/app 

# Housekeeping
RUN apt-get update 

# Install app dependencies
COPY package.json /usr/src/app/
RUN npm install

# Bundle app source 
COPY . /usr/src/app

# Expose app binding port to map (the port) by the docker daemon
EXPOSE 3200

# Define the command to run your app using CMD - this defines your runtime 
CMD [ "forever", "start" ]