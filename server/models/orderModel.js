const mongoose = require('mongoose');
const validator = require('validator');

const orderSchema = new mongoose.Schema({

})

const Order = mongoose.model('Order', orderSchema);
module.exports = Order;