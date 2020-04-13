// reference mongoose and schema class
let mongoose = require('mongoose');
let Schema = mongoose.Schema;

// define schema
let ProductSchema = new Schema(
    {
        productID : Number,
        productName : String,
        price : Number,
        quantity : Number
    }
);

// export schema
module.exports = mongoose.model('product', ProductSchema)
