FROM node


RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
#execute qd on démare le docker


COPY package.json /usr/src/app/
RUN npm install
RUN npm i -g peer
COPY . /usr/src/app

#rend executable
RUN chmod +x run.sh 

CMD ./run.sh 



