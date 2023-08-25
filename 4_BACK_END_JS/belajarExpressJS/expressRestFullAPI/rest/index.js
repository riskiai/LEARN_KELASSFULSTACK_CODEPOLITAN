/* Mendefinisikan Route Get_Post Di Express */
const path = require('path')
const { v4: uuidv4 } = require('uuid');
const express = require('express')
const methodOverride = require('method-override')
const app = express()


/* Untuk Mangambil Data */
app.use(express.json())
app.use(express.urlencoded({extended: true}))
app.use(methodOverride('_method'))
app.set('views', path.join(__dirname, 'views'))
app.set('view engine', 'ejs')


let comments = [
    {
        id: uuidv4(),
        username: 'Riski',
        text: 'ini adalah komentar'
    },
    {
        id: uuidv4(),
        username: 'Riski',
        text: 'ini adalah komentar'
    },
    {
        id: uuidv4(),
        username: 'Riski',
        text: 'ini adalah komentar'
    },
    {
        id: uuidv4(),
        username: 'Riski',
        text: 'ini adalah komentar'
    },
];

app.get('/comments', (req, res) => {
    res.render('comments/index', {comments})
})

app.get('/comments/create', (req, res) => {
    res.render('comments/create')
})

app.post('/comments', (req, res) => {
    const {username, text} =  req.body
    comments.push({username, text, id: uuidv4()})
    // console.log(comment)
    // res.send ('It Works!')
    res.redirect('/comments')
})

app.get('/comments/:id', (req, res) => {
    const {id} = req.params
    const comment = comments.find(c => c.id ===  id)
    res.render('comments/show', {comment})
})

app.get('/comments/:id/edit', (req, res) => {
    const {id} = req.params
    const comment = comments.find(c => c.id ===  id)
    res.render('comments/edit', {comment})
})

app.patch('/comments/:id', (req, res) => {
    // res.send('It Work');
    const {id}  = req.params
    const newComment = req.body.text
    const foundComment = comments.find(c => c.id === id)
    foundComment.text = newComment
    res.redirect('/comments')
})

app.delete('/comments/:id', (req, res) => {
    const {id} = req.params;
    comments = comments.filter(c => c.id !== id)
    res.redirect('/comments');

})


app.get('/order', (req, res) => {
    res.send('GET order response' )
});

app.post('/order', (req, res) => {
    // console.log(req.body)
    // Melakukan Parsing Data Dari Body Request
    const {item, qty} =  req.body
    res.send(`Item: ${item} - Qty: ${qty}`)
});


app.listen(8080, () => {
    console.log(`Server is running on: http://localhost:8080 `)
})