const mongoose = require('mongoose');
const validator = require('validator');

const conversationSchema = new mongoose.Schema({
  id: {
    type: String,
    required: true,
    unique: true,
  },
  sellerId: {
    type: String,
    required: true,
  },
  buyerId: {
    type: String,
    required: true,
  },
  readBySeller: {
    type: Boolean,
    required: true,
  },
  readByBuyer: {
    type: Boolean,
    required: true,
  },
  lastMessage: {
    type: String,
    required: false,
  },
},
{
  timestamps: true,
}
);

const Review = mongoose.model('conversation', conversationSchema);
module.exports = conversation;