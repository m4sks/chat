const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const AccountSchema = new Schema({
  user_id: {
    type: String,
    index: true,
  },
  name: {
    type: String
  },
  friends: {
    type: String,
    default: []
  },
  friend_requesting: {
    type: String,
    default: []
  },
  friend_requested: {
    type: String,
    default: []
  },
  is_active: {
    type: Boolean,
    default: true
  }
})

module.exports = mongoose.model('Account', AccountSchema);
