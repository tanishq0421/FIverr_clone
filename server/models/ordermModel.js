const mongoose = require('mongoose');
const validator = require('validator');

const orderSchema = new Schema({

})

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;