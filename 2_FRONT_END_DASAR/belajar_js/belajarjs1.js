/* Belajar JS DASAR */


/* NUMBERS */
/* 1. Memilik Satu Jenis */
/* 2. Bil. Positif */
/* 3. Bil. Negatif */
/* 4. Seluruh Angka (int) */
/*  */

/* Belajar Not And Number */
/* Belajar Memperbarui Nilai */

/* let score = 0;

score = score + 1
score += 1;
score /= 1;

/* Kata kunci const dan var untuk variabel  */
/* const ayam  = 10;
ayam = 20;

// yang benar
const umur =0;
 */ 

/* Operator Pembanding */
/* 

> lebih dari
< kurang dari
>= lebih dari sam dengan
<= kurang dari sama dengan
== bernilai sama dengan
!= bernilai tidaj sama dengan
=== bernilai sama dan sejenis
!== tidak sama dan sejenis
*/
 


/* CONSOLE KOLERASI DENGAN BELAJARJS.HTML */

/* Penggunaan Console */
// alert(1 + 2);
// console.log('hello world');
// console.log("Sebelum Pembanding");

/* Penggunaan IF KONDISI */
// if(1 + 1 === 2) {
//     console.log('Perhitungannya masih betul');
// }

// let angka = Math.random();
// console.log(angka);

// if (angka >= 0.5) {
//     console.log("Angka lebih dari 0.5");
// }

// if(angka <= 0.5) {
//     console.log('Angka lebih kecil dari 0.5');
// }

//Promt untuk seperti alert
// const kerja = prompt('Isikan hari!').toLowerCase;

// if (kerja === 'sabtu') {
//     console.log("Hari Ini kerja brok");
// }
// else if (kerja === 'senin') {
//     console.log("libur lah brok turu");
// } else {
//     console.log("ngumah bae lah");
// }

// const nilai = '80';

// if (nilai < 50) {
//     console.log('E');
// }else if (nilai < 60) {
//     console.log('D');
// }else if (nilai < 70 ) {
//     console.log('C');
// }else if (nilai < 80) {
//     console.log('E');
// }else if (nilai > 90) {
//     console.log('A'); 
// }


/* Kondisi IF Untuk Password */
// const password = prompt("Buat Password");

// if (password.length >= 6) {
//     if (password.indexOf(' ') === -1) {
//         if(password.indexOf('*') === -1 ) {
//             console.log("Password Harus Dikasih Bintang ");
//         }
//         console.log('Password Valid');
//     }else {
//         console.log('Password Tidak Boleh ada Spasi');
//     }
// } else {
//     console.log('Password Minimal 6 Karakter');
// }

/* KONDISI IF Beserta AND */
// if (password.length >= 6 && password.indexOf(' ') === -1){
//     console.log('password valid');
// }else {
//     console.log('password tidak memenuhi syarat'); 
// }

/* KONDISI UNTUK ADMIN Berserta OR || */
// const role = prompt('Masukan Role Akun');

// if(role === 'admin' || role === 'spv') {
//     console.log('boleh mengaksesnya');
// } else {
//     console.log("akses ditolak");
// }

/* KONDISI UNTUK ROLE BESERTA NOT ! */
// const role = prompt('Masukan Role Akun');
// if(role !== 'admin') {
//     console.log('Akses Ditolak');
// }else {
//     console.log('Boleh Mengaksesnya');
// }

/* PENGGUNAAN SWITCH DI JS*/
// const balonku = prompt('input warna balon');
// switch(balonku) {
//     case 'merah': 
//         console.log("Warna Merah");
//         break;
//     case 'hijau':
//         console.log("dorr");
//         break; 
//     default: 
//         console.log("Bukan Balon saya")
// }

/* ARRAY */
// let riski = ['arya', 'sukadiman', 'sukarji'];
/* 

    1. PUSH    :  MENAMBAHKAN ITEM PADA AKHIR ARRAY
    2. POP     :  MENGHAPUS ITEM DARI PALING AKHIR ARRAY
    3. SHIFT   :  MENGHAPUS ITEM DARI PALING AWAL ARRAY
    4. UNSHIFT :  MENAMBAHKAN ITEM PADA AWAL ARRAY


*/

