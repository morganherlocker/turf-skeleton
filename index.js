var destination = require('turf-destination');
var bearing = require('turf-bearing');
var extent = require('turf-extent');
var distance = require('turf-distance');
var point = require('turf-point');

module.exports = function (poly) {
	var hull = poly;
	if(hull.type === 'Feature') hull = poly.geometry;
	if(hull.type !== 'Polygon') throw new Error('Invalid input. Skeletons require polygon features or geometries.');

	var bbox = extent(hull);
	var horizontalDistance = distance(point([bbox[0], bbox[1]]), point([bbox[0], bbox[2]]), 'miles');
	var verticalDistance = distance(point([bbox[0], bbox[1]]), point([bbox[1], bbox[1]]), 'miles');
	var raydist = Math.max(horizontalDistance, verticalDistance) * 2;
}