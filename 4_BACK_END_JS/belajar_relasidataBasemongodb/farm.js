/* Relasi Data One To Many */

const mongoose = require('mongoose')

/* Connect To MongoDB */
mongoose.connect('mongodb://127.0.0.1/relation_db')
    .then((result) => {
        console.log('connected to mongodb')
    }).catch((err) => {
        console.log(err)
    });

    const productSchema = new mongoose.Schema({
        name: String,
        price: Number,
        season: {
            type: String,
            enum: ['spring', 'summer', 'fall', 'winter']
        }
    })

    const farmSchema = new mongoose.Schema({
        name: String,
        city: String,
        products: [{
            type: mongoose.Schema.Types.ObjectId,
            ref: 'Product'
        }]
    })

    const Product = mongoose.model('Product', productSchema)
    const Farm = mongoose.model('Farm', farmSchema)
  /*   Product.insertMany([
        {
            name: 'Mellon', 
            price: 9,
            season: 'summer'
        },
        {
            name: 'Water Mellon', 
            price: 11,
            season: 'summer'
        },
        {
            name: 'kiwi', 
            price: 11,
            season: 'summer'
        },
        
    ]) */

    /* Relasi Data One To Many */
    // const makeFarm = async () => {
        // const farm = new Farm({
            // name: 'Farm',
            // city: 'Rifaldo'
        // })
        /* Menambahkan Datanya */
        // const melon = await Product.findOne({name: 'Mellon'})
        // farm.products.push(melon)
        // await farm.save()
        // console.log(farm)
    // }

    // makeFarm()

    
    /* Membuat Data Baru */
    /* const addProduct = async (id) => {
        const farm = await Farm.findById(id)
        const Watermelon = await Product.findOne({name: 'Water Mellon'})
        farm.products.push(Watermelon)
        await farm.save()
        console.log(farm)
    }

    addProduct('64e485efef4c6a0fa9537dda') */


    /* Menampilkan data turunan dari relasi One To Many */
    Farm.findOne({name: 'Farm'}).populate('products', 'name').then((farm) => {
        console.log(farm)
/*         for (const product of farm.products) {
            console.log(product.name)
        } */
    })