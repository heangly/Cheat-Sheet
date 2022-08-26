# What is Volumes?

- Volumes are folders on your host machine hard drive which are mounted ("made available", mapped) into containers

- docker run -d -p 3000:80 --rm --name feedback-app -v feedback:/app/feedback feedback-node:volumes #-v <name of volumn>:<path>
