const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MessageSchema = new Schema({
  text: {
    type: String,
    index: true
  },
  user_id: {
    type: String,
    index: true
  },
  
})

module.exports = mongoose.model('Message', MessageSchema);
