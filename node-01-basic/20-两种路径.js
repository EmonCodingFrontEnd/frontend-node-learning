const fs = require('fs');

// 相对路径
// 第一种
// fs.writeFileSync('./所谓伊人.txt', '所谓伊人，在水一方。')
// 第二种
// fs.writeFileSync('所谓伊人.txt', '所谓伊人，在水一方。')

// 绝对路径
// 第一种：
// fs.writeFileSync('/Users/wenqiu/temp/所谓伊人.txt', '所谓伊人，在水一方。')
// 第二种：
fs.writeFileSync(__dirname + '/所谓伊人.txt', '所谓伊人，在水一方。')