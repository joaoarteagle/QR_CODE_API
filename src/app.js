
const Qr = require('qrcode')


let url = 'https://drive.google.com/file/d/1P1UKPR9gq7IkbnXwRb2U_3QuTm2l6N0B/view?usp=sharing';

Qr.toFile('qrcode.png',url, (e)=>{
    if(e) throw e;
    console.log("Sucesso");
})