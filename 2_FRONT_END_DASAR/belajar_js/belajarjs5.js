/* BELAJAR JS OOP */

 /* Membuat Object Dengan Factory Function */
 /* const hex = (r, g, b) => {
    return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
 };

 const rgb = (r , g, b) => {
    return `rgb(${r}, ${g}, ${b})`;
 };

 function convertColor(r, g, b) {
    const color = {};

    color.r = r
    color.g = g
    color.g = b; */

    /* Dalam Suatu objek bisa menambahkan function */
    // color.rgb = (r, g, b) => {
    //     return `rgb(${this.r}, ${this.g}, ${this.b})`;
    // };

   /*   */
        // return `rgb(${this.r}, ${this.g}, ${this.b})`;
  /*   };

    color.hex = function() {
        const {r, g ,b} = this;
        return '#' + ((1 << 24) + (r << 16) + (g << 8) + b).toString(16).slice(1);
    }
    

    return color;
 } */

 /* Membuat Object Dengan class */
 /* class color {
    constructor(r,g,b,name) {
        this.r = r;
        this.g = g;
        this.b = b;
        this.name = name; */
        // console.log('Hi, ini adalah proses constructor');
        // console.log(`${r}`);
    // }

    /* Membuat Beberapa Method */
    /* colorName() {
        console.log('The Color name is' + this.name);
    }
    rgb() {
         const {r,g,b} = this;
         return `rgb(${r}, ${g}, {b})`; 
    }
 }

 newColor(); */

 /* Penjelasan OOP, Extend Dan Fungsi Super */
class Peliharaan { // parent class/object
    constructor(name, age) {
        console.log('parents executed');
        this.name = name;
        this.age = age;
    }
    makan() {
        return `${this.name} lagi makan`;
    }
}


 class Kucing extends Peliharaan{ // child class/object
    // constructor(name, age){
    //     this.name = name;
    //     this.age = age;
    // }
    // makan() {
    //     return `${this.name} lagi makan`;
    // }

    constructor(name, age, lives) {
        /* Untuk Memanggil parentnya */
        console.log('child executed');
        super(name, age, lives);
        this.lives = lives;
    }
    meong() {
        return `meong`;
    }
 }

 class Anjing extends Peliharaan { // child class/object
    // constructor(name, age){
    //     this.name = name;
    //     this.age = age;
    // }
    // makan() {
    //     return `${this.name} lagi makan`;
    // }
    constructor(name, age, lives) {
        console.log('Child Executed');
        super(name, age, lives);
        this.lives = lives;
    }
    gonggong() {
        return `guk guk`;
    }
         
 }
