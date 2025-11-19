// 导入 http 模块
const http = require('http');

// 创建服务对象
const server = http.createServer(
    (request, response) => {
        let {method, url} = request;
        const {searchParams, pathname} = new URL(url, 'http://127.0.0.1');
        console.log('url.searchParams=' + searchParams, 'url.pathname=' + pathname);

        /*if (request.url.includes('?')) {
            const params = new URLSearchParams(url.split('?')[1]);
            for (const [key, value] of params) {
                console.log('key=' + key, 'value=' + value);
            }
        }*/

        response.setHeader('Content-Type', 'text/plain;charset=utf-8');

        if (method === 'GET' && pathname === '/login') {
            return response.end('登录成功');
        } else if (method === 'GET' && pathname === '/reg') {
            return response.end('注册成功');
        }

        response.end('你好，Hello World!');
    }
)

// 监听端口号，启动服务
server.listen(3000, () => {
    console.log('服务已启动，请访问 http://127.0.0.1:3000');
});