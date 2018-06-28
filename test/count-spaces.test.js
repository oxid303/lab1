var sum = require('../src/Lab1.js');
var assert = require('assert');

describe('Count Spaces', function() {

	describe('Zero Case', function() {

		it('Check Null', function() {
			assert.equal(sum.countSpaces(), 0);
		});

		it('When string is empty', function() {
			assert.equal(sum.countSpaces(''), 0);
		});
	});

	describe('Regular Case', function() {

		it('When string is "simple text"', function() {
			assert.equal(sum.countSpaces('simple text'), 1);
		});

		it('When string is " random  spaces  "', function() {
			assert.equal(sum.countSpaces(' random  spaces  '), 5);
		});
	});

	describe('Not String Case', function() {

		it('When param is True', function() {
			assert.equal(sum.countSpaces(true), 0);
		});

		it('When param is False', function() {
			assert.equal(sum.countSpaces(false), 0);
		});

		it('When param is Undefined', function() {
			assert.equal(sum.countSpaces(undefined), 0);
		});

		it('When param is Number', function() {
			assert.equal(sum.countSpaces(100500), 0);
		});

		it('When param is Object', function() {
			assert.equal(sum.countSpaces({}), 0);
		});

		it('When param is Function', function() {
			assert.equal(sum.countSpaces(function(){}), 0);
		});
	});
});