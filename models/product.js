const mongoose = require("mongoose");
const {objectId} = mongoose.Schema

const productSchema = new mongoose(
    {
        name: {
            type: String,
            trim: true,
            required: true,
            maxlength: 32
        },

        description: {
            type: String,
            required: true,
            maxlength: 2000
        },

        price: {
            type: Number,
            trim: true,
            required: true,
            maxlength: 32
        },

        category: {
            type: objectId,
            ref: 'Category',
            required: true
        },

        quantity: {
            type: Number 
        }, 

        photo: {
            data: Buffer,
            contentType: String
        },

        shipping: {
            required: false,
            type: Boolean
        }
    },
    
    {timestamps: true}
);

module.exports = mongoose.model("Product", productSchema);