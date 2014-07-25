var View = require('ampersand-view');
var templates = require('../templates');

module.exports = View.extend({
	template: templates.includes.newHowl,
	autoRender: true,
	events: {
		'submit [role=new-howl]': 'createNewHowl'
	},
	createNewHowl: function (event) {
		event.preventDefault();
		var self = this;

		var howl = app.howls.create({
			content: this.get('[name=content]').value,
			createdAt: new Date()
		},
		{
			wait: true, // tells collection to only add it to the collection if it saves
			success: function () {
				self.get('[name=content]').value = '';
			},
			fail: function () {
				alert('No howl for you!');
			}
		});
	}
});