/* PERULANGAN */
// console.log(1);
// console.log(2);
// console.log(3);

// for(let i = 1; i <= 10; i++) {
//     console.log('Saya Ganteng');
//     console.log(i);
// }


// for(let i = 0; i <= 20; i+= 2) {
//     console.log(i);
// }

/* Kebalikannya/ Perulangan Tanpa Henti */
// for(let i = 20; i >= 0; i--) {
//     console.log(i);
// }

// for(let i = 0; i < 10; i+= 2) {
//     console.log(i);
// }

// const animals = ['cat', 'deer', 'hog', 'koala', 'zebra '];

// for (let i = 0; i < animals.length; i++) {
//     console.log(i+1, animals[i]); 
// }

/* Nested Array Dan Nester Loop */
// const studentRow = [

//     ['Olivia', 'Liam', 'Emma', 'Noah'],
//     ['Amelia', 'Riski', 'Nizar', 'Loan'],
//     ['Sophia', 'Mateo', 'Isabella', 'Liam'],

// ];

// for(let i = 0; i < studentRow.length; i++) {
//     const row = studentRow[i];
//     console.log(`Seat Row #${i + 1}`);
//     for (let j = 0; j < row.length; j++) {
//         console.log(` ${row[j]}`);
//     }
//  } 

// const pilihan = 'abcd';
// for (let i = 1; i <= 10; i++) {
//     console.log(`${i}. Soal Nomor ${i}: `);
//     for (let j = 0; j < pilihan.length; j++) {
//         console.log(`${pilihan[j]}. Pilihan Jawaban`);
//     }
// }

/* Perintah WHILE */
// let num = 0;
// while (num < 10) {
//     console.log(num);
//     num++;
// }

// for(let num = 0; num < 10; num++){
//     console.log(num);
// }

/* Perintah Pengecekan Password */
// const PASSWORD = 'Pass123';

// let guess = prompt('enter the password');
// while (guess !== PASSWORD) {
//     guess = prompt('enter the password');
// }
// alert('congrats! the password is correct');

/* KATA KUINCI BREAK */
// let input = prompt('Hei, say something ');
// while(true) {
//     input = prompt(input);
//     if(input === "Stop") break;
// }
// alert('ok');

// for (let i = 0; i < 10000; i++) {
//     console.log(i);
//     if(i === 100) break;
// }

/* Membuat game tebak tebakan angka dengan while  */
// let maximum = parseInt(prompt('masukan nilai maksimal!'));
// while (isNaN(maximum)) {
//     maximum = parseInt(prompt('Masukan Nilai Maksimal!'));
// }

// const targetNum = Math.floor(Math.random() * maximum) + 1;
// console.log(targetNum);

// let guess = parseInt(prompt('Isi tebakan pertama kamu!'));

// while (guess !== targetNum) {
//     if (guess > targetNum) {
//         guess = prompt('Terlalu tinggi! tebak lagi: ');
//     }else  {
//         guess = prompt('Terlalu rendah! tebak lagi:');
//     }
// }

// alert('Selamat Tebakan Anda Benar');


/* Perulangan Elegan dengan Array For Of */
// const buah = ['Aple', 'Pisang', 'Jeruk', 'Pepaya'];

// for (let i = 0; i < buah.length; i++) {
//     console.log(`Buah ${buah[i]}`);
// }

// for (let bua of buah) {
//     console.log(`Buah ${bua}`);
// }

// const siswa = [
//     ['riski', 'nizar', 'debi', 'rahman'],
//     ['riski', 'nizar', 'debi', 'rahman'],
//     ['riski', 'nizar', 'debi', 'rahman'],
//     ['riski', 'nizar', 'debi', 'rahman'],
// ];

// for (let sis of siswa) {
//     for (let mahasiswa of sis) {
//         console.log(mahasiswa);
//     }
// }

/* Perulangan pada object dengan elegan FOR IN */
// const ScorSiswa = {
//     olivia: 20, 
//     Liam: 30,
//     riski: 50,
//     ripai: 70,
//     lewandoski: 80,

// }

