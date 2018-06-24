var sum = require('../src/Lab1.js');
var assert = require('assert');

describe('Count Spaces', function() {

	describe('Zero Case', function() {

		it('count spaces in the string', function() {
			assert.equal(sum.spaces(''), 0);
		});

		it('Check Null', function() {
			assert.equal(sum.spaces(), 0);
		});
	});

	describe('Regular Case', function() {

		it('when string is "hello world"', function() {
			assert.equal(sum.spaces('hello world'), 1);
		});

		it('when stribg is "hello my world"', function() {
			assert.equal(sum.spaces('hello my world'), 2);
		});
	});

});