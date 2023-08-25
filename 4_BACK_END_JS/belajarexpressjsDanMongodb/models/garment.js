/* IMPLEMENTASI RELASI DATABASE MONGODB DI EXPRESS, MONGOOSE */

const mongoose = require('mongoose')
const Product = require('./product')

const garmentSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Nama Tidak boleh Kosong'],
    },
    location: {
        type: String,
    }, 
    contact: {
        type: String,
        required: [true, 'Kontak Tidak Boleh Kosong'],
    },
    products: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Product'
    }]

})

/* Membuat Methodnya */
garmentSchema.post('findOneAndDelete', async function (garment) {
    if (garment.products.length) {
        const res = await Product.deleteMany({ _id: { $in: garment.products } })
        console.log(res)
    }
})


const Garment = mongoose.model('Garment', garmentSchema)

module.exports = Garment

