const app = require('express')();
const http = require('http').Server(app);
const io = require('socket.io')(http);
const PORT = process.env.PORT || 8080;

// app.get(`/`, (req, res) => {
//   res.send(`<h1>Hello world</h1>`)
// });
app.get(`/`, (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', (socket) => {
  console.log('a user connected!');
  socket.broadcast.emit('login', 'A User Logged In!');
  socket.emit('login', 'Logged In!');

  socket.on('disconnect', function() {
    console.log('user disconnected.');
    socket.broadcast.emit('logout', 'A User Logged Out.');
    socket.emit('login', 'Logged Out.');
  });
  socket.on('chat message', function(msg) {
    console.log('message: ' + msg);
    io.emit('chat message', msg);
  });
});

http.listen(PORT, () => {
  console.log(`listening on http://localhost:${PORT}`)
});
