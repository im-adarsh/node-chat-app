var socket = io();
socket.on('connect', () => {
  console.log('connected to server');

  socket.emit('createMessage', {
    from: 'clydoskope@gmail.com',
    to: 'foodine9820@gmail.com',
    text: 'yup, it worked',
  });

});

socket.on('disconnect', () => {
  console.log('disconnected to server');
});

socket.on('newMessage', (message) => {
  console.log('New Message', message);
});

