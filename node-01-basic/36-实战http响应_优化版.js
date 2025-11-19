// 导入 http 模块
const http = require('http');
const {readFile} = require("fs");

// 创建服务对象
const server = http.createServer(
    (request, response) => {
        // 设置响应头
        response.setHeader('Content-Type', 'text/html;charset=utf-8');

        // 设置响应体
        let htmlFile = __filename.split('.')[0].concat(".html");
        readFile(htmlFile, (err, data) => {
            if (err) {
                console.log(err);
                response.write(`<h1>${htmlFile} Not Found</h1>`);
                response.end();
            } else {
                response.write(data);
                response.end();
            }
        });
    }
)

// 监听端口号，启动服务
server.listen(3000, () => {
    console.log('服务已启动，请访问 http://127.0.0.1:3000');
});