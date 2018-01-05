var request = require('request');
var expect = require('chai').expect;
var concert = require('../models/concert');

describe('Concerts', function() {
	it('should contain \'concerts\'', function(done) {
		request('http://localhost:3000/api/concerts', function(err, res, body) {
			expect(body).to.contain('concerts');
			done();
		});
	});
	it('should contain at least one concert', function(done) {
		request('http://localhost:3000/api/concerts', function(err, res, body) {
			expect(JSON.parse(body).concerts.length).to.be.at.least(1);
			done();
		});
	});
});
describe('Concerts read :id', function() {
	it('should have an _id of 0', function(done) {
		request('http://localhost:3000/api/concerts/0', function(err, res, body) {
			expect(JSON.parse(body)._id).to.equal(0);
			done();
		});
	});
});