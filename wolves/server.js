// installed packages: hapi, moonboots-hapi, domready, getconfig, templatizer, moment, lemur-howler,
//     ampersand-view, ampersand-model, ampersand-router, ampersand-view-switcher, ampersand-dom, ampersand-rest-collection

var hapi = require('hapi');
var moonboots = require('moonboots_hapi');
var config = require('getconfig');  // reads based on environment, in our case: dev_config.json 
var templatizer = require('templatizer');

var server = hapi.createServer(8080, 'localhost');

server.pack.register({
	plugin: moonboots,
	options: {
		appPath: '/{p*}',  // wildcard handler for routing to configure hapi
		moonboots: {
			main: __dirname + '/client/app.js',  // main entry point for entire app
			developmentMode: config.isDev,
			stylesheets: [
				__dirname + '/public/css/bootstrap.css'
			],
			beforeBuildJS: function () {
				if (config.isDev) {
					templatizer(__dirname + '/templates', __dirname + '/client/templates');  // compiles jade templates, generating this file
				}
			}
		}
	}
}, function () {
	server.start();
	console.log('wolves running at http://localhost:8080');
});