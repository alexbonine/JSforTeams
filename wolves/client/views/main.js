var View = require('ampersand-view');
var ViewSwitcher = require('ampersand-view-switcher');
var templates = require('../templates');

module.exports = View.extend({
	template:  templates.body, //'<body><h2>Wolves</h2><main role="page-container"></main></body>',
	autoRender: true,
	initialize: function () {
		this.listenTo(app.router, 'page', this.handlePage)  // same thing except for prevents memory leaks if unregister 'this' as app.router.on('page', this.handlePage, this);
	},
	render: function () {
		this.renderWithTemplate();

		this.pages = new ViewSwitcher(this.getByRole('page-container'));
	},
	handlePage: function (pageView) {
		this.pages.set(pageView);
	}
})