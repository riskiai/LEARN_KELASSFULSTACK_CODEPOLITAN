/* Relasi Data One To Few */

const mongoose = require('mongoose')

/* Connect To MongoDB */
mongoose.connect('mongodb://127.0.0.1/relation_db')
    .then((result) => {
        console.log('connected to mongodb')
    }).catch((err) => {
        console.log(err)
    });

const userSchema = new mongoose.Schema({
    name: String,
    addresses: [{
        _id: false,
        street: String,
        city: String,
        country: String
    }]
})

/* Membuat Model */
const User = mongoose.model('User', userSchema)

/* const makeUser = async () => {
    const user = new User({
        name: 'Riski', 
    }) */
   /*  user.addresses.push({ 
        _id: false,
        street: '123 Main St',
        city: 'Anytown',
        country: 'Indonesia'
    }) */

   /*  user.addresses.push({
        street: '123 Main St',
        city: 'Anytown',
        country: 'Indonesia'
    }) */
    
    // try {
    //     const res = await user.save()
    //     console.log(res)
    // } catch (error) {
    //     console.error(error)
    // }

   /*  const res = await user.save()
    console.log(res)
}

makeUser() */



/* Relasi Data One To Few */
const addAddress = async (id) => {
    try {
        const user = await User.findById(id);
        if (!user) {
            console.log('User not found');
            return;
        }

        user.addresses.push({
            street: '123 Main St',
            city: 'Anytown',
            country: 'INA'
        });

        const res = await user.save();
        console.log(res);
    } catch (error) {
        console.error(error);
    }
};

addAddress('64e47cf28a6e44a2a82b7d09');
