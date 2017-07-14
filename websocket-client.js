
<html>
  <head>
    <script src="./websocket-client.js"/>
  </head>
  <body>
    
  </body>
</html>
var WebSocket = require('websocket').client;

const wsurl = 'ws://127.0.0.1:3000';

var client = new WebSocket(wsurl, 'hello chatting');

client.addListener('data', function(buf) {
    console.log('Got data: ' + sys.inspect(buf));
});
client.onopen = function () {
    // first we want users to enter their names
    console.log('Got open');
};

client.onerror = function (error) {

};
client.onmessage = function(m) {
    console.log('Got message: ' + m);
}
