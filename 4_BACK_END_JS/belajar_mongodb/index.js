/* Belajar Mongo DB */

const mongoose = require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/movie_db')
.then(() => {
    console.log('Connected to MongoDB')
}).catch((err) => {
    console.log(err)
});

/* Schema Movie */
const movieSchema = new mongoose.Schema({
    title: String,
    year: Number,
    genre: String,
    rating: Number,
    director: String
});

/* Modul Movie */
const Movie = mongoose.model('Movie', movieSchema)

/* const movie = new Movie({
     title: 'Black Panther',
     year: 2018,
     rating: 7.3,
     director: "Riski"
}) */

/* Untuk mensimpan databasenya di mongodb*/
// movie.save()
// console.log(movie)


// find movie berdasarkan tahunan
/* Movie.findOne({year: {$gte: 2019}, genre: 'Drama'}).then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});
  */

// find by id
/* Movie.findOne({_id: '64df1eb7498d6142c398a770'}).then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
}); */

/* Movie.findById('64df1eb7498d6142c398a770').then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
}); */


// UPDATE One dan berdasarkan id
// Movie.updateMany({ year: {$lt: 2018}}, {rating: 8.0}).then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// });

/* Movie.findByIdAndUpdate('64df17c2d36e42181b718c84', {title: 'black white'}, {new: true}).then((result) => {
     console.log(result)
}).catch((err) => {
    console.log(err)
}); */

// DELETE ONE and Many and by id 
// Movie.deleteOne({rating: 11}).then((result) => {
//     console.log(result)
// }).catch((err) => {
//     console.log(err)
// });

Movie.findByIdAndRemove('64df17e7f45edee1f305fc3e').then((result) => {
    console.log(result)
}).catch((err) => {
    console.log(err)
});




/* Insert Data JSON */
/* Movie.insertMany([
    {
        "title": "Avengers: Infinity War",
        "genre": "Drama",
        "director": "Riski AI",
        "year": 2019,
        "rating": 9.2,
    },
    {
        "title": "Avengers: Infinity War",
        "genre": "Drama",
        "director": "Riski AI",
        "year": 2011,
        "rating": 9.2,
    },
    {
        "title": "Avengers: Infinity War",
        "genre": "Action",
        "director": "Riski AI",
        "year": 2012,
        "rating": 9.2,
    },
    {
        "title": "Avengers: Infinity War",
        "genre": "Action",
        "director": "Riski AI",
        "year": 2020,
        "rating": 9.2,
    },
]).then((result) => {
    console.log('it works');
    console.log(result)
}).catch((err) => {
    console.log(err)
})
 */
