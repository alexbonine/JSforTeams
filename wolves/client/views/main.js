var View = require('ampersand-view');
var ViewSwitcher = require('ampersand-view-switcher');
var dom = require('ampersand-dom');
var templates = require('../templates');

module.exports = View.extend({
	template:  templates.body,
	autoRender: true,
	events: {
		'click a[href]': 'handleLinkClick'
	},
	initialize: function () {
		this.listenTo(app.router, 'page', this.handlePage)  // same thing except for prevents memory leaks if unregister 'this' as app.router.on('page', this.handlePage, this);
	},
	render: function () {
		this.renderWithTemplate();

		this.pages = new ViewSwitcher(this.getByRole('page-container'));
	},
	handlePage: function (pageView) {
		this.pages.set(pageView);
		this.setActiveNavItem();
	},
	handleLinkClick: function (event) {           // prevents reloading page when clicking local link
		var aTag = event.target;

		if (aTag.host === location.host && !event.ctrlKey && !event.metaKey && !event.shiftKey) {   // check for internal click
			event.preventDefault();
			app.router.history.navigate(aTag.pathname, { trigger: true });
		}
	},
	setActiveNavItem: function () {
		var path = window.location.pathname;

		this.getAll('[role=nav-items] a').forEach(function (aTag) {
			if (aTag.pathname === path) {
				dom.addClass(aTag.parentNode, 'active');  // modern browsers could use '.classList.add('active')'
			} else {
				dom.removeClass(aTag.parentNode, 'active');
			}
		});
	}
})