/* Persiapan Auth Dengan Membuat Model Dan Halaman Register */
const mongoose = require('mongoose')
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'username is required'],
    },
    password: {
        type: String,
        required: [true, 'password is required'],
    },
})

/* Fungsi dari loginnya */
// Ini adalah beberapa fungsinya
// Logic nya bisa di tambahkan disini
/* userSchema.statics.findByCredentials = async (username, password) => {
    const user = await this.findOne({username})
    const isMatch = await bcrypt.compare(password, user.password)
    return isMatch ? user : false
} */

/* Fungsi dari registernya */
/* bcrypt */
userSchema.pre('save', async function (next) {
    if(!this.isModified('password')) {
      return next()
    }
    this.password = await bcrypt.hash(this.password, 10 )
    next()
})

// module.exports = mongoose.model('User', userSchema)
module.exports = mongoose.model('User', userSchema)