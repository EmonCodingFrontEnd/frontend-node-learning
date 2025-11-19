// buffer与字符串的转换
let buffer = Buffer.from('hello world');
console.log(buffer.toString()); // hello world

console.log(buffer[0].toString()) // 104
buffer[0] = 0x61;
console.log(buffer.toString()); // aello world

console.log('----------华丽的分隔线----------')

// 溢出
buffer = Buffer.from('hello');
buffer[0] = 361 // 361的二进制 1 0110 1001 =>舍弃高位的1，转为8位二进制 0110 1001 => 对应ASCII的105，也就是 i
console.log(buffer.toString()) // iello

console.log('----------华丽的分隔线----------')

// 中文
buffer = Buffer.from('中文'); // UTF-8编码，对应6个字节
console.log(buffer)