// for (let siswa in ScorSiswa) {
//     console.log(`${siswa} memiliki skor ${ScorSiswa[siswa]}`);
// }

// Mencari nilai rata rata
// const ScoreSiswa = {
//     olivia: 20,
//     Liam: 30,
//     riski: 50,
//     ripai: 70,
//     lewandoski: 80,
// };

// let total = 0;
// let scores = Object.values(ScoreSiswa);
// for (let score of scores) {
//     total += score;
// }

// console.log(total / scores.length);


/* PENGENALAN FUNCTION DI JS */
// let lemparDadu = console.log(lemparDadu);

// function lemparDadu () {
//     console.log(Math.floor(Math.random() * 6) + 1);
// }

// function nyanyi() {
//     console.log('Cek..');
//     console.log('Do re mi..');
// }

// nyanyi();

/* Parameter dalam function */

// function selamatsiang(namee) {
//     console.log(`Halo, ${namee}. Selamat Siang`);
// }

// selamatsiang('Riski');

/* Multiple parameter dan argument */
// function jumlahkan (a, b) {
//     const total = a * b;
//     console.log(total);
// }

/* Statement Return Pada Function */
// function jumlahkan (a, b){
//     if(typeof a !== 'number' || typeof b !== 'number') {
//         return 'Bukan Angka';
//     }
//     return a + b;
// }

/* Visibilitas Variabel Sesuai Scope Atau Ruang Lingkup */
// let programing = 'Javascript';

// function typeSafe() {
//    let  programing = 'TypeScript';
//    console.log(programing);    
// }

// typeSafe();
// console.log(programing);

/* Blocked Scope Variable */
// let tinggi = 10
// if (tinggi > 6){
//     let lebar = 10
//     console.log(lebar);
// }

// console.log(tinggi);

// for (let risk = 0; risk < 20; risk++) {
//     const riskiganteng = risk;
//     console.log(riskiganteng);
// }

/* Lexical Scope */ 
// Function di dalam function
// function lamarKerja() {
//     const jabatan = 'Programmer';

//     function orangDalam() {
//         let kenalan = `Orang dalam bisa memasukan ${jabatan}`
//         console.log(kenalan);
//     }

//     orangDalam(); 
// }

/* Function Expressions */
// function perpangkatan(nilai) {
//     return nilai * nilai;
// }

// let hasil = perpangkatan(5);

// const hasilPerpangkatan = function (nilai, pembanding) {
//     return nilai * pembanding;
// };

// hasilPerpangkatan(10);

/* Function sebagai argument function lain */
// function duakali(func) {
//     func()
//     func()
// }

// function lemparDadu() {
//     const hasil = Math.floor(Math.random() * 6) + 1;
//     console.log(hasil);
// }

/* Function Bernilai Balik Function */
// function hasilnyadalahfunction() {
//     const rand = Math.random();
//     if(rand > 0.10) {
//         return function() {
//             console.log('Selamat, Angkanya Lebih Besar');
//         }
//     } else  {
//         return function() {
//             console.log('Maaf, Mungkin Bisa Coba Lagi');
//         } 
//     }
// }

/* Definisi Sebuah Method */
/* adalah suatu function yang didefinisikan dalam suatu objek */
// function myFun() { // function biasa
//     console.log('Hi');
//     return 'Hello';
// }

// const myMath = { // object
//     perkalian: function(x, y) { // method 
//         return x * y;
//     }
// };


/* Keyword Sakti Di JS untuk function */
/* this.riski */
// const hello = {
//     nama: 'Riski Ahmad Ilham',
//     hobi: 'Main Futsal',
//     alamat: 'Indramayu',
//     kenalan: function() {
//         return `Hi nama saya ${this.nama}. Dan Hobi saya adalah ${this.hobi}. Bisa Main di alamat saya ${this.alamat}`
//     }
// }

/* Try and Catch */
// try {
//     saya.kenalan();
// } catch {
//     console.log('Error!');
// }

// // saya.kenalan();
// console.log('setelah proses ty and catch');
// function teriak(msg) {
//     try {
//         console.log(msg.toUpperCase());
//     } catch (error) {
//         console.log(error);
//         console.log('Silahkan Masukan Tipe Data String pada Argument data string');
//     }
// }


