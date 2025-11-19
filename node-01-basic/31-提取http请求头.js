// 导入 http 模块
const http = require('http');

// 创建服务对象
const server = http.createServer(
    (request, response) => {
        console.log('request.httpVersion' + request.httpVersion,
            'request.method=' + request.method,
            'request.url=' + request.url,
            'request.headers=' + request.headers)

        response.setHeader('Content-Type', 'text/plain;charset=utf-8');
        response.end('你好，Hello World!');
    }
)

// 监听端口号，启动服务
server.listen(3000, () => {
    console.log('服务已启动，请访问 http://127.0.0.1:3000');
});