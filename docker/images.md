# Images

    -	There are 2 type of images:
    		1. Pre-built image (from docker hub)
    		2. Custom image

    - 	download and run pre build image from docker hub
    		-> $ docker run node #download node image to your local machine

    $ docker ps -a #show all the running process

    $ docker run -it node #it = interactive shell

    $ docker run -p 3000:80 -d --rm <image id> # rm-> auto remove after stop container

    $ docker cp <file> <running container id>:<path to place the file in>

    ##### Sharing Images #####
    1. Docker Hub -> push & pull
    2. Private Registry
