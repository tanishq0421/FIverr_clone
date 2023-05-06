const mongoose = require('mongoose');
const validator = require('validator');

const ReviewSchema = new Schema({
    gigId: {
        type: String,
        required: true,
    },
    userId: {
        type: String,
        required: true,
    },
    star: {
        type: Number,
        required: true,
        enum: [1, 2, 3, 4, 5]
    },
    desc: {
        type: String,
        required: true,
    },
},
    {
        timestamps: true,
    }
);

const Review = mongoose.model('Review', ReviewSchema);
module.exports = Review;