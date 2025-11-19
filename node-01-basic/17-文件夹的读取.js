const fs = require('fs');

fs.readdir('./', (err, files) => {
    console.log('----------华丽的分割线----------')
    if (err) {
        console.log(err);
    } else {
        console.log(files);
    }
});

const files = fs.readdirSync('./')
if (files) {
    files.forEach(file => {
        console.log(file);
    });
}