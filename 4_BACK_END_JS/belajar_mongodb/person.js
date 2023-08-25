/* Konek database dulu */
const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/ShopApp')
    .then(() => {
        console.log('Connected to MongoDB');
    }).catch((err) => {
        console.log(err);
    });


/* Membuat Virtual Property Di Mongoose */
const personSchema = mongoose.Schema({
    first_name: String,
    last_name: String
});

/* Mendefinisikan sebagai virtual */
personSchema.virtual('fullName').get(function() {
    return `${this.first_name} ${this.last_name}`;
});

/* Mempelajari Middleware Di Mongoose */
personSchema.pre('save', async function() {
    this.first_name = 'riski'
    this.last_name = 'LoveGood'
    console.log('Persiapan menyimpan data')
})

personSchema.post('save', async function() {
    console.log('Data Berhasil di simpan')
})


const Person = mongoose.model('Person', personSchema);

const person = new Person({
    first_name: 'ron',
    last_name: 'Potter'
});

console.log(person)

// console.log(person.last_name);
person.save().then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});