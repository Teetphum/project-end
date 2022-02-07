const mongoose = require("mongoose")

const productSchema = new mongoose.Schema(
    {
        bookname: {type: String, required: true, unique: true},
        publisher: {type: String, required: true},
        writer: {type: String, required: true},
        publishyear: {type: Number, required: true},
        tel: {type: String},
        contact: {type: String},
        desc: {type: String, required: true},
        price: {type: Number, required: true},
        img: {type: String, required: true},
        category: {type: Array}
    },
    {timestamps: true}
);

module.exports = mongoose.model("Product", productSchema)


