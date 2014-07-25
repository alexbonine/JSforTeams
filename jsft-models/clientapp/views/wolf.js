var View = require('ampersand-view');
var WolfTemplate = require('../templates/wolf.jade');

module.exports = View.extend({
    template: WolfTemplate,
    autoRender: true,
    events: {
        'input input[role]': 'changePropByRole'
    },
    bindings: {
        'model.title': {
            role: 'name'
        },
        'model.map': {
            type: 'attribute',
            name: 'src',
            role: 'map'
        },
        'model.zoom': {
            type: 'value',
            role: 'zoom'
        },
        'model.latitude': {
            type: 'value',
            role: 'latitude'
        },
        'model.longitude': {
            type: 'value',
            role: "longitude"
        }
    },
    changePropByRole: function (event) {
        var role = event.target.getAttribute('role');
        var value = parseFloat(event.target.value);

        this.model[role] = value;
    }
});