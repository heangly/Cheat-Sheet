# What is Docker?

    -	It is a container technology: A tool for creating and managing containers
    - 	Image (blueprint/template) contains Nodejs App code and environment  (image can create multiple container)(
    -	Container runs Nodejs App (running instance of the image)

# Overview

- To Create an image -> Create a "Dockerfile"

  ```code

  	FROM node:14		#use node.js as a base image

  	WORKDIR /app		#work directory

  	COPY package.json .

  	RUN npm install

  	COPY . .		#copy the rest of the code

  	EXPOSE 3000		#node js app create a web server listening for port 3000

  	CMD ["node", "app.mjs"] #execute node.js command on app.mjs ->ex: node app.mjs

  ```

  - $ docker build .
  - $ docker run -p 3000:3000 <image id> #running port 3000 on container port 3000 with image
  - $ docker ps #list all running container
  - $ docker stop <container name>

  - $ docker run <image id> -> start a new container based on the image id
  - $ docker start <container id> -> start the previous stopped container back up with container id
