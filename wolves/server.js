var hapi = require('hapi');
var moonboots = require('moonboots_hapi');

var server = hapi.createServer(8080, 'localhost');

server.pack.register({
	plugin: moonboots,
	options: {
		appPath: '/{p*}',  // wildcard handler for routing to configure hapi
		moonboots: {
			main: __dirname + '/client/app.js',  // main entry point for entire app
			developmentMode: true
		}
	}
}, function () {
	server.start();
	console.log('wolves running at http://localhost:8080');
});
