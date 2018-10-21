# Create image based on the official Node 6 image from dockerhub
FROM vmware/powerclicore:latest

# Install nodejs
RUN tdnf install -y tar gzip xz git
RUN tdnf install -y nodejs npm

# Add vsphere api
RUN npm i -g node-vsphere-soap --save
RUN npm i -g @angular/cli

# Create a directory where our app will be placed
RUN mkdir /app

# Change directory so that our commands run inside this new directory
WORKDIR /app


### In production uncomment
# Copy dependency definitions
#ADD /server/package.json /app/server/
#ADD /client/package.json /app/client/
#ADD /package.json /app/
# Install dependecies
#RUN npm install
#RUN cd ./server && npm install
#RUN cd ./client && npm install
# Link current folder to container
#ADD . /app/

# Expose the port the app runs in
EXPOSE 3000

#### Uncomment in production
# Serve the app
#CMD ["npm", "start"]

#### Comment in production
RUN touch /var/log/app.log
CMD ["tail","-f", "/var/log/app.log"]