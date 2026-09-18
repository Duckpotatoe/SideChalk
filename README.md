# SideChalk
A transparent AI guide to help begin your art journey. Currently in development and I'm really just starting out.


## Currently Implemented
1) Image Upload
2) Basic docker Image/Container

## What needs to be done (too much to name)
1) Working on improving backend communication (file upload)
2) Learn a little bit of art (hone down what AI needs to focus on)
3) Visual Analysis

## Commands to help setup
```
//to create docker scene (everything assuming your in the root folder)
//This command is to build the docker image based on the website
docker build -t NAME .
//This is to build the docker container and host the local server at port 8080, using nginx imaging.
docker run --rm -p 8080:80 --name web NAME

npm install multer
npm install express
```