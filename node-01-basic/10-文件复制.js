const fs = require('fs');
const data = fs.readFileSync('./观书有感.txt')
fs.writeFileSync('./观书有感2.txt', data)
console.log(process.memoryUsage())