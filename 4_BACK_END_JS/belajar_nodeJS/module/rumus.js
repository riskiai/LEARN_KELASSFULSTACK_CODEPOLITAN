const penjumlahan = (a, b) => {

    return a + b;

};

const PI = 3.14;

// const luas  = (jari) => PI * jari * jari;
const luas = ({ p, l }) => p * l;

const keliling = (jari) => 2 * PI * jari;

// module.exports.penjumlahan = penjumlahan;
// module.exports.PI = PI;
// module.exports.luas = luas;
// module.exports.keliling = keliling;

/* Mengelompokan Data */
const math = {
    penjumlahan,
    PI,
    luas,
    keliling
}

module.exports = math;