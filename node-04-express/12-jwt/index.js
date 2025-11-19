const jwt = require('jsonwebtoken');

// 生成token
let token = jwt.sign({username: 'flyin'}, 'flyin', {expiresIn: 60})
console.log(token)

token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VybmFtZSI6ImZseWluIiwiaWF0IjoxNzYzMzg5MTkyLCJleHAiOjE3NjMzODkyNTJ9.uzpv6LS_Ef1PtJbvyGjRdIYxjz8FXcXpDe9_awBe8Js";
// 验证token
jwt.verify(token, 'flyin', function (err, decoded) {
    if (err) {
        console.log('验证失败', err)
    } else {
        console.log('验证成功', decoded)
    }
})
