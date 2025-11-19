// node-01-basic/37-实战http响应_页面.js
function getPastelColor() {
    const h = Math.floor(Math.random() * 360);
    const s = 40 + Math.floor(Math.random() * 30);
    const l = 75 + Math.floor(Math.random() * 15);
    return `hsl(${h}, ${s}%, ${l}%)`;
}

let ids = document.querySelectorAll("tr")
ids.forEach(item => {
    item.onclick = function () {
        this.style.background = getPastelColor();
    }
})