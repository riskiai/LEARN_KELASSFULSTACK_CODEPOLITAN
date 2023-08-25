/* DATA ONE TO MANY */
const mongoose = require('mongoose')

/* Connect To MongoDB */
mongoose.connect('mongodb://127.0.0.1/relation_db')
    .then((result) => {
        console.log('connected to mongodb')
    }).catch((err) => {
        console.log(err)
    });


const userSchema = new mongoose.Schema({
    username: String,
    age: Number,
})

const tweetSchema = new mongoose.Schema({
    text: String, 
    likes: Number,
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    }
})

const User = mongoose.model('User', userSchema) 
const Tweet = mongoose.model('Tweet', tweetSchema)

 
const makeTweet = async () => {
    const user = await User.findOne({
        username: 'Riski', // tambahkan tanda koma di sini
        // age: 20
    })
    const tweet = new Tweet({
        text: 'Hello World War 2',
        likes: 0
    })
    tweet.user = user
    await user.save() // tambahkan await di sini
    await tweet.save() // tambahkan await di sini
}

// makeTweet()

const showTweets = async () => {
    const tweets = await Tweet.findById('64e579fc0108f436fc8f6f96').populate('user')
    console.log(tweets)
}

showTweets()
