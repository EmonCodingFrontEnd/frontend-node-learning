// 导入 http 模块
const http = require('http');
const {readFile} = require("fs");
const path = require('path');
const mimes = {html: 'text/html', css: 'text/css', js: 'text/javascript', stream: 'application/octet-stream'}

// 创建服务对象
const server = http.createServer(
    (request, response) => {
        if (request.method !== 'GET') {
            response.setHeader('Content-Type', 'text/html;charset=utf-8');
            response.statusCode = 405;
            response.statusMessage = 'method not allowed';
            return response.end(`<h1>请求方法不允许</h1>`);
        }

        let {pathname} = new URL(request.url, `http://${request.headers.host}`);
        pathname = decodeURI(pathname);
        if (pathname.includes("com.chrome.devtools.json")) {
            return response.end('');
        }

        let filePath = __dirname + pathname;
        if (pathname === '/') {
            filePath = __dirname + '/37-实战http响应_页面.html';
            // 不需要设置具体的应答头，也可以；至于中文编码，在应答的html页面内容中有设置
            /*    response.setHeader('Content-Type', 'text/html;charset=utf-8');
            } else if (pathname.endsWith(".css")) {
                response.setHeader('Content-Type', 'text/css;charset=utf-8');
            } else if (pathname.endsWith(".js")) {
                response.setHeader('Content-Type', 'text/javascript;charset=utf-8');
            } else {
                response.setHeader('Content-Type', 'text/html;charset=utf-8');
                response.statusCode = 404;
                response.statusMessage = 'resources not found';
                response.write(`<h1>${htmlFile} Not Found</h1>`);
                response.end();
                return;*/
        }

        // 虽然浏览器会自动猜测媒体类型，但主动设置会更好
        let ext = path.extname(filePath).slice(1);
        let type = mimes[ext] || mimes['stream'];
        if (ext === 'html') {
            // 只对html文件设置编码即可，其他资源会使用浏览器编码（html这个容器体的编码)
            response.setHeader('Content-Type', type + ';charset=utf-8');
        } else {
            response.setHeader('Content-Type', type);
        }

        readFile(filePath, (err, data) => {
            if (err) {
                // https://nodejs.org/docs/latest/api/errors.html 错误码参考地址
                console.log(err);
                response.setHeader('Content-Type', 'text/html;charset=utf-8');
                if (err.code === 'ENOENT') {
                    response.statusCode = 404;
                    response.statusMessage = 'resources not found';
                    return response.end(`<h1>${filePath} Not Found</h1>`);
                } else {
                    response.statusCode = 500;
                    response.statusMessage = 'server error';
                    return response.end(`<h1>Server Error</h1>`);
                }
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