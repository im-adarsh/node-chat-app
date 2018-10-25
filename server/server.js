const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const publicPath = path.join(__dirname, '../public');
const port = process.env.PORT || 3001;

var app = express();
var server = http.createServer(app);
var io = socketIO(server);

app.use(express.static(publicPath));

io.on('connection', (socket) => {
  console.log('new user connected');

  socket.emit('newEmail', {
    from: 'clydoskope@gmail.com',
    to: 'foodine9820@gmail.com',
  });

  socket.on('createEmail', (newEmail) => {
    console.log(newEmail);
  });

  socket.on('disconnect', () => {
    console.log('user was disconnected');
  });
});

server.listen(port, () => {
  console.log('Server started');
});