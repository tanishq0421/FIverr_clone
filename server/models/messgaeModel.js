const mongoose = require('mongoose');
const validator = require('validator');

const messageSchema = new Schema({
    conversationId: {
        type: String,
        required: true,
        },
    userId: {
        type: String,
        required: true,
        },
    desc: {
        type: String,
        required: true,
        },
    },
    {
      timestamps:true
    }
);

const message = mongoose.model('message', messageSchema);
module.exports = message;