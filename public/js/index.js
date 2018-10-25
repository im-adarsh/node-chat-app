var socket = io();
socket.on('connect', () => {
  console.log('connected to server');

  socket.emit('createEmail', {
    from: 'clydoskope@gmail.com',
    to: 'foodine9820@gmail.com',
  });

});

socket.on('disconnect', () => {
  console.log('disconnected to server');
});

socket.on('newEmail', (data) => {
  console.log('New Email' + JSON.stringify(data));
});

