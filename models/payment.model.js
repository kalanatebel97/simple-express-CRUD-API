const mongoose = require('mongoose');

const ProductSchema = mongoose.Schema({

    name: {
        type: String,
        required: true
    },
    price:{
        type: Number,
        required : true
    },
    description: {
        type: String,
        required: false
    },
    available: {
        type: Boolean,
        default : true
    }
}, {
    timestamps : true
});

const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;