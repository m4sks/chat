const app = require('express')();
const server = require('http').Server(app);
const mongoose = require('mongoose');
const path = require('path');

const mongo = {
  uri: process.env.MONGODB_URI || 'mongodb://mongo:27017/admin'
}

mongoose.Promise = global.Promise;
mongoose.connect(`${mongo.uri}`);

PORT = process.env.PORT || 8080;

app.get('/', function (req, res) {
  res.sendFile(path.resolve(__dirname, '../../public/index.html'));
});

app.listen(PORT, function (err) {
  if (err) {
    throw err;
  }
  console.log('listening on http://localhost:' + PORT);
});
