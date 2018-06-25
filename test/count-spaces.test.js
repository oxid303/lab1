var sum = require('../src/Lab1.js');
var assert = require('assert');

describe('Count Spaces', function() {

	describe('Zero Case', function() {

		it('Check Null', function() {
			assert.equal(sum.spaces(), 0);
		});

		it('When string is empty', function() {
			assert.equal(sum.spaces(''), 0);
		});
	});

	describe('Regular Case', function() {

		it('When string is "hello world"', function() {
			assert.equal(sum.spaces('hello world'), 1);
		});

		it('When string is "enter your string"', function() {
			assert.equal(sum.spaces(' enter your  string '), 5);
		});
	});

	describe('Not String Case', function() {

		it('When param is True', function() {
			assert.equal(sum.spaces(true), 0);
		});

		it('When param is False', function() {
			assert.equal(sum.spaces(false), 0);
		});

		it('When param is Undefined', function() {
			assert.equal(sum.spaces(undefined), 0);
		});

		it('When param is Number', function() {
			assert.equal(sum.spaces(100500), 0);
		});

		it('When param is Object', function() {
			assert.equal(sum.spaces({}), 0);
		});

		it('When param is Function', function() {
			assert.equal(sum.spaces(function(){}), 0);
		});
	});
});