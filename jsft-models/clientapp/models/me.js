var Wolf = require('./wolf');
var Friends = require('./friends')

module.exports = Wolf.extend({
    url: '/api/me.json',
    session: {
    	isMe: ['boolean', true, true]
    },
    collections: {
    	friends: Friends
    }
});
