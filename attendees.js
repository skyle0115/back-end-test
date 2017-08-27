const users = require('./user');
module.exports = [
    {
        ...users[0],
        canceled: false
    }, {
        ...users[1],
        canceled: true
    }, {
        ...users[2],
        canceled: false
    }, {
        ...users[3],
        canceled: false
    }
];
