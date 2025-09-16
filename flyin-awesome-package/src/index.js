const helloWorld = require('./helloWorld');
const welcome = require('./welcome');

module.exports = {
    helloWorld,
    welcome: welcome.printMsg
};
