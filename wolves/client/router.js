var Router = require('ampersand-router');
var HomePage = require('./pages/home');
var HowlsPage = require('./pages/howls');

module.exports = Router.extend({
	routes: {                        // urls we want to match handler to
		'': 'home',
		'howls': 'howls'
	},

	home: function () {
		this.trigger('page', new HomePage());  // trigger is from emitter that is dependency of ampersand packages
	},
	howls: function () {
		this.trigger('page', new HowlsPage());
	}
});