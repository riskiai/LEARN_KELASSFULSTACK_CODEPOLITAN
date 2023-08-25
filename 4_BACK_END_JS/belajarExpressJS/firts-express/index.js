const express = require('express');
const app = express();

/* Mengenal Object Request dan Response */
/* app.use((req, res) => {
    console.log('we got request');
    // console.dir(res);
    // res.send('<h1>Hello Express</h1>');
    // res.send({message: 'Hello World'});
    res.send('ini string dari response');
});
 */

// localhost:8080/cats - mengirim string

app.get('/', (req, res) => {
    res.send('<h1>Halaman HomePage</h1>')
})

app.get('/cats', (req, res) => {
    // console.log('we got alive');
    res.send('This is cats page');
});

app.get('/about', (req, res) => {
     res.send('this is about page');
}); 

// domain.com/blog/bakal-dinamis-sesuai-judul
app.get('/blog/:judul', (req, res) => {
    // console.log(req.params);
    const {judul} = req.params;
    res.send(`Kita sedang melihat postingan dengan judul: ${judul}`);
});

// domain.com/blog/bakal-dinamis-sesuai-judul
app.get('/blog/:category/:judul/:author', (req, res) => {
    // console.log(req.params);
    const { category, judul, author } = req.params;
    res.send(`Blog Dengan kategori: ${category} |Author: ${author} |${judul}`);
});

app.get('/search', (req, res) => {

    // console.log(req.query);
    const {q} = req.query;
    if(!q) {
        res.send(`<h1>Tidak ada data yang dicari</h1>`);
    }
    res.send(`<h1>Search Keyword: ${q}</h1>`)

});

app.get('*', (req, res) => {
    res.send('Halaman Tidak Ditemukan');
});



app.listen(8080, () => {
    console.log('Server is running on  http://localhost:8080');
});

