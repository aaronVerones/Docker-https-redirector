FROM node:alpine
WORKDIR /root/
COPY node_modules node_modules
COPY index.js index.js
COPY package.json package.json
COPY package-lock.json package-lock.json
EXPOSE 80
CMD ["npm", "start"]