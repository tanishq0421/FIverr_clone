const mongoose = require('mongoose');
const validator = require('validator');

const UserSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
      },
      email: {
        type: String,
        required: true,
        unique: true,
      },
      password: {
        type: String,
        required: true,
      },
      img: {
        type: String,
        required: false,
      },
      country: {
        type: String,
        required: true,
      },
      phone: {
        type: String,
        required: false,
      },
      desc: {
        type: String,
        required: false,
      },
      isSeller: {
        type: Boolean,
        default:false
      },
    },{
      timestamps:true
    }
);

const User = mongoose.model('User', UserSchema);
module.exports = User;