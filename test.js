var test = require('tape');
var skeleton = require('./');
var fs = require('fs');

var triangle = JSON.parse(fs.readFileSync(__dirname + '/fixtures/in/triangle.geojson'));
var rectangle = JSON.parse(fs.readFileSync(__dirname + '/fixtures/in/rectangle.geojson'));
var convex = JSON.parse(fs.readFileSync(__dirname + '/fixtures/in/convex.geojson'));
var concave = JSON.parse(fs.readFileSync(__dirname + '/fixtures/in/concave.geojson'));
var romania = JSON.parse(fs.readFileSync(__dirname + '/fixtures/in/romania.geojson'));

test('skeleton', function (t) {
	var triskel = skeleton(triangle);

	var rectskel = skeleton(rectangle);

	t.end();
});