// import {mkdir} from 'node:fs';

const fs = require('fs');
const folderName  = process.argv[2] || 'Project';

/* Fungsi ASYNC */
/* fs.mkdir('project', {recursive: true}, (err) => {

    console.log('di dalam callback');
    if (err) throw err;

}); */

/* Proses Mendeteksi Error */
/* Dan pembuatan folder melalui program */
try {

    fs.mkdirSync(folderName);
    fs.writeFileSync(`${folderName}/index.html`, ''); 
    fs.writeFileSync(`${folderName}/app.js`, ''); 
    fs.writeFileSync(`${folderName}/app.css`, ''); 

} catch (error) {
    console.log(error);
}


