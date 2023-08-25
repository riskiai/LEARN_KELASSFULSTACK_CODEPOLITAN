/* Cara Menggunakan Middleware */
/* Method Use wajib digunakan */

const express = require('express');
const app = express();
morgan = require('morgan')


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
app.use('/admin', (req, res, next) => {
    const { password } = req.query;
    if (password === 'riski') {
        next();
    } else {
        res.send('Perlu Masukan Password');
    }
});


app.get('/', (req, res) => {
    res.send('Hello World')
})

app.get('/halaman', (req, res) => {
    console.log(req.timeRequest)
    res.send('Hello Halaman!')
})

app.get('/admin', (req, res) => {
    res.send('Hello Admin')
})
 
/* Kalo semisalkan di urlnya salah akses */
app.use((req, res) => {
    res.status(404).send('Page Not Found')
})

/* Menjalankan di localhost */
app.listen(3000, () => {
    console.log('Server is Running on port 3000')
})

