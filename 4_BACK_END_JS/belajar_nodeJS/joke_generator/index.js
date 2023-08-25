const jokes = require('give-me-a-joke');

const color  = require('chalk-rainbow');

const cowsay = require('cowsay');

console.log(

    cowsay.say({
        text: "I'm a mooodle",
        e: 'o0',
        T: 'U',
    })
    
);

// console.log(jokes); 
jokes.getRandomDadJoke(function(joke) {
    console.log(color('Dad Joke: ' + joke));
});

// jokes.getRandomCNJoke(function(joke) {
//     console.log(color('CNJ joke: ' + joke));
// });