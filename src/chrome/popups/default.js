'use strict';

$('.action_open_settings').click(function() {
  chrome_message_send(null, 'settings', {}, function() {
    window.close();
  });
});

$('.action_send_email').click(function() {
  window.open('https://mail.google.com');
});
