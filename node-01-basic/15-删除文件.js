const fs = require('fs');

fs.unlink('./观书有感.txt', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('删除成功');
    }
});

// Node 14.14+
fs.rm('观书有感2.txt', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('删除成功');
    }
});