const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
    if(req.query.isAdmin) {
        next();
    }
    res.send('you are not an admin')
})

router.get('/', (req, res) => {
    res.cookie('token', '123asdjkwptruix')
    res.cookie('user', 'admin')
    res.send('administrator')
})

module.exports = router