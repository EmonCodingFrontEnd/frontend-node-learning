module.exports = (req, res, next) => {
    const delay = Math.floor(Math.random() * 1000);
    console.log(`请求: ${req.method} ${req.url} - 延迟 ${delay}ms`);
    setTimeout(next, delay);
};