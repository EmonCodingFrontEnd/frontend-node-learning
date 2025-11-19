const fs = require('fs');

/*
    bug：相对路径参照物：命令行的工作目录。
    目录设定：
    .
    └── frontend-node-learning
        ├── flyin-awesome-monorepo
        ├── flyin-awesome-package
        ├── flyin-awesome-package-test
        └── node-01-basic

    若当前目录是 frontend-node-learning ，命令行是 node node-01-basic/21-相对路径的bug.js ， 则文件创建到 frontend-node-learning 目录下
    若当前目录是 node-01-basic ，命令行是 node ../node-01-basic/21-相对路径的bug.js ， 则文件创建到 node-01-basic 目录下
    若当前目录是 node-01-basic ，命令行是 node 21-相对路径的bug.js ， 则文件创建到 node-01-basic 目录下
    总结：在哪个目录里执行命令，文件就创建到哪一个目录下。
 */
// fs.writeFileSync('./静夜思.txt', '床前明月光，疑是地上霜。')

// 使用绝对路径，避免上诉“bug”！
console.log('__filename=' + __filename, '\n__dirname=' + __dirname)
fs.writeFileSync(__dirname + '/静夜思.txt', '床前明月光，疑是地上霜。')