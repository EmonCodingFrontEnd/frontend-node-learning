const fs = require('fs');

// (node:60656) [DEP0147] DeprecationWarning: In future versions of Node.js, fs.rmdir(path, { recursive: true }) will be removed. Use fs.rm(path, { recursive: true }) instead
fs.rmdir('./tmp', {recursive: true}, (err) => {
    if (err) {
        console.log('异步递归删除目录失败-rmdir', err);
    } else {
        console.log('异步递归删除目录成功-rmdir');
    }
});

// (node:38300) [DEP0147] DeprecationWarning: In future versions of Node.js, fs.rmdir(path, { recursive: true }) will be removed. Use fs.rm(path, { recursive: true }) instead
try {
    fs.rmdirSync('./tmp', {recursive: true})
    console.log('同步递归删除目录成功-rmdirSync');
} catch (e) {
    console.log('同步递归删除目录异常-rmdirSync');
}

// Node14.14+ 推荐的删除文件夹的方法
try {
    fs.rm('./tmp', {recursive: true}, (err) => {
        if (err) {
            console.log('异步递归删除目录失败-rm', err);
        } else {
            console.log('异步递归删除目录成功-rm');
        }
    });
} catch (e) {
    console.log('异步递归删除目录异常-rm', e);
}

try {
    fs.rmSync('./tmp', {recursive: true})
    console.log('同步递归删除目录成功-rmSync');
} catch (e) {
    console.log('同步递归删除目录异常-rmSync');
}