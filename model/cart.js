const mongoose = require('mongoose')
const product = require('./product')


const cartSchema = new mongoose.Schema({
    userID : {
        type: String,
        required: true
    },
    productID : {
        type : mongoose.Schema.Types.ObjectId,
        ref: product,
        required : true
    },
    qty : {
        type : Number
    },
    totalPrice : {
        type : Number
    }
})

module.exports = mongoose.model('cart',cartSchema)
