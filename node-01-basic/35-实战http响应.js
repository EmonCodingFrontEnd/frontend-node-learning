// 导入 http 模块
const http = require('http');

// 创建服务对象
const server = http.createServer(
    (request, response) => {
        // 设置响应头
        response.setHeader('Content-Type', 'text/html;charset=utf-8');

        // 设置响应体
        response.write(`
            <!doctype html>
            <html lang="en">
            <head>
                <meta charset="UTF-8">
                <meta name="viewport"
                      content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <title>Document</title>
                <style>
                    table {
                        border-collapse: collapse;
                        border-spacing: 0;
                        border: 1px solid #999;
                    }
                    table tr:nth-child(odd) {
                        background: #4ecdc4;
                    }
                    table tr:nth-child(even) {
                        background: skyblue;
                    }
                    td {
                        border: 1px solid #999;
                        width: 80px;
                        height: 40px;
                    }
                </style>
            </head>
            <body>
                <table>
                    <tr><td>1</td><td></td><td></td></tr>
                    <tr><td>2</td><td></td><td></td></tr>
                    <tr><td>3</td><td></td><td></td></tr>
                    <tr><td></td><td></td><td></td></tr>
                </table>
                <script>
                    function getPastelColor() {
                        const h = Math.floor(Math.random() * 360);
                        const s = 40 + Math.floor(Math.random() * 30);
                        const l = 75 + Math.floor(Math.random() * 15);
                        return 'hsl(' + h + ',' + s + '%,' + l + '%)';
                    }
                    
                    let ids = document.querySelectorAll("tr")
                    ids.forEach(item=>{
                        item.onclick = function (){
                            this.style.background = getPastelColor();
                        }
                    })
                </script>
            </body>
            </html>
        `);
        response.end();
    }
)

// 监听端口号，启动服务
server.listen(3000, () => {
    console.log('服务已启动，请访问 http://127.0.0.1:3000');
});