/* Calback Function Foreach Method */
// const angka = [1,2,3,4,5,6,7,8,9,10];

// angka.forEach(function(el){
//     if(el % 2 == 0) {
//         console.log(el);
//     }
// });

// function  print(element) {
//     console.log(element);
// }
// angka.forEach(print);

/* Latihan calback foreach */
// const animes = [
//     {
//         title: 'Naruto',
//         rating: 90,
//     },
//     {
//         title: 'One Piece',
//         rating: 60,
//     },
//     {
//         title: 'Kaguya',
//         rating: 50,
//     },
// ];

// animes.forEach(function(anime){
//     console.log(`${anime.title} - ${anime.rating} / 100`);
// });

/* Map Method */
// const angka = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// const angkaDouble = angka.map(function(num) {
//     return num * 2; 
// });
 
// const animes = [
//     {
//         title: 'Naruto',
//         rating: 90,
//     },
//     {
//         title: 'One Piece',
//         rating: 60,
//     },
//     {
//         title: 'Kaguya',
//         rating: 50,
//     },
// ];

// const animelist = animes.map(function(anime) {
//     return anime.title.toUpperCase();
// });

/* Arrow => Function */
// function perpangkatan(x) {
//     return x * x;
// }
// const hasil = perpangkatan(5);

// const hasil = function (x) {
//     return x * x;
// };

// arrow function
// const perpangkatan = (x) => {
//     return x * x;
// }

// const random = () => {
//     return Math.floor(Math.random() * 1000);
// }

/* Implisit dari arrow function */
// const random = () => (
//     Math.floor(Math.random() * 1000)
// );

// const add = (a, b) => a + b;

/* Memahami Settimeout Dan Setinterval */
// console.log('Halo....');
// setTimeout(() => {

//     console.log('Masih Di Sana Gak? ');

// }, 5000);
// console.log('Saya pergi ya...');

/* setinterval */
// const interval = setInterval(() =>{
//     console.log(Math.random());
// }, 2000 );

/* ARRAY DENGAN FILTER METHOD */
// const angka = [1, 2, 3, 4, 5];

// const angkaBaru = angka.filter(n => {
//     return n < 3;
// });

// const angkaganjil = angka.filter(n => {
//     return n % 2 === 1;
// });

// Belajar Filter
// const animes = [
//     {
//         title: 'Naruto',
//         rating: 90,
//         year: 2011
//     },
//     {
//         title: 'One Piece',
//         rating: 60,
//         year: 2013
//     },
//     {
//         title: 'Kaguya',
//         rating: 50,
//         year: 2010
//     },
// ];

// const animeBaru = animes.filter((anime) => anime.year > 2010);
// const judulAnimeBagus = animeBagus.map((anime) => anime.title);

/* Array dengan every dan some method */
// const examScore = [80, 85, 79, 90, 93, 77];
// const isGraduate = examScore.every((score) => score >= 75);

// const animes = [
//     {
//         title: 'Naruto',
//         rating: 90,
//         year: 2011
//     },
//     {
//         title: 'One Piece',
//         rating: 60,
//         year: 2013
//     },
//     {
//         title: 'Kaguya',
//         rating: 50,
//         year: 2010
//     },
// ];

// const isAnimeListNew = animes.some((anime) => anime.year > 2010);

/* Mendapatkan Satu Nilai Sesuai Kondisi dari sebuah array dengan reduce */
// PROSES REDUCE
// const examScore = [80, 85, 70, 60, 65];

// const total = examScore.reduce((total, score) => {
//     return total + score;
// })

// const animes = [
    
//     {
//         title: 'One Piece',
//         rating: 60,
//         year: 2013
//     },
//     {
//         title: 'Naruto',
//         rating: 90,
//         year: 2011
//     },
//     {
//         title: 'Kaguya',
//         rating: 50,
//         year: 2010
//     },
// ];

// const bestAnime = animes.reduce((bestAnime, currAnime) => {
//     console.log(bestAnime, currAnime);
//     if(currAnime.rating > bestAnime.rating) {
//         return currAnime;
//     } 
//     return bestAnime;
// })

