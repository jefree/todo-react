from node

RUN npm install -g create-react-app

RUN mkdir /todo-react
WORKDIR /todo-react

COPY ./start.sh /todo-react
RUN chmod +x /todo-react/start.sh
ENTRYPOINT ["/todo-react/start.sh"]
