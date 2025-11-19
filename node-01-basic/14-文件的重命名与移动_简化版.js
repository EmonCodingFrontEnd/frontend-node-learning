const fs = require('fs');

(async function rename() {
    await fs.promises.rename('./座右铭.txt', './论语.txt');
    console.log('重命名成功');

    await fs.promises.mkdir('./tmp', {recursive: true});
    await fs.promises.rename('./论语.txt', './tmp/论语.txt');
    console.log('移动成功');
})()
