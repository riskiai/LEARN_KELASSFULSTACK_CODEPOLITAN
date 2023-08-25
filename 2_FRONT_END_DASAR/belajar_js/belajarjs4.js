/* Belajar AJAX Dan WEB API */

/* JSON */
/* 

    JSON.stringify(person)
    Mengubah Data JSON Ke Server

*/

/* const data = `{
    "ticker": {
        "base": "BTC",
        "target": "IDR",
        "price": "345001000.0000000",
        "volume": "28.02221313",
        "change": "-430000.0000000"
    },
    "timestamp": 16712737,
    "success": true,
    "error": ""
}`;
 */

/* Base URL Dan Query String Di Web API

1. Endpoint API URL
https://swapi.dev/api/people/ / Mengambil Data

API URL
 https://api.tvmaze.com/search/shows?q=ninja

 */

 /* Mengenal Data Di HTTP Header 
 
 1.   https://icanhazdadjoke.com/
 Accept : text/plain
 Content-Type : application/json
 
 */

 /* Melakukan Request Dengan Xmlhttprequest */
 // Mendapatkan Data API Di URL GET
 /* const req = new XMLHttpRequest();

req.onload = function() {
    data = JSON.parse(this.responseText);
    console.log(data);
};

req.onerror = function() {
    console.log('Error', this);
}

req.open('GET', 'https://swapi.dev/api/people/1');
req.send(); */

/* Melakukan Request Dengan Fetch */
 /* fetch('https://swapi.dev/api/people/1')
    .then((res) => {
        if (!res.ok) {
            throw Error('Could not fetch the data for that resource');
        }
        return res.json();
    }) */
    /* .then((data) => {
        console.log('json 1', data);
        return fetch('https://swapi.dev/api/people/2')
    })
    .then((res) => {
        console.log('request 2')
        if (!res.ok) {
            throw Error('Could not fetch the data for that resource');
        }
        return res.json(); */
    /* })
    .then ((data) => { */
        /* Mendapatkan Data dari return json */
        // console.log(data);
   /*  })
    .catch((err) => {
        console.log('error', err);
    }); */

/* Untuk Memuat Suatu Function */
/* const loadPeople = async () => {
    try {
        const res = await fetch('https://swapi.dev/api/people/1');
        const data = await res.json();
        console.log(data);

        const res2 = await fetch('https://swapi.dev/api/people/2');
        const data2 = await res2.json();
        console.log(data2);
    } catch (error) {
        console.error('Error:', error);
    }
}
loadPeople(); */

/* Melakukan Request Dengan Library Axios */
/* axios.get('https://swapi.dev/api/people/1').then((res) => {
    console.log(res.data)
}).catch((err) => {
    console.log(err); 
    alert(err.message);
})
 */
/* Mengimplementasikannya Dengan Fungsi Async Dan Await */
// Agar Lebih Dinamis
/* const getPeople = async (id) => {
    try {
        const res = await axios.get(`https://swapi.dev/api/people/${id}`);
        console.log(res.data);
    } catch (error) {
        console.log(error);
        console.log(error.message);
        console.log(error.response.status);
        console.log(error.response.data);
    }
};
 */

/* Menambahkan Data Headers Di Request Menggunakan Axios */

// Menampilkan data saat di klik
// const jokes = document.querySelector('#jokes');
// const button = document.querySelector('button');

// const addJoke = async () => {
//     const jokeText = await getJokes();
//     const newLI = document.createElement('LI');
//     newLI.append(jokeText);
//     jokes.append(newLI);
// }

// const getJokes = async () => {
    
//     try {
//         const config = {
//             headers: {
//                 Accept: 'application/json',
//             },
//         };
//         const res = await axios.get('https://icanhazdadjoke.com', config);
//         // console.log(res.data.joke);
//         return res.data.joke;
//     } catch (error) {
//         return 'No Jokes Available';
//     }
// };

// button.addEventListener('click', addJoke);


/* Menampilkan Daftar Acara Tv Dengan Axios */
const form = document.querySelector('#search-form');

form.addEventListener('submit', async (e) => {
    e.preventDefault() ;

    // Menampilkan data image secara berurutan
    document.querySelectorAll('img').forEach((img)=> img.remove());

    const keyword = form.elements.query.value;
    const config = {
        params: { q: keyword, 
        // embed: 'episodes',
        // imdb: 'tt0944947'
      },
    };
    const res = await axios.get(`http://api.tvmaze.com/search/shows`, config);
    // console.log(res.data);
    /* Memanggil Gambarnya */
    getImages(res.data);
    /* Jangan Lupa menyimpan datanya */
    form.elements.query.value = '';
});

/* membuat suatu function agar bisa datanya ke ambil */
const getImages = (shows) => {
    for (let result of shows) {
      if (result.show.image) {
        const img = document.createElement('img');
        img.src = result.show.image.medium;
        document.body.append(img);
      }
    }
} 