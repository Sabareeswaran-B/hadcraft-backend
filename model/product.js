const mongoose = require('mongoose')
const productSchema = new mongoose.Schema({
  productID: {
    type: String,
    required: true,
    max: 200,
  },
  productName : {
    type : String,
    required: true,
    max: 200
  },
  brandName : {
    type : String,
    required: true,
    max: 200
  },
  specialPrice : {
    type : Number,
    required: true,

  },
  MRP : {
    type : Number,
    required: true,
  },
  offer : {
    type : String,
    required: true,
    max: 200
  },
  images : {
    type : Array,
    required: true,
    max: 500
  },
  productType : {
    type : String,
    required: true,
    max: 200
  },
  details : {
    type : String,
    required : true,
    max : 500
  },
  soldby : {
    type : String,
    required : true,
  },
  constituents : {
    type : Array,
    required : true
  }

},{timestamps: true}
)
module.exports = mongoose.model('product',productSchema)