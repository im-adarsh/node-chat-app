var socket = io();
socket.on('connect', () => {
  console.log('connected to server');

});

socket.on('disconnect', () => {
  console.log('disconnected to server');
});

socket.on('newMessage', (message) => {
  console.log('New Message', message);
  var align = getChatMessageClass(message.from,
      jQuery('#message-form-username').val());

  var li = jQuery('<li></li>');
  li.text(`${message.from} : ${message.text}`);
  li.addClass(align);

  jQuery('#messages').append(li);
});

jQuery('#message-form').on('submit', function(e) {
  e.preventDefault();

  if (jQuery('[name=message]').val() === '') {
    return;
  }
  socket.emit('createMessage', {
    from: jQuery('#message-form-username').val(),
    text: jQuery('[name=message]').val(),
  }, function() {

  });

  jQuery('#message-form-input').val('');

  $('#middle-wrapper-container').
      scrollTop($('#middle-wrapper-container')[0].scrollHeight + 50);
});


