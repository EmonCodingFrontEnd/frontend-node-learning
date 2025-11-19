// 导入 http 模块
const http = require('http');

// 创建服务对象
const server = http.createServer(
    (request, response) => {
        // 设置响应状态码和描述
        response.statusCode = 404;
        response.statusMessage = 'resources not found';

        // 设置响应头
        response.setHeader('Content-Type', 'text/plain;charset=utf-8');
        response.setHeader('test', [1, 2, "3"])

        // 设置响应体
        response.write('404 resources not found\n');
        response.end('你好，Hello World!');
    }
)

// 监听端口号，启动服务
server.listen(3000, () => {
    console.log('服务已启动，请访问 http://127.0.0.1:3000');
});