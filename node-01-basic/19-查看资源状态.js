const fs = require('fs');

fs.stat(__filename, (err, stats) => {
    if (err) {
        console.log(err);
    } else {
        console.log(stats);
        console.log('是否是文件：' + stats.isFile());
        console.log('是否是目录：' + stats.isDirectory());
    }
});