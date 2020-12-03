FROM nginx:latest
COPY /dist/ /usr/share/nginx/html
COPY /public/ /usr/share/nginx/html/
COPY mime.types /etc/nginx/mime.types
COPY nginx.conf /etc/nginx/nginx.conf
