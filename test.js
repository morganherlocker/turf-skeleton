var test = require('tape');
var skeleton = require('./');
var fs = require('fs');

var triangle = JSON.parse(fs.readFileSync(__dirname + '/fixtures/in/triangle.geojson'));
var rectangle = JSON.parse(fs.readFileSync(__dirname + '/fixtures/in/rectangle.geojson'));

test('skeleton', function (t) {
	var triskel = skeleton(triangle);

	var rectskel = skeleton(rectangle);

	t.end();
});