/* Object didalam arrow */
// const person = {
//     firstName: 'riski', 
//     lastName: 'Doe',
//     fullName: () => {
//         console.log(this);
//         return `${this.firstName} ${this.lastName}`;
//     },

//     panggilNanti: function () {
//         setTimeout(function () {
//              console.log(this);   
//             console.log(this.fullName());
//         }, 4000);
//     },

// };

/* 3 OPERATOR PENTING DI JS */
// || (nullish coalesce)
// ?? (nullish coalesce)
// ?. (Optional chaining)

/* Mengatur Default Value Pada Function */
// function lemparDadu(sisi = 6)  {
//     return Math.floor(Math.random() * sisi) + 1;
// }

// function sapa(name, msg = 'Selamat Kerja') {
//     console.log(`${name} ${msg}`);
// }

/* Mengubah arrat atau object menjadi deret value argument function */
// Math.max(1,2,3,4,5)
// Math.min(5,4,3,2,1)
// const angka = [1,2,3,4,5]
// Math.max(angka)
// Math.max(...angka)

/* Menggabungkan Nilai Array dengan array lagi */
// const angka = [1,2,3,4,5,6,7,8,9,10]
// const nama = ['riski', 'rokman', 'robi', 'delia'];

// const campuran = [...nama, ...angka]; 

/* Menggabungkan Property Object Dengan Object Lainnya */
// const user = {
//     name: 'riski',
//     email: 'riski@gmail.com',
// };

// const credential = {
//     password: 'pas', 
//     token: 'uu1231232131'
// }

// const userBaru = {...user, ...credential};

/* Malas Bikin Parameter banyak bisa pakai rest param */
// const sumAll = (...nums) => {
//     return nums.reduce((total, el) => total + el);
// };

// const nama  = ['Riski', 'Debi', 'Ijang', 'Felix'];

// const pemenang = (gold, silver, bronze, ...sisa) => {
//     console.log(`Medali Emas Diraih': ${gold}`);
//     console.log(`Medali silver Diraih': ${silver}`);
//     console.log(`Medali bronze Diraih': ${bronze}`);
//     console.log(`Peserta Lainnya: ${sisa}`);
// };

/* Bongkar Element Array Ke Masing-Masing Variable Dengan Mudah */
// const nama = ['riski', 'rokman', 'rendi', 'Gerad'];
// const [gold, silver, bronze, ...peserta] = nama;

/* Bongkar juga properti Object Ke Masing-masing variable */
// const user = {
//     name: 'Riski',
//     email: 'riski@gmail.com',
//     role: 'Admin',
// };

// const {name, email} = user;

/* Bongkar Properti Object Bisa dilakukan di dalam function */
// const user = {
//     name: 'Riski',
//     email: 'riski@gmail.com',
//     role: 'Admin',
// };

// const userAndRole = ({name, role})=> {
//     return `${name} ${role}`;
// }


/* BELAJAR DI KONSULTASI ONLINE SESI 16 */
const todoList = ["Belajar Javascript", "Belajar HTML"];

console.log("APLIKASI TODO LIST");

// Print Todo List
function showTodoList() {
    todoList.forEach((todo, i) => {
        console.log(`${i+1}. ${todo}`);
    });

}

function showMenu() {
    showTodoList();

    console.log("\n");
    console.log("Pilihan Menu");
    console.log("1. Tambah");
    console.log("2. Hapus");
    console.log("3. Keluar");
    const pilihan = prompt("Pilihan Menu");

    if(pilihan == "1") {
        // Tambahkan Todo
        console.log("Menambahkan Todo");
        const todoBaru = prompt("Masukan Todo:")
        todoList.push(todoBaru);
        showMenu();
    
    }else if (pilihan == "2") {
        // hapus todo
        console.log("MENGHAPUS TODO")
        const todoHapus = prompt("Masukan Nomor TODO:")
   
        todoList.splice(todoHapus-1, 1)
        showMenu();
    }else if (pilihan == "3") {
        // keluar
        console.log("Sampai Jumpa")
        return;
    
    }else  {
        console.log("Pilihan Tidak Benar");
    }
}

showMenu();



