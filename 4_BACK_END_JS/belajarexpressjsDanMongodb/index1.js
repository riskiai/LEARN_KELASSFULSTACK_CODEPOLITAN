/* Membuat Perbedaan Error Handler dari express dan mongose */
const path = require('path');
const express = require('express')

/* Membuat Restfull Update Proudct */
const methodOverride = require('method-override')
const mongoose = require('mongoose');

// const { connect } = require('http2');
const app = express()
const ErrorHandler = require('./ErrorHandler')

/* Implementasi Session Flash */
const session = require('express-session')
const flash = require('connect-flash')

/* Impelementasikan Konsep Restfull Index Productsnya */
/* Models */
const Product = require('./models/product')
const Garment = require('./models/garment')

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
app.use(session({
    secret: 'keyboard-cat',
    resave: false,
    saveUninitialized: false
}))

app.use(flash())

/* Memanggil Flash Session Di Seluruh Halaman */
app.use((req, res, next) => {
    res.locals.messages = req.flash('flash_messages')
    next();
})


/* Membuat Helper Error Async Function */
function wrapAsync(fn) {
    return function(req, res, next) {
        fn(req, res, next).catch(err => next(err))
    }
}

/* Routenya sama seperti di laravel */

app.get('/', (req, res) => {
    res.send('Hello World')
})

/* Function Relasi Database */
app.get('/garments', wrapAsync(async (req, res)=> {
    const garments = await Garment.find({})
    const category = req.query.category; 
    res.render('garment/index', {garments})


    // res.render('garment/index', { garments, category, message: req.flash('success') }); // Kirimkan category ke template
}))

app.get('/garment/create', (req, res) => {
    res.render('garment/create')
})

app.post('/garments', wrapAsync(async (req, res) => {
    const garment = new Garment(req.body)
    await garment.save()
    req.flash('flash_messages', 'Berhasil Menambahkan Data Pabrik!')
    res.redirect(`/garments`)
}))


/* MEMBUAT DATA SHOWNYA untuk garment */
app.get('/garments/:id', wrapAsync(async(req, res) => {
    const {id} = req.params
    const garment = await Garment.findById(id).populate('products')
    // res.send(garment)
    res.render('garment/show', {garment})

}))

/* Menyimpan Sebuah Data Produk ke Model Pabrik */
// /germent/:germent_id/product/create
app.get('/garments/:garment_id/products/create', (req, res) => {
    const {garment_id} = req.params
    // const garment = await Garment.findById(garment_id)
    res.render('products/create', {garment_id})
})

/* Proses nyimpannya */
app.post('/garments/:garment_id/products', wrapAsync(async(req, res) => {
    const {garment_id} = req.params
    const garment = await Garment.findById(garment_id)
    const product = new Product(req.body)
    /* console.log(product)
    console.log(garment_id) */
    garment.products.push(product)
    product.garment = garment
    await garment.save()
    await product.save()
    // console.log(garment)
    res.redirect(`/garments/${garment_id}`)
}))



app.delete('/garments/:garment_id', wrapAsync(async(req, res) => {
    const {garment_id} = req.params
    await Garment.findOneAndDelete({_id: garment_id})
    res.redirect('/garments')
}))


app.get('/products', wrapAsync(async (req, res) => {
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
}))

/* Mengakses Form untuk menyimpan data produknya */
app.get('/products/create', wrapAsync (async (req, res) => {
    // throw new ErrorHandler('This is a custom error', 503)
    res.render('products/create')
})) 

app.post('/products/', wrapAsync(async (req, res) => {
    const product = new Product(req.body)
    await product.save()
    res.redirect(`/products/${product._id}`)
}))


/* Membuat Root nya untuk products a href */
app.get('/products/:id', wrapAsync(async (req, res) => {
    /* Kita Distrak ID nya */
    /* Pengecekan ErrorHandling Pakai Next */
    /* Harus Pakai Try And Cacth Kalo di JS */
        const {id} = req.params
        const product = await Product.findById(id).populate('garment') 
        res.render('products/show', {product})
        // res.send(product)
    }))

app.get('/products/:id/edit', wrapAsync(async (req, res) => {
        const { id } = req.params;
        const product = await Product.findById(id);
        res.render('products/edit', { product });
}));


/* Method Update */
app.put('/products/:id', wrapAsync(async (req, res) => {
        const {id} = req.params
        const product = await Product.findByIdAndUpdate(id, req.body, {runValidators: true})
        res.redirect(`/products/${product._id}`)
}))


/* Membuat Restful Delete Product */
app.delete('/products/:id', wrapAsync(async (req, res) => {
        const {id} = req.params
        await Product.findByIdAndDelete(id)
        res.redirect(`/products`)
}))

const validatorHandler = err => {
    
        err.status = 400
        err.message = Object.values(err.errors).map(item => item.message)
        return new ErrorHandler(err.message, err.status)
}

/* Cara Membedakan ERROR dari mongoose atau js Biasa */
app.use((err, req, res, next) => {
    console.dir(err)
    if(err.name === 'ValidationError') err = validatorHandler(err)
    if(err.name === 'CastError') {
        err.status = 404
        err.message = 'Product not found'
    }
    next(err)
})

/* Erorr Handling Di Async Function */
app.use((err, req, res, next) => {
    const {status = 403, message = 'Something went wrong'} = err; 
    res.status(status).send(message);
})


app.listen(3000, () => {
    console.log('Shop app listening on http://127.0.0.1:3000')
})