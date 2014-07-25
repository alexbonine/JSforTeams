var MainView = require('./views/main');
var domready = require('domready');
var Me = require('./models/me');

window.app = {
    init: function () {
        var self = this;

        this.me = new Me();
        this.me.fetch();

        domready(function () {
            self.view = new MainView({
                model: self.me,
                el: document.body
            });
        });
    }
};

window.app.init();
