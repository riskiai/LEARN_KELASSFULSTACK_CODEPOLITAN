const mongoose = require('mongoose')

const productSchema = new mongoose.Schema({
    name: {
        type: String,
        // required: true
        required: [true, 'Nama Tidak Boleh Kosong']
    },
    brand: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    // size: {
    //     type: String,
    //     enum: ['S', 'M', 'L', 'XL'],
    // },
    category: {
        type: String,
        enum: ['Baju', 'Celana', 'Aksesoris', 'Jaket'],
    },
    garment: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Garment",
    }
		
})

const Product = mongoose.model('Product', productSchema)

module.exports = Product