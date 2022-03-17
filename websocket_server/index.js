// import { exit } from 'shelljs';
// import generateData from './data.js';

const generateData = () => {
  let buy, sell;
  [buy, sell] = [random(1.0, 1.3, true), random(1.1, 1.4, true)];
  return {
    buy: buy,
    sell: sell,
  };
};
const http = require('http');
const _ = require('lodash');
const { random } = require('lodash');
const WebSocketServer = require('websocket').server;
const server = http.createServer();
server.listen(3333);
const wsServer = new WebSocketServer({
  httpServer: server,
});
wsServer.on('request', function(request) {
  const connection = request.accept(null, request.origin);
  connection.on('message', function(message) {
    console.log('Received Message:', message.utf8Data);
    connection.sendUTF('Hi this is WebSocket server!');
    setInterval(() => {
      connection.sendUTF(JSON.stringify(generateData()));
    }, 1200);
  });
  connection.on('close', function(reasonCode, description) {
    console.log('Client has disconnected.');
  });
});
