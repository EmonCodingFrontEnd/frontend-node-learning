let buffer01 = Buffer.alloc(10);
console.log(buffer01)

let buffer02 = Buffer.allocUnsafe(10);
console.log(buffer02)

let buffer03 = Buffer.from([1, 2, 3]);
console.log(buffer03)

let buffer04 = Buffer.from('hello');
console.log(buffer04)