const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const adapter = new FileSync(__dirname + '/db.json');

// 获取db对象
const db = low(adapter)
// 初始化数据
db.defaults({posts: [], user: {}, accounts: []}).write()

// 写入数据
db.get('posts')
    .push({id: 1, title: 'lowdb is awesome'})
    .write()

db.set('user.name', 'typicode')
    .write()

// 获取数据
const post = db.get('posts')
    .find({id: 1})
    .value()
console.log(post)

// 更新数据
db.get('posts').find({id: 1})
    .assign({title: 'flyin is awesome'})
    .write()

// 删除数据
const postRemoved = db.get('posts')
    .remove({id: 1})
    .write()
console.log(postRemoved)