const fs = require('fs');

const rs = fs.createReadStream('./观书有感.txt')
const ws = fs.createWriteStream('./观书有感2.txt');
rs.pipe(ws).on('error', (err) => {
    console.log(err)
});