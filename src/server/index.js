var app = require('express')();
var server = require('http').Server(app);
// var io = require('socket.io')(server);

PORT = process.env.PORT || 8080;

app.get('/', function (req, res) {
  res.send('Hello World!');
});

app.listen(PORT, function () {
  console.log('listening on http://localhost:' + PORT);
});

console.log("hello world");