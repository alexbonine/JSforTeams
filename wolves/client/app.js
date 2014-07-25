var domready = require('domready');
var MainView = require('./views/main');  // relative path
var Router = require('./router');
var Howls = require('./models/howls');
var Me = require('./models/me');

window.app = {
	init: function () {
		var self = this;

		this.me = new Me();

		this.howls = new Howls();
		this.howls.fetchRealtime();

		this.router = new Router();

		domready(function () {              // only use for view stuff
			self.view = new MainView({
				el: document.body
			});
			
			self.router.history.start({ pushState: true });  // pushState true says to use real URLs instead of hashs; add '{ trigger: true }' to change URL
			self.me.fetch();
		});
	}
};

window.app.init();