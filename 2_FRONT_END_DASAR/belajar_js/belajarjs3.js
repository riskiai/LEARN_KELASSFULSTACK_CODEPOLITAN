/* Belajar JS Single Thread */
// console.log('Bakal Muncul Pertama');

// setTimeout(() => {
//     console.log(
//         'Ini adalah Masuk Memory Proses Dijalankan 3 Detik'
//     )
// }, 3000);

// console.log('Bakal Muncul Kedua');


/* Belajar Callback Hell Di Javascript */
/* setTimeout(function() {

    document.body.style.backgroundColor = 'red';
        setTimeout(function() {

            document.body.style.backgroundColor = 'green';
            setTimeout(function() {

                document.body.style.backgroundColor = 'yellow';
            
            },3000);
        },2000); 
},1000); */

// Mendapatkan Data API dari Backend
// searchMoviesApi('Naruto', function(movies) {

//     saveToMyDb(movies, function() {
        /* Kalau Berhasil kita letakan dan disimpan */
    //     filteringMovie(movies, () => {

    //     }, ()=> {

    //     });

    // }, () => {
        /* Kalau gagal kita coba lagi */

    
//       }
//     );

// }, () => {

    /* Server error */

// });



/* Latihan Pakai Request Callback Function */
/* const requestCallback = (url, success, failure) => {
    const delay = Math.floor(Math.random() * 4500) + 500;
    setTimeout(() => {
        if (delay > 4000) {
            failure('Error: Connection Timeout');
        } else {
            success(`Success: ${url} (${delay}ms)`);
        }
    }, delay);
}; */

// panggil request callback 
/* requestCallback(
    'movie.com', 
    function(response) {
        console.log('Berhasil', response);
        requestCallback(
            'movie.com', 
            function(response) {
                console.log('Berhasil', response);
        }, function(error) {
            console.log('Error, it failed!', error);
        }); 
    }, 
    function(error) {
    console.log('Error, it failed!', error);
});  */

/* Latihan Request Pakai Promise calback */
// const requestPromise= (url) => {
//     return new Promise((resolve, reject) => {
//         const delay = Math.floor(Math.random() * 4500) + 500;
//         setTimeout(() => {
//             if(delay > 4000) {
//                 reject('Error: Connection Timeout');
//             }else {
//                 resolve(`Success: ${url} (${delay}ms)`);
//             }
//         }, delay);
//     });
// };

// Menjalankan didalam browser
/* requestPromise('movie.com').then((response) => {
    console.log('success', response);
    
}).catch((error) => {
    console.log('error', error);
});
 */

// cara sederhana agar bisa calback
/* requestPromise('movie.com').then((result) => {
    console.log('page 1');
    console.log(result);
    return requestPromise('movie.com');
   
    })
    .then(() => {
        console.log('page 2');
        return requestPromise('movie.com');
    })
    .then(() => {
        console.log('page 3')
        return requestPromise('movie.com');
    })
.catch((err) => {
    console.log(err);
}); */


/* cara Membuat Promise */
/* const contohPromise = () => {
 return new Promise((resolve, reject) => {
    // resolve(() => {
    //    'berhasil';
    // }); 
    reject(() => {
        'gagal';
    });
  });
};
 */

// Percobaaan Lagi promise untuk color
/* const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    });
}; */

// memanggil promise nya
/* delayedColorChange('red', 100)
    .then(() => delayedColorChange('yellow', 1000))
    .then(() => delayedColorChange('green', 1000))
    .then(() => delayedColorChange('blue', 1000))
    .then(() => delayedColorChange('purple', 1000))
    .then(() => delayedColorChange('orange', 1000))
    .then(() => delayedColorChange('black', 1000))
 */

/* Belajar Fungsi async keyword */
// function hello() {}
// async function hello() {}
/* const hello = async () => {
    // throw  "Maaf Gak Kenal";
    return 'Hello World';
};

hello().then((res) => {
    console.log('response', res);
}).catch((err) => {
    console.log('error', err);
});
 */

/* Fungsi await keyword */
// delayedColorChange('red', 100)
//     .then(() => delayedColorChange('yellow', 1000))
//     .then(() => delayedColorChange('green', 1000))
//     .then(() => delayedColorChange('blue', 1000))
//     .then(() => delayedColorChange('purple', 1000))
//     .then(() => delayedColorChange('orange', 1000))
//     .then(() => delayedColorChange('black', 1000))

/* Fungsi Async dan await */
const delayedColorChange = (color, delay) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            document.body.style.backgroundColor = color;
            resolve();
        }, delay);
    });
};

async function changeColor() {
    await delayedColorChange('red', 1000);
    await delayedColorChange('yellow', 1000);
    await delayedColorChange('green', 1000);
    await delayedColorChange('purple', 1000);
    await delayedColorChange('orange', 1000);
    await delayedColorChange('black', 1000);
    return 'All Done!';
}

// changeColor().then((res) =>alert(res));
// changeColor();
async function printRainbow() {
    await changeColor();
    console.log('All Done! Dari PrintRainbow');
}

printRainbow();