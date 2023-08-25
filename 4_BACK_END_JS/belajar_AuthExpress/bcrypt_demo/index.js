/* MENGENAL CARA KERJA BCRYPT UNTUK HASH PASSWORD */

const bcrypt = require('bcrypt')
const hasPassword = async (pw) => {
    // const salt = await bcrypt.genSalt(12)
    // console.log(salt)
    const hash = await bcrypt.hash(pw, 12)
    console.log(hash)
}


const login = async (pw, hashedPw) => {
    const result = await bcrypt.compare(pw, hashedPw)
    if(result) {
        console.log('Login Successful')
    }else {
        console.log('Inncorect password')
    }
}

 hasPassword('fiesta') // $2b$12$NyJfBlh9dNGfsjnk18lDFuz1Y1H9LRXOr98PmHFC7WzYZg9YiOkzi
// login('fiesta' , '$2b$12$NyJfBlh9dNGfsjnk18lDFuz1Y1H9LRXOr98PmHFC7WzYZg9YiOkzi')