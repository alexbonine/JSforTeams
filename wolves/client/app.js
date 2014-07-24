var domready = require('domready');
var MainView = require('./views/main');  // relative path
var Router = require('./router');

window.app = {
	init: function () {
		var self = this;

		this.router = new Router();

		domready(function () {              // only use for view stuff
			self.view = new MainView({
				el: document.body
			});
			
			self.router.history.start({ pushState: true });  // pushState true says to use real URLs instead of hashs; add '{ trigger: true }' to change URL
		});
	}
};

window.app.init();