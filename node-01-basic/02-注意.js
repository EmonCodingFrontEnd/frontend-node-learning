// BOM
try {
    console.log(window)
} catch (e) {
    console.log('不支持 window')
}
try {
    console.log(navigator)
} catch (e) {
    console.log('不支持 navigator')
}
try {
    console.log(location)
} catch (e) {
    console.log('不支持 location')
}

// DOM
try {
    console.log(document)
} catch (e) {
    console.log('不支持 document')
}
try {
    new XMLHttpRequest()
} catch (e) {
    console.log('不支持 XMLHttpRequest')
}

// 支持定时器
try {
    setTimeout(() => {
        console.log('支持定时器')
    }, 0)
} catch (e) {
    console.log('不支持 setTimeout')
}
try {
    console.log('支持 globalThis 其指向 global 嘛？', globalThis === global) // ES2020
} catch (e) {
    console.log('不支持 globalThis')
}