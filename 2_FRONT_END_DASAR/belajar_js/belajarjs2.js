/* BELAJAR JS DOM */

/* PROPERTIES DAN METHODS YANG PENTING DIKETAHUI00 */
/* 

classList
getAttribute()
setAttribute()
appendChild()
append()
prepend()
removeChild()
remove()
createElement()
innerText
textContent
innerHTML
value
parrentElement
children
nextSibling
previousSibling
style

*/

/* Beberapa evemt pada DOM */

/* 

    click
    drag
    drop
    hover
    scroll
    form submission 
    key press
    focus/blur
    mouse wheel
    double click
    copy
    paste
    audio
    screen resize
    print

*/

/* Memanfaatkan Generate Color Menggunakan addeventListener */
// const button = document.querySelector('button');
// const h1 = document.querySelector('h1');

// button.addEventListener('click', () => {
// 	const newColor = generateRandomColor();
// 	document.body.style.backgroundColor = newColor;
// 	h1.innerText = newColor;
// });

// const generateRandomColor = () => {
// 	const r = Math.floor(Math.random() * 255);
// 	const g = Math.floor(Math.random() * 255);
// 	const b = Math.floor(Math.random() * 255);

// 	return `rgb(${r}, ${g}, ${b})`;
// };


/* Memanfaatkan Keyword This Pada Event Dom */
// const generateRandomColor = () => {
// 	const r = Math.floor(Math.random() * 255);
// 	const g = Math.floor(Math.random() * 255);
// 	const b = Math.floor(Math.random() * 255);

// 	return `rgb(${r}, ${g}, ${b})`;
// };

// const buttons =  document.querySelectorAll('button');

// for(let button of buttons) {
//     button.addEventListener('click', colorize);
    //     () => {
    //     button.style.backgroundColor = generateRandomColor();
    //     button.style.color = generateRandomColor();
    //     console.log(this);
    // })
// }

// const headings =  document.querySelectorAll('h1');

// for(let heading of headings) {
//     heading.addEventListener('click', colorize);
        // () => {
        // heading.style.backgroundColor = generateRandomColor();
        // heading.style.color = generateRandomColor();
        // console.log(this);

// }

/* Membuat function agar bisa dipanggil */
// function colorize() {
//     this.style.backgroundColor = generateRandomColor();
//     this.style.color = generateRandomColor();
// } 


/* Belajar Keyboard event dan mengenal Object Dalam Event */
// document.querySelector('button').addEventListener('click', (e) => {
//     console.log(e);
// });

// const input = document.querySelector('input');

// input.addEventListener('keydown', (e) => {
//     console.log(e.key);
//     console.log(e.code);
// });

// input.addEventListener('keyup', () => {
//     console.log('Tombol dirilis');
// });


/* Mengenal Event Preventdefault */
// const form = document.querySelector('#form');
// form.addEventListener('submit', function(e) {
// 	console.log('submitted');
// 	e.preventDefault(); // Hindari pengiriman formulir ke "/destination"
//     console.log('Submitted form');
// });

// Mencegah agar tidak ke arah tujuannya 
// Pakai e.preventDefault();
// document.querySelector('a').addEventListener('click', (e) => {

//     e.preventDefault();
//     console.log('Harusnya Ke Google');

// });


/* Praktek Input Realtime Dengan Event Dan Dom */
// const form = document.querySelector('#form');
// const input = document.querySelector('input');
// const list = document.querySelector('#notes');
// form.addEventListener('submit', function(e) {

    // e.preventDefault();
    // const noteValue = input.value;
    // const newList = document.createElement('li');
    // newList.innerText = noteValue;

//     // console.log(newList);
//     // cetak datanya
    // list.append(newList);
    // input.value = '';

// });


/* Event Input dan change pada form */
    // const form = document.querySelector('#form');
    // const input = document.querySelector('input');
    // const list = document.querySelector('#notes');
   
    // input.addEventListener('change', (e) => {
    //     console.log('Nilai Berubah');
    // });

    // input.addEventListener('input', (e) => {
    //     // Merubah Secara Real Time
    //     // document.querySelector('h1').innerText = input.value; 
    //     console.log('Nilai Berhasil Di Input');
    // });

    // form.addEventListener('submit', function(e) {
    // e.preventDefault();
    // const noteValue = input.value;
    // const newList = document.createElement('li');
    // newList.innerText = noteValue;

    // list.append(newList);
    // input.value = '';

    // });

    /* Mengenal Event Bubbling */
    // const button = document.querySelector('#changeColor');
    // const container = document.querySelector('#container');

    // button.addEventListener('click', function(e) {
    //     container.style.backgroundColor = generateRandomColor();
    //     e.stopPropagation();
    // });

    // container.addEventListener('click', function() {
    //     container.classList.toggle('hide');
    // });

    // const generateRandomColor = () => {
    //     const r = Math.floor(Math.random() * 255);
    //     const g = Math.floor(Math.random() * 255);
    //     const b = Math.floor(Math.random() * 255);
    
    //     return `rgb(${r}, ${g}, ${b})`;
    // };
    
    /* Mengenal Event Delegation */
    const form = document.querySelector('#form');
    const input = document.querySelector('input');
    const list = document.querySelector('#notes');

    form.addEventListener('submit', function(e) {
        e.preventDefault();
        const noteValue = input.value;
        const newList = document.createElement('li');
        newList.innerText = noteValue;
    
        list.append(newList);
        input.value = '';
    
    });

    /* Agar Bisa Langsung ilang saat diklik buat fungsi tersebut */
    list.addEventListener('click', (e) => {

       e.target.nodeName === 'LI' && e.target.remove();
    //    console.dir(e.target);

    });

    // const lis = document.querySelectorAll('li');
    // for(let li of lis) {
    //     li.addEventListener('click', function() {

    //         li.remove();

    //     });
    // }