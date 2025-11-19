const fs = require('fs');

fs.rename('./座右铭.txt', './论语.txt', (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('重命名成功');

        fs.mkdir('./tmp', {recursive: true}, (err) => {
            if (err) {
                console.log(err);
            } else {
                fs.rename('./论语.txt', './tmp/论语.txt', (err) => {
                    if (err) {
                        console.log(err);
                    } else {
                        console.log('移动成功');
                    }
                });
            }
        });
    }
});