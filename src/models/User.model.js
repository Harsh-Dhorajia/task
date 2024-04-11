const mongoose = require('mongoose');

const UserSchema = mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    enum : ['ADMIN', 'MANAGER', 'STAFF'],
    default: 'STAFF'
  },
}, {
  version: false,
  timestamps: true,
});

module.exports = mongoose.model('User', UserSchema);
