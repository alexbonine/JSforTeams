var Model = require('ampersand-model');
var querystring = require('querystring');

module.exports = Model.extend({
    props: {
        id: 'number',
        age: 'number',
        name: 'string',
        latitude: 'number',
        longitude: 'number'
    },
    session: {
        size: ['string', true, '200x200'],
        zoom: ['number', true, 7],
        key: ['string', true, 'AIzaSyBMMJfzDkhIDbOFR_TYDRmCWWSqQK0rapY']
    },
    derived: {
        title: {
            deps: ['name', 'age'],
            fn: function () {
                return this.name + ', ' + this.age;
            }
        },
        map: {
            deps: ['latitude', 'longitude', 'size', 'zoom', 'key'],
            fn: function () {
                if (!this.latitude || !this.longitude) {
                    return 'http://placehold.it/200x200';
                } else {
                    return 'http://maps.googleapis.com/maps/api/staticmap?' +
                        querystring.stringify({
                            center: this.latitude + ',' + this.longitude,
                            markers: this.latitude + ',' + this.longitude,
                            size: this.size,
                            zoom: this.zoom,
                            key: this.key
                        });
                }
            }
        }
    }
});