/* BELAJAR KONSEP AUTH DAN IMPLEMENTASI DI EXPRESS.JS */

const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const session = require('express-session');
const User = require('./models/user');

mongoose.connect('mongodb://127.0.0.1/auth_demo')
    .then((result) => {
        console.log('connection to mongodb');
    }).catch((err) => {
        console.log(err);
    });

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(express.urlencoded({
    extended: true
}));

app.use(session({
    secret: 'notasecret',
    resave: false,
    saveUninitialized: false
}));

/* Membuat Middleware Authentication */
const auth = (req, res, next) => {
    if(!req.session.user_id) {
        return res.redirect('/login')
    }
    next()
}

app.get('/', (req, res) => {
    res.send('Homepage');
});

app.get('/register', (req, res) => {
    res.render('register');
});

app.post('/register', async (req, res) => {
    const { username, password } = req.body;

    /* Memvalidasi datanya */
    try {
        // const hashedPassword = await bcrypt.hash(password, 10);
        const user = new User({
            username,
            password
        });
        await user.save();
        req.session.user_id = user._id;
        res.redirect('/admin');
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan saat mendaftar.');
    }
});

app.get('/login', (req, res) => {
    res.render('login');
});


/* Mengirim Datannya */
app.post('/login', async (req, res) => {
    const { username, password } = req.body;

    /* Cek Validasi Datanya */
    try {
        const user = await User.findOne({ username });

        if (user) {
            const isMatch = await bcrypt.compare(password, user.password);

            if (isMatch) {
                req.session.user_id = user._id;
                return res.redirect('/admin'); // Tambahkan return di sini
            }
        }

        res.redirect('/login');
    } catch (error) {
        console.error(error);
        res.status(500).send('Terjadi kesalahan saat login.');
    }
});

app.post('/logout', (req, res) => {
    // req.session.user_id = null 
    req.session.destroy(() => {
        res.redirect('/login')
    })
})


app.get('/admin', auth, (req, res) => {
   /*  if (!req.session.user_id) {
        res.redirect('/login')
    } */
    res.render('admin')
});


app.get('/profile/settings', auth, (req, res) => {
    res.send('Profile Settings: ' + req.session.user_id)
})

app.listen(3000, () => {
    console.log('App Listening on port http://localhost:3000');
});
