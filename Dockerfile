FROM node:alpine as build
WORKDIR /app
ENV PATH /app/node_modules/.bin:$PATH
ARG REACT_APP_API_BASE_URL=http://localhost/api
ENV REACT_APP_API_BASE_URL=$REACT_APP_API_BASE_URL
COPY . /app
RUN npm ci --loglevel verbose
RUN npm run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
COPY --from=build /app/nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 80
CMD ["nginx","-g","daemon off;"]