/* Cara Menggunakan Middleware */
/* Method Use wajib digunakan */

const express = require('express');
const app = express();
morgan = require('morgan')

const ErrorHandler = require('./ErrorHandler');


// morgan('tiny')
// app.use(()=> {
//     console.log('hei')
// })
// app.use(morgan('dev'));
 

/* Cara midleware Sederhana */
// app.use((req, res, next) => {
//     // res.send('Hello Middleware!')
//     console.log('middleware pertama')
//     next()
//     console.log('middleware petama setelah next')
// });

// app.use((req, res, next) => {
//     // res.send('Hello Middleware!')
//     console.log('middleware Kedua')
//     next()
// });


/* Cara Mempraktekan Middleware Lebih Lanjut */
app.use(morgan('dev'));
app.use((req, res, next) => {
    // req.timeRequest = Date.now()
    // req.method = 'PUT'
    console.log(req.method, req.url);
    next()
})

/* Mencoba contoh logic middleware Authentication */
/* app.use((req, res, next) => {
    const {password} = req.query;
    if (password === 'riski') {
        next();
    }
    res.send('Perlu Masukan Passowrd');
})
 */

/* Menggunakan Middleware Pada Route Tertentu Saja */
/* Jika Ingin Masuk Halaman Tuliskan url dibawah ini !*/
/* http://localhost:3000/halaman?password=riski */
// app.use((req, res, next) => {
//     const {password} = req.query;
//     if (password === 'riski'){
//         next()
//     }
//     res.send('Perlu Masukan Password')
// })

/* Menggunakan Middleware pada route admin saja ada password */
/* Error Handling */
app.use('/admin', (req, res, next) => {
    const { password } = req.query;
    if (password === 'riski') {
        next();
    } else {
        // res.send('Perlu Masukan Password');
        // res.status(401) 
        throw new ErrorHandler('Perlu Masukan Password', 401)
        
    }
});


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/halaman', (req, res) => {
    console.log(req.timeRequest)
    res.send('Hello Halaman!')
})

app.get('/error', (req, res) => {
    bird.fly()
})

app.get('/admin', (req, res) => {
    res.send('Hello Admin')
})

app.get('/general/error', (req, res) => {
    throw new ErrorHandler();
})

/* Middleware dari error handler sendiri */
/* app.use((err, req, res, next) => {
    console.log('***************************')
    console.log('************EROR***********')
    console.log('***************************')
    console.log(err.message);
    // throw new
    next(err)
}) */


/* Memanfaatkan class yang sudah dibikin */
/* ErrorHandler.js */
app.use((err, req, res, next) => {
    const {status = 403, message = 'Something went wrong'} = err; 
    res.status(status).send(message);
})

 
/* Kalo semisalkan di urlnya salah akses */
app.use((req, res) => {
    res.status(404).send('Page Not Found')
})



/* Menjalankan di localhost */
app.listen(3000, () => {
    console.log('Server is Running on port 3000')
})

