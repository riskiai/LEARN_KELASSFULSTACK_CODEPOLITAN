const path = require('path');
const express = require('express')

/* Membuat Restfull Update Proudct */
const methodOverride = require('method-override')
const mongoose = require('mongoose');
// const { connect } = require('http2');
const app = express()
const ErrorHandler = require('./ErrorHandler')


/* Impelementasikan Konsep Restfull Index Productsnya */


/* Models */
const Product = require('./models/product')

// connect to mongodb
mongoose.connect('mongodb://127.0.0.1/shop_db').then(() => {
    console.log('Connected to MongoDB');
}).catch((err) => {
    console.error('Error connecting to MongoDB:', err);
});

/* Untuk Menggunakan Method */
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))

/* Routenya sama seperti di laravel */

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/products', async (req, res) => {
    /* Menambahkan Filter pada setiap category */
    const {category} = req.query
    if(category) {
        const products = await Product.find({category})
        res.render('products/index', {products, category})
    }else {
        const products = await Product.find({})
        res.render('products/index', {products, category: 'All'})
    }

    const products =  await Product.find({})
    // console.log(products)
    res.render('products/index', {products})
})

/* Mengakses Form untuk menyimpan data produknya */
app.get('/products/create', (req, res) => {
    // throw new ErrorHandler('This is a custom error', 503)
    res.render('products/create')
}) 

app.post('/products/', async (req, res) => {
    const product = new Product(req.body)
    await product.save()
    res.redirect(`/products/${product._id}`)
})


/* Membuat Root nya untuk products a href */
app.get('/products/:id', async (req, res, next) => {
    /* Kita Distrak ID nya */
    /* Pengecekan ErrorHandling Pakai Next */
    /* Harus Pakai Try And Cacth Kalo di JS */
    try {
        const {id} = req.params
        const product = await Product.findById(id) 
        res.render('products/show', {product})
    } catch (error) {
        next(new ErrorHandler('Produk Tidak Ditemukan', 404)) 
    }

})

app.get('/products/:id/edit', async (req, res, next) => {
    try {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.render('products/edit', { product });
    } catch (error) {
        next(new ErrorHandler('Produk Tidak Ditemukan', 404))
    }
});


/* Method Update */
app.put('/products/:id', async(req, res, next) => {
    try {
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id, req.body, {runValidators: true})
        res.redirect(`/products/${product._id}`)
    } catch (error) {
        next(new ErrorHandler('Gagal Update Data', 403)) 
    }
})


/* Membuat Restful Delete Product */
app.delete('/products/:id', async(req, res, next) => {
    try {
        const {id} = req.params
        await Product.findByIdAndDelete(id)
        res.redirect(`/products`)
    } catch (error) {
        next(new ErrorHandler('Gagal Delete Data', 412)) 
    }
})


/* Erorr Handling Di Async Function */
app.use((err, req, res, next) => {
    const {status = 403, message = 'Something went wrong'} = err; 
    res.status(status).send(message);
})


app.listen(3000, () => {
    console.log('Shop app listening on http://127.0.0.1:3000')
})