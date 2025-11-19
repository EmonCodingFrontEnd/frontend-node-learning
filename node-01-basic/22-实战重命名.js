import fs from "fs";

const files = fs.readdirSync('./')
if (files) {
    files.forEach(file => {
        if (!file.endsWith('.js')) {
            return;
        }
        let [seqNo, name] = file.split('-');
        let category = seqNo.slice(0, 1);
        logPrettier(file, category);
    });
}

function logPrettier(fileName, category) {
    const timestamp = new Date().toLocaleTimeString();
    const colors = {
        '0': '\x1b[36m', // 青色
        '1': '\x1b[32m', // 绿色
        '2': '\x1b[33m', // 黄色
    };

    const reset = '\x1b[0m';
    const color = colors[category] || '\x1b[37m';

    console.log(
        `${color}[${timestamp}] ${category.padEnd(16)} ${fileName.padEnd(26)} ${reset}`
    );
}