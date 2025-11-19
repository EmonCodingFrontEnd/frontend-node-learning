const fs = require('fs');

// 异步非递归创建，若目录已存在，则创建失败
try {
    fs.mkdir('./tmp', (err) => {
        if (err) {
            console.log(err);
            console.log('异步非递归创建失败', err)
        } else {
            console.log('异步非递归创建成功')
        }
    });
} catch (e) {
    console.log('异步非递归创建异常', e);
}

// 异步递归创建
try {
    fs.mkdir('./tmp/tmp1/tmp2', {recursive: true}, (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('异步递归创建成功')
        }
    })
} catch (e) {
    console.log('异步递归创建异常', e);
}

// 同步非递归创建
try {
    fs.mkdirSync('./tmp');
    console.log('同步非递归创建成功')
} catch (e) {
    console.log('同步非递归创建异常', e)
}

// 同步递归创建
try {
    fs.mkdirSync('./tmp/tmp1/tmp2', {recursive: true});
    console.log('同步递归创建成功')
} catch (e) {
    console.log('同步递归创建异常', e)
}