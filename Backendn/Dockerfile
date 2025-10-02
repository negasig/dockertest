FROM node
WORKDIR /app
COPY package.json /app
RUN npm install 
EXPOSE 3006
COPY . /app
CMD ["node","App.js"]