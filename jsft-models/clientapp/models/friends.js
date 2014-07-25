var Collection = require('ampersand-rest-collection');
var Wolf = require('./wolf');

module.exports = Collection.extend({
    model: Wolf,
    initialize: function () {
        this.page = 0;

        var self = this;
        this.parent.on('change:size', function (parent, value) {
        	self.each(function (model) {
        		model.size = value;
        	});
        });
    },
    url: function () {
        this.page++;
        return '/api/friends/' + Math.min(this.page, 2) + '.json';
    }
});
