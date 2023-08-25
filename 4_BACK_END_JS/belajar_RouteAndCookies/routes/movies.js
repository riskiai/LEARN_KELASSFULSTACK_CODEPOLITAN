const express = require('express')
const router = express.Router()


// define routes
router.get('/', (req, res) => {
    const {user = 'No-name',token = '' } = req.cookies
    // console.log(user)
    // res.send('movies index')
    // res.send(`Hello {$user}, your token is ${token} `)
    res.send(`Hello ${user}, your token is ${token}`)
})

router.get('/create', (req, res) => {
    res.send('movies create')
})

router.post('/', (req, res) => {
    res.send('movies store')
})

router.get('/:id', (req, res) => {
    res.send('movies show')
})

router.put('/:id', (req, res) => {
    res.send('movies update')
})

router.delete('/:id', (req, res) => {
    res.send('movies delete')
})

module.exports = router