FROM nginx:latest

COPY ./frontend/index.html /usr/share/nginx/html/index.html
COPY ./frontend/script.js /usr/share/nginx/html/script.js
COPY ./frontend/styles.css /usr/share/nginx/html/styles.css