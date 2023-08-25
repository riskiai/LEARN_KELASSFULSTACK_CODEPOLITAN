/* Menambahkan Validasi Di Schema */
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/ShopApp')
    .then(() => {
        console.log('Connected to MongoDB')
    }).catch((err) => {
        console.log(err)
    })

    
    /* Membuat Schemanya */ 
    const productSchema = mongoose.Schema({
       /*  name: {
            type: String,
            required: true
        },
        condition: {
            type: String,
            enum: ['baru', 'bekas'],
            required: true,
            default: 'baru'
        },
        price: {
            type: Number,
            required: true
        } */

        /* Produk Baru Umum yang sering digunakan */
        name: {
            type: String,
            required: true
        },
        
		brand: {
            type: String,
            required: true
        },
        price : {
            type: Number,
            required: true,
            min: 0
        },
		
		color: {
            type: String,
            required: true
        },
		size: [{
            type: String,
            required: true
        }],
		description: {
            type: String,
            required: true,
            maxLength: 150
        },
		condition: {
            type: String,
            enum: ['baru', 'bekas'],
            default: 'baru'
        },
		stock: {
            type: Number,
            required: true,
            min: 0
           /*  min: [0, 'Minimal nilai stock adalah 0 / tidak boleh minus'] */
        },
		availability: {
			online: {
                type: Boolean,
                required: true
            },
			offline: {
                type: Boolean,
                required: true
            },
		}

    })

    const Product = mongoose.model('Product', productSchema)

    /* const product = new Product({
    
            "name": "Kemeja Flanel",
            "brand": "Hollister",
            "price": 750000,
            "color": "biru muda",
            "size": ["S", "M", "L"],
            "description": "Kemeja flanel dengan warna yang cerah, terbuat dari bahan flanel yang nyaman dan berkualitas tinggi.",
            "condition": "baru",
            "stock": 25,
            "availability": {
                "online": true,
                "offline": true
            }
        
    }) */

    /* Mengaktifkan Validasi Pada Saat Update */
    /*  product.save().then((result) => {
        console.log(result)
    }).catch((err) => {
        console.log(err)
    });
    */

    /* Data Uji Coba  */
    Product.findOneAndUpdate({name: 'Kemeja Flanel'}, {
        "name": "Kemeja Flanel",
        "brand": "Hollister",
        "price": 10000,
        "color": "biru muda",
        "size": ["S", "M", "L"],
        "description": "Kemeja flanel dengan warna yang cerah, terbuat dari bahan flanel yang nyaman dan berkualitas tinggi.",
        "condition": "baru",
        "stock": 25,
        "availability": {
            "online": true,
            "offline": true
        }  
    }, {new: true, runValidators: true}).then((result) => {
        console.log(result)
    }).catch((err) => {
        console.log(err.errors.stock.properties.message)
    });


    /* Mendefinisikan di object modelnya */
    /* const tshirt = new Product({name: 'T Shirt Raglan', price: 500000, color: 'black'})

    tshirt.save().then((result) => {
        console.log(result)
    }).catch((err) => {
        console.log(err)
    }); */