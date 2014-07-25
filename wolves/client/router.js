var Router = require('ampersand-router');
var HomePage = require('./pages/home');
var HowlsPage = require('./pages/howls');
var querystring = require('querystring');  // node js that browserify lets us use

module.exports = Router.extend({
	routes: {                        // urls we want to match handler to
		'': 'home',
		'howls': 'howls',
		'auth/login': 'login',
		'auth/callback': 'authCallback'
	},

	home: function () {
		this.trigger('page', new HomePage());  // trigger is from emitter that is dependency of ampersand packages
	},
	howls: function () {
		this.trigger('page', new HowlsPage());
	},
	login: function () {
		var redirect = window.location.origin + '/auth/callback';
		redirect = encodeURIComponent(redirect);
		window.location = 'http://wolves.technology/authorize?redirect_uri=' + redirect;
	},
	authCallback: function () {
		var hash = window.location.hash;
		var params = querystring.parse(hash.substr(1));

		app.me.accessToken = params.access_token;
		this.redirectTo('/howls');  // like navigateTo but ignores previous page
	}
});